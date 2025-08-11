---
title: Ventana Principal
subtitle: Se encuentra la explicación de la ventana visor, ventana detalle y demás componentes importantes de la gestión de SS.
tags:
  - setup
author: win
order: '07_03'
date: 2022-08-29T15:46:20.800Z
media: "../../assets/images/docs/"
---



# Ventana Visor de Solicitudes de Servicio

![Procesar imagen](../../assets/images/cap07/chp07_img02.png)
_**Imagen 2.** Solicitudes - Ir a Solicitudes_

A esta ventana Visor se llega haciendo clic sobre el menú principal en el módulo <a class="btn blue">Solicitudes</a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar las SS. Se listan todas o una selección (Subgrupo) de ellas. El conjunto de SS se despliegan a través de páginas 
 <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-left"> </span></a>
  <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-right"> </span></a>. El tamaño de registros por página es configurable desde la opción <a class="btn blue"> Administración</a> del menú principal, en la sección “Valores por Defecto” por parte de un usuario autorizado administrador. 

Cuando se hace clic sobre algún registro del Visor el sistema responde mostrando la información de esa Solicitud, en forma detallada, en una ventana llamada **Ventana Detalle.**


Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o se desplaza el cursor con las teclas de desplazamiento.


En la **Ventana Visor** en la columna <a class="btn white">Estado</a>, define una semaforización de las Solicitudes de Servicio. **La finalidad de esta columna es mostrar de manera gráfica el estado de la Solicitud de Servicio.** La definición de colores está definida, según la siguiente convención:

![Procesar imagen](../../assets/images/cap07/chp07_img04.png)
_**Imagen 3.** Solicitudes - Semaforización_

## Ventana Detalle

![Procesar imagen](../../assets/images/cap07/chp07_img05.png)
_**Imagen 4.** Solicitudes - Ventana Detalle_

En la gráfica anterior,muestra el Detalle del registro donde se encuentra toda la información relevante a la SS seleccionada en el Visor. 

>**Nota:** Mientras se crea manualmente en **AM** una SS solo se habilita la porción de ficha técnica.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

- **Qué Hacer**

**Solicitud:** En este campo el  sistema registra en forma  automática el  número de la Solicitud o consecutivo cronológico. El número de la SS solo es asignado al concluir su proceso de Creación.

**F/H Creación:** En este campo se registra la fecha y la hora en la que se registró la Solicitud por parte del Usuario solicitante. Por defecto se sugiere la fecha del sistema.

**Diagnóstico del  Usuario:** Es un campo de texto en el que se explica  brevemente  la situación o problema del Objeto de Mantenimiento, que obliga a diligenciar la Solicitud de Servicio. El tamaño de este campo es de 400 caracteres.

**Estado:** Es el campo descolgable desde donde se eligen las opciones que permiten hacer seguimiento al estado de la solicitud. Las opciones disponibles son:

- En Análisis (AN)
- Asignada (AS)
- Cerrada No Ejecutada (NE)
- Cerrada Ejecutada (CE)
- Cerrada con Órden de Trabajo (CO)

Al modificar este campo hacia el estado **“Asignada”**, el software registra automáticamente en el campo F/H Atención, la fecha y hora en que se asigna la Solicitud de Servicio y obliga a que se elija en el campo Responsable, el Responsable asignado a la Solicitud de Servicio.   

**Prioridad:** Es el campo descolgable en el que se define la prioridad de la Solicitud. Ésta puede ser asignada por el usuario solicitante en el momento de crear la SS. Las opciones disponibles son:

- Alta
- Media
- Baja

- **A qué Activo**

En esta línea se pretende identificar claramente el Activo o el Objeto de Mantenimiento para el cual se está solicitando el servicio.

Es un recuadro que está conformado por los siguientes campos donde se pretende identificar claramente el Activo o el Objeto de Mantenimiento:

