---
title: Reportes
subtitle: Cada tabla de Infraestructura cuenta con el servicio de Reportes, en este contexto y dependiendo de cada tabla hay un reporte disponible.
tags: [setup]
author: win
order: '02_35'
media: "../../assets/images/docs/"
---

Este comando <span class="mdi mdi-printer"></span> permite visualizar el reporte relacionado a la tabla donde se encuentre, este botón se ubica en la parte superior derecha:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_89.png"
  alt:"Ventana Reportes"
%}

A continuación se explica su contenido:

**Lista de Selección:** Es la tabla donde aparecen los campos: Código, Descripción y
Subtítulo. Bajo el título Código se listan los códigos de los reportes existentes. Bajo el título Descripción se listan los nombres de los reportes existentes. Bajo el título de Subtítulo se lista en algunos reportes, una descripción adicional del reporte.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Registros del Visor </span></a>: Esta opción permite hacer una impresión de los registros de la tabla preseleccionados de un subgrupo.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Todos los Registros </span></a>: Con esta opción se permite la impresión de todas los registros existentes de la tabla en la base de datos de la compañía activa, sin importar si se ha realizado un subgrupo.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Registro seleccionado </span></a>: Esta opción permite hacer una impresión del registro señalada, es decir,  la que está resaltada con la línea verde en el visor.

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Después de seleccionar el tipo de registro, se procede a seleccionar el Reporte que se
desea imprimir, para esto se debe pulsar el botón <a class="btn bg-gray cl-black">IMPRIMIR</a>, de esta manera se abre una ventana visor para formatos PDF, que muestra el Reporte seleccionado. Desde esta ventana es posible guardar el reporte o imprimirlo en el respectivo formato. 

Al dar clic al botón <a class="btn bg-gray cl-black">EXPORTAR</a> permite descargar el Reporte seleccionado y llevarlo al formato excel.

Mientras que, al dar clic al botón <a class="btn bg-gray cl-black">CERRAR</a> se cierra la ventana de la generación de reportes.