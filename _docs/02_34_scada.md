---
title: Rangos Scada
subtitle: Se explica la tabla de Rangos Scada y su alcance.
tags: [setup]
author: win
order: '02_34'
media: "../../assets/images/docs/"
---

La tabla **Rangos SCADA**, que permite asociar un activo con una característica específica y establecer los valores mínimo y máximo permitidos para las lecturas provenientes del sistema SCADA. Estos parámetros se administran directamente desde el módulo de Infraestructura y pueden configurarse de manera independiente para cada activo y característica monitoreada.

Esta funcionalidad permite validar automáticamente las lecturas recibidas desde SCADA, evitando el registro de datos atípicos o no representativos cuando los equipos se encuentran apagados, en mantenimiento o fuera de operación. De esta manera, se conserva la confiabilidad de la información histórica y se mejora la calidad de los datos utilizados en los procesos de análisis, monitoreo y toma de decisiones.s <a class="btn cl-white bg-blue px-3">Rangos Scada</a>.

Para ingresar, dar un clic sobre la siguiente tabla, que conlleva a la ventana visor:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_87.png"
  alt:"Infraestructura - Tabla Rangos Scada"
%}


{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_88.png"
  alt:"Tabla Rangos Scada"
%}

El usuario puede configurar o crear aquellas caracteristicas selesccionado el activo en relación y los valores minimo y maximo, a través del botón <a class="btn cl-blue bg-white px-3"> NUEVO</a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_89.png"
  alt:"Detalle Tabla Rangos Scada"
%}

De igual forma es posible actualizar información a través del botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>:
