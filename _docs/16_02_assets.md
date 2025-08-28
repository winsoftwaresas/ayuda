---
title: Activos
subtitle: Explicación del módulo de Activos, creación de registro, consulta e inventario físico
tags: [AMovil]
author: win
order: '16_02'
media: "../../assets/images/docs/"
---

Para acceder al Submenú de Activos se debe dar un toque sobre el botón <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-home-city-outline"></span> Activos</a>. El listado se muestra completo dependiendo de los permisos que tenga el usuario.

Al ingresar al módulo de Activos aparecen las siguientes opciones:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_09.png"
  alt:"AMovil - Submenú de Activos"
%}

### Consultar Activos

Para hacer consulta de algún registro, dar un toque en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Activos</a> el cual muestra el listado de todos los Activos. Cada registro se distingue en una tarjeta azul. Si algún registro tiene un indicador de color naranja <span class="iconify cl-orange bd-orange bg-orange btn-rounded" data-icon="mdi-circle"></span>  significa que el Activo posee registros Multimedia. 

En la parte superior derecha se visualiza el número total de Activos registrados en la base de datos <a class="btn cl-black bg-white px-5">556</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_10.png"
  alt:"AMovil - Ir a Detalle Activos"
%}

Para visualizar la ficha técnica del Activo, dar un toque sobre el botón <a class="btn cl-black bg-blue-25 bd-blue px-4">Detalle</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_11.png"
  alt:"AMovil - Ficha Técnica Activos"
%}

Para guardar un cambio sobre la ficha técnica dar un toque en <a class="btn cl-white bg-blue px-3"> Actualizar</a>. 

El aplicativo confirma que se ha actualizado el registro, para continuar dar un toque en <a class="btn cl-white bg-blue px-3"> Aceptar</a> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_12.png"
  alt:"AMovil - Mensaje Alerta Actualizar Activos"
%}

### Multimedia en Activos

Para ingresar a **Multimedia** de Activos, ingrese al Detalle del registro en cuestión; nótese que en la parte superior derecha se encuentra el siguiente ícono <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>, el cual muestra las siguientes dos opciones:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_13.png"
  alt:"AMovil - Ir a Multimedia"
%}

Para añadir multimedia o descargar los archivos existentes dar un toque en <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-paperclip"></span></a>. Éste muestra la información general del Activo y tres carpetas disponibles: 
- <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Documentos</a>
-  <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-image-outline"></span> Imagenes</a>
- <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-video-outline"></span> Videos</a>

Como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_14.png"
  alt:"AMovil - Multimedia"
%}

A continuación se ilustra un ejemplo para subir Documentos, el cual es el mismo para Imágenes o Videos:

Para agregar o consultar documentos dar un toque en la respectiva carpeta <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Documentos</a>.

En caso caso de tener documentos añadidos desde **AM**, es  posible visualizarlos a través del botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-black bg-white" data-icon="mdi-download"></span></a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_15.png"
  alt:"AMovil - Guardar Multimedia"
%}

Para subir un nuevo archivo, continúe dando un toque sobre <a class="btn cl-white bg-blue px-4">Subir archivo</a>, éste abre el explorador de archivos de su dispositivo móvil. Una vez seleccione el archivo, se visualiza el nombre del documento debajo del botón <a class="btn cl-white bg-blue px-4">Guardar</a>, como se indica en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_16.png"
  alt:"AMovil - Guardar Multimedia"
%}

Finalice dando un toque en el botón <a class="btn cl-white bg-blue px-4">Guardar</a>.
Cuando se cargue el archivo, el aplicativo  muestra un mensaje de guardado exitoso, así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_17.png"
  alt:"AMovil - Mensaje Alerta Guardar Multimedia"
%}

Los archivos añadidos se guardan en el orden del mas reciente al mas antiguo como se indica en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_18.png"
  alt:"AMovil - Visualización Multimedia"
%}

### Subgrupo Activos

Se usa para realizar búsquedas de Activos que cumplen con un conjunto de filtros o criterios. 

Para ingresar a esta opción se debe dar un toque al icono de Subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> ubicado en la parte inferior derecha de la pantalla, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_19.png"
  alt:"AMovil - Ir a Subgrupo"
%}

