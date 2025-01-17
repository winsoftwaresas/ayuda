---
title: Movimientos de Kárdex
subtitle:  Explicación de cómo insertar movimientos o hacer descargas de ítems del Almacén en un documento de Kárdex.
tags: [setup]
author: win
order: '05_04'
---
# Ventana Detalle Movimientos de Kárdex

## Adicionar Movimiento de Entrada

![Procesar imagen](../../assets/images/cap05/chp05_img05.png)
_**Imagen 4.** Kárdex - Ventana Detalle Movimientos_

A esta ventana se llega haciendo clic sobre la pestaña **“Movimientos”** ubicada al lado derecho de la pestaña principal **“Documentos”** en un registro de Kárdex. A través de ella se ejecutan todas las funciones dedicadas a administrar el Movimiento de Entrada, de Salida, o de cualquier tipo de Ajuste, de los Materiales y Repuestos contenidos en el Almacén o Almacenes de la compañía activa. A continuación se iexplican las porciones que la componen.

>**Nota:** Los movimientos a ingresar se habilitan según el tipo de Documento, es decir, si es un documento de Salida, el sistema sólo habilita movimientos que aceptan sólo conceptos de **Salida**, éstos se configuran en el módulo de <a class="btn cl-white bg-blue px-6"> Infraestructura </a> en la tabla **Conceptos de Kárdex.**

Desde esta ventana se observan los registros de Movimiento de Kárdex que se vayan insertando. 


A continuación se muestra el proceso ingresar un movimiento de **Entrada**. Para ello, accione el botón <a class="btn cl-blue bg-gray px-6"> Adicionar Movimiento </a>, el cual muestra el siguiente formulario, sobre cada campo se da una breve explicación:

![Procesar imagen](../../assets/images/cap05/chp05_img05_01.png)
_**Imagen 5.** Kárdex - Formulario Movimientos_

**Código RP:** Especifica el Código o Referencia del Material o Repuesto que es objeto del movimiento. Éste se elige con un doble clic o accionando el botón <a class="btn cl-blue bg-white px-6"> ADICIONAR RP </a> de la ventana visor de Materiales/ Repuestos por medio del subgrupo  <span class="mdi mdi-filter-variant icon white"></span> ubicado al lado del campo. Como se muestra en la imagen:


![Procesar imagen](../../assets/images/cap05/chp05_img05_02.png)
_**Imagen 6.** Kárdex - Ventana Visor Materiales_


Al terminar de digitar o elegir el Material o Repuesto,  se  muestra la siguiente información automática de los siguientes campos: **Descripción RP** y **\$Unitario**. También, al dar clic sobre el icono <span class="mdi mdi-alert-circle-outline"></span> que aparece en el campo del código, se muestra un cuadro llamado <a class="btn black"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a>.


![Procesar imagen](../../assets/images/cap05/chp05_img05_03.png)
_**Imagen 7.** Kárdex - Antes de la transacción_


La información contenida en el cuadro <a class="btn black"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a> es:

- **Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Repuesto  o Material antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Cantidad Disponible:** Muestra la cantidad disponible en el almacén del Repuesto o Material para su consumo, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Costo Unitario:** Muestra el valor unitario actual del Material o Repuesto antes del movimiento que se va a registrar. Es un campo que solo despliega datos.



**Descripción RP:** Especifica la descripción del Material o Repuesto que es objeto del movimiento.  Es un campo que solo despliega datos y no es modificable por el usuario.

**CP:** Especifica el código del Concepto de Kárdex seleccionado. Al desplegar el campo se listan los conceptos que están en la configurados en la <a class="btn cl-white bg-blue px-3">Infraestructura</a>

>**Nota:** La lista de conceptos se despliega de acuerdo al tipo de conceptos que contiene el documento. Ej. Sí el tipo de conceptos que contiene el documento es de Entrada, los conceptos que se muestran en la lista son de entrada únicamente. Los conceptos se definen o se modifican  en la tabla de Conceptos de Kárdex en el módulo de <a class="btn cl-white bg-blue px-3">Infraestructura</a>. 

