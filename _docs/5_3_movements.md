---
title: Movimientos de Kárdex
subtitle:  En este modulo se encontrará la explicacion y el ejemplo visial de como se ve y para que sirve  cada ventana he icono que aparece en el sistema am 4g en la secccion de kardex.
tags: [setup]
author: win
order: 05_03
---
# Ventana Movimientos de Kárdex

![ventana KX](../../assets/images/cap06/chp06_img05.png)

A esta ventana se llega haciendo clic sobre la pestaña ** “Movimientos”** ubicada al lado derecho de la pestaña principal ** “Documentos”** en Kárdex. A través de ella se ejecutan todas las funciones dedicadas a administrar el Movimiento de entrada, de salida, o de cualquier tipo de ajustes, de los Materiales y Repuestos contenidos en el Almacén o Almacenes de la compañía activa. A continuación se ilustran las porciones que la componen.

## Ventana Visor de Movimiento de Kárdex

![ventana KX](../../assets/images/cap06/chp06_img06.png)

Desde esta ventana es posible observar los registros de Movimiento de Kárdex  para el Documento actualmente seleccionado que cumplen con el criterio de subgrupo  actual. En la  parte  superior  del  Visor  es posible visualizar el tipo de transacción que se realiza en ese Documento.

![detalle de kardex](../../assets/images/cap06/chp06_img07.png)

Al hacer clic sobre los iconos de `<span class="iconify btn" data-icon=alert-circle-outline>` admiración circulo, se muestra información adicional. Por ejemplo, al dar clic sobre el icono `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo, que está al lado derecho del campo Código  RP, se observa el histórico de la información de los saldos de inventario de ese movimiento de Repuestos, es decir, los saldos de inventario que tenía ese ítem antes de la transacción, y los saldos de inventario con los que quedó ese ítem, luego de finalizar la transacción, que corresponde al después de la transacción. Si se requiere conocer los datos del durante la transacción, basta con ubicarse en el detalle del movimiento seleccionado y desplazarse con el scroll vertical, para visualizar los datos de ese movimiento de Repuestos.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img08.png)

Por otra parte, al hacer clic sobre el icono `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo, que está al lado derecho del campo CP, se observa el nombre del concepto de kárdex asociado a ese movimiento de Repuestos.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img09.png)

Al  finalizar una transacción de movimiento de Repuestos, todos los registros se observan en color gris y bloqueados, los cuales se convierten en registros de solo consulta. No es posible eliminar los registros de las transacciones de kárdex, una vez han sido ingresadas en el módulo.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img10.png)

Para eliminar un registro de movimiento de Repuestos, solo se permite hacerlo, durante la creación del mismo, para esto se debe movilizar hasta el final del lado derecho usando el scroll vertical, al dar clic al `<span class="iconify btn" data-icon=delete>`eliminar (basura), sale un mensaje de alerta indicándole al usuario si está seguro de eliminar el registro y finalmente se da clic en `<a class="btn">`Aceptar `</a>`.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img11.png)