El primero es un cuadro de selección <a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> </span></a> que se marca cuando la Solicitud tiene un objeto de mantenimiento identificable. Eso quiere decir que el solicitante puede identificar el Objeto de Mantenimiento de manera manual describiendo el nombre del Activo y Ubicación Física. 

>_**Nota:** Esta opción solo debe ser parametrizada por mantenimiento desde AMsi cuando el usuario puede describir el Activo en lenguaje natural en una SS; esto implica que mantenimiento desde **AM** debe ser el que desmarque esta opción y elegir un Activo válido existente en la base de datos. De lo contrario el sistema genera una alerta al momento de cerrar la SS e impide su cierre._

**Código del Activo:** En este campo se visualiza la información del código del Equipo/Activo seleccionado.

Existen dos opciones para Identificar un Activo:

- La primera es a través del Subgrupo <span class="mdi mdi-filter-variant icon white"></span>. Para ello se da un clic sobre el icono. Seguido se muestra la ventana de visor de Activos/Equipos. En esta ventana nueva es posible también hacer subgrupos, éste se ubica en la parte superior <span class="mdi mdi-filter-variant"></span>. Una vez se haya seleccionado el Activo y se visualice sombreado en verde, es posible añadirlo a través un doble clic sobre  o accionar el botón <a class="btn white">ACEPTAR</a>. Automáticamente se observa la información del Activo registrada en el recuadro. 

- La segunda consiste en hacer uso del teclado, es decir, en el campo código se puede ingresar el Activo Fijo, el Código del Activo o Serie, pero sólo se permite escribir unas de las tres informaciones completas y luego hacer uso de la tecla "Tabular". Automáticamente se identifica la información del Activo registrado.

Cuando el Activo/Equipo,  Objeto  de  la  Solicitud  de  Servicio no pueden  ser identificados a través de dos opciones disponibles, posiblemente porque no está registrado en el módulo de Activos,  se procede a hacer el registro en el sistema  en el módulo de <a class="btn cl-white bg-blue">Activos</a>.


**Descripción:** Muestra el nombre o la descripción del Activo seleccionado. Es un campo que no es modificable por el usuario.

**Activo Fijo:** En este campo se visualiza la información del Número de Activo Fijo del Activo que se haya establecido en la ficha técnica.

**Código de Inventario:** En este campo se visualiza el código del inventario del Activo/Equipo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Referencia Externa (Proveedor):** En este campo se visualiza la información de la referencia del Activo/Equipo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Referencia:** En este campo se visualiza la información de la referencia del Activo/Equipo que se haya establecido en la ficha técnica de este mismo.


**Serial:** En este campo se visualiza la información del Serial del Activo/Equipo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.


**Alias:** En este campo se visualiza la información del Alias del Activo/Equipoque se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.



- **Quién hace y Para Quién**

**Solicitante:** En este campo se define el nombre del Solicitante de la Solicitud de Servicio. Éste puede registrar su nombre en el espacio correspondiente. Sin embargo, es posible también seleccionar su nombre de la lista desplegable al marcar la opción <a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> Incluido en TE (RI)</span></a>. Se debe tener en cuenta que de la tabla de Terceros solo se despliegan los Terceros de Tipo RI. 

La funcionalidad de poder definir que el Solicitante sea el usuario logueado y no se pueda modificar, se  parametriza  en <a class="btn cl-white bg-blue">Administración</a>, Valores  por  Defecto,  en la  etiqueta **Solicitudes** y marcar la opción como SÍ **“El solicitante es tomado del usuario logueado y no se puede modificar”**.

<a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> Incluido en TE (RI)</span></a> : Al seleccionar esta opción, en el campo “Solicitante” solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura. Se debe tener en cuenta que de la tabla de Terceros solo se despliegan los Terceros de Tipo RI.
 

**Correo Electrónico:** En este campo se define el correo electrónico del Solicitante de la Solicitud de Servicio, cuando el solicitante es digitado manualmente. Si el solicitante se selecciona con la opción <a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> Incluido en TE (RI)</span></a> y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. Las notificaciones de correo electrónico se parametrizan desde el módulo de <a class="btn blue">Administración</a> en la opción **Notificaciones**.


