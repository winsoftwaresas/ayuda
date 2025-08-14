---
title: Ventana Principal de Programas de Mantenimiento
subtitle: Aquí puede encontrar el ejemplo visual de cómo crear un Programa de Mantenimiento y la explicación de sus vistas parciales. 
tags:
  - setup
author: win
order: '11_03'
date: 2022-05-27T15:27:44.518Z
media: "../../assets/images/docs/"
---

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_01.png"
  alt:"Programas de Mantenimiento"
%}

A esta ventana se accede desde un clic en el menú principal en el módulo <a class="btn blue">Programas</a> de **AM**. 

A través de esta ventana se crean y administran los PM. La mayor parte  de la información aquí definida, se traslada completamente a la OT, cuando el Programa la genere.

Desde esta misma ventana se hacen los procesos de Proyección de los PMs, para realizar una o varias simulaciones, para un período futuro  de largo plazo, con el fin de Analizar/Definir el Presupuesto de los recursos requeridos para ese período, y así mismo analizar la disponibilidad de los Activos.

## Ventana Visor de Programas

Al ingresar al módulo lo primero que se visualiza es el **Visor de Programas**:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_02.png"
  alt:"Programas de Mantenimiento - Visor"
%}

Desde esta ventana es posible observar los Programas de Mantenimiento existentes. Se listan todos o un Subgrupo de ellos. El conjunto de los Programas de Mantenimiento se visualizan a través de páginas. La cantidad de registros es configurable desde la opción <a class="btn blue">Administración</a> en **Valores por Defecto** de la compañía por medio de un Usuario con permisos Administrativos. 

Al hacer clic sobre alguno de los Programas de Mantenimiento del Visor el sistema responde mostrando la información de ese registro, en  forma  detallada, en una ventana llamada: **Ventana Detalle**

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. Para ver el detalle de un PM se debe elegir un registro de la tabla por medio de un clic. 

Para crear un programa se debe en visor dar un clic en el botón <a class="btn cl-blue bg-white">NUEVO</a> ubicado en la parte superior izquierda y continuar con el diligenciamiento a desde su Ventana Detalle:

## Ventana Detalle de Programas

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_03.png"
  alt:"Programas de Mantenimiento - Ventana Detalle"
%}

En la gráfica anterior, Ventana Detalle de PM, se aprecian sus  componentes y  sus respectivos contenidos de un registro existente; aquí se encuentra la información relevante al PM seleccionado en el Visor y se administran los datos genéricos del PM. Es desde esta ventana se crean, se actualizan y administran los PM.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación tanto para crear uno como para actualizar información de él:


**Activo:** Lista los Activos existentes en **AM** desde allí se elige aquel para el que se va a definir el PM. Aparece entonces, al lado derecho, la descripción del Activo cuando es reconocido por **AM**. Para elegir un Activo se tienen las siguientes opciones. La primera se puede buscar a través de la tecla tabular digitando el Código, o bien, seleccionando las siguientes opciones alternas del campo: Serial, Referencia (Referencia Externa del Proveedor), Número de Activo Fijo (Num AC), Alias. Estos se deben de digitar completos para que funcione la tecla tabular.

La segunda opción de búsqueda es dando clic al Subgrupo <span class="mdi mdi-filter-variant icon white"></span>, luego éste abre una nueva ventana de Activos. Allí también se pueden hacer subgrupos o filtrar información por diferentes criterios por medio del subgrupo ubicado en la parte superior derecha: <span class="mdi mdi-filter-variant"></span>, luego se debe dar doble clic sobre el registro o en el botón ubicado en la parte superior continuar con <a class="btn white">ACEPTAR</a>. Se muestra una imagen a continuación de cómo seleccionar el Activo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_04.png"
  alt:"Programas de Mantenimiento - Ventana Activos"
%}

Una vez que el Activo se ha identificado, aparece al lado derecho, la descripción del registro.

**Descripción del Activo:** Es el nombre o descripción del Activo seleccionado. Es un campo que no es modificable por el usuario.

**FF Fin Garantía:** Expone la fecha en la que se vence la garantía del Activo seleccionado. Si se encuentra con fecha de garantía vigente se muestra en color negro, si se encuentra con fecha de garantía vencida se muestra en color rojo.

**Tarea:** El número de la Tarea se refiere al número ordinal de este PM dentro del conjunto de PM definidos para un Activo. Su finalidad es diferenciar un PM de otro para un mismo Activo.
Este campo es un consecutivo ascendente por Activo, y es controlado por el Sistema.

**Descripción del Programa:** En este campo se registra la descripción de la actividad programada a realizarse, este es un campo alfanumérico y tiene un límite de 100 caracteres.

**Referencia:** aquí se puede ingresar el número de un documento, que  sirve como referencia o relación al PM.

**Solicitante:** En este campo se define el nombre del Solicitante del PM. Cuando la OT es generada desde un PM. 

<a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Incluido en TE (RI) </span></a> : Al seleccionar esta opción, en el campo **“Solicitante”** solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en Infraestructura.

**Listado de Acciones técnicas:** Esta opción habilita una tabla de Acciones Técnicas en una nueva pestaña del PM. Esta tabla está ligada a la Infraestructura, creada con su mismo nombre, que contiene un listado de Acciones Técnicas frecuentes definidas por el área de Mantenimiento. Se pretende describir, breve pero concretamente, la actividad general la actividad a realizar  representada como un **check list.** en una OT cuando ésta sea generada mediante el PM. (En la sección vistas parciales/Acciones Técnicas se explica en detalle).

**Centro de Costo:** Es el Centro de Costo asignado al Activo, este listado corresponde al predefinido en la tabla de Centros Costo, en Infraestructura y que es **“Responsable”** del pago de los consumos de Gasto Real que dicha OT genere. Inicialmente se sugiere el Centro de Costo que tiene asociado el Activo Objeto de Mantenimiento, aun así, puede cambiarse.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Centro Responsable:** Lista los Centros Responsables (CR) definidos en el módulo de Infraestructura. Especifica el Centro Responsable o el grupo de mantenimiento, encargado de realizar la labor.

**Contrato:** Lista los Contratos definidos en el módulo de Infraestructura. Si el PM está asociado a un contratista, como responsable, bajo las cláusulas de un Contrato, es en este campo donde se específica, seleccionando, cuál es el Contrato que lo ampara.

Asignarle un Contrato a un PM significa que las labores de  Mantenimiento serán ejecutadas por personal externo a la Organización. Por ello el PM debe tener asignado un Centro de Responsabilidad acorde, es decir, es necesario asignar a todos los PM por Contrato, un Centro Responsable exclusivo para Contratistas. De esta forma se pueden diferenciar fácilmente de aquellos trabajos bajo responsabilidad directa del Departamento de Mantenimiento de la Organización.

**Responsable Ejecutor:** Lista los Responsables activos que están definidos en la tabla correspondiente en el módulo de Infraestructura. En este campo se elige a la persona, natural o jurídica, Responsable por la labor a ejecutar.

El Responsable puede ser interno (RI), o también un Responsable Externo (RX). El sistema  se  encarga  de  mostrar en la  lista solo los  Responsables habilitados  para desempeñar esta función.

<a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Filtrar por CR </span></a> : Al seleccionar esta opción, en el campo **“Responsable Ejecutor”** solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción **“Centro Responsable”**. En otro caso, en el campo **“Responsable Ejecutor”**  se  despliegan todos los **“Responsables”** existentes en la tabla respectiva.

**Responsable por la Institución:** Lista los Responsables activos que están definidos en la tabla correspondiente en el módulo de Infraestructura. En este campo se elige a la persona interna de la institución, Responsable de acompañar o apoyar por la  labor a ejecutar.

**Tiempo Estimado:** Es el presupuesto de tiempo necesario para llevar a cabo las labores de Mantenimiento. El valor a ingresar debe ser numérico y se puede expresar en días, horas o minutos.

**Tiempo improductivo:** Este campo funciona como un switch, al activarlo le indica a la persona o personas encargada de realizar la labor, si el Activo debe detener su producción para proceder a la realización de la Tarea de Mantenimiento. Cuando se dice que el Activo **“Genera Tiempo Improductivo”** significa que estando operando debe ser intervenido por Mantenimiento.

**Prioridad:** Es un número de 1 a 7, de uso subjetivo, que indica la prioridad de realización de la OT. Normalmente, el valor 1 significa un trabajo de gran urgencia, mientras que el 7 significa una labor de baja prioridad. El usuario define que nivel de prioridad manejar en cada PM.  El Sistema por defecto sugiere la Prioridad 3.

