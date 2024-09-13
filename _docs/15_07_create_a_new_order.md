---
title: Crear Nueva Orden
subtitle: Este capítulo explica en detalle el formulario a diligenciar para generar de una Orden de Trabajo (OT) desde AMsi.
tags:
  - AMsi
  - Crear Orden en AMsi
author: win
order: 15_07
date: 2022-06-21T22:09:41.972Z
---
Se suministra información detallada del formulario Servicio Solicitado. Dicha información, especifica claramente el servicio solicitado, así como también el Centro de Servicio responsable de atender la OT.

Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de OT, y se reconocen los comandos que aparecen en pantalla.


**En esta sección**

- Formulario Servicio Solicitado para usuarios relacionados por Centro de Costo y por Compañía.
- Campos de Servicio Solicitado
- Campos de Información de Activo/Equipo

<iframe width="600" height="340" src="https://www.youtube.com/embed/qI6bSmrxgyY?si=4KDOC6Oug-5x0Pox" title="Actualizar perfil y crear órdenes de trabajo para usuarios relacionados por centro de costo" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>

<br>

Ingrese a **AMsi** y elija la opción **Crear Nueva Orden**.

![Procesar imagen](../../assets/images/cap12/chp12_img20.png)
_**Imagen 32. Crear Nueva Orden**_


Este formulario trae los datos del solicitante previamente logueado en la ventana de acceso al **AMsi**. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la OT de mantenimiento.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

Una vez ingresados los datos del solicitante de manera correcta en el botón del Menú principal **Actualizar Perfil** _(Consultar la sección Actualizar Perfil)_. 

### Campos Del Formulario _Datos Del Solicitante_  para usuarios relacionado por Centros de Costo  

![Procesar imagen](../../assets/images/cap12/chp12_img21.png)
_**Imagen 33. Ventana Creación OT**_


A continuación, se describen los campos que componen esta ventana Creación de OT. Sobre cada campo se da una breve explicación:


**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Este campo muestra la Dirección de correo electrónico asignada a la* persona solicitante por la organización, o bien, correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### Campos Del Formulario Servicio Solicitado para usuarios relacionados por Centro de Costo

El formulario _Servicio Solicitado_  hace referencia a los datos de la OT que se está creando.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

**Mensaje:** Este mensaje que se desliza, es configurado por el Administrador General del **AMsi** en General. Para mayor información dirigirse al capítulo Configuración **AMsi**. Su finalidad es notificar a los usuarios solicitantes.

**Centro de Servicio:** Este campo permanece bloqueado y muestra la información de la compañía relacionada al Centro de Costo elegido. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías.
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se muestra desbloqueado y es posible elegir el Centro de Servicio deseado.

**Centro de Costo:** En este campo se elige de la lista desplegable el Centro de Costo para la OT. Al elegir un Centro de Costo, se muestra automáticamente en el campo Centro de Servicio, el nombre del Centro de Servicio al cual está asociado el Centro de Costo seleccionado. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. Solo se listan los Centros de Costo que el usuario solicitante tenga  asociados.

En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se listan únicamente los Centros de Costo existentes en el Centro de Servicio seleccionado.

**Descripción:** En este campo se digita la descripción detallada del servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el Activo/Equipo de la organización que requiere atención de mantenimiento. 

Para seleccionarlo del visor que se despliega dando clic al ícono de filtro azul <span class="mdi mdi-filter-variant icon white"></span> que se encuentra en la parte derecha del campo.
La lista desplegada en el visor incluye los Activos/Equipos creados previamente en el AM y que a la vez están asociados al Centro de Costo de la compañía correspondiente.
Existe control en todos los casos sobre el Centro de Costo, es decir, solo se despliegan o se permiten elegir Activos/Equipos que estén asociados al Centro de Costo definido en el campo Centro de Costo.

