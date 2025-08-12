---
title: Exportar
subtitle: Se explica cómo exportar el visor con el fin de obtener otros informes.
tags:
  - setup
author: win
order: '03_08'
media: "../../assets/images/docs/"
---

### Exportar Visor

Esta opción <span class="mdi mdi-download"></span> permite la exportación de los campos contenidos en la ficha técnica de los Activos/Equipos que aparecen en el visor, totales o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abre una ventana como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"03_90.png"
  alt:"Activos - Ir a Exportar"
%}

Al accionar el botón <a class="btn bg-gray cl-black">EXPORTAR</a> se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los registros de cualquier tabla contenidos en el visor a un archivo plano, para luego ser analizados.

Adicional, es posible exportar todos los campos de la ventana Visor de cualquier tabla tanto para un subgrupo como para todos los registros existentes en la base de datos. 

Antes de exportar se encuentran dos opciones para exportar, se debe seleccionar una de ellas, de lo contrario se produce un bloqueo de la ventana:

<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Visor</span></a>: Esta opción permite hacer una exportación de todos los registros de la tabla que están seleccionadas en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Todos Los Registros </span></a>: Con esta opción se exportan todos los registros de la tabla existentes en la base de datos, sin importar si se ha realizado un subgrupo.

Para continuar, el siguiente botón ya viene seleccionado por defecto <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>, esto significa que exportará todos los campos de los registros, sin embargo, el usuario también puede escoger los campos que desee exportar, para esto haga clic nuevamente en el campo <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>. Seleccione lo campos que desee exportar, luego, accione el botón <a class="btn bg-gray cl-black">EXPORTAR</a> y espere a que el archivo se encuentre listo para descargarlo y finalice accionando <a class="btn bg-gray cl-black">DESCARGAR</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"03_91.png"
  alt:"Activos - Exportar Campos"
%}

El objetivo de esta exportación es llevar toda la información de los Activos a un archivo plano, para luego ser analizados.