---
title: Crear Nueva Orden
subtitle: Este capítulo define el formulario a diligenciar para la generación de
  una Orden de Trabajo (OT) desde AMsi.
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

- Formulario Servicio Solicitado.
- Campos de Servicio Solicitado
- Campos de Información de Activo/Equipo

Este formulario trae los datos del solicitante previamente logueado en la ventana de acceso al **AMsi**. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la OT de mantenimiento.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

Una vez ingresados los datos del solicitante de manera correcta en el botón del Menú principal **Actualizar Perfil** _(Consultar la sección Actualizar Perfil)_. Continuar dando un clic a la siguiente opción ubicada al lado derecho para continuar con la Creación de la OT:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img20.png)
_**Imagen 20. Crear Nueva Orden**_

### 7.1	Ventana Creación de la Orden de Trabajo

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img21.png)
_**Imagen 21. Ventana Creación OT**_

A esta ventana se llega haciendo clic sobre la opción **Crear Nueva Orden** en el Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a la creación de la OT. A continuación, se describen los campos que componen esta ventana Creación de OT. Sobre cada campo se da una breve explicación:

### Campos Del Formulario _Datos Del Solicitante_

Este cuadro es informativo y hace referencia a los _Datos del Solicitante_ necesarios para la creación de una OT y que fueron ingresados en **Actualizar Perfil** visto en el tercer capítulo. Contiene la información personal del solicitante y todos los campos se encuentran bloqueados.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.
Correo Electrónico: Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o bien, correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### Campos Del Formulario Servicio Solicitado

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

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la OT realizada. Es un campo opcional de diligenciar.

<a class="btn blue">enviar <span class="mdi mdi-send"></span></a> : Este botón envía inmediatamente la SS a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación.
Una vez enviada la OT, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado. Se habilitan además las opciones de Crear Nueva Orden y Consultar Mis Solicitudes:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img22.png)
_**Imagen 22.**  Mensaje registro OT_
 
**Botón Inicio  <span class="mdi mdi-home"></span> :** Este botón lleva a la ventana de Menú Principal del Usuario.

**Botón Cerrar Sesión  <span class="mdi mdi-exit-to-app"></span> :** Este botón permite salir del aplicativo **AMsi**.

<a class="btn blue">consultar Ordenes <span class="mdi mdi-account-box"></span></a> Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de OT creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Órdenes” de este manual.

<a class="btn blue">crear nueva orden <span class="mdi mdi-plus-circle-outline"></span></a> Se usa para crear nuevas OT. Aplica cuando se acaba de enviar una OT y se desea generar un nuevo registro en esa misma ventana.

<a class="btn blue">anexar multimedia <span class="mdi mdi-attachment"></span></a> : Permite una vez que se envíe la OT anexar archivos Multimedia, como documentos, imágenes o porciones de video siempre y cuando el usuario permanezca en esta ventana.

Para ingresar multimedia se debe dar doble clic sobre una de las tres carpetas. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img23.png)
_**Imagen 23.** Ir a Multimedia_

Se debe dar clic al botón <span class="mdi mdi-cloud-upload icon white"></span> para abrir el explorador de archivos:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img2301.png)
_**Imagen 24.** Multimedia_


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img24.png)
_**Imagen 25.** Explorador Archivos_

Una vez elegido el archivo a adjuntar puede asignarse un nombre opcional en el espacio en blanco a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img25.png)
_**Imagen 26.** Nombrar archivo_

Luego se debe dar clic en el botón <a class="btn white">subir archivo</a>  y el sistema confirmará a través de un mensaje que el archivo ha sido subido correctamente:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img26.png)
_**Imagen 27.** Mensaje Alerta Multimedia_





