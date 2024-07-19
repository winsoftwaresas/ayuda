---
title: Conceptos Básicos sobre el Kárdex de Almacén
subtitle: El Kárdex de Almacén es el módulo encargado del registro detallado de todo  Movimiento de Entrada, Salida y Ajuste, de los almacenes activos en AM en la respectiva compañía.
tags: [setup]
author: win
order: 05_02
---
A través del Kárdex se realiza la  actualización del módulo de Almacén, en todo lo concerniente a Entradas, Salidas y Ajustes,  manteniendo tal movimiento disponible para consultas o estudios especiales. Su dominio puede ser uno o varios de los Almacenes definidos en la compañía activa.

Una única transacción del Kárdex, mantiene consistencia integral entre tres tablas distintas: Almacén, Órdenes de Trabajo y Kárdex. Esto significa que una transacción de entrada al Almacén, registrada en el Kárdex, actualiza también el saldo y el nivel de existencia en la ficha técnica del Materiales  o Repuestos, incrementándolo. Una transacción de salida del almacén, registrada en el Kárdex, actualiza el saldo y el nievel de existencia en la ficha técnica del Repuesto/Material, decrementándolo y al tiempo actualiza la tabla de Órdenes de Trabajo, cargando el consumo de tales Materiales  o Repuestos.

Es una herramienta práctica  cuando no  se  dispone  en  la  Organización de  un  Sistema Corporativo de Almacén que administre los Insumos de Mantenimiento, los Materiales y los Repuestos. En este caso el Kárdex de **AM**, en conjunto con el  módulo de Almacén, pueden suplir tal necesidad e incluso otras alrededor del tema  de inventarios, como por ejemplo Administrar el Inventario de Materia Prima, de Producto en Proceso, de Material de Empaque, de Útiles de Oficina y de Aseo y Otros.

Pero   también   es   muy   útil   cuando   ya   existe   un   Sistema   externo   dedicado   a   la administración del Inventario de Materiales  o Repuestosde la corporación, a través del cual se  realiza toda gestión y movimiento de entradas y salidas. En este caso **AM** debe enterarse del resultado de  cada movimiento ejecutado a través del   sistema externo. Para ello tal sistema externo debe poder entregar un archivo a manera de  interface, en el que se comunique a **AM**: los saldos en existencia y el valor unitario vigente de cada repuesto, después de aquellos movimientos.

Es  posible  definir  un  gran  número  de  Conceptos de Entrada  y  Salida  de  artículos  del Almacén. Los Conceptos de  Entrada  son  las  operaciones por las cuales ingresan los Materiales  o Repuestos al  Almacén. Se puede registrar un número infinito de conceptos de entrada. Dentro de los conceptos de entrada existen algunos que se  encuentran predefinidos. Aún así es posible definir cuantos sean requeridos y definir  para cada uno sus requerimientos especiales. Por ejemplo, habrá conceptos de  entrada que podrán exigir la información del Almacén desde donde proviene el Repuesto/Material, otros en cambio, podrán  exigir  el  número de  la  Órden  de  Trabajo,  cuando  se  trate  de  una entrada  por devolución de un Repuesto/Material al Almacén, desde una Órden de Trabajo que lo solicitó y no lo utilizó.

Los Conceptos de Salida son las operaciones por las cuales se produce un retiro de  los repuestos  del  Almacén.  Se  puede  registrar  un  número  infinito  de  conceptos  de  salida. Dentro de los conceptos de salida existen algunos que se encuentran  predefinidos. Aún así, es posible definir cuantos sean requeridos y definir para cada uno sus requerimientos especiales.  Por  ejemplo,  habrá  conceptos  de  salida  que  podrán  exigir  el  número  de  la órden de Trabajo cuando se trate de una salida de repuestos hacia esa Órden de Trabajo preexistente en **AM**. 

El Kárdex trabaja además en consonancia con el método de valorización de  inventarios más adecuado, entre las varias opciones: Promedio Ponderado y Costo del Último Ingreso, que se definen para cada Almacén. En el primer caso el costo unitario del código que acaba de ingresar   se calcula ponderando el  número de unidades que ingresan a  su respectivo costo unitario, con el número de unidades que existían previamente, a su costo unitario.

En el segundo caso el Costo Unitario del código que ingresa se convierte en  el  costo unitario de toda la existencia de ese código en el Almacén. Este último esquema es valioso en muchos casos, por cuanto los presupuestos de materiales y repuestos pueden ser muy realistas, basados en costos recientes.  Se debería usar cuando el Almacén del sistema **AM**  no es contable en el sentido estricto de la palabra.

Se ha estructurado el módulo de Kárdex, para establecer su control a un nivel superior: el **Documento.** En un mismo documento, de entradas, se reportan varios  movimientos de entrada. De forma igual sucede con un documento de salidas. A  partir  de esta definición, se  registra  primero  la  información  del  documento,  que   será  general  para  todos  los movimientos asociados al mismo y luego se procede al registro de sus movimientos.

El módulo de  Kárdex permite administrar de manera independiente los movimientos de cada uno de los almacenes creados en la Tabla de Almacenes (Infraestructura) y dependiendo del usuario que ingrese a **AM** tendrá sus propios permisos de administración para cada almacén.

## Ventana Principal de Kárdex

