---
title: Ordenes
subtitle: Explicación del módulo del módulo de Órdenes, creación, consulta, cierre y registro de firmas
tags: [AMovil]
author: win
order: '16_05'
media: "../../assets/images/docs/"
---
Para ir a Órdenes dar un toque sobre el botón <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-text-box-outline"></span> Órdenes</a> en el menú principal:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_130.png"
  alt:"AMovil - Ir a Ordenes"
%}

En el siguiente submenú se muestran las siguientes opciones según los permisos de usuario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_131.png"
  alt:"AMovil - Ordenes Submenú"
%}

## Consultar Órdenes

Para consulta y seguimiento de las Órdenes de Trabajo dirigirse al botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Órdenes </a>, el cual conlleva al total de las Órdenes:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_132.png"
  alt:"AMovil - Consulta Ordenes"
%}

Para ir al detalle del registro dar un toque en el botón  <a class="btn cl-black bg-mint bd-mint px-6">Detalle</a> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_133.png"
  alt:"AMovil - Ordenes Detalle"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_134.png"
  alt:"AMovil - Órdenes Detalle"
%}

Para guardar los cambios en alguno de los campos de la Orden dar un toque en el botón <a class="btn cl-white bg-blue px-6">Actualizar</a>. Se muestra un mensaje alerta confirmando los cambios:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_135.png"
  alt:"AMovil - Ordenes Actualizar Detalle"
%}

Para continuar dar un toque en <a class="btn cl-white bg-blue px-6">Aceptar</a>. 

Para ingresar al submenú dentro del Detalle de la Orden diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>. Se muestran las siguientes opciones relacionadas a la gestión y cierre de Órdenes:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_136.png"
  alt:"AMovil - Ir a Submenú Gestión/Cierre Ordenes"
%}

### Actualizar tiempos

Para ingresar los tiempos de ejecución de la Orden diríjase al <a class="btn cl-black bg-mint bd-mint px-6">Detalle</a>  de la Orden de Trabajo y luego al botón 
<a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> luego a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-update"></span></a>. Se muestra el detalle de la Orden en cuestión, aquellas con estado **En análisis** deben tener previamente la **Fecha y hora de Atención**, se muestra un ejemplo a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_137.png"
  alt:"AMovil - Ordenes Actualizar tiempos"
%}

En el detalle de la Orden dar un toque en el botón <a class="btn cl-white bg-green px-6">Ingresar FF/HH de atención </a> para ingresar automáticamente la fecha y hora:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_138.png"
  alt:"AMovil - Ordenes FFHH Atención"
%}

Luego de registrar la **FF/HH atención**, se  habilitan las opciones:

- <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="mdi mdi-circle cl-gray pr-1"></span> Registro manual de tiempos</a>

- <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="mdi mdi-circle cl-gray pr-1"></span> Registro automático de tiempos</a>

> **Nota:** para ingresar los tiempos en una Orden sólo se puede escoger una de los opciones anteriores.

La primera consiste en ingresar las fechas y horas de ejecución de forma manual en cada campo y hacer también correcciones sobre el tiempo de duración:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_139.png"
  alt:"AMovil - Ordenes Registro Manual de Tiempos"
%}

Para asentar los cambios dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar</a> donde se confirma la actualización y para continuar dar un toque en <a class="btn cl-white bg-blue px-6"> Aceptar</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_140.png"
  alt:"AMovil - Ordenes Mensaje Alerta"
%}

La segunda opción, es para ingresar automáticamente los tiempos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_141.png"
  alt:"AMovil - Ordenes Ingreso Tiempos Automático"
%}

Para dar inicio dar un toque en el botón  
<a class="btn cl-white bg-green px-6"> Iniciar</a>, esto hará que la FF/Inicio (Fecha Inicio de Trabajos) se ingrese automáticamente. En la siguiente imagen se muestra el ingreso automático y los botones <a class="btn cl-white bg-green px-6"> Pausar </a> para el manejo del tiempo de duración y <a class="btn cl-white bg-red px-6"> Finalizar</a> para ingresar la FF/Fin (Fecha Fin de Trabajos). 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_142.png"
  alt:"AMovil - Ordenes Ingreso Automático de Tiempos"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_143.png"
  alt:"AMovil - Ordenes Ingreso Automático de Tiempos"
