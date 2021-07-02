---
layout: page
title: Solicitudes de Servicio (SS) por Internet e Intranet AMsi
---

## Trabajando con AMsi 

Esta sección presenta el AMsi, herramienta para generar OT y/o SS en el AM, su colaborador natural. 
Contiene información básica sobre el ingreso al aplicativo, mostrando de manera general la interfaz del usuario. Se aprende a interpretar y a usar el formulario de acceso para la creación de OT y/o SS, así como también a reconocer los comandos de los botones que aparecen en pantalla.

**Contenido**

-	Qué es AMsi  
-	Formulario Datos del Solicitante
-	Interfaz Gráfica -Formulario de Acceso a AMsi 
-	Perfiles de Usuarios AMsi

### 1.1	Qué es AMsi

AMsi es una aplicación Web que permite la Creación y de OT y/o SS por parte de usuarios pertenecientes a una organización al área de Mantenimiento. Estos registros pueden ser consultados a través de ambos aplicativos, en AMsi por parte del Solicitante como también por el Equipo Técnico en **AM**.

AMsi permite hacer notificaciones por correo electrónico por diversos conceptos de proceso. Se usa en ambientes Mono y Multicompañía, en los que el número de Usuarios Clientes de Mantenimiento pueden ser de un volumen mayor.

## 2. Interfaz gráfica de Usuario

Se define el acceso al AMsi y el formulario a diligenciar para actualizar el perfil del usuario Solicitante, la Creación y Consulta de una Solicitud de Servicio (SS) desde AMsi.
En este capítulo

-	Formulario Interfaz gráfica de Usuario 
-	Iniciar la ejecución de AMsi
-	Ventana de Menú Principal del Usuario
-	Actualizar Perfil del usuario 
-	Creación de SS
-	Consulta de SS 
-	Evaluar Servicio

### 2.1	Iniciar la ejecución de AMsi

La ejecución del AMsi se inicia dando clic al link de acceso correspondiente:

http://xxx.xxx.xx.x:8080/ServidorBD/src/AMsi/AMsi-Login.html

![Procesar imagen](../../assets/images/placeholder.jpg)
_**Imagen 1.**  Ventana Acceso AMsi_

Cuando se ha hecho el acceso exitoso al sistema se muestra la ventana de Menú Principal del Usuario.

### 2.2	Ventana de Menú Principal del Usuario

La ventana de Menú Principal del Usuario muestra las transacciones que el usuario puede realizar a través del AMsi:

![Procesar imagen](../../assets/images/placeholder.jpg)
_**Imagen 2.** Ventana Menú Principal del Usuario_

A continuación, se describen las transacciones que componen esta ventana. 

**Actualizar Perfil:** Esta opción permite que el usuario solicitante logueado pueda actualizar su información personal cuando lo requiera. 

**Crear Nueva Solicitud:** Esta opción permite la generación de las SS por parte del usuario logueado. 

**Consultar Mis Solicitudes:** Esta opción permite que el usuario logueado pueda hacer constantemente seguimiento y consultas en tiempo real de cada una de las SS que ha generado al área de Mantenimiento. 

**Cerrar Sesión:** Esta opción se usa para salir del aplicativo AMsi. 

## 3. Actualizar Perfil  
Esta transacción permite que el usuario pueda actualizar la información personal cuando lo requiera y visualizar los Centros de Costos asociados. Para acceder a esta ventana se da un clic a este botón ubicado en la ventana de Menú Principal.

![Procesar imagen](../../assets/images/placeholder.jpg)
_**Imagen 3.** Botón Actualizar Perfil_

El sistema muestra automáticamente el Detalle del Formulario para Actualizar Perfil en la ventana de Menú Principal del usuario.

![Procesar imagen](../../assets/images/placeholder.jpg)
**_Imagen 4.  Actualizar Perfil_**

A continuación, se describen los campos que componen el registro. Sobre cada campo se da una breve explicación. 

### **Campos Del Formulario _Datos Del Solicitante_**
Este cuadro hace referencia a los Datos del Solicitante necesarios para la creación de una OT/SS. Algunos campos son obligatorios, estos datos se reconocen y se diferencian de los demás por el carácter asterisco (*) en color rojo que antecede el nombre del campo.
Este formulario sólo es configurado por el Administrador General del AMsi en Información del Solicitante. Para mayor información dirigirse al capítulo Configuración AMsi.

**Tipo Documento:** Este campo se encuentra bloqueado y muestra el tipo de documento con el cual el usuario se puede identificar y es configurado por el Administrador General del AMsi. (Campo requerido).  

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

###**Campos Del Formulario Centro de Costo Autorizados**
Este cuadro permite visualizar los Centros de Costo Autorizados con información del área o dependencia que solicita un servicio de mantenimiento Centros de Costo y el Centro de Servicio al cual está asociado el Centro de Costo. Por configuración del sistema los Centros de Costos son amplios o restrictivos para la Creación de OT/SS, es decir, según los que se asocien al Solicitante. Esta asociación es configuradq únicamente por el Administrador General del AMsi. Es posible asociar a un Solicitante Todos Los Centros de Costo de todas las compañías. Para actualizar la información del cuadro llamado Centros de Costo Autorizados, se debe realizar a través del usuario administrador del AMsi en la transacción de Administrar Usuarios. 

**Centro de Servicio:** El campo Centro de Servicio hace referencia a las diferentes compañías creadas en el Administrador de Mantenimiento AM. Estas compañías (centros de servicios) son las directamente responsables de la ejecución de las actividades de mantenimiento al interior de la Organización. En el formulario se visualizan los Centros de Servicios a los que el solicitante está asociado.

**Centro de Costo:** Este campo es crucial para Crear una OT/SS. Se refiere al área de la organización sobre la que se realiza la creación o la consulta de la OT/SS. En el formulario se visualizan los Centros de Costos a los que el solicitante está asociado.
De todos modos para una OT/SS en particular es posible cambiar el Centro de Costo y a su vez el Centro de Servicio por parte de Mantenimiento en el AM.
Para un usuario Solicitante que tenga Todos Los Centros de Costo asociados, este formulario no se visualiza, sino que el Solicitante primero debe elegir el Centro de Servicio y de acuerdo a la compañía elegida, se muestran los Centros de Costos correspondientes.
Una vez se diligencien todos los campos de Datos del Solicitante, para guardar los cambios se da un clic al botón Actualizar, seguido a esto se muestra un mensaje de confirmación de la transacción.  

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 5.** Mensaje de Confirmación de la actualización del perfil_

