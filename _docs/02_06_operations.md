---
title: Operaciones
subtitle: Aquí se esfecificará la creación de una  Operación en AM.
tags: [setup]
author: win
order: 02_06
---

Permite registrar las Operaciones, requeridas en el proceso de elaboración de una Referencia. Estas Operaciones se van a referenciar como Operación Actual (Óp. Actual) en el módulo de Paros / Averías

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img70.png)
_**Imagen 70.** Ventana Detalle Operación_

En la gráfica anterior, Ventana Detalle de la Operación, se aprecian sus componentes y sus espectivos contenidos, sobre cada campo se da una breve explicación:

**Nombre:** Es un campo de treinta caracteres que define la operación.

**Estado:** Una Operación puede encontrarse en uno de dos estados: Activa o Inactiva. El estado definirá si puede o no ser asociada con una Referencia.

## Referencias

Permite registrar, cuando sea aplicable, las Referencias de Producto de la compañía usuaria. Tales Referencias de Producto se usan para complementar la información de un paro o una avería en el módulo de Paros / Averías. El objetivo es poder identificar detalladamente las circunstancias que rodearon el paro o la avería qué Referencia, y en qué operación particular del proceso se estaba elaborando.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Código:** Es un alfanumérico único de 10 caracteres, que identifica la Referencia de producto.

**Nombre:** Contiene una descripción de la Referencia de Producto, cuenta con un espacio de 80 caracteres.

**Estado:** Una Referencia puede encontrarse en uno de dos estados: Activa o Inactiva.

**Adicionar OP:** Es posible adicionar una o varias Operaciones a una Referencia.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img71.png)
_**Imagen 71.** Ventana Detalle Referencia_

En la ventana anterior Ventana Detalle de la Referencia se seleccionan las Operaciones de la lista despegable y se adicionan con el botón del signo Más <span class="mdi mdi-plus-circle icon white"></span> a la lista de Operaciones asociadas a una Referencia.

Para desasociar una Operación, se ubica el cursor en la Operación a desasociar y se presiona el icono de Eliminar (basura) <span class="mdi mdi-delete"></span> eliminar (basura).

>_**Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Referencia._

## Tipos de Régimen

Esta tabla de Infraestructura contiene una lista predefinida en el sistema de los tipos de régimen que aplican en Colombia, que pueden asociarse a los Terceros de carácter informativo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img72.png)
_**Imagen 72.** Ventana Detalle Tipo de Régimen_

Es posible, en la Tabla de Tipos de Régimen la parametrización de más tipos de régimen para la tabla de Terceros en el módulo de Infraestructura; con el objeto de darle individualidad a un responsable interno, empleado, responsable externo o una empresa para adecuar los propios o para adicionar nuevos. Cada tipo de régimen tiene una longitud de 15 caracteres alfanuméricos.

## Estados

Esta tabla de Infraestructura contiene  una lista de los **“Estados”** predefinidos en el sistema, que caracterizan los Activos u Objetos de Mantenimiento, las Órdenes de Trabajo, las Solicitudes de Servicio y Paros (**FDA**).

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img73.png)
_**Imagen 73.** Ventana Detalle Estado_

Es posible, en la Tabla de Estados la parametrización de los estados de los módulos de Órdenes de Trabajo, Solicitudes de Servicio, Activos y Paros (**FDA**); con el objeto de darle individualidad a una empresa para adecuar los propios o para adicionar nuevos, que reflejen situaciones corporativas reales y necesarias. Cada estado tiene una longitud de 40 caracteres alfanuméricos, y puede ser de uno de dos tipos:

**Estado de Activo:** Descripción que se usa al definir un Activo o Equipo para personalizar su estado respecto a operatividad, actividad/inactividad y propiedad. Tener activa la opción de Indicativo-(Uso) indica que su estado se encuentra activo:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img74.png)
_**Imagen 74.** Ventana Detalle Estado_

Estado de Solicitud de Servicio: Descripción que se usa para personalizar los estados en los que puede encontrarse una Solicitud de  Servicio. Se utiliza el campo de Indicativo-(Abreviatura) para especificar la abreviatura del Estado. Es posible crear nuevos estados de SS, ellos se consideran variaciones  del  estado En Análisis (AN). Existen siete Estados de SS que no pueden ser nados ni modificados dado que se utilizan por defecto en la funcionalidad del sistema, estos son:

- **AN-** En Análisis
- **AS-** Asignada
- **NE-** Cerrada No Ejecutada
- **CE-** Cerrada Ejecutada
- **CO-** Cerrada con OT
- **EJ-** En Ejecución
- **CP-** Cerrada Parcial (AMovil)

![tipos de rgimen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img81.png)

# Exportar

Esta opción permite la exportación de los registros de la tabla seleccionada, que aparecen en el visor, totales o provenientes de un subgrupo, a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación.

![tipos de rgimen](https://ayuda.winsoftware.com.co/assets/images/cap02/chp02_img82.png)

Al darle clic en el botón  `<a class="btn">` “Exportar”`</a>`, se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los registros contenidos en el visor a un archivo plano, para luego ser analizados.

Adicionalmente, es posible exportar todos los campos de la ventana Detalle de los registros, para esto se da clic en el cuadro llamado `<a class="btn">`Exportar Todos Los Campos`</a>`. También, es posible exportar uno o varios campos de la ventana Detalle de los registros, para esto se da clic en cada uno de los cuadros que acompañan los campos.
