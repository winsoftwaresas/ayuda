---
title: Codificación de Activos/Equipos y Generalidades
subtitle: Aquí se encuentra información sobre la codificación, despiece de
  activos, sus funciones y formas de uso, cómo crear un Activo, se explican las
  porciones de la ficha técnica, filtrar por subgrupos y obtener reportes.
tags:
  - setup
author: win
order: 03_04
date: 2022-12-27T21:18:27.690Z
---

**AM** está capacitado para aceptar y definir 5 códigos para cada Activo/Equipo. Cada estructura de código es  independiente de las otras y sirve para localizar o estudiar un Activo, partiendo de distinta información que distintos tipos de usuarios puedan tener sobre el mismo.

Las cinco estructuras son: el Código de Mantenimiento (objeto de la presente sección), el Código Referencia (código externo, o dado por el proveedor), el Código de Inventario, un número de Activo Fijo (normalmente contable), un número de Serie propio del Activo, y un Código Alias (propio de la cultura técnica empresarial).

Como se dijo antes, en esta sección se estudia el Código de Mantenimiento del Activo.

Se trata entonces de un Código de 18 posiciones. Es un código amplio, jerárquico, multinivel, que se estructura y  diseña flexiblemente de acuerdo con la necesidad o el gusto del usuario.

Estructurar el código de Activo/Equipo es una labor de Implementación que exige estudio, discusiones y participación de varios usuarios entendidos. Al tiempo exige a todo usuario con capacidad de definir códigos de Activos, el compromiso de uso, ajustado a la norma que lo estructuró.

**AM** es capaz de asumir la estructura de Código que ya exista en la instalación. De todas formas si no se tiene una estructura predefinida o si se desea revisar y modificar la que ya existe, se deben tener en cuenta las siguientes observaciones:

**1.** **AM** garantiza un conjunto de funciones con base en el Código de Activo, que es estructurado y conformado por niveles jerárquicos. Con base en tal estructuración se posibilita el despiece de los Activos. A manera de ejemplo, una estructuración de los niveles que se menciona, podría ser: Activo/Equipo, Sistema, Subsistema, Componente y Parte, entre otros.

**Por ejemplo:** el código COARCSU se puede descomponer de la siguiente forma:

- **CO** Grupo de Equipos corrugadores
- **COA** Corrugador A
- **COARC**  Sistema de Rodillos Corrugadores del Corrugador A.
- **COARCSU** Rodillo superior del Sistema de Rodillos Corrugadores del **COA**

**2.**	Antes de codificar algún Activo se debe haber establecido la estructura general y común de codificación de Activos de la empresa. Tal estructura se conforma definiendo los grupos significativos de primer, segundo, tercer y en ocasiones hasta de cuarto orden, de acuerdo a la cultura técnica y requerimientos del área de Mantenimiento.

# Despiece de Activos / Equipos

Existen varios criterios para despiezar un Activo/Equipo o uno de sus componentes. El primero que se menciona es lograr el despiece total del Activo/Equipo hasta asociar cada componente mínimo con un código de Repuesto en el Almacén.

Otro, plantea el despiece a un nuevo nivel, por la necesidad de mantener Historia de Mantenimiento individual y detallada. Para ese nuevo nivel de despiece, el **AM** trabaja principalmente bajo este segundo concepto.

Lo anterior posibilita obtener la Historia de Mantenimiento total, detallada de u  n Activo/Equipo, en conjunto con la de todos sus componentes de despiece, si es del caso. Pero también es posible obtener la Historia detallada de un Activo o de algún componente de despiece, incluyendo  solamente las actividades relacionadas con el nivel  requerido, sin incluir más niveles inferiores de despiece. En todo caso, el proceso de definir un nuevo nivel de despiece se centra en la creación de un nuevo nivel jerárquico en la estructura del código actual. En el ejemplo del  numeral 1 de la sección anterior vemos como el nivel COARCSU es un nuevo nivel de despiece del nivel anterior, el COARC.

## Ventana Principal de Activos / Equipos

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img02.png)
_**Imagen 2.** Ventana Principal Activos_

A esta ventana se llega haciendo clic sobre la opción <a class="btn blue">Activos</a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los Activos/Equipos. A continuación se ilustran las porciones que la componen:

## Ventana Visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img03.png)
_**Imagen 3.** Ventana Visor Activos_

Desde esta ventana es posible observar los Activos/Equipos existentes. Se listan todos o una selección o subgrupo de ellos. El conjunto de Activos/Equipos disponibles a ser desplegados se muestran a través de páginas. El tamaño de las páginas es configurable desde el módulo de <a class="btn blue">administración</a> por parte de quien tenga acceso a él.


Por medio de un clic sobre alguno de los Activos/Equipos del Visor el sistema responde mostrando la información de ese registro, en forma detallada, en una ventana llamada Ventana Detalle.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. 

El sistema permite hacer desplazamiento vertical de los registros con las teclas de desplazamiento.

## Ventana Detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img04.png)
_**Imagen 4.** Ventana Detalle Activos_

En la gráfica anterior, Ventana Detalle de 
Activos/Equipos, se aprecian todos sus componentes y sus respectivos contenidos.Se encuentra toda la información relevante del registro seleccionado en el Visor (sombreado en verde).

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:


### Identificación 


**Código:** En este campo se registra el código del Activo/Equipo, correspondiente al código de Mantenimiento, de acuerdo a la estructuración por niveles que se haya definido durante la etapa de Planeación de la Implementación.

**Descripción:** Este campo no tiene un rótulo determinado. Se utiliza para el nombre del Activo/Equipo. Este campo cuenta con una capacidad de 60 caracteres, es obligatorio.

**Activo Fijo:** También Número de Inventario, es el Código Contable del Activo, según Contabilidad. Este campo cuenta con una disponibilidad de 20 caracteres.

**Código de Inventario:** En este campo se registra el código de inventario del Activo/Equipo, que Mantenimiento haya definido o el definido por el área de Activos o el área Contable de la institución.

**Referencia Externa (Proveedor):** En este campo se indica el código con el cual el Proveedor conoce el Equipo. Este campo cuenta con una disponibilidad de 20 caracteres. 

**Serial:** Este campo se utiliza para registrar el número de serie o lote que identifica individualmente a un Activo/Equipo según el fabricante. Este campo cuenta con una disponibilidad de 40 caracteres.

**Alias:** En algunas plantas por tradición o cultura, se tiene una denominación especial con la cual se conocen algunos Activos/Equipos. Este campo es el especial para registrar tal nombre especial. Igualmente se puede utilizar para registrar códigos  antiguos con que se definían este Activo antes de la nueva codificación. Este campo cuenta  con una disponibilidad de 20 caracteres.



### Información General

**Centro de Costo:** En este campo se registra o se despliega automáticamente, el Centro de Costo al que está asociado el Activo. Si el Activo se definió previamente, el Centro  de  Costo aparece automáticamente. Si es una nueva definición la que se está realizando, el sistema muestra  y  pone como disponible todo el contenido de la tabla de  Centros de Costo definidos en la Infraestructura, para seleccionar el que corresponde al Activo. Es muy importante definir este campo desde el mismo momento de la definición del Activo, puesto que es un campo derivado o sea que se  trae automáticamente para muchas funciones, cada vez que se invoca el Activo.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubicación Física:** En este campo se traen  automáticamente las Ubicaciones Físicas definidas en la infraestructura, para definir la ubicación geográfica del Activo en la planta. Este campo es muy importante definirlo desde el mismo momento en que se cree el Activo/Equipo, puesto que es un campo derivado, es decir, que se trae automáticamente para muchas funciones.

**Código Barras Interno:** Este campo pertenece al Código de Barras Interno del equipo, en caso que exista alguno dentro de la empresa. Este campo cuenta con una disponibilidad de 22 caracteres.

**Código Barras Proveedor:** Este campo pertenece al Código de Barras que fue asociado al equipo por parte del Proveedor.

**Criticidad del Activo:** Es la importancia o criticidad de un Activo/Equipo en la línea o en un proceso. En este campo se traen automáticamente las diferentes clasificaciones sugeridas:

- **Clave o crítico**
- **Detiene el proceso**
- **Fácil reemplazo**
- **No afecta el proceso**
- **Poco uso**
- **Ninguno**

**Confiabilidad Subjetiva:** Este es un concepto subjetivo. En este campo se escribe un valor del 0 al 100%, a criterio del técnico ejecutor, que indica el grado de confiabilidad del Equipo. A pesar de lo subjetivo, este valor puede ser de consideración importante cuando se realiza una reparación a un Equipo. Se puede actualizar desde las  Órdenes de Trabajo, en el momento de su cierre.

**Proveedor:** En este campo se traen automáticamente los diferentes Terceros asignados como Proveedor/Fabricante, para seleccionar el correspondiente.

**Fabricante:** En este campo se traen automáticamente los diferentes Terceros asignados como Proveedor/Fabricante, para seleccionar el correspondiente.

**Marca:** Este campo se utiliza para diligenciar la Marca que identifica el Activo/Equipo. Este campo cuenta con una disponibilidad de 22 caracteres.

**Modelo:** Este campo se utiliza para diligenciar el Modelo que identifica un Activo/Equipo según el fabricante. Este campo cuenta con una disponibilidad de 30 caracteres.

**Tipo:** Es una característica particular de un Activo/Equipo. Este campo se utiliza  para diligenciar el tipo que identifica un Equipo según su uso o el fabricante. Este campo cuenta con una disponibilidad de 20 caracteres.

**Encargado:** Son personas propias de la empresa  encargadas de la operación o funcionamiento del Activo/Equipo. En este campo se traen automáticamente los diferentes Terceros asignados como Responsable Interno/Empleado y Responsable Externo/Contratista.


### Estados

**Inactivo/Activo:** Es un switche que permite Controlar el estado de un Activo/Equipo. Cuando se pone a un estado inactivo se muestra un enlace azul **Desincorporación** para ingresar el detalle de cuando se da de baja un Equipo.  

>**Nota:** Es importante tener en cuenta que este switche se utiliza durante los procesos de Generación Automática de Ordenes  de Trabajo y de Proyección para un período futuro, pues solamente se tienen en  cuenta aquellos Equipos con estado Activo y tampoco se listarán en **AMsi** para los usuarios solicitantes. 

**Estado:** Este campo se utiliza para especificar el tipo de Estado en el que se encuentra el Activo/Equipo. Dependiendo del campo anterior. Si el Activo actual se encuentra  Activo (Operativo) se listan las siguientes opciones:

**A** - Dado en préstamo

**A** - Recibido en préstamo

**A** - Dado en arriendo

**A** - Recibido en arriendo

**A** - En convenio

**A** - Otro


Los que están Inactivos (bien sea No Operativos o Dados de baja temporal o totalmente) se especifican en las siguientes opciones:

**I** - Dado de baja

**I** - Overhaul

**I** - No está en operación

**I** - Otro

**AC raíz:** Este campo se utiliza para identificar el Activo/Equipo que es una unidad funcional que se despieza (Equipos raíz). Solo se consideran como Equipo Raíz aquellos Activos/Equipos que no tienen una dependencia de otros y que más bien son la base de despiece de sus componentes.

**Ubicación técnica:** Con este switche se especifica si un Equipo es una ubicación física del AC Raíz. 

**Componente intercambiable:** Si el Activo que se define es un componente que se intercamnbia en un Activo. 

**Fijo/Móvil:** Se usa para definir si un Activo es estático en un área o no. 

**Ruta:** En este campo se indica si el Activo/Equipo que se está definiendo es una Ruta. Cuando se ha indicado que se trata de una Ruta, el sistema se prepara para recibir un conjunto de información adicional correspondiente a la Ruta. Se debe recordar que las rutas de mantenimiento asocian o integran varios Activos/Equipos.

**Permitir Dos Contadores :** Este switche permite deifnir dos tipo de contadoeres en el Activo. 


**Adicionar Contador:** Funciona como un switche que abre el siguiente formulario:

- **Contador:** En este campo se traen automáticamente de la tabla de Infraestructura los tipos de Contadores que pueden ser definidos para un Activo o una máquina. Se  selecciona el que mejor refleje o sea más representativo del trabajo que realiza el Activo. Se usa además, para definir un Programa de Mantenimiento en función del trabajo realizado por el mismo Equipo.

- **Decremental/Incremental:** En este campo se elige si es un Contador tipo Incremental (siempre aumenta) o Decremental (permite valores que decrecen o negativos).

- **Valor Contador:** En este campo con capacidad de 15 dígitos se registra el valor del contador según la última lectura realizada. Es un valor base para los procesos de  Proyección y Programación que se realizan desde Programas de Mantenimiento.

- **FF Lectura:** Es la fecha en la cual se toma la medición actual del contador. Es una fecha base para el proceso  de  Proyección y Programación que se realiza desde Programas de Mantenimiento.

- **Std. Planeación:** Es un promedio de trabajo realizado por el Activo en una unidad de tiempo, en función de su contador asociado. En este campo se escribe la cantidad de unidades que avanza en un lapso, el contador seleccionado. Por medio del estándar de Planeación se realiza la proyección de un contador para un Activo hacia el futuro.

**Por:** En este campo se indica la unidad de tiempo  considerada en el Estándar de Planeación. Se puede seleccionar cualquiera de las siguientes opciones, aunque se sugiere que sea mensual:

- Día
- Semana
- Quincena
- Mes

Para añadir el contador se debe dar clic en el botón <span class="mdi mdi-plus-circle icon white"></span>.

**Comentario:** Aquí se ingresan los comentarios sobre un Activo o se especifica información adicional al AC.

## Ventana Submenú de Activos/Equipos

### Ir a AC

Esta opción de búsqueda rápida se encuentra ubicada al lado superior derecho de la ventana Visor. Al darle clic al ícono de lupa <span class="mdi mdi-magnify"></span>, se abre un campo al lado izquierdo que indica la información que debe ingresarse, bien sea, el código completo o serial del Activo. Luego de digitar la información, se presiona la tecla <a class="btn">Enter <span class="mdi mdi-subdirectory-arrow-left"></span></a> y a continuación se sombrea el Activo deseado en el Visor:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img04_1.png)
_**Imagen 5.** Ir a AC_

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Activo no existe.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img04_2.png)
_**Imagen 6.** Mensaje Alerta - Ir a AC_

## Indicadores

Es posible visualizar de manera inmediata, los Activos que son raíz o padre, ubicaciones técnicas, componentes intercambiables. También, si tienen asociada Multimedia, características técnicas y biomédicas directamente desde la ventana visor, a través de la columna “Indicadores” que muestra una pelota de color que indica el tipo de información definida y asociada. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores   ubicado en la parte superior derecha de la ventana visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img04_3.png)
_**Imagen 7.** Activos - Indicadores_

El significado de los colores se visualiza al sobreponer el cursor sobre el icono <span class="mdi mdi-message-alert"></span> que se encuentra al extremo superior derecho y su correspondencia es:

- **Verde:** Activos definidos con AC-Raíz como SÍ.
- **Rojo:** Activos con estado Inactivo. (Este estado desactiva los programas asociados a este Activo, asimismo se inabilita en los listados AMsi). 
- **Amarillo:** Activos definidos como Ubicación Técnica.
- **Café Oscuro:** Activos definidos como Componentes Intercambiables y que están asociados a una Ubicación Técnica.
- **Morado:** Activos que tienen asociadas Características Técnicas en la pestaña de Características.
- **Naranja:** Activos que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
- **Blanco:** Activos definidos como Ubicación Técnica o Componentes Intercambiables y que no están asociados a Componentes Intercambiables o Ubicación Técnica, respectivamente, es decir, que están disponibles para ser asignados.

## Subgrupo

Se usa para filtrar grupos de Activos/Equipos que cumplen con un conjunto  de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al <span class="mdi mdi-filter-variant"></span>, ubicado en la parte superior derecha de la ventana Visor de Activos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img05.png)
_**Imagen 7.** Activos - Ir a Subgrupo_

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Activos. Lo que significa que de no escoger un criterio se obtiene como resultado del  subgrupo el mismo conjunto de todos los Activos.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Activos de acuerdo con los criterios seleccionados en la siguiente ventana:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img06.png)
_**Imagen 8.** Subgrupo Activos_

Los campos de datos que constituyen los criterios de selección en la Ventana  Subgrupo son los siguientes.

#### FICHA TÉCNICA

**Activo Fijo:** Esta  opción  permite  hacer  búsqueda de  un  Activo/Equipo  por: Número de Inventario o Código Contable.

**Activo Padre:** Esta  opción hace una búsqueda del conjunto de Activos que son hijos o son parte del despiece del código del Activo/Equipo digitado en este campo. Es posible hacer uso de comodines %.

**Alias:** Permite seleccionar un Activo/Equipo por el Alias previamente definido en la ficha técnica.

**Car. Técnica:** Permite seleccionar los Activos/Equipos de acuerdo con una determinada Característica Técnica. Esta opción también permite el uso de comodines (%) cuando se desactiva por medio de un clic el candado <span class="mdi mdi-lock"></span> que está al lado del campo, el cual permite escribir <span class="mdi mdi-lock-open-outline"></span> y funciona igual que en los casos anteriores.

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

**Descripción:** Selecciona los Activos/Equipos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos/Equipos en cuya descripción, en cualquier posición, tengan la palabra  “Motor”.

**Encargado:** Permite seleccionar los Activos/Equipos de acuerdo con un determinado Encargado. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Estado:** Permite la selección de los Activos/Equipos de acuerdo al Estado de Activo o Inactivo. Tal estado es  importante para la generación de OT automáticas en los Programas de Mantenimiento.

**Fabricante:** Permite seleccionar los Activos/Equipos de  acuerdo con un determinado Fabricante. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.

**Indicadores:** Permite  seleccionar los Activos/Equipos  de acuerdo con su clasificación o contenido específico, es decir, filtra equipos que sean solo raiz, o ubicación fisica, componente intercambiable, hasta aquellos que tienen definidas caracteristicas técnicas, biomédicas y contenido de multimedia.

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
<a class="btn white">Mas <span class="mdi mdi-plus-circle"></span></a> en lugar de darlo al botón <a class="btn white">aceptar <span class="mdi mdi-check-circle"></span></a>.

## Vistas Parciales / Pestañas

Las Vistas Parciales o Pestañas permiten complementar la información de la Ficha Técnica de un Activo/Equipo, con otro conjunto de información que solo se muestra cuando es necesario por solicitud del usuario. Las vistas parciales  disponibles son: las características, vida útil, multimedia. Para compañías biomédicas: Características, Vida Útil, Información Biomédica y Multimedia.

A continuación se describen las vistas parciales o porciones de la información del Activo:

### Características

Esta opción permite definir para un determinado Activo/Equipo las Características técnicas que lo definen. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo las Características que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de las características.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img07.png)
_**Imagen 9.** Activos - Características_

En la gráfica anterior, Vista Parcial de Características, se aprecian sus componentes y sus respectivos contenidos. En  la ventana Detalle de Características se encuentra la información relevante a la Característica seleccionada en el Visor, que hace referencia al Activo/Equipo.

