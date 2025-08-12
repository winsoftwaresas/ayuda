---
title: Transacciones 
subtitle: Se explican las transacciones que compone cada almacén.
tags:
  - setup
author: win
order: '04_06'
date: 2022-11-10T20:17:34.887Z
media: "../../assets/images/docs/"
---

### Modificar Masivamente (MM)

Esta transacción permite agregar o modificar conjuntamente información de un Subgrupo de artículos o materiales/repuestos previamente seleccionados, como por ejemplo asignar un Estado, cambiar/copiar de Almacén, Unidad de Consumo, Clase, Proveedor, Clasificación A,B,C,O.

Para acceder a esta transacción se requieren permisos correspondientes de **"Masificar"** en Almacén. Esta transacción es individual para cada Almacén por lo tanto en el Almacén que corresponda.

Al contar con este permiso se debe sobreponer el cursor,  e la cual se despliega el conjunto de opciones disponibles, luego accionar la transacción **“Modificar Masivamente”.** como se ejemplifica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_24.png"
  alt:"Almacén - Ir a Modificación Masiva"
%}

> **Nota:** Para continuar con la transacción se debe hacer previamente un Subgrupo, bien sea en el visor de Modificación Masiva o previamente en el Visor del Almacén. 

Una vez se ingrese se muestra de la siguiente forma:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_25.png"
  alt:"Almacén - Visor Modificación Masiva"
%}

Para continuar dar un clic en el botón azul <a class="btn white">Modificación Masiva</a> ubicado en la parte superior izquierda como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_26.png"
  alt:"Almacén - Ir a Modificación Masiva"
%}

A continuación se da una breve explicación de los componentes de la ventana detalle de Modificación Masiva una vez se escoja la opción <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Ficha Técnica </span></a>  como se muestra en la imagen: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_27.png"
  alt:"Almacén - Ventana Detalle Modificación Masiva"
%}

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Modificar solamente este Repuesto</span></a>: Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) al Material/Repuesto que se encuentre seleccionado en el visor.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Modificar todos los Repuestos en el visor </span></a>: Al escoger esta opción, se ejecutan los cambios marcados (Estado, Almacén, Unidad de Consumo, Clase, Clasificación A, B,C, O, y Proveedor) a todos los Repuestos o Materiales que se encuentren en el visor.

**Modificar Estado:** Se modifica masivamente el estado Activo e Inactivo, de los Repuestos/Materiales que están previamente seleccionados en el visor. Los estados predefinidos son: Activo, I-Vencido, I-Otro, I-EOI (Excedente, Obsoleto e Inservible).

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_28.png"
  alt:"Almacén - MM Modificar Estado"
%}

**Modificar Almacén:** Se modifica masivamente el Almacén, de los Repuestos/Materiales que están previamente registrados en el visor. El sistema lista los almacenes que se encuentran creados en la tabla de Almacenes en Infraestructura. Adicional, se debe dejar el switch en la posición de “Cambiar de Almacén”.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_29.png"
  alt:"Almacén - MM Almacén"
%}

Cuando se requiera Copiar un Repuestos/Materiales existente en un Almacén a otro Almacén, se debe hacer solamente a través de esta funcionalidad, para ello se debe elegir en primer lugar el
Almacén al cual se va a asociar el Repuestos/Materiales que se va a ingresar y en segundo lugar se debe llevar el switch a la posición de **“Copiar y pegar a otro Almacén”**.

**Modificar Unidad de Consumo:** Se Modifica Masivamente la unidad de consumo de un Repuesto/Material. El sistema lista las unidades de medida que se encuentran creadas en la tabla de Unidades de Medida en Infraestructura.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_30.png"
  alt:"Almacén - MM Unidad de Consumo"
%}

**Modificar Clase:** Se Modifica Masivamente la clase de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clase.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_31.png"
  alt:"Almacén - MM Clase"
%}

**Modificar Clasificación A, B, C, O:** Se Modifica Masivamente la clasificación A, B, C, O de un Repuesto/Material. El sistema muestra un campo para que el usuario digite la nueva clasificación A, B, C, O. Por defecto, se muestra un campo con la clasificación “O”.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_32.png"
  alt:"Almacén - MM Clasificación"
%}

**Modificar Proveedor 1:** Se Modifica Masivamente el Proveedor 1 de un conjunto de Repuestos/Materiales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF provenientes módulo de Infraestructura.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_33.png"
  alt:"Almacén - MM Proveedor 1"