Esto lleva a la siguiente ventana, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_20.png"
  alt:"AMovil - Seleccionar un filtro Subgrupo"
%}

Se debe dar un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-5"> Seleccione un filtro </a> para visualizar los siguientes criterios de búsqueda:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_21.png"
  alt:"AMovil - Subgrupo Criterios de Búsqueda"
%}

 - Código AC
 - Descripción
 - Activo Fijo
 - Serial
 - Referencia 
 - Alias
 - Tipo
 - Responsable
 - Centro de Costo
 - Ubicación Física

De la imagen anterior, los botones ubicados en la parte inferior  <a class="btn cl-white bg-blue px-3"> Limpiar</a> y <a class="btn cl-white bg-blue px-3"> Aceptar </a> son para limpiar el campo y hacer una nueva búsqueda. 

A continuación se muestra un ejemplo con el criterio **Código AC**: 

Una vez que se haya elegido el criterio de búsqueda, se muestran los siguientes campos a diligenciar:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_22.png"
  alt:"AMovil - Subgrupo Código AC"
%}

Finalice dando un toque en <a class="btn cl-white bg-blue px-3"> Aceptar </a> una vez que haya ingresado información al campo, a continuación se muestra el resultado de la búsqueda para el código **COA**. El botón <a class="btn cl-black bg-white px-5">11</a> ubicado en la parte superior derecha de la ventana es la cantidad de resultados obtenidos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_23.png"
  alt:"AMovil - Subgrupo Resultado"
%}

El Subgrupo se conserva hasta que el usuario reestablezca los valores por defecto, para reestablecerlo o para hacer otras búsquedas dar un toque nuevamente en el botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> en el cual se muestran las últimas búsquedas realizadas.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_24.png"
  alt:"AMovil - Subgrupo Búsquedas recientes"
%}

Para eliminar el historial completo de búsquedas dar un toque en el botón <a class="btn cl-white bg-blue px-3"> Limpiar </a> y luego en <a class="btn cl-white bg-blue px-3"> Aceptar </a> para volver a los valores por defecto o puede removerlos uno por uno a través del botón <a class="fab cl-white box-shadow"><span class="iconify icon cl-red bg-white" data-icon="mdi-delete-outline"></span></a>.

## Crear un Activo 

AMovil permite crear un registro de Activo, siempre que el usuario logueado cuente con los permisos desde AM para ello. 

Para Crear un Activo dar un toque en el botón del submenu de Activos <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-plus-outline"></span> Crear Activo </a> ,  el cual abre el siguiente formulario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_25.png"
  alt:"AMovil - Crear Activo Formulario"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_26.png"
  alt:"AMovil - Crear Activo Formulario"
%}

Los campos con un asterisco (*) al inicio, indican que son campos obligantes. A continuación se da una breve explicación de los campos:

**Código:** En este campo se registra el código del Activo, correspondiente al código de Mantenimiento, de acuerdo a la estructuración organizacional. 

**Descripción:** Se utiliza para el nombre del Activo.

**Activo fijo:** Es el Código Contable del Activo, según Contabilidad. 

**Serial:** Este campo se utiliza para registrar el número de serie que identifica individualmente a un Activo según el fabricante.

**Referencia:** Conocido en **AM** como la referencia externa del Proveedor. Se indica el código con el cual el Proveedor identifica el Activo.

**Alias:** Este campo es el especial para registrar un nombre especial. Igualmente se puede utilizar para registrar códigos antiguos con que se definían este Activo antes de la nueva codificación

**Código de barras:**  Este campo pertenece al Código de Barras Interno del Activo, en caso que exista alguno dentro de la organización.

**Marca:**  Este campo se utiliza para diligenciar la Marca que identifica el Activo.

**Modelo:** Este campo se utiliza para diligenciar el Modelo que identifica un Activo/Equipo según el fabricante

**Tipo:** Es una característica particular del un Activo según su uso o el fabricante.

**Responsable:**  Persona propia de la organización encargada de la operación o funcionamiento del Activo. En este campo se traen automáticamente los diferentes Terceros asignados como Responsable Interno/Empleado y Responsable Externo/Contratista.

**Centro de Costo:** En este campo se registra el Centro de Costo al que está asociado el Activo. 

