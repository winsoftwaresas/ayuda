---
title: Conceptos Básicos sobre la Infraestructura
subtitle: la infraestructura es un conjunto de archivos y tablas parametrizables que sirven para que AM sea adecuado para la organización de mantenimiento de la empresa y sus características.
tags: [setup]
author: win
order: 02_02
---
La infraestructura es un conjunto de archivos y tablas parametrizables que sirven para que **AM** se adapte a la organización de mantenimiento de la empresa y sus características.

A la Infraestructura pertenecen tablas que **AM** utiliza como base para agilizar la definición de Activos, Repuestos, Programas de Mantenimiento y sus respectivas Órdenes de Trabajo. Los datos correspondientes a los registros de estas tablas deben ser los primeros en entrar al sistema, después de lo cual se actualizan con una relativa baja frecuencia.

Es recomendable ingresar los datos en el siguiente orden: Centros de Costo, Centros Responsables, Oficios, Terceros, Ubicaciones Físicas, Contratos, Almacenes, Unidades de Medida, Monedas, Contadores, Características, Otros Conceptos de Costo, Causas de Pendiente, Tipos de Actividad, Causas de Cierre, Acciones Técnicas, Causas de Falla, Efectos de Falla, Conceptos de Kárdex, Operaciones, Referencias, Clasificadores y Estados. Estas se consideran las tablas básicas, que deberán, en su mayoría, ser revisadas y personalizadas. Algunas tablas son de utilidad opcional según se use o no el módulo de Almacén, como por ejemplo la de Unidades de Medida y Monedas. Otras tablas son instaladas con valores preconfigurados (valores por defecto), válidos en muchos contextos a manera de ejemplo; sin embargo, sus contenidos se pueden modificar, borrar o ser actualizados con información nueva.

Después de haber ingresado los datos básicos de Infraestructura, se debe continuar con la información correspondiente a Activos y Almacén que se encuentra en el menú principal.

Un registro de una tabla de Infraestructura, no puede ser borrado si está siendo utilizado, o si está asociado a: un Activo, un Repuesto, un Movimiento de Kárdex, un Programa de Mantenimiento, una Solicitud de Servicio, un Paro, una Órden o a la Historia de Mantenimiento. Cuando se intenta hacer esta operación, el sistema alerta con un mensaje.

A continuación se definen los conceptos básicos sobre la conformación de la Infraestructura, elementos generales y principales tablas que la componen.

![Procesar imagen](../assets/images/cap02/chp02_img01.png)
_**Imagen 1.** Infraestructura_