**FF Transacción:** Es el campo en el que se establece la fecha en la que ocurrió el movimiento. **AM** propone la fecha del día, pero ella puede ser modificada para reflejar la fecha real del  movimiento.  Esta fecha  puede  ser modificable con permisos sobre el Kárdex “Modificar fecha del movimiento en KX” en  “Permisos para ejecución de Procesos” que se otorgan al usuario en  <a class="btn blue">Administración</a> en la etiqueta **Permisos Básicos.**

**Cantidad:**  Es  el  campo  donde  se  registra  la  cantidad  del  Material o Repuesto  en las unidades propias del mismo, que entra o sale del almacén, en la transacción actual.

**\$ Unitario:** Muestra automáticamente el valor unitario, del Material o Repuesto que entra o sale del Almacén en la actual transacción. Es un campo que solo despliega datos y es modificable en transacciones de tipo **Entrada** y **Ajustes.**

**\$ Descuento:** Se ingresa aquí el porcentaje de Descuento que se va a aplicar al valor unitario **(\$ Unitario)** del Material o Repuesto. También, al registrar el % de Descuento desde la pestaña de Documento, se verá reflejado ese valor en este campo de manera automática. Si no es necesario manejar esta información, no se edita este campo y se ingresa solamente el Costo Unitario **(\$ Unitario)**. Este campo se habilita para los documentos de tipo **Entrada.**

**Descuento:** En este campo el sistema calcula automáticamente el descuento valorizado. Este cálculo se realiza a partir del \$ Unitario y el % Descuento diligenciado. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\% Iva:** Se ingresa aquí el porcentaje de IVA que se va a  aplicar  al valor unitario (\$ Unitario)
al registrar el \% IVA desde la pestaña de Documento, se verá reflejado ese valor en este campo, de manera automática. Si no es necesario manejar esta información, se ingresa solamente el Costo Unitario (\$ Unitario).

**Iva:** En este campo el sistema calcula automáticamente el IVA valorizado. Este cálculo se realiza a partir del \$ Unitario y el **% IVA** diligenciado. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Unitario Facturado:** Es el campo donde se expresa el valor unitario facturado, del Material o  Repuesto que entra o sale del almacén en la actual transacción. Se debe tener especial cuidado con el tipo de unidades a las que se refiere el costo unitario, puesto que puede ser diferente la unidad de empaque o de compra, a las unidades de despacho o consumo. No es un campo modificable por el usuario, por ello se observa bloqueado cuando se ingresan las cantidades y el costo unitario.

**\$ Total:** Es un campo calculado por el sistema y que contiene el valor total  de  la actual transacción. Es el producto de la Cantidad por el 
\$ Unitario Facturado. No es un campo modificable por el usuario, por ello se  observa bloqueado.

**\$ Unitario del Almacén:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar o después del movimiento registrado. Para el cálculo de este valor, se tiene en cuenta el tipo de costeo del almacén. Es un campo que solo despliega datos. No es un campo modificable por el usuario, por ello se observa bloqueado.



**OT:** Se trata de un campo que normalmente está bloqueado y que solo aparece cuando se elige un concepto de kárdex que exija una Órden de Trabajo válida (Ver Tabla Conceptos de  Kárdex  en  el  Capítulo  de Infraestructura). Por ejemplo, una Entrada al almacén que corresponda a una devolución de un Material o un Repuesto que había sido despachado a una OT y no fue consumido por ella. Al dar clic al icono <span class="mdi mdi-filter-variant"> ubicado en la parte superior derecha del campo, se abre una nueva ventana con el visor de las Órdenes con el fin de seleccionarla, basta con seleccionar la OT y dar doble clic o seleccionar la OT y luego dar clic al botón <a class="btn white">ADICIONAR OT</a>.

**Cantidad en OT:** En este campo se muestra bloqueado porque al insertarse la transacción indica  la cantidad del Material o Repuesto que contiene la OT relacionada en el Movimiento de Kárdex. Este campo no es modificable por el usuario, por lo tanto se visualiza como bloqueado.

**Cambiar Costo:** Este check box para las **Entradas** se encuentra por defecto seleccionado e indica que cambia el valor unitario del ítem en el módulo de Almacén de Repuestos. Si no se habilita el check box, no se modifica el valor unitario del ítem.


