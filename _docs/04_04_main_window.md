---
title: Ventana Principal de Almacén de Repuestos
subtitle: Se explican los comandos y ventanas del módulo. 
tags:
  - setup
author: win
order: '04_04'
date: 2022-11-10T20:17:34.887Z
---
# Ventana Principal de Almacén de Repuestos

![Procesar imagen](../../assets/images/cap04/chp04_img01.png)
_**Imagen 1.** Menú Almacenes_

 Al sobreponer el cursor en el módulo de <a class="btn blue">almacén</a> se listan los almacenes creados en la tabla de Almacenes de la Infraestructura y cuando se elige un Almacén, el sistema muestra al lado izquierdo del nombre del respectivo almacén un <span class="mdi mdi-check-circle"></span> en color verde y en frente en azul, el aviso <a class="btn blue">seleccionado</a>.

![Procesar imagen](../../assets/images/cap04/chp04_img02.png)
_**Imagen 2.** Ventana Principal Repuestos_

A esta ventana se llega haciendo clic sobre la opción <a class="btn blue">almacén</a>  del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los Almacenes de Repuestos para Mantenimiento. A continuación se ilustran las porciones que la componen.

## Ventana Visor

![Procesar imagen](../../assets/images/cap04/chp04_img02.png)
_**Imagen 3.** Ventana Visor_

Desde esta ventana es posible observar los Repuestos existentes. Se listan todos o un Subgrupo de ellos. Es posible configurar el número de registros que  se muestran por página desde el menú <a class="btn blue">administración</a> en la opción  “Valores por Defecto” en la etiqueta **General**.

Al hacer clic sobre alguno de los Repuestos del Visor el sistema responde  mostrando  la información de ese Repuesto, en forma detallada, en una ventana llamada **Ventana Detalle**.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la  tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle

![Procesar imagen](../../assets/images/cap04/chp04_img04.png)
_**Imagen 4.** Ventana Detalle_ 

En la gráfica anterior, ventana Detalle de Materiales y Repuestos se aprecian todos sus componentes y su  respectivo contenido.
 
Se encuentra toda la información relevante sobre el Repuesto seleccionado en el Visor.
A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

### Información General

**Repuesto:** En este campo se registra el código del Repuesto, de acuerdo a la política de codificación que se haya definido.

**Descripción:** En este campo se registra la descripción del Repuesto en lenguaje natural.

**No Inv/Inv:** Define el tipo de Repuesto respecto a su connotación de Inventariado o No Inventariado.  Un ítem es inventariado si está codificado en el Almacén y sobre él existen políticas de inventarios y reaprovisionamiento. Es No inventariado si su uso es de solo una vez y de él no se van a realizar más compras. También puede ser No inventariado, en un almacén  particular, cuando se trata de un ítem   cuya  existencia, contablemente ya fue consumida, pero se almacena para ser consumido, por demanda, en un lapso corto.

**Descripción larga:** Este botón permite realizar una descripción larga del Repuesto. Para ello se abre una nueva ventana en la que se adicionan más de 200 caracteres.


![Procesar imagen](../../assets/images/cap04/chp04_img05.png)
_**Imagen 5.** Información General_

**Clase:** Es un campo que permite clasificar o agrupar los artículos del Almacén por un criterio particular para la Organización.

**Familia:** Es un campo que permite definir la familia a la cual pertenece el artículos del Almacén que se está definiendo.

**Grupo:** Es un campo que permite definir el grupo al cual pertenece el artículos del Almacén que se está definiendo.

**Parte Número:** Es un campo que permite definir la parte número del artículo del Almacén que se está definiendo.

**Casilla:** Es el campo en el que se establece la ubicación física del Repuesto dentro  del Almacén. Este campo permite cualquier nomenclatura de organización. Ejemplo. E21B (7,12) significaría Estante 21, lado B, posición matricial fila 7 columna 12.

**Existencia  Inventario:** Registra la  cantidad en  existencia en  el  Almacén del  Repuesto seleccionado. Este campo puede ser actualizado manualmente o en forma  automática a través del módulo de Kárdex de Repuestos. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él. También, al lado de este campo, el sistema muestra el Valor Total del inventario del Repuesto, que corresponde al producto de la  “Existencia Inventario” y el  “Costo Unitario Vigente”.

**Cantidad Reservada:** Informa la cantidad reservada del Repuesto seleccionado. Una reserva es una cantidad de la existencia actual del Repuesto, que se ha  comprometido para  ser  usada,  por  una  persona,  en  una  OT  particular  y la  separa  a  través de  la transacción **Reservas**. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Cantidad  Disponible:** Es  la  diferencia  entre   “Existencia  Inventario”  menos   “Cantidad Reservada”. Es la Cantidad Disponible para consumos de Mantenimiento. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Costo Unitario Vigente:** Este campo refleja siempre el Costo Unitario del Repuesto  seleccionado. Es  un valor  que  puede haber  sido  actualizado manualmente por  alguien que  tenía los permisos para hacerlo. Puede también haber sido actualizado  automáticamente por el sistema según  el  sistema de  costeo  definido para  el  almacén,  a través del  Kárdex  de Repuestos.

**FF Costeo:** Es la fecha en la que se hizo el último recálculo del costo unitario para el Repuesto seleccionado. Normalmente es la fecha en la que el Repuesto entró al almacén por última vez por medio de un concepto valorizado.

**Costo Última Compra:** Este campo registra la última compra del repuesto seleccionado del Almacén. Automatizando los movimientos de la compra través del Kárdex del Almacén.