A continuación se describen los campos que componen esta  Ventana información adicional.

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**Car. Técnica:** En este campo se traen automáticamente las características definidas  en la Infraestructura, para seleccionar aquellas que son propias del Activo/Equipo activo.

**Unidad  de Medida:** En este campo se traen automáticamente las Unidades de Medida definidas en la   Infraestructura, para seleccionar aquella que corresponda a la Característica seleccionada.

**Tipo:** En este campo se define la cualidad de la Característica definida de acuerdo con los siguientes criterios:

- Controlable
- No controlable

**Valor Nominal:** En este campo se ingresa el Valor Nominal (Máximo 30 caracteres) de la Característica definida de acuerdo con las indicaciones del fabricante.

**Tolerancia:**  En este campo se ingresa el factor de   tolerancia o rango permitido para la característica definida de acuerdo con los criterios del fabricante o la experiencia técnica de los responsables del Activo/Equipo. Existen 2 campos y son:

**Desde:** Se define el valor mínimo permitido para la característica definida.

**Hasta:** Se define al valor máximo permitido para la característica definida.

####   Características Controlables

Esta opción permite ingresar valores de medición a aquellas características que fueron definidas previamente como controlables.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img08.png)
_**Imagen 10.** Activos - Características Controlables_

En  la  gráfica  anterior, Vista Parcial  de  Características Controlables, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de  Características se encuentra la información relevante a la Característica seleccionada  en el Visor, que hace referencia al Activo/Equipo. Junto con esta información se encuentra un conjunto de datos para el registro de la medición que se va a registrar.

A continuación se describen los campos que componen esta  Ventana información adicional.

**Car. Controlable:** En este campo se despliegan automáticamente las características que fueron definidas previamente como Controlables, para seleccionar aquella a la cual se le va a registrar una determinada medición.

**Unidad de Medida:** En este campo se trae automáticamente la Unidad de  Medida definida en la Característica Controlable seleccionada.

**FF Medición:** En este campo se registra la fecha en la cual se realizó la medición de la característica.

**Valor:**  En  este  campo  se  ingresa  el  valor  registrado  en  la  medición  de   la característica.

### Vida Útil

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img09.png)
_**Imagen 11.** Activos - Vida Útil_

En la gráfica anterior, Porción Vida Útil, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Vida Útil se registra todo el compendio de las fechas en forma de cronología desde que se adquiere el Activo hasta su disposición final.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**FF Registro:** En este campo se registra la fecha de registro del Activo en el software **AM**.

**FF Fabricación:** En este campo se registra la fecha de fabricación del Activo dada por el fabricante.

**FF Ingreso Inventario:** En este campo se registra la fecha en que ingresa el Activo al sistema de Activos de la institución.

**FF Fin Garantía:** En este campo se registra la fecha en la que se da por terminada la garantía del Activo/Equipo por parte del Fabricante o Proveedor. Si la garantía está vigente, la fecha se muestra en color verde, mientras que sí la garantía se encuentra vencida, la fecha se muestra en color rojo.

**FF Instalación:** En este campo se registra la fecha en la cual se instaló el Activo en el servicio.

**FF Inicio Operación:** En este campo se registra la fecha en la cual inició el funcionamiento productivo del Activo.

**FF Dado de Baja:** En este campo se registra automáticamente por el sistema la fecha en que se dio de baja el Activo, cuando se selecciona el estado inactivo  “I-Dado de Baja”.

**FF Adquisición:** En este campo se registra la fecha en la cual se formalizó la adquisición del Activo. Esa adquisición puede ser obtenida a través de una Compra, Donación, Arrendamiento Financiero, Comodato, Préstamo y Otro.

**Tipo de Adquisición:** Se elige de la lista el medio por el cual se adquirió el Activo. Puede  ser: Compra, Donación, Arrendamiento Financiero, Comodato, Préstamo y Otro.

**Documento Adquisición:** Se registra el número o nombre del Documento relacionado con el Tipo de Adquisición del Activo.

**Valor Moneda Nacional:** En este campo con capacidad de 13 dígitos, se escribe el valor del Activo/Equipo según la moneda que se indica en el campo Moneda Nacional (normalmente moneda local: Pesos Colombianos).

**Moneda Nacional:** En este campo se selecciona el nombre o abreviatura de la moneda de acuerdo con la definición que se haga de la tabla de infraestructura (moneda local).

**Valor Moneda Extranjera:** En este campo con capacidad de 13 dígitos, se escribe el valor del Activo/Equipo según la moneda que se indica en el campo Moneda Extranjera (normalmente moneda de origen).

**Moneda Extranjera:** En este campo se selecciona el nombre o abreviatura de la moneda de acuerdo con la  definición que se haga de la tabla de infraestructura (moneda de origen).

**Póliza:** Este es un campo indicado en Modo Switche, una vez que le indiquemos al sistema que un registro tiene asociada una póliza se habilitan los campos a diligenciar: Número de póliza, Fecha Ingreso Póliza y Fecha Retiro Póliza.

**Contrato:** Este es un campo indicado en Modo Switche, una vez que le indiquemos al sistema que un registro tiene asociado un contrato se habilita el campo contrato, una vez que se selccione un contrato el sistema asocia automáticamente los campos: Contratista, Fecha Inicio y Fecha Final.

**Vida Útil:** En este campo se registra el número total de años de vida útil del Activo según el fabricante, este campo puede ser de tipo informativo o un campo que permita hacer un seguimiento del registro cuando se requiere por parte del usuario hacer una depreciación de línea recta. Esta configuración debe hacerse desde el módulo de <a class="btn blue">administración</a> por parte de un Usuario Administrador autorizado, en la sección Valores por Defecto, opción Activos. 

**Años de Uso:** Este campo es calculado por el sistema cuando se activado la función depreciación por línea recta e indica el tiempo transcurrido hasta la fecha actual del Activo/Equipo.

**Años Restantes:** Este campo es calculado por el sistema cuando se activado la función depreciación por línea recta e indica el tiempo que resta para cumplir la vida útil del Activo/Equipo.

**Valor de Salvamento:** Es aquella parte del costo de un Activo que se espera recuperar finalmente, al final de su vida útil y ello es independiente de la filosofía de depreciación que se use.

**FF Valor Salvamento:** Es la fecha en la que se definió el Valor de Salvamento.