Para crear un nuevo movimiento se da clic en el `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha, seguidamente se abre una nueva ventana con el visor de los Materiales y Repuestos, en donde es posible seleccionar uno o varios. Para seleccionar un solo Material o Repuesto basta con dar doble clic al ítem o seleccionarlo y luego dar clic al botón `<a class="btn">` “Adicionar RP”`</a>`., mientras que si se desea seleccionar varios ítems se puede realizar a través de la combinación de teclas control+clic en cada uno de los Materiales o Repuestos a ser seleccionados, luego dar clic al botón  `<a class="btn">` “Adicionar RP”`</a>`; de cualquiera de las formas de seleccionar los Materiales y Repuestos, se visualiza todos los ítems de manera independiente en la ventana Detalle del movimiento, con el fin de diligenciar la información del movimiento a cada uno de ellos. Para mayor detalle de la información, dirigirse al capítulo 2.2 Ventana Detalle de este manual.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img12.png)

También, es posible crear movimientos, al hacer clic en el boton `<span class="iconify btn" data-icon="mdi-plus-circle">`Más, ubicado en la parte superior derecha, seguidamente se visualiza que se crea una nueva fila en la última posición de la lista o en la primera posición, en el caso de tratarse del primer registro de movimiento en el documento.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img13.png)

Por otro lado, el botón  `<a class="btn">` “Insertar Movimientos `</a>` se usa para insertar uno o varios registros de movimientos de Materiales o Repuestos, una vez diligenciados todos los campos de la ventana Detalle del movimiento de cada item, se da clic en este botón, con el fin de insertarlos todos juntos en la BD de **AM**. Además, si se desea se puede usar el botón `<a class="btn">` “Insertar Movimientos `</a>` para ir insertando el movimiento de un material o Repuesto uno a uno.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img14.png)

Finalmente, el botón de `<a class="btn">`Despachar reservas `</a>`, ubicado en la parte superior derecha, solo es visible en los documentos de transacción tipo Salidas. Al dar clic a este botón, se abre una nueva ventana que muestra el visor de las Reservas de los Materiales o Repuestos que se han generado, con el objetivo de poder despacharlas a través de esta nueva funcionalidad.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img15.png)

Para continuar con el proceso de despacho de reservas de Materiales o Repuestos, se debe elegir de la ventana mostrada anteriormente, la reserva a despachar dando doble clic directamente al registro o seleccionar el registro y luego dar clic al botón `<a class="btn">`Despachar RV `</a>`.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img16.png)

Inmediatamente, se observa que esta ventana se cierra y en el visor de movimientos de kárdex se muestra el ítem seleccionado, para proceder a diligenciar la información del movimiento de salida, en el campo Cantidad se registra el número de unidades reales a despachar. Si  la  reserva tiene  asociada  una  OT,  esta  OT   se  asocia  al movimiento de Kárdex y en la matriz de Gasto Real de Materiales y Repuestos de la OT se agrega un registro por la cantidad despachada del Repuesto.

Si se requiere Cancelar reservas, se debe hacer desde el módulo de Almacén de Repuestos a través de la transacción  “Reservas”. Para mayor detalle, consultar la funcionalidad en el módulo de Almacén de Repuestos en la transacción de Reservas.

## Ventana Detalle

![detalle de documentos kardex](../../assets/images/cap06/chp06_img17.png)

La ventana Detalle se encuentra ubicada en la pestaña Movimientos, a esta ventana se llega, al dar clic en dicha pestaña. En  esta  ventana  se  encuentra  toda  la  información  relevante  al  registro  de  movimiento de Repuestos. A  continuación se describen los campos que  componen el registro.  Sobre cada campo se da una breve explicación.

**Código RP:** Especifica el Código o Referencia del material o repuesto que fue objeto  del movimiento de entrada o salida, según se elija en la ventana visor de Materiales y Repuestos, que se muestra al dar clic en el `<span class="iconify btn" data-icon=filter-variant>`icono de filtro ubicado en la parte superior derecha. Es posible escribir directamente el Código o Referencia del Repuesto exacta en el campo Código RP, al finalizar de escribir el Código o Referencia, se presiona la tecla tabular.

Al terminar de digitar o elegir el Repuesto,  se  muestra información automática del Repuesto de los siguientes campos:

Descripción RP, \$ Unit  y Unit \$ del AL. También, al dar clic sobre el icono de `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo aparece un cuadro llamado ** “Antes de la transacción”**, está al lado derecho de este campo y muestra la información del saldo de inventario actual de ese ítem antes de la transacción, una vez se finaliza la transacción del movimiento, se muestra un cuadro adicional llamado  “Después de la transacción” y muestra la información del saldo de inventario actual con la que quedó el ítem, luego de finalizarse la transacción.

La información contenida en el cuadro ** “Antes de la Transacción”** es la siguiente:

**Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén, del  repuesto  o material, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

**Cantidad Disponible:** Muestra la cantidad disponible en el almacén, del repuesto o material para su consumo, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

**Costo Unitario:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

La información contenida en el cuadro  “Después de la Transacción” es la siguiente:

**Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén, del  repuesto  o materia, después del movimiento registrado. Es un campo que solo despliega datos.

**Cantidad Disponible:** Muestra la cantidad disponible en el almacén, del repuesto o material para su consumo, después del movimiento registrado. Es un campo que solo despliega datos.

**Costo Unitario:** Muestra el valor unitario actual del repuesto o  material, después del movimiento registrado. Es un campo que solo despliega datos.

**Descripción RP:** Especifica la descripción del material o repuesto que fue objeto  del movimiento de entrada o salida.  Es un campo que solo despliega datos y no es modificable por el usuario, por ello se observa bloqueado.

