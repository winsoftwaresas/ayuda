---
title: Transacciones
subtitle: Se encuentra la explicación del funcionamiento de las transacciones que hay en el submódulo de Solicitudes. 
tags:
  - setup
author: win
order: '07_05'
date: 2025-01-29T15:46:20.800Z
media: "../../assets/images/docs/"
---

Las funciones o transacciones del submódulo de Solicitudes requieren de cuidado y de un permiso administrativo, a continuación se explica cada una de ellas.

## Modificar Masivamente (MM)

Esta función se usa con la finalidad de cambiar información masivamente o a un subgrupo de registros. Como Centros de Costos, Ubicación Física, Centro Responsable, adjuntar documentos, entre otras.
Se accede a esta opción al sobreponer el cursor sobre el módulo de Solicitudes en la cual se despliega el submódulo que contiene las transacciones, continuar dando clic en la opción <a class="btn bg-white cl-gray">Modificar Masivamente</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_21.png"
  alt:"Solicitudes - Ir a Modificación Masiva"
%}

Una vez se ingrese a la Transacción se visualiza  el visor de Modificación Masiva, con el fin de luego hacer un Subgrupo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_22.png"
  alt:"Solicitudes - Visor Modificación Masiva"
%}

Para realizar el cambio se debe dar clic en el botón <a class="btn white">Modificar masivamente</a>, se abre una nueva ventana donde a continuación se da una breve explicación de cada criterio.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_23.png"
  alt:"Solicitudes - Modificación Masiva"
%}

Para modificar el subgrupo debe hacer clic en la opción, como se muestra en la imagen anterior:
<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Modificar todas las Solicitudes en el visor </span></a>.

**Modificar Centro de Costo:** Se modifica masivamente el Centro de Costo, de las SS que están previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_24.png"
  alt:"MM - Centro de Costo"
%}

**Modificar Ubicación Física:** Se modifica masivamente la Ubicación Física, de las 
SS que están previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_25.png"
  alt:"MM - Ubicación Física"
%}

**Modificar Responsable:** Se modifica masivamente el Responsable, de las SS que están previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_26.png"
  alt:"MM - Responsable"
%}

**Modificar Centro Responsable:** Se modifica masivamente el Centro Responsable, de las SS que están previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_27.png"
  alt:"MM - Centro Responsable"
%}

**Modificar Causa de Falla:** Se modifica masivamente la causa de falla de las SS correctivas que están previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_28.png"
  alt:"MM - Centro Responsable"
%}

**Modificar Adjuntar Documentos:** Se adjuntan documentos masivamente a las SS previamente seleccionadas en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_29.png"
  alt:"MM - Adjuntar Documentos"
%}

## Reclasificar

El objetivo de esta transacción es realizar la reclasificación o el traslado de una o de varias SS generadas a una compañía no correspondiente a otra compañía que si puede darles gestión.

> **Nota:** Esta transacción solo aplica para las organizaciones que tienen una versión PRO de **AM**, es decir, Multicompañía.

Se puede realizar para una Solicitud en particular como para un conjunto de ellas (Subgrupo) siempre y cuando la Solicitud de Servicio se encuentre o tenga el estado **AN** **“En Análisis”.** 

A esta opción se llega ubicando el cursor sobre el módulo de <a class="btn cl-white bg-blue px-3">Solicitudes</a>  y en la parte inferior se despliega el conjunto de transacciones disponibles para el módulo de SS acorde a los permisos otorgados al usuario. Luego, ingrese dando clic en la opción **Reclasificar**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_30.png"
  alt:"MM - Ir a Reclasificar"
%}

Para continuar con la transacción dar clic en el botón ubicado en la parte superior izquierda <a class="btn white">Reclasificar</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_31.png"
  alt:"MM - Visor Reclasificar"
%}

A continuación se ingresa a la Ventana Detalle de la Solicitud seleccionada en el visor:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_32.png"
  alt:"MM - Ventana Detalle Reclasificar"
%}

Para definir a que compañía se va a reclasificar la(s) SS, primero se define si se desea reclasificar la solicitud seleccionada en el visor o un conjunto de solicitudes previamente seleccionadas en el visor. Para la primera opción, escoger la opción: 
<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1">Reclasificar solamente esta Solicitud</span></a> y para un Subgrupo:  <a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1">Reclasificar todas las Solicitudes en el visor</span></a>,  éste a su vez tiene un paréntesis indicado el número de registros a reclasificar.

Segundo, se escoge la compañía correcta a la que va a mandar la SS desplegando la lista del campo <a class="btn cl-gray bg-white bd-white px-6"> Compañía Destino </a> el cual lista las compañías activas. 
Para hacer efectivo el cambio dar clic en el botón  <a class="btn blue">ENVIAR <span class="mdi mdi-send"></span></a> ubicado en la parte superior izquierda.  Éste botón se encarga de transferir la(s) Solicitudes de Servicio a su destino seleccionado.