%}

**Modificar Proveedor 2:** Se Modifica Masivamente el Proveedor 2 de un conjunto o un subgrupo Repuestos/Materiales. El sistema lista los Proveedores que se encuentran creados en la tabla de Terceros como tipo PF en el módulo de Infraestructura.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_34.png"
  alt:"Almacén - MM Proveedor 2"
%}

Para hacer efectiva la Modificación Masiva, una vez que se haya elegido cualquiera de las opciones anteriores, se debe accionar el botón de la parte superior <a class="btn blue">MODIFICAR <span class="mdi mdi-pencil"></span></a>, el sistema muestra el primer mensaje de advertencia para el usuario asi:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_35.png"
  alt:"Almacén - MM Mensaje Alerta 1"
%}

Para continuar dar clic en el botón del mensaje alerta  <a class="btn bg-gray cl-black"> ACEPTAR </a>, a continuación por seguridad el sistema el segundo mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_36.png"
  alt:"Almacén - MM Mensaje Alerta 2"
%}

Para finalizar, el sistema confirma la transacción con el siguiente mensaje:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_37.png"
  alt:"Almacén - MM Mensaje Alerta 3"
%}

### Asociar con Activos

El comando Asociar a Activos del submenu Repuestos permite asociar un Repuesto con el o los Activos a los que sirve. Esta asociación es opcional, pero es muy útil en caso de necesitar ubicar con facilidad aquellos Repuestos específicos que solo sirven a Activos específicos.

Para acceder a esta opción se debe contar con los permisos de Repuestos, y a continuación se sobrepone el cursor sobre el Almacén en cuestión, el cual despliega al lado derecho el conjunto de transacciones disponibles para ese Almacén, luego se elige la transacción **Asociar con Activos**, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_38.png"
  alt:"Almacén - Ir a Asociar con Activos"
%}

Al ingresar, en el lado izquierdo se visualizan los Activos y en el derecho los Repuestos existentes en el almacén seleccionado previamente. Para navegar entre las páginas se debe dar clic al icono <span class="mdi mdi-unfold-more-vertical"></span> ubicado en la parte inferior derecha de cada recuadro:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_39.png"
  alt:"Almacén - Desplazarse en Asociar con Activos"
%}

También se visualizan los indicadores <span class="mdi mdi-message-alert"></span> correspondientes de cada módulo, además se recomienda hacer subgrupos  <span class="mdi mdi-filter-variant"></span> para facilitar la asociación de cada lado, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_40.png"
  alt:"Almacén - Comandos Asociar con Activos"
%}

La asociación de los Repuestos con los Activos, inicia al dar clic a los **check box** <a class="btn black"><span class="mdi mdi-checkbox-blank-outline"></a>, que están al lado izquierdo en la primera columna de la porción de Activos y en la porción derecha de Repuestos. Es posible seleccionar uno o varios al tiempo, de esta manera los Repuestos que serán asociados al o los Activos seleccionados muestran la cantidad inicial (1) que es asociada por defecto. El usuario puede cambiar la cantidad del Repuesto a asociar dependiendo de las cantidades en Existencia en el inventario de AM, como se muestra a continuación:  

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_41.png"
  alt:"Almacén - Selección  Asociar con Activos"
%}

En el ejemplo anterior se asociaron tres Repuestos diferentes, de cada uno una unidad para dos Activos.

Para terminar la transacción acciona el botón ubicado en la parte inferior <a class="btn gray">ASOCIAR</a> el cual se muestra una notificación confirmando la ejecución de la transacción y se observa el resultado de la asociación realizada de manera resumida asi:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_42.png"
  alt:"Almacén - Asociar con Activos"
%}

Si el usuario desea ver los repuestos asociados a un Activo, se debe elegir un único Activo del lado izquierdo y se da clic al botón inferior <a class="btn gray">VER RP ASOCIADOS</a>, **AM** mostrará en el lado derecho los Repuestos que fueron asociados al Activo seleccionado, ejemplo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_43.png"
  alt:"Almacén - Ver Activo asociado a Repuestos"
%}

> **Nota:** Si se eligen dos o más Activos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Activo.

Por otro lado, si el usuario desea ver la asociación que tiene un determinado Repuesto a Activos, se debe elegir un único Repuesto del lado derecho y se da clic al botón inferior <a class="btn gray">VER AC ASOCIADOS </a> , **AM** mostrará en el lado izquierdo los Activos que tienen asociados el Repuesto seleccionado.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_44.png"
  alt:"Almacén - Ver Repuesto asociado a Activos"