**Centro de Costo:** Este campo permite seleccionar el Centro de Costo o Cliente que es responsable del Objeto de Mantenimiento. Cuando se define un Activo u Objeto de Mantenimiento válido, el sistema trae automáticamente a este campo el Centro de Costo asociado. Inicialmente se sugiere el Centro de Costo que tiene asociado el Activo Objeto de Mantenimiento, pero es posible modificarse en la SS.


**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.


**Ubicación Física:**  Este campo permite seleccionar la Ubicación Física en la que se encuentra el Objeto de Mantenimiento para el que se genera la SS. Cuando se define un Activo u Objeto de Mantenimiento válido, el sistema trae automáticamente a este campo la Ubicación Física asociada. Inicialmente se sugiere la Ubicación Física que tiene asociada el Activo Objeto de Mantenimiento, sin embago, es posible cambiarla en la SS.

**Centro Responsable:** Se define en este campo el nombre del grupo de Mantenimiento encargado de la ejecución de la SS. Para ello se selecciona uno de los Centros Responsables que están definidos en la tabla de “Centros Responsables” en la Infraestructura.


**Responsable:** En esta lista se define un responsable ejecutor, que a su vez, verificará el estado del Activo u Objeto de Mantenimiento. Para ello se selecciona uno de los Responsables que están definidos en la tabla de “Responsables” en la Infraestructura. Al lado derecho de este campo existe una caja de selección <a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> Filtrar por CR</span></a>, que al ser marcada filtra los Responsables por el Centro Responsable previamente seleccionado. El responsable es obligante al escoger el estado “Asignada”, “Cerrada Ejecutada” o “Cerrada con OT”.




<a class="btn cl-gray bg-white"><span class="mdi mdi-checkbox-blank-outline"> Filtrar por CR</span></a>: Al seleccionar esta opción, en el campo “Responsable” solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción “Centro Responsable”. En otro caso, en el campo “Responsable” se despliegan todos los “Responsables” existentes en la tabla respectiva.
 

**Causa de Falla:** En este campo es posible definir la Causa de Falla primaria que da origen a la Solicitud de Servicio. Para ello se selecciona una de las Causas de Falla que están definidas en la tabla de Infraestructura. “Causas de Falla” en la Infraestructura. Si no existe la causa de falla en la lista que se despliega, ella se debe crear en la tabla respectiva, Causas de Falla, en el módulo de <a class="btn blue">Infraestructura</a>.

**Valor MO:** Es el valor sugerido que resulta de la multiplicación del tiempo de duración de la ejecución por el valor-hora del Responsable seleccionado. Este campo puede ser asignado manualmente, en caso de que el Responsable seleccionado no tenga un valor-hora asignado, o cuando el costo haya sido acordado por otros criterios. 

>**Nota:** Normalmente este es un campo donde se registra un costo bajo, de lo contrario, si se requiere registrar varios responsables en el gasto real o varias horas por responsable, se aconseja cerrar la SS como un OT ('Cerrada con OT') donde **AM** automáticamente generará una OT. 

**Valor MR:** En este campo se registra un único costo correspondiente a Materiales y Repuestos consumidos en la Solicitud de Servicio. Se trata de un costo menor y no se permite la discriminación por artículo utilizado; en caso de que se requiera tal discriminación se recomienda cerrar la Solicitud como Órden de Trabajo.

<a class="btn cl-blue bg-white">ir a la Orden de Trabajo generada >> </a> : Este campo en realidad es un enlace el cual se genera automáticamente cuando la SS es cerrada con OT (**CO** ó Cerrada como una Órden de Trabajo) y funciona como un vínculo directo a la Órden de Trabajo en el módulo de <a class="btn cl-white bg-blue">Órdenes</a>. En la ficha técnica de la OT también se crea un vínculo hacia la Solicitud de Servicio que le dio origen y se muestra como:  <a class="btn cl-blue bg-white"><< ir a la Solicitud que genero la orden </a>, a continuación se ilustra estos enlaces en las siguientes dos imágenes:

![Procesar imagen](../../assets/images/cap07/chp07_img05_01.png)
_**Imagen 5.** Solicitudes - Enlace generado_

<br>


![Procesar imagen](../../assets/images/cap07/chp07_img05_02.png)
_**Imagen 6.** Solicitudes - Enlace generado




- **Tipificación**


**T. Trabajo:** **AM** predefine cuatro tipos de trabajo: Mecánico (MEC), Eléctrico (ELE), Instrumentación/Electrónica (IEL) y Otro (OTR). Indica los Tipos de Trabajo que se realizan en la SS. Es posible definir más de un Tipo de Trabajo para una SS.


**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en la SS. Toda SS debe poseer uno. Si en la SS se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige “Otro” y a continuación, en el tipo de “Actividad” se especifica detalladamente, el tipo de labor.


**T. Actividad:** Aquí se establece el Tipo de Actividad a realizar en la SS. La Actividad de Mantenimiento para una SS, se elige desde la tabla “Tipos de Actividad” en el módulo de <a class="btn blue">Infraestructura</a>. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento), es decir, si en el campo anterior se ha hecho la selección de un valor diferente de “Otro”, en el tipo de Actividad se debe seleccionar el valor “Mantto”, lo que indica que se trata de una actividad que constituye mantenimiento. Si en el campo anterior se ha seleccionado el valor “Otro”, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar. 


- **Cuánto Tiempo**

**F/H Paro:** Se registra en este campo la fecha y hora en la que se presentó el fallo, daño o avería. Por defecto, se asigna automáticamente la F/H Creación cuando se trata de una SS de tipo de mantenimiento **Correctivo**. 


**F/H Atención:** Este campo es asignado automáticamente cuando se cambia el estado de la Solicitud de Servicio a “Asignada”, aún así es posible modificarlo. Esta fecha y hora indican el momento en que se asignó un Responsable o Inspector que se hace cargo  la gestión de la Solicitud de Servicio.

>**Nota:** este campo denota el momento en el que llegó el Responsable o técnico ejecutor al sitio donde se originó la SS o donde se encuentra el Activo con el fin inspeccionar, identificar la causa de falla, la viabilidad de la solicitud, entrar en detalles con el solicitante, etc. Este campo debe ser diligenciado por el Responsable mismo de la SS.


**F/H Inicio Trabajo:** En este campo se define el tiempo de inicio del trabajo después de realizar la inspección previa.


**F/H Fin Trabajo:**  Esta fecha y hora indica el momento en el que se concluyeron las labores de ejecución.


**F/H Tentativa Entrega:** En este campo se selecciona la fecha y hora en la que el solicitante considera que el Servicio Solicitado puede ser oportuno. También, el área de Mantenimiento puede indicar una fecha y hora tentativa de entrega del servicio solicitado.

**Duración:**  En este campo se calcula automáticamente el Tiempo de Duración, como la diferencia entre la F/H Fin Trabajo y la F/H Inicio Trabajo. Este campo está conformado por tres subcampos: Días, Horas y Minutos; y sólo son modificables a través de un permiso administrativo.

 - **Estado del Activo**

**Se entrega limpio a mantenimiento:** **No/Sí** este es un campo funciona como un switche. El usuario solicitante puede determinar si en el momento de la SS se entrega al área de mantenimiento el Activo/Equipo con una limpieza previa. 

**Mantenimiento devuelve equipo limpio:** el área encargada del mantenimiento del Activo puede indicar si devuelve al usuario solicitante el Activo no sólo en condiciones operativas sino también limpio. 


>_**NOTA:** los dos campos anteriores son útiles y mas comunes en un ambiente clínico/hospitalario._