%}

En caso de <a class="btn cl-white bg-green px-6"> Pausar </a> la ejecución de trabajos se prosigue con el botón <a class="btn cl-white bg-green px-6"> Continuar </a>, a la vez que su transcurso calcula el Tiempo de Duración (ttr) y Tiempo Improductivo (para las órdenes que aplique):

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_144.png"
  alt:"AMovil - Ordenes Ingreso Automático de Tiempos"
%}

Y, al <a class="btn cl-white bg-red px-6"> Finalizar</a> la ejecución, se muestra el resumen de tiempos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_145.png"
  alt:"AMovil - Ordenes Ingreso Automático de Tiempos"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_146.png"
  alt:"AMovil - Ordenes Ingreso Automático de Tiempos"
%}

### Adicionar mano obra interna

Para ingresar al personal técnico interno que participó en la ejecución de la Orden, ingrese al <a class="btn cl-black bg-mint bd-mint px-6">Detalle</a> de la Orden de Trabajo en cuestión, seguidamente al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego en <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-account-plus-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_147.png"
  alt:"AMovil - Ir a Ordenes Ingreso Mano Obra Interna"
%}

Al ingresar se muestra la siguiente ventana:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_148.png"
  alt:"AMovil - Ordenes Ingreso Mano Obra Interna"
%}

Continúe dando un toque en el botón <a class="btn cl-white bg-blue px-6"> Adicionar Mano Obra Interna </a> e ingrese los datos solicitados en el siguiente formulario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_149.png"
  alt:"AMovil - Órdenes Ingreso Mano Obra Interna"
%}

Guarde los cambios con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>, donde se muestra un mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_150.png"
  alt:"AMovil - Ordenes Mensaje Alerta"
%}

Continúe con el botón <a class="btn cl-white bg-blue px-6"> Aceptar </a> donde se muestra un mensaje alerta de la mano de obra ingresada exitosamente:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_151.png"
  alt:"AMovil - Ordenes Mensaje Alerta"
%}

Una vez guardados los cambios, se muestra el detalle del personal técnico ingresado:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_152.png"
  alt:"AMovil - Ordenes Detalle Mano Obra Interna"
%}

En caso de ingresar mas personal interno, repita los pasos anteriores. 

### Comentarios

Para ingresar los comentarios o detalles de la ejecución ingrese al <a class="btn cl-black bg-mint bd-mint px-6">Detalle</a> de la OT en cuestión, seguidamente al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-wechat"></span></a> como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_153.png"
  alt:"AMovil - Ir a Ordenes Comentarios"
%}

A continuación se muestra el resumen de la Orden. Ingrese los detalles en el campo **Comentario**:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_154.png"
  alt:"AMovil - Ordenes Comentarios"
%}

Para guardar el comentario dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Se muestra un mensaje alerta y para finalizar dar un toque en 
<a class="btn cl-white bg-blue px-6"> 
Aceptar </a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_155.png"
  alt:"AMovil - Solicitudes Mensaje Alerta Comentarios"
%}

Una vez se guarden los comentarios, se muestra el detalle en la parte inferior del usuario que registró el comentario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_156.png"
  alt:"AMovil - Ordenes Detalle Comentarios"
%}

Para ingresar mas comentarios repita los pasos anteriores.

### Multimedia 

Para ingresar documentos, imágenes o videos a la OT diríjase al detalle del registro <a class="btn cl-black bg-mint bd-mint px-6">Detalle</a> luego al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego ir a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-paperclip"></span></a> como se indica a continuación: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_157.png"
  alt:"AMovil - Órdenes Ir a Multimedia"
%}

A continuación se muestra un resumen de la OT con las siguientes tres carpetas:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_158.png"
  alt:"AMovil - Órdenes Ir a Multimedia"
%}

Cada una de las carpetas indican los tipos archivos permitidos en cada una. Una vez ingresada  a la carpeta, es posible devolverse con el botón <a class="btn cl-black bg-white pl-6 pr-6 bd-gray"><span class="iconify cl-black fs-2 pr-" data-icon="mdi-arrow-left-thick"></span> Atras</a>. Para cargar el archivo dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Subir archivo </a>, esto abre el explorador de archivos del teléfono móvil o estación donde se ejecute el proceso. Se ilustra un ejemplo añadiendo imágenes correspondientes a la OT:   

> **Nota:** Solo se permiten para las imágenes formatos jpg o png. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_159.png"
  alt:"AMovil - Órdenes Multimedia"
%}

Una vez se elija el archivo se muestra en la parte inferior su nombre, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_160.png"
  alt:"AMovil - Órdenes Multimedia"
%}

Para continuar, dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_161.png"
  alt:"AMovil - Órdenes Mensaje Alerta Multimedia"
%}

Para finalizar dar un toque en <a class="btn cl-white bg-blue px-6"> Aceptar </a>. Diríjase al botón <a class="btn cl-black bg-white pl-6 pr-6 bd-gray"><span class="iconify cl-black fs-2 pr-" data-icon=" mdi-arrow-left-thick"></span> Atrás</a> para continuar agregando multimedia.

Una vez el registro tenga multimedia, se agrega un indicador de color naranja <span class="iconify cl-orange bd-orange bg-orange btn-rounded" data-icon="mdi-circle"></span>, así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_162.png"
  alt:"AMovil - Órdenes Indicador Multimedia"
%}

Una vez se suba el archivo se visualiza su información de nombre y fecha del mismo, para adjuntar mas multimedia repita el proceso anterior.

### Cerrar Orden

Para cerrar la Orden de Trabajo se requiere que tenga los tiempos de ejecución  previamente diligenciados para cambiar el estado a **Cerrada Parcial** o **Cerrada Ejecutada**, luego, ingresar la Causa de Falla para TM (Tipo de Mantenimiento) **Correctivo** y luego de guardar los cambios, finalizar ingresando la firma del Responsable.

Cuando se tengan los tiempos diligenciados, diríjase al botón <span class="iconify icon cl-white bg-blue" data-icon=mdi-dots-vertical></span></a> y luego a Cerrar Solicitud  <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-check-circle"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_163.png"
  alt:"AMovil - Órdenes Ir a Cerrar Orden"
%}

A continuación se muestra el detalle del Cierre de la OT. Además, es posible que el técnico ejecutor indique si el Activo se entrega limpio.  

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_164.png"
  alt:"AMovil - Órdenes Detalle Cierre"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_165.png"
  alt:"AMovil - Órdenes Detalle Cierre"
%}

Para ingresar la firma, se requiere que la OT tenga el estado **Cerrada Ejecutada** ó **Cerrada Parcial**. Este estado depende de la parametrización en **AM** para cerrar en AMovil.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_166.png"
  alt:"AMovil - Órdenes Cambiar Estado"
%}

Continúe asignando una causa de falla si es el caso. Se muestran las opciones de **Causa de Falla** (Aplicable a Órdenes Correctivas). Se despliegan las Causas de Falla según la respectiva tabla de Infraestructura en **AM**:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_167.png"
  alt:"AMovil - Órdenes Causa de Falla"
%}

Una vez diligencie el formulario del Cierre de la OT, se deben <a class="btn cl-white bg-blue px-6"> Guardar </a> los cambios.

Continúe indicando si el Activo se entrega limpio: No/Si:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_168.png"
  alt:"AMovil - Órdenes Se entrega limpio"
%}

Para continuar dar un toque en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma del encargado/Ejecutor</a>. Continúe ingresando la firma en el siguiente espacio:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_169.png"
  alt:"AMovil - Órdenes Ingresar Firma Encargado/Ejecutor"
%}

Se puede rehacer la firma con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentar la firma con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a> y también es posible <a class="btn cl-black bg-white bd-blue px-6"> Visualizar firma </a>, como se muestra en el siguiente ejemplo: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_170.png"
  alt:"AMovil - Órdenes Visualizar firma"
%}

Una vez se guarde la firma, se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_171.png"
  alt:"AMovil - Órdenes Cierre Mensaje Alerta"
%}

Los registros que tengan la firma del Responsable Ejecutor se indican a través de un color gris <span class="iconify cl-gray bd-gray bg-gray btn-rounded" data-icon="mdi-circle"></span>, como se muestra en el siguiente ejemplo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_172.png"
  alt:"AMovil - Órdenes Indicador Firma"
%}

### Evaluación 

