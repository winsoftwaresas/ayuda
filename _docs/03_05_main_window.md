---
title: Ventana principal
subtitle: Se explica la ventana visor, árbol de activos, indicadores, búsquedas rápidas y cómo filtrar por Subgrupos.
tags:
  - setup
author: win
order: '03_05'

---

## Ventana Principal de Activos

![Procesar imagen](../../assets/images/cap03/chp03_img02.png)
_**Imagen 2.** Ventana Principal Activos_

A esta ventana se llega haciendo clic sobre la opción <a class="btn blue">Activos</a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los Activos/Equipos. A continuación se ilustran las porciones que la componen:

## Ventana Visor

![Procesar imagen](../../assets/images/cap03/chp03_img03.png)
_**Imagen 3.** Ventana Visor Activos_

Desde esta ventana es posible observar los Activos/Equipos existentes. Se listan todos o una selección o subgrupo de ellos. El conjunto de Activos/Equipos disponibles a ser desplegados se muestran a través de páginas. El tamaño de las páginas es configurable desde el módulo de <a class="btn blue">Administración</a> por parte de quien tenga acceso a él.


Por medio de un clic sobre alguno de los Activos/Equipos del Visor el sistema responde mostrando la información de ese registro, en forma detallada, en una ventana llamada Ventana Detalle.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. 

El sistema permite hacer desplazamiento vertical de los registros con las teclas de desplazamiento.



## Ventana Submenú de Activos

### Ir a AC

Esta opción de búsqueda rápida se encuentra ubicada al lado superior derecho de la ventana Visor. Al darle clic al ícono  <span class="mdi mdi-magnify"></span>, se abre un campo al lado izquierdo que indica la información que debe ingresarse, bien sea, el código completo o serial del Activo. Luego de digitar la información, se presiona la tecla <a class="btn">Enter <span class="mdi mdi-subdirectory-arrow-left"></span></a> y a continuación se sombrea el Activo deseado en el Visor:

![Procesar imagen](../../assets/images/cap03/chp03_img04_1.png)
_**Imagen 5.** Ir a AC_

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Activo no existe.

![Procesar imagen](../../assets/images/cap03/chp03_img04_2.png)
_**Imagen 6.** Mensaje Alerta - Ir a AC_

## Indicadores

Es posible visualizar de manera inmediata, los Activos que son raíz o padre, ubicaciones técnicas, componentes intercambiables. También, si tienen asociada Multimedia, características técnicas y biomédicas directamente desde la ventana visor, a través de la columna “Indicadores” que muestra una pelota de color que indica el tipo de información definida y asociada. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores   ubicado en la parte superior derecha de la ventana visor.

![Procesar imagen](../../assets/images/cap03/chp03_img04_3.png)
_**Imagen 7.** Activos - Indicadores_

El significado de los colores se visualiza al sobreponer el cursor sobre el icono <span class="mdi mdi-message-alert"></span> que se encuentra al extremo superior derecho y su correspondencia es:

- **Verde:** Activos definidos con AC-Raíz como SÍ.
- **Rojo:** Activos con estado Inactivo. (Este estado desactiva los programas asociados a este Activo, asimismo se inabilita en los listados AMsi). 
- **Amarillo:** Activos definidos como Ubicación Técnica.
- **Café Oscuro:** Activos definidos como Componentes Intercambiables y que están asociados a una Ubicación Técnica.
- **Morado:** Activos que tienen asociadas Características Técnicas en la pestaña de Características.
- **Naranja:** Activos que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
- **Blanco:** Activos definidos como Ubicación Técnica o Componentes Intercambiables y que no están asociados a Componentes Intercambiables o Ubicación Técnica, respectivamente, es decir, que están disponibles para ser asignados.
- **Negro:** Indica Activos que tienen alerta de tecnovigilancia. 





>**Nota:** Al usar la función de árbol de activos o despiece, para los activos que son ubiciones físicas se muestra el activo componente que está contenido en ella: 
![Procesar imagen](../../assets/images/cap03/chp03_img48.png)
<br>
Para los activos que son componentes intercambiables se muestra su ubicación técnica:
![Procesar imagen](../../assets/images/cap03/chp03_img49.png).