**Tipo de Trabajo:** **AM** predefine (aunque pueden personalizarse) cuatro tipos de trabajo: Mecánico (MEC), Eléctrico (ELE),  Instrumentación/Electrónica (IEL) y Otro (OTR). Un PM debe tener asociado al menos un Tipo de Trabajo, es decir que puede tener asignados varios de estos Tipos de Trabajo, dependiendo de la naturaleza de la labor que se programa.

El Sistema por defecto sugiere el primer Tipo de Trabajo definido.

**Tipo Mtto:** El sistema **AM** predefine siete Tipos de Mantenimiento (aunque pueden personalizarse y crearse adicionales) para los PM: Preventivo, Predictivo, Inspección, Metrología, Lubricación, Otro-Mantto y Otro. Este campo indica el Tipo  de Mantenimiento a realizar en la Orden de Trabajo. Toda OT debe poseer uno. Si en el PM se va a registrar un trabajo que no corresponde a una labor de  mantenimiento,  en este campo  se  elige  **“Otro”**  y  a  continuación,  en  el  tipo  de   **“Actividad”**  se  especifica detalladamente  el tipo de labor.

**Tipo  de   Actividad:** Aquí se establece el Tipo de Actividad a realizar en la OT.  La Actividad de Mantenimiento para una OT Manual, son definidos en la tabla **“Tipos de Actividad”** en el módulo de **“Infraestructura”**.  Este campo trabaja en coordinación con  el anterior (Tipo de Mantenimiento).  Si en el campo anterior se ha hecho la selección de un valor diferente de **“Otro”**, en el tipo de Actividad se debe seleccionar el valor **“MN:** Mantto”, lo que indica que se trata de una actividad que constituye mantenimiento.  Si en el campo anterior se  ha  seleccionado el valor  **“Otro”**, en  el   campo Tipo de  Actividad se  debe seleccionar un valor que defina consistentemente  la labor a ejecutar.

Así, todo PM se discrimina en cuanto a su labor, con tres agrupadores distintos: El Tipo de Trabajo, El Tipo de Mantenimiento y el Tipo de Actividad. Por ejemplo: Puede existir un PM cuyos  Tipos de Trabajo  son:  Mecánico  y Eléctrico  (es  decir, se  realizan  labores mecánicas y eléctricas), su Tipo de Mantenimiento es Predictivo (debido a un análisis de variables  predictivas  del  Activo)  y  su  Tipo  de  Actividad  puede ser  AC-Revisión/Inspección', donde entonces la Tarea de Mantenimiento a ejecutarse  tiene que ver, entre otras cosas, con mediciones o captura de variables sobre las características controlables, mecánicas y eléctricas del Activo.

**Comentarios para Ejecución:** Aquí se ingresan los comentarios sobre un Activo o se especifica información adicional al AC.

El espacio de  Comentarios sirve para referenciar información sobre aspectos importantes para la ejecución de la actividad de mantenimiento: un procedimiento o guía detallada de ejecución, herramientas, o  medidas de seguridad o control.

Cuando se genera la OT, desde el PM, sirven para especificar referencias importantes, ayudas previstas y necesarias en la ejecución posterior de la OT: planos, manuales de normas técnicas de  Mantenimiento o de especificaciones detalladas; normas de seguridad o  enfoques de acción. Sin embargo, en la gran mayoría de los casos se utiliza el campo **Multimedia** para registrar o complementar estos datos.

# Ventana Submenú de Programas de Mantenimiento

## Indicadores

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_05.png"
  alt:"Programas de Mantenimiento - Indicadores"
%}

Es posible visualizar de manera inmediata, los Programas de mantenimiento activos, inactivos y con Multimedia, directamente desde la ventana visor, a través de la columna **“Indicadores”** que muestra una pelota de color que indica su estado y si tiene asociado Multimedia. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores a través del ícono <span class="mdi mdi-message-alert"></span>, ubicado en la parte superior derecha de la ventana visor.

El significado de los colores que se listan son los siguientes:

- **Naranja:** Programas de mantenimiento que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
- **Verde:** Programas de mantenimiento definidos con estado activo.
- **Rojo:** Programas de mantenimiento sin criterio de programación o con un Activo definido en un estado inactivo. Estos no generan OT.

## Subgrupo

Se usa para seleccionar o filtrar grupos de  Programas de Mantenimiento que cumplen con un conjunto  de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono  <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Programas de Mantenimiento, como se muestra en al siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_06.png"
  alt:"Programas de Mantenimiento - Ir al Subgrupo"
%}

Luego de ingresar se lista el conjunto de criterios, cada uno de ellos trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los  PMs. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto completo de todos los PMs.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Programas de acuerdo con los criterios seleccionados en la siguiente ventana.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_07.png"
  alt:"Programas de Mantenimiento - Subgrupo"
%}

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo de PMs son los siguientes.
 
##### FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO AL PROGRAMA

**AC-Alias:** Este filtro permite seleccionar los PMs para los Activos cuyo Alias coincide con el valor definido aquí. El campo acepta comodines (%).

**AC-Cód. de Barras Int:** Permite seleccionar los programas de mantenimiento asociados al Activo/Equipo que coincida con el Código de Barras interno.

**AC-Cód. de Barras Prov:** Permite seleccionar los programas de mantenimiento que se encuentren asociados al Activo/Equipo y que coincida con el Código de Barras del Proveedor.

**AC-Código:** Esta selección agrupa los PM para los Activos relacionados por su código. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se  escribe 341%, se seleccionan todos los PM cuyo código de Activo inicia por 341. Si se escribe “%1”  se seleccionan todos los PMs cuyo código de Activo finaliza en un “1”. El porcentaje (%) es un carácter comodín que  significa  “todos”.
También se puede buscar el Activo, haciendo uso del icono <span class="mdi mdi-filter-variant"></span>. El sistema responde mostrando en una ventana independiente el conjunto de Activos registrados, allí también se pueden filtrar por los criterios de subgrupo del módulo de Activos. Una vez identificado el Activo, se debe dar doble clic en el registro y luego aparece identificado automáticamente el código del respectivo Activo en el campo.

**AC-Descripción:** Selecciona  los  PM asociados  a  los   Activos  según  criterios  que  se  fundamenten  en  su  descripción.  Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra  “Motor”.

**AC-Estado:** Este filtro permite seleccionar los PM de acuerdo con el Estado del Activo u Objeto de Mantenimiento. Así que se pueden filtrar los PM para los cuales el Activo correspondiente está activo o inactivo.

**AC-Número Activo Fijo:** Este campo preselecciona los PM para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este  campo se pueden utilizar los comodines (%).

**AC-Referencia:** Este filtro permite seleccionar PM de  acuerdo con su número de Referencia.

**AC-Serial:** Este filtro permite seleccionar los PM de acuerdo con el número serial del Activo/Objeto de Mantenimiento. El campo acepta comodines (%).

**AC-Ubicación Física:** Permite la selección de los PM cuyo Activo se encuentre en  una  Ubicación  Física   determinada.  Cuando   se   utilizan   comodines (%)  es   posible seleccionar PM cuyo Activo esté en una Ubicación Física  que tenga parte del nombre igual.  Por ejemplo: Cava% selecciona los registros activos cuya Ubicación Física empieza por la palabra Cava, independientemente de  si se está  hablando de la Cava de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona los  programas asociados a  los  Activos que se   encuentran asociados al tipo ingresado por el usuario.

**AC-Marca:** Filtra todos los PM cuyo Activo esté asociado a la Marca relacionada en este campo, se aceptan comodines(%).

**AC-Modelo:** Filtra todos los PM cuyo Activo esté asociado a la Marca relacionada en este campo, se aceptan comodines(%). 

**Clasificación por uso:** Busca los PM que estén asociados al Activo según su clasificación por uso biomédico, las opciones son: Diagnóstico, Tratamiento y Mantenimiento de la vida, Rehabilitación, Prevención, Análisis de Laboratorio, Equipo Industrial de Apoyo Hospitalario y Equipos de Apoyo Hospitalario.

**Clasificación por Grupo:** Agrupa los PM según la clasificación del grupo del Activo asociado a él, las opciones por defecto son: Apoyo Administrativo, Apoyo Operacional, Infraestructura y Grupo x. Ya que éstas opciones puede ser editadas por el usuario Administrador de AM.