**Valor Depreciado:** Es el costo de un Activo en la actualidad, despues de haber realizado las depreciaciones de rigor hasta la fecha.

**FF Valor Depreciado:** Es la fecha en la que se realizó la depreciación mas reciente del Activo.

**Valor Razonable:** Es el precio que se recibiría por la venta de un Activo en el momento actual y según el estado en el que se encuentra el Activo. 

**FF Valor Razonable:** Es la fecha se registró el valor razonable.

**Valor Reposición:** Es un valor estimado en el que se debería incurrir al tener que reemplazar un Activo ante contingencias, daños irreparables o cambio de tecnología.

**FF Valor Reposición:** Es la fecha en la que se definió el valor de reposición.

A continuación se explican las siguientes porciones/pestañas que se habilitan desde el módulo <a class="btn blue">administración</a> en la transacción Valores por Defecto, en la sección General:

### METROLOGÍA

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img09_1.png)
_**Imagen 12.** Activos - Metrología_

En la gráfica anterior, Porción Metrología, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Metrología se registra las magnitudes referentes al Activo. Estas son variables únicamnete de consulta.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las variables metrológicas.

**Magnitud:** En este campo se muestra el nombre de la variable definida en la tabla de Infraestructura en la Tabla Magnitudes.

**Unidad de Medida:** Es la abreviatura correspondiente a la medición de la magnitud definida.

**División de Escala:** Es la diferencia entre los valores correspondientes a dos trazos sucesivos de la escala.

**Rango de Medición:** Es el intervalo entre el valor máximo y el valor mínimo de una magnitud.

**Rango de Trabajo:** es intervalo de medición del Activo/Equipo.

**Puntos:** Son los tres puntos de referencia de calibración o de verificación del Activo.

## INFORMACIÓN BIOMÉDICA

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img09_2.png)
_**Imagen 13.** Activos - Info. Biomédica_

En la gráfica anterior, Porción Info. Biomédica, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Info. Biomédica aplicable sólo para las compañías biomédicas se registra la información complementaria y reglamentaria referente a los Activos/Equipos biomédicos.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le está la porción biomédica.

**Datos:** En este recuadro se registra la siguiente información:

- Registro Sanitario INVIMA
- Permiso de Comercialización
- Número (para alguna de las dos opciones anteriores)
- Número de expediente
- Seguridad Eléctrica
- Impacto en el proceso del Activo
- Frecuencia de uso del Activo
- Horas Por (Dia, Semana, Quincena, Mes)
- Proceso Realizado por el Equipo 

**Clasificación por Riesgo:** Las opciones disponibles son: Ninguno, Clase I Bajo Riesgo, Clase II Riesgo Moderado, Clase III Alto Riesgo, Clase IV Muy Alto Riesgo y Crítico Ambiental.

**Clasificación Biomédica:** Las opciones disponibles son: Ninguno, Tratamiento y Mantenimiento de la Vida, Rehabilitacion, Prevención, Análisis de Laboratorio y Equipo Industrial de Apoyo Hospitalario.


### MULTIMEDIA

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img10.png)
_**Imagen 14.** Activos - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al AC en cada una de sus carpetas asignadas. Esta opción permite asociar al registro, uno o varios documentos, con el objetivo de facilitar el trabajo a realizar, o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** ayudas necesarias en la ejecución de la OT que se genera desde este EQ: planos, manuales técnicos, manuales de normas  técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, check lists, protocolos de prueba y otra información estándar para su ejecución, en aras de optimizar los recursos de tiempo y de insumos a ser consumidos, como también con el fin de preservar la seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al AC, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al AC. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al AC. Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al AC. Ejemplo: Videos en formato wmv, mp4, entre otros.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img11.png)
_**Imagen 14.** Activos - Explorador de archivos_

Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>. A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn">abrir</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img12.png)
_**Imagen 15.** Activos - Subir Archivo_

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre el nombre de una de las imágenes, se muestra la previsualización. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img13.png)
_**Imagen 16.** Activos - Archivos Cargados_

Para desasociar un documento, o una imagen o un video, al AC se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn white">Aceptar</a>.

Si se desea descargar un archivo adjunto al AC, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.

## Transacciones

### Modificar Masivamente

A esta opción se llega al sobreponer el cursor del mouse sobre el módulo de Activos y en la parte inferior del título se despliega el conjunto de transacciones disponibles, a continuación se elige la transacción “Modificar Masivamente”.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img13_1.png)
_**Imagen 17.** Activos - Modificar Masivamente_

Esta transacción permite cambiar masivamente el Estado, Descripción, Ubicación Física, Centro de Costos, Encargado, Comentarios, Proveedor y Fabricante, Marca, Modelo, Grupo de los registros previamente seleccionados en un filtro o subgrupo o aquellos que se encuentran en el Visor. Para ello se debe dar clic al link en azul <a class="btn white">modificar masivamente </a> ubicado al lado superior izquierdo de la ventana, seguidamente se muestra el conjunto de  opciones de modificación masiva disponibles.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14.png)
_**Imagen 18.** Activos - Criterios Modificación Masiva_

En la gráfica anterior, Modificar  Masivamente, se aprecian sus componentes y   sus respectivos contenidos.

A continuación se describen los campos que  componen esta transacción:

**Modificar  Solamente  Este Activo:** Al  escoger esta opción, se ejecutan los cambios marcados (Ficha Técnica, Vida Útil e Info. Biomédica) al Activo/Equipo que se encuentre seleccionado en el visor.

**Modificar Todos los Activos en el Visor:** Al escoger esta opción, se ejecutan los cambios marcados (Ficha Técnica, Vida Útil e Info. Biomédica) a todos los Activos/Equipos que se encuentren en el visor.

#### FICHA TÉCNICA

**Modificar Descripción:** Se Modifica Masivamente la Descripción del o los Activos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_1.png)
_**Imagen 19.** Activos - Modificar Descripción_

**Modificar Referencia Externa (Proveedor):** Se Modifica Masivamente la referencia externa proveedor del o los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_2.png)
_**Imagen 20.** Activos - Modificar Referencia Externa_

**Modificar Activo Padre:** Se Modifica Masivamente el Activo/Equipo Padre de los registros que están previamente seleccionados en el visor. Al seleccionar el Activo Padre, se asigna automáticamente el Centro de Costo y la Ubicación Física asociados al Activo Padre seleccionado.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_3.png)
_**Imagen 21.** Activos - Modificar Activo Padre_

