---
title: Estados
subtitle: Se explica la tabla de estados y su alcance en los módulos.
tags: [setup]
author: win
order: '02_31'
media: "../../assets/images/docs/"
---


Esta tabla de Infraestructura contiene  una lista de los **“Estados”** predefinidos en el sistema, que caracterizan los Activos u Objetos de Mantenimiento, las Órdenes de Trabajo, las Solicitudes de Servicio y Paros (**FDA**).

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_76.png"
  alt:"Ventana Detalle Estado"
%}

Es posible, en la Tabla de Estados la parametrización de los estados de los módulos de Órdenes de Trabajo, Solicitudes de Servicio, Activos y Paros (**FDA**); con el objeto de darle individualidad a una empresa para adecuar los propios o para adicionar nuevos, que reflejen situaciones corporativas reales y necesarias. Cada estado tiene una longitud de 40 caracteres alfanuméricos, y puede ser de uno de dos tipos:

**Estado de Activo:** Descripción que se usa al definir un Activo o Equipo para personalizar su estado respecto a operatividad, actividad/inactividad y propiedad. Tener activa la opción de Indicativo-(Uso) indica que su estado se encuentra activo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_77.png"
  alt:"Ventana Detalle Estado - Activos"
%}

**Estado de Orden de Trabajo:** Descripción que se usa para personalizar los estados
en los que puede encontrarse una Orden de Trabajo. Se utiliza el campo de Indicativo-
(Abreviatura) para especificar la abreviatura del Estado. Es posible crear nuevos estados
de OT, ellos se consideran variaciones del estado de Ejecución (EJ). Existen siete Estados
de OTs que no pueden ser eliminados ni modificados dado que se utilizan por defecto en
la funcionalidad del sistema, estos son:

- **EJ** - En ejecución
- **K** - Cancelada o no Ejecutada
- **P** – Pendiente de Ejecución
- **CE** – Cerrada Ejecutada
- **PL** – Planeada
- **PR** – Programada
- **CP** – Cerrada Parcial 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_78.png"
  alt:"Ventana Detalle Estado - Orden de Trabajo"
%}

**Estado de Solicitud de Servicio:** Descripción que se usa para personalizar los estados en los que puede encontrarse una Solicitud de  Servicio. Se utiliza el campo de Indicativo-(Abreviatura) para especificar la abreviatura del Estado. Es posible crear nuevos estados de SS, ellos se consideran variaciones del estado En Análisis (AN). Existen siete Estados de SS que no pueden ser eliminados o modificados dado que se utilizan por defecto en la funcionalidad del sistema, estos son:

- **AN** - En Análisis
- **AS** - Asignada
- **NE** - Cerrada No Ejecutada
- **CE** - Cerrada Ejecutada
- **CO** - Cerrada con OT
- **EJ** - En Ejecución
- **CP** - Cerrada Parcial 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_79.png"
  alt:"Ventana Detalle Estado -Solicitud de Servicio"
%}

**Estado de Paros (FDA):** Descripción que se usa para personalizar los estados en los que puede encontrarse un Paro (FDA). Se utiliza el campo de Indicativo - (Abreviatura) para especificar la abreviatura del Estado. Es posible crear nuevos estados de FDA, ellos se consideran variaciones del estado En Análisis (AN).
Existen siete Estados de FDA que no pueden ser eliminados ni modificados dado que se utilizan por defecto en la funcionalidad del sistema, estos son:

- **AN** - En Análisis
- **EJ** - En Ejecución
- **CE** - Cerrada Ejecutada
- **CO** - Cerrada con OT
- **CP** - Cerrada Parcial 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_80.png"
  alt:"Ventana Detalle Estado - Paros"
%}