---
title: Ventana Principal de Órdenes de Trabajo
subtitle: En este modulo se conoce cómo trabaja y cómo se visualizan los
  registros de esta sección.
tags:
  - setup
author: win
order: 09_04
date: 2022-02-10T14:45:29.041Z
---
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img02.png)
***Imagen 67.** Órdenes - Acceso directo*

Se accede desde el comando <a class="btn blue">órdenes</a> en la barra de menú principal de **AM**. A través de esta ventana se permite crear Órdenes de Trabajo manuales y Administrar la totalidad de las Órdenes activas, Pendientes de Ejecución, o listas para ser enviadas a Historia. Igualmente, desde esta ventana se Administran las Órdenes de Trabajo Programadas (las que se generan desde Programas de Mantenimiento), a continuación se ilustran las porciones que la componen:

## Ventana Visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img03.png)
***Imagen 68.** Órdenes - Ventana Visor*

Desde esta ventana es posible observar la lista de las Órdenes de Trabajo existentes o un subconjunto de ellas (efectuado a través de un subgrupo <span class="mdi mdi-filter-variant"></span>). Se puede hacer clic en alguna de ellas, para visualizar la información completa de la Orden en una nueva ventana (Ventana Detalle).

Los nombres que encabezan las columnas a  manera de títulos en azul, permiten ordenar de manera ascendente/descendente la información por cada ítem seleccionado, esto a tráves de un clic en el respectivo encabezado.

En esta ventana, en la columna <a class="btn white">estado</a> se define una semaforización de las Órdenes de Trabajo. La finalidad de esta columna es mostrar de manera gráfica el estado de cada registro.

La definición de colores está definida, según la siguiente convención:

**Rojo:** Órden con fecha de generación anterior a más de 7 días antes de la fecha actual.

**Amarillo:** Órden con fecha de generación anterior en un rango comprendido entre 7 días antes de la fecha actual y un día anterior a la fecha actual.

**Verde:** Órden con fecha de generación entre la fecha actual y 7 días después.

**Naranja:** Órden con fecha de generación comprendidas después de 7 días de la fecha actual.

**Morado:** Órden que ha sido Cancelada.

**Azul:** Órden que ha sido Cerrada.

## Ventana Detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img04.png)
***Imagen 69.** Órdenes - Ventana Detalle*

En la gráfica anterior, Ventana Detalle de   Órdenes de Trabajo, se aprecian sus componentes y sus respectivos contenidos. En esta ventana Detalle se encuentra la información relevante a la OT seleccionada en el Visor. A través de ella se Administran los datos genéricos de la Órden de Trabajo. Es desde esta ventana que se crean Órdenes de Trabajo Manuales.

A continuación se describen los campos que componen esta ventana Detalle de Órdenes de Trabajo; además cuando se quiera ingresar una nueva OT, se deberán diligenciar los siguientes campos.

**OT**: Aparece el número o consecutivo asignado por **AM** al registro. Si se está en el proceso de creación de una OT Manual, este campo solamente muestra el Año. Una vez se crea (Insertar) la OT, **AM** asigna un consecutivo a dicha Orden.

**F/H Creación:** Es la fecha en la cual se crea la Órden de Trabajo. En el caso de Órdenes Programadas, esta fecha es asignada automáticamente por el sistema y no es modificable, según el Programa de Mantenimiento que la genera. Para las Órdenes de Trabajo Manuales, **AM** sugiere la fecha actual del sistema (aunque puede ser modificada).

**Descripción:** Es un texto corto por medio del cual se indica la naturaleza de la labor a realizar. Debe ser conciso y no dar lugar a ambigüedades, este campo tiene una longitud de 100 caracteres. Se recomienda definir la descripción bajo la siguiente norma: iniciar con un verbo en infinitivo como revisar, corregir, inspeccionar, conectar, etc., continuar con el Objeto de mantenimiento o Activo/Equipo y finalizar con un complemento explicatorio. Ejemplo: Revisar la transmisión delantera del sistema. Cambiar a los rodillos la cobertura  de caucho.

**Prioridad:** Es un número de 1 a 7 que  indica la prioridad de realización de la OT. Normalmente 1 significa un trabajo de gran urgencia, mientras que 7 es una labor de baja prioridad.

**F/H Programada:** En este campo se ingresa  la fecha programada para realizar la ejecución de la OT.

**Referencia:** En este campo se puede ingresar el número de un documento, que  sirve como referencia o relación a la OT, ejemplo: número de una factura, número de una Orden de Compra asociada, o un documento interno de despacho de almacén, etc.

**Estado:** Este campo está bloqueado y muestra el nombre del Estado de la OT.

**Código del Activo:** Aquí se establece el Objeto de Mantenimiento, ya sea digitando directamente el Código y presionando la tecla tabublar, o seleccionándolo con el ícono de filtro <span class="mdi mdi-filter-variant"></span>. Una vez se digita o se selecciona, aparece al lado derecho la Descripción del Activo/Equipo.

**Descripción:** En este campo se visualiza la información de la descripción del Activo seleccionado.

**Activo Fijo:** En este campo se visualiza la información del Número de Activo Fijo del Activo/Equipo que se ha ya establecido en la ficha técnica de este mismo.

**Referencia Externa (Proveedor):** En este campo se visualiza la información de la Referencia del Equipo que se ha ya establecido en la ficha técnica de este mismo.

**Serial:** En este campo se visualiza la información del Serial del Equipo que se ha ya establecido en la ficha técnica de este m ismo.

**Alias:** En este campo se visualiza la información del Alias del Equipo que se haya establecido en la ficha técnica de este mismo.

**Solicitante:** En este campo se define el nombre del Solicitante de la OT. Cuando la OT es generada desde una Solicitud de Servicio, este campo contiene el solicitante ingresado en automáticamente.

**Incluido en TE (RI):** Al seleccionar esta opción, en el campo **“Solicitante”** solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura.

**Correo Electrónico:** En este campo se define el correo electrónico del Solicitante de la OT, cuando el solicitante es digitado manualmente. Si el solicitante se selecciona con la opción **“Incluido en TE (RI)”** y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. 

**Centro de Costo:** Es el Centro de Costo asignado a la Órden de Trabajo, que corresponde a uno de los Centros de Costo predefinidos en la tabla respectiva y que es **“Responsable”** del pago de los consumos de Gasto Real que dicha OT genere. Inicialmente, se sugiere el Centro de Costo que tiene asociado el Equipo Objeto de Mantenimiento, aun así, puede cambiarse.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubi. Física:** Es el lugar físico en el que se realiza la labor. Inicialmente se sugiere  la Ubicación Física asociada al Equipo u Objeto de Mantenimiento, pero puede cambiarse a cualquier otro valor predefinido en la tabla de Ubicaciones Físicas.

**Centro Responsable:** Especifica el Centro  Responsable o grupo de mantenimiento,  encargado de realizar la labor.

**Responsable ejecutor:** En este campo se elige a la persona, natural o jurídica, Responsable por la labor a ejecutar.

**Filtrar por CR:** Al seleccionar esta opción, en el campo **“Responsable”** solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción **“C. Responsable”**. En otro  caso, en el campo  **“Responsable”** se despliegan  todos los  **“Responsables”** existentes en la tabla respectiva.

**Contrato:** En este campo se selecciona  el  contrato que pertenece al Contratista responsable de ejecutar la OT.

**Responsable por la institución:** En este campo se elige a la persona de la institución, que acompañará y/o recibirá la labor prestada por el Responsable ejecutor, cuando este sea un Contratista o Servicio Externo.

**T. Trabajo:** Indica los Tipos de Trabajo que se realizan en la OT. Es posible definir más de un Tipo de Trabajo para una OT.

**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en la Órden de  Trabajo. Toda OT debe poseer uno. Si en la OT se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige **Otro”** y a continuación, en el tipo de **“Actividad”** se especifica detalladamente, el tipo de labor.

**T. Actividad:** Aquí se establece el Tipo de Actividad a realizar en la Órden. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de **“Otro”**, en el tipo de Actividad se debe seleccionar el valor **“MN: Mantto”**, lo que indica que se trata de una actividad que constituye mantenimiento. Si en el campo anterior se ha seleccionado el valor **“Otro”**, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

**F/H de Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la Fecha y hora del daño, falla o avería. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora se maneja en formato 12 horas. Cabe anotar, que la fecha y hora consignadas corresponden al momento en que se informó del daño o falla a Mantenimiento, así que es posible que el daño haya ocurrido en una fecha/hora anterior. Sin embargo, se debe procurar, administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del paro.

**T. Estimado:** Es un campo netamente informativo, e indica de manera aproximada cuánto Tiempo demora la labor. Se establece el número y a continuación el período de tiempo que representa (Días, Horas o Minutos).

**Tiempo Improductivo:** En este campo lo indica la persona o personas encargadas de realizar la labor, si debe pararse el Equipo para proceder a la realización de la misma. Cuando se dice que el Equipo genera Tiempo Improductivo significa que no está en operación, y por lo tanto, posiblemente improductivo. Este campo se tiene en cuenta al momento de cerrar la OT: si el indicativo de Tiempo Improductivo está habilitado, el **AM** calcula y carga el Tiempo Improductivo al equipo. En caso contrario no lo hace. 

