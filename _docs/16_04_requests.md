---
title: Solicitudes 
subtitle: Explicación del módulo del módulo de Solicitudes, creación, consulta, cierre y registro de firmas
tags: [AMovil]
author: win
order: '16_04'
media: "../../assets/images/docs/"
---
Para ir a Solicitudes de Servicio dar un toque sobre el botón <a class="btn cl-black bg-white pl-2 pr-3 bd-blue"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-card-text-outline"></span> Solicitudes</a> en el menú principal:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_68.png"
  alt:"AMovil - Ir a Solicitudes"
%}

En el siguiente submenú se muestran las siguientes opciones según los permisos de usuario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_69.png"
  alt:"AMovil - Solicitudes Submenú"
%}

## Consultar Solicitudes

Para consulta y seguimiento de las Solicitudes de Servicio dirigirse al botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Solicitudes</a>, el cual conlleva al total de las Solicitudes:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_70.png"
  alt:"AMovil - Solicitudes"
%}

Para ir al detalle del registro dar un toque en el botón  <a class="btn cl-black bg-yellow-light bd-yellow px-6"> Detalle</a> como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_71.png"
  alt:"AMovil - Solicitudes Detalle"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_72.png"
  alt:"AMovil - Solicitudes Detalle"
%}

Para guardar los cambios en alguno de los campos de la Solicitud dar un toque en el botón <a class="btn cl-white bg-blue px-6">Actualizar</a>. Se muestra un mensaje alerta confirmando los cambios:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_73.png"
  alt:"AMovil - Solicitudes Actualizar Detalle"
%}

Para continuar dar un toque en <a class="btn cl-white bg-blue px-6">Aceptar</a>. 

Para ingresar al submenú del Detalle de la Solicitud diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>. Donde, se muestran las siguientes opciones relacionadas a la gestión y cierre de Solicitudes:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_74.png"
  alt:"AMovil - Ir a Submenú Gestión/Cierre Solicitudes"
%}

### Actualizar tiempos

Para ingresar los tiempos de ejecución de la Solicitud dirigirse al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego ingresar a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-update"></span></a>. Se muestra el detalle de la Solicitud en cuestión, aquellas con estado **En análisis** deben tener previamente la fecha y hora de Atención, se muestra un ejemplo a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_75.png"
  alt:"AMovil - Solicitudes Actualizar tiempos"
%}

En el detalle de la Solicitud dar un toque en el botón <a class="btn cl-white bg-green px-6">Ingresar FF/HH de atención </a> para ingresar automáticamente la fecha y hora:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_76.png"
  alt:"AMovil - Solicitudes FFHH Atención"
%}

Luego de registrar la **FF/HH atención**, se  habilitan las opciones:

- <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="mdi mdi-circle cl-gray pr-1"></span> Registro manual de tiempos</a>

 
- <a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="mdi mdi-circle cl-gray pr-1"></span> Registro automático de tiempos</a>

> **Nota:** para ingresar los tiempos en una Solicitud sólo se puede escoger una de los opciones anteriores.

La primera consiste en ingresar las fechas de ejecución de forma manual en cada campo y hacer correcciones sobre el tiempo de duración como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_77.png"
  alt:"AMovil - Solicitudes Registro Manual de Tiempos"
%}

Para asentar los cambios dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar</a> donde se confirma la actualización y para continuar dar un toque en <a class="btn cl-white bg-blue px-6"> Aceptar</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_78.png"
  alt:"AMovil - Solicitudes Mensaje Alerta"
%}

La segunda, es para ingresar automáticamente los tiempos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_79.png"
  alt:"AMovil - Solicitudes Ingreso Automático de Tiempos"
%}

Para dar inicio dar un toque en el botón  
<a class="btn cl-white bg-green px-6"> Iniciar</a>, esto hará que la FF/Inicio (Fecha Inicio de Trabajos) se ingrese automáticamente. En la siguiente imagen se muestra el ingreso automático y los botones <a class="btn cl-white bg-green px-6"> Pausar </a> para el manejo del tiempo de duración y <a class="btn cl-white bg-red px-6"> Finalizar</a> para ingresar la FF/Fin (Fecha Fin de Trabajos). 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_80.png"
  alt:"AMovil - Solicitudes Ingreso Automático de Tiempos"
%}

En caso de <a class="btn cl-white bg-green px-6"> Pausar </a> la ejecución de trabajos se prosigue con el botón <a class="btn cl-white bg-green px-6"> Continuar </a>  y al <a class="btn cl-white bg-red px-6"> Finalizar</a> la ejecución, se muestra el resumen de tiempos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_81.png"
  alt:"AMovil - Solicitudes Ingreso Automático de Tiempos"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_82.png"
  alt:"AMovil - Solicitudes Ingreso Automático de Tiempos"
