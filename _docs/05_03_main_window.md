---
title: Ventana Principal
subtitle: Se explica la ventana principal y los comandos que la componen.
tags: [setup]
author: win
order: '05_02'
---


## Ventana Visor

Al sobreponer el cursor en el módulo de Kárdex, se listan los almacenes creados en la tabla de Almacenes de la Infraestructura. Cuando se elige un Almacén, el sistema muestra el visor o la ventana principal de los documentos de Kárdex del Almacén seleccionado:


![Procesar imagen](../../assets/images/cap05/chp05_img01.png)
_**Imagen 1.** Kárdex - Almacenes_


A través del Visor de Kárdex se ejecutan funciones dedicadas a administrar en primer lugar los documentos y luego sus movimientos asociados.

Desde esta ventana es posible observar los documentos de Kárdex existentes o inexistentes en caso de la incorporación de un nuevo Almacén.

Se listan todos o un subgrupo de ellos. Es posible desplazarse entre páginas <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-left"> </span></a> <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-right"> </span></a> a través de las flechas direccionales ubicadas en la parte inferior derecha del Visor. Es posible configurar el número de registros que se muestran por página desde el módulo de <a class="btn cl-white bg-blue px-3"> Administración </a> en la opción **Valores por Defecto** en la etiqueta **General**.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o también se desplaza el cursor con las teclas de desplazamiento.

A continuación se muestra el visor y sus elementos principales:

![Procesar imagen](../../assets/images/cap05/chp05_img02.png)
_**Imagen 2.** Kárdex - Ventana Visor_



## Ventana Submenú de Kárdex

### Subgrupo



El subgrupo es una transacción que permite seleccionar grupos de Movimientos de Kárdex que cumplen un conjunto de filtros o criterios y se represnta por el siguiente ícono <span class="mdi mdi-filter-variant"></span>. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono <span class="mdi mdi-filter-variant"> ubicado en la parte superior derecha de la ventana Visor de Movimiento de Kárdex

![Procesar imagen](../../assets/images/cap05/chp05_img22.png)
_**Imagen 3.** Kárdex - Ir a Subgrupo_


Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada  criterio  aparece  inicializado  en  un  valor  global  que  permite  mostrar  todos   los Movimientos de Kárdex registrados en el sistema. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto completo de todos los Movimientos de Kárdex.

**AM** mantiene activo cualquier subgrupo en cada módulo, visualizandose el ícono con una pelota de color rojo <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>; esto indica que lo que se visualiza en el visor es un subgrupo hasta que el usuario lo modifique o restablezca los valores estándar, se muestra un ejemplo de un subgrupo activo:



![Procesar imagen](../../assets/images/cap05/chp05_img22_01.png)
_**Imagen 3.** Kárdex - Subgrupo Activo_

>**Nota:** La imagen anterior, muestra que se observan 10 registros o documentos de un total de 86 documentos. Esta fracción al igual que el icono indican que hay un subgrupo activo.  


El programa permite entonces hacer selección de un grupo de Movimientos de Kárdex de acuerdo con los criterios seleccionados en la siguiente ventana:

![Procesar imagen](../../assets/images/cap05/chp05_img23.png)
_**Imagen 4.** Kárdex - Subgrupo Documentos Kardex_


Los criterios de selección están divididos en 2 grupos: Los que aplican sobre el Documento de Kárdex y Los que se refieren al detalle de los Movimientos de Kárdex que se encuentra dentro del Docummento. 

Se da una breve explicación de cada campo:

### FILTRAR POR CAMPOS PARTICULARES DEL DOCUMENTO

**Centro  de  Costo:** Esta selección agrupa todos  los  Documentos  de  Kárdex  que  están asociados con el Centro de Costo que se especifique en el campo. Se selecciona de una lista desplegable, sin embargo,también se puede elegir el Centro de Costo mediante el uso de comodines (%) para ello, se debe dar clic al icono <span class="mdi mdi-lock"></span> . El campo se muestra disponible <span class="mdi mdi-lock-open-outline"></span> para digitar información,  por ejemplo: Sistema%; esto seleccionará todos los Documentos de Kárdex en cuyo Centro de Costo empiecen por la palabra Sistema.

**Documento:** Esta selección agrupa todos los Documentos de Kárdex  cuyo documento, código completo o parte del código cumpla con el criterio especificado. Es posible usar comodines (%).