%}

> **Nota:** Si se eligen dos o más Repuestos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Repuesto.

Si el usuario desea **Desasociar** un Repuesto a uno o varios Activos, se deben elegir primero el Repuesto a través de los check box  <a class="btn cl-black "><span class="mdi mdi-checkbox-blank-outline"></span></a>. Se ilustra un ejemplo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_45.png"
  alt:"Almacén - Seleccionar Repuesto asociado a Activos"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_46.png"
  alt:"Almacén - Ver AC asociados"
%}

Para terminar la transacción **Desasociar** se da clic al botón a <a class="btn gray">DESASOCIAR</a>  inmediatamente se muestra un mensaje confirmando la ejecución de la transacción y se observa el resultado de la desasociación realizada.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_47.png"
  alt:"Almacén - Desasociar"
%}

### Reservas

Es una transacción en Almacén llamada Reservas, la cual como su nombre lo indica permite registrar y cancelar reservas, del Repuesto o Material seleccionado en el visor. Estas Reservas son realizadas por el departamento de Mantenimiento, posibilitando definir el número de la OT que va a hacer el consumo del Repuesto Reservado.

Para hacer reservas se requieren permisos previos de usuario del Almacén en cuestión para hacer reservas.

Para acceder a esta transacción se sobrepone el cursor sobre el Almacén en cuestión y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige **“Reservas”** como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_48.png"
  alt:"Almacén - Ir a Reservas"
%}

Al ingresar se visualiza la ventana Visor de Reservas, cada título en azul permite organizar la información ascendente/descendente. 

![Procesar imagen](../../assets/images/cap04/chp04_img47.png)
_**Imagen 53.** _ 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_49.png"
  alt:"Almacén - Visor Reservas"
%}

Para el detalle de un registro se da clic sobre él y se muestra a continuación la Ventana Detalle de la Reserva:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_50.png"
  alt:"Almacén - Detalle Reservas"
%}

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

> **Nota:** El estado Finalizada, solo se actualiza desde el módulo de Kárdex a través de la transacción de Salida tipo Reservas para la OT en cuestión (este tipo de salida se configura desde la tabla de infraestructura - Conceptos de Kardex).

A continuación se describe como adicionar Repuestos a la reserva:

#### Adicionar Repuestos

Esta opción permite definir los Repuestos que serán reservados. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo los Repuestos que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de los Repuestos a reservar. Para continuar dar clic en el botón <a class="btn gray">Adicionar RP </a> y a continuación se abre el siguiente formulario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_51.png"
  alt:"Almacén - Adicionar RP Reservas"
%}

A continuación se describen los campos que componen esta porción de información adicional:

**Código RP:** En este campo se elige el código del Repuesto, desde una ventana de selección de Repuestos  a través de un clic en el Subgrupo <span class="mdi mdi-filter-variant icon white"></span> que se encuentra al lado derecho del campo. Este comando trae el visor de Repuestos,  para añadir el Repuesto se debe dar un doble clic sobre la selección, luego de esto, aparece automáticamente diligenciados la descripción del Repuesto, la cantidad actual y la disponible.

**Descripción RP:** En este campo se visualiza la información de la descripción del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Actual:** En este campo se muestra la cantidad en existencia del Repuesto seleccionado. No se puede modificar por parte del usuario.

**Cantidad Disponible:** En este campo se observa la cantidad disponible del Repuesto seleccionado, es decir, se visualiza la diferencia entre “Existencia Inventario” menos “Cantidad Reservada”. Este campo no es modificable por el usuario.

**Cantidad a Reservar:** En este campo se define la cantidad que se desea reservar del Repuesto seleccionado. En caso de elegir una cantidad a reservar mayor a la cantidad disponible, el sistema muestra un mensaje de alerta indicando que la cantidad a reservar no está disponible.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_52.png"
  alt:"Almacén - Mensaje Alerta Reservas"
%}

Una vez diligenciado el formulario dar clic en el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> en el cual se visualizan los repuestos en la parte izquierda en el orden que se adicionen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_53.png"
  alt:"Almacén - Repuestos Reservados"
%}

Para actualizar la cantidad del Repuesto de debe dar clic sobre él asegurándose de estar sombreado en verde:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_54.png"
  alt:"Almacén - Actualizar cantidad a Reservar"