Finalmente para agregar la línea con la información del movimiento accione el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>:


![Procesar imagen](../../assets/images/cap05/chp05_img05_04.png)
_**Imagen 8.** Kárdex - Agregar un movimiento_


_>**Nota:** En este paso de la transacción se pueden hacer modificaciones y eliminaciones antes de insertar el movimiento. Luego de insertar el movimiento no es posible hacer cambios._

Luego de agregar, se visualiza la información del movimiento al insertar:

![Procesar imagen](../../assets/images/cap05/chp05_img05_05.png)
_**Imagen 9.** Kárdex - Agregar un movimiento_


Para **Modificar** el movimiento se debe dar clic en el campo del **Código RP** y en la parte inferior se mostrará de nuevo el formulario anterior para que realice los cambios necesarios y luego accione el botón <span class="mdi mdi-autorenew icon bg-gray cl-blue "></span> y observe el cambio nuevamente en la línea de movimiento:

![Procesar imagen](../../assets/images/cap05/chp05_img05_06.png)
_**Imagen 10.** Kárdex - Modificar un movimiento_

### Eliminar una transacción

Para eliminar un registro de movimiento de Repuestos/Materiales, solo se permite hacer durante la creación del mismo (antes de 
<a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a>), para esto se debe ir con la barra de desplazamiento horizontal hasta el final del lado derecho para dar clic al botón eliminar <span class="mdi mdi-delete"></span>, el cual muestra un mensaje de alerta indicándole al usuario si está seguro de eliminar el registro y continuar con
<a class="btn bg-gray cl-black">ACEPTAR</a>:


![Procesar imagen](../../assets/images/cap05/chp05_img10.png)
_**Imagen 11.** Kárdex - Eliminar Movimiento_

### Hacer válido el movimiento de Entrada


Para finalizar una transacción se debe accionar el botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a>. 

Una vez se finaliza la transacción del movimiento, se muestra un cuadro adicional llamado  <a class="btn black"><span class="mdi mdi-swap-vertical-circle">después de la Transacción</span></a> y muestra la información del saldo de inventario actual con la que quedó el ítem, luego de finalizarse la transacción.

La información contenida en el cuadro <span class="mdi mdi-alert-circle-outline"></span>
 es:

- **Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

- **Cantidad Disponible:** Muestra la cantidad disponible en el almacén del Material o Repuesto para su consumo, después del movimiento registrado. Es un campo que solo despliega datos.

- **Costo Unitario:** Muestra el valor unitario actual del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

A continuación se muestra un ejemplo:


![Procesar imagen](../../assets/images/cap05/chp05_img07.png)
_**Imagen 12.** Kárdex - Después de la transacción_


Al finalizar una transacción a través del botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a> el movimiento queda en color gris y bloqueado, el cual o los cuales se convierten en registros de solo consulta. No es posible eliminar los registros de las transacciones de kárdex, una vez han sido ingresadas en el módulo.

  

## Insertar movimientos de Salida

Para insertar un movimiento de salida, se debe previamente haber creado el documento de **Salida** (_Sección Ventana Principal_). Para ello, accione el botón <a class="btn cl-blue bg-gray px-6"> Adicionar Movimiento </a>, el cual muestra el siguiente formulario, sobre cada campo se da una breve explicación:

![Procesar imagen](../../assets/images/cap05/chp05_img26.png)
_**Imagen 13.** Kárdex - Formulario Movimientos_

**Código RP:** Especifica el Código o Referencia del Material o Repuesto que es objeto del movimiento. Éste se elige con un doble clic o accionando el botón <a class="btn cl-blue bg-white px-6"> ADICIONAR RP </a> de la ventana visor de Materiales/ Repuestos por medio del subgrupo  <span class="mdi mdi-filter-variant icon white"></span> ubicado al lado del campo. Como se muestra en la imagen:


![Procesar imagen](../../assets/images/cap05/chp05_img27.png)
_**Imagen 14.** Kárdex - Ventana Visor Materiales_