**Modificar Centro de Costo:** Se Modifica Masivamente el Centro de Costo de los
Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_4.png)
_**Imagen 22.** Activos - Modificar Centro de Costo_

**Modificar Ubicación Física:** Se Modifica Masivamente la Ubicación Física de los
Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_5.png)
_**Imagen 23.** Activos - Modificar Ubicación Física_

**Modificar Clasificación por Proceso:** Se Modifica Masivamente la Clasificación por Proceso de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_6.png)
_**Imagen 24.** Activos - Modificar Clasificación por Proceso_

**Modificar Confiabilidad Subjetiva:** Se Modifica Masivamente la Confiabilidad Subjetiva de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_7.png)
_**Imagen 25.** Activos - Modificar Confiabilidad Subjetiva_

**Modificar Proveedor:** Se modifica Masivamente el Proveedor de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_8.png)
_**Imagen 26.** Activos - Modificar Proveedor_

**Modificar Fabricante:** Se modifica Masivamente el Fabricante de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_9.png)
_**Imagen 27.** Activos - Modificar Fabricante_

**Modificar Marca:** Se modifica Masivamente la Marca de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_10.png)
_**Imagen 28.** Activos - Modificar Marca_

**Modificar Modelo:** Se Modifica Masivamente el Modelo de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_11.png)
_**Imagen 29.** Activos - Modificar Modelo_

**Modificar Tipo:** Se Modifica Masivamente el Tipo de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_12.png)
_**Imagen 30.** Activos - Modificar Tipo_

**Modificar Encargado:** Se Modifica  Masivamente el Encargado de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_13.png)
_**Imagen 31.** Activos - Modificar Encargado_

**Modificar Estado:** Se Modifica Masivamente el estado Activo – Inactivo de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_14.png)
_**Imagen 32.** Activos - Modificar Estado_

**Modificar Componente Intercambiable:** Se Modifica Masivamente el Componente Intercambiable de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_15.png)
_**Imagen 33.** Activos - Modificar Modificar Componente Intercambiable_

**Modificar Ruta:** Se Modifica Masivamente la Ruta de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_16.png)
_**Imagen 34.** Activos - Modificar Ruta_

**Modificar Grupo del Activo:** Se Modifica Masivamente el grupo de los Equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_17.png)
_**Imagen 35.** Activos - Modificar Grupo del Activo_

**Modificar Comentarios:** Se Modifican Masivamente los Comentarios, que están previamente seleccionados en el visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_18.png)
_**Imagen 36.** Activos - Modificar Comentarios_

#### VIDA ÚTIL

**Modificar FF Registro:** Se Modifica Masivamente la fecha de registro ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_19.png)
_**Imagen 37.** Activos - Modificar FF Registro_

**Modificar FF Fabricación:** Modifica Masivamente la fecha de fabricación ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_20.png)
_**Imagen 38.** Activos - Modificar FF Fabricación_

**Modificar FF Ingreso Inventario:** Se Modifica Masivamente la fecha de ingreso al inventario ubicadada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_21.png)
_**Imagen 39.** Activos - Modificar FF Ingreso Inventario_

**Modificar FF Instalación:** Se Modifica Masivamente la fecha de instalación ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_22.png)
_**Imagen 40.** Activos - Modificar FF Ingreso Inventario_

**Modificar FF Inicio Operación:** Se Modifica Masivamente la fecha de inicio de operación ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_23.png)
_**Imagen 41.** Activos - Modificar FF Inicio Operación_

**Modificar FF Dado de Baja:** Se Modifica Masivamente la fecha de dada de baja en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_24.png)
_**Imagen 42.** Activos - Modificar FF Dado de Baja_

**Modificar FF Adquisición:** Se Modifica Masivamente la fecha de adquisición ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_25.png)
_**Imagen 43.** Activos - Modificar FF Adquisición_

**Modificar Tipo Adquisición:** Se Modifica Masivamente el tipo de adquisición seleccionado de la lista desplegada y que está ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_26.png)
_**Imagen 44.** Activos - Modificar Tipo Adquisición_

**Modificar Contrato:** Se Modifica Masivamente el Contrato ubicado en la pestaña de Vida Útil, de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_27.png)
_**Imagen 45.** Activos - Modificar Contrato_

**Modificar Número de Póliza:** Se Modifica Masivamente el número de la póliza ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_28.png)
_**Imagen 46.** Activos - Modificar Número de Póliza_

**Modificar FF Ingreso de Póliza:** Se Modifica Masivamente la fecha de ingreso de la póliza ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_29.png)
_**Imagen 47.** Activos - Modificar FF Ingreso de Póliza_

**Modificar FF Retiro de Póliza:** Se Modifica Masivamente la fecha de retiro de la póliza ubicada en la pestaña de Vida Útil de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_30.png)
_**Imagen 48.** Activos - Modificar FF Ingreso de Póliza_

#### INFO. BIOMÉDICA

**Modificar Registro Sanitario Invima o Permiso de Comercialización:** Se Modifica Masivamente el número de registro sanitario INVIMA o el número de permiso de comercialización ubicada en la pestaña de Info. Biomédica de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_31.png)
_**Imagen 49.** Activos - Modificar Registro Sanitario Invima o Permiso de Comercialización_

**Modificar Impacto en el Proceso:** Se Modifica Masivamente el impacto en el proceso ubicado en la pestaña de Info. Biomédica del o de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_32.png)
_**Imagen 50.** Activos - Modificar  Impacto en el Proceso_

**Modificar Clasificación por Riespo:** Se Modifica Masivamente la clasificación por riesgo ubicado en la pestaña de Info. Biomédica del o de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_33.png)
_**Imagen 51.** Activos - Modificar Impacto en el Proceso_

**Modificar Clasificación por Uso:** Se Modifica Masivamente la clasificación por uso ubicado en la pestaña de Info. Biomédica del o de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_34.png)
_**Imagen 51.** Activos - Modificar Clasificación por uso_

**Modificar Proceso Realizado por el Equipo:** Se Modifica Masivamenteel proceso realizado por el equipo ubicado en la pestaña de Info. Biomédica del o de los equipos que están previamente seleccionados en el visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img14_35.png)
_**Imagen 52.** Activos - Modificar  Clasificación por uso_



### Actualizar Contadores

Es la función que facilita la Actualización de los Contadores asociados a los Activos/Equiposo. A esta ventana se llega sobreponiendo el cursor sobre el Módulo de Activos y mediante un clic en la opción <a class="btn white">Actualizar Contadores</a> de la sección “Transacciones”.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img15.png)
_**Imagen 53.** Activos - Transacción Actualizar Contadores_