**FF Última Compra:** Es la fecha de la última compra del Repuesto seleccionado del Almacén. Se actualiza automáticamente cuando tal movimiento de compra se efectuó a través del Kárdex del Almacén.

**FF Último Uso:** Es la fecha de la última salida del Repuesto seleccionado  del Almacén. Se actualiza automáticamente cuando tal movimiento de salida se  efectuó  a través del Kárdex de Almacén. En otro caso el sistema no actualiza este campo.

**Nivel de Existencia:** En este campo se define la cantidad o el nivel en existencia que siempre debe haber de ese Repuesto en el almacén seleccionado.

**Nivel Mínimo / Punto de Pedido:** Este campo registra  una  cantidad  que  tiene  un significado dependiendo del modelo de inventarios que maneje el Repuesto. En el  caso de que se trate de un Repuesto controlado bajo un modelo simple de Inventarios, o de Harris, este campo significa el punto en el nivel de Inventario en el que se debe iniciar una gestión que exige una cantidad mínima en existencia  permanentemente,  este campo denota esa cantidad mínima. En ningún caso este parámetro es recalculado por el sistema. 

**Nivel Máximo:** En este campo se define la cantidad o nivel máximo en existencia de ese Repuesto en el almacén seleccionado dependiendo del modelo simple de Inventario.

**Lote Óptimo a Comprar:** En este campo se define el parámetro de inventarios sobre la cantidad adecuada de compra, en cada proceso de re-abastecimiento. Este parámetro no es recalculado por el sistema.

**Período  de  Reaprovisionamiento:**  De  acuerdo  a  estadísticas  de  consumo  sobre  el Repuesto seleccionado, normalmente se establece en este campo el parámetro  indicativo del período normal de Reaprovisionamiento, acorde con el Lote Óptimo de  Compra y con la estadística de consumo. Este parámetro no es recalculado por el sistema. Al lado de este campo, el sistema muestra la palabra  “días” para indicar la unidad de medida del período de reaprovisionamiento.

**Unidad de Empaque:**  Es  la  unidad  de  compra, de  adquisición o  de  despacho por  parte  del proveedor. Ej. Caneca de 55 galones, o Caja por 24 unidades.

**Unidad de Consumo:** Es la unidad mediante la cual se le solicita al Almacén o mediante la cual el Almacén despacha un determinado artículo.  Ej. Galones o Unidades.

**Precio Venta 1, Precio Venta 2, Precio Venta 3:** Estos campos son utilizados de tipo información  para almacenar los precios actuales, anteriores y promedio del repuesto, estos campos son parametrizables en en el modúlo <a class="btn blue">administración</a> en la etiqueta **Almacén**, en la opción  “Manejo de Precios de Venta” y elegir la opción **“SI”**.


## Vistas Parciales / Pestañas

Las Vistas Parciales o Pestañas permiten complementar la información que se despliega normalmente sobre un Repuesto (**Información General**) con otro conjunto de información que solo se muestra cuando es necesario,  por solicitud del usuario. Las vistas parciales  disponibles son: Ficha técnica, Características Técnicas y Multimedia. 

### Ficha Técnica

En la pestaña de Ficha Técnica, se encuentra toda la información relevante del Repuesto seleccionado en el Visor.

![Procesar imagen](../../assets/images/cap04/chp04_img06.png)
_**Imagen 6.** Vistas Parciales - Ficha Técnica_

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Repuesto al cual se le está definiendo la información de la ficha técnica.

**Estado:** En este campo de opciones seleccionables es posible registrar el estado  del Repuesto: Activo, Vencido, EOI (Excedente Obsoleto o Inservible).

**TT por Uso:** En este campo se listan los tipos de trabajo para seleccionar el tipo de trabajo que clasifique el Repuesto.

**A, B, C, O:** Informa si el  repuesto se clasifica con  el  método  de Costos basado  en actividades  (ABC).  Este  campo  Clasificación  se  utilizara  a  futuro  para  el  manejo  de inventario rotativo. Su definición por defecto es O (significa Otro).

**Código de Barras Interno:** Si existe un código de barras interno dentro la  Organización para la codificación de Repuestos, se debe de ingresar en este campo.

**Código de Barras del Proveedor:** Se  refiere  al  Código de  Barras  del  Proveedor  que  se encuentra asociado al Repuesto.


**Proveedor 1, Proveedor 2, Proveedor 3:** En estos campos se pueden relacionar hasta 3 proveedores del Repuesto seleccionado.


**Referencia Proveedor 1, Referencia Proveedor 2,   Referencia Proveedor 3:** En estos campos se  registran las  referencias  con  las  que  cada  Proveedor  correspondiente  suministra  el   Repuesto seleccionado.

**Comentario:** Aquí se ingresan los comentarios sobre un Repuesto o se especifica información adicional al Repuesto. Este campo cuenta con un espacio de 220 caracteres.

### Características Técnicas

Esta opción permite definir para un determinado Repuesto las características técnicas que lo definen. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo las Características Técnicas que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de las características.

![Procesar imagen](../../assets/images/cap04/chp04_img07.png)
_**Imagen 7.** Vistas Parciales - Características Técnicas_

En la gráfica anterior, Vista Parcial de Características, se aprecian las dos columnas  de componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana de información adicional:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Repuesto al cual se le está definiendo la información de las características técnicas.

**Car. Técnica:** En este campo se lista las características técnicas definidas en la tabla de Infraestructura, para seleccionar aquellas que son  propias del Repuesto activo.

