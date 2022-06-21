---
title: Consultar Mis Solicitudes
subtitle: Este capítulo guía para ejecutar consultas de SS creadas desde **AMsi**
tags:
  - AMsi
  - Consultar Solicitudes
author: win
order: 15_05
date: 2022-06-15T20:00:03.581Z
---
**AMsi** solo permite realizar creación y consultas para uno de los dos tipos de registro a la vez: OT o SS, pero no para los dos simultáneamente. Ello depende de la Configuración del aplicativo que se haya elegido, según la necesidad de la Organización.

La Configuración del **AMsi** se describe en detalle en el Capítulo 9 de este manual.

**En este capítulo**

- Subgrupos
- Consulta de Solicitudes
- Visor de Solicitudes

### Subgrupos

Inicialmente esta transacción trae el listado del total de las SS que se han realizado para la Organización por parte de otros usuarios solicitantes.
En el caso de que el Administrador del **AMsi** haya asociado Todos los Centros de Costos al Usuario logueado, se mostrarán todas las SS para todos los Centros De Servicio (compañías).
Sin embargo, es posible hacer Subgrupos (búsquedas específicas) a través del ícono <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha y ver solo las SS creadas por el Usuario logueado. Esto tiene como finalidad de que el usuario pueda realizar constantemente y en tiempo real el seguimiento y consultas a sus SS.
A esta ventana se llega al dar clic a la opción de Consultar Mis Solicitudes en la ventana de Menú Principal.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img09.png)
**_Imagen 9.**  Consultar Mis Solicitudes_

**AMsi** mantiene activo cualquier subgrupo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono <span class="mdi mdi-filter-variant"></span> se muestra con una pelota roja, está indicando que lo que se visualiza en el visor es un subgrupo. El sistema permite entonces hacer selección de un grupo de SS de acuerdo con los criterios seleccionados.

Una vez dado un clic sobre el ícono de subgrupos, se muestran los siguientes criterios de búsqueda:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img10.png)
**_Imagen 10.** Subgrupos_

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de **AMsi** son los siguientes:

##### FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO

**AC-Código:** Esta selección agrupa las SS cuyo Activo coincidan el código completo o una porción del mismo.

**AC-Descripción:** Selecciona las SS asociadas a los Activos según criterios que se fundamenten en su descripción.  Ejemplo: Motor selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**Activo en lenguaje natural:** Permite filtrar las SS que contengan parte del nombre igual del Activo.

##### FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO

**Centro de Costo:** Permite la selección de SS de acuerdo con  el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono  <span class="mdi mdi-lock"></span>, éste se desbloquea <span class="mdi mdi-lock-open-outline"></span> y permite digitar a continuación segmentos del nombre del Centro de Costo usando comodines (%). Cuando se utilizan comodines, es posible seleccionar las SS pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: %Sistema% selecciona todos los registros en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Diagnóstico del Usuario:** Permite la selección de SS de acuerdo con una parte de la Descripción del usuario. Se debe digitar manualmente y es posible usar comodines.

**Rango Consecutivo de Solicitud:** Permite la selección de las SS cuyo número consecutivo se encuentre incluido dentro  del  rango  especificado en  este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de solicitud.

**Estado de la Solicitud:** Este criterio agrupa las SS de acuerdo al Estado que se encuentra en el visor, en este campo se debe poner la abreviatura del estado de la SS, siendo los siguientes: Análisis (AN), Asignada (AS), En Ejecución (EJ), Cerrada no ejecutada (NE), Cerrada Ejecutada (CE), Cerrada con OT (CO), Cerrada Parcial (CP).

**FF de Creación:** Permite la selección de SS cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo.

**Solicitante (AMsi):** Este campo permite seleccionar las SS activas para el Solicitante aquí definido. Para seleccionarlo se debe  elegir un usuario de la lista desplegable.

**Responsable:** Permite la  selección de SS cuyo Responsable  fue especificado en este campo. Es posible usar comodines (%).

**Ubicación  física:** Permite la selección de  las SS cuyo Activo esté en la  ubicación física que se determina en este criterio. Es posible digitar una parte y usar comodines (%).

### 5.2 Consulta de Solicitudes

Para realizar la consulta de una SS, basta con dar clic a uno de los registros de las SS listadas y a continuación se muestra en detalle toda la información allí contenida.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img11.png)
**_Imagen 11.** Ventana Detalle de la SS_

Este visor contiene la siguiente información:

**Datos Generales:**

- El número de la SS
- La fecha y hora de creación de la SS
- El nombre del Estado en el que se encuentra la SS. Este estado solo es modificable desde el  AM por el encargado del área de mantenimiento de la organización.
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

**Fechas y Horas:** Estos campos solo son modificables desde el módulo SS del AM. En estos campos aparecen las fechas de atención, inicio de trabajo, fin de trabajo y cierre de la SS.

Estos campos solo son manipulados por los encargados del área de mantenimiento de las diferentes compañías creadas en el AM:

- F/H Atención
- F/H Inicio Trabajo
- F/H Fin de Trabajo
- F/H Cierre

**Evaluar el servicio:** Contiene el resultado de la Evaluación de la SS, si ya se realizó y si no se ha realizado, permite realizarla siempre y cuando la SS/OT se encuentre en estado Cerrada Ejecutada (CE) o Cerrada con OT (CO) y cuando el usuario sea el mismo en el campo Solicitante.

**Comentario:** El campo comentario es un campo que no es modificable. A través de este visor que muestra el Detalle de la SS, es posible que el usuario realice comentarios relevantes e importantes para el área de Mantenimiento. Para realizar los comentarios, se debe dirigir al final de la Ventana Detalle de la SS y digitar el comentario en el campo llamado “Comentario”, para agregarlo a la SS se debe dar clic al botón <a class="btn gray">agregar comentario</a>. Al dar clic aparece el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario. Estos comentarios también se visualizan desde el módulo de Solicitudes de Servicio de **AM.**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap12/chp12_img12.png)
_**Imagen 12.** Ventana Detalle de la SS (Comentarios)_