La ventana despliega la lista de los Activos que tienen registrado un Contador dentro de su definición de Ficha Técnica. Junto al Código de cada Activo aparece el tipo de Contador y los datos referentes a la última lectura registrada. Posteriormente, a la derecha de cada línea de un Activo se encuentran disponibles un conjunto de campos para el registro de la información correspondiente a una nueva lectura.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img16.png)
_**Imagen 54.** Activos - Actualizar Contadores_

En la gráfica anterior, ventana para  Actualización de Contadores, se aprecian sus componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana:

**Activo:** En esta columna aparece el listado de todos los Activos/Equipos que tienen definido un Contador en su Ficha Técnica. Al lado izquierdo del Equipo puede haber dos campos. El primero, al extremo izquierdo un signo Más <span class="mdi mdi-plus-circle-outline"></span> o un signo Menos <span class="mdi mdi-minus-circle-outline"></span>, que permiten visualizar u ocultar respectivamente, el despiece del Equipo en aquellos componentes de despiece que también tienen una definición de contador, en su Ficha Técnica. El segundo es una casilla de selección que es marcada cuando se quiere actualizar con un nuevo valor, el contador para el Equipo de esa línea.

**Contador:** En esta columna se trae automáticamente para cada Equipo el Contador  que tenga definido en su Ficha Técnica.

**FF Anterior:** En esta columna se muestra la fecha de la anterior medición del Contador de cada Equipo.

**Valor Anterior:** En esta columna se despliega el valor de la medición anterior.

**FF Nueva:** En esta columna el sistema propone la fecha actual como fecha de la nueva lectura del Contador. Cada fecha se puede asumir o se puede modificar, según sea la fecha de realización de la lectura que se está registrando.

**Valor Nuevo:** En esta columna se ingresa el valor de la lectura de contador a ser registrada.

**AD:** Seleccionando esta opción se realiza la adición del campo <a class="btn white">Valor Nuevo</a> al campo <a class="btn white">Valor Anterior</a> y deja el resultado en la columna <a class="btn white">Nueva Medición</a>.

**RE:** Seleccionando esta opción se copia el  valor de la columna <a class="btn white">Valor Nuevo</a> a la columna <a class="btn white">Nueva Medición</a>.

**Nueva Medición:** En esta columna se listan los valores actualizados de ese contador para el Equipo de cada línea.

> **Nota:** Al finalizar el registro de todas las lecturas  de contadores se debe procesar a dar clic en el botón <a class="btn gray">Actualizar</a>, el sistema muestra un mensaje alerta y para continuar presionar <a class="btn gray">Aceptar</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img17.png)
_**Imagen 55.** Activos - Mensaje Alerta Contadores_

Realizado el proceso se cambian los datos en rojo de la columna Nueva Medición por color verde, mostrando los campos actualizados:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img18.png)
_**Imagen 56.** Activos - Actualización de Valores Contadores_

Adicionalmente, se cuenta con la posibilidad  de activar la opción de “No permitir modificaciones por encima del estándar de planeación”, cuya funcionalidad es impedir la carga de contadores por encima de un estándar predefinido para un periodo de tiempo. Para activarla, se debe ingresar con un usuario administrador e ingresar a Valores por Defecto, en la opción Activos, como se indica a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img19.png)
_**Imagen 57.** Activos - Valores por Defecto - Contadores_


### Cambiar a TreeGrid

Es  la función  que facilita  visualizar en vista de árbol un conjunto de Activos de acuerdo al filtro o subgrupo o bien todo el conjunto de Activos. Es bastante útil además, para visualizar detalladamente el despiece o descomponetización de un Activo. 

Para acceder a esta función se debe dar clic en el icono <span class="mdi mdi-autorenew"></span> ubicado en la parte superior derecha de la ventana Visor de Activos, la vista se visualiza de la siguiente forma:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img20.png)
_**Imagen 57.** Activos - Vista Árbol_

En la gráfica anterior, ventana Árbol de Activos, se aprecian sus componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana:

En esta columna aparece el listado de todos los Activos/Equipos agrupados por su respectivo código y descripción de Ubicacion Física. Al lado izquierdo de cada código visualiza un signo Más <span class="mdi mdi-plus-circle-outline"></span> o un signo Menos <span class="mdi mdi-minus-circle-outline"></span>, que permiten visualizar u ocultar respectivamente, el despiece del Activo/Equipo. 

 El significado de cada color lo indica el ícono de indicadores <span class="mdi mdi-message-alert"></span> ubicado en la parte superior derecha de la ventana, como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img21.png)
_**Imagen 57.** Activos - Indicadores Vista Árbol_

> **Nota:** Para volver nuevamente a la vista Visor de Activos, se debe dar un clic nuevamente al ícono de TreeGrid <span class="mdi mdi-autorenew"></span>, o consultar indicadores <span class="mdi mdi-message-alert"></span>. 

### Consultas desde Activos - Cruce de Activos


En ocasiones se hace necesario hacer búsquedas rápidas de los
Activos sobre su asociación con Órdenes, Solicitudes, Paros e Historia; 
esta transacción hace posible, que en el módulo de Activos se pueda acceder rápidamente a esta información, bien sea uno a uno ó registros preseleccionados en un Subgrupo. 

Para acceder se sobrepone el cursor sobre el módulo de <a class="btn blue">activos</a> donde se despliega el submenú de transaccciones y a continuación dar clic en **Cruces de Activos** como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img35.png)
_**Imagen 58.** Activos - Ir a Cruce de Activos_

A﻿ continuación se visualiza la Ventana Visor de Cruces Activos:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img36.png)
_**Imagen 59.** Activos - Visor Cruce de Activos_


L﻿os títulos de cada columna en color azul permiten organizar la información ascendente o descendente a través de un clic. 

**Esta transacción contiene las funcionalidades en cada ventana:** Subgrupos de información <span class="mdi mdi-filter-variant"></span>,  exportar registros seleccionados <span class="mdi mdi-download"></span> , imprimir reportes <span class="mdi mdi-printer"></span>  y consultar indicadores <span class="mdi mdi-message-alert"></span>. 

Es posible seleccionar uno a uno en la primera columna **Indicador** a través de un clic en el recuadro <a class="btn black"><span class="mdi mdi-checkbox-blank-outline"></span></a>  y elegir lo que se desea consultar en los botones superiores en la izquierda:


- Programas: <a class="btn white">PM</a>  
- Solicitudes de Servicio: <a class="btn white">SS</a>
- Paros: <a class="btn white">ADF</a> 
- Órdenes de Trabajo: <a class="btn white">OT</a> 
- Historia de Mantenimiento:  <a class="btn white">HI</a>

A﻿ continuación se ilustra el siguiente ejemplo:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img37.png)
_**Imagen 60.** Activos - Subgrupo Cruce de Activos_

La imagen anterior muestra el resultado por cada grilla de PM asociados, SS asociados, OT asociados e HI asociados al subgrupo o conjunto de Activos.

También puede visualizarse en la opción <span class="mdi mdi-download"></span>:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img38.png)
_**Imagen 61.** Activos - Exportar Grilla de Cruce de Activos_


E﻿sto puede tardar algunos minutos dependiendo de la cantidad de datos a exportar, para continuar dar clic en el botón **Descargar**. Esto descarga un archivo en formato excel en la estación Cliente:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img39.png)
_**Imagen 62.** Activos - Descarga Grilla de Cruce de Activos_

V﻿isualización de la exportación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img40.png)
_**Imagen 63.** Activos - V﻿isualización Descarga Grilla Cruce de Activos_

P﻿ara continuar y consultar Programas asociados al Activo o Activos seleccionados dar clic en el botón <a class="btn white">PM</a>:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img41.png)
_**Imagen 64.** Activos - Programas Cruce de Activos_

Para consultar Solicitudes asociadas al Activo o Activos seleccionados dar clic en el botón <a class="btn white">SS</a>:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img42.png)
_**Imagen 65.** Activos - Solicitudes Cruce de Activos_

Para consultar ADF asociados al Activo o Activos seleccionados dar clic en el botón <a class="btn white">ADF</a>:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img43.png)
_**Imagen 66.** Activos - Paros Cruce de Activos_

Para consultar Órdenes de Trabajo asociadas al Activo o Activos seleccionados dar clic en el botón <a class="btn white">OT</a>:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img44.png)

_**Imagen 67.** Activos - Órdenes Cruce de Activos_


Para consultar Historia de Mantenimiento asociada al Activo o Activos seleccionados dar clic en el botón <a class="btn white">HI</a>:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img45.png)

_**Imagen 68.** Activos - Historia Cruce de Activos_


## Dashboard de Activos

Esta transaccion permite ver indicadores gráficos básicos sobre la información de los Activos/Equipos. Para acceder a esta opción se sobrepone el cursor sobre el módulo de Activos en el menú principal donde se despliega un submenú de transacciones disponibles y luego dar clic en “DashBoard Activos”.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img29.png)
_**Imagen 69.** Activos - Transacción Dashboard_

Este comando permite visualizar en tiempo real el comportamiento de los Activos/Equipos con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img30.png)
_**Imagen 70.** Activos - Dashboard_

La información del rectángulo de color naranja ubicado en la parte superior derecha como guía a modo de fracción (N/M), indica el número de registros del subgrupo en el visor(N) sobre el número total de registros de Activos existentes en la base de datos (M). Si no hay preselección, los dos números en sus totales son los mismos.
También un indicador de la existencia de un subgrupo, es el ícono <span class="mdi mdi-filter-variant"></span> con una pelota de color rojo que se ubica al lado derecho de dicha fracción.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img31.png)
_**Imagen 71.** Activos - Dashboard Subgrupos_

Para personalizar la vista de los gráficos o tener una información específica se recomienda hacer subgrupos a través del ícono de filtro <span class="mdi mdi-filter-variant"></span>. Asimismo los DashBoards permiten ocultar información con solo dar un clic sobre sus rectángulos de colores como se muestra en la siguiente imagen:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img32.png)
_**Imagen 72.** Activos - Dashboard personalizado_

Sí se desea restablecer la información, se debe dar clic al icono <span class="mdi mdi-autorenew"></span> (actualizar). En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic al ícono de la flecha hacia abajo <span class="mdi mdi-download"></span> como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img33.png)
_**Imagen 73.** Activos - Dashboard personalizado_



## Servicios


### R﻿eportes

Este comando <span class="mdi mdi-printer"></span>  permite visualizar los reportes o informes de la información relacionada a los Activos /Equipos. Existen los siguientes tipos de reportes básicos disponibles:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img34.png)
_**Imagen 74.** Activos - Reportes_

Los anteriores reportes pueden ser  seleccionados para uno o varios Activos/Equipos:

**Todos los Registros:** Con esta opción se imprimen todos los reportes de los Activos/ Equipos existentes en la base de datos, sin importar si se ha realizado un subgrupo.

**Registros del Visor:** Esta opción permite hacer una impresión de todos los Activos/ Equipos que están seleccionados en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

**Registro Seleccionado:** Esta opción permite hacer una impresión del Activo/Equipo que esta seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Para visualizar los reportes, se da un clic sobre el reporte y luego al botón <a class="btn white">Imprimir</a>.
.
Para exportar un reporte se da un clic sobre el reporte y luego al botón <a class="btn white">exportar</a>. Esto descarga automáticamente en la estación cliente el reporte en formato excel.

### Exportar

Esta opción <span class="mdi mdi-download"></span> permite la exportación de los campos contenidos en la ficha técnica de los Activos/Equipos que aparecen en el visor, totales o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abre una ventana como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img27.png)
_**Imagen 75.** Activos - Transacción Exportar_

En la gráfica anterior, se aprecian sus componentes y sus respectivos contenidos.

**Exportar Visor:** Esta opción exporta todos los Activos seleccionados en el visor mediante un subgrupo.

**Exportar Todos los Registros:** Esta opción exporta todas los Activos existentes en la base de datos, sin importar cualquier subgrupo activo.

Luego de escoger una de las opciones anteriores, en la parte inferior aparece seleccionado por defecto el recuadro de selección <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> exportar todos los campos</span></a> pero si se prefiere uno o algunos campos se debe des-seleccionar y a continuación hacer clic en los recuadros a exportar.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap03/chp03_img28.png)
_**Imagen 76.** Activos - Exportar Campos_

Una vez elegida la información, dar clic en el botón inferior <a class="btn white">Exportar</a> el cual genera un archivo de Excel que se descarga automáticamente. El objetivo de esta exportación es llevar toda la información de los Activos a un archivo plano, para luego ser analizados.