**Valor:** En  este campo se define  el  valor  de  la  característica correspondiente en la primera columna, en el cual es posible escribir su respectiva unidad de medida. 

Para ingresar una caracteristica técnica al Repuesto dar clic en el botón <a class="btn blue">Adicionar Car. Técnica</a>

A continuación se muestra el formulario para ingresar la Característica:

![Procesar imagen](../../assets/images/cap04/chp04_img08.png)
_**Imagen 8.** -Ingresar Característica - Formulario_

La Característica Técnica se debe de seleccionar del listado que corresponde a su respectiva tabla de Infraestructura - Características, una vez ingresado el valor se debe dar un clic en el botón  <span class="mdi mdi-plus-circle icon white"></span>. Automáticamente el sistema la registra en la tabla de **Car. Técnica**.

![Procesar imagen](../../assets/images/cap04/chp04_img09.png)
_**Imagen 9.** Adicionar Característica_

Para eliminar una registro se debe dar clic en el icono <span class="mdi mdi-delete"></span>. El sistema muestra un mensaje alerta para confirmar la transacción:

![Procesar imagen](../../assets/images/cap04/chp04_img10.png)
_**Imagen 10.** Adicionar Característica_

>**Nota:** Para asentar los cambios de alguna modificación, añadir o eliminar una característica se debe dar clic en el botón <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a>.


### Multimedia

![Procesar imagen](../../assets/images/cap04/chp04_img11.png)
_**Imagen 11.** Almacén - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al Repuesto en cada una de sus carpetas asignadas. Esta opción permite asociar al Repuesto uno o varios documentos, con el objetivo de facilitar o guiar el trabajo a realizar o detallarlo minuciosamente. AM acepta documentos de extensiones .DOC, XLS, PDF, JPG es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes. 

Los documentos anexos pueden contener ayudas necesarias en la ejecución de actividades e instalación del respectivo Repuesto, usos planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, procedimientos, listas de verificación, protocolos de prueba u otra información estándar para su utilización.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información del Repuesto, se deberán registrar así:

**Que Hacer:** Es la información general que aparece en cada pestaña con los campos bloqueados para que el usuario visualice la información básica del Repuesto.

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada al Repuesto. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas al Repuesto. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Repuesto. Ejemplo: Videos en formato wmv y mp4.


Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img12.png)
_**Imagen 12.** Almacén - Abrir Explorador Archivos_

A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn">abrir</a>.

![Procesar imagen](../../assets/images/cap04/chp04_img13.png)
_**Imagen 13.** Almacén  - Seleccionar Archivos_

De manera adicional u opcional se puede escribir un nombre en el siguiente campo para enfatizar de lo que trata el archivo:

![Procesar imagen](../../assets/images/cap04/chp04_img14.png)
_**Imagen 14.** Almacén  - Nombrar Archivo_

Para finalizar se debe de dar un clic en el el botón <a class="btn  blue">subir Archivo</a>. El sistema confirma a través de un mensaje que se ha subido el archivo satisfactoriamente.
 
Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre el nombre de una de las imágenes, se muestra la previsualización, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img15.png)
_**Imagen 15.** Almacén  - Previsualización de imagen_

Para desasociar un documento, o una imagen o un video, se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn white">Aceptar</a>.

![Procesar imagen](../../assets/images/cap04/chp04_img16.png)
_**Imagen 16.** Almacén - Desasociar un Archivo_

Si se desea descargar un archivo adjunto, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.

>_**Nota:** Este proceso es el mismo para cualquiera de las tres carpetas de Multimedia._

# Ventana Submenú de Repuestos

## Ir a RP

El icono <span class="mdi mdi-magnify"></span> se abre un campo al lado izquierdo, donde se digita el código completo del Repuesto que se desea encontrar rápidamente. Luego de digitar el código del Repuesto, se presiona la  tecla   “Enter” y  el  cursor se posiciona en  consecuencia,  sobre  el  Repuesto deseado en el Visor sombreado por la línea de color verde así:


![Procesar imagen](../../assets/images/cap04/chp04_img17.png) 
_**Imagen 17.** Almacén - Ir a RP_

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Repuesto no existe.

![Procesar imagen](../../assets/images/cap04/chp04_img18.png) 
_**Imagen 18.** Almacén - Mensaje alerta RP_  

## Indicadores

Es posible visualizar de manera inmediata, los Repuestos activos, inactivos y con Multimedia, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado. El significado del color de cada pelota, se puede ver en el icono  <span class="mdi mdi-message-alert"></span> ubicado en la parte superior derecha de la ventana visor:

![Procesar imagen](../../assets/images/cap04/chp04_img19.png) 
_**Imagen 19.** Almacén - Indicadores_

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Rojo:** Repuestos definidos con estado inactivo.
- **Verde:** Repuestos definidos con estado activo.
- **Naranja:** Repuestos que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.

## Subgrupo

Se usa para filtrar o seleccionar grupos de Repuestos que cumplen un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono de filtro <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Almacén de Repuestos.

![Procesar imagen](../../assets/images/cap04/chp04_img20.png)
_**Imagen 20.** Almacén - Ir a Subgrupo_


Los campos que constituyen un criterio de selección haciendo parte de la Ventana Subgrupo de Repuestos son los siguientes:

![Procesar imagen](../../assets/images/cap04/chp04_img21.png)
_**Imagen 21.** Almacén - Subgrupo Materiales y Repuestos_

**A, B, C, O:** Permite encontrar  los repuestos que tengan una clasificación A, B, C u O definida.

