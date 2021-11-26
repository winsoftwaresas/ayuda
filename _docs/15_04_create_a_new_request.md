---
title: Crear Nueva Solicitud 
subtitle: Este capítulo define el formulario a diligenciar para crear una SS desde **AMsi**. 
tags: [AMsi, Crear Solicitud]
author: win
order: 15_04
---
Se suministra información detallada del formulario _Servicio Solicitado_. Dicha información, especifica claramente el servicio solicitado así como el Centro de Servicio responsable de atender la SS creada.
Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de SS y se reconocen los comandos que aparecen en pantalla.

**En este capítulo**

•	Formulario Servicio Solicitado
•	Campos de Servicio Solicitado
•	Campos de Información de Activo / Equipo

Este formulario trae los datos del solicitante previamente logueado en la ventana de  acceso al **AMsi**. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la SS de mantenimiento.
Para la Creación de la SS, dar clic en el siguiente botón mostrado:

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 6.**  Crear Nueva Solicitud_

### 4.1	Ventana Creación de la Solicitud de Servicio

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 7.**  Ventana Creación SS_

Luego de dar clic sobre el botón anterior, el sistema responde mostrando en una nueva ventana, el Detalle del Servicio a solicitar. A través de ella se ejecutan todas las funciones dedicadas a la creación de la SS. A continuación, se describen los campos que la componen, sobre cada uno se da una breve explicación:

### **Campos Del Formulario _Datos Del Solicitante_**

Este cuadro es informativo y hace referencia a los Datos del Solicitante necesarios para la creación de una SS y que fueron ingresados en Actualizar Perfil visto en el tercer capítulo. Contiene la información personal del solicitante y todos los campos se encuentran bloqueados.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.

**Teléfono:** Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

**Dirección:** Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o bien, correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

### **Campos Del Formulario Servicio Solicitado **

El formulario Servicio Solicitado  hace referencia a los datos de la SS que se está creando.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

**Mensaje:** Este mensaje que se desliza, es configurado por el Administrador General del **AMsi** en General. Para mayor información dirigirse al capítulo Configuración **AMsi**. Su finalidad es notificar a los usuarios solicitantes.

**Centro de Servicio:** Este campo permanece bloqueado y muestra la información de la compañía relacionada al Centro de Costo elegido. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías.
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se muestra desbloqueado y es posible elegir el Centro de Servicio deseado.

**Centro de Costo:** En este campo se elige de la lista desplegable el Centro de Costo al que se le va a realizar la SS. Al seleccionar el Centro de Costo, se muestra automáticamente en el campo Centro de Servicio, el nombre del Centro de Servicio al cual está asociado el Centro de Costo seleccionado. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. Solo se listan los Centros de Costo que el usuario solicitante tenga  asociados.
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se listan únicamente los Centros de Costo existentes en el Centro de Servicio seleccionado.

**Descripción:** En este campo se digita en forma detallada el servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el Activo/Equipo de la organización que requiere atención de mantenimiento. Dependiendo de la configuración, este campo se puede habilitar **(1)** para describir el equipo en lenguaje natural o **(2)** para seleccionarlo de la lista que se despliega dando clic al ícono de filtro azul (Triángulo Invertido) que se encuentra en la parte derecha del campo.
La lista desplegada incluye los Activos/Equipos creados previamente en el AM y que a la vez están asociados al Centro de Costo de la compañía correspondiente.
Existe control en todos los casos sobre el Centro de Costo, es decir, solo se despliegan o se permiten elegir Activos/Equipos que estén asociados al Centro de Costo definido en el campo Centro de Costo.
Para describir el Activo/Equipo en lenguaje natural se da clic al cuadro ubicado al lado izquierdo de este campo, inmediatamente se habilitan dos campos que pueden ser diligenciados. El primer campo es para describir en lenguaje natural el Activo/Equipo, y el segundo campo es para describir también en lenguaje natural la ubicación física del Activo o Equipo referenciado.
Para seleccionar el Activo/Equipo se da clic en el icono de filtro azul (Triángulo Invertido) ubicado al lado derecho de este campo, inmediatamente se abre una nueva ventana para elegir el Activo/Equipo, para seleccionarlo se da doble clic sobre el registro, se cierra esta ventana automáticamente y se observa que aparece el código y la descripción del Activo/Equipo.

**Descripción:** Este campo permanece bloqueado y muestra la descripción del Activo/Equipo seleccionado.

**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la solicitud realizada. Es un campo opcional de diligenciar.

**Botón Enviar:** Este botón envía inmediatamente la SS a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación.
Una vez enviada la SS, el sistema muestra un mensaje de notificación de registro exitoso, mostrando el número o consecutivo asignado. Se habilitan además las opciones de Crear Nueva Solicitud y Consultar Mis Solicitudes, como se muestra a continuación:

![Procesar imagen](../assets/images/placeholder.jpg)
**_Imagen 8.  Mensaje registro SS_**

**Botón Crear Nueva Solicitud:** Se usa para crear nuevas solicitudes de servicio. Aplica cuando se ha enviado una SS y se desea generar una nueva.

**Botón Consultar Mis Solicitudes:** Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de SS creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Solicitudes” de este manual.
Botón Inicio: Este botón lleva a la ventana de Menú Principal del Usuario.

**Botón Cerrar Sesión:** Este botón permite salir de la aplicación **AMsi**.
