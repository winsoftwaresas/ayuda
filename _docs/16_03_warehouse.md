---
title: Almacén
subtitle: Explicación del módulo del módulo de Almacén, creación de materiales y repuestos, consulta y reservas
tags: [AMovil]
author: win
order: '16_03'
media: "../../assets/images/docs/"
---

Para acceder al Almacén se debe dar un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-warehouse"></span> Almacén </a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_50.png"
  alt:"AMovil - Ir a Almacén"
%}

Se muestran los Almacenes definidos en **AM**, éstos se listan acorde a los permisos otorgados al usuario logueado: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_51.png"
  alt:"AMovil - Almacenes"
%}

Para ingresar a un Almacén se debe seleccionarlo con un toque, cada Almacén contiene un submenú que permite hacer consulta, creación de Materiales/Repuestos y hacer reservas acorde a los permisos que tenga el usuario.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_52.png"
  alt:"AMovil - Almacén Submenú"
%}

## Consultar Repuestos 

Para hacer consulta de los Materiales/Repuestos se da un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Repuestos</a>, a continuación se muestra el listado de los materiales/repuestos disponibles para el almacén seleccionado y en la parte superior se muestra el nombre del Almacén donde se realiza la consulta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_53.png"
  alt:"AMovil - Almacén Consulta Repuestos"
%}

Para ingresar al detalle del registro se da un toque sobre el botón <a class="btn cl-black bg-peach bd-peach px-6"> Detalle</a> el cual muestra la ficha técnica del Material/Repuesto:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_54.png"
  alt:"AMovil - Ficha Técnica Repuesto"
%}

Para guardar un cambio sobre la ficha técnica dar un toque en <a class="btn cl-white bg-blue px-6"> Actualizar</a>. Se muestra un mensaje alerta indicando que se ha actualizado el registro y para continuar dar un toque en <a class="btn cl-white bg-blue px-6"> Aceptar</a> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_55.png"
  alt:"AMovil - Mensaje Alerta Actualizar Repuestos"
%}

### Subgrupo Repuestos

El Subgrupo de Materiales/Repuestos permite hacer búsquedas rápidas de registros que cumplan con uno o un conjunto de criterios.

Para ingresar a esta opción se debe dar un toque sobre el icono de Subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> ubicado en la parte inferior derecha de la pantalla, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_56.png"
  alt:"AMovil - Almacén Ir a Subgrupo"
%}

El subgrupo abre la siguiente ventana:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_57.png"
  alt:"AMovil - Almacén Seleccionar un filtro Subgrupo"
%}

Se debe dar un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-5"> Seleccione un filtro </a> para visualizar los siguientes criterios de búsqueda y seleccionar un criterio:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_58.png"
  alt:"AMovil - Almacén Subgrupo Criterios de Búsqueda"
%}

 - Código RP
 - Descripción
 - Estado

Una vez que se elija el criterio de búsqueda, se muestran los siguientes campos a diligenciar.

A continuación se muestra un ejemplo con el criterio **Código RP:**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_59.png"
  alt:"AMovil - Almacén Subgrupo Criterios de Búsqueda"
%}

De la imagen anterior, los botones ubicados en la parte inferior  <a class="btn cl-white bg-blue px-3"> Limpiar</a> y <a class="btn cl-white bg-blue px-3"> Aceptar </a> son para limpiar el campo y hacer una nueva búsqueda. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_60.png"
  alt:"AMovil - Almacén Subgrupo Código RP"
%}

Una vez introduzca los datos, finalice con el botón <a class="btn cl-white bg-blue px-3"> Aceptar </a>. A continuación se muestra el resultado de la búsqueda <a class="btn cl-black bg-white px-5">1</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_61.png"
  alt:"AMovil - Almacén Subgrupo Resultado"
%}

El Subgrupo permanece hasta que el usuario reestablezca los valores por defecto. Para hacer otras búsquedas dar un toque nuevamente en el ícono subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> donde se muestran las búsquedas anteriores: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_62.png"
  alt:"AMovil - Almacén Subgrupo Búsquedas recientes"
%}

