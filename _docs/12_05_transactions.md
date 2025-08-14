---
title: Transacciones
subtitle: Esta sección explica como se usa la transacción eliminar masivamente historia de mantenimiento archivada
tags: [setup]
author: win
order: '12_05'
media: "../../assets/images/docs/"
---

### Eliminar Masivamente HA

Eliminar masivamente se ejecuta cuando se tiene la certeza de que un grupo de datos en HA ya no es requerido, porque los Activos referidos ya no existen o porque su historia es irrelevante.

Para ir a la transacción sobreponer el cursor sobre el módulo de  <a class="btn blue">Historia Archivada</a> y dar clic en la opción **Eliminar Masivamente**, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"12_20.png"
  alt:"Historia Archivada - Ir a Eliminar Masivamente"
%}

Para eliminar un conjunto de registros se debe primero realizar un Subgrupo no mayor de 5000 mil registros (este proceso puede tardar hasta 5 horas dependiendo del subgrupo), de no hacerlo el sistema muestra un mensaje de advertencia:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"12_21.png"
  alt:"Historia - Alerta Eliminar Masivamente"
%}

Una vez se tenga el conjunto de registros preseleccionados con el Subgrupo proceder con la transacción así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"12_22.png"
  alt:"Historia Archivada - Alerta Eliminar Masivamente"
%}

Se puede eliminar un registro de OT, SS, Paro o un conjunto de registros preseleccionados: 

**Todas las HI del visor:** Esta opción eliminar todos los registros históricos de la Ventana Visor, es decir, los registros preseleccionados a través del Subgrupo actual.

**La HI seleccionada:** Esta opción permite eliminar el registro que está seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

Para continuar dar clic en el botón <a class="btn blue">eliminar historia</a> ubicado debajo de las opciones anteriores, el sistema muestra un mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"12_23.png"
  alt:"Historia Archivada - Mensaje Advertencia Eliminar Masivamente"
%}

Para finalizar el proceso dar clic en <a class="btn blue">aceptar</a>, y el sistema confirma  a través de un mensaje aviso: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"12_24.png"
  alt:"Historia - Aviso Satisfactorio Eliminar Masivamente"
%}