%}

### Comentarios

Para ingresar los detalles de la ejecución o comentarios de la Solicitud dirigirse al botón  <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-wechat"></span></a> como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_83.png"
  alt:"AMovil - Solicitudes Ir a Comentarios"
%}

A continuación se muestra el resumen de la Solicitud, para guardar el comentario dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Se muestra un mensaje alerta y para finalizar dar un toque en 
<a class="btn cl-white bg-blue px-6"> 
Aceptar </a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_84.png"
  alt:"AMovil - Solicitudes Ingresar Comentarios"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_85.png"
  alt:"AMovil - Solicitudes Mensaje Alerta Comentarios"
%}

Una vez que se guarden los comentarios, se muestra el detalle en la parte inferior el usuario que registró el comentario así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_86.png"
  alt:"AMovil - Solicitudes Detalle Comentarios"
%}

### Multimedia 

Para ingresar documentos, imágenes o videos a la Solicitud dirigirse al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego ir a <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-paperclip"></span></a> como se indica a continuación: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_87.png"
  alt:"AMovil - Solicitudes Ir a Multimedia"
%}

A continuación se muestra un resumen de la Solicitud con las siguientes tres carpetas:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_88.png"
  alt:"AMovil - Solicitudes Multimedia"
%}

Cada una de las carpetas indican los tipos archivos permitidos en cada una. Una vez ingresada  a la carpeta, es posible devolverse con el botón <a class="btn cl-black bg-white pl-6 pr-6 bd-gray"><span class="iconify cl-black fs-2 pr-" data-icon="mdi-arrow-left-thick"></span> Atras</a>, para cargar el archivo dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Subir archivo </a>, esto abre el explorador de archivos del teléfono móvil o estación donde se ejecute el proceso. Se ilustra un ejemplo añadiendo imágenes correspondientes a la solicitud: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_89.png"
  alt:"AMovil - Solicitudes Multimedia"
%}

Una vez se elija el archivo, se muestra en la parte inferior su nombre, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_90.png"
  alt:"AMovil - Solicitudes Multimedia"
%}

Para continuar, dar un toque en el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_91.png"
  alt:"AMovil - Solicitudes Mensaje Alerta Multimedia"
%}

Para finalizar dar un toque en <a class="btn cl-white bg-blue px-6"> Aceptar </a>. Ir a <a class="btn cl-black bg-white pl-6 pr-6 bd-gray"><span class="iconify cl-black fs-2 pr-" data-icon=" mdi-arrow-left-thick"></span> Atrás</a> para continuar agregando multimedia.

Una vez el registro tenga multimedia, se agrega un indicador de color naranja <span class="iconify cl-orange bd-orange bg-orange btn-rounded" data-icon="mdi-circle"></span>, así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_92.png"
  alt:"AMovil - Solicitudes Indicador Multimedia"
%}

### Cerrar Solicitud

Para cerrar la Solicitud de Servicio se requiere que tenga los tiempos de ejecución  previamente diligenciados para cambiar el estado a **Cerrada Parcial** o **Cerrada Ejecutada**, luego, ingresar la Causa de Falla para TM (Tipo de Mantenimiento) **Correctivo** y luego de guardar los cambios, finalizar ingresando la firma del Responsable.

Cuando se tengan los tiempos diligenciados, diríjase al botón <span class="iconify icon cl-white bg-blue" data-icon=mdi-dots-vertical></span></a> y luego a Cerrar Solicitud  <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-check-circle"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_93.png"
  alt:"AMovil - Solicitudes Ir a Cerrar Solicitud"
%}

A continuación se muestra el detalle del Cierre de Solicitud. Además, es posible que el técnico ejecutor indique si el Activo se entrega limpio.  

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_94.png"
  alt:"AMovil - Solicitudes Detalle Cierre"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_95.png"
  alt:"AMovil - Solicitudes Detalle Cierre"
%}

Para ingresar la firma, se requiere que la Solicitud de Servicio tenga el estado **Cerrada Ejecutada** ó **Cerrada Parcial**. Este estado depende de la parametrización del cierre desde AMovil desde **AM**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_96.png"
  alt:"AMovil - Solicitudes Cambiar Estado"
%}

Continúe asignando una causa de falla si es el caso. Se muestran las opciones de **Causa de Falla** (Aplicable a Solicitudes Correctivas). Se despliegan las Causas de Falla según la respectiva tabla de Infraestructura en **AM**:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_97.png"
  alt:"AMovil - Solicitudes Causa de Falla"
%}

Una vez diligencie el formulario del Cierre de Solicitud, debe <a class="btn cl-white bg-blue px-6"> Guardar </a> los cambios.