**Criterio:** Es un campo informativo que despliega el criterio utilizado por **AM** para haber generado la OT. (Solamente para Órdenes de Trabajo Programadas).

**Tarea:** Este campo informativo permite establecer, a través del ordinal de la tarea  que muestra, cual fue el PM que generó la OT actual. Es válido solamente en el caso  de Órdenes Programadas.

**Control Presupuestal:** Esta opción permite definir si la Órden de Trabajo maneja Presupuesto. Para las OT, esta opción siempre está seleccionada, pero aparece protegida, ya que  toda OT Programada conlleva el Presupuesto Aprobado.

Para las Órdenes de Trabajo Manuales, esta  opción se establece en el momento de creación de la misma. Esta elección se debe marcar antes de darle clic al botón <a class="btn blue">insertar</a> de otra forma, **AM** asume que la OT no va a requerir Control Presupuestal y la posibilidad de hacer la marcación se inactiva en el acto.

Cuando una Órden de Trabajo Manual exige control presupuestal y el presupuesto no ha sido aprobado, no es posible registrar ni modificar el Gasto Real en ella.

**Comentarios:** Esta opción se usa para ingresar los nuevos comentarios referentes a toda la ejecución de la OT. Al dar clic al botón <a class="btn gray">Agregar Comentario</a> aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada; además de la fecha, hora y el usuario logueado que realizó el comentario.

Este espacio de comentarios sirve para dos efectos:

Cuando se genera la OT, como comentarios a priori, para especificar referencias importantes o ayudas previstas y necesarias en la ejecución posterior de la OT como planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas; normas de seguridad o enfoques de acción. Sin embargo, en la gran mayoría de los casos se utiliza la pestaña Multimedia para registrar estos datos.
Cuando ha concluido la ejecución de la OT, es posible utilizarlo para registrar hechos interesantes acerca de la misma ejecución, como el estado del equipo antes de la intervención, detalles de la intervención, estado del mismo equipo después de ella, recomendaciones a los usuarios del equipo, recomendaciones a las personas de mantenimiento y otros conceptos interesantes a juicio de los ejecutantes.

# Ventana submenú de Órdenes de trabajo

## Indicadores

Es posible saber cuáles OT son de tipo Metrología, Preventiva/Programada, Correctiva y Cerrada Parcial, si tienen Multimedia y Servicio Evaluado directamente desde la ventana visor, sobreponiendo el cursor en el ícono de Indicadores <span class="mdi mdi-message-alert"></span> ubicado en la parte superior derecha de la ventana mostrando un conjunto de pelotas de colores que indican el tipo de información definida y asociada, como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img04_1.png)
***Imagen 70.** Órdenes - Ventana Detalle*

El significado de los colores es el siguiente:

* **Naranja:** Órden que tiene asociado archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
* **Azul:** Órden con servicio evaluado.
* **Amarillo:** Órden de TM Metrología.
* **Verde:** Órden de TM Preventivo o Programada.
* **Rojo:** Órden de TM Correctivo.
* **Azul Oscuro:** OT en estado Cerrada Parcial.

## Subgrupos

Se usa para seleccionar un grupo de Órdenes de Trabajo que cumplen con un conjunto de criterios o filtros definibles aquí, con el objeto de realizar estudio posterior sobre él. Para ingresar a esta opción se debe dar clic al icono de filtro <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de OT.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas las Órdenes de Trabajo. Lo que significa que de no escoger un criterio, se obtiene como resultado del subgrupo el mismo conjunto de todas las Órdenes de Trabajo.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar. Cuando el ícono se muestra con una pelota roja, está indicando que lo que se visualiza en el visor es un subgrupo.

El programa permite entonces hacer selección de un grupo de OT de acuerdo con los criterios seleccionados en la siguiente ventana:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img05.png)
***Imagen 71.** Órdenes - Ventana Subgrupo*

Los campos de datos que constituyen criterio de selección, se agrupan en dos bloques:

**1. FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA ÓRDEN DE TRABAJO**

**AC - Alias:** Este campo filtra las Órdenes de Trabajo activas para el o los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC – Cód. de Barras Int.:** Permite seleccionar las OT que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo y que posea una Órden.

**AC – Cód. de Barras Prov.:** Permite seleccionar las OT asociadas a un Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.

**AC - Activo Fijo:** Este campo preselecciona las Órdenes de Trabajo activas para el o  los Equipos cuyo Número de Activo corresponde a los valores aquí definidos.   En este  campo se pueden utilizar los comodines.

**AC - Código:** Esta selección agrupa las OT cuyos Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todas las OT cuyo código de Activo inicia por 341. Si se escribe %1 se seleccionan todos los Solicitudes de Servicio cuyo código de Activo finaliza en un “1”. El porcentaje (%) es un carácter comodín que significa “todos”. También, es posible seleccionar el Activo a través del visor del módulo de Activo. Para ello se da un clic sobre el icono de filtro <span class="mdi mdi-filter-variant"></span> que se encuentra al lado del campo. Acto seguido se muestra la ventana de visor de Activos independiente. Ene Allí, una vez se encuentra el Activo, se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">aceptar</a> o se hace doble clic sobre el registro seleccionado. Inmediatamente este código aparece automáticamente en el campo.

**AC-Descripción:** Selecciona las OT asociados a los Activos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**AC-Estado:** Filtra las OT de acuerdo con el “Estado” de un Activo/Equipo u Objeto de Mantenimiento que se encuentre en estado “activo”.

**AC-Número Activo Fijo:** Este campo filtra las OT para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Referencia:** Este filtro permite filtrar las OT para el o los Activos cuya Referencia  corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Serial:** Esta alternativa permite filtrar las OT de acuerdo con el número serial del Activo objeto de mantenimiento. El campo acepta comodines (%).

**AC-Ubicación Física:** Permite la selección de las OT cuyo Activo se encuentre en una Ubicación Física determinada. Existen dos formas de definir la Ubicación Física del Activo. La primera es seleccionando una de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre de la Ubicación Física utilizando comodines (%) lo cual, también hace posible seleccionar OT cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona las OT con Activos cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona las OT asociados a los Activos que se encuentran asociados al tipo ingresado por el usuario.

**2. FILTRAR POR CAMPOS DE LA ORDEN DE TRABAJO**

**Acción Técnica:** Filtra las OT a las cuales se le definió la Acción Técnica seleccionada en esta opción. Existen dos formas de definir la Acción Técnica de la OT. La primera es seleccionando una de la lista desplegable. La segunda, es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre de la Acción Técnica usando comodines (%) que filtran la OT cuya Acción Técnica tenga parte del nombre igual.

**Causa de Cierre:** Permite buscar las OT que tienen una Causa de Cierre específica. Existen dos formas de definir la Causa de Cierre de la OT. La primera es seleccionándola desde la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre de la Causa de Cierre utilizando comodines (%) que permiten filtrar las OT cuya Causa de Cierre tenga parte del nombre igual.

**Causa de Pendiente:** Filtra las OT cuyo Estado es “Pendiente” según el tipo de Causa Pendiente seleccionada. Existen dos formas de definir la Causa de Pendiente de la OT. La primera es seleccionándola de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre de la Causa de Pendiente utilizando comodines (%) que filltran las OT cuya Causa de Pendiente tenga parte del nombre igual.

**Causa de Falla:** Permite buscar las OT que tienen una Causa de Falla específica. Existen dos formas de definir la Causa de Falla de la OT. La primera es seleccionándola de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>  el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre de la Causa de Falla utilizando comodines (%) que buscan las OT cuya Causa de Falla tenga parte del nombre igual.

**Centro de Costo:** Filtrar OT de acuerdo con el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Centro de Costo a través del uso de comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% selecciona todas las OT en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Centro Responsable:** Agrupa las OT cuyo Centro Responsable sea el seleccionado. Existen dos formas de definir el Centro Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre del Centro Responsable utilizando comodines(%).

**Contrato:** Filtra las OT que se encuentren asociadas a un contrato ya definido en la tabla de “CONTRATO” en el módulo de Infraestructura. Existen dos formas de definir el Contrato de la OT. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre del Contrato utilizando comodines (%). Cuando se utilizan comodines, es posible filtrar las OT cuyo Contrato tenga parte del nombre igual.

**Criterio de Generación:** Permite filtrar el subconjunto de OT generadas desde PM, bajo el Criterio de Programación “XX” seleccionado. Los criterios son:

| **Abreviatura** | **Significado**         |
| --------------- | ----------------------- |
| **MM**          | Mensual                 |
| **SS**          | Semanal                 |
| **SM**          | Semestral               |
| **AN**          | Anual                   |
| **DD**          | Días (Mín. 3)           |
| **SA**          | Semanas del año         |
| **+M**          | Meses (mas de uno)      |
| **+S**          | Semanas (mas de una)    |
| **KI**          | Contador por Incremento |
| **KL**          | Contador por Límite     |
| **FK**          | Frecuencia y Contador   |
| **TM**          | Trimestral              |
| **+K**          | Contador (mas de uno)   |
| **??**          | Sin Criterio            |