**Clasificación por Riesgo:** Busca los PM que estén asociados al Activo según su clasificación por resigo  biomédico, las opciones son: Ninguno, Clase I: Bajo Riesgo, Clase IIA: Riesgo Moderado, Clase IIB: Alto Riesgo, Clase III: Muy Alto Riesgo y Crítico Ambiental.

##### FILTRAR POR CAMPOS DEL PRESUPUESTO – MATERIALES

**RP-Código:** Filtra los PM que tengan relacionado en el presupuesto el código del Repuesto digitado en el campo. Para buscar el Repuesto desde el buscador de Subgrupo de Materiales y Repuestos se debe escoger del campo desplegable el Almacén; luego se habilita el campo y el icono subgrupo que aparece al lado derecho <span class="mdi mdi-filter-variant icon white"></span>. Cuando se da clic al botón se abre una ventana independiente que muestra el visor de Repuestos, allí es posible hacer filtros o subgrupos dando clic al icono ubicado en la parte superior derecha 0g<span class="mdi mdi-filter-variant"></span>.

##### FILTRAR POR CAMPOS DEL PROGRAMA

**Centro de Costo:**  Permite la selección de  PM  de  acuerdo con  el  Centro de  Costo asignado. Para escoger un Centro de Costo como filtro, se puede hacer  descolgando la lista de Centros de Costo – Clientes definidos en Infraestructura, o usando comodines (%). Cuando se utilizan comodines, es necesario darle un clic al icono de candado <span class="mdi mdi-lock"></span>, una vez que se desbloquea <span class="mdi mdi-lock-open-outline"></span> es posible seleccionar los PM pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% seleccionará todas los PMs que en su Centro de Costo tengan la palabra Sistema, independiente de si  se está hablando del sistema de agua, de vapor o de energía. La búsqueda del Centro de Costo por esta opción de comodines es según su parametrización, bien sea por nombre o código.

**Centro Responsable:** Filtra los PM  de  acuerdo con  el  Centro de  Responsable asignado. Para escoger un CR como filtro, se puede hacer  descolgando la lista definida en Infraestructura, o usando comodines (%). Cuando se utilizan comodines, es necesario darle un clic al icono de candado <span class="mdi mdi-lock"></span>, una vez que se desbloquea <span class="mdi mdi-lock-open-outline"></span> es posible seleccionar los PM pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% seleccionará todas los PM que en su Centro de Costo tengan la palabra Sistema, independiente de si  se está hablando del sistema de agua, de vapor o de energía. La búsqueda del Centro de Costo por esta opción de comodines es según su parametrización, bien sea por nombre o código.

**Contrato:** Permite filtrar los PM por el contrato al que están asociados. Para escoger un contrato se descuelga la lista de Contratos definidos en Infraestructura.

**Criterio:** Permite visualizar el subconjunto de PM definidos con   el  Criterio  de Programación **“X”;**. Se elige el criterio de la lista que se despliega. Estos corresponden a la abreviatura indicada en el visor en la columna "**Cri**" asignado a cada uno de los registros. 

**Descripción del Programa:** Esta opción permite buscar los PM que cumplan con el criterio de selección establecido en este campo, es  posible utilizar la funcionalidad de comodines (%)

**Comentario del Programa:** Filtra los PM que cumplan  con  la opción de poseer comentario. Este es un campo para ingresar una parte del  comentario que se desee buscar en los programas.


**Fecha de Inicio de Periodo (FIP):** Esta opción permite seleccionar los PM por un rango de la FIP.  Aparecen dos campos: **Desde** y **Hasta**.En cada uno de ellos se digita una fecha. De digitar solo la fecha **"Desde"** se filtran los registros desde esa fecha hasta la actual. 

**Fecha de Última Generación:** Selecciona los PM por el rango de la última vez que haya generado OTs. Se habilitan dos campos: **Desde** y **Hasta**. En cada uno de ellos se digita una fecha. De digitar solo la fecha **"Desde"** se filtran los registros desde esa fecha hasta la actual. 

**Prioridad:** Esta opción permite filtrar por Prioridad de los PM. Se elige a partir de la lista desplegable (las prioridades por defecto van del 1 al 7).

**Responsable:** Agrupa los  PM de acuerdo  al  Responsable asigando al  PM.  Para  escoger  un Responsable Ejecutor se  puede  hacer   descolgando  la  lista  de   Responsables   definidos  en Infraestructura; el sistema muestra los Responsables que estén activos. También se puede hacer usando comodines (%) siempre y cuando al dar clic al icono de candado <span class="mdi mdi-lock"></span>, éste se desbloquea <span class="mdi mdi-lock-open-outline"></span>, allí el campo se habilita sin descolgar los Responsables.

**Responsable x la Institución:** Se refiere al Responsable Interno de Institución que está encargado o que acompañará y/o recibirá la labor prestada por el Responsable ejecutor, cuando este sea un Contratista o Servicio Externo especialmente.

**Tiempo Improductivo:** Es un campo de dos opciones: "**Si**", "**No**" filtrando los PM según si se ha definido que el activo se debe suspender para realizar la tarea de mantenimiento o no.

**Tipo de Actividad:** Filtra los PM por Tipo de Actividad. Para escoger un Tipo de Actividad se hace descolgando la lista de Tipos de Actividad definida en Infraestructura, también se permite el uso de comodines (%). Cuando se utilizan comodines, es necesario dar un clic al icono  <span class="mdi mdi-lock"></span>, una vez que se desbloquea <span class="mdi mdi-lock-open-outline"></span> es posible seleccionar los PM pertenecientes a la TA que tengan parte del nombre igual.

**Tipo de Mantenimiento:** Filtra los PM por Tipo de Mantenimiento. Se elige un TM de las lista desplegable entre ellos están Predictivos, Lubricación, Preventivos, entre otros predefinidos en la Tabla respectiva de Infraestructura. 


**Tipo de Trabajo:** Agrupa los PM de acuerdo al tipo de trabajo al que están asociadas. Estos campos son de tipo selección. Por lo tanto se pueden combinar.

_**Nota:** Es importante tener en cuenta que cuando se están realizando  subgrupos se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones.  Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos, o bien, quitar registros. Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> ó <a class="btn white">MENOS <span class="mdi mdi-minus-circle"></span></a> según se requiera y finalmente efectuar la búsqueda con el botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>_


# Vistas Parciales/Pestañas

Las Vistas Parciales o Pestañas permiten complementar la información que se despliega normalmente sobre un Programa de Mantenimiento, con otro conjunto de información que solo se muestra según los permisos que tenga el usuario. Las vistas parciales  disponibles son: **Presupuesto**, **Acciones Técnicas**, **Criterio de Programación** y **Multimedia**. Estas opciones se encuentran en la Ventana Detalle del registro.

### Presupuesto

Se ingresa mediante un clic en la pestaña **“Presupuesto”** en la ventana detalle de Programas  de Mantenimiento.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_08.png"
  alt:"Programas de Mantenimiento - Presupuesto"
%}

Esta tabla resume los totales de los costos presupuestados de Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos de Costo que serán traslados a las OT una vez generadas. 

**Ingresar Mano de Obra Interna**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_09.png"
  alt:"Programas de Mantenimiento - MO"
%}

En la gráfica anterior, Ventana de Ingreso de Mano de Obra Interna, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Mano de Obra Interna se administra el Presupuesto de Mano de Obra Interna del PM.

Es importante resaltar que el presupuesto de Mano de Obra Interna de un PM, se prepara a nivel de Oficio, es decir, no se tiene en cuenta a la persona que va a realizar la labor, pues se trata de un presupuesto y no se conoce a ciencia cierta, en la mayoría  de  los casos, quiénes serán los encargados de ejecutar la labor.

Se describe a continuación los campos que componen del Detalle de MO: 

**CR:** Es el centro responsable al que pertenece el Oficio presupuestado.  Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Oficio.

**OF:** Lista los Oficios definidos en el módulo de Infraestructura. Aquí se escoge el Oficio a presupuestar (anticipar).

**TT:** Muestra de manera automática el tipo de trabajo que tiene configurado el oficio seleccionado. Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Oficio, y se visualiza en la tabla de Mano de Obra Interna.

**H. Hombre:** Número de  horas hombre requeridas presupuestadas, desempeñando  el Oficio descrito.

