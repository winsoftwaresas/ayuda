---
title: Ventana Principal
subtitle: Se explican los comandos de la ventana visor.
tags:
  - setup
author: win
order: '04_04'
media: "../../assets/images/docs/"
---

# Ventana Principal de Almacén de Repuestos

Al sobreponer el cursor en el módulo de <a class="btn blue">Almacén</a> se listan los almacenes creados en la tabla de Almacenes de la Infraestructura y cuando se elige un Almacén, el sistema muestra al lado izquierdo del nombre del respectivo almacén un <span class="mdi mdi-check-circle"></span> en color verde y en frente en azul, el aviso <a class="btn blue">Seleccionado</a> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_01.png"
  alt:"Menú Almacenes"
%}

A un almacén se llega haciendo clic después de sobreponer el cursor y elegir el respectivo almacén desde el módulo <a class="btn blue">Almacén</a>  del Menú Principal. El sistema responde mostrando la información contenida dentro de ese almacén seleccionado:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_02.png"
  alt:"Ventana Principal Repuestos"
%}

## Ventana Visor

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_03.png"
  alt:"Ventana Visor"
%}

Desde esta ventana es posible observar los Materiales/Repuestos existentes. Se listan todos o un Subgrupo de ellos. Es posible configurar el número de registros que  se muestran por página desde el menú <a class="btn blue">Administración</a> en la opción  **“Valores por Defecto”** en la etiqueta **General**.

Al hacer clic sobre alguno de los Repuestos del Visor el sistema responde  mostrando  la información de ese Repuesto, en forma detallada, en una ventana llamada **Ventana Detalle**.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la  tabla, según el título seleccionado. En forma ascendente/descendente. Para elegir un registro de la tabla debe de dar un clic sobre él y para desplazarse puede usar el cursor con las teclas de desplazamiento.


# Ventana Submenu de Repuestos

## Ir a RP

El icono <span class="mdi mdi-magnify"></span> sirve para hacer una búsqueda rápida por el código del material/repuesto, éste abre un campo al lado izquierdo, donde se debe digitar el código completo del ítem que desea encontrar rápidamente. Luego de digitar el código del material/repuesto, presione la  tecla  **“Enter”** y  el  cursor se posiciona en consecuencia,  sobre el material/repuesto deseado en el Visor sombreado por la línea de color verde así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_04.png"
  alt:"Almacén - Ir a RP"
%}

En caso de escribir el código con algún error o incompleto el sistema muestra un mensaje de alerta indicando que el Repuesto no existe.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_05.png"
  alt:"Almacén - Mensaje alerta RP"
%}

## Indicadores

Es posible visualizar de manera inmediata, los Materiales/Repuestos activos, inactivos y con Multimedia, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado. El significado del color de cada pelota, se puede ver en el icono  <span class="mdi mdi-message-alert"></span> ubicado en la parte superior derecha de la ventana visor:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_06.png"
  alt:"Almacén - Indicadores"
%}

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Rojo:** Repuestos definidos con estado inactivo.
- **Verde:** Repuestos definidos con estado activo.
- **Naranja:** Repuestos que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.

## Subgrupo

Se usa para filtrar o seleccionar grupos de materiales/repuestos que cumplen un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al subgrupo <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Almacén de Repuestos.  

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_07.png"
  alt:"Almacén - Ir a Subgrupo"
%}

Los campos que constituyen un criterio de selección haciendo parte de la Ventana Subgrupo de Repuestos son:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_08.png"
  alt:"Almacén - Subgrupo Materiales y Repuestos"
%}

**A, B, C, O:** Permite encontrar  los materiales/repuestos que tengan una clasificación A, B, C u O definida.

**Casilla:** Esta opción permite encontrar  y agrupar aquellos Materiales/Repuestos que se encuentran en la casilla que se especificó en la información general del Repuesto.

**Clase:** Esta opción permite encontrar  aquellos Repuestos que cumplen con el patrón de clase especificado. También se puede usar los comodines (%), Ejemplo: B, B%.