Al terminar de digitar o elegir el Material o Repuesto,  se  muestra la siguiente información automática de los siguientes campos: **Descripción RP** y **\$Unitario**. También, al dar clic sobre el icono <span class="mdi mdi-alert-circle-outline"></span> que aparece en el campo del código, se muestra un cuadro llamado <a class="btn black"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a>.


![Procesar imagen](../../assets/images/cap05/chp05_img28.png)
_**Imagen 15.** Kárdex - Antes de la transacción_


La información contenida en el cuadro <a class="btn black"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a> es:

- **Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Repuesto  o Material antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Cantidad Disponible:** Muestra la cantidad disponible en el almacén del Repuesto o Material para su consumo, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Costo Unitario:** Muestra el valor unitario actual del Material o Repuesto antes del movimiento que se va a registrar. Es un campo que solo despliega datos.



**Descripción RP:** Especifica la descripción del Material o Repuesto que es objeto del movimiento.  Es un campo que solo despliega datos y no es modificable por el usuario.

**CP:** Especifica el código del Concepto de Kárdex seleccionado. Al desplegar el campo se listan los conceptos que están en la configurados en la <a class="btn cl-white bg-blue px-3">Infraestructura</a>.

>**Nota:** La lista de conceptos se despliega de acuerdo al tipo de conceptos que contiene el documento. Ej. Sí el tipo de conceptos que contiene el documento es de Salida, los conceptos que se muestran en la lista son de salida únicamente Los conceptos se definen o se modifican en la tabla de Conceptos de Kárdex en el módulo de <a class="btn cl-white bg-blue px-3">Infraestructura</a>. 

**FF Transacción:** Es el campo en el que se establece la fecha en la que ocurrió el movimiento. **AM** propone la fecha del día, pero ella puede ser modificada para reflejar la fecha real del  movimiento.  Esta fecha  puede  ser modificable con permisos sobre el Kárdex “Modificar fecha del movimiento en KX” en  “Permisos para ejecución de Procesos” que se otorgan al usuario en  <a class="btn blue">Administración</a> en la etiqueta **Permisos Básicos.**

**Cantidad:**  Es  el  campo  donde  se  registra  la  cantidad  del  Material o Repuesto  en las unidades propias del mismo que sale del almacén, en la transacción actual.

**\$ Unitario:** Muestra automáticamente el valor unitario, del Material o Repuesto que sale del Almacén en la actual transacción. Es un campo que solo despliega datos y es modificable en transacciones de tipo **Entrada** y **Ajustes.**


**OT:** Se trata de un campo que normalmente está bloqueado y que solo aparece cuando se elige un concepto de kárdex que exija una Órden de Trabajo válida (Ver Tabla Conceptos de  Kárdex  en  el  Capítulo  de Infraestructura). Por ejemplo, esta Salida del almacén con destino a una OT. Al dar clic al icono <span class="mdi mdi-filter-variant"> ubicado en la parte superior derecha del campo, se abre una nueva ventana con el visor de las Órdenes con el fin de seleccionarla, basta con seleccionar la OT y dar doble clic o seleccionar la OT y luego dar clic al botón <a class="btn white">ADICIONAR OT</a>.

**Cantidad en OT:** En este campo se muestra bloqueado porque al insertarse la transacción indica  la cantidad del Material o Repuesto que contiene la OT relacionada en el Movimiento de Kárdex. Este campo no es modificable por el usuario, por lo tanto se visualiza como bloqueado.

**Recibido por:** Este campo despliega los Responsables Internos (RI) con el fin de asignar una persona resposable o cargo de la entrega de implementos.


**Comentario:** En cada movimiento se hace posible agregar una anotación o comentario. 

>**Nota:** Para los usuarios que deseen agregar la Firma de Recibido para una salida en particular de un Responsable Interno (RI) se debe parametrizar en el modulo de <a class="btn cl-white bg-blue px-3">Administración</a>, en valores por Defecto en la etiqueta **Kárdex** y marcar como **SÍ** la pregunta de configuración: *¿ Desea enviar Correo para capturar Firma de Recibido?*. 


Finalmente para agregar la línea con la información del movimiento accione el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>:


![Procesar imagen](../../assets/images/cap05/chp05_img29.png)
_**Imagen 16.** Kárdex - Agregar un movimiento_