**Comentarios:** Este campo permite filtrar o buscar los documentos que tengan parte de un comentario asociado al quese digita. Este campo permite comodines (%).

**Movimiento:** Esta selección agrupa todos los Documentos de Kárdex cuyo tipo de movimiento es elegido en la lista desplegable, los posibles son: Entrada, Salida y Ajuste.


**Rango  de  Generación:** Esta selección agrupa  todos  los  Documentos de  Kárdex  cuya Fecha de Generación se encuentra en el rango de Fechas especificado en el criterio.

**Tercero / Proveedor:** Esta selección agrupa todos los Documentos de Kárdex que están  asociados al tercero que se especifique en el campo. Principalmnete, es un campo desplegable, sin embargo, también se puede elegir el Tercero / Proveedor mediante el uso de comodines (%) para ello, se debe dar clic al icono <span class="mdi mdi-lock"></span>, el cual <span class="mdi mdi-lock-open-outline"></span> habilita el campo para digitar la palabra, por ejemplo FER% seleccionará todos los Documentos de Kárdex en cuyo Tercero / Proveedor empiecen por la palabra FER.

**Tipo de Documento:** Esta selección agrupa todos los Documentos de Kárdex cuyo tipo de documento es elegido en la lista desplegable. Las opciones son: Factura, Remisión, Salida de Almacén, Devolución al Almacén.


### FILTRAR POR CAMPOS PARTICULARES DEL MOVIMIENTO


**Casilla:** Esta selección agrupa los movimientos correspondientes al Repuesto asociado a la casilla que se digite (casilla definida en la ficha técnica del Repuesto en el Almacén).  

**Clase del Repuesto:** Esta  selección  agrupa los  movimientos  asociados  al Repuesto de la clase especificada en el campo (definida en la ficha técnica del Repuesto).

**Código de Barras Interno:** Si existe un código de barras interno de la organización, este campo permite agrupar los movimientos asociados al Repuesto que se encuentre asociado al Código de  Barras Interno especificado.

**Código de Barras Proveedor:**  Permite  seleccionar los movimientos asociados al Repuesto que se encuentre asociado al Código de Barras del Proveedor.

**Recibido por:** Este campo buscar los movimientos en lo que esté registrado un RI (responsable interno) receptor a cargo seleccionado de la lista desplegable, esta lista muestra los Terceros registrados en su respectiva tabla de <a class="btn cl-white bg-blue px-3"> Infraestructura </a>.

**Código del  Pedido:** Esta selección agrupa los  movimientos originados a  partir  de interfase  de Pedidos configurada en **AM**.

**Código  del  Repuesto:**  Esta  selección  agrupa  los   movimientos  que están asociados  al Repuesto del código especificado.

**Concepto:**   Esta  selección  agrupa los movimientos asociados  concepto  de movimiento seleccionado de la lista desplegada. Esta lista es modificable y configurable desde su respectiva tabla (conceptos de kárdex) en la <a class="btn cl-white bg-blue px-3"> Infraestructura </a>.


**Descripción del Repuesto:** Esta selección filtra los movimientos asociados a la descripción o nombre del Repuesto.

**Número de la OT:** Filtra los movimientos asociados al número de la OT que se especifica en este campo. Se sugiere usar la opción Subgrupo <span class="mdi mdi-filter-variant icon white"></span> para encontrar fácilmennte la OT.

**Rango  de  Generación del Movimiento:** Esta selección agrupa los movimientos que se encuentren dentro del rango de fechas que se definan en este campo.

**Referencia  Principal:** Filtra los movimientos asociados al Repuesto de la referencia seleccionada (Proveedor 1).

**Tipo de Repuesto:** Esta opción permite filtrar los movimientos asociados a  los Repuestos por su característica de estar inventarios o no inventariados “Inv” o  “No Inv".

**Comentarios por Movimiento:** Permite filtrar los movimientos que tengan en su misma linea parte del comnetario que se digite en el campo.


>**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos, se pueden utilizar uno o varios de estos criterios simultáneamente. También se permite la unión de selecciones, es decir, después de haber realizado una búsqueda de un criterio, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> , en lugar de darlo al botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>. Utilice el 
<a class="btn white">MENOS <span class="mdi mdi-minus-circle"></span></a> para el caso contrario; restar registros a un subgrupo.