**Descripción:** Esta opción permite seleccionar las OT que cumplan con el criterio de selección establecido en este campo, es posible utilizar la funcionalidad de comodines (%). 

**Efecto de Falla:** Este campo permite seleccionar las OT que posean una causa de falla específica. Existen dos formas de definir el Efecto de Falla de la OT. La primera es seleccionándola de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Efecto de Falla utilizando comodines (%). Cuando se utilizan comodines, es posible seleccionar OT cuyo Efecto de Falla tenga parte del nombre igual.

**Estado Particular:** Permite seleccionar las OT de acuerdo a su Estado Particular. Al descolgar aparece el listado de todos los Estados posibles para una **OT**.

**Estado General:** Permite seleccionar las OT de acuerdo a un Estado general: Abierta, Cancelada y Cerrada.

**Fecha de Cierre:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Cierre de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan las Órdenes de Trabajo cuya fecha de cierre esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan los registros cuya fecha de cierre esté en un lapso posterior a la digitada en **“Desde”**.

**Comentarios:** Filtra los registros que contengan una parte del comentario registrado en este campo.

**Fecha de consumo Mano de Obra:** Filtra las Órdenes de Trabajo por  un rango de la Fecha de consumo de mano de obra en el Gasto Real de la **OT**. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha de consumo de mano de obra esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no  digitar el campo **“Hasta”**, se buscan las ots cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en **“Desde”**.

**Fecha de consumo en Gasto Real:** Este criterio filtra las Órdenes de Trabajo por  un rango de la Fecha de consumo de Gasto Real. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha de consumo de Gasto Real esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan las OT cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en **“Desde”**.

**Fecha de Inicio de Trabajos:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Inicio de Trabajos.  Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha de Inicio de trabajos esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan las OT cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en **“Desde”**.

**Fecha de Fin de Trabajos:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Fin de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha de fin de trabajos esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan las OT cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en **“Desde”**.

**Fecha de Creación:** Permite filtrar las Órdenes de Trabajo cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha de creación esté en el lapso anterior a la fecha digitada en **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan las OT cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en **“Desde”**.

**Fecha Programada:** Este criterio filtra  las Órdenes de Trabajo por un rango de la Fecha Programada. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“Desde”**, se buscan los registros cuya fecha programada esté en el lapso anterior a la fecha digitada en  **“Hasta”**. De no digitar el campo **“Hasta”**, se buscan las OT cuya fecha programada esté en un lapso posterior a la digitada en **“Desde”**.

**Gasto Real Mano de Obra:** Esta opción habilita una lista desplegable donde se escoge el criterio deseado, junto con un campo donde se digita el valor de comparación. Los criterios son:

* **Igual (=)**
* **Mayor (>)**
* **Menor (<)**

Estos criterios actúan en comparación con el valor digitado en el campo que se activa al lado del operador aritmético. Ejemplo:
Si se escoge el criterio Mayor (>) y la cantidad  es 100.000, eso significa que filtrara todas las OT cuyo Gasto Real en la Mano de Obra sea Mayor a Cien Mil Pesos o unidades monetarias.

**Gasto Real Materiales y Repuestos:** Esta opción habilita una lista despegable donde se escoge el criterio deseado, junto con un campo donde se digita el valor de comparación.
Los criterios son:

* **Igual (=)**
* **Mayor (>)**
* **Menor (<)**

Estos criterios actúan en comparación con el valor digitado en el campo que se activa al lado del operador aritmético.

**Gasto Real otros Conceptos:** Esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación.
Los criterios son: 

* **Igual (=)** 
* **Mayor (>)**  
* **Menor (<)**.

 Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético.

**Número de la OT**: Filtra los registros con base en su número consecutivo. Para ello se define en el criterio un rango. Aparecen cuatro campos, para ubicar el comienzo del rango **“Desde”** (Año-Consecutivo) y el fin del rango **“Hasta”** (Año-Consecutivo). De no digitar los campos **“Desde”**, se buscan las OT cuyo número es inferior al digitado en **“Hasta”**. De no digitar los campos **“Hasta”**, se buscan las OT cuyo número es  posterior al digitado en **“Desde”**.

**Número de la Solicitud:** Permite buscar la OT por medio del consecutivo de la Solicitud de Servicio que fue asociada a la OT.

**Presupuesto:** Permite filtrar las Órdenes de Trabajo de acuerdo al manejo que hagan sobre su Presupuesto: No maneja, No aprobado, Aprobado.

**Prioridad:** Fitra las OT de acuerdo a su  Prioridad, habilitándose una lista despegable desde el nivel 1 hasta el nivel 7.

**Responsable por la Institución:** Agrupa las OT de acuerdo al Responsable por Institución o la persona que recibe a satisfación. Existen dos formas de buscar el Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable, en el cual también es posible usar comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT cuyo Responsable tenga una parte del nombre igual.

**Referencia:** Este opción agrupa las OT que tienen asociado el valor seleccionado, en el campo Referencia. Es posible usar comodines (%).

**Responsable:** Filtra las Órdenes de Trabajo de acuerdo al Responsable asignado.Existen dos formas de buscar el Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable, en el cual también es posible usar comodines (%). Cuando se usan comodines, es posible seleccionar las OT cuyo Responsable tenga una parte del nombre igual. 

**Responsable Asignado para Histograma:** Permite buscar las OT cuyo Responsable está asignado para el histograma. Existen dos formas de definir el Responsable asignado para histograma de la OT. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable, en el cual también es posible usar comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT cuyo Responsable tenga una parte del nombre igual.

**Responsable en Gasto Real:** Permite la preselección de las OT cuyo Responsable en Gasto Real está definido en la mano de obra del Gasto Real.

**RP-Código:** Filtra las OT cuyo Repuesto fue asociado en el Gasto Real. Para hacer la búsqueda del Repuesto, primero se elige el almacén de la lista desplegable en el primer campo, una vez elegido, se activa automáticamente el segundo que permite buscar el Repuesto a través del ícono azul <span class="mdi mdi-filter-variant"></span> de Materiales y Repuestos o digitarlo manualmente. Cuando se busca a través del ícono, se abre una nueva ventana de Materiales y Repuestos (allí también es posible seguir haciendo subgrupos). Para la selección del Repuesto se hace un doble clic o se selecciona el registro dando clic en el botón superior <a class="btn white">Aceptar</a>.

**Solicitante (Digitado Manualmente):** Permite agrupar las OT cuyo Solicitante fue especificado manualmente y no pertenece a la lista de Terceros, está búsqueda es posible hacerla a través de los comodines (%).

**Solicitante (Incluido en  terceros - Tipo RI):** Permite agrupar las OT cuyo Solicitante fue seleccionado de la tabla de terceros (como RI) y coincide con el definido en este criterio. Existen dos formas de definir el Solicitante de la OT. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Solicitante usando comodines (%). El sistema hace la búsqueda de las OT cuyo Solicitante tenga parte del nombre igual.

**Tipo de Actividad:** Este criterio se habilita una vez que se haya elegido un TM. Filtra las Órdenes por TA. Existen dos formas de hacer la búsqueda. La primera es
seleccionándola de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>
 el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del TA utilizando comodines (%), el sistema hace la búsqueda de las OT cuyo TA tenga parte del nombre igual.

**Tipo de Mantenimiento:** Filtra las Órdenes de trabajo por TM. Al activar ésta opción se activan las siguientes opciones: Correctivo, Preventivo, Preventivo Manual, Predictivo, Metrología, Inspección, Lubricación, Otro-Mantto y Otro.

**Tipo de Trabajo:** Agrupa las Órdenes de Trabajo de acuerdo al TT al que están  asociadas. Estas opciones aparecen individualizadas, pero es posible seleccionar dos o más.

**Origen OT:** Filtra las Órdenes de Trabajo que se hayan generado por Solicitudes de Servicio, Paros y Averías u Órdenes de trabajo.

**Ubicación Física:** Permite filtrar las OT cuyo Activo esté en la ubicación física que se determina en este criterio. Existen dos formas de filtrar la Ubicación Física. La primera es seleccionándola de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre de la Ubicación Física utilizando comodines (%), cuando se usan, es posible seleccionar los registros cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona las OT con Activos donde la Ubicación Física empiece por esta palabra, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**Días Vencimiento:** Muestra los días vencidos que tiene una OT, a partir de la fecha programada y la fecha actual. Permite filtrar de las OT cuyos días de vencimiento apliquen al criterio definido. Esta opción habilita una lista despegable donde se escoge el criterio deseado, junto con un campo donde se digita el valor de comparación. Los criterios son:

* **Igual (=)**
* **Mayor (>)**
* **Menor (<)**

Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético.

> *Nota: Es importante tener en cuenta que cuando se están realizando los subgrupos, se pueden utilizar uno o varios de estos criterios simultáneamente. También se permite la unión de selecciones, es decir, después de haber realizado una búsqueda de un criterio, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón <a class="btn white">Mas <span class="mdi mdi-plus-circle"></span></a> , en lugar de darlo al botón <a class="btn white">aceptar <span class="mdi mdi-check-circle"></span></a> .*

