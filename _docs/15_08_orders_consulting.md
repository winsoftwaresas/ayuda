---
title: Consultar Mis Órdenes
subtitle: Este capítulo guía para ejecutar consultas de OT creadas desde
  **AMsi**. Se hace una ilustración sobre los comandos que aparecen en pantalla.
tags:
  - AMsi
  - Consultar Orden en AMsi
author: win
order: 15_08
date: 2022-07-07T19:10:33.048Z
---
**AMsi** solo permite realizar creación y consultas para uno de los dos tipos de registro a la vez: OT o SS, pero no para los dos simultáneamente. Ello depende de la Configuración del aplicativo que se haya elegido, según la necesidad de la Organización.

**En esta sección:**

* Subgrupos
* Consulta de Órdenes
* Visor de Órdenes

Esta transacción trae el listado de las OT que ha realizado el usuario solicitante. Tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus OT. A esta ventana se llega al dar clic a la opción de Consultar Mis Órdenes en la ventana de Menú Principal.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img27.png)
_**Imagen 28.** Mensaje Alerta Multimedia_

### 8.1 Subgrupos

Inicialmente esta transacción trae el listado del total de las OT que se han realizado para la Organización por parte de otros usuarios solicitantes.

En el caso de que el Administrador del **AMsi** haya asociado Todos los Centros de Costos al Usuario logueado, se mostrarán todas las OT para todos los Centros De Servicio (compañías). Sin embargo, es posible hacer Subgrupos  a través del ícono de triángulo invertido superior derecho <span class="mdi mdi-filter-variant"></span> y ver solo las OT creadas por el Usuario logueado. Esto tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus OT. A esta ventana se llega al dar clic a la opción de \*\*Consultar Mis Órdenes\*\* en la ventana de Menú Principal.

![Procesar imagen](../assets/images/placeholder.jpg)
***Imagen 19. Subgrupos (Consultar Mis Órdenes)***

**AMsi** mantiene activo cualquier subgrupo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono se muestra con una pelota roja, está indicando que lo que se visualiza en el visor es un subgrupo. El sistema permite entonces hacer selección de un grupo de OT de acuerdo con los criterios seleccionados.

Una vez dado un clic sobre el ícono de subgrupos, se muestran los siguientes criterios de búsqueda:

![Procesar imagen](../assets/images/placeholder.jpg)
***Imagen 20. Subgrupos (Criterios de búsqueda)***

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de **AMsi** son los siguientes:

##### **FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO**

**AC-Código:** Esta selección agrupa las OT cuyo Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo.

**AC-Descripción:** Selecciona las OT asociadas a los Activos según criterios que se fundamenten en su descripción.  Ejemplo: Motor selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

##### **FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO**

**Centro de Costo:** Permite la selección de OT de acuerdo con  el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono de candado y digitando a continuación segmentos del nombre del Centro de Costo usando comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: **%Sistema%** selecciona todos los registros en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Descripción:** Permite la selección de OT de acuerdo con una parte del diagnóstico del usuario. Se debe digitar manualmente y es posible usar comodines.

**Número de la OT:** Permite la selección de las OT cuyo número consecutivo se encuentre incluido dentro  del  rango  especificado en  este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de la OT.

**Estado de la Orden:** Este criterio agrupa las OT de acuerdo al Estado que se encuentra en el visor, en este campo se debe poner la abreviatura del estado de la SS, siendo los siguientes: En Ejecución (EJ), Cerrada o no ejecutada (K), Cerrada Ejecutada (CE),Pendiente de Ejecución (P), Planeada (PL), Programada (PR) Cerrada Parcial (CP).

**FF de Creación:** Permite la selección de OT cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de la OT.

**Solicitante (**AMsi**):** Este campo permite seleccionar las OT activas para el Solicitante aquí definidos. Para seleccionarlo se debe  elegir un usuario de la lista desplegable.

**Responsable:** Permite la  selección de las OT cuyo Responsable  fue especificado en este campo. Es posible usar comodines (%).

**Ubicación  física:** Permite la selección de  las SS cuyo Activo esté en la  ubicación física que se determina en este criterio. Es posible digitar una parte y usar comodines (%).

### 8.2  Consulta de Órdenes

Para realizar la consulta de una OT, basta con dar clic a uno de los registros de las OT listadas, y a continuación se muestra en detalle toda la información allí contenida.

![Procesar imagen](../assets/images/placeholder.jpg)
***Imagen 21. Ventana Detalle de la OT***

Este visor contiene la siguiente información:

**Datos Generales**

* El número de la OT
* La fecha y hora de creación de la OT
* El nombre del Estado en el que se encuentra la OT. Este estado solo es modificable desde el  AM por el encargado del área de mantenimiento de la organización.
* El nombre del Responsable ejecutor del mantenimiento. Este nombre puede  ser puede ser cambiado desde AM por el encargado del área de mantenimiento de la organización.
* Nombre del Solicitante
* Email del Solicitante

**Datos Del Usuario**

Datos suministrados en el formulario de Actualizar Perfil del  **AMsi** :

* Documento de identidad
* Nombre
* Dirección
* Ciudad
* Correo Electrónico
* Teléfono
* Centro de Servicio

**Orden de Trabajo**

* Descripción de la Orden
* Activo / Equipo
* Centro de Costo
* Ubicación Física
* Causa de Falla
* Tipo de Mantenimiento
* Tipo de Actividad

**Fechas y Horas:** Estos campos solo son modificables desde el módulo OT del AM. En estos campos aparecen las fechas y horas Atención, Inicio de Trabajo, Fin de Trabajo y  Fecha Cierre de la OT.

Estos campos solo son manipulados por los encargados del área de mantenimiento de las diferentes compañías creadas en el AM.

* F/H Atención
* F/H Inicio Trabajo
* F/H Fin de Trabajo
* F/H Cierre

**Evaluar el servicio:** Contiene el resultado de la Evaluación de la OT, si ya se realizó y si no se ha realizado, permite realizarla, siempre que esté en estado Cerrada Ejecutada y mientras el campo Solicitante coincida con los campos Datos del Usuario.

**Comentario:** El campo comentario es un campo que no es modificable. A través de este visor que muestra el Detalle de la OT, es posible que el usuario realice comentarios relevantes e importantes para el área de Mantenimiento. Para realizar los comentarios, se debe dirigir al final de la Ventana Detalle de la OT y digitar el comentario en el campo llamado “Comentario”, para agregarlo a la OT se debe dar clic al botón Agregar Comentario. Al dar clic al botón “Agregar Comentario” aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario. Estos comentarios también se visualizan desde el módulo de Ordenes de **AM**.

![Procesar imagen](../assets/images/placeholder.jpg)
***Imagen 22.  Ventana Detalle de la OT (Comentarios)***