Para seleccionar el Activo/Equipo se da clic en el icono de subgrupo (filtro azul) <span class="mdi mdi-filter-variant icon white"></span> ubicado al lado derecho de este campo, inmediatamente se abre una nueva ventana Visor de Activos, donde también es posible hacer subgrupos y para seleccionarlo se da doble clic sobre el registro, se cierra esta ventana automáticamente y se observa que aparece el código y la descripción del Activo/Equipo.

**Descripción:** Este campo permanece bloqueado y muestra la descripción del Activo/Equipo seleccionado.

**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la OT realizada. Es un campo opcional de diligenciar. Si el campo no aparece es porque no se habilitó en la configuración. 

<a class="btn blue">Enviar <span class="mdi mdi-send"></span></a> : Este botón envía inmediatamente la OT a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación.
Una vez enviada la OT, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado. Se habilitan además las opciones de **Crear Nueva Orden** y **Consultar Mis Solicitudes:**

![Procesar imagen](../../assets/images/cap12/chp12_img22.png)
_**Imagen 34.**  Mensaje registro OT_
 
**<span class="mdi mdi-home"></span> :** Este botón lleva a la ventana de Menú Principal del Usuario.

**<span class="mdi mdi-exit-to-app"></span> :** Este botón permite salir del aplicativo **AMsi**.

<a class="btn blue">CONSULTAR ORDENES <span class="mdi mdi-account-box"></span></a> Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de OT creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Órdenes” de este manual.

<a class="btn blue"> CREAR NUEVA ORDEN<span class="mdi mdi-plus-circle-outline"></span></a> Se usa para crear nuevas OT. Aplica cuando se acaba de enviar una OT y se desea generar un nuevo registro en esa misma ventana.

<a class="btn blue">ANEXAR MULTIMEDIA <span class="mdi mdi-attachment"></span></a> : Permite una vez que se envíe la OT anexar archivos Multimedia, como documentos, imágenes o porciones de video siempre y cuando el usuario permanezca en esta ventana.

Para ingresar multimedia se debe dar doble clic sobre una de las tres carpetas. 

![Procesar imagen](../../assets/images/cap12/chp12_img23.png)
_**Imagen 35.** Ir a Multimedia_

Se debe dar clic al botón <span class="mdi mdi-cloud-upload icon white"></span> para abrir el explorador de archivos:

![Procesar imagen](../../assets/images/cap12/chp12_img2301.png)
_**Imagen 36.** Multimedia_


![Procesar imagen](../../assets/images/cap12/chp12_img24.png)
_**Imagen 37.** Explorador Archivos_

Una vez elegido el archivo a adjuntar puede asignarse un nombre opcional en el espacio en blanco a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img25.png)
_**Imagen 38.** Nombrar archivo_

Luego se debe dar clic en el botón <a class="btn white">subir archivo</a>  y el sistema confirmará a través de un mensaje que el archivo ha sido subido correctamente:

![Procesar imagen](../../assets/images/cap12/chp12_img26.png)
_**Imagen 39.** Mensaje Alerta Multimedia_



#### Creación de Órdenes de Trabajo para Usuarios relacionados por Compañía

<iframe width="600" height="340" src="https://www.youtube.com/embed/lamMeqB2G18?si=-6AdZbxP2bT4y9M1" title="Actualizar perfil y crear órdenes de trabajo para usuarios relacionados por compañía" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>


Una vez ingrese a **AMsi** elija la opción **Crear Nueva Orden**, se visualiza el Formulario que muestra el detalle del servicio a solicitar:

![Procesar imagen](../../assets/images/cap12/chp12_img26_01.png)
_**Imagen 40.** Formulario OT_
   

Se describen los campos a diligenciar:

### Campos del Formulario _Datos del Solicitante_

Este recuadro es informativo y hace referencia a los Datos del Solicitante normalmente corporativos necesarios para la creación de una OT. _(Sección Actualizar Perfil)_.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o el correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### Campos Del Formulario _Servicio Solicitado_ para usuarios relacionados por Compañía