Para evaluar el servicio al Responsable Ejecutor se debe ir al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego a Evaluación <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-format-list-checks"></span></a>

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_173.png"
  alt:"AMovil - Órdenes Ir a Evaluación"
%}

A continuación marque su respuesta en cada pregunta, siendo:

- E: Excelente
- B: Bueno
- A: Aceptable
- D: Deficiente
- M: Malo

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_174.png"
  alt:"AMovil - Órdenes Evaluación"
%}

Continúe con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Luego de actualizarse se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_175.png"
  alt:"AMovil - Órdenes Registro Evaluación"
%}

Una vez guardados los cambios, en la parte inferior se habilita el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma de quien recibe/Evalúa</a> con el fin de registrar la firma del Solicitante ó persona que recibe el servicio:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_176.png"
  alt:"AMovil - Órdenes Ir a Firma Recibido Satisfacción"
%}

Al ingresar a la opción se muestra una ventana detalle ingreso de la firma del Solicitante:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_177.png"
  alt:"AMovil - Órdenes Detalle Firma Recibido Satisfacción"
%}

Continúe ingresando registrando la firma, a continuación se muestra una ejemplo gráfico:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_178.png"
  alt:"AMovil - Órdenes Firma Recibido Satisfacción"
%}

Para guardar la firma, continúe con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. De lo contrario, puede rehacer la firma con el botón  <a class="btn cl-white bg-blue px-6"> Limpiar </a>.

Una vez se guarde la firma, el aplicativo muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_179.png"
  alt:"AMovil - Órdenes Mensaje Alerta Firma Recibido Satisfacción"
%}

Para verificar el registro de la firma, ingrese nuevamente en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma de quien recibe/Evalúa</a> y en el detalle del ingreso de la firma continúe a la opción <a class="btn cl-w black bd-blue bg-white px-6"> Visualizar Firma </a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_180.png"
  alt:"AMovil - Órdenes Visualizar Firma Recibido Satisfacción"
%}

También, es posible saber que un registro posee la firma del Solicitante o de la persona que recibió a satisfacción a través del indicador blanco <span class="iconify cl-white bd-black btn-rounded" data-icon="mdi-circle"></span> así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_181.png"
  alt:"AMovil - Órdenes Indicador Firma Recibido Satisfacción"
%}

### Firma Masiva

Esta opción se sugiere cuando un técnico responsable requiere registrar la firma tanto de él como de la persona que recibe de forma masiva  para un subgrupo de Órdenes.

Es de considerar que para ejecutar esta transacción las OT requieren tener diligenciados los tiempos de ejecución y deben estar cerradas. 

> **Nota:** Desde **AM** se puede parametrizar el **Permitir Firma de Recibido sin Evaluación en AMovil**.

El objetivo ingresar la firma del Responsable Ejecutor Responsable y también de la persona que recibe a satisfacción. Para ello se sugiere usar la función **Subgrupo**. A continuación se muestra un ejemplo del paso a paso:

Una vez ingrese a la opción <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Ordenes </a> diríjase a la opción Subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> mostrado a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_182.png"
  alt:"AMovil - Consulta Órdenes"
%}

Haga la búsqueda por medio de los siguientes filtros en la opción <a class="btn cl-black bg-white bd-gray px-5"></span>Seleccione un filtro</a>, se muestran las siguientes opciones:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_183.png"
  alt:"AMovil - Subgrupo Órdenes"
%}

Para el ejemplo se usa el filtro **Responsable**, esta opción lista todos los Responsables ejecutores de la tabla de Terceros en **AM**, además, puede facilitar la búsqueda con el botón <a class="btn cl-black bg-white bd-yellow btn-rounded"><span class="mdi mdi-magnify pr-3"></span><span class="pr-4">Buscar un Responsable </span></a> e introducir una parte del nombre. Una vez lo seleccione se muestra el campo diligenciado, como se indica a continuación:  

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_184.png"
  alt:"AMovil - Subgrupo Órdenes"
%}

Continúe con el botón <a class="btn cl-white bg-blue px-6"> Aceptar</a> ubicado en la parte inferior.

Luego, visualice el resultado del Subgrupo en la parte superior a través del botón <a class="btn cl-black bg-white px-5">7</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_185.png"
  alt:"AMovil - Subgrupo Órdenes"