**CP:** Especifica el código del concepto de kárdex seleccionado. Al dar clic en el campo, se muestra la lista en la que se debe elegir el concepto de kárdex por el cual se realiza el movimiento. La lista se crea de acuerdo al tipo de conceptos que contiene el documento. Ej. Sí el tipo de conceptos que contiene el documento es de  salida, los conceptos que se muestran en la lista son de salida. Los conceptos se definen en la tabla de Conceptos de Kárdex en el módulo de Infraestructura. También, al hacer clic sobre el icono de `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo, que está al lado derecho de este campo, se observa el nombre del concepto de kárdex asociado a ese movimiento de Repuestos.

**FF Transacción:** Es el campo en el que se establece la fecha en la que ocurrió el movimiento. El **AM** Web propone la fecha del día, pero ella puede ser modificada para reflejar la fecha real del  movimiento.  Esta fecha  puede  ser  modificable en el permiso de usuario  “Modificar fecha del movimiento en KX” en la definición de  “Permisos para ejecución de Procesos” que se otorgan al usuario en el módulo de Administración / Modificar permisos básicos.

**Cantidad:**  Es  el  campo  donde  se  registra  la  cantidad  del  repuesto  o  material,  en  las unidades propias del repuesto, que entra o sale del almacén, en la transacción actual.

**\$ Unit:** Muestra automáticamente el valor unitario, del material o  repuesto que entra o sale del almacén en la actual transacción, una vez seleccionado. Es un campo que solo despliega datos y es modificable en transacciones de tipo entrada y Ajustes.

**% Desc:** Se ingresa aquí el porcentaje de descuento que se va a  aplicar  al valor unitario **(\$ Unit)**. También, al registrar el % Descuento desde la pestaña de Documento, se verá reflejado ese valor en este campo, de manera automática. Si no es necesario manejar esta información, no se selecciona la opción de manejo de Descuento y se ingresa solamente el Costo Unitario **(\$ Unit)**.

**Desc:** En este campo el sistema calcula automáticamente el descuento valorizado. Este cálculo se realiza a partir del \$ Unit y el % Desc diligenciado. No es un campo modificable por el usuario, por ello se observa bloqueado.

**% Iva:** Se ingresa aquí el porcentaje de IVA que se va a  aplicar  al valor unitario (\$ Unit). También, al registrar el % IVA desde la pestaña de Documento, se verá reflejado ese valor en este campo, de manera automática. Si no es necesario manejar esta información, no se selecciona la opción de manejo de Descuento y se ingresa solamente el Costo Unitario (\$ Unit).

**Iva:** En este campo el sistema calcula automáticamente el IVA valorizado. Este cálculo se realiza a partir del \$ Unit y el **% IVA** diligenciado. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Unit Fact:** Es el campo donde se expresa el valor unitario facturado, del material o  repuesto que entra o sale del almacén en la actual transacción. Se debe tener especial cuidado con el tipo de unidades a las que se refiere el costo unitario, puesto que puede ser diferente la unidad de empaque o de compra, a las unidades de despacho o consumo. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Unit del AL:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar o después del movimiento registrado. Para el cálculo de este valor, se tiene en cuenta el tipo de costeo del almacén. Es un campo que solo despliega datos. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Total:** Es un campo calculado por el sistema y que contiene el valor total  de  la actual transacción. Es el producto de la Cantidad por el \$ Unit Fact. No es un campo modificable por el usuario, por ello se observa bloqueado.

**OT:** Se trata de un campo que normalmente está bloqueado y que solo  aparece cuando se elige un concepto de kárdex que exija una Orden de Trabajo válida (Ver Tabla Conceptos de  Kárdex  en  el  Capítulo  de  Infraestructura). Por  ejemplo,  una  salida  del  almacén  con destino a una Orden de Trabajo; o también una entrada al almacén que corresponda a una devolución de un material o un repuesto que había  sido despachado a una OT y no fue consumido por  ella. Al dar clic al `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha del campo, se abre una nueva ventana con el visor de las Órdenes de Trabajo, y es posible elegirla desde allí, basta con seleccionar la OT y dar doble clic o seleccionar la OT y luego dar clic al botón `<a class="btn">`Adicionar OT `</a>`.

**Cantidad en OT:** En este campo se muestra la cantidad del repuesto o material, en  las unidades  propias  del  repuesto,  que  contiene  actualmente  la  OT  relacionada   en  el Movimiento de Kárdex. Este campo no es modificable por el usuario, por lo tanto se visualiza como bloqueado.

**Cambiar Costo:** Este check box, si se habilita cambia el valor unitario del ítem en el módulo de Almacén de Repuestos. Si no se habilita el check box, no se modifica el valor unitario del ítem.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img18.png)