## Vistas Parciales / Pestañas

### Acciones técnicas

Esta opción conduce a la tabla de Acciones Técnicas en una nueva pestaña de la OT. Esta tabla está ligada a la Infraestructura, creada con su mismo nombre, que contiene un listado de Acciones Técnicas frecuentes en un área de Mantenimiento. Con la información contenida allí, se pretende describir, breve pero concretamente, la actividad general realizada en una OT. Las Acciones Técnicas en una OT se pueden definir, después de haber seleccionado en la ventana Detalle de la Ficha Técnica de la OT en el momento de su creación, el cuadro llamado <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> manejo de costos abc</span></a> o bien, haberlas definido en la creación del Programa de Mantenimiento, continuación se muestra la porción Acciones Técnicas de una OT:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img06.png)
***Imagen 72.** Órdenes - Ventana Detalle Acciones Técnicas* 

En la pestaña de Acciones Técnicas de la Ventana Detalle de OT aparece un nuevo recuadro en el que irán apareciendo las que se vayan adicionando a través de un botón Adicionar Acción Técnica.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img06_01.png)
***Imagen 73.** Órdenes - Adicionar Acciones Técnicas* 

A continuación se describen los campos que componen esta ventana de información adicional:

**Que Hacer:** Aparece con los campos bloqueados para que el usuario visualice la información básica de la OT a la cual se le están asociando las Acciones Técnicas.

**Nro. Ordinal:** Es el ordinal asignado a cada Acción Técnica según el orden en el que se vayan adicionando.

**Acción Técnica:** En este campo se traen automáticamente las Acciones Técnicas definidas en la Infraestructura para seleccionar aquellas que se asociarán a la OT.
Las Acciones Técnicas se seleccionan de la lista desplegable y se adicionan con el botón del signo <span class="mdi mdi-plus-circle icon white"></span>.

**Costo Estandar:** Es el costo o valor que tiene la Acción Técnica.

**Duración Estandar:** El es el tiempo que toma la ejecución de la Acción Técnica.

**Unidad de tiempo:** Es la unidad de duración que tiene la Acción Técnica. Puede ser expresada en Días, Horas o Minutos.

> **Nota:** Para actualizar una Acción Técnica de una OT se hace un clic sobre esa opción y luego se elige una nueva de la lista desplegable, finalizando con un clic al botón de <a class="btn gray">actualizar acción técnica</a>. 
> Para desasociarla a una OT, se debe  seleccionar y hacer un clic sobre el icono de Eliminar <span class="mdi mdi-delete"></span>.
> Es importante tener en cuenta que las asociaciones y desasociaciones solo surgen efecto al <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a> o guardar la OT.

## Presupuesto

En una OT Manual que se acaba de crear, solo se permite definir o modificar su
Presupuesto, hasta el momento en que se ha ya aprobado el mismo. Además, solamente se
puede crear o modificar el Presupuesto de una OT si se ha establecido la opción
“Control Presupuestal”, en la ventana detalle de la OT durante la creación de la OT.
Esto significa que si a una OT no se le marcó el recuadro de Control Presupuestal, no
tendrá la posibilidad de aceptar datos de Presupuesto, solamente de Gasto Real.

Los datos de Gasto Real se pueden registrar en una OT en cualquier momento, mientras
esa OT no exija Control Presupuestal. Pero si la OT exige Control Presupuestal, solo se
puede registrar el Gasto Real después de haber aprobado el Presupuesto, en cuyo caso
ya no será posible modificar este último.
Se ingresa mediante un clic en la pestaña “Presupuesto” en la ventana detalle de OT. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_01.png)
***Imagen 74.** Órdenes - Presupuesto* 

En esta ventana se resumen los totales de los costos presupuestados de Mano de Obra
Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos de Costo, para
acceder a cada uno de ellos se da un clic en el botón acorde a lo que se necesite ingresar en su respectiva ventana detalle, a continuación se explica detalladamente como ingresarlos:

**Ingresar Mano de Obra Interna**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_02.png)
***Imagen 75.** Órdenes - Mano de Obra Interna* 

A través de la ventana de Ingreso de Mano de Obra Interna se administra el Presupuesto
de Mano de Obra de la OT.

Es importante destacar que el presupuesto de Mano de Obra de una OT, se prepara a nivel
de Oficio, es decir, no se tiene en cuenta la persona que va a realizar la labor, pues se
trata de un presupuesto y no se conoce a ciencia cierta, en la mayoría de los casos,
quiénes serán los encargados de ejecutar la labor.

En la izquierda de la ventana aparece un pequeño listado de los oficios presupuestados para la OT activa. A la derecha, es posible efectuar modificaciones, así como ingresar nuevos oficios al presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se quiera actualizar o ingresar nuevos oficios al presupuesto de una OT, se deberán diligenciar los siguientes campos:

**CR:** Es el centro responsable al que pertenece el oficio presupuestado. Es un campo de solo lectura, que se establece automáticamente al seleccionar el oficio.

**OF:** Lista los Oficios definidos en el módulo de Infraestructura. Aquí se escoge el Oficio a presupuestar.

**TT:** Muestra de manera automática el TT que tiene configurado el Oficio seleccionado. Es un
campo de solo lectura, que se establece automáticamente en el recuadro de Mano de Obra
Interna una vez se haya escogido el Oficio.

**H. Hombre:** Número de horas hombre requeridas presupuestadas según el Oficio descrito.

**Minutos:** Es el número de Minutos, que junto con las horas, conforman el tiempo total
presupuestado. Así, si se desea presupuestar 4 horas y media de un oficio, debe ponerse “4” en el campo “H. Hombre”, y “30” en el campo “MM”.

**Personas:** Este campo indica cuántas personas van a desempeñar la labor. Retomando el ejemplo anterior, si se ingresa “2” en este campo, se está diciendo que 2 personas van a
desempeñar el oficio. Como ya se definió que el total de tiempo requerido son 4 horas y
media, se deduce entonces que entre las 2 personas se consumirá este tiempo.

**Vr. Hora:** Es el valor unitario de la hora para el oficio en cuestión. AM sugiere el costo hora traído desde la tabla de Infraestructura para el oficio, pero puede cambiarse.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total del presupuesto para ese Oficio. Es el producto del Vlr. Hora por H. Hombre y Minutos. Se visualiza en la tabla de Mano de Obra Interna.

Una vez que se diligencian todos los campos se da clic en el ícono del Más <span class="mdi mdi-plus-circle icon white"></span>, seguidamente se observa que la información creada se muestra en el recuadro de la mano de Obra Interna, ubicada al lado izquierdo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_02.png)
***Imagen 76.** Órdenes - Ingresar Mano de Obra Interna* 

Una vez terminado el proceso, hacer clic en el botón <a class="btn gray ">ir a la matriz</a> para regresar a la ventana principal de Presupuesto.

Es posible, actualizar un registro una vez ingresado. Se debe seleccionar o dar un clic sobre el ítem registrado y luego finalizar con el botón <a class="btn gray">actualizar mano obra interna</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_03.png)
***Imagen 77.** Órdenes - Actualizar Mano de Obra Interna* 

Por otro lado, para eliminar un registro de la tabla de Mano de Obra Interna, se selecciona
el registro y luego se da clic al icono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario de si está seguro de eliminar el registro y finalmente se da clic en <a class="btn">Aceptar</a>, como se muestra en la siguiente imagen:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_04.png)
***Imagen 78.** Órdenes - Eliminar Mano de Obra Interna* 

**Ingresar Mano de Obra Externa**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_05.png)
***Imagen 79.** Órdenes - Mano de Obra Externa* 

A través de la ventana de Ingreso de Mano de Obra Externa se administra el Presupuesto de Mano de Obra Externa de la OT.

Es importante resaltar que el presupuesto de Mano de Obra Externa de una OT, se prepara a nivel de la Especialidad (Oficio) del Responsable Externo, es decir, no se tiene en cuenta a la persona natural o jurídica que va a realizar la labor, pues se trata de un presupuesto y no se conoce a ciencia cierta, en la mayoría de los casos, quiénes serán los encargados de ejecutar la labor.

A la izquierda aparece el listado de los oficios o especialidades presupuestados, a la derecha es posible efectuar modificaciones a los ítems presupuestados o nuevos ingresos de oficios al presupuesto.

Para hacer actualizaciones o ingresar nuevas especialidades al Presupuesto de la OT se  deben diligenciar los campos que componen esta ventana:

**CR:** Es el centro responsable al que pertenece el Oficio o Especialidad presupuestado. Es un campo de solo lectura, que se establece automáticamente al seleccionar el Oficio o
Especialidad.

**OF:** Lista los Oficios o Especialidades definidos en el módulo de Infraestructura. Aquí se escoge el Oficio o la Especialidad a presupuestar.

**TT:** Muestra de manera automática el TT que tiene configurado el Oficio o Especialidad seleccionado. Es un campo de solo lectura, que se establece automáticamente en el recuadro de Mano de Obra Externa una vez se haya escogido el Oficio o Especialidad.