**Comentarios:** Es un campo de texto en el que se explica brevemente en que consistió la ejecución de la Solicitud de Servicio, y se detallan aspectos interesantes en el curso de la ejecución de la misma. Además en este campo se puede registrar todo tipo de comentarios sobre el estado de la Solicitud, o sobre la negativa de ejecución a manera de argumentación y también sobre las razones que motivaron a generar una Órden de Trabajo desde ella para generar un control más amplio. Este es un campo importante en el seguimiento a la ejecución. Para agregar un comentario se acciona el botón <a class="btn gray">Agregar Comentario </a>, a continuación al lado derecho se muestra el comentario bloqueado, acompañado del nombre del usuario que hizo el comentario, fecha y hora en la que se hizo el comentario. Cada que se realice comentarios se irán adicionando de manera independiente, tipo chat.
Los comentarios no se pueden eliminar pero si modificar con un permiso administrativo.




## Ventana Submenú de Solicitudes de Servicio


### Ir a SS

Esta opción de búsqueda rápida se encuentra ubicada al lado superior derecho de la ventana Visor. Al accionar el ícono  <span class="mdi mdi-magnify"></span>, se abre un campo al lado izquierdo que indica la información que debe ingresarse, es decir, el consecutivo completo de la SS. Luego de digitar la información, se presiona la tecla <a class="btn">Enter <span class="mdi mdi-subdirectory-arrow-left"></span></a> y a continuación se sombrea la Solicitud en el Visor:

![Procesar imagen](../../assets/images/cap07/chp07_img05_03.png)
_**Imagen 6.** Solicitudes - Ir a SS_

En caso de escribir un consecutivo con algún error o que ya no se encuentre en el visor, el sistema muestra un mensaje de alerta indicando que la SS no existe en el módulo:

![Procesar imagen](../../assets/images/cap07/chp07_img05_04.png)
_**Imagen 6.** Mensaje Alerta - Ir a SS_

### Indicadores

Es posible visualizar de manera inmediata, las SS con Multimedia, Firma del Técnico Y Firma de Recibido (AMovil),  Servicio Evaluado, directamente desde la ventana visor, a través del icono <span class="mdi mdi-message-alert"></span>. El significado del color de cada pelota, se puede ver en en este recuadro, ubicado en la parte superior derecha de la ventana visor. 

![Procesar imagen](../../assets/images/cap07/chp07_img13.png)
_**Imagen 7.** Solicitudes - Indicadores_

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es: 

- **Naranja:** SS que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia. 

- **Blanco:** SS que tienen la firma de Recibido por el Solicitante desde AMovil.

- **Gris:** SS que tienen la firma del Técnico Ejecutor desde Amovil.

- **Azul:** SS en estado Cerrada Ejecutada al que se le realizó la evaluación del Servicio. 



### Semaforización

En la ventana Visor en la columna  Estado,  se  define  una  semaforización o un color a  las Solicitudes de Servicio. La finalidad de esta columna es mostrar de manera gráfica el estado de la Solicitud de Servicio. En el ícono de la parte superior derecha de la ventana Visor <span class="mdi mdi-image-multiple"></span>, se encuentra una tabla donde se define el significado de cada color que se presenta en dicha columna, como se muestra a continuación: 

![Procesar imagen](../../assets/images/cap07/chp07_img14.png)
_**Imagen 8.** Solicitudes - Semaforización_


### Subgrupo

Se usa para seleccionar grupos de Solicitudes de Servicio que cumplen con un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe accionar el ícono <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Solicitudes de Servicio. 

![Procesar imagen](../../assets/images/cap07/chp07_img15.png)
_**Imagen 9.** Solicitudes - Ir a Subgrupos_

En la ventana Subgrupo de Solicitudes se visualizan los siguientes criterios: 

![Procesar imagen](../../assets/images/cap07/chp07_img16.png)
_**Imagen 10.** Solicitudes - Ir a Subgrupos_

Cada criterio aparece inicializado en un valor global que permite mostrar todas las SS. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto completo de todas las Solicitudes de Servicio.

>_**Nota**: **AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar. Su visualización cuando está activo es así <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

