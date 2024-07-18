---
title: Actualizar Perfil
subtitle: Se define cómo Actualizar Perfil del Usuario
tags:
  - AMsi
  - Actualizar Perfil
author: win
order: 15_03
date: 2022-06-14T19:50:52.335Z
---
Se define el formulario a diligenciar para actualizar el perfil del usuario Solicitante en **AMsi**.

**En esta sección**

- Actualizar Perfil del usuario

La siguiente transacción permite que el usuario pueda actualizar la información personal cuando lo requiera y visualizar los Centros de Costos asociados. Para acceder a esta ventana se da un clic a este botón ubicado en la ventana de Menú Principal.

![Procesar imagen](../assets/images/cap12/chp12_img03.png)
_**Imagen 3.** Botón Actualizar Perfil_

El sistema muestra automáticamente el Detalle del Formulario para Actualizar Perfil en la ventana de Menú Principal del usuario.

![Procesar imagen](../assets/images/cap12/chp12_img04.png)
**_Imagen 4. Actualizar Perfil_**

A continuación, se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

### Campos Del Formulario _Datos Del Solicitante_

Este cuadro hace referencia a los Datos del Solicitante necesarios para la creación de una OT/SS. Algunos campos son obligatorios, estos datos se reconocen y se diferencian de los demás por el carácter asterisco (*) en color rojo que antecede el nombre del campo.
Este formulario sólo es configurado por el Administrador General del **AMsi** en Información del Solicitante. Para mayor información dirigirse al capítulo Configuración **AMsi**.

**Tipo Documento:** Este campo se encuentra bloqueado y muestra el tipo de documento con el cual el usuario se puede identificar y es configurado por el Administrador General del **AMsi**. (Campo requerido).

**Nro. Documento:** Este campo se encuentra bloqueado y muestra el número de Identificación correspondiente al Tipo Documento, de la persona solicitante. (Campo requerido).

**Contraseña:** Este campo se muestra en blanco o sin diligenciar por seguridad, es posible que el usuario digite una contraseña, con el fin de cambiarla.

**Nombre Completo:** Nombre completo de la persona que solicita un servicio de mantenimiento. (Campo requerido).

**Teléfono:** Número telefónico donde se puede localizar a la persona solicitante. Generalmente corresponde a una dependencia de la organización a la cual pertenece la persona solicitante.

**Este campo permite ingresar el número telefónico de la siguiente manera:**

Indicativo del país y de la ciudad + número telefónico fijo. Ejemplo:

(572) 2345678, donde:
(572) Indica el pais Colombia y la ciudad, Cali
2345678	Indica el número de Teléfono Fijo

**Extensión:** En este campo se asigna un número de extensión telefónico donde se puede localizar a la persona solicitante.

**Dirección:** En este campo se asigna la dirección que corresponde a la organización a la cual pertenece la persona solicitante.

**Ciudad:** En este campo se asigna la ciudad en la cual vive el solicitante o está ubicada la institución para la cual labora.

**Correo Electrónico:** Dirección de correo electrónico de la persona solicitante asignado por la organización, o bien, correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

**Botón Actualizar:** Este botón permite guardar los campos del formulario Datos del Solicitante cuando el solicitante requiere modificar temporal o definitivamente algunos de sus datos básicos.

### Campos Del Formulario _Centro de Costo Autorizados_

Este cuadro permite visualizar los Centros de Costo Autorizados con información del área o dependencia que solicita un servicio de mantenimiento Centros de Costo y el Centro de Servicio al cual está asociado el Centro de Costo. Por configuración del sistema los Centros de Costos son amplios o restrictivos para la Creación de OT/SS, es decir, según los que se asocien al Solicitante. Esta asociación es configurada únicamente por el Administrador General del **AMsi**. Es posible asociar a un Solicitante Todos Los Centros de Costo de todas las compañías. Para actualizar la información del cuadro llamado Centros de Costo Autorizados, se debe realizar a través del usuario administrador del **AMsi** en la transacción de Administrar Usuarios.

**Centro de Servicio:** El campo Centro de Servicio hace referencia a las diferentes compañías creadas en el Administrador de Mantenimiento AM. Estas compañías (centros de servicios) son las directamente responsables de la ejecución de las actividades de mantenimiento al interior de la Organización. En el formulario se visualizan los Centros de Servicios a los que el solicitante está asociado.

**Centro de Costo:** Este campo es crucial para Crear una OT/SS. Se refiere al área de la organización sobre la que se realiza la creación o la consulta de la OT/SS. En el formulario se visualizan los Centros de Costos a los que el solicitante está asociado.
De todos modos para una OT/SS en particular es posible cambiar el Centro de Costo y a su vez el Centro de Servicio por parte de Mantenimiento en el AM.
Para un usuario Solicitante que tenga Todos Los Centros de Costo asociados, este formulario no se visualiza, sino que el Solicitante primero debe elegir el Centro de Servicio y de acuerdo a la compañía elegida, se muestran los Centros de Costos correspondientes.
Una vez se diligencien todos los campos de Datos del Solicitante, para guardar los cambios se da un clic al botón Actualizar, seguido a esto se muestra un mensaje de confirmación de la transacción.

![Procesar imagen](../assets/images/cap12/chp12_img05.png)
_**Imagen 5.** Mensaje de Confirmación de la actualización del perfil_