Para continuar dar un toque en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma del encargado/Ejecutor</a>. Continúe ingresando la firma en el siguiente espacio:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_98.png"
  alt:"AMovil - Solicitudes Ingresar Firma"
%}

Se puede rehacer la firma con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentar la firma con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a> y también es posible <a class="btn cl-black bg-white bd-blue px-6"> Visualizar firma </a>, como se muestra en el siguiente ejemplo: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_99.png"
  alt:"AMovil - Solicitudes Visualizar firma"
%}

Una vez se guarde la firma, se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_100.png"
  alt:"AMovil - Solicitudes Cierre Mensaje Alerta"
%}

Los registros que tengan la firma del Responsable Ejecutor se indican a través de un color gris <span class="iconify cl-gray bd-gray bg-gray btn-rounded" data-icon="mdi-circle"></span>, como se muestra en el siguiente ejemplo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_101.png"
  alt:"AMovil - Solicitudes Indicador Firma"
%}

### Evaluación 

Para evaluar el servicio al Responsable Ejecutor se debe ir al botón <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a> y luego a Evaluación <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-format-list-checks"></span></a>

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_102.png"
  alt:"AMovil - Solicitudes Ir a Evaluación"
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
  filename:"16_103.png"
  alt:"AMovil - Solicitudes Evaluación"
%}

Continúe con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. Luego de actualizarse se muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_104.png"
  alt:"AMovil - Solicitudes Registro Evaluación"
%}

En la parte inferior se habilita el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma de quien recibe/Evalúa</a> con el fin de registrar la firma del Solicitante:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_105.png"
  alt:"AMovil - Solicitudes Ir a Firma Solicitante"
%}

Al ingresar a la opción se muestra una ventana detalle ingreso de la firma del Solicitante:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_106.png"
  alt:""AMovil - Solicitudes Detalle Firma Solicitante
%}

Continúe ingresando registrando la firma, a continuación se muestra una ejemplo gráfico:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_107.png"
  alt:"AMovil - Solicitudes Ejemplo Firma Solicitante"
%}

Para guardar la firma, continúe con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. De lo contrario, puede rehacer la firma con el botón  <a class="btn cl-white bg-blue px-6"> Limpiar </a>.

Una vez se guarde la firma, el aplicativo muestra el siguiente mensaje alerta:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_108.png"
  alt:"AMovil - Solicitudes Mensaje Alerta Firma Solicitante"
%}

Para verificar el registro de la firma, ingrese nuevamente en el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-outline"></span> Firma de quien recibe/Evalúa</a> y en el detalle del ingreso de la firma continúe a la opción <a class="btn cl-w black bd-blue bg-white px-6"> Visualizar Firma </a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_109.png"
  alt:"AMovil - Solicitudes Visualizar Firma Solicitante"
%}

También, es posible saber que un registro posee la firma del Solicitante, a través del indicador blanco <span class="iconify cl-white bd-black btn-rounded" data-icon="mdi-circle"></span> así:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_110.png"
  alt:"AMovil - Solicitudes Indicador Firma Solicitante"
%}

### Firma Masiva

Esta opción se sugiere cuando un técnico responsable requiere registrar la firma tanto de él como de la persona que recibe de forma masiva o para un subgrupo de Solicitudes.

Es de considerar que para ejecutar esta transacción las Solicitudes de Servicio requieren tener diligenciados los tiempos de ejecución y deben estar cerradas. 

Desde **AM** se puede parametrizar el **Permitir Firma de Recibido sin Evaluación en AMovil**.

Es posible hacer el ingreso de la firma del Responsable Ejecutor Responsable y también de la persona o solicitante que recibe. 

Para ello se sugiere usar la función **Subgrupo**. A continuación se muestra un ejemplo del paso a paso:

Una vez ingrese a la opción <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-magnify"></span> Consultar Solicitudes</a> diríjase a la opción Subgrupo <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a> mostrado a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_111.png"
  alt:"AMovil - Consulta Solicitudes"
%}

Haga la búsqueda por medio de los siguientes filtros en la opción <a class="btn cl-black bg-white bd-gray px-5"></span>Seleccione un filtro</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_112.png"
  alt:"AMovil - Subgrupo Solicitude"
%}

Para el ejemplo se usa el filtro **Responsable**, esta opción lista todos los Responsables ejecutores de la tabla de Terceros en **AM**, además, puede facilitar la búsqueda con el botón <a class="btn cl-black bg-white bd-yellow btn-rounded"><span class="mdi mdi-magnify pr-3"></span><span class="pr-4">Buscar un Responsable </span></a>
e introducir una parte del nombre, una vez lo seleccione se muestra el campo diligenciado, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_113.png"
  alt:"AMovil - Subgrupo Solicitudes"
%}

