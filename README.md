# Docs is a premium documentation Jekyll theme

Desk was developed by [Unbound Studio](https://unbound.studio).

## Editar registro de cambios

[_Changelog](https://github.com/winsoftwaresas/ayuda/tree/main/_changelogs)

## Editar línea de tiempo

[_data/changelog.yml](https://github.com/winsoftwaresas/ayuda/blob/main/_data/changelog.yml)

## Installation

Install the dependencies with [Bundler](http://bundler.io/):

```bash
bundle install
```

Run the following to generate your site:
```bash
bundle exec jekyll serve
```

You can find more on [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

## Setup

### Site and author details
Add your site and author details in `_config.yml`:
```yaml
# Site title and description
title:              Docs
description:        Documentation Jekyll theme.
lang:               en

# Site subpath, e.g. /blog
baseurl:            ""

# Permalink URLs structure, for permalink style options see: https://jekyllrb.com/docs/permalinks/
permalink:          /:title/

# Site base hostname & protocol, e.g. http://example.com
url:                ""

# Site logo # e.g. logo.png, upload logo image file to /uploads/ folder
logo:               

navbar:
  search:           true;
  
# Default author settings
author:
    name:           Pete Seth
    title:          Lead Developer  
    avatar:         avatar-tom.png
```

## Customization

To modify the primary color, open `/_sass/theme/variables.scss` and replace the color values e.g.:

```scss
$global-primary-background:                   #05c896;
```

Further style customisation can be done in the following files:
```
/_sass/theme/mixins.scss
/_sass/theme/variables.scss
/assets/css/main.scss
```

## Development

Install [UIkit](https://getuikit.com/) font end framework dependency via Npm:
```bash
npm install
```
Enable live browser reload with the following:
```bash
bundle exec jekyll s --livereload
```

## Crear PDF de cada publicación

1. Ingresa al proyecto en VSCode
2. Abre la terminal `Ctrl + ñ`
2. Invoca el siguiente comando para iniciar el proyecto local
```bash
bundle exec jekyll serve
```
3. Abre una nueva terminal `Ctrl + Shift + ñ`
4. Invoca el siguiente comando para iniciar el proceso de creación de PDFs
```bash
npm run pdf
```
5. Espera a que el proceso culmine y verifica los archivos generados en el directorio `pdf/`

> Ten presente que se genera un directorio exclusivo para cada versión del sitio. La versión se modifica en el archivo `_config.yml`. De igual manera se crea un archivo final con todo el contenido del manual que se encuentra en el directorio `pdf/AM - v[#]`. Este archivo lo puedes compartir con los usuarios ya que contiene todo el sitio en PDF.

## Credits and Sources

- Google analytics https://www.google.com/analytics/
- Google maps https://www.google.com/maps
- UIkit front end framework https://getuikit.com/
- Jekyll CML https://jekyllrb.com/

## Support
Customer support is provided through our Envato item page [contact form](https://themeforest.net/item/docs-responsive-documentation-manual-jekyll-theme/21131076/support) for up to six months from the purchase date and is provided Monday to Friday during the business week. We aim to answer all support requests daily, most are handled within 24h.

## Documentation
Full documentation can be found here: [https://jekyll-theme-docs.netlify.com/docs/installation/](https://jekyll-theme-docs.netlify.com/docs/installation/).