**Costo Unitario por hora/visita:** Se digita el valor unitario por hora o por visita de parte del responsable ejecutor externo para esa actividad programada, ya sea un Contratista o un Servicio Externo.

Una vez que se diligencian todos los campos se da clic en el icono del Más <span class="mdi mdi-plus-circle icon white"></span>, seguidamente, se observa que la información creada se muestra en el recuadro de la mano de Obra Externa, ubicada al lado izquierdo.

Es posible, actualizar un registro una vez ingresado. Se debe seleccionar o dar un clic sobre el ítem registrado y luego finalizar con el botón <a class="btn gray">actualizar mano obra externa</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_06.png)
***Imagen 80.** Órdenes - Actualizar Mano de Obra Externa* 

Una vez terminado el proceso, hacer clic en el botón <a class="btn gray">ir a Matriz</a>. para regresar a la ventana
principal de Presupuesto.

Por otro lado, para eliminar un registro de la tabla de Mano de Obra Externa, se selecciona el registro y luego se da clic al icono de eliminar <span class="mdi mdi-delete"></span> sale un mensaje de alerta que indica al usuario de si está seguro de eliminar el registro y finalmente se da clic en <a class="btn">Aceptar</a>, como se muestra en la siguiente imagen:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_07.png)
***Imagen 81.** Órdenes - Eliminar Mano de Obra Externa* 

**Ingresar Materiales y Repuestos**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_08.png)
***Imagen 82.** Órdenes - Materiales y Repuestos* 

A través de la ventana de Ingreso de Materiales y Repuestos se administra el Presupuesto de Materiales y Repuestos de la OT.
A la izquierda aparece el listado de los Almacenes y Materiales y Repuestos presupuestados.

A la derecha es posible efectuar modificaciones a los ítems o ingresar nuevos.
Para actualizar o ingresar nuevos Materiales y Repuestos al presupuesto de una OT, se deberán diligenciar los siguientes campos:

**Almacén:** Se elige el almacén dónde se encuentra el repuesto a ingresar al presupuesto.

**Buscar Por:** Este campo se listan las siguientes opciones para hacer la búsqueda de un Material y Repuesto: Código, Referencia, Cod. Barra Int y Cod. Barra Prov. Se habilitará una vez se elija el Almacén.

**M y R:** Este campo se habilita una vez se haya seleccionado el Almacén. Existen dos formas de seleccionar el Repuesto:

La primera consiste de forma manual solo digitando el valor correspondiente al código, referencia, código de barras interno o proveedor del Material y Repuesto.

La segunda consiste en buscar el Material y Repuesto, a través del visor de Material y Repuesto. Para ello se da un clic sobre el icono de filtro de Repuesto <span class="mdi mdi-filter-variant"></span>. Acto seguido se muestra la ventana de visor de Repuesto con la posibilidad de hacer allí subgrupos. Una vez se encuentra el Repuesto, se selecciona dando un clic sobre cualquiera de sus campos, seguidamente un clic sobre el botón <a class="btn white">Aceptar</a> de esa ventana o también es posible seleccionarlo dando doble clic sobre el registro seleccionado. Inmediatamente ese código aparece en el campo de M y R y automáticamente se actualizan los campos de UM y Valor Unitario.

**Descripción M y R:** Es un campo de solo lectura, que muestra la descripción del material y repuesto seleccionado.

**Cantidad:** Es la cantidad presupuestada para el repuesto seleccionado.

**Unidad de Medida:** Es un campo de solo lectura que muestra la unidad de consumo del
repuesto seleccionado.

**Vlr. Unitario:** Es el valor unitario del repuesto seleccionado. AM sugiere el valor unitario ya establecido del Repuesto en cuestión, sin embargo, puede cambiarse.

**TT:** Este campo de solo lectura, muestra el TT para el cual se presupuesta el Material o
Repuesto.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total del presupuesto para ese Repuesto. Es el producto entre el Vlr. Unitario y la Cantidad.

Una vez se diligencien estos campos se da clic en el ícono de Más <span class="mdi mdi-plus-circle icon white"></span> para agregar como se muestra en la imagen anterior. 

Es posible, actualizar un registro una vez ingresado. Se debe seleccionar o dar un clic sobre el ítem registrado y luego finalizar con el botón <a class="btn gray">actualizar material y repuesto</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_09.png)
***Imagen 83.** Órdenes - Actualizar Materiales y Repuestos* 

Una vez terminado el proceso, hacer clic en el botón <a class="btn gray">ir a matriz</a> para regresar a la ventana principal de Presupuesto.

Por otro lado, para eliminar un registro de la tabla de Material y Repuesto, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-lock"></span> sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">Aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_10.png)
***Imagen 84.** Órdenes - Eliminar Materiales y Repuestos*

**Ingresar otros Conceptos**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_11.png)
***Imagen 85.** Órdenes - Otros Conceptos de Costo*

A través esta ventana de Ingreso de Otros Conceptos se administra el Presupuesto de Otros Conceptos de la OT.

A la izquierda aparece el listado de los Otros Conceptos presupuestados, a la derecha es posible efectuar modificaciones a los otros conceptos presupuestados, así como
ingresar nuevos conceptos de costo al presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se quiera actualizar o ingresar nuevos Otros Conceptos al presupuesto de una OT, se deberán
diligenciar los siguientes campos:

**Concepto:** Es el “Otro Concepto” a presupuestar. Se selecciona descolgando la lista de otros Conceptos, traída desde su tabla en Infraestructura.

**TT:** Este campo de solo lectura, muestra el TT para el cual se presupuestó ese Concepto
de Costo desde su tabla en Infraestructura.

**Moneda:** Este campo de solo lectura, muestra la moneda definida al otro concepto de
costo en la tabla de Infraestructura.

**Nro. Unidades**: Se define el número de unidades del Concepto de Costo seleccionado
anteriormente.

**Vlr. Unitario:** Es el valor presupuestado del “Otro Concepto Costo”. AM sugiere el valor
unitario del concepto que se encuentra ingresando al sistema.

**Vlr. Total:** Es el costo total presupuestado del “Otro Concepto Costo” teniendo en cuenta el número de unidades y el valor unitario.

Una vez se diligencien estos campos se da clic en el ícono de Más <span class="mdi mdi-plus-circle icon white"></span>
 para agregar.

Es posible, actualizar un registro una vez ingresado. Se debe seleccionar o dar un clic sobre el ítem registrado y luego finalizar con el botón <a class="btn gray">actualizar otro concepto</a>, como se muestra continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_12.png)
**Imagen 86.** Órdenes - Actualizar Otro Concepto de Costo_

Por otro lado, para eliminar un registro de la tabla de Otro Concepto de Costo, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, mostrando un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_13.png)
***Imagen 87.** Órdenes - Eliminar Otro Concepto de Costo*

> **Nota:** Finalmente, al hacer clic en el botón <a class="btn gray">ir a la matriz</a>, se regresa a la ventana principal de Presupuesto y para que todos estos cambios queden grabados en la OT se debe dar
> clic en <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a>.

### Gasto Real

Para ingresar a esta opción, se debe dar clic en la pestaña “Gasto Real” de la ventana detalle de OT.
Los datos de Gasto Real se pueden registrar en una OT en cualquier momento, mientras esa OT no exija Control Presupuestal. Pero si la OT exige Control Presupuestal, solo se puede registrar el Gasto Real después de haber aprobado el Presupuesto, en cuyo caso, ya no es posible modificarlo. Una vez aprobado, este Presupuesto debe pasarse al Gasto Real a través del botón <a class="btn gray">pasar el presupuesto al gasto real</a> como se muestra a continuación:

(https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_14.png)
**Imagen 88.** Órdenes - Pasar Presupuesto a Gasto Real_

Una vez que se traslada el Presupuesto al Gasto Real, el sistema muestra un mensaje de confirmación y la ventana de Gasto Real se visualiza de la siguiente manera:

(https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_15.png
_**Imagen 89.** Órdenes - Gasto Real_

Esta tabla resume los totales de los gastos de Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos de Costo. A través de esta ventana de Gasto Real se puede administrar el Gasto Real de la OT. Se compone de dos zonas:

En la zona superior, aparece la matriz de Gasto Real, que resume los costos reales para la OT, discriminando por TT (En las filas), y por Tipo de Consumo (En las columnas). La última fila y la última columna de la matriz, discriminan la diferencia contra el Presupuesto, conformando así el Control Presupuestal de la OT.

En la zona inferior, aparecen los botones para ingresar Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos, y Otros Conceptos.

**Ingresar Mano de obra Interna**

(https://ayuda.winsoftware.com.co/assets/images/cap09/chp09_img07_16.png
**Imagen 89.** Órdenes - Pasar Presupuesto a Gasto Real_

A través de la ventana de GR de Ingreso de Mano de Obra Interna s e administra el Gasto Real de Mano de Obra de la OT.
A diferencia del Presupuesto de Mano de Obra Interna, el Gasto Real de la Mano de Obra Interna se efectúa a nivel de Responsable, es decir, se tiene en cuenta a la persona que realiza la labor.


A continuación se describen los campos que componen esta ventana; cuando s e requiera actualizar o ingresar nuevas personas que intervinieron en una OT, al gasto real de la misma, se deberán diligenciar los siguientes campos:


**Fecha de Uso:** Es la fecha en la cual se utiliza el recurso.


**OF:** Es el Oficio al que pertenece el Responsable asignado. Es un campo de solo lectura, que se establece una vez se selecciona el Responsable.


**Responsable:** Es la persona que ha ejecutado la OT. Se elige el Responsable descolgando el listado de Responsables, traído desde la tabla de Inf raestructura.


Filtrar por OF: Al seleccionar esta opción, en el campo “Responsable” solo se descuelgan los Responsables correspondientes al Oficio definido en la opción “OF”. De no hacerlo, en el campo “Responsable” se despliegan todos los “Responsables ejecutores” existentes en la tabla respectiva.

H. Hombre: Es el número de Horas Hombre consumidas por el Responsable en cuestión.
Minutos: Es el número de Minutos, que junto con las horas, conforman el tiempo total consumido. Así, si se consumen 3 horas y media de un responsable, debe registrarse “3” en el campo “H. Hombre”, y “30” en el campo “Minutos”.
Tipo Hr.: Dado que un Responsable a través del Oficio del mismo puede poseer varios tipos de Hora, cada uno con un valor distinto, en este campo se selecciona el Tipo de Hora adecuado. AM sugiere el valor hora correspondiente, dependiendo del tipo elegido. Si se elige el Tipo “Otro”, AM no sugiere ningún valor hora, y deja a decisión del usuario el valor a asignar en este campo.
Vlr. Hora: Es el valor unitario de la hora para el oficio del Responsable en cuestión. AM automáticamente sugiere el costo por hora traído desde la tabla de Infraestructura para el Oficio, en los casos en que el tipo hora es distinto de “Otro”, el campo se habilitará para

**Tipo Asignación:** Este campo define al responsable de la mano de obra de la **OT**, el tipo de intervención que realiza en el tiempo que la orden de trabajo esté abierta. La  opción  **“Presupuesto para Histograma”** es para definir la proyección a futuro de la carga de trabajo del responsable; y  **“Ejecución Real”** es para definir la carga de trabajo ejecutada.

**Ingresar Materiales y Repuestos**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img11.png)

En la gráfica anterior, Ventana de Ingreso de Materiales y Repuestos, se aprecian  sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Materiales y Repuestos se administra el  consumo real de Materiales y Repuestos de la Orden de Trabajo.

A continuación se describen los campos que componen esta ventana; cuando se  quiera actualizar o ingresar nuevos Materiales y Repuestos al gasto real de una **OT**, se deberán diligenciar los siguientes campos:

**Fecha de Uso:** Es la fecha en la cual se utiliza el recurso.

**Al macén:** Se elige el almacén dónde se encuentra el repuesto a ingresar al Gasto Real.

**Repuesto:** En este campo se digita directamente el código del repuesto a cargar a la **OT**. Si no se ha seleccionado un almacén, no es posible seleccionar el repuesto. También   puede   elegirse   el   repuesto,   haciendo   clic   en   los    binoculares,   y seleccionado el repuesto desde la lista. Una vez elegido el repuesto, aparece al lado derecho su descripción.

**Descripción:** Es   un  campo  de  solo 	lectura,  que   muestra  la  descripción  del repuesto seleccionado.

**Tipo de trabajo:** Este campo muestra el Tipo de Trabajo para el cual se carga el Material o Repuesto.

**Unidad  de  Medida:**  Es  un  campo  de  solo  lectura  que  muestra  la  unidad  de consumo del repuesto seleccionado.

**Cantidad:** Es  la  cantidad  a  cargar,  utilizada,   del   repuesto seleccionado.

**Valor Unitario:** Es el valor unitario del repuesto seleccionado. AM sugiere el valor   unitario   ya   establecido  del   Repuesto  en   cuestión,  sin   embargo   puede cambiarse.

**Ingresar otros Conceptos de Costo**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img12.png)

En la  gráfica anterior,  Ventana de Ingreso de  otros  conceptos, se  aprecian  sus componentes y sus respectivos contenidos.

A  través  de  la  ventana de  Ingreso de  otros  Conceptos se  administra el  Gasto Real de \*\* “otros Conceptos’’ de la Orden de Trabajo.

A continuación se describen los campos que componen esta ventana; cuando  se quiera actualizar  o  ingresar  nuevos  otros  Conceptos al  gasto  real  de  una  **OT**, se  deberán diligenciar los siguientes campos:

**F. Uso:** (Fecha de Uso).  Es la fecha en la cual se utiliza el recurso.

**Concepto:** Es el otro  Concepto a cargar a la **OT**. Se selecciona descolgando la lista de otros Conceptos, traída desde su tabla en Infraestructura.

**Nro. De Unidades:** Es la cantidad del concepto seleccionado anteriormente.

**Valor Unitario:** Es el valor presupuestado del **otro Concepto”**. AM sugiere el valor unitario del concepto que se encuentra ingresando al sistema.

**Valor Total:** Es el costototal presupuestado del **otro Concepto”** teniendo en cuenta el número de unidades y el valor unitario.

**Información  Adicional:** Es  un campo donde se  define un pequeño  comentario sobre el consumo.

Al hacer clic en el botón `<a class="btn">`Ir a Matriz`</a>`, se regresa a la ventana principal de Gasto Real.

## Evaluación de Servicio

Se puede realizar la evaluación del servicio prestado por el personal de mantenimiento o de servicios, en la **OT**  seleccionada.  La evaluación la debe realizar un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez se ha ya cerrado la **OT**. Esta opción de evaluación se hace disponible, cuando  se  han definido   las  cinco  preguntas  de  evaluación,  en   **“Parámetros  para Evaluación del  Servicio”**, en  **“Valores por Defecto”**, en el módulo de  **“Administración”**. Es posible realizar la evaluación del servicio de una **OT**, cuando el solicitante se encuentra registrado como un usuario solicitante en el **AM** en el módulo de Administración en Usuarios.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img13.png)

Esta opción está disponible cuando se han  definido las cinco preguntas de evaluación, en  **“Parámetros para Evaluación del Servicio”**, en   **“Valores por  Defecto”**, en  el  módulo de  **“Administración”** y también es posible realizar la evaluación del servicio a través del -**AMsi**- sin la necesidad de ingresar a –AM4G-.

### Multimedia

![Ventana Detalle](manualAM/0.images/cap11/chp11_img14.png)

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional a la **OT** en cada una de sus carpetas asignadas. Esta opción permite asociar a la **OT**, uno o varios documentos, con el  objetivo de facilitar el trabajo a  realizar,  o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

Los documentos anexos pueden contener: ayudas necesarias en la ejecución de la  **OT**, planos,  manuales  técnicos,  manuales  de   normas  técnicas  de   Mantenimiento   o  de especificaciones  detalladas,  normas  de  seguridad,  enfoques  de  acción,  procedimientos sobre cómo realizar la labor, check lists, protocolos de prueba y Otra inf ormación estándar para  su  ejecución,  en  aras  de  optimizar  los  recursos  de  tiempo  y de   insumos  a  ser consumidos, como también en aras de preservar la seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información a la **OT**, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica de la **OT**.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada a la **OT**. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas a la **OT**. Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados a la **OT**. Ejemplo: Videos en formato wmv, entre otros.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img15.png)

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono `<span class="iconify btn" data-icon="cloud-upload">`Cargar, a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir,  se selecciona el archivo y se da clic en `<a class="btn">`abrir`</a>`.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img16.png)

Una vez se da clic en `<a class="btn">`abrir`</a>`, se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón en `<a class="btn">`Subir archivo`</a>`.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img17.png)

Los archivos que se van adicionando van quedando guardados uno debajo del **OT**ro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, a la **OT** se da clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón `<a class="btn">`Aceptar`</a>`.

Si se desea descargar un archivo adjunto a la **OT**, se debe dar clic en el `<span class="iconify btn" data-icon=cloud-download>` la nube con flecha hacia abajo, que se encuentra al lado derecho del archivo que se quiere descargar.

## Transacciones

### Analizar / Generar

![Ventana Detalle](manualAM/0.images/cap11/chp11_img18.png)

En la gráfica anterior, Analizar / Generar, se aprecian sus componentes y sus respectivos contenidos.

A  través de la  ventana Analizar /  Generar, **AM** propone un conjunto de   ots   que debieran ser ejecutadas en el período seleccionado, para ser analizadas y posteriormente generadas como Órdenes de Trabajo Programadas.

El Procedimiento para efectuar un Análisis y posterior Generación de Órdenes de Trabajo es el siguiente:

Digitar la fecha  **“Desde”**, que corresponde al inicio del período a programar. **AM** sugiere la fecha del sistema.
Digitar la fecha  **“Hasta”**, que corresponde al final del período a programar. **AM** sugiere la fecha de una semana después, pero es una fecha modificable a gusto. Normalmente el período a Analizar, en este proceso, se trata de un período de corto plazo: tres días, una semana, una quincena o un mes.
Debajo de estas fechas, en la sección de  **“Datos de la última generación”**, aparece la información del rango de fechas para el que se realizó un proceso de Generación de ots la última vez, y el código de login del usuario que ejecutó el proceso.