Para eliminar el historial completo de búsquedas dar un toque en el botón <a class="btn cl-white bg-blue px-3"> Limpiar </a> y luego en <a class="btn cl-white bg-blue px-3"> Aceptar </a> para volver a los valores por defecto.

## Crear un Repuesto

AMovil permite crear un registro de Material/Repuesto siempre que el usuario logueado cuente con los permisos desde **AM**. 

Para crear un Material/Repuesto dar un toque en el botón del submenú de Activos <a class="btn cl-black bg-white bd-gray px-6"><span class="iconify cl-black" data-icon="mdi-file-plus-outline"></span> Crear Repuesto </a> el cual abre el siguiente formulario:

Los campos con asteriscos en rojo (*) son obligatorios:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_63.png"
  alt:"AMovil - Almacén Crear Repuesto Formulario"
%}

**Código:** En este campo se registra el código del Material/Repuesto, de acuerdo a la política de codificación que se haya definido.

**Descripción:** Se registra la descripción del Material/Repuesto en lenguaje natural.

**Casilla:** Es el campo en el que se establece la ubicación física del Material/Repuesto dentro del Almacén. Este campo permite cualquier nomenclatura de organización. Ejemplo. E21B (7,12) significaría Estante 21, lado B, posición matricial fila 7 columna 12.

**Estado:** En este campo de opciones seleccionables es posible registrar el estado del Material/Repuesto: Activo, EOI (Excedente Obsoleto o Inservible),  Vencido y Otro.

**Unidad de consumo:**  Es la unidad mediante la cual se le solicita al Almacén o mediante la cual el Almacén despacha un determinado artículo. Ej. Galones o Unidades.

**Existencia en inventario:** Registra la cantidad en existencia en el Almacén del Material/Repuesto seleccionado. Este campo puede ser actualizado manualmente o en forma automática a través del módulo de Kárdex en **AM**. Es un permiso que se otorga desde **AM** para un usuario en AMovil.

**Costo unitario:** Es un valor que puede ser actualizado manualmente por alguien que tiene los permisos para hacerlo. Puede también actualizarse automáticamente por el sistema según el sistema de costeo definido para el almacén, a través del Kárdex en **AM**.

Una vez que se diligencien los campos, finalizar dando un clic en el botón <a class="btn cl-white bg-blue px-6"> Guardar </a> :

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_64.png"
  alt:"AMovil - Almacén Crear Repuesto Formulario Mensaje Alerta"
%}

## Reservar Repuesto

Para reservar un Material/Repuesto se da un toque sobre el submenú de Almacén en la opción <a class="btn cl-black bg-white bd-gray px-6"><span class="iconify cl-black" data-icon="mdi-calendar-multiple-check"></span> Reservar Repuesto   </a>. 

A continuación se muestra el formulario de Reserva y se da una breve explicación de cada campo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_65.png"
  alt:"AMovil - Almacén Crear Repuesto Formulario Mensaje Alerta"
%}

**Fecha de uso:** Es la fecha en la que se tiene planeado utilizar el Material/Repuesto. De acuerdo con esta fecha, la persona encargada del Almacén debe mantener las unidades reservadas, disponibles sólo para quién registró la reserva.

**Responsable:** Es la persona que registra la Reserva de las unidades del Material/Repuesto seleccionado.

**Número de orden:** Exige un consecutivo de OT para hacer la reserva y así el Almacenista pueda ejecutar la transacción desde el módulo de Kardex. 

**Repuesto:** Es el Material/Repuesto objeto de la reserva.

**Cantidad:** Es el número de unidades del Material/Repuesto que se desea reservar.

**Comentario:** Se pueden agregar observaciones o aclaraciones referentes a la reserva.

Una vez llenados los campos se da un toque sobre el botón <a class="btn cl-white bg-blue px-6"> Crear reserva</a> se mostrando el siguiente mensaje:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_66.png"
  alt:"AMovil - Almacén Crear Repuesto Formulario Mensaje Alerta"
%}

> **Nota:** cuando ya existe la reserva para una misma OT se muestra un mensaje que rechaza la reserva.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_67.png"
  alt:"AMovil - Almacén Crear Repuesto Formulario Mensaje Alerta"
%}