**Ubicación física:** En este campo se traen automáticamente las Ubicaciones Físicas definidas en la infraestructura, para definir la ubicación geográfica del Activo en la planta.

**Estado:** El campo estado se utiliza para definir si el Activo actual se encuentra Activo (Operativo) o Inactivo (No operativo o dado de baja temporal o totalmente). 

Para insertar el registro dar un clic en el botón <a class="btn cl-white bg-blue px-3"> Guardar </a>. 

El aplicativo muestra un mensaje alerta confirmado el ingreso del registro, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_27.png"
  alt:"AMovil - Crear Activo Mensaje Aviso"
%}

## Actualizar Contadores 

Para actualizar contadores se debe dar un toque en el submmenú de Activos, y dar un toque en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-clock-outline"></span> Actualizar contadores </a>. 

Cabe destacar que la configuración de los mismos se hace inicialmente desde **AM**.

A continuación se muestra el listado de los Activos que tienen asociado un contador <a class="btn cl-black bg-white px-5">26</a> : 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_28.png"
  alt:"AMovil - Ir a Actualizar Contadores"
%}

De la imagen anterior se indica lo siguiente: 

Los Activos sombreados de color azul son Activos definidos como **"Padres"** o son unidades funcionales, mientras que los sombreados en amarillo son los que se definieron como **"Hijos"** o componentes del Activo Padre pero que no poseen el mismo valor o contador que su Activo Padre.
Los Activos sombreados en gris indican que son **"Hijos"** y además, poseen la característica de tener el mismo valor y contador que su Activo Padre. 

En esta sección también es posible hacer un subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> para actualizar el contador de un grupo de Activos , a continuación se muestra un ejemplo: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_29.png"
  alt:"AMovil - Actualizar Contadores"
%}

En la imagen anterior, se visualiza un Activo padre y un Activo hijo que no posee el mismo valor de contador; al presentarse esta diferencia se debe <a class="btn cl-black bg-blue-25 bd-blue px-6">Actualizar</a> el valor de cada uno.

En este ejemplo se muestra el detalle del Activo Padre:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_30.png"
  alt:"AMovil - Detalle Actualizar Contadores"
%}

Se digita el nuevo valor de medición del contador y finalmente se da un toque en el botón <a class="btn cl-white bg-blue px-3"> Guardar </a>, el aplicativo muestra un mensaje alerta confirmando los cambios realizados.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_31.png"
  alt:"AMovil - Mensaje Alerta Actualizar Contadores"
%}

Cuando se detecta un valor inferior al valor actual del contador del Activo, el aplicativo muestra un mensaje alerta y se deberá revisar nuevamente el valor ingresado:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_32.png"
  alt:"AMovil - Mensaje Alerta Actualizar Contadores"
%}

> **Nota:** los Activos hijos sombreados en gris se actualizan automáticamente una vez se actualice el contador del Activo Padre.

## Inventario Físico 

Para llevar a cabo esta transacción se debe dar un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-6"><span class="iconify cl-black" data-icon="mdi-format-list-bulleted-square"></span> Inventario físico </a> ubicado en el submenú de Activos, el cual muestra el siguiente submenú:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_33.png"
  alt:"AMovil - Ir a Inventario físico"
%}

Cada una de las opciones anteriores, son criterios por los cuales es posible ejecutar la transacción. Siendo los mas comunes Centro de Costo y Ubicación Física. El objetivo es hacer el conteo de los Activos inventariados y no inventariados. 

El criterio <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-text-search"></span> Otro</a>  despliega un conjunto de otras opciones para realizar el inventario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_34.png"
  alt:"AMovil - Ir a Inventario físico Otro"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_35.png"
  alt:"AMovil - Ir a Inventario físico Otro"
%}

Al elegir una de las opciones mostradas anteriormente el aplicativo muestra un mensaje de advertencia, que consiste en recordar que cada uno de los Activos debe tener un código de barras o un código QR o bien un código alfanumérico. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_36.png"
  alt:"AMovil - Ir a Inventario físico Ubicación Física"
%}

Se ilustra un ejemplo usando el criterio **Ubicación Física.** Se muestran todas las ubicaciones de la base de datos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_37.png"
  alt:"AMovil - Inventario físico Ubicación Física"
