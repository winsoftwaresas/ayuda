const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const path = require('path');
const yaml = require('js-yaml');

function getSiteVersion() {
  try {
    // Apuntamos a _data/changelog.yml
    const changelogPath = path.join(__dirname, '_data', 'changelog.yml');
    
    if (fs.existsSync(changelogPath)) {
      const changelog = yaml.load(fs.readFileSync(changelogPath, 'utf8'));
      
      // Buscamos el primer elemento que tenga la propiedad 'number'
      // Esto ignora versiones antiguas o registros incompletos
      const latestVersionEntry = changelog.find(entry => entry.number);

      if (latestVersionEntry) {
        let version = String(latestVersionEntry.number);
        // Retorna v1.7 (limpiando prefijos si existieran)
        return `v${version.replace(/^Version\s+/, '').trim()}`;
      }
    }
    
    console.warn('No se encontró la llave "number" en changelog.yml. Usando v1.0 por defecto.');
    return 'v1.0';
    
  } catch (e) {
    console.error('Error al leer _data/changelog.yml:', e);
    return 'v1.0';
  }
}

function getSiteConfig() {
  try {
    const configPath = path.join(__dirname, '_config.yml');
    const config = yaml.load(fs.readFileSync(configPath, 'utf8'));
    const title = config.title || 'Manual';
    const version = config.version || '1.0';
    const company = config.company || 'Win Software SAS';
    return { title, version, company };
  } catch (e) {
    console.error('Error al leer _config.yml:', e);
    return { title: 'Manual', version: '1.0', company: '' };
  }
}

const { title, version, company } = getSiteConfig();
const siteVersion = getSiteVersion();
const baseUrl = 'http://localhost:4000';

async function generatePDF(url, outputPath) {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    await page.evaluate(() => {
      const navbar = document.querySelector('[data-uk-sticky]');
      if (navbar) {
        navbar.style.display = 'none';
      }
    });

    const documentTitle = await page.evaluate(() => {
      const titleElement = document.querySelector('.uk-article-title');
      return titleElement ? titleElement.innerText : 'Manual de Usuario';
    });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '600px',
        bottom: '150px',
        left: '2cm',
        right: '2cm'
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div class="uk-text-muted" style="font-size:10px; text-align:center; width:100%; border-bottom:2px solid #efefef; margin: 2mm 15mm; padding-bottom:3mm;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="color: #8f919e;">${title} | ${documentTitle}</span>
            <span style="color: #8f919e;">v${version}</span>
          </div>
        </div>
      `,
      footerTemplate: `
        <div class="uk-text-muted" style="font-size:10px; text-align:center; width:100%; border-top: 2px solid #efefef; margin: 0 15mm; padding-top:3mm;">
          <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <span style="color: #8f919e;">${company}</span>
            <span style="color: #8f919e;"><span class="pageNumber"></span> / <span class="totalPages"></span></span>
          </div>
        </div>`,
    });

    console.log(`PDF generado: ${outputPath}`);
  } catch (error) {
    console.error(`Error al generar PDF para ${url}:`, error);
  } finally {
    await browser.close();
  }
}

async function generateAllPDFs() {
  const docsDir = path.join(__dirname, 'docs', 'docs');
  const pdfTmpDir = path.join(__dirname, 'pdf_tmp', siteVersion);

  try {
    await fs.ensureDir(pdfTmpDir);

    const files = await fs.readdir(docsDir);
    
    for (const file of files) {
      if (file && !file.includes('_00')) {
        const baseName = path.basename(file, '.html');
        const url = `${baseUrl}/docs/${baseName}/index`;
        const outputPath = path.join(pdfTmpDir, `${file}.pdf`);
        
        console.log(`Generando PDF para ${file}...`);
        await generatePDF(url, outputPath);
      }
    }

    console.log('Todos los PDFs han sido generados exitosamente!');
  } catch (error) {
    console.error('Error durante la generación de PDFs:', error);
  }
}

const { PDFDocument } = require('pdf-lib');

async function mergePDFs(pdfDir, outputFileName) {
    const pdfFiles = await fs.readdir(pdfDir);
    const mergedPdf = await PDFDocument.create();
  
    for (const file of pdfFiles) {
      const filePath = path.join(pdfDir, file);
      const filePdf = await PDFDocument.load(await fs.readFile(filePath));
  
      const copiedPages = await mergedPdf.copyPages(filePdf, filePdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
  
    const mergedPdfBytes = await mergedPdf.save();
    await fs.writeFile(outputFileName, mergedPdfBytes);
  
    console.log(`PDF unificado generado: ${outputFileName}`);
}

async function moveFiles(sourceDir, targetDir) {
  try {
    await fs.ensureDir(targetDir);
    const files = await fs.readdir(sourceDir);
    
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);
      await fs.move(sourcePath, targetPath, { overwrite: true });
    }

    console.log(`Archivos movidos de ${sourceDir} a ${targetDir}`);
  } catch (error) {
    console.error(`Error moviendo archivos de ${sourceDir} a ${targetDir}:`, error);
  }
}

async function main() {
    await generateAllPDFs(); // Primero genera todos los PDFs en pdf_tmp
    const siteTitle = 'AM';
    const siteVersion = getSiteVersion();
    const mergedPdfName = `${siteTitle} - ${siteVersion}.pdf`;
  
    const pdfTmpDir = path.join(__dirname, 'pdf_tmp', siteVersion);
    const pdfDir = path.join(__dirname, 'pdf', siteVersion);
    const outputFileName = path.join(__dirname, 'pdf', mergedPdfName);
  
    await mergePDFs(pdfTmpDir, outputFileName);
    await moveFiles(pdfTmpDir, pdfDir); // Mueve los archivos de pdf_tmp a pdf
}  

main().catch(console.error);