**Código de Barras Interno:** Si existe un código de barras interno dentro de la organización para codificar Materiales/Repuestos; este campo permite encontrar  el Repuesto  que se encuentre asociado al Código de Barras Interno que se ingresó al crear el Repuesto. En este campo se puede usar los comodines (%), Ejemplo: %1%, 1%.

**Código de Barras Proveedor:** Permite encontrar el  Material/Repuesto que se encuentre asociado al Código de Barras del Proveedor que se ingresó al crear el Repuesto. En este campo se puede usar los comodines (%), Ejemplo: %1%, 1%.

**Código del Repuesto:** Esta selección agrupa los Materiales/Repuestos relacionados por su  código. Por ejemplo: si se escribe BAN%, se seleccionan todos los Repuestos cuyo  código inicia por BAN. Si se escribe TR%  se seleccionan todos los Repuestos cuyo código inicie por cualquier cuarteto de valores pero que en la quinta y sexta posición tengan un TR. El porcentaje es un carácter comodín que significa  “todos”.

**Descripción del Repuesto:** Selecciona los Materiales/Repuestos según criterios que se fundamenten en su descripción. Ejemplo: % Banda%  selecciona todos los Repuestos en cuya descripción, en cualquier posición, tengan la palabra  “Banda”.

**Estado:** Permite buscar por el Estado de los Materiales/Repuestos, las opciones del campo desplegable son: 
  - Activo
  - I-EOI (Excedente, Obsoleto, Inservible)
  - I-Vencido
  - I-Otro.

**Familia:** Permite hacer un filtro según la familia del Material/Repuesto, es decir, esto aplica para aquellos ítems que tengan esta información diligenciada en su porción/vista parcial **Información General**.

**Parte Número:** Filtra según la parte-número del Material/Repuesto, es decir, esto aplica para aquellos ítems que tengan esta información diligenciada en su porción/vista parcial **Información General**.

**Proveedor 1:** Lista los materiales/repuestos por el Proveedor seleccionado. La búsqueda se realiza sobre los 3 campos de Proveedor asociado al Repuesto **(Proveedor 1, 2, 3)**. Este campo despliega la lista de los Terceros Tipo PF de la tabla de Infraestructura. En este campo es posible usar comodines (%). Para introducir un nombre en campo manualmente se debe dar clic en el icono <span class="mdi mdi-lock"></span> el cual se habilita <span class="mdi mdi-lock-open-outline"></span> para permitir el ingreso del dato: por ejemplo FER% y el sistema selecciona todos los Proveedores cuyo nombre empieza por FER. Si se escribe %IA% se seleccionan todos los Proveedores en cuyo nombre, en cualquier posición, tengan la palabra **“IA”**.  
 
**Referencia Proveedor 1:** A través de esta opción es posible digitar el nombre de la referencia del material/repuesto, y seleccionar aquellos que  tienen como referencia proveedor 1. Este campo permite el uso de comodines(%) por ejemplo: %BR1%, BR1%.

**Referencia Proveedor 2:** Este criterio permite realizar consultas por la segunda referencia correspondiente al segundo proveedor siempre y cuando se haya definido en la porción/vista parcial de **Ficha Técnica**. Este campo permite el uso de comodines (%), por ejemplo: %BR1%, BR1%.

**Tipo:** Permite seleccionar de la lista el tipo al que pertenece el material/repuesto, sí es inventariado o no inventariado.

**Tipo de Trabajo:** Agrupa los materiales/repuestos de acuerdo al tipo de trabajo (TT) al que están  asociados.

> **Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> y luego en <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>.

### Ir a RP

Esta opción de búsqueda rápida se encuentra ubicada al lado superior derecho de la ventana Visor. Al darle clic al ícono <span class="mdi mdi-magnify"></span>, se abre un campo al lado izquierdo que permite ingresar el código completo del Repuesto/Material. Luego de digitar la información, se presiona la tecla <a class="btn">Enter <span class="mdi mdi-subdirectory-arrow-left"></span></a> y a continuación se sombrea en color verde el ítem en el Visor así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_09.png"
  alt:"Ir a AC"
%}

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Material/Repuesto no existe, como se ejemplifica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_10.png"
  alt:"Mensaje Alerta - Ir a AC"
%}