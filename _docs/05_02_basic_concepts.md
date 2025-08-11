---
title: Conceptos Básicos sobre el Kárdex de Almacén
subtitle: Definición, alcance y funcionalidades.
tags: [setup]
author: win
order: '05_02'
media: "../../assets/images/docs/"
---
El Kárdex de Almacén es el módulo encargado del registro detallado de todo Movimiento de Entrada, Salida y Ajuste de los almacenes activos en **AM** en la respectiva compañía. A través del Kárdex se realiza la  actualización los saldos del módulo de Almacén, en todo lo concerniente a Entradas, Salidas y Ajustes,  manteniendo tal movimiento disponible para consultas o estudios especiales. Su dominio puede ser uno o varios de los Almacenes definidos en la compañía activa.

Una única transacción del Kárdex, mantiene consistencia integral entre tres tablas distintas: Almacén, Órdenes de Trabajo y Kárdex. Esto significa que una transacción de entrada al Almacén registrada desde el Kárdex, actualiza también el saldo y el nivel de existencia en la ficha técnica del Material/Repuesto incrementándolo. Una transacción de salida del almacén, registrada en el Kárdex, actualiza el saldo y el nivel de existencia en la ficha técnica del Material/Repuesto decrementándolo y al tiempo actualiza la tabla de Órdenes de Trabajo, cargando el consumo de tales Materiales/Repuestos.

Es una herramienta práctica cuando no se dispone  en  la organización de un Sistema Corporativo de Almacén que administre los Insumos, Materiales y Repuestos de Mantenimiento.  En este caso el Kárdex de **AM**, en conjunto con el  módulo de Almacén, pueden suplir tal necesidad e incluso otras alrededor del tema  de inventarios, como por ejemplo Administrar el Inventario de Materia Prima, de Producto en Proceso, de Material de Empaque, de Útiles de Oficina, de Aseo y Otros.

Pero también es muy útil cuando ya existe un   Sistema externo dedicado a la administración del Inventario de Materiales o Repuestos de la corporación, a través del cual se realiza toda gestión y movimiento de entradas y salidas. En este caso **AM** debe enterarse del resultado de  cada movimiento ejecutado a través del   sistema externo. Para ello tal sistema externo debe poder entregar un archivo a manera de  interface, en el que se comunique a **AM**: los saldos en existencia y el valor unitario vigente de cada repuesto, después de aquellos movimientos.

Es posible definir un gran número de Conceptos de Entrada y Salida de artículos del Almacén. Los Conceptos de Entrada son las operaciones por las cuales ingresan los Materiales o Repuestos al  Almacén. Se puede registrar varios conceptos de entrada. Dentro de los conceptos de entrada existen algunos que se encuentran predefinidos en **AM**. Aún así, es posible definir cuantos sean requeridos y definir para cada uno sus requerimientos especiales. Por ejemplo, habrá conceptos de  entrada que podrán exigir la información del número de la Órden de Trabajo, cuando se trate de una entrada por devolución de un Repuesto/Material al Almacén, desde una Órden de Trabajo que lo solicitó y no lo utilizó.

Los Conceptos de Salida son las operaciones por las cuales se produce un retiro de los repuestos  del  Almacén. Se puede registrar un número variado de conceptos de salida. Dentro de los conceptos de salida existen algunos que se encuentran  predefinidos en **AM**. Aún así, es posible definir cuantos sean requeridos y definir para cada uno sus requerimientos especiales. Por ejemplo, habrá  conceptos de salida que podrán exigir el número  de  la órden de Trabajo cuando se trate de una salida de repuestos hacia esa Órden de Trabajo preexistente en **AM**. 

El Kárdex trabaja además en consonancia con el método de valorización de  inventarios más adecuado, entre las varias opciones: Promedio Ponderado y Costo del Último Ingreso, que se definen para cada Almacén. En el primer caso el costo unitario del código que acaba de ingresar   se calcula ponderando el  número de unidades que ingresan a  su respectivo costo unitario, con el número de unidades que existían previamente, a su costo unitario.

En el segundo caso el Costo Unitario del código que ingresa se convierte en  el  costo unitario de toda la existencia de ese código en el Almacén. Este último esquema es valioso en muchos casos, por cuanto los presupuestos de materiales y repuestos pueden ser muy realistas, basados en costos recientes.  Se debería usar cuando el Almacén del sistema **AM**  no es contable en el sentido estricto de la palabra.

Se ha estructurado el módulo de Kárdex, para establecer su control a un nivel superior: el **Documento.** En un mismo documento, de entradas, se reportan varios  movimientos de entrada. De forma igual sucede con un documento de salidas. A  partir  de esta definición, se  registra  primero  la  información  del  documento,  que   será  general  para  todos  los movimientos asociados al mismo y luego se procede al registro de sus movimientos.

El módulo de  Kárdex permite administrar de manera independiente los movimientos de cada uno de los almacenes creados en la Tabla de Almacenes (Infraestructura) y dependiendo del usuario que ingrese a **AM** tendrá sus propios permisos de administración para cada almacén.

