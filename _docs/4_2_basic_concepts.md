---
title: Conceptos Básicos sobre Almacenes, Materiales y Repuestos
subtitle: Se trata de una bodega con capacidad de almacenamiento y con funciones de administración para los distintos tipos de ítems que contiene. 
tags: [setup]
author: win
---

#	Conceptos	Básicos	sobre	Almacenes,	Materiales	y Repuestos

## Un Almacén

Hay bodegas de  Materias primas, de Materiales y Repuestos, de Producto en Proceso, de Producto Terminado, y las hay también que contienen mezclas de los anteriores. Para claridad,  en este capítulo se hace  un  enfoque  hacia  las  bodegas  de  Materiales  y  Repuestos,  y  hacia  aquellas  que siendo mixtas, contienen los Repuestos usados por Mantenimiento.

Una bodega mixta de materiales y repuestos puede contener cuatro grandes grupos  de ítems,  con  identidades  propias  en  modelo  de  inventarios,  de  codificación,  de  tipos  de movimiento  y  de  administración  general. Ellos  son: materiales  y  repuestos  universales, materiales y repuestos específicos de Activos / Equipos, Insumos, y Activos.

Por ello, un Almacén fundamenta su operación en tres definiciones:


1. 	Un esquema de codificación estándar para todos los ítems que contiene o que está en capacidad de contener.


2. 	Un  conjunto  de  conceptos  de  Entrada  y  de  Salida  que  definen  claramente  cada operación a ser ejecutada, con sus alcances, condicionamientos y requerimientos.


3. 	Un sistema de costeo, que sirve de base para el cálculo del costo unitario de  cada código tras una entrada valorizada. Este costo unitario es normalmente el que se usa para valorizar cada Salida, para consumo o utilización de un ítem del Almacén.

### Almacenes y – **AM**–

**AM**** Predefine   en   forma   natural   un   Almacén,   en   la   Tabla   de   Almacenes (Infraestructura), y además permite la definición de varios adicionales. Para cada Almacén se definen sus  conceptos de movimiento de  Kárdex  en la Tabla  Conceptos  de Kárdex (Infraestructura). Aunque  existen  conceptos  predefinidos,   siempre  se  pueden  definir nuevos conceptos de Entrada, de Salida y de Ajuste, garantizando la consistencia e integridad de la información.

El módulo de  Almacén de Repuestos permite administrar de manera independiente cada uno de los almacenes creados en la Tabla de Almacenes (Infraestructura) y dependiendo del usuario que ingrese al **AM** tendrá sus propios permisos de administración para cada almacén. 

#### 	Visión General: Funciones Básicas sobre Almacén de Repuestos

Creación de Repuestos: **AM**** suministra dos procesos básicos para crear y actualizar Repuestos:

- Creación manual.

- Importación desde  un  Sistema de  Almacén /  Inventario de  Repuestos  corporativo externo a través de una interfaz automática.

El   primer   proceso básico de creación de datos de   Repuestos consiste en el   registro manual, organizado, uno a uno de los códigos de Repuestos del Almacén,  junto con su información característica, en la tabla de Almacén de Repuestos de la Base de Datos de **AM****.

El   primer   proceso básico de creación de datos de   Repuestos consiste en el   registro manual, organizado, uno a uno de los códigos de Repuestos del Almacén,  junto con su información característica, en la tabla de Almacén de Repuestos de la Base de Datos de **AM****.

El segundo proceso consiste en tomar la información de los Repuestos desde un sistema de Inventarios preexistente y copiarlos en la tabla de Almacén de Repuestos de **AM****,  mediante una interfaz automática que se ejecutará en tiempo real o en un momento definido. El detalle del desarrollo de esta interfaz es acordado entre el Cliente y el Proveedor. En este proceso se requiere que se haga una preparación de los datos preexistente, dándoles un formato que facilite su importación a la Base de Datos de **AM****.

**AM**** suministra el formato donde se detalla el diseño del archivo de interface. A este formato se deben acomodar los datos de Repuestos a transferir pues es el único  que **AM****  es  capaz  de  interpretar  para  realizar  la  creación  automática  de  la  tabla   de Almacén de Repuestos.

Una vez se encuentre el archivo de interfaz listo, el Cliente lo debe dejar en una tabla intermedia y cuando se ejecute la interfaz automática, **AM** importa la información de los Repuestos a la base de datos de **AM**. 

