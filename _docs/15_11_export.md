---
title: Exportar Visor de SS/OT
subtitle: Este capítulo orienta al usuario administrador sobre cómo hacer uso de servicios como la función Exportar Visor de AMsi.
tags:
  - Exportar
  - AMsi
  
author: win
order: '15_11'
date: 2022-07-19T18:14:18.403Z
media: "../../assets/images/docs/"
---

## Exportar

{% set_image
  path:""
  css_class:""
  number:""
  filename:"15_71.png"
  alt:"AMsi - Exportar SS/OT"
%}

Esta opción <span class="mdi mdi-download"></span> permite exportar los ítems o campos de la SS/OT de **AMsi**, bien sea, para exportar todos los registros o las provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente.

Para efectuar este proceso, dar clic en Exportar <span class="mdi mdi-download"></span>. Según la configuración de **AMsi** los campos pueden variar según se solicite SS/OT.

- Las siguientes opciones son para exportar algunos campos de las SS:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"15_72.png"
  alt:"AMsi - Exportar SS"
%}

- Las siguientes opciones son para exportar algunos campos de las OT (en caso de tener la configuración de envío de OTs.)

{% set_image
  path:""
  css_class:""
  number:""
  filename:"15_73.png"
  alt:"AMsi - Exportar OT"
%}

En la gráfica anterior, se aprecian sus componentes y sus respectivos contenidos:

**Exportar Visor:** Esta opción exporta todas los registros seleccionadas en el visor mediante un subgrupo.

**Exportar Todos los Registros:** Esta opción exporta todas los registros bien de SS/OT en la base de datos, sin importar cualquier subgrupo activo.

Luego de escoger una de las opciones anteriores, en la parte inferior aparece seleccionado por defecto el recuadro <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"></span> Exportar Todas las Columnas</a> pero si se prefiere uno o varios, se debe des-seleccionar y a continuación hacer clic en los recuadros a exportar, una vez elegida la información, dar a clic en el botón inferior 
<a class="btn bg-gray cl-black">EXPORTAR</a> el cual genera un archivo de Excel que se descarga automáticamente. El objetivo de esta exportación es llevar toda la información de los SS/OT a un archivo plano para luego ser analizadas.