_>**Nota:** En este paso de la transacción se pueden hacer modificaciones y eliminaciones antes de insertar el movimiento. Luego de insertar el movimiento no es posible hacer cambios._

Luego de agregar, se visualiza la información del movimiento al insertar:

![Procesar imagen](../../assets/images/cap05/chp05_img30.png)
_**Imagen 17.** Kárdex - Agregar un movimiento_


Para **Modificar** el movimiento se debe dar clic en el campo del **Código RP** y en la parte inferior se mostrará de nuevo el formulario anterior para que realice los cambios necesarios y luego accione el botón nuevamente <span class="mdi mdi-autorenew icon bg-gray cl-blue "></span> y observe el cambio  en la línea de movimiento:

![Procesar imagen](../../assets/images/cap05/chp05_img05_06.png)
_**Imagen 18.** Kárdex - Actualizar un movimiento_


### Hacer válido el movimiento de Salida


Para finalizar una transacción se debe accionar el botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a>. 

Una vez se finaliza la transacción del movimiento, se muestra un cuadro adicional llamado  <a class="btn black"><span class="mdi mdi-swap-vertical-circle">después de la Transacción</span></a> y muestra la información del saldo de inventario actual con la que quedó el ítem, luego de finalizarse la transacción.

La información contenida en el cuadro <span class="mdi mdi-alert-circle-outline"></span>
 es:

- **Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

- **Cantidad Disponible:** Muestra la cantidad disponible en el almacén del Material o Repuesto para su consumo, después del movimiento registrado. Es un campo que solo despliega datos.

- **Costo Unitario:** Muestra el valor unitario actual del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

A continuación se muestra un ejemplo:


![Procesar imagen](../../assets/images/cap05/chp05_img30.png)
_**Imagen 19 .** Kárdex - Después de la transacción_


Al finalizar una transacción a través del botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a> el movimiento queda en color gris y bloqueado, el cual o los cuales se convierten en registros de solo consulta. No es posible eliminar los registros de las transacciones de kárdex, una vez han sido ingresadas en el módulo.



## Ajustar Inventario

El objetivo de esta funcionalidad es realizar una conciliación entre el Inventario Teórico que lo da el sistema y el Inventario Físico que lo debe realizar un designado para este proceso, ambos inventarios deben coincidir, en caso contrario, se procede a realizar un Ajuste. 



La funcionalidad de Ajustar Inventario se lleva a cabo a través de un Documento de Kárdex, como en los dos modos anteriores además, permite realizar dos tipos de ajustes: en Cantidad y en Valor. Sobre el documento es posible hacer el ajuste para el Tipo de Documento: **Salida de Almacén** o para una **Devolución al Almacén** como se ilustra a continuación:



![Procesar imagen](../../assets/images/cap05/chp05_img33.png)
_**Imagen 20.** Kárdex - Fomulario Ajuste_

A continuación  se describen los campos que componen el registro de un Ajuste en la pestaña/porción movimientos. Sobre cada campo se da una breve explicación.

_**Ejemplo para un Ajuste en Cantidad**_

Una vez accione el botón <a class="btn cl-blue bg-gray px-3">Adicionar Movimientos</a> se visualiza el siguiente formulario:

![Procesar imagen](../../assets/images/cap05/chp05_img34.png)
_**Imagen 22.** Kárdex - Ajuste Subgrupo_




**Código RP:** Especifica el Código o Referencia del Material o Repuesto objeto del movimiento de Ajuste, según se elija en la ventana visor de Materiales y Repuestos que se muestra al dar clic en el <span class="mdi mdi-filter-variant icon white"></span>ubicado en la parte superior derecha. 


![Procesar imagen](../../assets/images/cap05/chp05_img34_01.png)
_**Imagen 23.** Kárdex - Movimiento Ajuste_



Al seleccionar el Material o Repuesto,  aparece un cuadro llamado <a class="btn"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a> que muestra la información del saldo de inventario actual de ese ítem antes de la transacción.

La información contenida en el cuadro <a class="btn"><span class="mdi mdi-swap-vertical-circle">Antes de la Transacción</span></a> es la siguiente:


- **Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Material o Repuesto, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Cantidad Disponible:** Muestra la cantidad disponible en el almacén, del repuesto o material para su consumo, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

- **Costo Unitario:** Muestra el valor unitario actual del repuesto o  material, antes del movimiento que se va a registrar. Es un campo que solo despliega datos.

![Procesar imagen](../../assets/images/cap05/chp05_img35.png)
_**Imagen 24.** Kárdex - Movimiento Antes de la transacción_

 
**FF Transacción:** Es el campo en el que se establece la fecha en la que ocurrió el movimiento de Ajuste. **AM** propone la fecha del día, pero ella puede ser modificada para reflejar la fecha real del movimiento. Esta fecha  puede  ser  modificable en el permiso de usuario  “Modificar fecha del movimiento en KX” en la definición de  “Permisos para ejecución de Procesos” que se otorgan al usuario en el módulo <a class="btn blue">Administración</a> en **Permisos para ejecución de procesos.**


**CP:** Especifica el código del concepto de kárdex seleccionado. Al accionarlo, se muestra la lista en la que se debe elegir el concepto de kárdex de Ajuste por el cual se realiza el movimiento. La lista se crea de acuerdo al tipo de conceptos que contiene el documento. Además, al hacer clic sobre el icono  <span class="mdi mdi-alert-circle-outline"></span> que está al lado derecho de este campo, se observa el nombre del concepto de kárdex asociado a ese movimiento.

>**Nota:** También, si se elige un concepto de kárdex de Ajuste tipo Cantidad, se desbloquea el campo  **“Cantidad Ajuste”**. Mientras que, si se elige un concepto de kárdex de Ajuste tipo Valor, se desbloquea el campo  **“\$ Unit Ajuste”.**



**Cantidad Ajuste:** Muestra automáticamente la cantidad actual del Material o Repuesto. Es  el  campo  donde  se  registra  la  cantidad a ajustar  del  ítem en cuestión,  en  las unidades propias, en la transacción actual. Solo se desbloquea cuando el concepto de kárdex es un Ajuste por Cantidad. Por ejempplo: Si del Repuesto quedaron despues de la salida  "75" unidades y en realidad eran "4" o cualquier otro valor entonces en este campo se debe registrar el número correcto "4". El sistema calcula automáticamente. (ver el ejemplo _Hacér válido un movimiento de Ajuste_)


**\$ Unit Ajuste:** Muestra automáticamente el valor unitario del Material o  Repuesto. Es el campo  donde  se  registra  el valor unitario a ajustar  del  ítem en cuestión,  en  las unidades propias, en la transacción actual. Sólo se desbloquea cuando el concepto de kárdex es un _Ajuste por Valor._ Al igual que el campo anterior, se debe poner el valor unitario real del ítem a ajustar y al finalizar la transacción será calculada de acuerdo al tipo de costeo del almacén.


**Cantidad:** Muestra automáticamente la cantidad actual del Material o Repuesto antes de la transacción, una vez definida la cantidad de ajuste, se muestra la cantidad total con la que quedará el Material o Repuesto al finalizar la transacción. Es un campo que solo despliega datos y no es modificable por el usuario, por ello se observa bloqueado.

**\$ Unitario en el Almacén:** Muestra el valor unitario actual del Material o Repuesto, antes del movimiento que se va a registrar o después del movimiento registrado. Para el cálculo de este valor, se tiene en cuenta el tipo de costeo del almacén. Es un campo que solo despliega datos. No es un campo modificable por el usuario, por ello se observa bloqueado.

**\$ Total:** Es un campo calculado por el sistema y que contiene el valor total  de  la actual transacción. Es el producto de la Cantidad por el \$ Unit del AL. No es un campo modificable por el usuario, por ello se observa bloqueado.


Finalmente para agregar la línea con la información del movimiento accione el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>:


![Procesar imagen](../../assets/images/cap05/chp05_img36.png)
_**Imagen 25.** Kárdex - Agregar un movimiento_


_>**Nota:** En este paso de la transacción se pueden hacer modificaciones y eliminaciones antes de insertar el movimiento. Luego de insertar el movimiento no es posible hacer cambios._