Este proceso es útil tanto para crear el archivo de Repuestos, como para actualizarlo. Se recomienda para ello consultar con el asesor en Informática o con Servicio al  Cliente del Proveedor.

**Actualización de la Información General de un Repuesto:** Se distinguen dos tipos  de actualizaciones de Repuestos. Uno que registra los cambios en la información general del Repuesto y otro que registra los cambios en la información de Existencias y Costo Unitario del Repuesto, ocasionados en el movimiento de entrada y salida del almacén.

La actualización de la información general de Repuestos se realiza a través de la ventana Detalle en la Ventana Principal de Repuestos, según procedimientos que se exponen más adelante en este capítulo.

**Actualización   de   la   Información   de   Inventarios   de   un   Repuesto:**   Aunque   la actualización de  los  parámetros de inventarios (stock  en  existencia  y costo  unitario  del Repuesto, principalmente) se puede realizar en forma manual, en la  ventana Detalle en Repuestos,  por  parte  de  un  usuario  con  los  permisos  adecuados,  existen  otros  dos mecanismos para hacerlo.

El  primero,  mediante la  misma  interf ase  que  se  utilizó  en  el  proceso  automático  de creación de la tabla de Almacén de Repuestos.  Este caso reviste un escenario  particular cuando el Sistema de Inventario de Repuestos externo a **AM**** es el oficial  y  el contable, en la Organización. Toda  transacción sobre materiales  o   Repuestos  se  realiza  utilizando  las funciones de este sistema externo: administración de códigos  de materiales y Repuestos, solicitudes y despachos, entradas y salidas, etc. Esto  significa entonces que los módulos de Almacén de Repuestos y de Kárdex de **AM**** serán  utilizados por el área de Mantenimiento solo como referencia del inventario existente y  del costo unitario vigente, siendo estos últimos actualizados por saldos periódicos desde el sistema externo.

El uso de dicha interfase es factible pues el proceso de Importación que realiza  **AM**** consiste solo en  remplazar los saldos  de  Repuestos  existentes,  por  los  saldos  que  se importan desde el sistema externo. No se realizan sumas ni restas, solo el reemplazo de saldos para los Repuestos contenidos en el archivo de  importación para la interfase.  Es claro que  la información a ser importada por **AM**** se genera en el sistema externo, de acuerdo a un formato predefinido y debe contener la información de los saldos, inmediatamente después de un proceso de actualización o de control en dicho sistema externo.

La ejecución de la interfase mencionada anteriormente se puede realizar desde el servidor de Base de Datos de **AM**** mediante la programación de un Paquete de Transformación de Datos (DTS) para ejecución automática. Para esto es necesario disponer de **AM**** con SQL Server.

El  segundo,  mediante  el  Kárdex  que  suministra  **AM** **. Es  el  procedimiento   natural suministrado por el aplicativo. Mediante el Kárdex de Almacén se registran en todo detalle, las Entradas, las Salidas y los Ajustes, de Repuestos y artículos de cada Almacén.

Una transacción de entrada al Almacén actualiza los saldos en la tabla de Almacén de Repuestos, incrementando  la  cantidad  en  existencia  y  actualizando  el  valor  unitario,  pero  también genera un rastro de la transacción, en el archivo de movimiento de Kárdex.

Una transacción de salida del Almacén actualiza los saldos en la tabla  de Almacén de Repuestos, decrementando la cantidad en existencia y actualiza el valor unitario, pero también genera un rastro de la transacción en el archivo de movimiento de Kárdex. Cuando se trata de una transacción que involucra una Orden de Trabajo, además de  lo anterior, el sistema carga en la  Orden  de Trabajo referenciada,  la  cantidad de  materiales que  salieron del almacén, manteniendo en forma consistente el Inventario de Repuestos, el Movimiento de Kárdex y el consumo de Materiales y Repuestos de las Órdenes de Trabajo.

Una transacción de ajuste, puede ser de 2 tipos: Ajuste por valor o ajuste por cantidad. Un ajuste por valor, aumenta o disminuye el valor unitario actual del repuesto referenciado en el movimiento, lo que genera una inflación del costo total del  inventario del repuesto. Un ajuste por cantidad, aumenta o disminuye el Inventario actual del repuesto referenciado en el movimiento, pero no afecta el valor unitario del  mismo, sin embargo, si afecta el costo total del inventario. Para que un usuario pueda realizar transacciones de ajuste debe tener los permisos especiales que para ello se definen en el módulo de administración.
