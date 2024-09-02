---
title: Consultar Mis Solicitudes
subtitle: Este capítulo guía para hacer consultas de SS creadas desde **AMsi**
tags:
  - AMsi
  - Consultar Solicitudes
author: win
order: 15_05
date: 2022-06-15T20:00:03.581Z
---
**AMsi** solo permite realizar creación y consultas para uno de los dos tipos de registro a la vez: OT o SS, pero no para los dos simultáneamente. Ello depende de la Configuración del aplicativo que se haya elegido, según la necesidad de la Organización.

**En esta sección**

- Subgrupos
- Consulta de Solicitudes: Usuarios relacionados por Centro de Costo y Compañía
- Visor de Solicitudes
- Videos de capacitación


<iframe width="600" height="340" src="https://www.youtube.com/embed/bQmrjyvPws4?si=XbQvYABkhRsKXhKo" title="¿Cómo consultar y evaluar solicitudes?" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>



<iframe width="600" height="340" src="https://www.youtube.com/embed/hsE634LQUwE?si=a6K-j8h3qE2U6eNz" title="Consultar y evaluar órdenes de trabajo" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen uk-responsive></iframe>

### Subgrupos



Inicialmente cuando un usuario ingresa a la opción **Consultar Mis Solicitudes** se muestra el listado de SS hechas por otros usuarios acorde a los Centros de Costo o Compañías que estén asociadas al usuario logueado; sin embargo, es posible hacer Subgrupos a través del ícono <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha y ver sólo las SS creadas por el Usuario logueado. Esto tiene como finalidad de que el usuario pueda realizar en tiempo real el seguimiento y consultas a sus SS.


![Procesar imagen](../../assets/images/cap12/chp12_img14.png)
_**Imagen 26.** Ir a Subgrupos_

**AMsi** mantiene activo cualquier subgrupo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono tenga una pelota roja <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>, está indicando que lo que se visualiza en el visor es un subgrupo. El sistema permite entonces hacer selección de un grupo de SS de acuerdo con los criterios seleccionados.

Una vez dado   ícono de subgrupo <span class="mdi mdi-filter-variant"></span>, se muestran los siguientes criterios de búsqueda:

![Procesar imagen](../../assets/images/cap12/chp12_img15.png)
_**Imagen 27.** Subgrupos_

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de **AMsi** son los siguientes:

##### FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO

**AC-Código:** Esta selección agrupa las SS cuyo Activo coincida con el código completo o una porción del mismo que se digite.

**AC-Descripción:** Filtra las SS asociadas a la descripción del Activo, ejemplo: **Motor** selecciona todos las SS, cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**Activo en lenguaje natural:** Permite filtrar las SS que contengan parte del nombre igual del Activo.

##### FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO

**Centro de Costo:** Permite la selección de SS de acuerdo con  el Centro de Costo. 
Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono  <span class="mdi mdi-lock"></span>, éste se desbloquea <span class="mdi mdi-lock-open-outline"></span> y permite digitar a continuación segmentos del nombre del Centro de Costo usando comodines (%). Cuando se utilizan comodines, es posible seleccionar las SS pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: %Sistema% selecciona todos los registros en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Diagnóstico del Usuario:** Permite la selección de SS de acuerdo con una parte de la Descripción del usuario. Se debe digitar manualmente y es posible usar comodines.

**Rango Consecutivo de Solicitud:** Permite la selección de las SS cuyo número consecutivo se encuentre incluido dentro del rango  especificado en este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de solicitud.

**Estado de la Solicitud:** Este criterio agrupa las SS de acuerdo al Estado en que se encuentran. En este campo se debe poner la abreviatura del estado de la SS, siendo los siguientes: Análisis (AN), Asignada (AS), En Ejecución (EJ), Cerrada no ejecutada (NE), Cerrada Ejecutada (CE), Cerrada con OT (CO), Cerrada Parcial (CP).

**FF de Creación:** Permite la selección de SS cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo.

**Solicitante (AMsi):** Este campo permite seleccionar las SS  para el Solicitante aquí definido. Para seleccionarlo se debe  elegir un usuario de la lista desplegable.

**Responsable:** Permite la  selección de SS cuyo Responsable  fue especificado en este campo. Es posible usar comodines (%).

**Ubicación  física:** Permite la selección de  las SS cuyo Activo esté en la  ubicación física que se determina en este criterio. Es posible digitar una parte y usar comodines (%).

### 5.2 Consulta de Solicitudes

Para realizar la consulta de una SS, basta con dar clic a uno de los registros de las SS listadas y a continuación se muestra en detalle toda la información allí contenida.

![Procesar imagen](../../assets/images/cap12/chp12_img16.png)
_**Imagen 28.** Ventana Detalle de la SS_

Este visor contiene la siguiente información:

**Datos Generales:**

- El número de la SS
- La fecha y hora de creación de la SS
- El Estado en el que se encuentra la SS. Este estado solo es modificable desde el  AM por el encargado del área de mantenimiento de la organización.
- El nombre del Responsable ejecutor del mantenimiento.
- Nombre del Solicitante. Este nombre puede ser puede ser cambiado desde AM por el encargado del área de mantenimiento de la organización.
- Email de la persona solicitante.

**Datos del Usuario:**

Datos suministrados en el formulario de _Actualizar Perfil del **AMsi** :_

- Documento de identidad
- Nombre
- Dirección
- Ciudad
- Correo Electrónico
- Teléfono
- Centro de Servicio

**Solicitud:**

- Descripción Solicitud
- Activo / Equipo
- Centro de Costo
- Ubicación Física
- Causa de Falla
- Tipo de Mantenimiento
- Tipo de Actividad

**Fechas y Horas:** Estos campos solo son modificables desde el módulo Solicitudes en **AM**. En estos campos aparecen las fechas de atención, inicio de trabajo, fin de trabajo y cierre de la SS.

Estos campos solo son manipulados por los encargados del área de mantenimiento de las diferentes compañías creadas en el AM:

- F/H Atención
- F/H Inicio Trabajo
- F/H Fin de Trabajo
- F/H Cierre

**Evaluar el servicio:** Contiene el resultado de la Evaluación de la SS, si ya se realizó y si no se ha realizado, permite realizarla siempre y cuando la SS/OT se encuentre en estado Cerrada Ejecutada (CE) o Cerrada con OT (CO) y cuando el usuario sea el mismo en el campo Solicitante.

**Comentario:** El campo comentario es un campo que no es modificable. A través de este visor que muestra el Detalle de la SS, es posible que el usuario realice comentarios relevantes e importantes para el área de Mantenimiento. Para realizar los comentarios, se debe dirigir al final de la Ventana Detalle de la SS y digitar el comentario en el campo llamado “Comentario”, para agregarlo a la SS se debe dar clic al botón <a class="btn gray">Agregar Comentario</a>. Al dar clic aparece el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario. Estos comentarios también se visualizan desde el módulo de Solicitudes de Servicio de **AM.**

![Procesar imagen](../../assets/images/cap12/chp12_img17.png)
_**Imagen 29.** Ventana Detalle de la SS (Comentarios)_


