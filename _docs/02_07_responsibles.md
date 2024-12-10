---
title: Responsables
subtitle: Se explica la tabla de responsables, alcance y funcionalidad.
tags: [setup]
author: win
order: '02_07'
---

Esta es una tabla de consulta que se crea automáticamente de la tabla de **Terceros** con los nombres propios de las personas definidas para cada Oficio o los nombres de razones sociales de los Talleres/Servicios Externos o Contratistas, definidos  para  cada grupo o Especialidad. En esta tabla solo se modifica el estado de un Tercero asociado a su Oficio, y en la que se excluyen los Terceros tipo **PF**, ya que éstos no prestan servicio de mantenimiento y es la que usa el módulo de <a class="btn cl-white bg-blue px-6"> Órdenes </a> para sociar los Responsables.

Se visualiza la siguiente información relevante del registro o Tercero cuando se ingresa a alguno de los ellos así:

![Procesar imagen](../../assets/images/cap02/chp02_img47.png)
_**Imagen 31.** Ventana Detalle Responsable_

En la gráfica anterior, Ventana Detalle del Responsable, se encuentra la información relevante al Responsable seleccionado en el Visor.

A continuación se describen brevemente los campos que componen el registro:

**Centro Responsable:** En este campo se muestra el Centro Responsable asociado al Responsable.

**Oficio:** En este campo se muestra el Oficio al cual pertenece el Responsable.

**Código TE:** En este campo se muestra el código del Tercero  definido en su tabla. De esta forma se establece la relación entre el Responsable y su Oficio, y mediante este último con el Centro Responsable.

**Nombre TE:** En este campo se muestra el nombre del Tercero definido en su tabla.

- **Inactivo/Activo:** se trata de un switche en el sistema en el que se puede inactivar un Tercero asociado a un Oficio para indicar que no presta mas servicio dentro de la Organización. Esto se debe inactivar en conjunto con la tabla **Terceros** para dar de baja completamente a un Tercero para que no aparezca mas en los listados de Responsables ejecutores a asignar en una SS, OT o PA.


**Tipo TE:** En este campo se muestra el tipo del Tercero definido en su tabla.

**Contacto TE:** En este campo se muestra el contacto del Tercero definido en su tabla.

**Correo Electrónico TE:** En este campo se muestra el correo electrónico del Tercero definido en su tabla.

**Centro de Costo:** En este campo se muestra el nombre del Centro de Costo del Tercero definido en su tabla.

**Sub CC:** En este campo se muestra el código del Sub CC que está relacionado al Centro de Costo definido en el campo anterior.

**Estado:** Es un campo que muestra un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Responsable ante el aplicativo mediante un switche.
