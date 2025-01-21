---
title: Transacciones 
subtitle: Se explican las transacciones que compone cada almacén.
tags:
  - setup
author: win
order: '04_06'
date: 2022-11-10T20:17:34.887Z
---


### Modificar Masivamente (MM)

Esta transacción permite agregar o modificar conjuntamente información de un Subgrupo de artículos o materiales/repuestos previamente seleccionados, como por ejemplo asignar un Estado, cambiar/copiar de Almacén, Unidad de Consumo, Clase, Proveedor, Clasificación A,B,C,O.


Para acceder a esta transacción se requieren permisos correspondientes de **"Masificar"** en Almacén. Esta transacción es individual para cada Almacén por lo tanto en el Almacén que corresponda.


Al contar con este permiso se debe sobreponer el cursor,  e la cual se despliega el conjunto de opciones disponibles, luego accionar la transacción **“Modificar Masivamente”.** como se ejemplifica a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img32.png)
_**Imagen 28.** Almacén - Ir a Modificación Masiva_


>**Nota:** Para continuar con la transacción se debe hacer previamente un Subgrupo, bien sea en el visor de Modificación Masiva o previamente en el Visor del Almacén. 

Una vez se ingrese se muestra de la siguiente forma:

![Procesar imagen](../../assets/images/cap04/chp04_img33.png)
_**Imagen 29.** Almacén - Visor Modificación Masiva_

Para continuar dar un clic en el botón azul <a class="btn white">Modificación Masiva</a> ubicado en la parte superior izquierda como se indica a continuación:


![Procesar imagen](../../assets/images/cap04/chp04_img34.png)
_**Imagen 30.** Almacén - Ir a Modificación Masiva_


A continuación se da una breve explicación de los componentes de la ventana detalle de Modificación Masiva una vez se escoja la opción <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Ficha Técnica </span></a>  como se muestra en la imagen: 

![Procesar imagen](../../assets/images/cap04/chp04_img35.png)
_**Imagen 31.** Almacén - Ventana Detalle Modificación Masiva_

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Modificar solamente este Repuesto</span></a>: Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) al Material/Repuesto que se encuentre seleccionado en el visor.


<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Modificar todos los Repuestos en el visor </span></a>: Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) a todos los Repuestos o Materiales que se encuentren en el visor.

**Modificar Estado:** Se modifica masivamente el estado Activo e Inactivo, de los Repuestos/Materiales que están previamente seleccionados en el visor. Los estados predefinidos son: Activo, I-Vencido, I-Otro, I-EOI (Excedente, Obsoleto e Inservible).
 

![Procesar imagen](../../assets/images/cap04/chp04_img36.png)
_**Imagen 32.** Almacén - MM Modificar Estado_

**Modificar Almacén:** Se modifica masivamente el Almacén, de los Repuestos/Materiales que están previamente registrados en el visor. El sistema lista los almacenes que se encuentran creados en la tabla de Almacenes en Infraestructura. Adicional, se debe dejar el switche en la posición de “Cambiar de Almacén”.


![Procesar imagen](../../assets/images/cap04/chp04_img37.png)
_**Imagen 33.** Almacén - MM Almacén_


Cuando se requiera Copiar un Repuestos/Materiales existente en un Almacén a otro Almacén, se debe hacer solamente a través de esta funcionalidad, para ello se debe elegir en primer lugar el
Almacén al cual se va a asociar el Repuestos/Materiales que se va a ingresar y en segundo lugar se debe llevar el switche a la posición de **“Copiar y pegar a otro Almacén”**.


**Modificar Unidad de Consumo:** Se Modifica Masivamente la unidad de consumo de un Repuesto/Material. El sistema lista las unidades de medida que se encuentran creadas en la tabla de Unidades de Medida en Infraestructura.


![Procesar imagen](../../assets/images/cap04/chp04_img38.png)
_**Imagen 34.** Almacén - MM Unidad de Consumo_


**Modificar Clase:** Se Modifica Masivamente la clase de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clase.

![Procesar imagen](../../assets/images/cap04/chp04_img39.png)
_**Imagen 35.** Almacén - MM Clase_


**Modificar Clasificación A, B, C, O:** Se Modifica Masivamente la clasificación A, B, C, O de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clasificación A, B, C, O. Por defecto, se muestra un campo con la clasificación “O”.

