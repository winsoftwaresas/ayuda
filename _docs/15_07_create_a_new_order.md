---
title: Crear una nueva Orden
subtitle: Este capítulo define el formulario a diligenciar para la generación de una Orden de Trabajo (OT) desde AMsi.
tags: [AMsi, Crear Orden en AMsi]
author: win
order: 15_07
---
Se suministra información detallada del formulario Servicio Solicitado. Dicha información, especifica claramente el servicio solicitado, así como también el Centro de Servicio responsable de atender la OT creada.

Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de OT, y se reconocen los comandos que aparecen en pantalla.

**En este capítulo**

- Formulario Servicio Solicitado.
- Campos de Servicio Solicitado
- Campos de Información de Activo / Equipo

Este formulario trae los datos del solicitante previamente logueado en la ventana de acceso al **AMsi**. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la OT de mantenimiento.

Todos los campos marcados con asterisco (*) son de carácter obligatorio.

Una vez ingresados los datos del solicitante de manera correcta en el botón del Menú principal Actualizar Perfil, continuar dando un clic a la siguiente opción ubicada al lado derecho para continuar con la Creación de la OT:

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 15. Crear Nueva Orden**_

### 7.1	Ventana Creación de la Orden de Trabajo

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 16. Ventana Creación OT**_

A esta ventana se llega haciendo clic sobre la opción Crear Nueva Orden del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a la creación de la OT. A continuación, se describen los campos que componen esta ventana de Creación de OT. Sobre cada campo se da una breve explicación.

### Campos Del Formulario _Datos Del Solicitante_

Este cuadro es informativo y hace referencia a los _Datos del Solicitante_ necesarios para la creación de una OT y que fueron ingresados en **Actualizar Perfil** visto en el tercer capítulo. Contiene la información personal del solicitante y todos los campos se encuentran bloqueados.

**Nro. Documento:** Este campo muestra el número de Identificación de la persona solicitante.

**Nombre Completo:** Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.
Teléfono: Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.

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

**Activo/Equipo:** En este campo se selecciona el Activo/Equipo de la organización que requiere atención de mantenimiento a través del ícono azul (triángulo invertido) que se encuentra en la parte derecha del campo. La lista desplegada incluye los Activos/Equipos creados previamente en el **AM** y los que están asociados al Centro de Costo de la compañía correspondiente.

Existe control en todos los casos sobre el Centro de Costo, es decir, solo se despliegan o se permiten elegir Activos/Equipos que estén asociados al Centro de Costo definido en el campo Centro de Costo.

Para seleccionar el Activo/Equipo se da clic en el icono de filtro azul (triángulo invertido) ubicado al lado derecho de este campo, inmediatamente se abre una nueva ventana del visor de Activos/Equipos, luego de elegirlo se observa que aparece el código del Activo/Equipo.

**Descripción:** Este campo permanece bloqueado y muestra la descripción del Activo/Equipo seleccionado.

**Prioridad:** Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.

**F/H Tentativa del Usuario:** En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la OT realizada. Es un campo opcional de diligenciar.

**Botón Enviar:** Este botón envía inmediatamente la OT a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación.
Una vez enviada la OT, el sistema muestra un mensaje de notificación de registro exitoso. Se habilitan además las opciones de Crear Nueva Orden y Consultar Mis Órdenes, como se indica a continuación:

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 17.  Mensaje registro OT**_

**Botón Crear Nueva Orden:** Se usa para crear nuevas OT. Aplica cuando se acaba de enviar una OT y se desea generar un nuevo registro en esa misma ventana.
Botón Consultar Mis Órdenes: Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de OT creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Órdenes” de este manual.

**Botón Inicio:** Este botón lleva a la ventana de Menú Principal del Usuario.

**Botón Cerrar Sesión:** Este botón permite salir del aplicativo **AMsi**.