**Clic en el botón  “Analizar”**.

**Aparece el siguiente mensaje, contestar**  “Aceptar”\*\* si se desea  ejecutar  el proceso de Analizar.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img19.png)

* **AM**- recorre todos   los programas de mantenimiento, y establece cuáles deben generar órdenes de trabajo en el rango de fechas ya estipulado. Durante  este proceso, puede visualizarse el  estado  de  avance  del análisis, en la parte inferior izquierda, el sistema escribe un mensaje en la pantalla de las Ots analizadas deltotal de PMs registrados en la base de datos. El proceso también se puede cancelar haciendo clic en el botón `<a class="btn">`Cancelar`</a>`, y el sistema detiene el proceso sin ningún tipo de perjuicio, es decir, a los datos no son afectados en absoluto.

Una vez finalice el proceso, se muestra el detalle del análisis y se muestra cuántas órdenes de trabajo se detectaron.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img20.png)

* **Clic en Ver Diagrama**

A continuación, se  procede  a visualizar a través de un Diagrama de Gantt, en el cual se muestra la información del Activo con su respectivo PM y al lado derecho se muestra por colores el cronograma con las fechas proyectadas de las actividades. Para esto, se procede a dar clic al botón `<a class="btn">`Ver Diagrama`</a>` y se muestran la siguiente gráfica

![Ventana Detalle](manualAM/0.images/cap11/chp11_img21.png)

Es importante aclarar, que hasta este punto, no ha sido generada ninguna Orden de Trabajo. Solamente se ha detectado un grupo potencial de ellas, que deberían ser ejecutadas de acuerdo a los criterios de programación, si el análisis del programador de mantenimiento lo decide.

* **Clic en Ver Reportes**

A continuación, se procede a verificar si para las órdenes detectadas por el proceso de análisis, existen todas las garantías de ejecución, en el rango de fechas programado. Para esto, se procede a imprimir varios reportes que para el caso se  presentan, tal y como se visualiza en la siguiente gráfica:

![Ventana Detalle](manualAM/0.images/cap11/chp11_img22.png)

**Los reportes disponibles para efectuar esta revisión, son:**

* Cronograma de Mantenimiento Programado con TM
* Cronograma de Mantenimiento Programado
* Actividades por Mes y Día
* Listado de Repuestos
* Actividades por Mes y Día con Presupuesto Discriminado

Los anteriores reportes pueden ser seleccionados para una o varias **OT**.

Después de seleccionar el reporte, pulse el botón `<a class="btn">`imprimir`</a>`.

Si al imprimir alguno de estos reportes, el usuario advierte que una o varias de  estas Ordenes de Trabajo no deben ser  Generadas, éste es  el momento para  que  cancele todo el proceso, va ya a los Programas de Mantenimiento respectivos,  revise y modifique sus criterios, y vuelva a realizar un nuevo el proceso de Análisis.
Si después de efectuar la revisión, el usuario está seguro de que ésas son las Órdenes de Trabajo a  generar,  se  hace  clic  en  el  botón  `<a class="btn">`Generar`</a>`.  Este   proceso crea tantas Órdenes de Trabajo como hayan sido detectadas por el  proceso  de Análisis.  Durante este proceso, puede consultarse cómo va el proceso haciendo clic en el botón `<a class="btn">`Consultar`</a>`.
Una vez se generan las Órdenes de Trabajo, los Programas de Mantenimiento que  las generaron, se actualizan automáticamente, ajustando sus criterios y fechas, preparando la consistencia de las generaciones futuras.

### Modificar Masivamente

Esta  transacción  permite  cambiar  masivamente  el  Responsable,  los   Comentarios,  el Estado, la Evaluación de Servicio, entre otros; de las Órdenes de Trabajo previamente seleccionadas, que se encuentran en el Visor.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img23.png)

A  continuación  se  describen  los  campos  que  componen  esta  ventana  de   información adicional.

**Modificar Solamente esta Orden:** Al seleccionar esta opción, el cambio se aplica solamente a la **OT** que esta resaltada en el visor.

**Modificar todas las Ordenes en el  visor**: Al escoger esta opción, el cambio se refleja  en todas las ots previamente seleccionadas en el visor.

**Agregar Responsable Ejecutor**: Se agrega masivamente el Responsable Ejecutor (en Gasto Real), de la(s) **OT**(s)  que están previamente seleccionadas en el visor.

![Agregar Responsable Ejecutor](manualAM/0.images/cap11/chp11_img24.png)

**Modificar Responsable**: Se modifica masivamente el Responsable, de la(s) **OT**(s)  que están previamente seleccionadas en el visor.

![Modificar Responsable](manualAM/0.images/cap11/chp11_img25.png)

**Modificar Comentarios**: Se modifican masivamente los Comentarios, de la(s) **OT**(s) que están previamente seleccionadas en el visor, teniendo en cuenta la opción  **“Añadir  estos comentarios a los comentarios actuales”** o  **“Reemplazar por estos Comentarios”**.

![Modificar Comentarios](manualAM/0.images/cap11/chp011_img26.png)

**Modificar Centro de Costo**: Se modifica masivamente el centro de costo a las Ordenes de Trabajo previamente seleccionadas.

![Modificar Centro de Costo](manualAM/0.images/cap11/chp011_img27.png)

**Modificar  el  Estado**:  Se  cambia  Masivamente  el  Estado  de  la(s)  **OT**(s)  que  están previamente seleccionadas en el visor.

![Modificar  el  Estado](manualAM/0.images/cap11/chp011_img28.png)

**Modificar F/H Programada**: Modifica masivamente la Fecha Hora Programa a las Ordenes de Trabajo previamente seleccionadas.

![Modificar F/H Programada](manualAM/0.images/cap11/chp011_img29.png)

**Evaluar el Servicio**: Modifica masivamente la Evaluación de Servicio a las Órdenes de Trabajo previamente seleccionadas.

![Evaluar el Servicio](manualAM/0.images/cap11/chp011_img30.png)

**Modificar Ubicación Física**: Modifica masivamente la Ubicación Física a las Ordenes de Trabajo previamente seleccionadas.

![Modificar Ubicación Física](manualAM/0.images/cap11/chp011_img31.png)

**Modificar Contrato:** Se modifica masivamente el contrato previamente definido a las Órdenes de Trabajo que están previamente seleccionados en el visor.

![Modificar Contrato:](manualAM/0.images/cap11/chp011_img32.png)

**Modificar Centro Responsable**: Se modifica masivamente el centro responsable a las Órdenes de Trabajo previamente seleccionadas.

![Modificar Centro Responsable](manualAM/0.images/cap11/chp011_img33.png)

**Modificar Prioridad:** Se modifica masivamente la prioridad a las Órdenes de Trabajo previamente seleccionadas.

![Modificar Prioridad](manualAM/0.images/cap11/chp011_img34.png)

**Modificar Tipo de Actividad:** Se modifica masivamente el tipo de actividad a las Órdenes de Trabajo previamente seleccionadas.

![Modificar Tipo de Actividad](manualAM/0.images/cap11/chp011_img35.png)

**Modificar Tipo de Mantenimiento**: Se modifica masivamente el tipo de mantenimiento a las Órdenes de Trabajo previamente seleccionadas.

![Modificar Tipo de Mantenimiento](manualAM/0.images/cap11/chp011_img36.png)

**Adjuntar Documento**: Se adjuntan  masivamente documentos  a las Órdenes de Trabajo previamente seleccionadas.

![Adjuntar Documento](manualAM/0.images/cap11/chp011_img37.png)

### Seguimiento o Cierre

![Seguimiento o Cierre](manualAM/0.images/cap11/chp011_img38.png)

En la gráfica anterior, Ventana de Seguimiento o Cierre, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Seguimiento o Cierre se mantiene al día la inf ormación vital de ejecución de la Orden de Trabajo, desde el momento en que se crea, hasta el momento en que se cierra para poder enviarla a Historia. Es  aquí  donde se  registran  las  fechas, tiempos y demás básicos concernientes a la ejecución de la labor.

A continuación se describen los campos que componen esta ventana; cuando se  quiera actualizar o   hacer seguimiento de   una   Orden de   Trabajo, se   deberán  diligenciar los siguientes campos:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica de la **OT**.

**Modificar Solamente esta** OT**:** Al seleccionar esta opción, el cambio se aplica solamente a la **OT** que esta resaltada en el visor.

**Modificar Todas las ots en el  visor:** Al escoger esta opción, el cambio se refleja  en todas las ots previamente seleccionadas en el visor.

**F/H de Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la Fecha y hora del daño ocurrido. La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas). Cabe an**OT**ar, que la fecha y hora consignadas   corresponden   al   momento   en   que    se   informó   del   daño   o   falla   a Mantenimiento, así que es posible que el daño  ha ya ocurrido en una fecha/hora anterior. Sin embargo se debe procurar,  administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del Daño.