![Procesar imagen](../../assets/images/cap04/chp04_img40.png)
_**Imagen 36.** Almacén - MM Clasificación_

**Modificar Proveedor 1:** Se Modifica Masivamente el Proveedor 1 de un conjunto de Repuestos/Materiales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF provenientes módulo de Infraestructura.

![Procesar imagen](../../assets/images/cap04/chp04_img41.png)
_**Imagen 37.** Almacén - MM Proveedor 1_


**Modificar Proveedor 2:** Se Modifica Masivamente el Proveedor 2 de un conjunto o un subgrupo Repuestos/Materiales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF en el módulo de Infraestructura.


![Procesar imagen](../../assets/images/cap04/chp04_img42.png)
_**Imagen 38.** Almacén - MM Proveedor 2_

Para hacer efectiva la Modificación Masiva, una vez que se haya elegido cualquiera de las opciones anteriores, se debe accionar el botón de la parte superior <a class="btn blue">MODIFICAR <span class="mdi mdi-pencil"></span></a>, el sistema muestra el primer mensaje de advertencia para el usuario asi:

![Procesar imagen](../../assets/images/cap04/chp04_img43.png)
_**Imagen 39.** Almacén - MM Mensaje Alerta 1_

Para continuar dar clic en el botón del mensaje alerta  <a class="btn bg-gray cl-black"> ACEPTAR </a>, a continuación por seguridad el sistema el segundo mensaje alerta:


![Procesar imagen](../../assets/images/cap04/chp04_img44.png)
_**Imagen 40.** Almacén - MM Mensaje Alerta 2_

Para finalizar, el sistema confirma la transacción con el siguiente mensaje:

![Procesar imagen](../../assets/images/cap04/chp04_img45.png)
_**Imagen 41.** Almacén - MM Mensaje Alerta 3_



### Asociar con Activos

El comando Asociar a Activos del submenú Repuestos permite asociar un Repuesto con el o los Activos a los que sirve. Esta asociación es opcional, pero es muy útil en caso de necesitar ubicar con facilidad aquellos Repuestos específicos que solo sirven a Activos específicos.


Para acceder a esta opción se debe contar con los permisos de Repuestos, y a continuación se sobrepone el cursor sobre el Almacén en cuestión, el cual despliega al lado derecho el conjunto de transacciones disponibles para ese Almacén, luego se elige la transacción **Asociar con Activos**, como se indica a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img22.png)
_**Imagen 42.** Almacén - Ir a Asociar con Activos_

Al ingresar, en el lado izquierdo se visualizan los Activos y en el derecho los Repuestos existentes en el almacén seleccionado previamente. Para navegar entre las páginas se debe dar clic al icono <span class="mdi mdi-unfold-more-vertical"></span> ubicado en la parte inferior derecha de cada recuadro:

![Procesar imagen](../../assets/images/cap04/chp04_img23.png)
_**Imagen 43.** Almacén - Desplazarse en Asociar con Activos_

También se visualizan los indicadores <span class="mdi mdi-message-alert"></span> correspondientes de cada módulo, además se recomienda hacer subgrupos  <span class="mdi mdi-filter-variant"></span> para facilitar la asociación de cada lado, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img24.png)
_**Imagen 44.** Almacén - Comandos Asociar con Activos_

La asociación de los Repuestos con los Activos, inicia al dar clic a los **check box** <a class="btn black"><span class="mdi mdi-checkbox-blank-outline"></a>, que están al lado izquierdo en la primera columna de la porción de Activos y en la porción derecha de Repuestos. Es posible seleccionar uno o varios al tiempo, de esta manera los Repuestos que serán asociados al o los Activos seleccionados muestran la cantidad inicial (1) que es asociada por defecto. El usuario puede cambiar la cantidad del Repuesto a asociar dependiendo de las cantidades en Existencia en el inventario de AM, como se muestra a continuación:  

![Procesar imagen](../../assets/images/cap04/chp04_img25.png)
_**Imagen 45.** Almacén - Selección  Asociar con Activos_

En el ejemplo anterior se asociaron tres Repuestos diferentes, de cada uno una unidad para dos Activos.

