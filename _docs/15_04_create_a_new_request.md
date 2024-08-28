---
title: Crear Nueva Solicitud
subtitle: Este capítulo define el formulario a diligenciar para crear una SS en **AMsi**.
tags:
  - AMsi
  - Crear Solicitud
author: win
order: 15_04
date: 2022-06-15T14:56:34.185Z
---
Se suministra información detallada del formulario _Servicio Solicitado_. Dicha información, especifica claramente el servicio solicitado así como el Centro de Servicio responsable de atender la SS.
Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de SS y se reconocen los comandos que aparecen en pantalla.


**En esta sección**

-	Formulario Servicio Solicitado para Usuarios relacionados por Centros de Costo
- Formulario Servicio Solicitado para Usuarios relacionados por Compañía.
- Campos de Servicio Solicitado
- Campos de Información de Activo / Equipo


## Creación de Solicitudes de Servicio


<iframe width="600" height="340" src="https://www.youtube.com/embed/Djn9vXQVmhg?si=DohrcsL0ptRyVbqx" title="Actualización de perfil y creación de solicitudes para usuarios relacionados por Centro de Costo" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>



Ingrese a **AMsi** y elija la opción **Crear Nueva Solicitud** :


![Procesar imagen](../../assets/images/cap12/chp12_img06.png)
_**Imagen 6.**  Crear Nueva Solicitud_



## Ventana Creación de la Solicitud de Servicio 

**AMsi** responde mostrando en una nueva ventana, el Detalle del Servicio a Solicitar.  Es decir,  la información personal del solicitante información del servicio solicitado e información del Activo/Equipo objeto de la SS de mantenimiento.

![Procesar imagen](../../assets/images/cap12/chp12_img07.png)
_**Imagen 7.**  Ventana Creación SS_

A continuación, se describen los campos que la componen, sobre cada uno se da una breve explicación:

### Campos Del Formulario _Datos Del Solicitante_

Este cuadro es informativo y hace referencia a los Datos del Solicitante necesarios para la creación de una SS. Contiene la información corporativa del solicitante y todos los campos se encuentran bloqueados _(sección Actualizar Perfil)_.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o el correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### Campos Del Formulario Servicio Solicitado para usuarios relacionados por Centros de Costo

El formulario Servicio Solicitado  hace referencia a los datos de la SS que se está creando.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

**Mensaje:** Este mensaje que se desliza, es configurado por el Administrador General del **AMsi** en General. Para mayor información dirigirse al capítulo Configuración **AMsi**. Su finalidad es notificar a los usuarios solicitantes.

**Centro de Servicio:** Este campo permanece bloqueado y muestra la información de la compañía relacionada al Centro de Costo elegido. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías.
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se muestra desbloqueado y es posible elegir el Centro de Servicio deseado.

**Centro de Costo:** En este campo se elige de la lista desplegable el Centro de Costo al que se le va a realizar la SS. Al seleccionar el Centro de Costo, se muestra automáticamente en el campo Centro de Servicio, el nombre del Centro de Servicio al cual está asociado el Centro de Costo seleccionado. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. Solo se listan los Centros de Costo que el usuario solicitante tenga  asociados.
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se listan únicamente los Centros de Costo existentes en el Centro de Servicio seleccionado.

**Descripción:** En este campo se digita en forma concreta el servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el Activo/Equipo de la organización que requiere atención de mantenimiento. Dependiendo de la configuración en **AMsi**, este campo se puede habilitar:


- Para selección del Activo en la ventana Detalle de Activos que es llamada por el ícono Subgrupo <span class="mdi mdi-filter-variant icon white"></span> que se encuentra en la parte derecha del campo:


![Procesar imagen](../../assets/images/cap12/chp12_img07_01.png)
_**Imagen 8.**  Ventana Activos_

La lista desplegada incluye los Activos/Equipos creados previamente en el **AM** y que a la vez están asociados al Centro de Costo de la compañía correspondiente y en estado activo y operante. En esta nueva ventana también hay posibilidad de hacer subgrupos.Para seleccionar el Activo dar doble clic sobre el registro sombreado en verde. Cuando se cierra esta ventana automáticamente se observa que aparece el código y la descripción del Activo/Equipo. (_Ver imagen 7_)



Existe control en todos los casos sobre el Centro de Costo, es decir, solo se despliegan o se permiten elegir Activos/Equipos que estén asociados al Centro de Costo definido en el campo Centro de Costo.

- Para describir el Activo/Equipo en lenguaje natural

Para describir el Activo/Equipo en lenguaje natural dar clic al campo <a class="btn cl-black "><span class="mdi mdi-checkbox-blank-outline"></span></a> ubicado al lado izquierdo. 