**F/H Atención:** Es la fecha y hora en la que el Personal de Mantenimiento llega a atender el fallo reportado, o sea, cuando se hace presente en la Ubicación Física del equipo, para realizar una inspección previa sobre el Equipo Reportado. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora la hora se define en formato Militar (de 24 horas). Normalmente se utiliza en Órdenes de Trabajo Manuales. Una vez se digitan la Fecha y Hora de Atención, éstas se sugieren para la fecha y hora de Inicio de Trabajos y Fin de Trabajos de la Orden, claro está, si tales fechas y horas no han sido digitadas aún.

**F/H Inicio Trabajos:** Es la Fecha y Hora que indica el momento de inicio de labores, una vez que todas las condiciones están dadas: se han superado los tiempos de inspección y administrativos; la máquina está lista y en condiciones de ser mantenida,  ya fue entregada al Depto. de Mantenimiento y éste a su vez, cuenta con todos los recursos necesarios para la ejecución: herramientas, instrumentos, materiales, repuestos y por supuesto, personal. La  fecha se m aneja en formato AAAA/MM/DD  (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas).

**F/H Fin Trabajos:** Es la Fecha y Hora que indica el momento en que finalizan las labores de   mantenimiento,   incluyendo   las   pruebas   o   ensayos,   que   determinaron   el   buen funcionamiento del equipo. La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas).

**Tiempo Duración (ttr):** **AM** sugiere como Tiempo de Duración, (o time to repair) en este campo, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos. Cabe an**OT**ar, que no siempre el Tiempo de Duración es la  diferencia entre estas fechas/horas, pues  pueden existir  eventos  que dejan  temporalmente a  la **OT**  en Estado de  **“Pendiente”**. **AM** permite corregir el tiempo de Duración en una **OT**, después de que fue calculado por el sistema, para que refleje el tiempo real de la ejecución.

Por ejemplo, si una **OT** tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30, y como Fecha de Fin de Trabajos XXXX/12/01 16:00, **AM** sugiere como Tiempo de Duración, 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar Otra labor, se debe corregir la duración: 5 horas y 30 minutos.

**T. Improductivo: -** AM **sugiere como Tiempo Improductivo la diferencia entre la Fecha y Hora  de  Fin  de  Trabajos  y la  Fecha  y Hora Info  de  Paro (Para  Órdenes  de  Trabajo Correctivas), o como, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos (Para Ordenes de Trabajo no Correctivas). Sin embargo, este valor  puede  corregirse,  después  de  que  fue  calculado  por  el  sistema,  para  reflejar  la cantidad Real de Tiempo Improductivo que tuvo el Equipo en la** OT\*\* actual.

Por ejemplo, si una **OT** correctiva tiene como fecha de Info de Paro XXXX/12/01 08:00, y como  fecha  de   Fin   de   Trabajos  XXXX/12/02  12:30, **AM** sugiere   como  Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese  lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora este turno de producción, se debe definir el tiempo improductivo como solamente de 20 horas y 30 minutos.

Estado de la **OT**: Una Orden de Trabajo puede tener uno de los siguientes Estados:

* **E:**	En Ejecución
* **K:** 	Cancelada
* **C:** 	Cerrada
* **P:** 	Pendiente
* **CR:**   Cerrada Retroalimentada

Estos son los Estados predeterminados por el Sistema **AM** para las **OT**, pero el usuario puede personalizar otros Estados en la Tabla de  **“Estados”** de Infraestructura.

**Causa pendiente:** Dado el caso de que a la Orden de Trabajo se le ha ya  definido el
Estado  **“P: Pendiente”**, en este campo se indica la causa por la cual la **OT** está en dicho estado. Para ello se elige una de las opciones que se descuelgan. En caso de requerir registrar una causa distinta, que no exista en la lista, ella se puede crear  en la  tabla respectiva de Infraestructura, tras de lo cual se regresa y se registra en este sitio.

**Causa de Cierre:** Por defecto, cuando se trata de una **OT** cerrada y ejecutada, el sistema ubica en este campo la causa  **“**OT **Ejecutada”**. Si la **OT** se ha cerrado con un Estado de  **“K: Cancelada”**, en  este  campo se  define la  Causa respectiva,  eligiendo una  de  las opciones que se descuelgan. En caso de requerir registrar una  causa distinta, que no exista en la lista, ella se puede crear en la tabla respectiva de  Infraestructura, tras de lo cual se regresa y se registra en este campo.

**Causa de Falla:** Para Órdenes de Trabajo correctivas, en este campo se registra la Causa de la Falla que dio origen a la labor actual. Se  elige  una  opción,  a  manera  de  falla primaria, de la lista que se descuelga. Las opciones que se descuelgan corresponden a las definidas en su tabla en la Infraestructura.

**Efecto de Falla:** Para Órdenes de Trabajo correctivas, en este campo se registra el Efecto m as significativo de la falla que se presentó y fue reportado por producción.

**Meses de Garantía:** Indica cuántos meses de garantía se ofrecen por la labor  realizada. El número de  meses establecido empieza a regir a partir de la Fecha de Fin  de Trabajos de la **OT**.

**Confiabilidad   Subjetiva   EQ.:**   Este   campo   le   permite   establecer,   al   técnico   de mantenimiento encargado de  la  labor,  un concepto  subjetivo sobre la  Confiabilidad del Equipo una vez finalizados los trabajos.  Es un concepto que no se fundamenta en criterios o metodologías técnicas, pero que sí indica una apreciación de quien revisó y mantuvo el equipo objeto de la **OT**.

**Fecha y estado del contador al momento de ejecución:** En este campo se ingresa el contador del equipo y su fecha de lectura al momento de cerrar la Orden  de Trabajo. Al actualizar esta información el sistema genera un mensaje para modificar la fecha de inicio de periodo en el módulo de programas; el usuario decide si se desea modificar este tipo de información o no.

![ventana Seguimiento o Cierre](manualAM/0.images/cap11/chp011_img39.png)

Al momento de ingresar a Seguimiento o Cierre se visualiza el botón de Bitácora, al darle clic en este botón, se muestra una nueva ventana, la cual da a conocer al  usuario los diferentes estados, prioridades y responsables por los cuales ha pasado la Orden de Trabajo.

![ventana bitacora](manualAM/0.images/cap11/chp011_img40.png)

### Enviar a Historia

El objetivo de esta transacción es desplazar hacia el módulo de Historia de Mantenimiento, las Órdenes de Trabajo que estando Cerradas, residen todavía en el módulo de Órdenes de Trabajo. Tales Órdenes tienen cualquiera de los siguientes estados:

* **C:** 	Cerrada.
* **K:** 	Cancelada

Al hacer clic en la transacción, aparece la siguiente ventana:

![ventana OT ](manualAM/0.images/cap11/chp011_img41.png)

En la ventana aparece un botón  **“Enviar a Historia”** y tres casillas de selección. Estas casillas  de selección parametriza los registros que se desea enviar a Historia.

**Todas las** OT **cerradas:** Con esta opción se realiza el envío de todas las Órdenes de Trabajo existentes en la base de datos, sin importar cualquier subgrupo activo.

**Todas las** OT **cerradas del visor:** Esta opción se realiza el envío de todas las Órdenes seleccionados en el visor mediante un subgrupo.

**La** OT **seleccionada:** Esta opción realiza el envío de la **OT** que está resaltada  en  el visor (tiene la línea verde del cursor sobre sí).

Para enviar a Historia, se selecciona una de las opciones  y se hace clic en el  botón`<a class="btn">`Enviar a Historia`</a>`, entonces aparece la siguiente ventana y se da clic en `<a class="btn">`Aceptar`</a>`:

![ventana OT mensaje de envio ](manualAM/0.images/cap11/chp011_img41.png)

En caso de cancelar el proceso, las órdenes que ya fueron enviadas a Historia, NO  se revierten, es decir, no vuelven a ser Órdenes de Trabajo activas. Aquellas que no  se alcanzaron a enviar, permanecen en el módulo de Órdenes de Trabajo.

En el caso de que NO existan Órdenes de Trabajo para ser enviadas, aparece el siguiente mensaje:

![OT mensaje error](manualAM/0.images/cap11/chp011_img41.png)

Una vez finaliza el proceso, aparece el siguiente mensaje:

![OT proceso exitoso](manualAM/0.images/cap11/chp011_img42.png)

## Servicios

### Reportes

Este comando permite visualizar los reportes relacionados con Órdenes de
Trabajo. Existen los siguientes tipos de reportes básicos disponibles:

![OT reportes](manualAM/0.images/cap11/chp011_img43.png)

Los anteriores reportes pueden ser seleccionados para una o varias Órdenes de
Trabajo:

**Todos los Registros:** Con esta opción se realiza la impresión de todas las Órdenes de Trabajo existentes en la base de datos, sin importar cualquier subgrupo activo.

*Registros del Visor:*  Esta  opción  se  realiza  una  impresión  de  todas  las   Órdenes seleccionados en el visor mediante un subgrupo.

**Registro Seleccionado:** Esta opción realiza  una impresión de  la  **OT**  que  está resaltada en el visor (tiene la línea verde del cursor sobre sí).

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Para visualizar los reportes, se selecciona el reporte y luego se da clic al botón `<a class="btn">`Imprimir`</a>`.