**Casilla:** Esta opción permite encontrar  y agrupar aquellos Repuestos que se encuentran en la casilla que se especificó en la información general del Repuesto.

**Clase:** Esta opción permite encontrar  aquellos Repuestos que cumplen con el patrón de clase especificado. También se puede usar los comodines (%), Ejemplo: B, B%.

**Código de Barras Interno:** Si existe un código de barras interno dentro de la organización para codificar Repuestos; este campo permite encontrar  el Repuesto  que se encuentre asociado al Código de Barras Interno que se ingresó al crear el Repuesto. En este campo se puede usar los comodines (%), Ejemplo: %1%, 1%.

**Código de Barras Proveedor:** Permite encontrar el  Repuesto  que  se   encuentre asociado al Código de Barras del Proveedor que se ingresó al crear el Repuesto. En este campo se puede usar los comodines (%), Ejemplo: %1%, 1%.

**Código del Repuesto:** Esta selección agrupa los Repuestos relacionados por su  código. Por ejemplo: si se escribe BAN%, se seleccionan todos los Repuestos cuyo  código inicia por BAN. Si se escribe TR%  se seleccionan todos los Repuestos cuyo código inicie por cualquier cuarteto de valores pero que en la quinta y sexta posición tengan un TR. El porcentaje es un carácter comodín que significa  “todos”.

**Descripción del Repuesto:** Selecciona los Repuestos según criterios que se fundamenten en su descripción. Ejemplo: % Banda%  selecciona todos los Repuestos en cuya descripción, en cualquier posición, tengan la palabra  “Banda”.

**Estado:** Permite seleccionar el Estado de los Repuestos, es posible registrar el estado  de Activo, Vencido, Excedente, Obsoleto o Inservible para el Repuesto activo.

**Proveedor 1:** Lista los Repuestos por el Proveedor seleccionado. La búsqueda se realiza sobre los 3 campos de Proveedor asociado al Repuesto **(Proveedor 1, 2, 3)**. Este campo despliega la lista de los Terceros Tipo PF de la tabla de Infraestructura. En este campo es posible usar comodines (%). Para introducir un nombre en campo manualmente se debe dar clic en el icono <span class="mdi mdi-lock"></span> el cual se habilita <span class="mdi mdi-lock-open-outline"></span> para permitir el ingreso del dato: por ejemplo FER% y el sistema selecciona todos los Proveedores cuyo nombre empieza por FER. Si se escribe %IA% se seleccionan todos los Proveedores en cuyo nombre, en cualquier posición, tengan la palabra **“IA”**.  
 
**Referencia Proveedor 1:** A través de esta opción es posible digitar el nombre de la referencia del Repuesto, seleccionar los Repuestos que  tienen como referencia proveedor 1. Este campo permite el uso de comodines(%) por ejemplo: %BR1%, BR1%.

**Referencia Proveedor 2:** Este criterio permite realizar consultas por la segunda referencia establecida perteneciente al segundo proveedor. Permite el uso de comodines (%), por ejemplo: %BR1%, BR1%.**

**Tipo:** Permite seleccionar de la lista el tipo al que pertenece el Repuesto, sí es inventariado o no inventariado.

**Tipo de Trabajo:** Agrupa los Repuestos de acuerdo al tipo de trabajo al que están  asociados.

>**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn white">Mas <span class="mdi mdi-plus-circle"></span></a> y luego en <a class="btn white">aceptar <span class="mdi mdi-check-circle"></span></a>.

## Reportes

![Procesar imagen](../../assets/images/cap04/chp04_img64.png)
_**Imagen 22.** Almacén - Ir a Reportes_


Este comando <span class="mdi mdi-printer"></span>  permite visualizar los reportes o informes de la información relacionada a los Repuestos/Materiales. Existen los siguientes tipos de reportes básicos disponibles:

![Procesar imagen](../../assets/images/cap04/chp04_img65.png)
_**Imagen 23.** Almacén- Reportes_

Los anteriores reportes pueden ser  seleccionados para uno o varios Activos/Equipos:

**Todos los Registros:** Con esta opción se imprimen todos los reportes de los Repuestos/Materiales existentes en la base de datos, sin importar si se ha realizado un subgrupo.

**Registros del Visor:** Esta opción permite hacer una impresión de todos los Repuestos/Materiales que están seleccionados en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

**Registro Seleccionado:** Esta opción permite hacer una impresión del Repuesto/Material que esta seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Para visualizar los reportes, se da un clic sobre el reporte y luego al botón <a class="btn white">Imprimir</a>.
.
Para exportar un reporte se da un clic sobre el reporte y luego al botón <a class="btn white">exportar</a>. Esto descarga automáticamente en la estación cliente el reporte en formato excel.

## Exportar

Esta opción <span class="mdi mdi-download"></span> permite la exportación de los campos contenidos en la ficha técnica de los Repuestos/Materiales que aparecen en el visor, totales o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abre una ventana como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img66.png)
_**Imagen 24.** Almacén- Ir a Exportar_

En la gráfica anterior, se aprecian sus componentes y sus respectivos contenidos.

**Exportar Visor:** Esta opción exporta todos los Activos seleccionados en el visor mediante un subgrupo.

**Exportar Todos los Registros:** Esta opción exporta todas los Activos existentes en la base de datos, sin importar cualquier subgrupo activo.

Luego de escoger una de las opciones anteriores, en la parte inferior aparece seleccionado por defecto el recuadro de selección <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> exportar todos los campos</span></a> pero si se prefiere uno o algunos campos se debe des-seleccionar y a continuación hacer clic en los recuadros a exportar.