**Minutos:**  Es  el  número  de  Minutos,  que  junto  con  las  horas,  conforman el  tiempo  total presupuestado. Así, si se desea presupuestar 5 horas y cuarto de un Oficio, debe definirse así: **“5”** en el campo ** “H. Hombre”**, y **“15”** en el campo **“Minutos”**.

**Personas:** Este  campo  es  netamente informativo. Indica  cuántas  personas  van  a desempeñar la labor del mismo Oficio. Retomando el ejemplo anterior, si se coloca  “2” en este campo, se está diciendo que 2 personas van a desempeñar el Oficio.  Como ya se estableció que el total  de tiempo requerido son  5  horas  y cuarto, se  deduce entonces que  entre las  2 personas se consumirán este tiempo. Este campo se visualiza en la tabla de Mano de Obra Interna como Nro. Personas.

**Vlr. Hora:** Este campo es informativo. Muestra el valor hora 1 que tienen definido el oficio seleccionado, se establece automáticamente una vez se ha seleccionado el Oficio y se visualiza en la tabla de Mano de Obra Interna.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total del presupuesto para ese Oficio. Es el producto del Vlr. Hora por H. Hombre y Minutos. Se visualiza en la tabla de Mano de Obra Interna.

Para ingresar MO se debe dar clic en el botón <a class="btn gray">Adicionar Mano Obra Interna</a> que se muestra en la ventana detalle de Mano de Obra Interna.
 
Diligenciados los campos anteriores, se debe dar clic en el icono <span class="mdi mdi-plus-circle icon white"></span> ubicado en la parte inferior del formulario, seguidamente, se observa que la información creada se muestra en la tabla de mano de Obra Interna, ubicada al lado izquierdo. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_10.png"
  alt:"Programas de Mantenimiento - Adicionar MO"
%}

En el caso de actualizar la información de Mano de Obra Externa de algún registro existente, se debe seleccionar el registro y luego dar un clic sobre el botón <a class="btn gray">Actualizar Mano de Obra Externa</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_11.png"
  alt:"Programas - Actualizar MO"
%}

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">ACEPTAR</a> como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_12.png"
  alt:"Programas - Eliminar MO"
%}

**Ingresar Mano de Obra Externa**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_13.png"
  alt:"Programas de Mantenimiento - ME"
%}

En la gráfica anterior, Ventana de Ingreso de Mano de Obra Externa, se aprecian sus componentes y sus respectivos contenidos.

Es importante resaltar que el presupuesto de Mano de Obra Externa de un PM, se prepara a nivel de la Especialidad (Oficio) del responsable externo, es decir, no se tiene en cuenta a la persona natural o jurídica que va a realizar la labor, pues se trata de un presupuesto y no se conoce a ciencia cierta, en la mayoría  de  los casos, quiénes serán los encargados de ejecutar la labor.

En la parte superior aparece el listado de los oficios o especialidades presupuestados. En la parte inferior, es posible efectuar modificaciones a los ítems presupuestados, así como ingresar nuevos oficios al presupuesto.

A continuación se describen los campos que componen esta ventana:

**CR:** Es el centro responsable al que pertenece el Oficio o Especialidad presupuestado.  Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Oficio o la Especialidad.

**OF:** Lista los Oficios o Especialidades definidos en el módulo de Infraestructura. Aquí se escoge el Oficio o la Especialidad a presupuestar (anticipar).

**TT:** Muestra de manera automática el tipo de trabajo que tiene configurado el oficio o la Especialidad seleccionado. Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Oficio o la Especialidad, y se visualiza en la tabla de Mano de Obra Externa.

**Costo Unitario por hora/visita:** Se digita el valor unitario o el costo unitario por hora o por visita de parte del responsable ejecutor externo para esa actividad programada, ya sea un Contratista o un Servicio Externo.

Para ingresar ME se debe dar clic en el botón <a class="btn gray">Adicionar Mano Obra Externa</a> que se muestra en la ventana detalle de Mano de Obra Externa.
 
Diligenciados los campos anteriores, se debe dar clic en el icono <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> ubicado en la parte inferior :


Se observa que la información creada se muestra en la tabla de mano de Obra Externa, ubicada al lado izquierdo. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_14.png"
  alt:"Programas de Mantenimiento - Ingresar ME"
%}

En el caso de necesitar actualizar algún registro existente, se debe seleccionar el registro y luego dar un clic sobre el botón <a class="btn gray">Actualizar Mano de Obra Externa</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_15.png"
  alt:"Programas - Actualizar ME"
%}

Para eliminar se da clic al siguiente icono <span class="mdi mdi-delete"></span>. Luego, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">ACEPTAR</a> como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_16.png"
  alt:"Programas - Eliminar ME"
%}

**Ingresar Materiariales y Repuestos**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_17.png"
  alt:"Programas - Eliminar ME"
%}

En la gráfica anterior, Ventana de Ingreso de Materiales y Repuestos, se aprecian  sus componentes y sus respectivos contenidos. En esta opción se administra el Presupuesto de Materiales y Repuestos del PM.

Para ingresar a esta opción de debe dar clic en el botón <a class="btn gray">Mat y Rep</a>, ubicado en la parte inferior del Presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se quiera actualizar o ingresar nuevos Materiales y Repuestos al  PM, se deberán diligenciar los siguientes campos:

**Almacén:** Lista los Almacenes definidos en la tabla de Almacenes del módulo de Infraestructura. Se elige el Almacén que contiene los Repuestos a presupuestar. Una vez elegido el Almacén, en el campo M Y R, solo se listarán los Repuestos que pertenecen al Almacén seleccionado.

**M Y R:** Lista los Materiales y Repuestos definidos en el módulo de Almacén de Repuestos. Aquí se  escoge el Repuesto a presupuestar (anticipar), haciendo clic al icono de filtro en azul <span class="mdi mdi-filter-variant icon white"></span> ubicado al lado derecho de este campo. Una vez elegido el repuesto, aparece automáticamente su descripción.

**Descripción M Y R:** Este campo es controlado por el Sistema,  y muestra automáticamente la  descripción  del repuesto seleccionado. No es modificable por el usuario.

**Cantidad:** En este campo se debe ingresar la cantidad presupuestada, requerida, del repuesto seleccionado.

**UM:** Es un campo de solo lectura que es controlado por el sistema, y muestra la unidad de medida de consumo del repuesto seleccionado. No es modificable por el usuario.

**Vlr. Unitario:** Muestra de manera automática el valor o costo unitario vigente que tiene configurado el Repuesto seleccionado. Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Repuesto. No es modificable por el usuario.

**TT:** Muestra de manera automática el tipo de trabajo que tiene configurado el Repuesto seleccionado. Es un campo de solo lectura, que se establece automáticamente una vez se ha seleccionado el Repuesto. No es modificable por el usuario.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total del presupuesto para ese Repuesto o Material. Es el producto del Vlr. Unitario por Cantidad. Se visualiza en la tabla de Materiales y Repuestos.

Para ingresar Materiales y Repuestos se debe dar clic en el botón <a class="btn gray">Adicionar Material y Repuesto</a> que se visualiza en el lado derecho de la Ventana Detalle.

Para agregar dar clic sobre el icono <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> ubicado en la parte inferior del formulario, seguidamente, se observa que la información creada se muestra en la tabla de Materiales y Repuestos, ubicada al lado izquierdo, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_18.png"
  alt:"Programas - Adicionar M y R"
%}

En el caso de actualizar la información de Materiales y Repuestos de algún registro existente, se debe seleccionar el registro y luego dar un clic sobre el botón <a class="btn gray">Actualizar Mano de Obra Externa</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_19.png"
  alt:"Programas - Actualizar M y R"
%}

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn bg-gray cl-black">ACEPTAR</a> como se muestra en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_20.png"
  alt:"Programas - Eliminar M y R"
%}

**Ingresar Otros Conceptos de Costo**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_21.png"
  alt:"Programas - OC"
%}

En la gráfica anterior, Ventana de Ingreso de Mano de Otros Conceptos de Costo, se aprecian sus componentes y sus respectivos contenidos, se deben diligenciar para crear un registro nuevo o actualizar un Concepto ya existente.

Para crear registros de Otros Conceptos de Costo, se debe hacer clic en el botón <a class="btn gray">Adicionar Otro Concepto</a> , que se muestra en la ventana detalle de Otros Conceptos de Costo, se diligencian los campos y finalmente se da clic en el icono <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> ubicado en la parte inferior del formulario. Seguidamente, se observa que la información creada se muestra en la tabla de Otros Conceptos, ubicada al lado izquierdo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_22.png"
  alt:"Programas - OC"
