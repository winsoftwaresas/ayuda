---
title: Causas de Cierre de OT
subtitle: Se explica la tabla de causas de cierre de una órden de trabajo y su alcance.
tags: [setup]
author: win
order: '02_23'
media: "../../assets/images/docs/"
---

Es la tabla en la que se registran las posibles Causas de Cierre de una Orden de Trabajo (ya sea Ejecutada o No Ejecutada). También es una tabla con contenido propuesto por el aplicativo, que puede ser complementada o adecuada a gusto del usuario.

La primera que se define se refiere a las Órdenes de Trabajo Cerradas Ejecutadas; todas las que siguen son Causas de Cierre para Órdenes de Trabajo Cerradas No Ejecutadas.

En el sistema se incluyen las siguientes Causas de Cierre:

**CAUSAS DE CIERRE**

- OT Ejecutada
- Cambio por otra OT
- Error en la programación
- Equipo fuera de servicio
- Equipo no disponible
- Cierre de mes
- Labor no requerida
- Otra causa

> **Nota:** La Causa de Cierre **“OT Ejecutada”** es implícita a las OT cerradas ejecutadas. Esta
Causa de Cierre no es editable.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_65.png"
  alt:"Ventana Detalle Causa de Cierre de OT"
%}

En la gráfica anterior, Ventana Detalle de la Causa de Cierre de OT, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante a la Causa de Cierre seleccionada en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre:** En este campo se escribe la posible Causa de Cierre de una Orden de Trabajo.

**Tipo:**En este campo están predeterminadas dos opciones: Orden de Trabajo Ejecutada y Orden de Trabajo No Ejecutada.