Luego de agregar, se visualiza la información del movimiento al insertar:

![Procesar imagen](../../assets/images/cap05/chp05_img37.png)
_**Imagen 26.** Kárdex - Agregar un movimiento_


Para **Modificar** el movimiento se debe dar clic en el campo del **Código RP** y en la parte inferior se mostrará de nuevo el formulario anterior para que realice los cambios necesarios y luego accione el botón nuevamente <span class="mdi mdi-autorenew icon bg-gray cl-blue "></span> y observe el cambio  en la línea de movimiento:

![Procesar imagen](../../assets/images/cap05/chp05_img38.png)
_**Imagen 27.** Kárdex - Modificar un movimiento_


### Hacer válido un movimiento de Ajuste

Para finalizar una transacción se debe accionar el botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a>. 

Una vez se finaliza la transacción del movimiento, se muestra un cuadro adicional llamado  <a class="btn black"><span class="mdi mdi-swap-vertical-circle">después de la Transacción</span></a> y muestra la información del saldo de inventario actual con la que quedó el ítem, luego de finalizarse la transacción.

La información contenida en el cuadro <span class="mdi mdi-alert-circle-outline"></span>
 es:

**Cantidad Actual:** Muestra la cantidad actual en existencia en el almacén del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

**Cantidad Disponible:** Muestra la cantidad disponible en el almacén del Material o Repuesto después del movimiento registrado. Es un campo que solo despliega datos.

**Costo Unitario:** Muestra el valor unitario actual del Material o Repuesto, después del movimiento registrado. Es un campo que solo despliega datos.

**Descripción RP:** Especifica la descripción del Material o repuesto que fue objeto  del movimiento de entrada o salida.  Es un campo que solo despliega datos y no es modificable por el usuario, por ello se observa bloqueado.


A continuación se muestra un ejemplo:


![Procesar imagen](../../assets/images/cap05/chp05_img39.png)
_**Imagen 28.** Kárdex - Hacer válido el movimiento_


Al finalizar una transacción a través del botón <a class="btn cl-blue bg-gray px-3">Insertar Movimientos</a> el movimiento queda en color gris y bloqueado, el cual o los cuales se convierten en registros de solo consulta. No es posible eliminar los registros de las transacciones de kárdex, una vez han sido ingresadas en el módulo.



## Congelar Documento

![Procesar imagen](../../assets/images/cap05/chp05_img40.png)
_**Imagen 29.** Kárdex - Ir a Congelar Documento_

Es una funcionalidad que inhibe la posibilidad de adicionar nuevos movimientos a un Documento. Una vez ejecutada está transacción no tiene reversa y permanecerá en el Kárdex como un Documento únicamente de Consulta.

El botón <a class="btn blue">CONGELAR DOCUMENTO<span class="mdi mdi-grid-off"></span></a> se encuentra ubicado en la parte superior izquierda de la ventana y solo aparecerá a los usuarios que tengan el permiso de usuario  “Congelar documentos en Kárdex” en la definición de  “Permisos para ejecución de Procesos” que se otorgan al usuario en el módulo de <a class="btn cl-white bg-blue px-3">Administración</a> en Modificar permisos básicos.



Para congelar un documento basta con seleccionar el Documento de Kárdex, dar clic al  botón <a class="btn blue"> CONGELAR DOCUMENTO <span class="mdi mdi-grid-off"></span></a>, el sistema muestra un mensaje de alerta indicado al usuario de si está seguro de continuar con el proceso, ya que **la operación no tiene reversa**, para finalizar dar clic en el botón <a class="btn bg-gray cl-black">ACEPTAR</a>:


![Procesar imagen](../../assets/images/cap05/chp05_img41.png)
_**Imagen 30.** Kárdex - Mensaje Alerta Congelar Documento_
   
Así se visualizan los documentos congelados desde el visor y desde la ventana Detalle:


![Procesar imagen](../../assets/images/cap05/chp05_img42.png)
_**Imagen 31.** Kárdex - Documento congelado vista desde el visor_

![Procesar imagen](../../assets/images/cap05/chp05_img43.png)
_**Imagen 32.** Kárdex - Documento congelado vista ventana Detalle_