## Ventana Detalle de Documento de Kárdex



Para acceder, se da un clic sobre alguno de los registros del Visor. El sistema responde mostrando su información de forma detallada, en una ventana llamada Ventana Detalle ó también se despliega cuando se requiere crear un nuevo documento cuando desde el Visor se acciona el botón <a class="btn cl-blue bg-white px-3"> NUEVO </a>. A continuación se muestra el formulario de la ventana detalle:


![Procesar imagen](../../assets/images/cap05/chp05_img04.png)
_**Imagen 5.** Kárdex - Ventana Detalle_

En la imagen anterior se aprecia el conjunto de información que identifica a cada Documento nuevo o existente. En la porción, vista parcial o pestaña **Movimientos** entre paréntesis () se muestra el número de registros de movimientos asociados a ese documento. 

> **Nota:** Durante la creación de un documento no se visualiza la pestaña movimientos, una vez se inserte el registro, se podrán añadir los movimientos según el tipo: Entrada, Salida o Ajuste.

Lo siguiente es una breve explicación de los campos que componen la ventana Detalle de Documento de Kárdex:

**Almacén:** Se muestra el Almacén desde el cual se moverán los  Materiales o Repuestos relacionados en el Documento de Kárdex. No es modificable por el usuario una vez el documento se haya creado.

**Movimiento:** Se elige tipo de movimiento a realizarse. Se listan tres tipos de movimiento: Entrada, Salida y Ajuste. No es posible cambiarlo una vez se haya insertado el documento.

**Tipo de Documento:** Se elige el tipo de documento a relacionarse en el Documento. Se listan cuatro tipos de movimiento: Factura, Remisión, Devolución al Almacén para las **Entradas** y Salida de Almacén para las **Salidas**.

**Documento:** Se escribe aquí el código que se le asignará al Documento de Kárdex.  Se aceptan letras y números. Es posible usar separadores como caracter. 
En el caso de ser de tipo **Entrada**, el código que se le asigne puede ser el mismo número de la factura con la que se adquirieron los Materiales  o Repuestos que  se  están  moviendo, como también, puede  ser  formado  con  la  fecha  y  el  tipo  de Movimientos que contiene o contendrá.

**FF Documento:** Es la fecha de creación del Documento de Kárdex. Puede ser modificado por el usuario, cuando se encuentre habilitado el permiso en **Valores por defecto** **“Modificar fecha de documento”** de Kárdex en el módulo de <a class="btn blue">Administración</a>, en la etiqueta Kárdex. Si se encuentra deshabilitado, el campo se muestra bloqueado y no se puede modificar y corresponderá a la fecha que sugiere el sistema.

**OC:** Aquí se registra el número de la orden de compra, también es posible diligenciar otro número de documento diferente a la factura o a otro.

**% Descuento:** Sólo se habilita para el tipo de Documento: Entrada. Es posible registrar un porcentaje de descuento que aplique a ese Documento. El valor definido en este campo se mostrará automáticamente en el detalle del movimiento.

**% IVA:** Sólo se habilita para el tipo de Documento: Entrada. Es posible registrar un porcentaje de IVA que aplique a ese Documento. El valor definido en este campo se mostrará automáticamente en el detalle del movimiento.

>**Nota:** para que el valor del IVA afecte los saldos de los ítems, se debe tener parametrizado desde el módulo de <a class="btn blue">Administración</a> en **Valores por Defecto** en la etiqueta **Kárdex** como SÍ la opción **El IVA constituye mayor valor al Costo Unitario**.

**Documento Anexo:** Se digita un número de documento puede ser el mismo número de la factura con la que se adquirieron los  Materiales  o Repuestos que  se  están  moviendo  o  puede  ser  formado  con  la  fecha  y  el  tipo  de Movimientos que contiene con el fin de realizar consultas futuras.

**Tercero / Proveedor:** Se especifica un Tercero relacionado con el Documento. Puede ser por  ejemplo el Proveedor de los Repuestos/Materiales relacionados en el Documento o la persona que autoriza el movimiento de los Repuestos contendidos en él.

**CC:** Se especifica el Centro de Costo al cual se van a cargar los costos de los Movimientos relacionados en el Documento.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Comentarios:**  En  este  campo  se   pueden   agregar   observaciones  e   información complementaria  del Documento de  Kárdex.