>**Nota:** Este se usa en caso de que el usuario solicitante no encuentre o no identifique el Activo por medio del Subgrupo <span class="mdi mdi-filter-variant icon white"></span> (opción anterior).

inmediatamente se habilitan dos campos que pueden ser diligenciados.

![Procesar imagen](../../assets/images/cap12/chp12_img07_02.png)
_**Imagen 9.**  Descripción del Activo en Lenguaje Natural_

**Activo / Equipo en Lenguaje Natural:** Es para describir el nombre del Activo que se va a referenciar en la SS y que debe de ser fácilmente identificable para el área de Mantenimiento.


**Ubicación Física:** Aqui se debe describir también en lenguaje natural la ubicación física del Activo/Equipo referenciado.


**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la solicitud realizada. Es un campo opcional de diligenciar y que es configurable por el usuario administrador. 

Una vez se diligencie el formulario accione el botón  <a class="btn blue">ENVIAR <span class="mdi mdi-send"></span></a>. Este botón envía inmediatamente la SS a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación.
Una vez enviada la SS, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado. Después se habilitan las siguientes opciones:

![Procesar imagen](../../assets/images/cap12/chp12_img08.png)
_**Imagen 10.** Ir a Multimedia_

<a class="btn blue">ANEXAR MULTIMEDIA <span class="mdi mdi-attachment"></span></a> : Permite una vez que se envíe la SS anexar archivos Multimedia, como documentos, imágenes o porciones de video siempre y cuando el usuario permanezca en esta ventana.



Para ingresar multimedia se debe dar doble clic sobre una de las tres carpetas:

![Procesar imagen](../../assets/images/cap12/chp12_img09.png)
_**Imagen 11.** Multimedia_

Luego, dar clic al botón <span class="mdi mdi-cloud-upload icon white"></span> para abrir el explorador de archivos:

![Procesar imagen](../../assets/images/cap12/chp12_img10.png)
_**Imagen 12.** AMsi - Explorador de archivos_

![Procesar imagen](../../assets/images/cap12/chp12_img11.png)
_**Imagen 13.** AMsi - Subir archivo_

Despues de adjuntar el archivo puede asignarse un nombre opcional para hacer referencia clara de lo que se estáadjuntano en el espacio en blanco que se muestra a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img12.png)
_**Imagen 14.** Mensaje Alerta SS_

Luego, dar clic en el botón <a class="btn white">Subir Archivo</a> y el sistema confirma a través de un mensaje que el archivo ha sido subido correctamente:

![Procesar imagen](../../assets/images/cap12/chp12_img13.png)
_**Imagen 15.** Mensaje registro SS_


<a class="btn blue">CREAR NUEVA SOLICITUD <span class="mdi mdi-plus-circle-outline"></span></a> : Se usa para crear nuevas solicitudes de servicio. Aplica cuando se ha enviado una SS y se desea generar una nueva.

<a class="btn blue">CONSULTAR SOLICITUDES <span class="mdi mdi-account-box"></span></a> : Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de SS creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Solicitudes” de este manual.




**<span class="mdi mdi-home"></span>:** Este botón lleva a la ventana de Menú Principal.

**<span class="mdi mdi-exit-to-app"></span>:** Este botón  permite salir de la aplicación **AMsi**.




#### Campos Del Formulario Servicio Solicitado para usuarios relacionados por Compañía

<iframe width="600" height="340" src="https://www.youtube.com/embed/Sd7o6h16bb8?si=4u5BSOD5sLJAeo05" title="Actualización de perfil y creación de solicitudes para usuarios relacionados por compañía" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>

Una vez ingrese a **AMsi** elija la opción **Crear Nueva Solicitud**, se visualiza el Formulario que muestra el detalle del servicio a solicitar:

![Procesar imagen](../../assets/images/cap12/chp12_img13_01.png)
_**Imagen 16.** Formulario SS_
   

Se describen los campos a diligenciar:

### Campos del Formulario _Datos del Solicitante_

Este recuadro es informativo y hace referencia a los Datos del Solicitante corporativos necesarios para la creación de una SS. _(Sección Actualizar Perfil)_.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o el correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### Campos Del Formulario _Servicio Solicitado_ para usuarios relacionados por Compañía

**Centro de Servicio:** Este campo solo es desplegable cuando el usuario tiene asociada o autorizada mas de una compañía. Se refiere a la compañía en **AM** a la que llega la SS. 

**Descripción:** En este campo se digita en forma concreta el servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el  objeto de mantenimeinto relacionado a la SS. Dependiendo de la configuración en **AMsi**, este campo se puede habilitar:


- Para selección del Activo en la ventana Detalle de Activos que es llamada por el ícono Subgrupo <span class="mdi mdi-filter-variant icon white"></span> que se encuentra en la parte derecha del campo:

![Procesar imagen](../../assets/images/cap12/chp12_img13_02.png)
_**Imagen 17.** Asociar Activo/Equipo a la SS_

La lista desplegada incluye los Activos/Equipos creados previamente en **AM** asociados a la compañía o centro de servicio referido en el formulario y en estado activo y operante. En esta nueva ventana también hay posibilidad de hacer subgrupos <span class="mdi mdi-filter-variant"></span> o búsquedas rápidas que facilitan encontrar el Activo. (En la imagen anterior se muestra un Subgrupo dentro de la ventana detalle de Activos representado por el ícono <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a> )

Para seleccionar el Activo dar doble clic sobre el registro sombreado en verde. Cuando se cierra esta ventana automáticamente se observa que aparece el código y la descripción del Activo/Equipo, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img13_03.png)
_**Imagen 18.** Formulario correctamente diligenciado_

- Describir el Activo/Equipo en lenguaje natural

Para describir el Activo/Equipo en lenguaje natural dar clic al campo <a class="btn cl-black "><span class="mdi mdi-checkbox-blank-outline"></span></a> ubicado al lado izquierdo. 

>**Nota:** Este se usa en caso de que el usuario solicitante no encuentre o no identifique el Activo por medio del Subgrupo <span class="mdi mdi-filter-variant icon white"></span> (opción anterior).

![Procesar imagen](../../assets/images/cap12/chp12_img13_04.png)
_**Imagen 19.** Activo en Lenguaje Natural_

**Activo / Equipo en Lenguaje Natural:** Es para describir el nombre del Activo que se va a referenciar en la SS y que debe de ser fácilmente identificable para el área de Mantenimiento.


**Ubicación Física:** Aqui se debe describir también en lenguaje natural la ubicación física del Activo/Equipo referenciado.


**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la solicitud realizada. Es un campo opcional de diligenciar y que es configurable por el usuario administrador. (En la imagen anterior se configuró para que el campo no aparezca).

Una vez se diligencie el formulario accione el botón  <a class="btn blue">ENVIAR <span class="mdi mdi-send"></span></a>. Este botón envía inmediatamente la SS a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación. Una vez enviada la SS, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado a la SS.

Después se habilitan las siguientes opciones:


![Procesar imagen](../../assets/images/cap12/chp12_img13_05.png)
_**Imagen 20.** Envío de SS_



a class="btn blue">ANEXAR MULTIMEDIA <span class="mdi mdi-attachment"></span></a> : Permite una vez que se envíe la SS anexar archivos Multimedia, como documentos, imágenes o porciones de video siempre y cuando el usuario permanezca en esta ventana.



Para ingresar multimedia se debe dar doble clic sobre una de las tres carpetas:

![Procesar imagen](../../assets/images/cap12/chp12_img13_06.png)
_**Imagen 21.** Multimedia_

Luego, dar clic al botón <span class="mdi mdi-cloud-upload icon white"></span> para abrir el explorador de archivos:

![Procesar imagen](../../assets/images/cap12/chp12_img13_07.png)
_**Imagen 22.** AMsi - Explorador de archivos_

![Procesar imagen](../../assets/images/cap12/chp12_img13_08.png)
_**Imagen 23.** AMsi - Subir archivo_

Despues de adjuntar el archivo puede asignarse un nombre opcional para hacer referencia clara de lo que se estáadjuntano en el espacio en blanco que se muestra a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img13_09.png)
_**Imagen 24.** Mensaje Alerta SS_

Luego, dar clic en el botón <a class="btn white">Subir Archivo</a> y el sistema confirma a través de un mensaje que el archivo ha sido subido correctamente:

![Procesar imagen](../../assets/images/cap12/chp12_img13_10.png)
_**Imagen 25.** Mensaje registro SS_


<a class="btn blue">CREAR NUEVA SOLICITUD <span class="mdi mdi-plus-circle-outline"></span></a> : Se usa para crear nuevas solicitudes de servicio. Aplica cuando se ha enviado una SS y se desea generar una nueva.

<a class="btn blue">CONSULTAR SOLICITUDES <span class="mdi mdi-account-box"></span></a> : Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de SS creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Solicitudes” de este manual.




**<span class="mdi mdi-home"></span>:** Este botón lleva a la ventana de Menú Principal.

**<span class="mdi mdi-exit-to-app"></span>:** Este botón  permite salir de la aplicación **AMsi**.