![Procesar imagen](../../assets/images/cap04/chp04_img67.png)
_**Imagen 25.** Almacén- Exportar Campos_

Una vez elegida la información, dar clic en el botón inferior <a class="btn white">Exportar</a> el cual genera un archivo de Excel que se descarga automáticamente. El objetivo de esta exportación es llevar toda la información de los Repuestos/Materiales a un archivo plano, para luego ser analizados.


### Ir a RP


Esta opción de búsqueda rápida se encuentra ubicada al lado superior derecho de la ventana Visor. Al darle clic al ícono <span class="mdi mdi-magnify"></span>, se abre un campo al lado izquierdo que indica la información que debe ingresarse, es decir, el código completo del Repuesto/Material. Luego de digitar la información, se presiona la tecla <a class="btn">Enter <span class="mdi mdi-subdirectory-arrow-left"></span></a> y a continuación se sombrea el Repuesto/Material deseado en el Visor:

![Procesar imagen](../../assets/images/cap04/chp04_img68.png)
_**Imagen 26.** Ir a AC_

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Repuesto/Material no existe.

![Procesar imagen](../../assets/images/cap04/chp04_img69.png)
_**Imagen 27.** Mensaje Alerta - Ir a AC_


## Transacciones

### Modificar Masivamente (MM)

Esta transacción permite agregar o modificar conjuntamente información de un Subgrupo de Repuestos previamente seleccionados, como por ejemplo Estado, cambiar de Almacén, Unidad de Consumo, Clase, Proveedor, Clasificación A,B,C,O 


Para acceder se requieren permisos correspondientes a "Masificar" en Almacén. Esta transacción es individual para cada Almacén por lo tanto en el Almacén que corresponda se debe sobreponer el cursor,  al lado derecho se despliega el conjunto de opciones disponibles, luego se elige la transacción **“Modificar Masivamente”.** como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img32.png)
_**Imagen 28.** Almacén - Ir a Modificación Masiva_


>**Nota:** Para continuar con la transacción se debe hacer previamente un Subgrupo, bien sea en el visor de Modificación Masiva o previamente en el Visor del Almacén. 

Una vez se ingrese se muestra de la siguiente forma:

![Procesar imagen](../../assets/images/cap04/chp04_img33.png)
_**Imagen 29.** Almacén - Visor Modificación Masiva_

Para continuar dar un clic en el botón azul <a class="btn white">modificación masiva</a> ubicado en la parte superior izquierda como se indica a continuación:


![Procesar imagen](../../assets/images/cap04/chp04_img34.png)
_**Imagen 30.** Almacén - Ir a Modificación Masiva_


A continuación se da una breve explicación de los componentes de la ventana detalle de Modificación Masiva una vez se escoja la opción <span class="mdi mdi-check-box-outline"></span> Ficha Técnica  como se muestra en la imagen: 

![Procesar imagen](../../assets/images/cap04/chp04_img35.png)
_**Imagen 31.** Almacén - Ventana Detalle Modificación Masiva_

**Modificar Solamente Este Repuesto:** Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) al Repuesto o Material que se encuentre seleccionado en el visor.


**Modificar Todos los Repuestos en el Visor:** Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) a todos los Repuestos o Materiales que se encuentren en el visor.

**Modificar Estado:** Se modifica masivamente el estado Activo e Inactivo, de los Repuestos y/o Materiales que están previamente seleccionados en el visor. Los estados predefinidos son: Activo, I-Vencido, I-Otro, I-EOI (Excedente, Obsoleto e Inservible).
 

![Procesar imagen](../../assets/images/cap04/chp04_img36.png)
_**Imagen 32.** Almacén - MM Modificar Estado_

**Modificar Almacén:** Se modifica masivamente el Almacén, de los Repuestos y/o Materiales que están previamente registrados en el visor. El sistema lista los almacenes que se encuentran creados en la tabla de Almacenes en Infraestructura. Adicional, se debe dejar el switche en la posición de “Cambiar de Almacén”.


![Procesar imagen](../../assets/images/cap04/chp04_img37.png)
_**Imagen 33.** Almacén - MM Almacén_


Cuando se requiera Copiar un Repuesto o Material existente en un Almacén a otro Almacén, se debe hacer solamente a través de esta funcionalidad, para ello se debe elegir en primer lugar el
Almacén al cual se va a asociar el Repuesto/Material que se va a ingresar y en segundo lugar se debe llevar el switche a la posición de “Copiar y pegar a otro Almacén”.


**Modificar Unidad de Consumo:** Se Modifica Masivamente la unidad de consumo de un Repuesto/Material. El sistema lista las unidades de medida que se encuentran creadas en la tabla de Unidades de Medida en Infraestructura.


![Procesar imagen](../../assets/images/cap04/chp04_img38.png)
_**Imagen 34.** Almacén - MM Unidad de Consumo_


**Modificar Clase:** Se Modifica Masivamente la clase de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clase.

![Procesar imagen](../../assets/images/cap04/chp04_img39.png)
_**Imagen 35.** Almacén - MM Clase_


**Modificar Clasificación A, B, C, O:** Se Modifica Masivamente la clasificación A, B, C, O de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clasificación A,B, C, O. Por defecto, se muestra un campo con la clasificación “O”.

![Procesar imagen](../../assets/images/cap04/chp04_img40.png)
_**Imagen 36.** Almacén - MM Clasificación_

**Modificar Proveedor 1:** Se Modifica Masivamente el Proveedor 1 de un conjunto de Repuestos/Materiales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF provenientes módulo de Infraestructura.