%}

Para terminar la transacción, dar clic en el botón <a class="btn blue">INSERTAR <span class="mdi mdi-plus-circle-outline"></span></a> ubicado en la parte superior izquierda, el sistema abrirá un mensaje alerta antes de insertar la nueva reserva, para continuar <a class="btn bg-gray cl-black">ACEPTAR</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_55.png"
  alt:"Almacén - Mensaje Alerta Insertar Reserva"
%}

Si la OT ya está asignada a una reserva aparece un mensaje alerta a lo cual el usuario que hace la reserva debe asegurarse de hacer la reserva de varios Repuestos en un mismo registro:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_56.png"
  alt:"Almacén - Mensaje Error Insertar Reserva"
%}

Una vez se inserte la reserva el sistema muestra nuevamente el visor.

### Inventario al Final del Mes

Esta transacción se lleva a cabo para realizar el cierre de inventario del mes y consiste en tomar una fotografía del inventario hasta la fecha de realizar el cierre de inventario. 

A esta opción se llega al sobreponer el cursor  sobre un almacén y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige la transacción “Inventario final del mes”.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_57.png"
  alt:"Almacén - Ir a Inventario"
%}

El proceso se realiza eligiendo la opción “Inventario final del mes”, se abre una ventana donde se muestran dos campos desplegables, uno para seleccionar el año y otro para el mes a realizar el cierre de inventario, respectivamente. Los meses que despliega son todos los meses del año. Se debe escoger el año correspondiente con el mes a cerrar, en el botón “Cerrar Inventario” y aparecerá una ventana solicitando confirmación de la operación a realizar, como se muestra a continuación.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_58.png"
  alt:"Almacén - Detalle Inventario"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_59.png"
  alt:"Almacén - Cierre de Inventario"
%}
 
Para finalizar la transacción dar clic en el botón <a class="btn gray">cerrar inventario</a>
 
 El sistema muestra un mensaje alerta confirmando la transacción:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_60.png"
  alt:"Almacén - Mensaje Inventario"
%}

> **Nota:** Solo se puede ejecutar esta transacción una vez, de lo contrario el sistema muestra un aviso alerta.

El cierre de inventario en **AM** no prohíbe su funcionamiento. Es decir, existen software que hasta no cerrar inventario, hasta que no pase de mes, no permite que se realice ingreso de información solo lo hacen de modo consulta. **AM** está habilitado para seguir su funcionamiento después de haberse ejecutado la transacción Inventario final del mes.
Para la realización de este proceso, “Inventario final del mes”, se debe tener los permisos adecuados los cuales permiten ejecutar y volver a iniciar el proceso. Estos permisos se configuran por usuario en el módulo de Administración.

### DashBoard Almacén

Esta transacción permite ver indicadores gráficos básicos sobre la información de los Repuestos/Materiales. Para acceder a esta opción se sobrepone el cursor sobre el módulo de Almacén de interés, en el menú principal se despliega un submenu de transacciones disponibles y luego dar clic en **“DashBoard Almacén”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_61.png"
  alt:"Almacén - ir a DashBoard"
%}

Este comando permite visualizar en tiempo real el comportamiento de los Materiales/Repuestos con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_62.png"
  alt:"Almacén - DashBoard"
%}

La información del rectángulo de color naranja ubicado en la parte superior derecha como guía a modo de fracción (N/M), indica el número de registros del subgrupo en el visor(N) sobre el número total de registros de Activos existentes en la base de datos (M). Si no hay preselección, los dos números en sus totales son los mismos.
También un indicador de la existencia de un subgrupo, es el ícono <span class="mdi mdi-filter-variant"></span> con una pelota de color rojo que se ubica al lado derecho de dicha fracción.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_63.png"
  alt:"Almacén - Dashboard Subgrupos"
%}

Para personalizar la vista de los gráficos o tener una información específica se recomienda hacer subgrupos a través del ícono <span class="mdi mdi-filter-variant"></span>. Asimismo los DashBoards permiten ocultar información con solo dar un clic sobre sus rectángulos de colores como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_64.png"
  alt:"Almacén - Dashboard personalizado"
%}

Sí se desea restablecer la información, se debe dar clic al icono <span class="mdi mdi-autorenew"></span> (actualizar). En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic al ícono de la flecha hacia abajo <span class="mdi mdi-download"></span> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"04_65.png"
  alt:"Almacén - Dashboard comandos"
%}