%}

En el caso de actualizar la información de Otro Concepto de Costo de algún registro existente, se debe seleccionar el registro y luego dar un clic sobre el botón <a class="btn gray">Actualizar Otro Concepto</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_23.png"
  alt:"Programas - OC"
%}

Para eliminar un registro de la tabla de Otros Conceptos, se ubica el registro a eliminar directamente en la tabla y se da clic, luego se da clic al icono <span class="mdi mdi-delete"></span> sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn bg-gray cl-black">ACEPTAR</a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_24.png"
  alt:"Programas - Eliminar OC"
%}

### Acciones Técnicas 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_25.png"
  alt:"Programas - Ir a Listado de Acciones Técnicas"
%}

Esta opción conduce a la tabla de Acciones Técnicas en una nueva pestaña del PM. Esta tabla está ligada a la Infraestructura, creada con su mismo nombre, que contiene un listado de Acciones Técnicas frecuentes en un área de Mantenimiento. Con la información contenida allí, se pretende describir, breve pero concretamente, la actividad general que se realiza en la OT generada desde un PM. Las Acciones Técnicas en un PM se pueden definir, después de haber creado el PM y luego seleccionado en la Ventana Detalle en la pestaña **Información General** , la opción <a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1">Listado de Acciones Técnicas</span></a>continuación se muestra la porción Acciones Técnicas de un PM:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_26.png"
  alt:"Programas - Acciones Técnicas"
%}

En la pestaña de Acciones Técnicas de la Ventana Detalle del PM aparece un nuevo recuadro en el que irán apareciendo las que se vayan adicionando a través del botón <a class="btn cl-blue bg-gray px-6"> Adicionar Acción Técnica </a>.

A continuación se describen los campos que componen esta ventana de información adicional:

**Que Hacer:** Aparece con los campos bloqueados para que el usuario visualice la información básica del PM a la cual se le están asociando las Acciones Técnicas.

**Nro. Ordinal:** Es el ordinal asignado a cada Acción Técnica según el orden en el que se vayan adicionando.

**Acción Técnica:** En este campo se muestran las Acciones Técnicas definidas en el PM.

Al accionar el botón <a class="btn cl-blue bg-gray px-6"> Adicionar Acción Técnica </a> se habilita el conjunto de Acciones definidas por mantenimiento desde la tabla de infraestructura correspondiente.

Las Acciones Técnicas se seleccionan de la lista desplegable y se adicionan con el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue"></span>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_27.png"
  alt:"Programas - Adicionar Acciones Técnicas"
%}

Es posible actualizar una Acción Técnica una vez se encuentre en el listado haciendo clic sobre ella:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_28.png"
  alt:"Programas - Actualizar Acciones Técnicas"
%}

> **Nota:** Para eliminar o desasociar una Acción de un PM, se debe seleccionar la acción y hacer un clic sobre el icono <a class="fab cl-gray box-shadow"><span class="iconify icon cl-black bg-white" data-icon="mdi-delete"></span></a>. Estos cambios quedan automáticamente guardados en el PM y trasladados en la OT automática que se genere. 

### Criterio de Programación

Es la función que hace que automáticamente un PM, genere una Orden de Trabajo de mantenimiento Preventivo, Predictivo, Lubricación, Inspección, Metrología, Otro-Mantto u Otro. Ello se realiza sobre la pestaña que se muestra a continuación.

**Son tres grupos:** por Frecuencia, por Semanas del Año y por  Contador, que pueden trabajar en forma  excluyente, aunque  se posibilita alguna combinación entre ellos, para criterios complejos. Entonces por ejemplo, el primero y tercero, pueden ser definidos simultáneamente, para lograr el efecto de generar una OT cuando cualquiera de los dos se cumpla.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_29.png"
  alt:"Programas - Criterios de Programación"
%}

#### Frecuencia

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_30.png"
  alt:"Programas - Criterio de Programación Frecuencia"
%}

Esta opción se selecciona cuando se trata de un PM a ser definido para un Activo que trabaja normalmente bajo una función uniforme en el tiempo. La frecuencia se define a través de uno de los siguientes modos: Días, Semanas, Meses. Tales intervalos de tiempo, definidos conjuntamente con el campo Periodicidad, se comienzan a medir a partir de la FIP en cada PM.

**Días:** Requiere la definición de un número de días en el periodo (mínimo 3). La FIP define la fecha a partir de la cual se inicia la cuenta de días transcurridos para la generación de una nueva OT.

**Semanas:** Requiere la definición de un número de semanas en el periodo (Máximo 52). La FIP define el inicio de la vigencia del programa, es decir, la fecha a partir de la cual el Sistema contará el  número de semanas que se acaba de programar, para  generar la próxima OT.

**Meses:** Requiere la definición del periodo en meses y de la FIP. Para cada generación, el sistema cuenta el número de meses definidos en el Período a partir de la FIP y compara la fecha resultante con la fecha del rango de análisis, si este se encuentra dentro del intervalo, se genera una OT.

**Periodicidad:** Indica el número de unidades de tiempo definidas en la Frecuencia. Este campo indica la frecuencia en la se genera una OT.

> **Nota:** Si se elige Frecuencia por  días, el período debe ser  un número entre 3 y 365;  si la Frecuencia es Semanas, el  período debe ser  un  número entre 1 y 52;  y si  se elige Frecuencia por Meses, el período o debe ser un número entre 1 y 180.

**Fecha Inicio Periodo (FIP):** La Fecha de Inicio de Período (FIP) se define también como la última que se realizó la rutina. Solo se puede ingresar una vez al PM a través de esta pestaña, y es en el momento de crear el PM. Una vez se defina la FIP y se grabe el PM, solo se pueden hacer modificaciones a la FIP a través de la transacción: **Modificar FIP**.

>**Nota:** Para mayor información sobre la FIP, revise la opción Modificar Fecha de Inicio del Período (FIP), en la sección **Transacciones**.

**Fecha de última generación** la FUG es posible  modificarla. Es una fecha real que muestra cuando fue que se realizó la última generación de Órdenes de Trabajo de ese PM.

#### Semanas del Año (SA)

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_31.png"
  alt:"Programas - Semanas del Año"
%}

Es el segundo criterio disponible. Al dar un clic en la opción Criterio por Semanas del Año, aparece la ventana de Semanas del Año, (figura anterior). En ella es posible escoger las semanas en las cuales se debe generar una OT para el PM en cuestión. Un PM puede tener seleccionadas una, algunas o todas las 52 semanas, en cuyo caso se comportaría como un PM que genera Órdenes de Trabajo por semanas del año-

Este Criterio de Programación hace caso omiso de la FIP  y se  usa  para hacer una programación anual con base en el conocimiento o experiencia del área de mantenimiento sobre ese Activo. En otras palabras, este criterio de programación depende de los eventos que lo involucran o de requerimientos especiales de temporada, que no tienen que ver ni con una frecuencia ni con la cantidad de trabajo realizado por el Activo.

**Al generar Órdenes de Trabajo se debe tener en cuenta:**

Si un PM definió que se debe generar una Orden de Trabajo la semana X del año,  y el intervalo a Analizar/Generar contiene al menos un día de la semana X, entonces **AM** genera la OT.

El Criterio SA es excluyente con los demás Criterios de Programación, es decir no puede coexistir con ninguno otro dentro del mismo PM, se debe tener en cuenta, que es este criterio debe estar configurado en **Valores por Defecto** en la sección **Programas** en la opción **Inicio de la Semana #2 del año**.

#### Por Contador

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_32.png"
  alt:"Programas - Semanas del Año"
%}

**Contador:** Este campo aplica cuando el Criterio de Programación es por Contador. Al generar un PM que lo requiera, es en este campo donde se establece el valor real o aproximado del contador de la última vez que se realizó la labor que ahora se está programando como rutina. En adelante, el **AM**, en el momento de generar la Orden de Trabajo. Si el Activo tiene definido un contador, se debe dar clic en el botón <a class="btn gray">Adicionar Contador</a> luego, desplegar el campo para elegir el contador.

Este Criterio puede trabaja conjuntamente con el Criterio de Frecuencia, tiene en cuenta la FIP, o sea que si el intervalo a Analizar/Generar se encuentra antes de la FIP, el PM no genera OT, así se cumpla el Incremento o el Límite por parte del Contador del Activo. Por lo que este criterio genera una OT si se cumple cualquiera de las dos condiciones.