Para terminar la transacción acciona el botón ubicado en la parte inferior <a class="btn gray">ASOCIAR</a> el cual se muestra una notificación confirmando la ejecución de la transacción y se observa el resultado de la asociación realizada de manera resumida asi:

![Procesar imagen](../../assets/images/cap04/chp04_img26.png)
_**Imagen 46.** Almacén - Asociar con Activos_

Si el usuario desea ver los repuestos asociados a un Activo, se debe elegir un único Activo del lado izquierdo y se da clic al botón inferior <a class="btn gray">VER RP ASOCIADOS</a>, **AM** mostrará en el lado derecho los Repuestos que fueron asociados al Activo seleccionado, ejemplo:

![Procesar imagen](../../assets/images/cap04/chp04_img27.png)
_**Imagen 47.** Almacén - Ver Activo asociado a Repuestos_

>**Nota:** Si se eligen dos o más Activos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Activo.

Por otro lado, si el usuario desea ver la asociación que tiene un determinado Repuesto a Activos, se debe elegir un único Repuesto del lado derecho y se da clic al botón inferior <a class="btn gray">VER AC ASOCIADOS </a> , **AM** mostrará en el lado izquierdo los Activos que tienen asociados el Repuesto seleccionado.

![Procesar imagen](../../assets/images/cap04/chp04_img28.png)
_**Imagen 48.** Almacén - Ver Repuesto asociado a Activos_

>**Nota:** Si se eligen dos o más Repuestos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Repuesto.

Si el usuario desea **Desasociar** un Repuesto a uno o varios Activos, se deben elegir primero el Repuesto a través de los check box  <a class="btn cl-black "><span class="mdi mdi-checkbox-blank-outline"></span></a>. Se ilustra un ejemplo:

![Procesar imagen](../../assets/images/cap04/chp04_img29.png)
_**Imagen 49.** Almacén - Seleccionar Repuesto asociado a Activos_

![Procesar imagen](../../assets/images/cap04/chp04_img30.png)
_**Imagen 50.** Almacén - Ver AC asociados_


Para terminar la transacción **Desasociar** se da clic al botón a <a class="btn gray">DESASOCIAR</a>  inmediatamente se muestra un mensaje confirmando la ejecución de la transacción y se observa el resultado de la desasociación realizada.

![Procesar imagen](../../assets/images/cap04/chp04_img31.png)
_**Imagen 51.** Almacén - Desasociar_

### Reservas


Es una transacción en Almacén llamada Reservas, la cual como su nombre lo indica permite registrar y cancelar reservas, del Repuesto o Material seleccionado en el visor. Estas Reservas son realizadas por el departamento de Mantenimiento, posibilitanfo definir el número de la OT que va a hacer el consumo del Repuesto Reservado.

Para hacer reservas se requieren permisos previos de usuario del Almacén en cuestión para hacer reservas.

Para acceder a esta transacción se sobrepone el cursor sobre el Almacén en cuestión y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige **“Reservas”** como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img46.png)
_**Imagen 52.** Almacén - Ir a Reservas_ 

Al ingresar se visualiza la ventana Visor de Reservas, cada título en azul permite organizar la información ascendente/descendente. 


![Procesar imagen](../../assets/images/cap04/chp04_img47.png)
_**Imagen 53.** Almacén - Visor Reservas_ 

Para el detalle de un registro se da clic sobre él y se muestra a continuación la Ventana Detalle de la Reserva:

![Procesar imagen](../../assets/images/cap04/chp04_img48.png)
_**Imagen 54.** Almacén - Detalle Reservas_ 

A continuación se describe cada campo:

**Identificación:** Es el recuadro que contiene la información general de la reserva como código,Fecha de Creación, Fecha de u¿Sso, Estado de la reserva, Nombre de la persona que hace la reserva y número de OT.

**Código:** Es asignado automáticamente por el sistema, consiste en un ordinal. Este campo no es modificable por el usuario.

**Fecha de Creación:** Es la fecha en la que se realiza la reserva del Repuesto seleccionado en el visor. No se puede modificar. El programa la asigna desde la fecha del sistema.

**Fecha de Uso:** Es la fecha en la que se tiene planeado utilizar el Repuesto seleccionado en el visor. De acuerdo con esta fecha, la persona encargada del Almacén debe mantener las unidades reservadas, disponibles sólo para quién registró la reserva. Se permite poner desde la fecha actual en adelante.