%}

Diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_186.png"
  alt:"AMovil - Ir a Firma Masiva"
%}

Seguidamente elija la opción **Firma Masiva De Quien Recibe**
<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-file-edit-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_187.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Para ingresar la firma, primero registre el nombre de quien recibe o evalúa en el primer recuadro de la parte superior, continúe dibujando la firma en el siguiente recuadro. Puede rehacerla con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentarla con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_188.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Al guardar la firma se muestra un mensaje alerta exitoso de ingreso. Continúe dando un toque al botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_189.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Al finalizar los registros quedan con el indicador blanco:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_190.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_191.png"
  alt:"AMovil - Ir a Firma Encargado Orden"
%}

Seguidamente elija la opción **Firma Masiva Del Técnico Responsable** <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-file-edit-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_192.png"
  alt:"AMovil - Ir a Firma Encargado Orden"
%}

Continúe dibujando la firma en el siguiente recuadro. Puede rehacerla con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentarla con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_193.png"
  alt:"AMovil - Firma Masiva Encargado Orden"
%}

Al guardar la firma se muestra un mensaje alerta exitoso de ingreso. Continúe dando un toque al botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_194.png"
  alt:"AMovil - Firma Masiva Mensaje Alerta"
%}

Al finalizar los registros quedan con el indicador gris <span class="iconify cl-gray bd-gray bg-gray btn-rounded" data-icon="mdi-circle"></span>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_195.png"
  alt:"AMovil - Firma Masiva Encargado Orden Indicador"
%}

## Crear Orden

Para crear un nuevo registro diríjase al botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-plus-outline"></span> Crear Orden </a>, el cual conlleva al siguiente formulario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_196.png"
  alt:"AMovil - Submenú Ir a Crear Orden"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_197.png"
  alt:"AMovil - Formulario Crear Órden"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_198.png"
  alt:"AMovil - Formulario Crear Órden"
%}

Todos los campos son obligatorios, se debe contar con los permisos para visualizar la Orden creada. 

A continuación se da una breve explicación de cada campo:

**Descripción:**  Es un texto corto por medio del cual se indica la labor a realizar. Debe ser conciso y no dar lugar a ambigüedades.

**Solicitante:** Es la persona que solicita la labor a realizar, puede ser escrito manualmente o ser un RI(Un responsable interno que está registrado en la tabla de Infraestructura Terceros).

**Activo:** Es el objeto de mantenimiento.

**FF/HH Programada:** Es la fecha en la que se va a realizar la labor.

**Centro Responsable:** Es el grupo ejecutor de mantenimiento a cargo de la labor a realizar.

**Responsable:** Es la persona natural o jurídica principal a ejecutar la labor de mantenimiento.

**Centro de Costo:** Es el "responsable""  del pago de los consumos que dicha OT genere. Inicialmente, se sugiere el Centro de Costo que tiene asociado al Activo Objeto de Mantenimiento, aun así, puede cambiarse.

**Tipo de Trabajo:** Indica los Tipos de Trabajo que se realizan en la OT. Es posible definir más de un Tipo de Trabajo para una OT.

**Tipo de mantenimiento:** Este campo indica el Tipo de Mantenimiento a realizar en la OT. Toda OT debe poseer uno. Si en la OT se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige Otro” y a continuación, en el tipo de “Actividad” se especifica detalladamente, el tipo de labor.

**Tipo de actividad:** Aquí se establece el Tipo de Actividad a realizar en la OT. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de “Otro”, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

**Prioridad:** Es la prioridad que tiene la OT. Las opciones van de la 1 hasta la 7, teniendo en cuenta que las prioridades mas altas son la 1 y 2.

**Estado:** Por defecto una OT debe tener el estado por defecto de "En ejecución". Sin embargo, según cada organización esto es parametrizable.


Una vez diligenciado completamente el formulario continue con el botón <a class="btn cl-white bg-blue px-6"> Guardar</a>, el aplicativo muestra el siguiente mensaje alerta y continue con el botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_199.png"
  alt:"AMovil - Crear Orden Mensaje Alerta"
%}

Para visualizar la OT creada no debe tener subgrupos activos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_200.png"
  alt:"AMovil - Crear Orden"
%}