El programa permite entonces hacer selección de un grupo de Solicitudes de acuerdo con los siguientes criterios que se explican a continuación:


**FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA SOLICITUD DE SERVICIO**

**AC - Alias:** Este campo preselecciona las SS para los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC – Cód. de Barras Int.:** Permite seleccionar las SS que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno asociado al Activo que posee una SS.

**AC – Cód. de Barras Prov.:** Permite seleccionar las SS asociadas a un Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.

**AC – Código:** Esta selección agrupa las SS cuyos Activos/Equipos coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todas las Solicitudes de Servicio cuyo código de Activo/Equipos inicia por 341. Si se escribe %1 se seleccionan todos los Solicitudes de Servicio cuyo código de Activo finaliza en un “1”. El porcentaje (%) es un carácter comodín que significa “todos”. También, es posible seleccionar el Activo a través del visor de Equipo/Activos. Para ello se da un clic sobre el icono de filtro <span class="mdi mdi-filter-variant icon white"></span> el cual abre el visor de Activos el cual contiene el subgrupo <span class="mdi mdi-filter-variant"></span> para hacer búsquedas rápidas. Una vez se encuentre el registro, para seleccionarlo se debe un doble clic o sobre el botón <a class="btn white">ACEPTAR</a> ubicado en la parte superior izquierda.     

**AC-Descripción:** Selecciona las SS asociados a los Activos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**AC-Estado:** Este filtro permite seleccionar las SS de acuerdo con el estado del Activo u Objeto de Mantenimiento. Así que se pueden filtrar las SS para las cuales el Activo correspondiente está activo o inactivo.


**AC-Número Activo Fijo:** Este campo preselecciona las SS para el o los Activos cuyo Número de Activo corresponde a los valores definidos. En este campo se pueden utilizar los comodines (%).


**AC-Referencia:** Este filtro permite seleccionar las SS de acuerdo con su número de Referencia Externa del Proveedor.

**AC-Serial:** Esta alternativa permite seleccionar las SS de acuerdo con el número serial del Activo objeto de mantenimiento. El campo acepta comodines (%).


**AC-Ubicación Física:** Permite la selección de las SS cuyo Activo se encuentre en una Ubicación Física determinada. Existen dos formas de definir la Ubicación Física del Activo. La primera es seleccionando la Ubicación Física de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>. Cuando se utilizan comodines, es posible seleccionar SS cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona las SS a Activos cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.


**AC-Tipo:** Selecciona las SS asociados a los Activos que se encuentran asociados al tipo ingresado por el usuario.

**FILTRAR POR CAMPOS DE LA SOLICITUD DE SERVICIO**

**Causa de Falla:** El sistema busca todas las SS que tengan registrada la Falla registrada. Existen dos formas de definirla. La primera es seleccionandola de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>. Cuando se utilizan comodines, es posible seleccionar SS cuya parte del nombre de la Causa esté definida.
 
**Centro de Costo:** Permite la selección de SS de acuerdo con el Centro de Costo definido en el registro. Existen dos formas de definirlo. La primera es seleccionandolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>.  Cuando se utilizan comodines, es posible seleccionar las SS asociadas a los Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% selecciona todas las Solicitudes de Servicio en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Centro responsable:** Agrupa las SS cuyo Centro Responsable sea el seleccionado. Existen dos formas de definirlo. La primera es seleccionandolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>.  

**Diagnóstico:** En este campo se debe ingresar manualmente el diagnóstico de la Solicitud de Servicio que se desea buscar. Es posible utilizar la funcionalidad de comodines (%).

**Estado de la Solicitud:**  Este criterio agrupa las SS de acuerdo a un Estado. Al descolgar aparece el listado de todos los Estados posibles para buscar un registro de SS.