**Estado:** Informa acerca del curso de la Reserva. Puede ser Activa, Finalizada o Cancelada. 

**Reservado por:** Es la persona que registra la Reserva de las unidades del Repuesto seleccionado.

**Número de OT:** Este es un campo, obligatorio que exige un consecutivo de OT para hacer la reserva y así el Almacenista pueda ejecutar la transacción en el módulo de Kardex. Es posible escribir directamente el número de la OT o elegir una OT a través del Subgrupo al lado derecho del campo. <span class="mdi mdi-filter-variant"></span> el cual la ventana visor de Órdenes.

**Cantidad:** Es el número de unidades del Repuesto que se desea Reservar.

**Comentario:** Se pueden agregar aquí, observaciones o comentarios referentes a la reserva.

>**Nota:** El estado Finalizada, solo se actualiza desde el módulo de Kárdex a través de la transacción de Salida tipo Reservas para la OT en cuestión (este tipo de salida se configura desde la tabla de infraestructura - Conceptos de Kardex).



A continuación se describe como adicionar Repuestos a la reserva:

#### Adicionar Repuestos

Esta opción permite definir los Repuestos que serán reservados. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo los Repuestos que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de los Repuestos a reservar. Para continuar dar clic en el botón <a class="btn gray">Adicionar RP </a> y a continuación se abre el siguiente formulario:


![Procesar imagen](../../assets/images/cap04/chp04_img49.png)
_**Imagen 55.** Almacén - Adicionar RP Reservas_ 


A continuación se describen los campos que componen esta porción de información adicional:


**Código RP:** En este campo se elige el código del Repuesto, desde una ventana de selección de Repuestos  a través de un clic en el Subgrupo <span class="mdi mdi-filter-variant icon white"></span> que se encuentra al lado derecho del campo. Este comando trae el visor de Repuestos,  para añadir el Repuesto se debe dar un doble clic sobre la selección, luego de esto, aparece automáticamente diligenciados la descripción del Repuesto, la cantidad actual y la disponible.

**Descripción RP:** En este campo se visualiza la información de la descripción del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Actual:** En este campo se muestra la cantidad en existencia del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Disponible:** En este campo se observa la cantidad disponible del Repuesto seleccionado, es decir, se visualiza la diferencia entre “Existencia Inventario” menos “Cantidad Reservada”. Este campo no es modificable por el usuario.

**Cantidad a Reservar:** En este campo se define la cantidad que se desea reservar del Repuesto seleccionado. En caso de elegir una cantidad a reservar mayor a la cantidad disponible, el sistema muestra un mensaje de alerta indicando que la cantidad a reservar no está disponible.

![Procesar imagen](../../assets/images/cap04/chp04_img50.png)
_**Imagen 56.** Almacén - Mensaje Alerta Reservas_

Una vez diligenciado el formulario dar clic en el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> en el cual se visualizan los repuestos en la parte izquierda en el orden que se adicionen:

![Procesar imagen](../../assets/images/cap04/chp04_img51.png)
_**Imagen 57.** Almacén - Repuestos Reservados_

Para actualizar la cantidad del Repuesto de debe dar clic sobre él asegurándose de estar sombreado en verde:

![Procesar imagen](../../assets/images/cap04/chp04_img52.png)
_**Imagen 58.** Almacén - Actualizar cantidad a Reservar_

Para terminar la transacción, dar clic en el botón <a class="btn blue">INSERTAR <span class="mdi mdi-plus-circle-outline"></span></a> ubicado en la parte superior izquierda, el sistema abrirá un mensaje alerta antes de insertar la nueva reserva, para continuar <a class="btn bg-gray cl-black">ACEPTAR</a>:


![Procesar imagen](../../assets/images/cap04/chp04_img53.png)
_**Imagen 59.** Almacén - Mensaje Alerta Insertar Reserva_

Si la OT ya está asignada a una reserva aparece un mensaje alerta a lo cual el usuario que hace la reserva debe asegurarse de hacer la reserva de varios Repuestos en un mismo registro:


![Procesar imagen](../../assets/images/cap04/chp04_img54.png)
_**Imagen 60.** Almacén - Mensaje Error Insertar Reserva_