<br>




## Subgrupo

Se usa para filtrar grupos de Activos/Equipos que cumplen con un conjunto  de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al <span class="mdi mdi-filter-variant"></span>, ubicado en la parte superior derecha de la ventana Visor de Activos.

![Procesar imagen](../../assets/images/cap03/chp03_img05.png)
_**Imagen 7.** Activos - Ir a Subgrupo_

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Activos. Lo que significa que de no escoger un criterio se obtiene como resultado del  subgrupo el mismo conjunto de todos los Activos.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Activos de acuerdo con los criterios seleccionados en la siguiente ventana:

![Procesar imagen](../../assets/images/cap03/chp03_img06.png)
_**Imagen 8.** Subgrupo Activos_

Los campos de datos que constituyen los criterios de selección en la Ventana  Subgrupo son los siguientes:

#### FICHA TÉCNICA

**Activo Fijo:** Esta  opción  permite  hacer  búsqueda de  un  Activo/Equipo  por:  Número de Inventario o Código Contable.

**Activo Padre:** Esta  opción hace una búsqueda del conjunto de Activos que son hijos o son parte del despiece del código del Activo/Equipo digitado en este campo. Es posible hacer uso de comodines %.

**Alias:** Permite seleccionar un Activo/Equipo por el Alias previamente definido en la ficha técnica.

**Car. Técnica:** Permite seleccionar los Activos/Equipos de acuerdo con una determinada Característica Técnica. Esta opción también permite el uso de comodines (%) cuando se desactiva por medio de un clic el candado <span class="mdi mdi-lock"></span> que está al lado del campo, el cual permite escribir <span class="mdi mdi-lock-open-outline"></span> y funciona igual que en los casos anteriores.

**Car.Técnicas (Valor Nominal):**  Selecciona los Activos cuyo valor se encuentra definido como valor norminal en sus características técnicas.  

**Centro de Costo:** Permite la selección de los Activos/ Equipos de acuerdo con el Centro de Costo asignado al  Activo/Equipo. Esta opción también permite el uso de comodines (%) cuando por medio de un clic se desactiva el candado <span class="mdi mdi-lock"></span> que está al lado del campo, el cual permite escribir <span class="mdi mdi-lock-open-outline"></span>, siendo posible seleccionar los Activos pertenecientes a Centros de Costo que tengan parte  del nombre igual. Por ejemplo: **Sistema%** seleccionará todos los Activos/Equipos en cuyo Centro de Costo tengan la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Clase:** Permite la selección de los Activos/Equipos según las diferentes clases en que puede ser clasificado un Activo, de acuerdo con el siguiente listado:

- Clave o crítico
- Detiene el  proceso
- Fácil reemplazo
- No afecta el proceso
- Poco uso
- Ninguno
- Clase I: Bajo Riesgo
- Clase IIa: Riesgo Moderado
- Clase IIb: Alto Riesgo
- Clase III: Muy Alto Riesgo
- Crítico Ambiental

**Código:** Esta selección agrupa los Activos/Equipos relacionados, por su código. Por ejemplo si se escribe **3201%**, se seleccionan todos los Equipos cuyo código inicia por 3201. El porcentaje es un carácter comodín que significa **“todos”.**
 
**Código de Barras Interno:** Permite seleccionar el  Activo/Equipo que se encuentre asociado al Código de Barras Interno que se ingresó al crear su ficha técnica.

**Código de Barras Proveedor:** Permite seleccionar el Activo/Equipo que se encuentre asociado al Código de Barras del Proveedor que se ingresó al crear el Activo/ Equipo.

**Confiabilidad Subjetiva:** Agrupa los Activos/Equipos que cumplan con el grado de confiabilidad que se indique en los dos campos que tiene esta opción de subgrupo:

El primer campo despliega las siguientes opciones:

**=:** Realiza la búsqueda a los Activos/Equipos que tengan una confiablidad subjetiva igual al valor indicado en el segundo campo.