**Tipo:** Indica si el contador es por Incremento o por Límite.

- **Por Incremento**: Esta opción requiere la definición de una **“Recurrencia”**. Para que el  PM genere una Orden de Trabajo, el Contador del Activo debe haber incrementado  su valor, sobre el  contador de  la  Última generación, en  el  PM,  en  una cantidad  superior a  la Recurrencia. Ejemplo: El cambio  de  aceite y filtro cada 5.000 km. en un automóvil, exige la definición de una recurrencia con valor 5.000.

Cuando se  define un  PM  en  función de  un  contador de  un  Activo, debe  existir  un mecanismo predefinido: manual o automático, para actualizar y mantener al día el contador de  ese  Activo  en  el  **AM**.  Se  trata  de  garantizar  que  tales  contadores  reflejen permanentemente la cantidad de trabajo  realizado por el Activo.  De hecho un PM con criterio  Contador,  solo  generará  Órdenes  de  Trabajo,  mientras  haya  variación  en  el contador del Activo.

En los casos en que la actualización de los contadores de los Activos no pueda ser frecuente, **AM** suministra un mecanismo automático que lo simula, mientras se puede realizar una nueva lectura y actualización real a ese contador. Se trata del campo Estándar de Planeación que se encuentra en la parte inferior de la ventana detalle de Activos. Allí se define una cantidad de trabajo estándar que realiza ese Activo por unidad de tiempo. Este valor es definido con base en una estadística real del trabajo de ese Activo en un período considerable, preferiblemente al mes.

- **Por Límite:** Indica que el Contador del Activo debe alcanzar una cantidad tope, definida en la Recurrencia, para que el PM genere la OT. Por este criterio solo se genera una única vez la Orden de Trabajo, cuando se alcance el Límite definido. Una vez generada la OT desde el PM, éste se inactiva y ya no vuelve a generar otras OT.

**Recurrencia:** En este campo se define una cifra o cantidad que denota el incremento que debe tener el contador del Activo, para generar una Orden de Trabajo, con criterio Incremento. Pero también en este campo se define un valor límite al que debe llegar el contador del Activo para generar una única Orden de Trabajo por contador, cuando el criterio es por Límite.

**Vlr. Contador al Inicio del Período:** Se refiere al valor inicial del contador del Activo, correspondiente a la Fecha de Inicio de Período (FIP) previamente diligenciada en el mismo apartado.

Finalmente para agregar el contador se debe dar clic en el botón de la parte inferior <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span> y para guardar los cambios se debe <a class="btn blue">Actualizar</a> el registro.

**Fecha de última generación de OT:** Esta fecha es informativa y viene a ser la FUG (fecha de la última generación), por tanto no se puede  modificar, esta fecha es la misma para todos los Criterios de Programación. Es una fecha real, siempre, que muestra cuando fue que se realizó la última generación de una Orden de Trabajo desde ese PM.

Para saber si la OT se va a generar o no; **AM** proyecta el valor del Contador del Activo desde la fecha de su última medición hasta el primer día del rango de análisis/generación, y compara el nuevo valor del Contador del Activo con el FUG. Si el valor de la comparación, es mayor o igual a la Recurrencia, genera la Orden de Trabajo.  De lo contrario, recalcula nuevamente el valor del Contador del Activo para el siguiente día del rango de análisis/generación, y hace la  misma comparación. Así recorre todo  el  rango de análisis/generación hasta el último día, generando una OT, si el   valor de alguna de las comparaciones es mayor o igual a la recurrencia.

Calcular el valor del Contador consiste en sumarle al valor actual del Contador del Activo la cantidad que resulte de llevar el Estándar de Planeación a la mínima unidad de tiempo, o sea a días, y multiplicar este valor por el número de días transcurridos desde la fecha de medición del Contador del Activo, hasta el día del rango de Análisis/Generación.

En síntesis, el Sistema proyecta el estado del contador del Activo a partir de su valor en la fecha de última lectura real, hasta la fecha de programación actual, según el parámetro definido en el Estándar de Planeación. De esta forma se compara un contador proyectado contra el contador histórico o de la última generación, permitiéndole al Sistema, programar actividades que no se programarían por tener desactualizado el contador real.

Recuerde que el parámetro **“Estándar de Planeación”** es opcional y no se debe usar si se desea trabajar con lecturas reales solamente, es decir, si se mantienen actualizados los Contadores de los Activos.

**Criterio de Generación por Frecuencia y/o Contador**

Resulta de definir simultáneamente un conjunto Frecuencia, Período y una Recurrencia para un contador en un mismo PM.

El sistema actúa de la forma ya descrita independientemente para cada uno de   los criterios, solo que **AM** al encontrarlos juntos en el mismo PM, hace la evaluación simultánea de ellos y genera una OT cuando uno de ellos, el que primero lo haga, cumpla la condición.

A continuación, se encuentran disponibles los siguientes criterios que se pueden visualizar en el visor de PM y también en las OT que se generaron desde ellos:

| ABREVIATURA  | NOMBRE                           |
| ------------ | -------------------------------- |
| **SS** | Semanal                          |
| **MM** | Mensual                          |
| **SM** | Semestral                        |
| **AN** | Anual                            |
| **DD** | Días (Mín 3)                    |
| **SA** | Semanas del año                 |
| **+M** | Meses (más de uno)              |
| **+S** | Semanas (más de una)            |
| **KI** | Contador por Incremento          |
| **KL** | Contador por Límite             |
| **SI** | Estándar por Incremento         |
| **SL** | Estándar por Límite            |
| **FK** | Frecuencia y/o Contador          |
| **TM** | Trimestral                       |
| **??** | Programa Inactivo o Sin Criterio |

Una vez que un Programa de Mantenimiento acaba de generar una OT, sobre el programa se actualizan los campos:

- **Vlr. Contador al Inicio del Período**
- **Fecha de Última Generación (FUG)** 
- **Fecha de Inicio del Período (FIP)**

> **Nota:** En **AM** es posible hacer la Programación de las Actividades de Mantenimiento para un período futuro, tanto para el corto como para el largo  plazo, a través de las funciones de Generación y de Proyección. La función de Generación se encuentra en el submenú de  “Órdenes de Trabajo”. La función Proyección se encuentra en el submenú de Programas de	Mantenimiento. Cabe anotar también que esta Programación se puede realizar con cualquier anticipación requerida, por lo tanto es posible que la Programación de una semana como la 32 se realice en la 28, por ejemplo.

Finalmente se aclara que toda actividad que pretenda programar, proyectar o generar OT a futuro se fundamenta en la programación realizada con los PM.

### Multimedia

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_33.png"
  alt:"Programas - Semanas del Año"
%}

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al PM en cada una de sus carpetas asignadas. Esta opción permite asociar al PM, uno o varios documentos, con el  objetivo de facilitar el trabajo a  realizar,  o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** ayudas necesarias en la ejecución de la OT que se genera desde este PM: planos, manuales técnicos, manuales de normas  técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, check lists, protocolos de prueba y otra información estándar para su ejecución, en aras de optimizar los recursos de tiempo y de insumos a ser consumidos, como también en aras de preservar la  seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al PM, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del PM.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al PM. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al PM Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan los videos al PM. Ejemplo: Videos en formato wmv, entre otros.

Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono <span class="mdi mdi-cloud-upload icon white"></span>, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_34.png"
  alt:"Programación - Multimedia"
%}

A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en 
<a class="btn bg-white cl-black">Abrir</a>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_35.png"
  alt:"Programas - Multimedia"
%}

De manera adicional u opcional se puede escribir un nombre en el siguiente campo para enfatizar de lo que trata el archivo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_36.png"
  alt:"Programas - Adjuntar Archivo"
%}

Para finalmente subir el archivo, imagen o video se da clic en el botón <a class="btn bg-white cl-black">Subir Archivo</a>.  Automáticamente sale en el sistema un mensaje alerta que indica si el archivo se adjunta exitosamente. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_37.png"
  alt:"Programas - Nombrar Archivo"
%}

Los archivos que se van adicionando van quedando guardados uno debajo del otro. Sólo los formatos de imagen tienen previsualización, solo basta con dar clic en alguno de sus campos, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_38.png"
  alt:"Programas - Vista previa imagen"
%}

Para desasociar un documento, o una imagen o un video, a al PM se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn bg-gray cl-black">ACEPTAR</a>.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_39.png"
  alt:"Programas - Desasociar archivo"
%}

Si se desea descargar un archivo adjunto al PM, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.