En la parte superior se encuentra una nota en color rojo haciendo énfasis en el estado en el que debe encontrarse el estado de la SS para reclasificarla. Para continuar dar un clic en <a class="btn bg-gray cl-black">ACEPTAR</a> cuando se muestre el mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_33.png"
  alt:"MM - Enviar SS"
%}

El sistema confirma cuando se ha terminado la transacción:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_34.png"
  alt:"MM - Mensaje Alerta Reclasificar SS"
%}

## Enviar a Historia

El objetivo de esta transacción es desplazar hacia el módulo de Historia de Mantenimiento las Solicitudes  con estado  **CE** "Cerrada Ejecutada", **K** "Cancelada No Ejecutada" y **CO** "Cerrada con Orden"" para posteriores análisis de Indicadores.

Teniendo el permiso administrativo, se sobrepone el cursor sobre el módulo de <a class="btn cl-white bg-blue px-3">Solicitudes</a> y escoger la opción **Enviar a Historia**:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_35.png"
  alt:"MM - Ir a Enviar a Historia"
%}

Este es una transacción controlada por medio de las siguientes opciones a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_36.png"
  alt:"MM - Enviar a Historia"
%}

A continuación se describen los campos que componen esta Ventana información adicional: 

En la ventana aparece el botón <a class="btn gray">Enviar a Historia</a> y tres casillas de selección. Estas casillas de selección parametrizan los registros que se desean enviar al módulo de <a class="btn cl-white bg-blue px-3">Historia</a> :

<a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Todos los registros (cerradas y/o canceladas) </span></a> : Realiza el envío de todas las Solicitudes de Servicio existentes en la base de datos, sin importar cualquier Subgrupo activo.

<a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Todos los registros del visor (cerradas y/o canceladas) </span></a>: Realiza el envío de todas las Solicitudes de Servicio seleccionadas en el visor mediante un Subgrupo.

<a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Registro seleccionado </span></a>: Realiza el envío de la Solicitud de Servicio que está resaltada en el visor (tiene la línea verde del cursor sobre sí).

Para efectuar la transacción a Historia, se debe seleccionar una de las opciones anteriores y luego hacer accionar el botón <a class="btn gray">Enviar a Historia</a>. El sistema muestra un mensaje alerta antes terminar con el proceso:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_37.png"
  alt:"MM - Mensaje Alerta Enviar a Historia"
%}

Para continuar, seleccione el botón <a class="btn bg-gray cl-black">ACEPTAR</a> , el cual hace que el sistema confirme la cantidad de registros a Historia:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_38.png"
  alt:"MM - Mensaje Alerta Enviar a Historia"
%}

> **Nota:** Las Solitudes en estado K "Cancelada No Ejecutada" que no se envían a la Historia, es porque deben tener asignado un Activo Válido asignado a la Solicitud. Esto se muestra en un Mensaje Alerta.

## Dashboard de SS

A esta opción se llega sobreponiendo el cursor sobre el módulo de  <a class="btn cl-white bg-blue px-3">Solicitudes</a> donde se despliega un submenú de transacciones disponibles, luego, seleccionar **DashBoard de SS**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_39.png"
  alt:"SS - Ir a Dashboard de SS"
%}

Este comando permite visualizar en tiempo real el comportamiento de los registros de las SS con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_40.png"
  alt:"SS - Dashboard de SS"
%}

La información del rectángulo de color naranja ubicado en la parte superior derecha como guía a modo de fracción (N/M), indica el número de registros del subgrupo en el visor(N) sobre el número total de registros de SS existentes en la base de datos (M). Si no hay preselección, los dos números en sus totales son los mismos.
También un indicador de la existencia de un subgrupo representado asi <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a> que se ubica al lado derecho de dicha fracción. Esto quiere decir que el usuario puede editar los gráficos en base un subgrupo existente por medio de la función Subgrupo <span class="mdi mdi-filter-variant"></span>

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_41.png"
  alt:"SS - Dashboard Subgrupo"
%}

Para personalizar la vista de los gráficos o tener una información específica se recomienda hacer subgrupos a través del ícono subgrupo <span class="mdi mdi-filter-variant"></span>. Los DashBoards permiten ocultar información con solo dar un clic sobre sus rectángulos de colores como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_42.png"
  alt:"SS - Dashboard Características"
%}

Sí se desea restablecer la información, se debe dar clic al ícono <span class="mdi mdi-autorenew"></span>. En cambio, si se desea descargar el gráfico en un formato de imagen, es posible dando clic al ícono <span class="mdi mdi-download"></span> y al se sobrepone el cursor sobre alguno de los recuadros de color aparece en la parte inferior el significado:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_43.png"
  alt:"SS - Dashboard Características"
%}