Una vez se inserte la reserva el sistema muestra nuevamente el visor.


### Inventario al Final del Mes

Esta transacción se lleva a cabo para realizar el cierre de inventario del mes y consiste en tomar una fotografía del inventario hasta la fecha de realizar el cierre de inventario. 

A esta opción se llega al sobreponer el cursor  sobre un almacén y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige la transacción “Inventario final del mes”.

![Procesar imagen](../../assets/images/cap04/chp04_img55.png)
_**Imagen 61.** Almacén - Ir a Inventario_

El proceso se realiza eligiendo la opción “Inventario final del mes”, se abre una ventana donde se muestran dos campos desplegables, uno para seleccionar el año y otro para el mes a realizar el cierre de inventario, respectivamente. Los meses que despliega son todos los meses del año. Se debe escoger el año correspondiente con el mes a cerrar, en el botón “Cerrar Inventario” y aparecerá una ventana solicitando confirmación de la operación a realizar, como se muestra a continuación.

![Procesar imagen](../../assets/images/cap04/chp04_img56.png)
_**Imagen 62.** Almacén - Detalle Inventario_

![Procesar imagen](../../assets/images/cap04/chp04_img57.png)
_**Imagen 63.** Almacén - Cerrie de Inventario_
 
Para finalizar la transacción dar clic en el botón <a class="btn gray">cerrar inventario</a>
 
 El sistema muestra un mensaje alerta confirmando la transacción:

 ![Procesar imagen](../../assets/images/cap04/chp04_img58.png)
_**Imagen 64.** Almacén - Mensaje Inventario_

>**Nota:** Solo se puede ejecutar esta transacción una vez, de lo contrario el sistema muestra un aviso alerta.

El cierre de inventario en **AM** no prohíbe su funcionamiento. Es decir, existen software que hasta no cerrar inventario, hasta que no pase de mes, no permite que se realice ingreso de información solo lo hacen de modo consulta. **AM** está habilitado para seguir su funcionamiento después de haberse ejecutado la transacción Inventario final del mes.
Para la realización de este proceso, “Inventario final del mes”, se debe tener los permisos adecuados los cuales permiten ejecutar y volver a iniciar el proceso. Estos permisos se configuran por usuario en el módulo de Administración.

### DashBoard Almacén

Esta transaccion permite ver indicadores gráficos básicos sobre la información de los Repuestos/Materiales. Para acceder a esta opción se sobrepone el cursor sobre el módulo de Almacén de interés, en el menú principal se despliega un submenú de transacciones disponibles y luego dar clic en **“DashBoard Almacén”**.

![Procesar imagen](../../assets/images/cap04/chp04_img59.png)
_**Imagen 65.** Almacén - ir a DashBoard_


Este comando permite visualizar en tiempo real el comportamiento de los Materiales/Repuestos con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas.

![Procesar imagen](../../assets/images/cap04/chp04_img60.png)
_**Imagen 66.** Almacén - DashBoard_


La información del rectángulo de color naranja ubicado en la parte superior derecha como guía a modo de fracción (N/M), indica el número de registros del subgrupo en el visor(N) sobre el número total de registros de Activos existentes en la base de datos (M). Si no hay preselección, los dos números en sus totales son los mismos.
También un indicador de la existencia de un subgrupo, es el ícono <span class="mdi mdi-filter-variant"></span> con una pelota de color rojo que se ubica al lado derecho de dicha fracción.

![Procesar imagen](../../assets/images/cap04/chp04_img61.png)
_**Imagen 67.** Almacén - Dashboard Subgrupos_

Para personalizar la vista de los gráficos o tener una información específica se recomienda hacer subgrupos a través del ícono <span class="mdi mdi-filter-variant"></span>. Asimismo los DashBoards permiten ocultar información con solo dar un clic sobre sus rectángulos de colores como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap04/chp04_img62.png)
_**Imagen 68.** Almacén - Dashboard personalizado_

Sí se desea restablecer la información, se debe dar clic al icono <span class="mdi mdi-autorenew"></span> (actualizar). En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic al ícono de la flecha hacia abajo <span class="mdi mdi-download"></span> como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img63.png)
_**Imagen 69.** Almacén - Dashboard comandos_