**Centro de Servicio:** Este campo solo es desplegable cuando el usuario tiene asociada o autorizada mas de una compañía. Se refiere a la compañía en **AM** a la que llega la OT. 

**Descripción:** En este campo se digita en forma concreta el servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el  objeto de mantenimeinto relacionado a la OT. 


Para seleccionar el Activo dirijase al botón dando un clic <span class="mdi mdi-filter-variant icon white"></span> que se encuentra en la parte derecha del campo:

![Procesar imagen](../../assets/images/cap12/chp12_img26_02.png)
_**Imagen 41.** Asociar Activo/Equipo a la OT_

La lista desplegada incluye los Activos/Equipos creados previamente en **AM** asociados a la compañía o centro de servicio referido en el formulario en estado activo y operante. En esta nueva ventana también hay posibilidad de hacer subgrupos <span class="mdi mdi-filter-variant"></span> o búsquedas rápidas que facilitan encontrar el Activo. (En la imagen anterior se muestra un Subgrupo dentro de la ventana detalle de Activos representado por el ícono <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a> )

Para seleccionar el Activo dar doble clic sobre el registro sombreado en verde. Cuando se cierra esta ventana automáticamente se observa que aparece el código y la descripción del Activo/Equipo, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img26_03.png)
_**Imagen 42.** Formulario correctamente diligenciado_



**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la solicitud realizada. Es un campo opcional de diligenciar y que es configurable por el usuario administrador. (En la imagen anterior se configuró para que el campo no aparezca).

Una vez se diligencie el formulario accione el botón  <a class="btn blue">ENVIAR <span class="mdi mdi-send"></span></a>. Este botón envía inmediatamente la SS a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación. Una vez enviada la SS, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado a la OT.

Después se habilitan las siguientes opciones:


![Procesar imagen](../../assets/images/cap12/chp12_img26_04.png)
_**Imagen 43.** Envío de OT_



<a class="btn blue">ANEXAR MULTIMEDIA <span class="mdi mdi-attachment"></span></a> : Permite una vez que se envíe la SS anexar archivos Multimedia, como documentos, imágenes o porciones de video siempre y cuando el usuario permanezca en esta ventana.



Para ingresar multimedia se debe dar doble clic sobre una de las tres carpetas:

![Procesar imagen](../../assets/images/cap12/chp12_img26_05.png)
_**Imagen 44.** Multimedia_

Luego, dar clic al botón <span class="mdi mdi-cloud-upload icon white"></span> para abrir el explorador de archivos:

![Procesar imagen](../../assets/images/cap12/chp12_img26_06.png)
_**Imagen 45.** AMsi - Explorador de archivos_

![Procesar imagen](../../assets/images/cap12/chp12_img26_07.png)
_**Imagen 46.** AMsi - Subir archivo_

Despues de adjuntar el archivo puede asignarse un nombre opcional para hacer referencia clara de lo que se está adjuntando en el espacio en blanco que se muestra a continuación:

![Procesar imagen](../../assets/images/cap12/chp12_img26_08.png)
_**Imagen 47.** Mensaje Alerta OT_

Luego, dar clic en el botón <a class="btn white">Subir Archivo</a> y el sistema confirma a través de un mensaje que el archivo ha sido subido correctamente:

![Procesar imagen](../../assets/images/cap12/chp12_img26_09.png)
_**Imagen 48.** Mensaje registro OT_


<a class="btn blue">CREAR NUEVA SOLICITUD <span class="mdi mdi-plus-circle-outline"></span></a> : Se usa para crear nuevas solicitudes de servicio. Aplica cuando se ha enviado una SS y se desea generar una nueva.

<a class="btn blue">CONSULTAR SOLICITUDES <span class="mdi mdi-account-box"></span></a> : Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de OT creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Ordenes” de este manual.




**<span class="mdi mdi-home"></span>:** Este botón lleva a la ventana de Menú Principal.

**<span class="mdi mdi-exit-to-app"></span>:** Este botón  permite salir de la aplicación **AMsi**.