**FF de Cierre:** Permite la selección de SS cuya fecha de Cierre se encuentren incluidas en el rango especificado en este campo, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**FF de Creación:** Permite la selección de SS cuya fecha de Creación se encuentren incluidas en el rango especificado en este campo, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**FF de Atención:** Permite la selección de SS cuya fechas de Atención
se encuentren incluidas en el rango especificado en este campo, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**FF de FDA:** Este campo preselecciona las SS cuya fecha de Falla, Daño o Avería (F/H Paro) se encuentre en el rango especificado, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**FF Fin de Trabajo:** Este criterio filtra las SS por un rango de la Fecha de Fin de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las Solicitudes de Servicio cuya fecha de fin de trabajos esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las SS cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en “Desde”. Si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**FF Inicio de Trabajo:** Este criterio filtra las SS por un rango de la Fecha de Inicio de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las SS cuya fecha de inicio de trabajos esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las SS cuya fecha de inicio de trabajos esté en un lapso posterior a la digitada en “Desde”. Si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la “fecha desde”, pero no se especifica la “fecha hasta”, el sistema utiliza como “fecha hasta” la fecha actual.

**Prioridad:** Este criterio filtra las SS según la Prioridad seleccionada por el usuario en la lista desplegable.

**Rango Consecutivo de Solicitud:** Permite la selección de las SS cuyo número consecutivo se encuentre incluido dentro del rango especificado en este criterio. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita un número consecutivo de solicitud. De no digitar el campo “Desde”, se buscan las SS cuyo número de consecutivo esté en el lapso anterior a los consecutivos digitados en “Hasta”. De no digitar el campo “Hasta”, se buscan las SS cuyo número de consecutivo esté en un lapso posterior a los consecutivos digitados en “Desde”. Si no se especifica uno de los 2 campos, el sistema establece un rango abierto para este consecutivo, es decir, si se especifica el campo “Desde”, pero no se especifica el campo “Hasta”, el sistema utiliza como “Hasta” el número de consecutivo actual.

**Responsable:** Permite la selección de SS cuyo Responsable fue especificado en este campo. Existen dos formas de definir el Responsable. La primera es seleccionando el Responsable de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>.  

**Comentarios:** Es posible buscar las SS que tengan parte de los comentarios digitados en el campo, es posible usar comodines (%).

**Solicitante (Digitado manualmente):** Agrupa las SS cuyo solicitante fue especificado manualmente en este campo. Es posible usar comodines (%).

**Solicitante (Incluido en TE - Tipo RI):** Este campo permite seleccionar las SS activas para el o los Solicitantes aquí definidos. Existen dos formas de definir el Solicitante o grupo de Solicitantes. La primera es seleccionando el solicitante de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>.

**Tipo de Actividad:** Filtra las SS por el Tipo de Actividad que aquí se selecciona. Este campo depende del siguiente campo. Una vez que se define Tipo de Mantenimiento, se puede elegir el Tipo de Actividad de las dos siguientes formas: la primera es es seleccionandola del campo desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual hace posible usar comodines (%) una vez el campo se muestre disponible <span class="mdi mdi-lock-open-outline"></span>.

**Tipo de Mantenimiento:** Filtra las SS por el Tipo de Mantenimiento elegido de la lista desplegable.

**Tipo de Trabajo:** Agrupa las SS de acuerdo al Tipo de Trabajo al que están asociadas. Es posible filtrar los registros que tienen uno o varios tipos de trabajo.

**Días Vencimiento:** Permite la selección de las Solicitudes de Servicio cuyos días de vencimiento apliquen al criterio definido. Al seleccionar esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación. Los criterios son: Igual (=), Mayor (>) y Menor (<). Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético.

>_**Nota:** Cuando se usa algún criterio del Subgrupo este icono denota una pelota de rojo rojo para que indicar que lo se visualiza en el visor es un subjunto de datos. En la parte inferior **Registros por página** en la fracción N/M, el numerador varía según M que indica el total de registros, un ejemplo de su visualización en el visor: 
![Procesar imagen](../../assets/images/cap07/chp07_img16_01.png)
_**Imagen 10.1.** Solicitudes - Subgrupo Activo__