## Transacciones

#### Modificar FIP

A esta opción se llega al sobreponer el cursor sobre el módulo de Programas y en la parte inferior se muestra un conjunto de transacciones disponibles para el módulo de Programas, y a continuación se da un clic en **“Modificar FIP”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_40.png"
  alt:"Programas - Ir a Modificar FIP"
%}

A través de la ventana de Modificar fecha de inicio de período **(FIP)** se especifica la nueva FIP del PM. Esta ventana inicia sugiriendo en el campo Fecha inicio período la fecha actual del sistema.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_41.png"
  alt:"Programas - Ventana Detalle Modificar FIP"
%}

Cuando se quiera Modificar la Fecha de Inicio de Periodo, se deberán diligenciar los siguientes campos:

**Fecha Inicio de Periodo:** En este control de fecha, se escoge la nueva fecha a modificar. Una vez realizada esta acción se debe presionar el botón <a class="btn gray">Modificar  FIP</a> para que el cambio tenga efecto.  Luego de presionar el botón el sistema es sale un mensaje de confirmación y el cambio de la FIP se verifica en la pestaña de **“Criterio de Programación”**.

Se debe resaltar que la FIP es una fecha del pasado, y es partir de ella que se calcula el momento de generación de la Orden de Trabajo, cuando el Criterio de Programación se basa en alguna Frecuencia.

Si el Criterio de Programación no depende de una frecuencia, esta fecha FIP determina el momento posterior en que el programa entra en vigencia.

#### Proyectar 

A esta opción se llega al sobreponer el cursor sobre el módulo de Programas y en la parte inferior se muestra un conjunto de transacciones disponibles para el módulo de Programas, y a continuación se da un clic en **“Proyectar”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_42.png"
  alt:"Programas - Ir a Proyectar"
%}

Cuando se posee la herramienta **AM** es posible hacer la Programación de  las Actividades de Mantenimiento para un período futuro, tanto para el corto como  para el largo plazo, a través de las funciones de Generación y de Proyección. 

Cabe anotar también que esta Programación se puede realizar con cualquier anticipación requerida, por lo tanto es posible que la programación de una semana como la 32 se realice en la 28 por ejemplo.
Finalmente se aclara que toda actividad que pretenda programar, proyectar o generar OT al futuro se fundamenta en la programación realizada con los PM.

La diferencia entre  Proyectar y  Analizar la podemos apreciar en  el  siguiente  cuadro comparativo:

| PROYECTAR                                                                                                                                                                            | ANALIZAR                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **DISPONIBLE EN PM**                                                                                                                                                           | **DISPONIBLE EN OT**                                                                                                                                   |
| Para Planear                                                                                                                                                                         | Para Programar                                                                                                                                               |
| **1.**	Periodos Largos (1 Trimestre, 1 semestre, 1 año…)                                                                                                                     | **1.**	Periodos Cortos (1 Semana, 1 Mes, 2 Semanas…)                                                                                                  |
| **2.**	Incrementa en % los presupuestos de Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos.                                               | **2.**	El presupuesto no se incrementa, es el mismo tal cual fue definido en el PM.                                                                    |
| **3.**	No genera OTs.                                                                                                                                                          | **3.**	Si se genera OTs.                                                                                                                               |
| **4.**	Puede hacer múltiples proyecciones en prueba y error.                                                                                                                  | **4.**	Puede hacer múltiples proyecciones en prueba y error.                                                                                          |
| **5\.**	Puede tr(../assets/                                                                                                                      | **5\.**	No se puede trabajar sobre un subgrupo, siempre se realiza sobre el total de los PM y los AC\.                                                 |
| **6\.**	Los PM que no se generaron oportunamente, el sistema asume como si hubieran generado, y los proyecta para el periodo del rango de generación, respetándoles su FIP\. | **6\.** Los PM que no se generaron Oportunamente, el sistema los genera para el primer día del periodo del rango de análisis, alterándoles su FIP\. |

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_43.png"
  alt:"Programas - Ventana Detalle Proyectar"
%}

En la gráfica anterior, Proyectar, se aprecian sus componentes y sus   respectivos contenidos.

**Procedimiento para efectuar Proyección de PM:**

Digitar la fecha **“Desde”**. **AM** sugiere el primer día del año en curso, luego, digitar la fecha **“Hasta”**. **AM** sugiere el último día del año en curso.

Para proyectar de manera opcional con variaciones en los porcentajes respectivos del Presupuesto se debe seleccionar la siguiente opción: <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Asignar variación porcentual a los costos </span></a>. Estos porcentajes  corresponden  a  los  valores  en  que desee incrementen los costos del presupuesto, para cada uno de los diferentes rubros de:

**Mano de Obra Interna:** Definir el porcentaje que se crea va a incrementar la mano de  obra para el período proyectado en cuestión.

**Mano de Obra Externa:** Definir el porcentaje que se crea va a incrementar la mano de  obra externa para el período proyectado en cuestión.

**Materiales y Repuestos:** Definir el porcentaje que se crea va a incrementar la mano de obra para el período proyectado en cuestión.

**Otros Conceptos:** Definir el porcentaje que se crea va a incrementar en los gastos indirectos para el período proyectado en cuestión.


Luego de haber definido el rango, hacer clic en el botón <a class="btn white">PROYECTAR</a> , a continuación aparece un mensaje alerta para confirmar si se desea proyectar, luego se debe dar clic en <a class="btn bg-gray cl-black">ACEPTAR</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_44.png"
  alt:"Programas - Mensaje Alerta"
%}

**AM** busca en todos los  Programas de Mantenimiento, cuáles deben  proyectar órdenes de trabajo en el rango de fechas estipulado. Durante el  proceso, puede visualizarse una barra horizontal que va avanzando a medida que se va analizando y el estado de avance de la proyección, en la parte superior derecha, y al finalizar dicho proceso, el sistema muestra el resultado de la proyección de los PMs proyectados del total de PMs registrados en la base de datos. El proceso también se puede cancelar haciendo clic en el botón <a class="btn bg-gray cl-black">CANCELAR</a>: en el cual sistema detiene el proceso sin ningún tipo de perjuicio, es decir, a los datos no son afectados en absoluto.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_45.png"
  alt:"Programas - Análisis Programas"
%}

En el resultado de la proyección, se evidencia:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_46.png"
  alt:"Programas - Resultados Proyección"
%}

**Total de Programas seleccionados:** Muestra la relación entre la cantidad de Programas totales o los que están seleccionados en el visor en el módulo sobre la cantidad de Programas totales definidos en el módulo.

**Total de Programas inactivos o con equipo inactivo:** Muestra la cantidad de Programas que no tienen un criterio de programación definido o que el Activo/Equipo tiene asignado un estado inactivo, desde el módulo de Activos.

**Total de Programas analizados:** Muestra la diferencia de Programas entre  “Total de Programas seleccionados” y  “Total de Programas inactivos o con equipo inactivo”.

**Total de Programas que proyectaron labores:** Muestra la cantidad de Programas analizados que proyectaron OT en el rango de fecha especificado.

**Total de labores presupuestadas para el período:** Muestra la cantidad de órdenes de trabajo proyectadas para el rango de fechas especificado.

Seguido, se presentan dos botones inferiores: 


**Ver Diagrama Gantt**

El análisis se presenta también por medio de una gráfica o Diagrama de Gantt, en el cual se muestra al lado izquierdo la información del Activo con su respectivo PM, mientras que al lado derecho se muestra por colores el cronograma con las fechas proyectadas de las actividades. Se puede varias la escala y el tamaño del gráfico. Para visualizar la programación se debe accionar el botón <a class="btn gray">Ver Diagrama</a>:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_47.png"
  alt:"Programas - Proyección Diagrama Gantt"
%}

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al lado superior derecho <span class="mdi mdi-message-alert"></span> y su correspondencia es:

- **Amarillo:** Actividades programadas con tipo de mantenimiento Metrología.
- **Verde:** Actividades programadas con tipo de mantenimiento Preventivo, Predictivo.
- **Rojo:** Actividades con tipo de mantenimiento Correctivo. Es de aclarar, que en este módulo No se permiten OT tipo correctivas.
- **Azul:** Actividades programadas con tipo de mantenimiento Inspección y Lubricación.