**>:** Realiza la búsqueda a los Activos/Equipos que tengan una confiablidad subjetiva mayor al valor indicado en el segundo campo.

**<:** Realiza la búsqueda a los Activos/Equipos que tengan una confiablidad subjetiva menor al valor indicado en el segundo campo.

El segundo campo se usa para ingresar el valor correspondiente a la confiablidad subjetiva indicada por el técnico ejecutor.

**Contador:** Permite seleccionar los Activos/Equipos de  acuerdo con un determinado Contador. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Criticidad del Activo:** Selecciona los Activos que tienen asociada la criticidad que se escoja de las opciones disponibles.  

**Descripción:** Selecciona los Activos/Equipos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos/Equipos en cuya descripción, en cualquier posición, tengan la palabra  “Motor”.

**Encargado:** Permite seleccionar los Activos/Equipos de acuerdo con un determinado Encargado. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Estado:** Permite la selección de los Activos/Equipos de acuerdo al Estado de Activo o Inactivo. Tal estado es  importante para la generación de OT automáticas en los Programas de Mantenimiento.

**Fabricante:** Permite seleccionar los Activos/Equipos de  acuerdo con un determinado Fabricante. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Indicadores:** Permite  seleccionar los Activos/Equipos  de acuerdo con su clasificación o contenido específico, es decir, filtra equipos que sean solo raiz, o ubicación fisica, componente intercambiable, alerta tecnovigilancia, hasta aquellos que tienen definidas caracteristicas técnicas, biomédicas y contenido de multimedia.

<!--**Indicativo de Ruta:** Permite agrupar los Activos/Equipos de acuerdo con el criterio de si están o no asociados a una Ruta de Mantenimiento.-->

**Marca:** Esta opción permite realizar un filtro de los Activos/Equipos que tengan asignada la Marca que se especifica en este campo.

**Modelo:** Permite realizar un Subgrupo de Activos/  Equipos que tengan asignado el Modelo que se especifica en este campo.

**Proveedor:** Permite seleccionar los Activos/Equipos según un determinado Proveedor. Esta opción también permite el  uso de comodines y funciona igual que en los casos anteriores.

**Referencia Externa (Proveedor):** Permite seleccionar los Activos/Equipos según la referencia definida en su ficha técnica. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Riesgo:** Filtra aquellos grupos de Activos que tengan definido riesfgos en su ficha técnica, se permite el uso de comodines (%).

**Serial:** Esta alternativa permite seleccionar un Activo/Equipo de acuerdo con su número Serial.

**Tipo:** Selecciona los Activos/Equipos que se encuentran asociados al tipo ingresado definido en su ficha técnica.

**Ubicación  Física:** Permite la selección de los Activos/Equipos de acuerdo con las diferentes Ubicaciones Físicas definidas en la infraestructura. En este campo también es posible usar comodines (%), siendo posible seleccionar los registros  pertenecientes a Ubicaciones Físicas que tengan parte del nombre similar. Inicialmente se despliega un listado indicado por el icono de candado que se encuentra al lado del campo <span class="mdi mdi-lock"></span>, a través de un clic se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo ingresar los valores manualmente. Por ejemplo: CAVA% selecciona todos los Activos/Equipos cuya Ubicación Física inicia por la palabra CAVA, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**Clasificación por Uso:** Para las compañías biomédicas permite hacer filtros por clasificación del Activo según su uso. Los grupos son: Diagnóstico, Tratamiento y Mantenimiento de la vida, Rehabilitación, Prevención, Análisis de Laboratorio y Equipo Industrial de Apoyo Hospitalario.

**Clasificación por Grupo:** Filtra los Activos/Equipos según el grupo que se les haya asignado en su ficha técnica. los grupos son: Apoyo Administrativo, Apoyo Operacional, Infraestructura y Grupo X. 

**Clasificación por Riesgo:** Para las compañías biomédicas permite buscar por clasificación del Activo según su el riesgo asociado. Las opciones disponibles son: Clase I - Bajo Riesgo, Clase IIA - Riesgo Moderado, Clase IIB - Alto Riesgo, Clase III - Muy Alto Riesgo y Crítico Ambiental.  