![Procesar imagen](../../assets/images/cap04/chp04_img41.png)
_**Imagen 37.** Almacén - MM Proveedor 1_


**Modificar Proveedor 2:** Se Modifica Masivamente el Proveedor 2 de un conjunto o un subgrupo Repuestos/Mtaeriales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF en el módulo de Infraestructura.


![Procesar imagen](../../assets/images/cap04/chp04_img42.png)
_**Imagen 38.** Almacén - MM Proveedor 2_

Para hacer efectiva la Modificación Masiva, una vez que se haya elegido cualquiera de las opciones anteriores, se debe dar clic en el botón de la parte superior <a class="btn blue">modificar <span class="mdi mdi-pencil"></span></a>, el sistema muestra el primer mensaje de advertencia para el usuario asi:

![Procesar imagen](../../assets/images/cap04/chp04_img43.png)
_**Imagen 39.** Almacén - MM Mensaje Alerta 1_

Para continuar dar clic en el botón del mensaje alerta  <a class="btn white">aceptar</a>, a continuación por seguridad el sistema el segundo mensaje alerta:


![Procesar imagen](../../assets/images/cap04/chp04_img44.png)
_**Imagen 40.** Almacén - MM Mensaje Alerta 2_

Para finalizar dar clic en <a class="btn white">aceptar</a>, el sistema confirma la transacción con el siguiente mensaje:

![Procesar imagen](../../assets/images/cap04/chp04_img45.png)
_**Imagen 41.** Almacén - MM Mensaje Alerta 3_



### Asociar con Activos

El comando Asociar a Activos del submenú Repuestos permite asociar un  Repuesto con el o los Activos a los que sirve. Esta asociación es opcional, pero es muy útil en caso de necesitar ubicar con facilidad aquellos Repuestos específicos que solo sirven a Activos específicos.


Para acceder a esta opción se debe contar con los permisos de Repuestos, y a continuación se sobrepone el cursor sobre el Almacén en cuestión, el cual despliega al lado derecho el conjunto de transacciones disponibles para ese Almacén, luego se elige la transacción **Asociar con Activos**, como se indica a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img22.png)
_**Imagen 42.** Almacén - Ir a Asociar con Activos_

Al ingresar, en el lado izquierdo se visualizan los Activos y en el derecho los Repuestos existentes en el almacén seleccionado previamente. Para navegar entre las páginas se debe dar clic al icono <span class="mdi mdi-unfold-more-vertical"></span> ubicado en la parte inferior derecha de cada recuadro:

![Procesar imagen](../../assets/images/cap04/chp04_img23.png)
_**Imagen 43.** Almacén - Desplazarse en Asociar con Activos_

También se visualizan los indicadores <span class="mdi mdi-message-alert"></span> correspondientes de cada módulo, además se recomienda hacer subgrupos  <span class="mdi mdi-filter-variant"></span> para facilitar la asociación de cada lado, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img24.png)
_**Imagen 44.** Almacén - Comandos Asociar con Activos_

La asociación de los Repuestos con los Activos, inicia al dar clic a los **check box** <a class="btn black"><span class="mdi mdi-checkbox-blank-outline"></a>, que están al lado izquierdo en la primera columna de la porción de Activos y en la porción derecha de Repuestos. Es posible seleccionar uno o varios al tiempo, de esta manera los Repuestos que serán asociados al o los Activos seleccionados muestran la cantidad inicial (1) que es asociada por defecto. El usuario puede cambiar la cantidad del Repuesto a asociar dependiendo de las cantidades en Existencia en el inventario de AM, como se muestra a continuación:  

![Procesar imagen](../../assets/images/cap04/chp04_img25.png)
_**Imagen 45.** Almacén - Selección  Asociar con Activos_

En el ejemplo anterior se asociaron tres Repuestos diferentes, de cada uno una unidad para dos Activos.

Para terminar la transacción se da clic al botón ubicado en la parte inferior <a class="btn gray">asociar</a> el cual se muestra una notificación confirmando la ejecución de la transacción y se observa el resultado de la asociación realizada de manera resumida asi:

![Procesar imagen](../../assets/images/cap04/chp04_img26.png)
_**Imagen 46.** Almacén - Asociar con Activos_

Si el usuario desea ver los repuestos asociados a un Activo, se debe elegir un único Activo del lado izquierdo y se da clic al botón inferior <a class="btn gray">ver rp asociados</a>, **AM** mostrará en el lado derecho los Repuestos que fueron asociados al Activo seleccionado, ejemplo:

![Procesar imagen](../../assets/images/cap04/chp04_img27.png)
_**Imagen 47.** Almacén - Ver Activo asociado a Repuestos_

>**Nota:** Si se eligen dos o más Activos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Activo.

Por otro lado, si el usuario desea ver la asociación que tiene un determinado Repuesto a Activos, se debe elegir un único Repuesto del lado derecho y se da clic al botón inferior <a class="btn gray">ver ac asociados</a> , **AM** mostrará en el lado izquierdo los Activos que tienen asociados el Repuesto seleccionado.

![Procesar imagen](../../assets/images/cap04/chp04_img28.png)
_**Imagen 48.** Almacén - Ver Repuesto asociado a Activos_

>**Nota:** Si se eligen dos o más Repuestos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Repuesto.

Si el usuario desea **Desasociar** un Repuesto a uno o varios Activos, se deben elegir primero el Repuesto a través de los check box  <a class="btn cl-black "><span class="mdi mdi-checkbox-blank-outline"></span></a>. Se ilustra un ejemplo:

![Procesar imagen](../../assets/images/cap04/chp04_img29.png)
_**Imagen 49.** Almacén - Seleccionar Repuesto asociado a Activos_

![Procesar imagen](../../assets/images/cap04/chp04_img30.png)
_**Imagen 50.** Almacén - Ver AC asociados_


Para terminar la transacción **Desasociar** se da clic al botón a <a class="btn gray">desasociar</a>  inmediatamente se muestra un mensaje confirmando la ejecución de la transacción y se observa el resultado de la desasociación realizada.

![Procesar imagen](../../assets/images/cap04/chp04_img31.png)
_**Imagen 51.** Almacén - Desasociar_

### Reservas


Es una transacción en Almacén llamada Reservas, la cual como su nombre lo indica permite registrar y cancelar reservas, del Repuesto o Material seleccionado en el visor. Estas Reservas son realizadas por el departamento de Mantenimiento, posibilitanfo definir el número de la OT que va a hacer el consumo del Repuesto Reservado.

Para hacer reservas se requieren permisos previos de usuario del Almacén en cuestión para hacer reservas.

Para acceder a esta transacción se sobrepone el cursor sobre el Almacén en cuestión y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige **“Reservas”** como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img46.png)
_**Imagen 52.** Almacén - Ir a Reservas_ 

Al ingresar se visualiza la ventana Visor de Reservas, cada título en azul permite organizar la información ascendente/descendente. 


![Procesar imagen](../../assets/images/cap04/chp04_img47.png)
_**Imagen 53.** Almacén - Visor Reservas_ 

Para el detalle de un registro se da clic sobre él y se muestra a continuación la Ventana Detalle de la Reserva:

![Procesar imagen](../../assets/images/cap04/chp04_img48.png)
_**Imagen 54.** Almacén - Detalle Reservas_ 

A continuación se describe cada campo:

**Identificación:** Es el recuadro que contiene la información general de la reserva como código,Fecha de Creación, Fecha de u¿Sso, Estado de la reserva, Nombre de la persona que hace la reserva y número de OT.

**Código:** Es asignado automáticamente por el sistema, consiste en un ordinal. Este campo no es modificable por el usuario.

**Fecha de Creación:** Es la fecha en la que se realiza la reserva del Repuesto seleccionado en el visor. No se puede modificar. El programa la asigna desde la fecha del sistema.

**Fecha de Uso:** Es la fecha en la que se tiene planeado utilizar el Repuesto seleccionado en el visor. De acuerdo con esta fecha, la persona encargada del Almacén debe mantener las unidades reservadas, disponibles sólo para quién registró la reserva. Se permite poner desde la fecha actual en adelante.


**Estado:** Informa acerca del curso de la Reserva. Puede ser Activa, Finalizada o Cancelada. 

**Reservado por:** Es la persona que registra la Reserva de las unidades del Repuesto seleccionado.

**Número de OT:** Este es un campo, obligatorio que exige un consecutivo de OT para hacer la reserva y así el Almacenista pueda ejecutar la transacción en el módulo de Kardex. Es posible escribir directamente el número de la OT o elegir una OT a través del Subgrupo al lado derecho del campo. <span class="mdi mdi-filter-variant"></span> el cual la ventana visor de Órdenes.

**Cantidad:** Es el número de unidades del Repuesto que se desea Reservar.

**Comentario:** Se pueden agregar aquí, observaciones o comentarios referentes a la reserva.

>**Nota:** El estado Finalizada, solo se actualiza desde el módulo de Kárdex a través de la transacción de Salida tipo Reservas para la OT en cuestión (este tipo de salida se configura desde la tabla de infraestructura - Conceptos de Kardex).



A continuación se describe como adicionar Repuestos a la reserva:

#### Adicionar Repuestos

Esta opción permite definir los Repuestos que serán reservados. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo los Repuestos que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de los Repuestos a reservar. Para continuar dar clic en el botón <a class="btn gray">adicionar rp</a> y a continuación se abre el siguiente formulario:


![Procesar imagen](../../assets/images/cap04/chp04_img49.png)
_**Imagen 55.** Almacén - Adicionar RP Reservas_ 


A continuación se describen los campos que componen esta porción de información adicional:


**Código RP:** En este campo se elige el código del Repuesto, desde una ventana de selección de Repuestos  a través de un clic en el Subgrupo <span class="mdi mdi-filter-variant icon white"></span> que se encuentra al lado derecho del campo. Este comando trae el visor de Repuestos,  para añadir el Repuesto se debe dar un doble clic sobre la selección, luego de esto, aparece automáticamente diligenciados la descripción del Repuesto, la cantidad actual y la disponible.

**Descripción RP:** En este campo se visualiza la información de la descripción del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Actual:** En este campo se muestra la cantidad en existencia del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Disponible:** En este campo se observa la cantidad disponible del Repuesto seleccionado, es decir, se visualiza la diferencia entre “Existencia Inventario” menos “Cantidad Reservada”. Este campo no es modificable por el usuario.

**Cantidad a Reservar:** En este campo se define la cantidad que se desea reservar del Repuesto seleccionado. En caso de elegir una cantidad a reservar mayor a la cantidad disponible, el sistema muestra un mensaje de alerta indicando que la cantidad a reservar no está disponible.

![Procesar imagen](../../assets/images/cap04/chp04_img50.png)
_**Imagen 56.** Almacén - Mensaje Alerta Reservas_