## 4. Crear Nueva Solicitud  

Este capítulo define el formulario a diligenciar para crear una SS desde  AMsi . 
Se suministra información detallada del formulario Servicio Solicitado. Dicha información, especifica claramente el servicio solicitado así como el Centro de Servicio responsable de atender la SS creada.
Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de SS y se reconocen los comandos que aparecen en pantalla.
En este capítulo
•	Formulario Servicio Solicitado
•	Campos de Servicio Solicitado
•	Campos de Información de Activo / Equipo

Este formulario trae los datos del solicitante previamente logueado en la ventana de  acceso al AMsi. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la SS de mantenimiento. 
Para la Creación de la SS, dar clic en el siguiente botón mostrado:

![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 6.**  Crear Nueva Solicitud_

###4.1	Ventana Creación de la Solicitud de Servicio

 ![Procesar imagen](../assets/images/placeholder.jpg)
_**Imagen 7.**  Ventana Creación SS_
 
Luego de dar clic sobre el botón anterior, el sistema responde mostrando en una nueva ventana, el Detalle del Servicio a solicitar. A través de ella se ejecutan todas las funciones dedicadas a la creación de la SS. A continuación, se describen los campos que la componen, sobre cada uno se da una breve explicación:


###**Campos Del Formulario _Datos Del Solicitante_**
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

**Mensaje:** Este mensaje que se desliza, es configurado por el Administrador General del AMsi en General. Para mayor información dirigirse al capítulo Configuración AMsi. Su finalidad es notificar a los usuarios solicitantes.    

**Centro de Servicio:** Este campo permanece bloqueado y muestra la información de la compañía relacionada al Centro de Costo elegido. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. 
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se muestra desbloqueado y es posible elegir el Centro de Servicio deseado.

**Centro de Costo:** En este campo se elige de la lista desplegable el Centro de Costo al que se le va a realizar la SS. Al seleccionar el Centro de Costo, se muestra automáticamente en el campo Centro de Servicio, el nombre del Centro de Servicio al cual está asociado el Centro de Costo seleccionado. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. Solo se listan los Centros de Costo que el usuario solicitante tenga  asociados. 
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se listan únicamente los Centros de Costo existentes en el Centro de Servicio seleccionado. 

**Descripción:** En este campo se digita en forma detallada el servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.

**Activo/Equipo:** En este campo se ingresa el Activo/Equipo de la organización que requiere atención de mantenimiento. Dependiendo de la configuración, este campo se puede habilitar 
**(1)** para describir el equipo en lenguaje natural o **(2)** para seleccionarlo de la lista que se despliega dando clic al ícono de filtro azul (Triángulo Invertido) que se encuentra en la parte derecha del campo. La lista desplegada incluye los Activos/Equipos creados previamente en el AM y que a la vez están asociados al Centro de Costo de la compañía correspondiente.
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

**Botón Cerrar Sesión:** Este botón permite salir de la aplicación AMsi .  

## 5. Consultar Mis Solicitudes
Este capítulo guía para ejecutar consultas de SS creadas desde AMsi. 

AMsi solo permite realizar creación y consultas para uno de los dos tipos de registro a la vez: OT o SS, pero no para los dos simultáneamente. Ello depende de la Configuración del aplicativo que se haya elegido, según la necesidad de la Organización.

La Configuración del AMsi se describe en detalle en el Capítulo 9 de este manual.

**En este capítulo**
•	Subgrupos
•	Consulta de Solicitudes
•	Visor de Solicitudes

### 5.1 Subgrupos 
Inicialmente esta transacción trae el listado del total de las SS que se han realizado para la Organización por parte de otros usuarios solicitantes.
En el caso de que el Administrador del AMsi haya asociado Todos los Centros de Costos al Usuario logueado, se mostrarán todas las SS para todos los Centros De Servicio (compañías).
Sin embargo, es posible hacer Subgrupos (búsquedas específicas) a través del ícono de triángulo invertido superior derecho y ver solo las SS creadas por el Usuario logueado. Esto tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus SS. A esta ventana se llega al dar clic a la opción de Consultar Mis Solicitudes en la ventana de Menú Principal.  

![Procesar imagen](../assets/images/placeholder.jpg)
**_Imagen 9.  Consultar Mis Solicitudes_**

AMsi mantiene activo cualquier subgrupo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono se muestra con una pelota roja, está indicando que lo que se visualiza en el visor es un subgrupo. El sistema permite entonces hacer selección de un grupo de SS de acuerdo con los criterios seleccionados.

Una vez dado un clic sobre el ícono de subgrupos, se muestran los siguientes criterios de búsqueda:

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de AMsi son los siguientes:

1.	FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO

AC - Código: Esta selección agrupa las SS cuyo Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. 

AC-Descripción: Selecciona las SS asociadas a los Activos según criterios que se fundamenten en su descripción.  Ejemplo: Motor selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

Activo en lenguaje natural: Permite filtrar las SS que contengan parte del nombre igual del Activo.


2.	FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO

Centro de Costo: Permite la selección de SS de acuerdo con  el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono de candado y digitando a continuación segmentos del nombre del Centro de Costo usando comodines (%). Cuando se utilizan comodines, es posible seleccionar las SS pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% selecciona todos los registros en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

Diagnóstico del Usuario: Permite la selección de SS de acuerdo con una parte de la Descripción del usuario. Se debe digitar manualmente y es posible usar comodines.

Rango Consecutivo de Solicitud: Permite la selección de las SS cuyo número consecutivo se encuentre incluido dentro  del  rango  especificado en  este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de solicitud. 

Estado de la Solicitud: Este criterio agrupa las SS de acuerdo al Estado que se encuentra en el visor, en este campo se debe poner la abreviatura del estado de la SS, siendo los siguientes: Análisis (AN), Asignada (AS), En Ejecución (EJ), Cerrada no ejecutada (NE), Cerrada Ejecutada (CE), Cerrada con OT (CO), Cerrada Parcial (CP).

FF de Creación: Permite la selección de SS cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo.

Solicitante (AMsi): Este campo permite seleccionar las SS activas para el Solicitante aquí definido. Para seleccionarlo se debe  elegir un usuario de la lista desplegable.

Responsable: Permite la  selección de SS cuyo Responsable  fue especificado en este campo. Es posible usar comodines (%).

Ubicación  física: Permite la selección de  las SS cuyo Activo esté en la  ubicación física que se determina en este criterio. Es posible digitar una parte y usar comodines (%).


5.2 Consulta de Solicitudes
Para realizar la consulta de una SS, basta con dar clic a uno de los registros de las SS listadas, y a continuación se muestra en detalle toda la información allí contenida.
 
Imagen 10.  Ventana Detalle de la SS

Este visor contiene la siguiente información:
Datos Generales:
•	El número de la SS
•	La fecha y hora de creación de la SS
•	  El nombre del Estado en el que se encuentra la SS. Este estado solo es    
  modificable desde el  AM por el encargado del área de mantenimiento de la    
  organización.
•	El nombre del Responsable ejecutor del mantenimiento. 
•	Nombre del Solicitante. Este nombre puede ser puede ser cambiado desde AM por el encargado del área de mantenimiento de la organización. 
•	Email de la persona solicitante.
Datos del Usuario: Datos suministrados en el formulario de Actualizar Perfil del AMsi :
•	Documento de identidad
•	Nombre 
•	Dirección
•	Ciudad
•	Correo Electrónico
•	Teléfono
•	Centro de Servicio


Solicitud 

•	      Descripción Solicitud
•	      Activo / Equipo
•	      Centro de Costo
•	      Ubicación Física
•	      Causa de Falla
•	      Tipo de Mantenimiento
•	      Tipo de Actividad 
    
Fechas y Horas: Estos campos solo son modificables desde el módulo SS del AM. En estos campos aparecen las fechas de atención, inicio de trabajo, fin de trabajo y cierre de la SS.
Estos campos solo son manipulados por los encargados del área de mantenimiento de las diferentes compañías creadas en el AM
•	F/H Atención
•	F/H Inicio Trabajo
•	F/H Fin de Trabajo
•	F/H Cierre

Evaluar el servicio: Contiene el resultado de la Evaluación de la SS, si ya se realizó y si no se ha realizado, permite realizarla siempre y cuando la SS/OT se encuentre en estado Cerrada Ejecutada (CE) o Cerrada con OT (CO) y cuando el usuario sea el mismo en el campo Solicitante.
Comentario: El campo comentario es un campo que no es modificable. A través de este visor que muestra el Detalle de la SS, es posible que el usuario realice comentarios relevantes e importantes para el área de Mantenimiento. Para realizar los comentarios, se debe dirigir al final de la Ventana Detalle de la SS y digitar el comentario en el campo llamado “Comentario”, para agregarlo a la SS se debe dar clic al botón Agregar Comentario. Al dar clic al botón “Agregar Comentario” aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario. Estos comentarios también se visualizan desde el módulo de Solicitudes de Servicio de AM
 
Imagen 11.  Ventana Detalle de la SS (Comentarios)
6.	 Evaluar Servicio  
Es posible realizar la Evaluación del Servicio únicamente a todas las SS/OT que tengan el estado CE (Cerrada Ejecutada) y debe cumplirse la condición de que el campo solicitante coincida con el usuario logueado. Para continuar, dar clic a la opción de Consultar Mis Solicitudes/Órdenes, luego dar clic al registro de la SS/OT que se desea evaluar y en la ventana Detalle, en la sección de Evaluar Servicio, se encuentran habilitadas las preguntas y las opciones de respuesta. Para finalizar, se debe dar clic al botón Guardar Evaluación.  
Imagen 12.  Evaluar Servicio
Una vez guardada la evaluación del servicio, se muestra un mensaje de confirmación de la transacción.  
 
Imagen 13.  Mensaje de confirmación de la evaluación del Servicio

7.	 Crear Nueva Orden 
Este capítulo define el formulario a diligenciar para la generación de una Orden de Trabajo (OT) desde AMsi. 
Se suministra información detallada del formulario Servicio Solicitado. Dicha información, especifica claramente el servicio solicitado, así como también el Centro de Servicio responsable de atender la OT creada.
Se identifican los campos relacionados en el formulario Servicio Solicitado para la creación de OT, y se reconocen los comandos que aparecen en pantalla.
En este capítulo
•	Formulario Servicio Solicitado.
•	Campos de Servicio Solicitado
•	Campos de Información de Activo / Equipo
Este formulario trae los datos del solicitante previamente logueado en la ventana de acceso al AMsi. Contiene la información personal del solicitante, información del servicio solicitado, información del Activo/Equipo objeto de la OT de mantenimiento. 
Todos los campos marcados con asterisco (*) son de carácter obligatorio. 
Una vez ingresados los datos del solicitante de manera correcta en el botón del Menú principal Actualizar Perfil, continuar dando un clic a la siguiente opción ubicada al lado derecho para continuar con la Creación de la OT. 
 
Imagen 14.  Crear Nueva Orden  
7.1	Ventana Creación de la Orden de Trabajo

 Imagen 15.  Ventana Creación OT
A esta ventana se llega haciendo clic sobre la opción Crear Nueva Orden del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a la creación de la OT. A continuación, se describen los campos que componen esta ventana de Creación de OT. Sobre cada campo se da una breve explicación.

Campos Del Formulario Datos Del Solicitante
Este cuadro es informativo y hace referencia a los Datos del Solicitante necesarios para la creación de una OT y que fueron ingresados en Actualizar Perfil visto en el tercer capítulo. Contiene la información personal del solicitante y todos los campos se encuentran bloqueados. 
Nro. Documento: Este campo muestra el número de Identificación de la persona solicitante. 
Nombre Completo: Este campo muestra el Nombre completo de la persona que solicita un servicio de mantenimiento.
Teléfono: Este campo muestra el Número telefónico donde se puede localizar a la persona solicitante.
Dirección: Este campo muestra la dirección asignada y que corresponde a la organización a la cual pertenece la persona solicitante.  
Ciudad: Este campo muestra la ciudad asignada y en la cual vive el solicitante o está ubicada la institución para la cual labora. 
Correo Electrónico: Este campo muestra la Dirección de correo electrónico asignada a la persona solicitante por la organización, o bien, correo personal del solicitante en caso de no tener una cuenta de correo electrónico corporativa.

Campos Del Formulario Servicio Solicitado 
El formulario Servicio Solicitado  hace referencia a los datos de la OT que se está creando.
Todos los campos marcados con asterisco (*) son de carácter obligatorio. 
Mensaje: Este mensaje que se desliza, es configurado por el Administrador General del AMsi en General. Para mayor información dirigirse al capítulo Configuración AMsi. Su finalidad es notificar a los usuarios solicitantes.    
Centro de Servicio: Este campo permanece bloqueado y muestra la información de la compañía relacionada al Centro de Costo elegido. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. 
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se muestra desbloqueado y es posible elegir el Centro de Servicio deseado.  
Centro de Costo: En este campo se elige de la lista desplegable el Centro de Costo para la OT. Al elegir un Centro de Costo, se muestra automáticamente en el campo Centro de Servicio, el nombre del Centro de Servicio al cual está asociado el Centro de Costo seleccionado. Esto, para usuarios que tengan relacionado uno o varios Centros de Costos de una o varias compañías. Solo se listan los Centros de Costo que el usuario solicitante tenga  asociados. 
En caso de ser un usuario que tenga asociado Todos Los Centros de Costo, este campo se listan únicamente los Centros de Costo existentes en el Centro de Servicio seleccionado. 
Descripción: En este campo se digita la descripción detallada del servicio de mantenimiento requerido. Se detalla el problema, inconveniente, necesidad o avería a ser atendida.
Activo/Equipo: En este campo se selecciona el Activo/Equipo de la organización que requiere atención de mantenimiento a través del ícono azul (triángulo invertido) que se encuentra en la parte derecha del campo. La lista desplegada incluye los Activos/Equipos creados previamente en el  AM y los que están asociados al Centro de Costo de la compañía correspondiente.
Existe control en todos los casos sobre el Centro de Costo, es decir, solo se despliegan o se permiten elegir Activos/Equipos que estén asociados al Centro de Costo definido en el campo Centro de Costo.
Para seleccionar el Activo/Equipo se da clic en el icono de filtro azul (triángulo invertido) ubicado al lado derecho de este campo, inmediatamente se abre una nueva ventana del visor de Activos/Equipos, luego de elegirlo se observa que aparece el código del Activo/Equipo. 
Descripción: Este campo permanece bloqueado y muestra la descripción del Activo/Equipo seleccionado.      
Prioridad: Este campo viene predefinido con las prioridades Alta, Media y Baja. Lo utiliza el programador de mantenimiento como guía para establecer la agilidad (normal o priorizada) en la asignación del recurso humano de mantenimiento para la ejecución del trabajo solicitado.
F/H Tentativa del Usuario: En este campo se asigna una fecha y hora que el usuario solicitante considere que el área de Mantenimiento le haga entrega de la OT realizada. Es un campo opcional de diligenciar. 
Botón Enviar: Este botón envía inmediatamente la OT a la base de datos del AM para ser revisada por el área de mantenimiento encargada y proceder así con su análisis y asignación. 
Una vez enviada la OT, el sistema muestra un mensaje de notificación de registro exitoso. Se habilitan además las opciones de Crear Nueva Orden y Consultar Mis Órdenes, como se indica a continuación:
 
                                   Imagen 16.  Mensaje registro OT

Botón Crear Nueva Orden: Se usa para crear nuevas OT. Aplica cuando se acaba de enviar una OT y se desea generar un nuevo registro en esa misma ventana.
Botón Consultar Mis Órdenes: Este botón lo remite a una nueva ventana en la que puede realizar búsquedas y consultas de OT creadas previamente. Para mayor información al respecto se detalla en la sección de “Consultar Mis Órdenes” de este manual.
Botón Inicio: Este botón lleva a la ventana de Menú Principal del Usuario.
Botón Cerrar Sesión: Este botón permite salir del aplicativo AMsi .  

8.	Consultar Mis Órdenes   
Este capítulo guía para ejecutar consultas de OT creadas desde AMsi. Se hace una ilustración sobre los comandos que aparecen en pantalla.
AMsi solo permite realizar creación y consultas para uno de los dos tipos de registro a la vez: OT o SS, pero no para los dos simultáneamente. Ello depende de la Configuración del aplicativo que se haya elegido, según la necesidad de la Organización.
La Configuración del AMsi se describe en detalle en el Capítulo 9 de este manual.
En este capítulo
•	Subgrupos
•	Consulta de Órdenes
•	Visor de Órdenes

Esta transacción trae el listado de las OT que ha realizado el usuario solicitante. Tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus OT. A esta ventana se llega al dar clic a la opción de Consultar Mis Órdenes en la ventana de Menú Principal.  
 
Imagen 17.  Consultar Mis Órdenes  
8.1 Subgrupos 
Inicialmente esta transacción trae el listado del total de las OT que se han realizado para la Organización por parte de otros usuarios solicitantes.
En el caso de que el Administrador del AMsi haya asociado Todos los Centros de Costos al Usuario logueado, se mostrarán todas las OT para todos los Centros De Servicio (compañías).
Sin embargo, es posible hacer Subgrupos (búsquedas específicas) a través del ícono de triángulo invertido superior derecho y ver solo las OT creadas por el Usuario logueado. Esto tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus OT. A esta ventana se llega al dar clic a la opción de Consultar Mis Órdenes en la ventana de Menú Principal.  









AMsi mantiene activo cualquier subgrupo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono se muestra con una pelota roja, está indicando que lo que se visualiza en el visor es un subgrupo. El sistema permite entonces hacer selección de un grupo de OT de acuerdo con los criterios seleccionados.

Una vez dado un clic sobre el ícono de subgrupos, se muestran los siguientes criterios de búsqueda:







Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de AMsi son los siguientes:

3.	FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO

AC - Código: Esta selección agrupa las OT cuyo Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. 

AC-Descripción: Selecciona las OT asociadas a los Activos según criterios que se fundamenten en su descripción.  Ejemplo: Motor selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.


4.	FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO

Centro de Costo: Permite la selección de OT de acuerdo con  el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono de candado y digitando a continuación segmentos del nombre del Centro de Costo usando comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% selecciona todos los registros en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

Descripción: Permite la selección de OT de acuerdo con una parte del diagnóstico del usuario. Se debe digitar manualmente y es posible usar comodines.

Número de la OT: Permite la selección de las OT cuyo número consecutivo se encuentre incluido dentro  del  rango  especificado en  este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de la OT. 

Estado de la Orden: Este criterio agrupa las OT de acuerdo al Estado que se encuentra en el visor, en este campo se debe poner la abreviatura del estado de la SS, siendo los siguientes: En Ejecución (EJ), Cerrada o no ejecutada (K), Cerrada Ejecutada (CE),Pendiente de Ejecución (P), Planeada (PL), Programada (PR) Cerrada Parcial (CP).

FF de Creación: Permite la selección de OT cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de la OT.

Solicitante (AMsi): Este campo permite seleccionar las OT activas para el Solicitante aquí definidos. Para seleccionarlo se debe  elegir un usuario de la lista desplegable. 

Responsable: Permite la  selección de las OT cuyo Responsable  fue especificado en este campo. Es posible usar comodines (%).

Ubicación  física: Permite la selección de  las SS cuyo Activo esté en la  ubicación física que se determina en este criterio. Es posible digitar una parte y usar comodines (%).

8.2  Consulta de Órdenes
Para realizar la consulta de una OT, basta con dar clic a uno de los registros de las OT listadas, y a continuación se muestra en detalle toda la información allí contenida.

Imagen 18.  Ventana Detalle de la OT
Este visor contiene la siguiente información:
Datos Generales:
•	El número de la OT
•	La fecha y hora de creación de la OT
•	  El nombre del Estado en el que se encuentra la OT. Este estado solo es    
  modificable desde el  AM por el encargado del área de mantenimiento de la    
  organización.
•	  El nombre del Responsable ejecutor del mantenimiento. Este nombre puede  ser puede ser cambiado desde AM por el encargado del área de mantenimiento de la organización.
•	Nombre del Solicitante
•	Email del Solicitante
Datos Del Usuario: Datos suministrados en el formulario de Actualizar Perfil del  AMsi :
•	Documento de identidad
•	Nombre 
•	Dirección
•	Ciudad
•	Correo Electrónico
•	Teléfono
•	Centro de Servicio

Orden de Trabajo

•	      Descripción de la Orden 
•	      Activo / Equipo
•	      Centro de Costo
•	      Ubicación Física
•	      Causa de Falla
•	      Tipo de Mantenimiento
•	      Tipo de Actividad 
    
Fechas y Horas: Estos campos solo son modificables desde el módulo OT del AM. En estos campos aparecen las fechas y horas Atención, Inicio de Trabajo, Fin de Trabajo y  Fecha Cierre de la OT.
Estos campos solo son manipulados por los encargados del área de mantenimiento de las diferentes compañías creadas en el AM.
•	F/H Atención
•	F/H Inicio Trabajo
•	F/H Fin de Trabajo
•	F/H Cierre

Evaluar el servicio: Contiene el resultado de la Evaluación de la OT, si ya se realizó y si no se ha realizado, permite realizarla, siempre que esté en estado Cerrada Ejecutada y mientras el campo Solicitante coincida con los campos Datos del Usuario.
Comentario: El campo comentario es un campo que no es modificable. A través de este visor que muestra el Detalle de la OT, es posible que el usuario realice comentarios relevantes e importantes para el área de Mantenimiento. Para realizar los comentarios, se debe dirigir al final de la Ventana Detalle de la OT y digitar el comentario en el campo llamado “Comentario”, para agregarlo a la OT se debe dar clic al botón Agregar Comentario. Al dar clic al botón “Agregar Comentario” aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario. Estos comentarios también se visualizan desde el módulo de Ordenes de  AM.


















Imagen 19.  Ventana Detalle de la OT (Comentarios)

9.	 Configuración AMsi    
Este capítulo, orientado al Administrador General del AMsi, se concentra en la funcionalidad de la opción Configuración.
Se definen los criterios, preferencias, particularidades y modos de visualización sobre la información disponible en los formularios básicos del aplicativo al igual que los permisos y parametrización general del mismo. También, se incluye la administración sobre los usuarios de AMsi. 
En este capítulo
•	Acceso al modo Configuración 
•	Configuración General
•	Información del Solicitante
•	Configuración Servicio Solicitado
•	Configuración Identificación de Activo
•	Configuración Seguridad
•	Finalizando la Configuración
•	Administrar Usuarios



9.1	Acceso al modo Configuración

Como se indicó al inicio de este capítulo, sólo el Administrador encargado del  AMsi  puede acceder a esta sección del aplicativo. WIN Software suministra los datos de acceso una vez se instale el aplicativo en la Infraestructura del Cliente.
Para poder ingresar a la configuración de  AMsi , el Administrador debe conocer el nombre de usuario y contraseña del Administrador del aplicativo. Tales datos se ingresan en la ventana de acceso.
 
Imagen 20. Ventana Acceso AMsi
Una vez se ingrese el Usuario y la Contraseña de manera correcta, se puede observar el Menú Principal del Usuario Administrador del  AMsi .


9.2	Ventana de Menú Principal del Usuario Administrador

La ventana de Menú Principal del Usuario Administrador muestra las transacciones que el usuario puede realizar a través del AMsi. 
 
Imagen 21.  Ventana Menú Principal del Usuario Administrador
A continuación, se describen las transacciones que componen esta ventana. 

Configuración: Esta opción permite configurar los criterios, preferencias, particularidades y modos de visualización sobre la información disponible en los formularios básicos del aplicativo al igual que los permisos y parametrización general del mismo. 
Administrar Usuarios: Esta opción permite la creación de los usuarios que ingresarán al  AMsi , registro de información específica del usuario y la asociación de los Centros de Costo. 

Cerrar Sesión: Esta opción se usa para salir del aplicativo  AMsi . 


10.	Configuración    
Este capítulo guía para configurar la funcionalidad de  AMsi  respecto a la apariencia que tiene el sistema, sus campos requeridos y la forma en la que se seleccionan algunos de sus componentes.
En este capítulo
•	Configuración General
•	Información del Solicitante
•	Configuración Servicio Solicitado
•	Configuración Identificación de Activo
•	Configuración Seguridad
Una vez ingresados los datos del usuario administrador, dar clic a este botón ubicado en la ventana de Menú Principal para continuar con la Configuración de  AMsi .  
 
Imagen 22.  Configuración 
A continuación se detallan cada uno de los componentes activos de la Ventana de Configuración del  AMsi . Para acceder a esta opción se da clic a la opción Configuración en la ventana de Menú Principal.  
 
Imagen 23.  Configuración de AMsi

Botón Inicio: Este botón lleva a la ventana de Menú Principal del Usuario Administrador.
Botón Cerrar Sesión: Este botón permite salir del aplicativo  AMsi .  


10.1	 Configuración General

Los componentes de la ventana de Configuración General son los que se muestran a continuación. Sobre cada componente se da una breve explicación.  
 
Imagen 24.  Configuración General

Imagen para la cabecera: Se usa para configurar el logo del Cliente, que se visualiza en las diferentes pantallas del  AMsi . Se recomienda que el logo tenga formato .jpg , .png , .gif o .pdf ; con el objetivo de agilizar la carga del aplicativo Web.
Al dar clic sobre el botón Seleccionar Archivo se abre una nueva ventana para realizar la búsqueda en disco del logo del Cliente. Luego de seleccionar el archivo, se observa que el nombre del archivo se visualiza al lado del campo seleccionar archivo. 
  
Imagen 25.  Imagen para la cabecera
Mensaje en la ventana de registro de la solicitud: En este campo se digita un mensaje que se desliza y aparece en la parte superior del formulario de Servicio Solicitado. Este campo permite hasta 500 caracteres. 
 
Imagen 26.  Mensaje en la ventana registro de la solicitud
Generar automáticamente Órdenes al guardar la solicitud: Indica que el aplicativo se usa para la creación de Órdenes de Trabajo en lugar de crear Solicitudes de Servicio. En tal caso, los botones de Crear Nueva Solicitud y Consultar Mis Solicitudes cambian a Crear Nueva Orden y Consultar Mis Ordenes respectivamente. El sistema entonces cambia su funcionalidad para Crear y Consultar Órdenes de Trabajo.
 
Imagen 27.  Generar automáticamente Ordenes al guardar la solicitud
Los solicitantes son: 
•	Internos (Empleados, Visitantes)
Exige el campo “Centro de Costo”.  
•	Externos (Clientes ,Proveedores)
Se elimina el campo “Centro de Costo”, exigiendo en su defecto el campo NIT seguido del nombre de la Empresa.
 
Imagen 28.  Solicitantes internos o externos

10.2	 Información del Solicitante

En esta ventana se configuran los campos que serán exigidos en la sección Datos del Solicitante. Los componentes de la ventana de Información del Solicitante son los que se muestran a continuación. Sobre cada componente se da una breve explicación.  
 
Imagen 29.  Información del Solicitante 

¿El Teléfono es requerido?: Marcar SI indica que este campo es obligatorio y se identifican con un asterisco * de color rojo entre paréntesis que antecede el nombre del campo. Además, indica que debe ser llenado por los usuarios. Marcar NO implica dejar el campo a manera opcional de diligenciamiento para el solicitante al momento de actualizar la información dese Actualizar Perfil o para el usuario administrador al momento de crear y actualizar los usuarios.
 
Imagen 30.  Teléfono requerido 
¿La Extensión es requerida?: Marcar SI indica que este campo es obligatorio y se identifican con un asterisco * de color rojo entre paréntesis que antecede el nombre del campo. Además, indica que debe ser llenado por los usuarios. Marcar NO implica dejar el campo a manera opcional de diligenciamiento para el solicitante al momento de actualizar la información dese Actualizar Perfil o para el usuario administrador al momento de crear y actualizar los usuarios.
 
Imagen 31.  Extensión requerida 
¿La Dirección es requerida?: Marcar SI indica que este campo es obligatorio y se identifican con un asterisco * de color rojo entre paréntesis que antecede el nombre del campo. Además, indica que debe ser llenado por los usuarios. Marcar NO implica dejar el campo a manera opcional de diligenciamiento para el solicitante al momento de actualizar la información dese Actualizar Perfil o para el usuario administrador al momento de crear y actualizar los usuarios.
 
Imagen 32.  Dirección requerida 
¿La Ciudad es requerida?: Marcar SI indica que este campo es obligatorio y se identifican con un asterisco * de color rojo entre paréntesis que antecede el nombre del campo. Además, indica que debe ser llenado por los usuarios. Marcar NO implica dejar el campo a manera opcional de diligenciamiento para el solicitante al momento de actualizar la información dese Actualizar Perfil o para el usuario administrador al momento de crear y actualizar los usuarios.
 
Imagen 33.  Ciudad requerida
¿El Correo Electrónico es requerido?: Marcar SI indica que este campo es obligatorio y se identifican con un asterisco * de color rojo entre paréntesis que antecede el nombre del campo. Además, indica que debe ser llenado por los usuarios. Marcar NO implica dejar el campo a manera opcional de diligenciamiento para el solicitante al momento de actualizar la información dese Actualizar Perfil o para el usuario administrador al momento de crear y actualizar los usuarios.
 
Imagen 34.  Correo Electrónico requerido 

10.3	 Servicio Solicitado 

En esta ventana se configuran los campos que serán exigidos en la sección Servicio Solicitado. Los componentes de la ventana de Servicio Solicitado son los que se muestran a continuación. Sobre cada componente se da una breve explicación. 
 
Imagen 35. Servicio Solicitado 
¿Cómo nombrar las compañías?: Se refiere a los nombres de las Compañías creadas en el AM, es decir, los Centros de Servicio responsables de las diferentes actividades de mantenimiento del Cliente. Por defecto ellas son nombradas como Centro de Servicio y pueden ser renombradas a gusto según la cultura del Cliente.
¿Cómo nombrar el Activo?: Se refiere al nombre del campo que describe el   Activo/Equipo que es objeto del servicio en la OT y/o SS. Por defecto ellos son nombrados Activo / Equipo y puede ser cambiado a un nombre que sea más significativo según la cultura de la compañía.
¿Cómo nombrar la prioridad Alta?: Se refiere a los tipos de prioridades creadas en el AM. Por defecto este campo es nombrado como Emergente y puede ser cambiado a un nombre que sea más significativo dentro de la Compañía. 
¿Cómo nombrar la prioridad media?: Se refiere a los tipos de prioridades creadas en el AM. Por defecto este campo es nombrado como Urgente y puede ser cambiado a un nombre que sea más significativo dentro de la Compañía. 
¿Cómo nombrar la prioridad baja?: Se refiere a los tipos de prioridades creadas en el AM. Por defecto este campo es nombrado como Normal y puede ser cambiado a un nombre que sea más significativo dentro de la Compañía. 

10.4	 Identificación del Activo 

En esta ventana se configuran las opciones correspondientes para el campo de Activo / Equipo en el formulario Servicio Solicitado, en el proceso de creación de una SS y/o OT. Los componentes de la ventana de Identificación del Activo son los que se muestran a continuación. Sobre cada componente se da una breve explicación. 
 
Imagen 36. Identificación del Activo 

¿Desea describir el Activo en lenguaje natural?: Elegir SI en este botón, habilita un checkbox al extremo izquierdo del campo Activo / Equipo. Al chequear este cuadro, inmediatamente se habilitan dos campos que pueden ser diligenciados. El primer campo es para describir en lenguaje natural el Activo o Equipo hasta con 50 caracteres, y el segundo campo es para describir también en lenguaje natural la ubicación física del Activo o Equipo referenciado hasta con 50 caracteres. De elegir NO, quedará disponible para definir el código de Activo/Equipo solamente del icono de filtro azul y seleccionarlo del visor de Activos. Es de tener en cuenta que cuando se elige la opción para crear Órdenes, esta opción no es posible cambiarla.
¿La ubicación física es requerida?: Elegir SI indica que éste es un campo obligatorio que debe ser llenado por los usuarios en el formulario Información de la Solicitud. Marcar NO implica que el campo tiene un uso opcional de diligenciamiento para el solicitante. 
Si el Activo/Equipo es seleccionado de una lista o ingresado con su respectivo código, el campo Ubicación Física se llena automáticamente en cada caso. Mientras que, si el Activo/Equipo es escrito en lenguaje natural, el campo Ubicación Física queda habilitado para ser diligenciado por el solicitante. Es de tener en cuenta que cuando se elige la opción para crear Órdenes, esta opción no es posible cambiarla.

10.5	 Seguridad 

En esta ventana se establece el Usuario y Contraseña del Administrador del  AMsi , además se configuran los servidores de correo con usuarios y contraseñas. Los componentes de la ventana de Seguridad son los que se muestran a continuación. Sobre cada componente se da una breve explicación:
 
Imagen 37. Seguridad

Usuario Administrador: En este campo se define el usuario Administrador con el cual se accede al sistema para la Configuración de AMsi.
Contraseña: En este campo se asigna una Contraseña para el usuario Administrador, con el fin de acceder a la Configuración de AMsi. La Contraseña se muestra en blanco o sin diligenciar por seguridad. 
Servidor de Correo: En este campo se ubica el servidor de correo de la organización, para habilitar la funcionalidad de envíos por correo.
Usuario de Correo: En este campo se indica un usuario de correo bajo una estructura válida de una cuenta de correo. Es la cuenta origen desde la que serán enviados los correos de notificación.
Contraseña de Correo: En este campo se define la Contraseña con la cual se accede a la cuenta de correo ubicada en el campo anterior.
Utiliza cifrado (SSL): En este campo se habilita la seguridad integrada del cifrado (SSL). Por defecto esta opción es configurado como NO. 
•	Si
•	No

10.6	 Finalizando la Configuración

Una vez realizadas las modificaciones, dar clic al botón Actualizar ubicado al final de esta ventana para guardar la nueva configuración de AMsi, el sistema inmediatamente vuelve a la ventana de Menú Principal del Usuario Administrador. 
 
Imagen 38. Actualizar Configuración de AMsi

11.	Administrar Usuarios   
Este capítulo orienta en la creación y actualización de datos del usuario, además de la asociación de uno, varios o todos los centros de costo de una o varias compañías, para que los usuarios solicitantes puedan crear SS y/o OT desde  AMsi . Se hace de igual forma una ilustración sobre los comandos que aparecen en pantalla.
En este capítulo
•	Creación de Usuarios
•	Actualización de Usuarios 
•	Asociar Centros de Costo

Una vez ingresados los datos del usuario administrador de manera correcta, dar clic a este botón ubicado en la ventana de Menú Principal para continuar con la Administración de los Usuarios de  AMsi .  
 
Imagen 39. Administrar Usuarios 

11.1	 Ventana Visor de Usuarios

 
Imagen 40.  Ventana Visor de Usuarios 
A esta ventana se llega haciendo clic sobre la opción Administrar Usuarios del Menú Principal.

Es la ventana en la que se lista el total de los usuarios registrados en el  AMsi . 

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado.  

Para elegir un registro de la tabla se da un clic sobre él. 

En la parte superior izquierda de esta ventana se observa la identificación actual de la opción seleccionada desde el Menú Principal del Usuario Administrador. También, al lado derecho de esta sección, se encuentra el botón “Nuevo” con el fin de acceder rápidamente a la ventana Detalle con el fin de ingresar un nuevo registro o usuario.

En la parte superior derecha se encuentran dos opciones, para dirigirse a la ventana de Inicio y Cerrar Sesión de la aplicación.   

En la parte inferior izquierda de esta ventana se encuentra el número de registros por página que se quieren visualizar, además de la cantidad de registros totales que conforman la tabla. 

En  la  parte inferior  derecha de esta ventana se observan también varios enlaces para  navegar avanzando y retrocediendo páginas completas de registros. Como guía existe un indicador sobre la página relativa actual y la posibilidad de ingresar a la primera o última página, sin importar la página en la que se encuentre. 




11.2	 Ventana Detalle de Usuarios

 
Imagen 41.  Ventana Detalle de Usuarios 

Es  la  porción  de  la  pantalla  en  que  se  muestran  los  datos  detallados  del   usuario seleccionado en la ventana Visor. 

Además de la información detallada de un usuario, contiene dos botones y son el botón de “Nuevo” y “Actualizar”; que siempre están en la parte superior izquierda de la ventana.

El botón “Nuevo” prepara la ventana Detalle para el ingreso de un nuevo registro. Al activar el botón “Nuevo”, el sistema reemplaza la línea de 2 botones por una nueva de 2 botones: “Insertar” y “Cancelar”. El botón “Insertar” ingresa el nuevo registro a la base de datos actualizando la ventana Visor, mientras que el botón “Cancelar” aborta el proceso de creación del nuevo registro retornando a la ventana Detalle.

El botón “Actualizar” sirve para guardar o salvar en la base de datos la información que se ha modificado en la ventana Detalle, correspondiente al registro señalado por el cursor en la ventana Visor y registrar allí simultáneamente el mismo cambio. 

En la parte superior izquierda de esta ventana se observa la identificación actual de la opción seleccionada desde el Menú Principal del Usuario Administrador. 

Para salir de la ventana Detalle se puede dar clic en la parte de afuera de esta ventana, la cual lleva a la ventana Visor.  










11.3	 Creación de Usuarios

 
Imagen 42.  Creación de Usuarios 

A esta ventana se llega haciendo clic sobre el botón “Nuevo” de la ventana detalle del usuario. A través de ella se diligencian los Datos del Usuario y los Centros de Costo para la creación del usuario de  AMsi . A continuación, se describen los campos que componen esta ventana de Creación de Usuarios. Sobre cada campo se da una breve explicación.

Campos Del Formulario Datos Del Usuario
Este cuadro hace referencia a los Datos del Usuario solicitante necesario para la creación del mismo y son los que aparecerán en la sección de Datos del Solicitante en Actualizar Perfil y Crear Nueva Solicitud o Crear Nueva Orden. Contiene la información personal del solicitante y todos los campos se encuentran bloqueados. 
El formulario Datos del Usuario  hace referencia a los datos del usuario solicitante que se está creando.
Todos los campos marcados con asterisco (*) son de carácter obligatorio. 
Tipo Documento: En este campo se elige de la lista desplegada el tipo de documento con el cual el usuario se puede identificar. (Campo requerido).  
Nro. Documento: En este campo se define el número de Identificación correspondiente al Tipo Documento, del usuario solicitante. (Campo requerido).
Contraseña: En este campo se define la contraseña, con el fin de que el usuario que se está registrando pueda acceder al  AMsi . (Campo requerido).  
Nombre Completo: En este campo se digita el nombre completo del usuario solicitante. (Campo requerido).
Teléfono: En este campo se define el número telefónico donde se puede localizar al usuario solicitante. El número telefónico generalmente corresponde a una dependencia de la organización a la cual pertenece al usuario solicitante.
Este campo permite ingresar el número telefónico de la siguiente manera:
Indicativo del país y de la ciudad + número telefónico fijo. Ejemplo: 
(572)2345678          donde: 
572 		Colombia, Cali
2345678	Número de Teléfono Fijo
Extensión: En este campo se asigna un número de extensión telefónico donde se puede localizar al usuario solicitante.                                    
Dirección: En este campo se asigna la dirección que corresponde a la organización a la cual pertenece al usuario solicitante.  
Ciudad: En este campo se asigna la ciudad en la cual vive el usuario solicitante o está ubicada la institución para la cual labora. 
Correo Electrónico: Dirección de correo electrónico del usuario solicitante asignado por la organización, o bien, correo personal del usuario solicitante en caso de no tener una cuenta de correo electrónico corporativa.
Todos los Centros de Costo: Este cuadro de chequeo (checkbox) permite asociarle al usuario todos los centros de costo de todas las compañías existentes en AM, al chequearlo se ocultan los cuadros para asociar uno o varios centros de costo, que están en la parte inferior de la ventana.   
Cuadros de Asociación de Centros de Costo: Está estructurado por un campo para seleccionar la compañía y dos cuadros ubicados en la parte inferior de esta ventana. 

En el campo se selecciona la compañía deseada, con el fin de que en el cuadro de la izquierda se listen los Centros de Costo creados en la tabla de centros de costo de esa compañía seleccionada. 

En el cuadro de la izquierda, se listan los Centros de Costo definidos en la tabla de centros de costo de la compañía elegida en el campo anterior mencionado. Mientras que, en el cuadro de la derecha se listan los Centros de Costo que se van asociando al usuario solicitante.  

La funcionalidad consiste en seleccionar el centro de costo al cual se le asignara al usuario solicitante desde el cuadro izquierdo, la selección se hace posicionando el cursor en el registro deseado, donde el registro queda sombreado de color verde. En el medio de los  dos recuadros se encuentran dos botones los cuales indican “Trasladar”. El botón superior de traslado, indica trasladar de la derecha a la izquierda, por el contrario, el botón inferior de traslado, indica trasladar de la izquierda a la derecha. Cuando se presiona el botón inferior de traslado, se agrega al cuadro de la derecha el centro de costo seleccionado previamente y que quedará asociado al usuario solicitante. Para asociar varios Centros de Costo, se presiona la tecla “Shift” de manera sostenida y se seleccionan los Centros de Costo desde el cuadro izquierdo. 

Para visualizar la información completa de los Centros de Costo disponibles para ser asociados y los que se asociaron al usuario solicitante y además, facilitar su recorrido es posible realizar desplazamientos verticales del cursor tanto hacia el comienzo como hacia  el final del cuadro. 
Una vez registrado el usuario, el sistema muestra un mensaje de notificación de registro exitoso. 
 
Imagen 43.  Mensaje registro Usuario  
Para el proceso de actualización de un usuario, se debe seleccionar de la ventana Visor el registro a actualizar, luego se diligencian los campos a modificar en la ventana Detalle, se da clic al botón Actualizar, seguido a esto se muestra un mensaje de confirmación de la transacción.  


 
Imagen 44.  Mensaje actualización Usuario  


12.	Cerrar Sesión 
Esta transacción permite que el usuario pueda salir de  AMsi . Para cerrar la sesión en  AMsi  dar clic a este botón ubicado en la ventana de Menú Principal. 
 
Imagen 45.  Cerrar Sesión (Menú Principal)

También, es posible cerrar la sesión dando clic al icono de Salir    ubicado en la parte superior derecha de cualquier ventana del Menú Principal: Actualizar Perfil, Crear Nueva Solicitud y Consultar Mis Solicitudes para usuarios, mientras que para usuarios administradores Configuración y Administrar Usuarios. 