Continúe con el botón <a class="btn cl-white bg-blue px-6"> Aceptar</a> ubicado en la parte inferior. 

Luego, visualice el resultado del Subgrupo en la parte superior con el botón <a class="btn cl-black bg-white px-5">3</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_114.png"
  alt:"AMovil - Subgrupo Solicitudes"
%}

Diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_115.png"
  alt:"AMovil - Ir a Firma Masiva"
%}

Seguidamente elija la opción **Firma Masiva De Quien Recibe**
<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-file-edit-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_116.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Para ingresar la firma, primero ingrese el nombre de quien recibe o evalúa en el primer recuadro de la parte superior, continúe dibujando la firma en el siguiente recuadro. Puede rehacerla con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentarla con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_117.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Al guardar la firma se muestra un mensaje alerta exitoso de ingreso. Continúe dando un toque al botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_118.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Al finalizar los registros quedan con el indicador blanco:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_119.png"
  alt:"AMovil - Firma Masiva Recibido Satisfacción"
%}

Diríjase al botón ubicado en la parte superior derecha <a class="fab cl-white bg-blue box-shadow"><span class="iconify icon cl-white bg-blue" data-icon="mdi-dots-vertical"></span></a>: 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_120.png"
  alt:"AMovil - Ir a Firma Encargado Solicitud"
%}

Seguidamente elija la opción **Firma Masiva Del Técnico Responsable** <a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-file-edit-outline"></span></a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_121.png"
  alt:"AMovil - Ir a Firma Encargado Solicitud"
%}

Continúe dibujando la firma en el siguiente recuadro. Puede rehacerla con el botón <a class="btn cl-white bg-blue px-6"> Limpiar </a> o asentarla con el botón <a class="btn cl-white bg-blue px-6"> Guardar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_122.png"
  alt:"AMovil - Firma Masiva Encargado Solicitud"
%}

Al guardar la firma se muestra un mensaje alerta exitoso de ingreso. Continúe dando un toque al botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_123.png"
  alt:"AMovil - Firma Masiva Mensaje Alerta"
%}

Al finalizar los registros quedan con el indicador gris <span class="iconify cl-gray bd-gray bg-gray btn-rounded" data-icon="mdi-circle"></span>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_124.png"
  alt:"AMovil - Firma Masiva Encargado Solicitud Indicador"
%}

## Crear Solicitud

Para crear un nuevo registro diríjase al botón <a class="btn cl-black bg-white bd-gray px-4"><span class="iconify cl-black" data-icon="mdi-file-plus-outline"></span> Crear Solicitud</a> , el cual conlleva al siguiente formulario:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_125.png"
  alt:"AMovil - Submenú Ir a Crear Solicitud"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_126.png"
  alt:"AMovil - Formulario Solicitud"
%}

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_127.png"
  alt:"AMovil - Formulario Crear Solicitud"
%}

Todos los campos son obligatorios, se debe contar con los permisos para visualizar la Orden creada.  

A continuación se da una breve explicación de cada campo:

**Diagnóstico:**  Es un texto corto por medio del cual se indica la labor a a solicitar. Debe ser conciso y no dar lugar a ambigüedades.

**Solicitante:** Es la persona que solicita la labor a realizar, puede ser escrito manualmente o ser un RI(Un responsable interno que está registrado en la tabla de Infraestructura Terceros).

**Activo:** Es el objeto de mantenimiento.

**Centro Responsable:** Es el grupo ejecutor de mantenimiento a cargo de la labor a realizar.

**Responsable:** Es la persona natural o jurídica principal a ejecutar la labor de mantenimiento.

**Tipo de Trabajo:** Indica los Tipos de Trabajo que se realizan en la SS.  Es posible definir más de un Tipo de Trabajo para una SS.

**Tipo de mantenimiento:** Este campo indica el Tipo de Mantenimiento a realizar en la SS. Toda SS debe poseer uno. Si en la SS se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige Otro” y a continuación, en el tipo de “Actividad” se especifica detalladamente, el tipo de labor.

**Tipo de actividad:** Aquí se establece el Tipo de Actividad a realizar en la OT. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de “Otro”, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

**Prioridad:** Es la prioridad que tiene la SS. Están disponibles la prioridad Baja, Media y Alta.

Una vez diligenciado completamente el formulario continue con el botón <a class="btn cl-white bg-blue px-6"> Guardar</a>, el aplicativo muestra el siguiente mensaje alerta y continue con el botón <a class="btn cl-white bg-blue px-6"> Aceptar </a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_128.png"
  alt:"AMovil - Crear Solicitud Mensaje Alerta"
%}

Para visualizar la SS creada no debe tener subgrupos activos:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"16_129.png"
  alt:"AMovil - Crear Solicitud"
%}