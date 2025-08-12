---
title: Exportar
subtitle: Se explica como hacer la exportación de los campos del visor a excel. 
tags:
  - setup
author: win
order: '07_06'
date: 2022-10-25T21:07:17.169Z
media: "../../assets/images/docs/"
---

Esta opción <span class="mdi mdi-download"></span> permite la exportación de las Solicitudes de Servicio que aparecen en el visor, el total de ellas o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_44.png"
  alt:"SS - Exportar"
%}

Al accionar e botón <a class="btn bg-gray cl-black">EXPORTAR</a> se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de las Solicitudes de Servicio contenidos en el visor a un archivo plano, para luego ser analizados.

Adicional, es posible exportar todos los campos de la ventana Visor de las Solicitudes de Servicio tanto para un subgrupo como de todas las SS existentes en la base de datos. 

Antes de exportar se encuentran dos opciones para exportar las SS, debe seleccionar una de ellas, de lo contrario se produce un bloqueo de la ventana:

<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Visor</span></a>: Esta opción permite hacer una impresión de todas las SS que están seleccionadas en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Todos Los Registros </span></a>: Con esta opción se imprimen todos los reportes de las SS existentes en la base de datos, sin importar si se ha realizado un subgrupo.

Para continuar, el siguiente botón ya viene seleccionado por defecto <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>, esto significa que exportará todos los campos de las SS, sin embargo, el usuario también puede escoger los campos que desee exportar, para esto haga clic nuevamente en el campo <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>. Seleccione lo campos que desee exportar, luego, accione el botón <a class="btn bg-gray cl-black">EXPORTAR</a> y espere a que el archivo se encuentre listo para descargarlo y finalice accionando <a class="btn bg-gray cl-black">DESCARGAR</a>

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_45.png"
  alt:"SS - Exportar Campos de Selección"
%}