---
title: Exportar
subtitle: Se explica cómo exportar el visor como herramienta para obtener información en Excel.
tags:
  - setup
author: win
order: '04_07'
date: 2022-11-10T20:17:34.887Z
media: "../../assets/images/docs/"
---

Esta opción <span class="mdi mdi-download"></span> permite la exportación de los campos contenidos en la ficha técnica de los Repuestos/Materiales que aparecen en el visor, totales o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abre una ventana como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_66.png"
  alt:"Almacén- Ir a Exportar"
%}

En la gráfica anterior, se aprecian sus componentes y sus respectivos contenidos.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Visor </span></a>: Esta opción exporta todos los Activos seleccionados en el visor mediante un subgrupo.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Todos los Registros </span></a>: Esta opción exporta todas los Activos existentes en la base de datos, sin importar cualquier subgrupo activo.

Luego de escoger una de las opciones anteriores, en la parte inferior aparece seleccionado por defecto el recuadro de selección <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Los Campos </span></a> pero si se prefiere uno o algunos campos se debe des-seleccionar y a continuación hacer clic en los recuadros a exportar.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_67.png"
  alt:"Almacén- Exportar Campos"
%}

Una vez elegida la información, dar clic en el botón inferior  <a class="btn bg-gray cl-black">EXPORTAR</a> el cual genera un archivo de Excel que se descarga automáticamente. El objetivo de esta exportación es llevar toda la información de los Materiales/Repuestos a un archivo plano, para luego ser analizados.