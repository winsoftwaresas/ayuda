---
title: Centros Responsables
subtitle: Se explican los centros responsables, alcance y funcionalidades dentro de la tabla.
tags: [setup]
author: win
order: '02_04'
media: "../../assets/images/docs/"
---


Son los centros especializados, encargados de ejecutar labores de mantenimiento. Se incluyen tanto los Centros Responsables de Mantenimiento propios de la empresa como los externos a ella (Contratistas y Talleres/Servicios Externos).

Se define a través de su código y descripción según costumbre en la empresa. El código tiene un espacio reducido compuesto de 13 caracteres; esto debido a la necesidad de asociar posteriormente a cada Centro Responsable el Oficio o Especialidad, o los Oficios o Especialidades que le pertenecen.    

Cuando se trata de los Centros Responsables Internos de la organización existen  varias alternativas de definición:

En primer lugar como Centros especialistas en cada uno de los tipos de  mantenimiento: Mecánico, Eléctrico, Instrumentación u otros.

Pero pueden ser también Centros técnicos de mantenimiento multiobjetivo, conformados por especialistas de cada tipo de mantenimiento, que prestan servicio a uno o varios sectores productivos de la organización.

**AM** administra los Centros Responsables de mantenimiento de la empresa cualquiera que sea su forma en la jerarquía organizacional.

Se debe definir además, como un Centro Responsable, al conjunto de Talleres o Servicios Externos que prestan servicio a la empresa, por solicitud y a elección de ella,  sin  que exista un compromiso previo contractual.

De igual forma, debe constituir un Centro Responsable el conjunto de Contratistas, externos, que prestan servicio a la empresa en forma permanente y rutinaria sobre bases contractuales.

**Ejemplos de Centros Responsables:**

**Talleres Externos:** Tall.Ext

**Contratistas:** Contrat

**Mantenimiento Mecánico:** Mtto.Mec

**Taller Eléctrico:** Tall.Elec

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_20.png"
  alt:"Ventana Detalle Centro Responsable"
%}

En la gráfica anterior, Ventana Detalle Centro Responsable, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Centro Responsable seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada unos se da una breve explicación:

**Nombre CR:** En este campo se escribe el código del Centro Responsable, con una capacidad de 13 caracteres.

**Estado:** Es un campo para seleccionar un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Centro Responsable ante el aplicativo.

**Tipo:** Se elige si es un Centro Responsable de tipo Interno, sí es de la empresa; o tipo Externo, sí corresponde a un Taller/Servicio Externo o Contratista.