Una vez diligenciado el formulario dar clic en el botón <span class="mdi mdi-plus-circle icon white"></span> en el cual se visualizan los repuestos en la parte izquierda en el orden que se adicionen:

![Procesar imagen](../../assets/images/cap04/chp04_img51.png)
_**Imagen 57.** Almacén - Repuestos Reservados_

Para actualizar la cantidad del Repuesto de debe dar clic sobre él asegurándose de estar sombreado en verde:

![Procesar imagen](../../assets/images/cap04/chp04_img52.png)
_**Imagen 58.** Almacén - Actualizar cantidad a Reservar_

Para terminar la transacción, dar clic en el botón <a class="btn blue">Insertar <span class="mdi mdi-plus-circle-outline"></span></a> ubicado en la parte superior izquierda, el sistema abrirá un mensaje alerta antes de insertar la nueva reserva, para continuar <a class="btn white">aceptar</a>:


![Procesar imagen](../../assets/images/cap04/chp04_img53.png)
_**Imagen 59.** Almacén - Mensaje Alerta Insertar Reserva_

Si la OT ya está asignada a una reserva aparece un mensaje alerta a lo cual el usuario que hace la reserva debe asegurarse de hacer la reserva de varios Repuestos en un mismo registro:


![Procesar imagen](../../assets/images/cap04/chp04_img54.png)
_**Imagen 60.** Almacén - Mensaje Error Insertar Reserva_

Una vez se inserte la reserva el sistema muestra nuevamente el visor.


#### Inventario al Final del Mes

Esta transacción se lleva a cabo para realizar el cierre de inventario del mes y consiste en tomar una fotografía del inventario hasta la fecha de realizar el cierre de inventario. 

A esta opción se llega al sobreponer el cursor  sobre un almacén y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige la transacción “Inventario final del mes”.

![Procesar imagen](../../assets/images/cap04/chp04_img55.png)
_**Imagen 61.** Almacén - Ir a Inventario_

El proceso se realiza eligiendo la opción “Inventario final del mes”, se abre una ventana donde se muestran dos campos desplegables, uno para seleccionar el año y otro para el mes a realizar el cierre de inventario, respectivamente. Los meses que despliega son todos los meses del año. Se debe escoger el año correspondiente con el mes a cerrar, en el botón “Cerrar Inventario” y aparecerá una ventana solicitando confirmación de la operación a realizar, como se muestra a continuación.

![Procesar imagen](../../assets/images/cap04/chp04_img56.png)
_**Imagen 62.** Almacén - Detalle Inventario_

![Procesar imagen](../../assets/images/cap04/chp04_img57.png)
_**Imagen 63.** Almacén - Cerrie de Inventario_
 
Para finalizar la transacción dar clic en el botón <a class="btn gray">cerrar inventario</a>
 
 El sistema muestra un mensaje alerta confirmando la transacción:

 ![Procesar imagen](../../assets/images/cap04/chp04_img58.png)
_**Imagen 64.** Almacén - Mensaje Inventario_

>**Nota:** Solo se puede ejecutar esta transacción una vez, de lo contrario el sistema muestra un aviso alerta.

El cierre de inventario en **AM** no prohíbe su funcionamiento. Es decir, existen software que hasta no cerrar inventario, hasta que no pase de mes, no permite que se realice ingreso de información solo lo hacen de modo consulta. **AM** está habilitado para seguir su funcionamiento después de haberse ejecutado la transacción Inventario final del mes.
Para la realización de este proceso, “Inventario final del mes”, se debe tener los permisos adecuados los cuales permiten ejecutar y volver a iniciar el proceso. Estos permisos se configuran por usuario en el módulo de Administración.

### DashBoard Almacén

Esta transaccion permite ver indicadores gráficos básicos sobre la información de los Repuestos/Materiales. Para acceder a esta opción se sobrepone el cursor sobre el módulo de Almacén de interés, en el menú principal se despliega un submenú de transacciones disponibles y luego dar clic en “DashBoard Almacén”.

 ![Procesar imagen](../../assets/images/cap04/chp04_img59.png)
_**Imagen 65.** Almacén - ir a DashBoard_


Este comando permite visualizar en tiempo real el comportamiento de los Repuestos/Materiales con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas.

![Procesar imagen](../../assets/images/cap04/chp04_img60.png)
_**Imagen 66.** Almacén - DashBoard_


La información del rectángulo de color naranja ubicado en la parte superior derecha como guía a modo de fracción (N/M), indica el número de registros del subgrupo en el visor(N) sobre el número total de registros de Activos exzx istentes en la base de datos (M). Si no hay preselección, los dos números en sus totales son los mismos.
También un indicador de la existencia de un subgrupo, es el ícono <span class="mdi mdi-filter-variant"></span> con una pelota de color rojo que se ubica al lado derecho de dicha fracción.

![Procesar imagen](../../assets/images/cap04/chp04_img61.png)
_**Imagen 67.** Almacén - Dashboard Subgrupos_

Para personalizar la vista de los gráficos o tener una información específica se recomienda hacer subgrupos a través del ícono <span class="mdi mdi-filter-variant"></span>. Asimismo los DashBoards permiten ocultar información con solo dar un clic sobre sus rectángulos de colores como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap04/chp04_img62.png)
_**Imagen 68.** Almacén - Dashboard personalizado_

Sí se desea restablecer la información, se debe dar clic al icono <span class="mdi mdi-autorenew"></span> (actualizar). En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic al ícono de la flecha hacia abajo <span class="mdi mdi-download"></span> como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img63.png)
_**Imagen 69.** Almacén - Dashboard comandos_