La funcionalidad de la línea horizontal llamada **Tamaño**, permite ampliar o reducir el tamaño de las columnas de los meses del cronograma.
Al desplegar la lista del campo **Escala**, permite observar el cronograma por días, semanas o meses. Por defecto el cronograma se muestra en días. Para facilitar la visualización completa del cronograma de actividades programadas y además, facilitar su recorrido es posible realizar desplazamientos verticales y horizontales a través de las barras de desplazamiento.

**Ver Reportes**

A continuación, se  procede a verificar si las OT detectadas por  el proceso  de proyección, sí son las órdenes que se esperan para el rango de fechas establecido.  Para esto, se procede a dar clic al botón <a class="btn gray">Ver Reportes</a> como se ve en la siguiente imagen:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_48.png"
  alt:"Programas - Proyección Diagrama Gantt"
%}

Se muestran los reportes con los resultados proyectados de algunos, de la siguiente lista:

- Listado De Equipos Por Generar Ordenes
- Cronograma De Mantenimiento Programado con TM (Con Ubicación Física y Centro De Costo)
- Cronograma De Mantenimiento Programado con TM
- Cronograma De Mantenimiento Programado
- Actividades por Mes y Día
- Actividades Por Mes y Día (Presupuesto Discriminado)
- Listado de Repuestos
- Programación De Actividades Por Activo (Centro Responsable,Ubicación Física, Fecha)
- Cronograma De Mantenimiento
- Actividades Por Mes y Día (Serie, Marca y Modelo)

Los anteriores reportes deben ser seleccionados para **Todos los registros**, primero se debe seleccionar una de las opciones anteriormente mencionadas y luego de estar sombreado en verde se debe clic en el botón <a class="btn bg-gray cl-black">IMPRIMIR</a>: para ver el reporte en formato PDF y en la opción <a class="btn bg-gray cl-black">EXPORTAR</a>: para llevar este diseño a excel.

> **Nota:** Si al imprimir alguno de estos reportes, el usuario nota que alguna OT no debió ser proyectada, debe dirigirse al respectivo programa de mantenimiento y revisar sus criterios para volver a proyectar de nuevo los PM.

### Modificar Masivamente

A esta opción se llega al sobreponer el cursor del mouse sobre el módulo de Programas y en la parte inferior derecho se despliega el conjunto de transacciones disponibles para el módulo de Programas, luego se elige la transacción **“Modificar Masivamente”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_49.png"
  alt:"Programas - Ir a Modificar Masivamente"
%}

Esta transacción permite cambiar masivamente el campos del Programa, Criterio, Ingresar Presupuesto, Eliminar Presupuesto, Modificar Presupuesto, Desactivar Programas y Adjuntar Documentos, de los Programas previamente seleccionados o subgrupos, que se encuentran en el Visor. Para ello se debe dar clic al botón  <a class="btn white">Modificar Masivamente</a> ubicado al lado superior izquierdo de la ventana:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_50.png"
  alt:"Programas - Modificar Masivamente"
%}

A continuación se muestran las opciones disponibles:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_51.png"
  alt:"Programas - Modificación Masiva Opciones"
%}

A continuación se describen los campos que componen esta ventana de   información adicional.

**Modificar solamente este Programa:**  Esta opción ejecuta los cambios marcados (Programa, Criterio, Ingresar Presupuesto, Eliminar Presupuesto, Modificar Presupuesto, Desactivar Programas y Adjuntar Documentos) al Programa que se encuentre seleccionado en el visor.

**Modificar todos los Programas en el Visor:** Esta opción ejecuta los cambios marcados (Programa, Criterio, Ingresar Presupuesto, Eliminar Presupuesto, Modificar Presupuesto, Desactivar Programas y Adjuntar Documentos) a todos los Programas que se encuentren en el visor.

**Modificar Centro de Costo:** Se Modifica Masivamente el Centro de Costo, del o los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_52.png"
  alt:"MM - Centro de Costo"
%}

**Modificar Centro Responsable:** Se Modifica Masivamente el Centro Responsable de los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_53.png"
  alt:"MM - Centro Responsable"
%}

**Modificar Comentarios:** Se Modifica Masivamente los Comentarios de los PM que se están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_54.png"
  alt:"MM - Comentarios"
%}

**Modificar Contrato:** Se Modifica Masivamente el contrato previamente definido a los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_55.png"
  alt:"MM - Contrato"
%}

**Modificar Fecha de Inicio de Período (FIP):** Se Modifica Masivamente la FIP, del o los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_56.png"
  alt:"MM - FIP"
%}

**Modificar Prioridad:** Se Modifica Masivamente la Prioridad de los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_57.png"
  alt:"MM - Prioridad"
%}

**Modificar Responsable:** Se Modifica Masivamente el Responsable, del o los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_58.png"
  alt:"MM - Responsable"
%}

**Modificar Solicitante:** Se Modifica Masivamente el Solicitante, del o los PM que están previamente seleccionados en el visor. Solo se pueden escoger de los Terceros RI, activos en la infraestructura.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_59.png"
  alt:"MM - Solicitante"
%}

#### Modificar Criterio

**Modificar Criterio por Frecuencia:** Se Modifica Masivamente el criterio por Frecuencia, del o los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_60.png"
  alt:"MM - Criterio por Frecuencia"
%}

**Modificar Criterio por Semanas del año:** Se Modifica Masivamente el criterio por Semanas del año, del o los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_61.png"
  alt:"MM - Criterio por SA"
%}

#### Ingresar Presupuesto

**Ingresar Presupuesto Materiales y Repuestos:** Se Inserta Masivamente el presupuesto de Materiales y Repuestos a los diferentes PM que están previamente seleccionados en el visor. Se Aumenta o Disminuye el valor del Presupuesto de los Materiales y Repuestos a los diferentes PM. El repuesto en este campo se busca a través del ícono de subgrupo <span class="mdi mdi-plus-circle icon white"></span>. 

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_62.png"
  alt:"MM - Materiales y Repuestos"
%}

**Ingresar Presupuesto Mano de Obra:** Se Inserta Masivamente el presupuesto de Mano de Obra Interna a los diferentes PM que están previamente seleccionados en el visor. Se Aumenta o Disminuye el valor del Presupuesto de la Mano de Obra Interna a los diferentes registros.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_63.png"
  alt:"MM - Mano de Obra"
%}

**Ingresar Presupuesto Otros Conceptos de Costos:** Se inserta Masivamente el presupuesto de Otros Conceptos de Costos a los diferentes PM que están previamente seleccionados en el visor. Se Aumenta o Disminuye el valor del Presupuesto de Otros Conceptos de Costos a los diferentes PM.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_64.png"
  alt:"MM - Otros Conceptos de Costos"
%}

#### Eliminar Presupuesto

**Materiales y Repuestos:** Se elimina Masivamente el presupuesto de Materiales y Repuestos a los PM previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_65.png"
  alt:"MM - Eliminar Materiales y Repuestos"
%}

**Eliminar Presupuesto Mano de Obra:** Se elimina Masivamente el presupuesto de Mano de Obra Interna a los  PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_66.png"
  alt:"MM - Eliminar Presupuesto Mano de Obra"
%}

**Eliminar Presupuesto Otros Conceptos de Costos:** Se Elimina Masivamente el presupuesto de Otros Conceptos de Costos a los diferentes PM(s) que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_67.png"
  alt:"MM - Eliminar Otros Conceptos de Costos"
%}

**Modificar Presupuesto:** Se Modifica Masivamente el presupuesto, donde se puede aumentar o disminuir en un porcentaje el presupuesto de Mano de Obra Interna y Otros Conceptos, de los PM que están previamente seleccionados en el visor

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_68.png"
  alt:"MM - Modificar Presupuesto"
%}

**Desactivar Programas:** Se realiza la opción de Desactivar Programas de los PM que están previamente seleccionados en el visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_69.png"
  alt:"MM - Desactivar Programas"
%}

**Adjuntar Documentos:** Se Adjunta Documentos en los PM permitiendo la carga de archivos o anexos necesarios para el módulo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"11_70.png"
  alt:"MM - Adjuntar Documentos"
%}

> **Nota:** Para efectuar los cambios para el conjunto de Programas previamente seleccionado en el subgrupo se debe dar un clic en el botón <a class="btn blue">MODIFICAR <span class="mdi mdi-pencil"></span></a>. El sistema mostrará dos mensajes alerta, uno seguido del otro, con el fin de preguntarle al Usuario si está seguro de hacer la modificación masiva, esta transacción es un permiso especial que se otorga desde el módulo de <a class="btn blue">Administración</a> en Permisos Básicos, en la opción **Masificar**.