Para eliminar un registro de transacción, se ubica el registro a eliminar, para ello se debe movilizar hasta el final del lado derecho usando el scroll vertical, al dar clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura), sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en `<a class="btn">`Aceptar `</a>`. Solamente es posible eliminar los registros de movimientos, cuando está en modo de inserción.

## Ajustar Inventario

La funcionalidad de Ajustar Inventario se lleva a cabo, a través de la ventana Detalle del movimiento de kárdex, además, permite realizar dos tipos de ajustes: en Cantidad y en Valor.

El objetivo de esta funcionalidad es realizar una conciliación entre el Inventario Teórico que lo da el sistema y el Inventario Físico que lo debe realizar un designado para este proceso, ambos inventarios deben coincidir, en caso contrario, se procede a realizar un Ajuste. Para realizar el ajuste se debe crear un Documento de tipo Ajuste y crear movimiento, como se muestra en la siguiente figura.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img19.png)

A  continuación se describen los campos que  componen el registro de un Ajuste.  Sobre cada campo se da una breve explicación.

Código RP: Especifica el Código o Referencia del material o repuesto que fue objeto  del movimiento de entrada o salida, según se elija en la ventana visor de Materiales y Repuestos, que se muestra al dar clic en el `<span class="iconify btn" data-icon=filter-variant>`icono de filtro ubicado en la parte superior derecha. Es posible escribir directamente el Código o Referencia del Repuesto exacta en el campo Código RP, al finalizar de escribir el Código o Referencia, se presiona la tecla tabular.
Al terminar de digitar o elegir el Repuesto,  se  muestra información automática del Repuesto de los siguientes campos: Descripción RP, \$ Unit y \$ Unit del AL. También, al dar clic sobre el icono de `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo, aparece un cuadro llamado ** “Antes de la transacción”**, está al lado derecho de este campo y muestra la información del saldo de inventario actual de ese ítem antes de la transacción, una vez se finaliza la transacción del movimiento, se muestra un cuadro adicional llamado  “Después de la transacción” y muestra la información del saldo de inventario actual con la que quedó el ítem, luego de finalizarse la transacción.

La información contenida en el cuadro ** “Antes de la Transacción”** es la siguiente:

**Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén, del  repuesto  o material, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

**Cantidad Disponible:** Muestra la cantidad disponible en el almacén, del repuesto o material para su consumo, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

**Costo Unitario:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

La información contenida en el cuadro  “Después de la Transacción” es la siguiente:

**Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén, del  repuesto  o materia, después del movimiento registrado. Es un campo que solo despliega datos.

**Cantidad Disponible:** Muestra la cantidad disponible en el almacén, del repuesto o material para su consumo, después del movimiento registrado. Es un campo que solo despliega datos.

**Costo Unitario:** Muestra el valor unitario actual del repuesto o  material, después del movimiento registrado. Es un campo que solo despliega datos.

**Descripción RP:** Especifica la descripción del material o repuesto que fue objeto  del movimiento de entrada o salida.  Es un campo que solo despliega datos y no es modificable por el usuario, por ello se observa bloqueado.

**CP:** Especifica el código del concepto de kárdex seleccionado. Al dar clic en el campo, se muestra la lista en la que se debe elegir el concepto de kárdex de Ajuste por el cual se realiza el movimiento. La lista se crea de acuerdo al tipo de conceptos que contiene el documento. Además, al hacer clic sobre el icono de `<span class="iconify btn" data-icon=alert-circle-outline>`admiración circulo, que está al lado derecho de este campo, se observa el nombre del concepto de kárdex asociado a ese movimiento de Repuestos. También, si se elige un concepto de kárdex de ajuste tipo cantidad, se desbloquea el campo  “Cantidad Ajuste”. Mientras que, si se elige un concepto de kárdex de ajuste tipo valor, se desbloquea el campo  “\$ Unit Ajuste”.

**FF Transacción:** Es el campo en el que se establece la fecha en la que ocurrió el movimiento de Ajuste. El **AM** Web propone la fecha del día, pero ella puede ser modificada para reflejar la fecha real del movimiento. Esta fecha  puede  ser  modificable en el permiso de usuario  “Modificar fecha del movimiento en KX” en la definición de  “Permisos para ejecución de Procesos” que se otorgan al usuario en el módulo de Administración / Modificar permisos básicos.

**Cantidad Ajuste:** Muestra automáticamente la cantidad actual del material o repuesto. Es  el  campo  donde  se  registra  la  cantidad a ajustar  del  repuesto  o  material,  en  las unidades propias, en la transacción actual. Solo se desbloquea cuando el concepto de kárdex es un Ajuste por Cantidad. Si se registra un valor positivo se realiza un ajuste por encima de la cantidad actual del material o repuesto, en forma de adición. Por ejemplo, si se tiene en la cantidad actual 3 unidades y se ajusta una cantidad de 2 unidades, la cantidad al finalizar la transacción será de 5 unidades. Por otro lado, es posible registrar valores negativos anteponiendo el signo menos (-) antes de digitar la cantidad, entonces se realiza un ajuste por debajo de la cantidad actual del material o repuesto, en forma de sustracción. Por ejemplo, si se tiene en la cantidad actual 3 unidades y se ajusta una cantidad de -2 unidades, la cantidad al finalizar la transacción será de 1 unidad.

**\$ Unit Ajuste:** Muestra automáticamente el valor unitario, del material o  repuesto. Es  el  campo  donde  se  registra  el valor unitario a ajustar  del  repuesto  o  material,  en  las unidades propias, en la transacción actual. Solo se desbloquea cuando el concepto de kárdex es un Ajuste por Valor. Si se registra un valor positivo se realiza un ajuste por encima del valor unitario actual del material o repuesto, en forma de adición. Por ejemplo, si se tiene en el valor unitario actual \$1000 y se ajusta un valor de \$100, el valor unitario del AL, al finalizar la transacción será calculada de acuerdo al tipo de costeo del almacén. Por otro lado, es posible registrar valores negativos anteponiendo el signo menos (-) antes de digitar el valor unitario, entonces se realiza un ajuste por debajo del valor unitario actual del material o repuesto, en forma de sustracción. Por ejemplo, si se tiene en el valor unitario actual \$1000 y se ajusta una cantidad de \$-100, el valor unitario del AL, al finalizar la transacción será calculada de acuerdo al tipo de costeo del almacén.

**Cantidad:** *Muestra automáticamente la cantidad actual del material o repuesto antes de la transacción, una vez definida la cantidad de ajuste, se muestra la cantidad total con la que quedará el material o repuesto al finalizar la transacción. Es un campo que solo despliega datos y no es modificable por el usuario, por ello se observa bloqueado.

**\$ Unit del AL:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar o después del movimiento registrado. Para el cálculo de este valor, se tiene en cuenta el tipo de costeo del almacén. Es un campo que solo despliega datos. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Total:** Es un campo calculado por el sistema y que contiene el valor total  de  la actual transacción. Es el producto de la Cantidad por el \$ Unit del AL. No es un campo modificable por el usuario, por ello se observa bloqueado.

**OT:** Se trata de un campo que normalmente está bloqueado y que solo  aparece cuando se elige un concepto de kárdex que exija una Orden de Trabajo válida (Ver Tabla Conceptos de  Kárdex  en  el  Capítulo  de  Infraestructura), para movimientos de entrada o salida. Para el caso de los Ajustes, no se requiere de una OT. Es un campo que solo despliega datos. No es un campo modificable por el usuario, por ello se observa bloqueado.

**Cantidad en OT**: En este campo se muestra la cantidad del repuesto o material, en  las unidades  propias  del  repuesto,  que  contiene  actualmente  la  OT  relacionada   en  el Movimiento de Kárdex. Para el caso de los Ajustes, no se requiere de una OT. Este campo no es modificable por el usuario, por lo tanto se visualiza como bloqueado.

## Congelar Documento

![detalle de documentos kardex](../../assets/images/cap06/chp06_img20.png)

Es una funcionalidad que inhibe la posibilidad de adicionar nuevos movimientos a un Documento. Una vez ejecutada está transacción no tiene reversa y permanecerá en el Kárdex como un Documento únicamente de Consulta.

El botón `<a class="btn">`Congelar Documento `</a>` se encuentra ubicado en la parte superior izquierda de la ventana y solo aparecerá a los usuarios que tengan el permiso de usuario  “Congelar documentos en Kárdex” en la definición de  “Permisos para ejecución de Procesos” que se otorgan al usuario en el módulo de Administración / Modificar permisos básicos.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img21.png)

Para congelar un documento basta con seleccionar el Documento de Kárdex, dar clic al  botón `<a class="btn">`Congelar Documento `</a>`, el sistema muestra un mensaje de alerta indicado al usuario de si está seguro de continuar con el proceso, ya que la operación no tiene reversa, para finalizar dar clic en el botón `<a class="btn">`Aceptar `</a>`.

# Ventana Submenú de Kárdex de Almacén

## Subgrupo

Se usa para seleccionar grupos de Movimiento de Kárdex que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Movimiento de Kárdex

![detalle de documentos kardex](../../assets/images/cap06/chp06_img22.png)

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada  criterio  aparece  inicializado  en  un  valor  global  que  permite  mostrar  todos   los Movimientos de Kárdex registrados en el sistema. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto completo de todos los Movimientos de Kárdex.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Movimientos de Kárdex de acuerdo con los criterios seleccionados en la siguiente ventana.

![detalle de documentos kardex](../../assets/images/cap06/chp06_img23.png)

Los criterios de selección están divididos en 2 grupos: Los que aplican sobre el Documento de Kárdex y Los que Aplican sobre el Movimiento de Kárdex en sí.

# FILTRAR POR CAMPOS PARTICULARES DEL DOCUMENTO

Centro  de  Costo: Esta selección agrupa todos  los  Documentos  de  Kárdex  que  están asociados con el Centro de Costo que se especifique en el campo. También se puede elegir el Centro de Costo mediante el uso de comodines, para ello, se debe dar clic al icono  “Candado”. Si se selecciona la opción  “Utilizar comodines”, se digita la palabra, por ejemplo Sistema% seleccionará todos los Documentos de Kárdex en cuyo Centro de Costo empiecen por la palabra Sistema.

**Documento:** Esta selección agrupa todos los Documentos de Kárdex  cuyo documento cumple con el criterio especificado.

**Movimiento:** Esta selección agrupa todos los Documentos de Kárdex cuyo tipo de movimiento es elegido en la lista desplegable.

**Rango  de  Generación:** Esta selección agrupa  todos  los  Documentos de  Kárdex  cuya fecha de Generación se encuentra en el rango de Fechas especificado en el criterio.

**Tercero / Proveedor:** Esta selección agrupa todos los Documentos de Kárdex que están  asociados al tercero que se especifique en el campo. También se puede elegir el Tercero / Proveedor mediante el uso de comodines, para ello, se debe dar clic al icono `<span class="iconify btn" data-icon=lock>`Candado. Si se selecciona la opción  “Utilizar comodines”, se digita la palabra, por ejemplo FER% seleccionará todos los Documentos de Kárdex en cuyo Tercero / Proveedor empiecen por la palabra FER.

**Tipo de Documento:** Esta selección agrupa todos los Documentos de Kárdex cuyo tipo de documento es elegido en la lista desplegable.

## FILTRAR POR CAMPOS DEL MOVIMIENTO

**Casilla:** Esta selección agrupa todo el movimiento correspondiente al repuesto de la casilla
(Sitio de almacenamiento en el almacén) seleccionado.

**Clase   del   Repuesto:** Esta  selección  agrupa  todo  el  movimiento  correspondiente  al repuesto de la clase especificada.

**Código de Barras Interno:**
Si existe un código de barras interno de la organización, este campo permite seleccionar el Repuesto que se encuentre asociado al Código  de  Barras Interno que se ingresó al crear el Repuesto.

**Código   de   Barras   Proveedor:**   Permite  seleccionar  el  Repuesto  que  se   encuentre asociado al Código de Barras del Proveedor que se ingresó al crear el Repuesto.

**Comentarios:**   Esta  selección se  agrupa todo  el  movimiento  cuyo campo  comentarios corresponde con el texto especificado.

**Código 	del  Pedido:**Esta selección agrupa todo  el  movimiento originado a  partir  del módulo de Pedidos.

**Código  del  Repuesto:**  Esta  selección  agrupa  todo  el  movimiento  correspondiente  al repuesto del código especificado.

**Concepto:**   Esta  selección  agrupa  todo  el  movimiento correspondiente al  concepto  de movimiento seleccionado.

**Descripción del Repuesto:** Esta selección agrupa todo el movimiento correspondiente al repuesto de la descripción especificada.

**Número de la OT:** Permite buscar una orden de trabajo específica por medio del número que ésta fue asociada.

**Rango  de  Generación del Movimiento:** Esta selección agrupa todo el  movimiento en fechas  incluidas dentro del rango de fechas seleccionado.

**Referencia  Principal:** Esta  selección  agrupa  todo  el  movimiento  correspondiente   al repuesto de la referencia seleccionada (Proveedor 1).

**Tipo de Repuesto:** Esta opción permite seleccionar los Repuestos por su característica de
“Inventariado” o  “No Inventariado”.