#### VIDA ÚTIL

**FF Adquisición:** Permite seleccionar los Activos/Equipos según la fecha de adquisición diligenciada en la porción de Vida Útil. 

**Número de Contrato:** Filtra los Activos/Equipos que tengan asociado un contrato. 

**FF Dado de Baja:** Este campo habilita dos campos con el fin de ingresar un rango de fechas. El primer campo **Desde** que indica la fecha inferior y **Hasta** que indica la fecha superior del rango de interés a analizar. 

**FF Fin Garantía:** Permite la selección de Activos/ Equipos de acuerdo con la Fecha de Vencimiento de la Garantía en un rango determinado de tiempo.

**Switch Contrato:** Filtra aquellos registros de Activos/Equipos que estén sin contrato, o que se encuentren asociados a un contrato. Este campo sólo es de selección.

**FF de Registro:** Busca los Activos que cumplan con el rango de fechas que se defina. Este campo habilita el campo **Desde** que indica la fecha inferior y **Hasta** que indica la fecha superior del rango de interés a analizar. 

**Número de Póliza:** Filtra los Activos/Equipos que tengan asociado una póliza.

**Switch con Póliza:** Filtra aquellos registros de Activos/Equipos que estén o no asociados a una póliza. Este campo sólo es de selección.

**FF de Ingreso Inventario:** Busca los Activos que cumplan con el rango de fechas que se defina. Este campo habilita el campo **Desde** que indica la fecha inferior y **Hasta** que indica la fecha superior del rango de interés a analizar. 

  
#### METROLOGÍA

**Magnitud:** Para las compañías biomédicas filtra los registros que tengan asociada una magnitud. 

#### INFORMACIÓN BIOMÉDICA

**Indicativo del Registro:** Para las compañías biomédicas permite filtrar los Activos/Equipos que tengan asociado el Permiso de Comercialización o Registro Sanitario Invima. Este campo es de selección.

**Número:** Para las compañías biomédicas permite filtrar los Activos/Equipos que tengan asociado el número bien sea referente a un Permiso de Comercialización o Registro Sanitario Invima. Este campo es de selección.

>**Nota:** Es importante tener en cuenta que cuando se están realizando los Subgrupos se pueden utilizar uno o varios  de los criterios anteriores simultáneamente.Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón
<a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> en lugar de darlo al botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>.


### Cambiar a TreeGrid

Es  la función  que facilita  visualizar en vista de árbol un conjunto de Activos de acuerdo al filtro o subgrupo o bien todo el conjunto de Activos. Es bastante útil además, para visualizar detalladamente el despiece o descomponetización de un Activo. 

Para acceder a esta función se debe dar clic en el icono <span class="mdi mdi-autorenew"></span> ubicado en la parte superior derecha de la ventana Visor de Activos, la vista se visualiza de la siguiente forma:

![Procesar imagen](../../assets/images/cap03/chp03_img20.png)
_**Imagen 62.** Activos - Vista Árbol_

En la gráfica anterior, ventana Árbol de Activos, se aprecian sus componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana:

En esta columna aparece el listado de todos los Activos/Equipos agrupados por su respectivo código y descripción de Ubicacion Física. Al lado izquierdo de cada código visualiza un signo Más <span class="mdi mdi-plus-circle-outline"></span> o un signo Menos <span class="mdi mdi-minus-circle-outline"></span>, que permiten visualizar u ocultar respectivamente, el despiece del Activo/Equipo. 

 El significado de cada color lo indica el ícono de indicadores <span class="mdi mdi-message-alert"></span> ubicado en la parte superior derecha de la ventana, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap03/chp03_img21.png)
_**Imagen 63.** Activos - Indicadores Vista Árbol_

> **Nota:** Para volver nuevamente a la vista Visor de Activos, se debe dar un clic nuevamente al ícono de TreeGrid <span class="mdi mdi-autorenew"></span>.