![Procesar imagen](../../assets/images/cap05/chp05_img01.png)
_**Imagen 1.** Kárdex - Ir a Kárdex_

Al sobreponer el cursor  en el módulo de Kárdex, se listan los distintos almacenes creados en la tabla de Almacenes de la Infraestructura y cuando se elige un Almacén, el sistema muestra el Almacén seleccionado.


## Ventana Visor de Documentos de Kárdex

![Procesar imagen](../../assets/images/cap05/chp05_img02.png)
_**Imagen 2.** Kárdex - Visor Kárdex_


A través del visor de Kárdex se ejecutan funciones dedicadas a administrar en primer  lugar  los documentos y luego sus movimientos asociados. 

Desde esta ventana es posible observar los documentos de Kárdex existentes o inexistentes en caso de la incorporación de un nuevo Almacén. 

A través del visor de Kárdex se ejecutan funciones dedicadas a administrar en primer  lugar  los documentos y luego sus movimientos asociados. 

Se  listan todos o un subgrupo  de  ellos. Es posible desplazarse entre páginas <a class="btn white"><span class="mdi mdi-chevron-left"></span></a> <a class="btn white"><span class="mdi mdi-chevron-right"></span></a> en la parte inferior derecha del Visor. Es posible configurar el número de registros que se muestran por página desde el módulo de <a class="btn blue">administración</a> en la opción **“Valores por Defecto”** en la etiqueta **General.**


Los títulos en  azul que encabezan las columnas son también botones que permiten ordenar la    tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o también se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle de Documento de Kárdex

Al hacer clic sobre alguno de los registros del Visor, el sistema responde mostrando  su información de forma detallada, en una ventana llamada Ventana Detalle, como se muestra a continuación:


![Procesar imagen](../../assets/images/cap05/chp05_img04.png)
_**Imagen 3.** Kárdex - Ventana Detalle_

En la imagen anterior se aprecia el conjunto de información que identifica a cada Documento, se destaca en la pestaña **Movimientos** entre paréntesis el número de registros  de movimientos asociados a ese documento. 

>**Nota:** Durante la creación de un documento no se visualiza la pestaña movimientos, una vez se inserte el registro, se podrán añadir los movimientos según el tipo: Entrada, Salida o Ajuste.

Al dar clic en la pestaña **“Movimientos”**, se muestra la ventana Visor de Movimientos de Kárdex, con todos los registros de Movimiento contenidos  dentro del Documento   actualmente   seleccionado.


A  continuación se  detallan  los  campos  que  componen  el  detalle del formulario de  _Documentos   Kárdex:_

**Almacén:** Se muestra el Almacén desde el cual se moverán los  Materiales  o Repuestos relacionados en el Documento de Kárdex. No es modificable por el usuario una vez el documento se haya creado.

**Movimiento:** Se elige tipo de movimiento a realizarse. Se listan tres tipos de movimiento por default: Entrada, Salida y Ajuste.

**Tipo de Documento:** Se elige el tipo de documento a relacionarse en el Documento. Se listan cuatro tipos de movimiento por default: Factura, Remisión, Salida de Almacén, Devolución al Almacén.

**Documento:** Se escribe aquí el código que se le asignará al Documento de  Kárdex.  En el caso de ser de tipo Entrada, el código que se le asigne puede ser el mismo número de la factura con la que se adquirieron los Materiales  o Repuestos que  se  están  moviendo  o  puede  ser  formado  con  la  fecha  y  el  tipo  de Movimientos que contiene.

**FF Documento:** Es la fecha de creación del Documento de Kárdex. Puede ser modificado por el usuario, cuando se encuentre habilitado el valor por defecto  **“Modificar fecha de documento”** de Kárdex en el módulo de <a class="btn blue">administración</a>, en la etiqueta Kárdex. Si se encuentra deshabilitado, el campo se muestra bloqueado y no se puede modificar y corresponderá a la fecha del sistema.

**OC:** Aquí se registra el número de la orden de compra, también es posible diligenciar otro número de documento diferente a la factura o a otro.

**% Descuento:** Sólo se habilita para el tipo de Documento: Entrada. Es posible registrar un porcentaje de descuento que aplique a ese Documento. El valor definido en este campo se mostrará automáticamente en el detalle del movimiento.

**% IVA:** Sólo se habilita para el tipo de Documento: Entrada. Es posible registrar un porcentaje de IVA que aplique a ese Documento. El valor definido en este campo se mostrará automáticamente en el detalle del movimiento.

**Documento Anexo:** Se digita un número de documento puede ser el mismo número de la factura con la que se adquirieron los  Materiales  o Repuestos que  se  están  moviendo  o  puede  ser  formado  con  la  fecha  y  el  tipo  de Movimientos que contiene con el fin de realizar consultas futuras.

**Tercero / Proveedor:** Se especifica un Tercero relacionado con el Documento. Puede ser por  ejemplo el Proveedor de los Repuestos/Materiales relacionados en el Documento o la persona que autoriza el movimiento de los Repuestos contendidos en él.

**CC:** Se especifica el Centro de Costo al cual se van a cargar los costos de los Movimientos relacionados en el Documento.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Comentarios:**  En  este  campo  se   pueden   agregar   observaciones  e   información complementaria  del Documento de  Kárdex.