%}

Sin embargo, para facilitar la búsqueda use el botón <a class="btn cl-black bg-white bd-yellow btn-rounded"><span class="mdi mdi-magnify pr-3"></span><span class="pr-4">Buscar una Ubicación física</span></a> y digite una parte del nombre de la ubicación física:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_38.png"
  alt:"AMovil - Inventario físico Buscar Ubicación Física"
%}

Seleccione la ubicación física de interés, a continuación se visualiza la pantalla para comenzar el inventario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_39.png"
  alt:"AMovil - Inventario físico Buscar Iniciar Inventario"
%}

A continuación se indica el significado del color de los indicadores:

<span class="iconify cl-blue bd-blue bg-blue btn-rounded" data-icon="mdi-circle"></span> : Este indicador muestra el total de activos que hay en la ubicación seleccionada o acorde al criterio de selección.

<span class="iconify cl-green bd-green bg-green btn-rounded" data-icon="mdi-circle"></span> : Este indicador muestra el total de activos que han sido encontrados en el transcurso del inventario físico.

<span class="iconify cl-red bd-red bg-red btn-rounded" data-icon="mdi-circle"></span> : Este indicador muestra el total de activos que aún no han sido encontrados en el transcurso del inventario físico.

<span class="iconify cl-yellow bd-yellow bg-yellow btn-rounded" data-icon="mdi-circle"></span> : Este indicador muestra el total de activos que han sido encontrados pero que no pertenecen a la ubicación seleccionada.

<span class="iconify cl-lime bd-lime bg-lime btn-rounded" data-icon="mdi-circle"></span>: Este indicador muestra el total de activos que no han sido registrados en el sistema.

Para comenzar dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Iniciar inventario</a>.

A continuación se ilustra un ejemplo con el criterio Ubicación Física: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_40.png"
  alt:"AMovil - Inventario físico Detalle"
%}

Si se da un toque sobre cualquiera de los indicadores de colores ubicados en la parte superior se muestra un mensaje corto que explica su función en la parte inferior derecha:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_41.png"
  alt:"AMovil - Inventario físico Mensaje Indicador"
%}

El botón <a class="btn cl-white bg-blue px-6">Agregar comentario</a>  permite ingresar un comentario antes, durante y después del inventario.

Para comenzar se sugiere escanear el código QR de los Activos, con el fin de agilizar el proceso <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-scan-helper"></span></a>. En caso de no contar éste,  se encuentra la opción manual <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-square-edit-outline"></span></a> de ingresar el código alfanumérico del Activo que corresponde al código principal en **AM**.

> **Nota:** Para que la lectura del código QR sea satisfactoria; en **AM** los Activos deben tenerlo registrado en el campo **Código de Barras Interno**.

Una vez se haga lectura del código QR, se muestra un mensaje en la parte inferior:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_42.png"
  alt:"AMovil - Inventario físico Lectura Código QR"
%}

> **Nota:** El inventario puede continuar su curso siempre y cuando el usuario no escoja la opción  <a class="btn cl-white bg-red 25 px-6">Finalizar inventario</a>


Para continuar el inventario dar un toque en <a class="btn cl-white bg-green 25 px-6">Continuar inventario</a>, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_43.png"
  alt:"AMovil - Inventario físico Continuar Inventario"
%}

El aplicativo actualiza lo que lleva del proceso:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_44.png"
  alt:"AMovil - Inventario físico Continuar Inventario"
%}

Se ilustra dentro del mismo ejemplo de inventario el registro de un Activo con la opción manual <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-square-edit-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_45.png"
  alt:"AMovil - Inventario físico Continuar Inventario"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_46.png"
  alt:"AMovil - Inventario físico Continuar Inventario"
%}

Se muestra un mensaje exitoso en la parte inferior confirmando el registro del Activo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_47.png"
  alt:"AMovil - Inventario físico Continuar Inventario"
%}

Al dar un toque en el botón <a class="btn cl-white bg-red 25 px-6">Finalizar inventario</a> se muestra el resultado con la explicación de los indicadores y el detalle de cada Activo con su respectivo indicador como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_48.png"
  alt:"AMovil - Resumen Inventario"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_49.png"
  alt:"AMovil - Resumen Inventario"
%}