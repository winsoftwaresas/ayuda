---
layout: page
title: ◼ Infraestructure
order: 02_00
---
#Infraestructura

Que información constituye la Infraestructura. Cual es cada una de las tablas que  la conforman. En que secuencia se ingresan, y con  qué estructura de codificación.  Todo esto conforma el contenido del presente capítulo sobre los datos de Infraestructura.

#Conceptos Básicos sobre la Infraestructura

La infraestructura es un conjunto de archivos y tablas parametrizables que sirven para que **AM** se adecue a la organización de mantenimiento de la empresa y sus características.

A la Infraestructura pertenecen tablas que **AM** utiliza como base para agilizar la definición de Equipos, Repuestos, Programas de Mantenimiento y sus respectivas Órdenes de Trabajo. Los datos correspondientes a los registros de estas tablas deben ser los primeros en entrar al sistema, después de lo cual se actualizan con una relativa baja frecuencia.

Es recomendable ingresar los datos en el siguiente orden: Centros de Costo, Centros Responsables, Oficios, Terceros, Ubicaciones Físicas, Contratos, Almacenes, Unidades  de Medida, Monedas, Contadores, Características, Otros Conceptos de Costo, Causas de Pendiente, Tipos de Actividad, Causas de Cierre, Acciones Técnicas, Causas de Falla, Efectos de Falla, Conceptos de Kárdex, Operaciones, Referencias, Clasificadores y Estados. Estas se consideran las tablas básicas, que deberán, en su mayoría, ser revisadas y personalizadas. Algunas tablas son de utilidad opcional según se use o no el módulo de Repuestos, como por ejemplo la de Unidades de Medida y Monedas. Otras tablas son instaladas con valores preconfigurados (valores por defecto), válidos en muchos contextos a manera de ejemplo; sin embargo, sus contenidos se pueden modificar, borrar o ser actualizados con información nueva.

Después de haber entrado los datos básicos de Infraestructura, se debe continuar  con la información correspondiente a Activos y Repuestos que se encuentra en el menú principal.

Un registro de una tabla de Infraestructura, no puede ser borrado si está siendo utilizado, o si está asociado a: un Activo, un Repuesto, un Movimiento de Kárdex, un Programa de Mantenimiento, una Solicitud de Servicio, un Paro, una Órden o a la Historia de Mantenimiento. Cuando se intenta hacer esta operación, el sistema alerta con un mensaje.

A continuación se definen los conceptos básicos sobre la conformación de la Infraestructura, elementos generales y principales tablas que la componen.

[Procesar Imagen](../../assets/images/cap02/chp02_img01.png)
_**Imagen 1.** Infraestructura_

# Tablas de Infraestructura

## Terceros

Almacena la información de cuatro tipos diferentes de entes terceros relacionados con el sistema.

**Responsable Interno / Empleado (RI):** Es el tipo de Tercero que denota a los trabajadores del área interna de mantenimiento de la compañía. Caben también  en este tipo los empleados de la compañía que tienen bajo su responsabilidad algún objeto de mantenimiento definido en la tabla de Equipos. Un ejemplo de ello,  los conductores de vehículos de la empresa o los operarios de algún equipo.

**Responsable Externo / Contratista (RX):** Es el tipo de Terceros, responsables de la ejecución de tareas de mantenimiento, como entes externos a la empresa, en la categoría de Contratistas, de Talleres Externos o de Servicios Externos de Mantenimiento.  Un ejemplo, los proveedores de servicio de mantenimiento de ascensores, de calderas, o de aire comprimido, cuando son Talleres Externos, expertos, llamados por solicitud, o cuando actúan según términos definidos en un contrato de servicios.

**Proveedor / Fabricante (PF):** En este grupo se registran los proveedores, en todas  sus modalidades, los fabricantes de los equipos o de los objetos de mantenimiento. También caben aquí los proveedores de Repuestos y de materiales de la organización.

**Otro Tipo de Tercero (OT):** Este grupo está abierto para definir otros tipos de Terceros requeridos por condiciones particulares de cada organización. Únicamente se puede usar en conjunto con el tipo RI, para indicar que son usuarios solicitantes.

Dependiendo del objetivo en que se utilice esta tabla, el sistema despliega solamente los datos relevantes en el respectivo contexto. Por ejemplo cuando se requiere trabajar sobre Responsables de Mantenimiento, incluyendo tanto los internos de la organización como los externos, el sistema muestra solamente estas dos categorías en la tabla de Responsables.

![ventena it](../../assets/images/cap02/chp02_img02.png)

En la porción de la ventana Visor de Terceros que se aprecia en la gráfica aparecen  las columnas correspondientes a los campos más significativos de esta tabla. Al posicionar el cursor sobre cualquiera de las filas de registros en esta ventana,  aparece en la ventana Detalle la información completa del Tercero seleccionado.

![ventana detalle](../../assets/images/cap02/chp02_img03.png)

En la ventana Detalle de Terceros se encuentra toda la información relevante del Tercero seleccionado en el Visor. Es una ventana que de no aparecer completa debe ser recorrida con la ayuda de la barra de desplazamiento vertical.

A continuación se describen los campos que componen el registro. No todos ellos son obligantes. Sobre cada campo se da una breve explicación: su contenido y diversas recomendaciones para su registro correcto y consistente en la base de datos.

**Código (de Tercero):** En este campo se escribe el código de Tercero Externo, para el caso de los contratistas, proveedores y fabricantes, caso en el cual se usa normalmente el NIT o el RUT, o cualquier otro código de identificación nacional, único  ante los sistemas fiscal, tributario y financiero. Cuando se trate de personal propio  de la empresa se debe escribir el número de su cédula de ciudadanía o un número interno de carné o de identificación personal.

**Nombre:** En este segundo campo se escribe el nombre con el que se identifica el Tercero. Es posible escribir los nombres tipo título: La primera letra de cada nombre en mayúscula y las siguientes en minúsculas, o en otro caso con todo el texto en mayúsculas.

**Estado:** En este campo se asigna si el tercero está activo o inactivo. Es importante utilizar este campo cuando se quiera identificar el personal que está en vacaciones, incapacitado, en comisión, suspendido, retirado de la empresa u otro.

**Tipo:** Este campo permite identificar claramente la actividad y relación del Tercero con la empresa. Un Tercero puede tener varias relaciones con la empresa, relaciones que se establecen seleccionando una o varias posibilidades en las casillas correspondientes. Se han definido los siguientes tipos de Tercero:

- Responsable Interno / Empleado (RI)
- Responsable Externo / Contratista (RX)
- Proveedor / Fabricante (PF)
- Responsable Interno y Otro (RI-OT)
- Responsable Externo y Proveedor / Fabricante (RX-PF)

Cuando se selecciona cualquiera de los dos primeros tipos de Tercero (Responsable),  es necesario identificar el Oficio que realiza el Tercero. Para esto el programa permite desplegar todos los Oficios que han sido ingresados previamente al sistema.

El programa permite seleccionar solo uno de dos: **Responsable Interno** o **Responsable Externo**. En ambos casos el sistema solicita a continuación el nombre del Oficio o de la especialidad del Tercero.

Un **Responsable Interno (RI)** no puede ser al tiempo **Proveedor (PF)** de la compañía, entonces ésta combinación está inhabilitada.

**Oficio:** En este campo se selecciona, de la lista despegable, el oficio o cargo técnico o especialidad del Tercero. Al seleccionar un Oficio, el programa muestra automáticamente el nombre del Centro Responsable al que está asociado el Oficio.

**Contacto:** En este campo se ingresa, para el caso de contratistas y proveedores, el nombre de la persona representante del Tercero ante la empresa. Para el caso de Terceros internos es posible ingresar el mismo nombre del Tercero, o de un representante de su área, o de la secretaria del área o es posible también dejarlo en blanco.

**Correo Electrónico:** En este campo se escribe la dirección electrónica del Tercero.

**Dirección:** En este campo se diligencia la dirección donde se localiza el Tercero.

**Ciudad y País:** Aparecen dos campos, en los cuales debe ir la siguiente información:

En el primer campo se escribe la ciudad donde está ubicado el Tercero. En el  segundo campo se escribe el país.

**Teléfonos:** Aparecen dos campos para dos números telefónicos: Teléfono 1 y Teléfono 2.

Cuando se vaya a escribir un número telefónico es importante tener en cuenta que los tres primeros dígitos que se escriban deben corresponder al indicativo de la ciudad o del área. El programa automáticamente escribirá estos tres dígitos dentro de un  paréntesis.   Los siguientes siete dígitos corresponden al número de teléfono y a partir del octavo dígito corresponde al número de la Extensión telefónica (si aplica). El programa automáticamente escribe la palabra Ext.

**Centro de Costo:** En este campo se selecciona, de la lista despegable, el centro de costo al que pertenece el Tercero. Si es un Tercero tipo RI, lista los Centros de Costo tipo Mantenimiento; si es un Tercero tipo RI-OT, lista los Centros de Costo tipo Usuario; si es un Tercero tipo RX o RX-PF, lista los Centros de Costo tipo Externo.

**Código Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ingreso y Retiro:** En el primer campo se escribe la fecha en la cual se hizo el ingreso del Tercero al sistema. En el segundo se ingresa la fecha de retiro del Tercero.

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

### Certificaciones Terceros

Esta nueva funcionalidad se usa para realizar un seguimiento detallado a los Terceros que tienen documentaciones con vigencias y que son cumplimiento de normas. El objetivo de esta funcionalidad es que a los Terceros tipos RI y RX, se les pueda anexar documentación y que el sistema le informe al usuario si ese Tercero está habilitado para hacer labores de mantenimiento en la institución, en particular, cuando las labores a realizar están relacionadas con la documentación anexada vigente. Dependiendo del tipo de Tercero, se habilita una pestaña al lado derecho de la Ficha Técnica del Tercero que se está definiendo y es en esta nueva pestaña que se relaciona la información mencionada. Para ingresar a esta opción se recomienda tener ingresado el Tercero en la tabla, se debe dar clic a la pestaña de Certificaciones para un tipo RI o a la pestaña de Técnicos para un tipo RX.

**Certificaciones Terceros Tipo RI**

A continuación la explicación de las Certificaciones de Terceros tipo RI, cuya finalidad es que el usuario pueda asociar información importante del responsable ejecutor de la institución como hoja de vida, documento, tarjeta profesional, pasantías, cursos, registro Invima, entre otros.

![detalles de terceros](../../assets/images/cap02/chp02_img04.png)

En la gráfica anterior, Ventana Certificaciones, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Terceros se  encuentra la información relevante a la Certificación del Tercero seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

Nombre Certificado: En este campo se escribe el nombre del documento a adjuntar.

FF Vencimiento: En este campo se elige la fecha de vencimiento del documento a adjuntar.

Adjuntar Documentos: Para adjuntar el documento, se debe dar clic al  `<a class="btn">`Seleccionar archivo `</a>`
“Seleccionar archivo”, se observa que se abre una ventana para buscar el archivo y seleccionarlo dando doble clic o clic al botón `<a class="btn">`Abrir `</a>`
, al lado derecho del campo se observa que se muestra el nombre del archivo adjuntado, para insertar o actualizar los datos en esta tabla se da clic en el botón `<a class="btn">`Abrir `</a>`

Para actualizar la información de alguna certificación, se actualiza los campos y terminar el proceso de actualización con el botón `<a class="btn">`Actualizar `</a>`. Si se desea desasociar la información de una certificación de un Técnico, se debe dar clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura) que está al lado izquierdo del documento anexo, sale mensaje de alerta que indica al usuario de sí está seguro de eliminar el registro y se da clic en Aceptar.

**Certificaciones Terceros Tipo RX**

Por otro lado, a continuación la explicación de los Técnicos de Terceros tipo RX, cuya finalidad es que el usuario pueda asociar información importante del responsable ejecutor contratista o servicio externo como hoja de vida, documento, tarjeta profesional, pasantías, cursos, registro Invima, entre otros.

![detalles de terceros](../../assets/images/cap02/chp02_img05.png)

En la gráfica anterior, Ventana Técnicos, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Terceros se  encuentra la información relevante al Técnico del Tercero seleccionado en el Visor.
A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se escribe el nombre propio de la(s) persona(s) que ejecutará(n) las labores de mantenimiento a la institución.

**Título:** En este campo se registra el cargo técnico u oficio de la(s) persona(s) que ejecutará(n) las labores de mantenimiento a la institución.

**Tarjeta Profesional:** En este campo se digita el número de la Tarjeta Profesional de la(s) persona(s) que ejecutará(n) las labores de mantenimiento a la institución.

**Registro Sanitario Invima:** En este campo se escribe el número del Registro Sanitario Invima de la(s) persona(s) que ejecutará(n) las labores de mantenimiento a la institución actual.

**Requiere Certificación:** Este switche permite que al vencerse cualquier documento de una persona, se asigne una pelota de color rojo, para indicar que está vencido o verde, para indicar que se encuentra activo, en la columna  “Habilitado” de la tabla de Técnicos y en la ventana visor de Terceros. El objetivo es que el usuario pueda enterarse con antelación de los vencimientos de los documentos de la(s) persona(s) que ejecutará(n) las labores de mantenimiento a la institución.

**Nombre Certificado:** En este campo se escribe el nombre del documento a adjuntar.

**FF Vencimiento:** En este campo se elige la fecha de vencimiento del documento a adjuntar.

**Adjuntar Documentos:** Para adjuntar el documento, se debe dar clic al botón `<a class="btn">`Seleccionar archivo `</a>`. se observa que se abre una ventana para buscar el archivo y seleccionarlo dando doble clic o clic al botón `<a class="btn">`Abrir `</a>`, al lado derecho del campo se observa que se muestra el nombre del archivo adjuntado, para insertar o actualizar los datos en esta tabla se da clic en el botón `<a class="btn">`Más `</a>` o  `<a class="btn">`Actualizar Técnico `</a>`, **respectivamente.** Para finalizar el proceso, en ambos casos, se debe dar clic al botón `<a class="btn">`Actualizar `</a>`.

Para registrar un nuevo técnico se da clic en el botón `<a class="btn">`Más `</a>`, ubicado en la parte inferior izquierda de la tabla Técnicos. Para actualizar la información de alguno de los técnicos, primero se selecciona el técnico en la tabla, se observa que se muestra la información detallada de ese técnico, se procede a actualizar los campos, luego dar clic al botón `<a class="btn">`Actualizar Técnico `</a>` y finalmente terminar el proceso de actualización con el botón `<a class="btn">`Actualizar Técnico `</a>`. Si se desea desasociar la información de una certificación de un Técnico, se debe dar clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura) que está al lado derecho del documento anexo, sale mensaje de alerta que indica al usuario de sí está seguro de eliminar el registro y se da clic en `<a class="btn">`Aceptar `</a>`.

### Indicadores

Es posible visualizar de manera inmediata, los Terceros habitados e inhabilitados, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana visor.

![terceros](../../assets/images/cap02/chp02_img06.png)

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Verde:** Terceros con certificaciones que tienen fecha de vencimiento posterior a la fecha actual, es decir, se encuentran con sus certificaciones habilitadas
- **Rojo:** Terceros con certificaciones que tienen fecha de vencimiento anterior a la fecha actual, es decir, se encuentran con una o varias certificaciones inhabilitadas.

### Subgrupo Terceros

Se usa para seleccionar grupos de Terceros que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<span class="mdi mdi-filter-variant icon white">`, ubicado en la parte superior derecha de la ventana Visor de Terceros.

![terceros](../../assets/images/cap02/chp02_img07.png)

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Terceros. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Terceros.

El programa permite entonces hacer selección de un grupo de Terceros de acuerdo con los criterios seleccionados en la siguiente ventana.

![subgrupo terceros](../../assets/images/cap02/chp02_img08.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes.

**Centro de Costo:** Se elige de la lista el Centro de Costo al que pertenece el Tercero.

**Centro Responsable:** Lista los centros responsables registrados en el sistema. cap02/chp02_img09.png)

También se puede elegir el centro responsable o un grupo de centros responsables mediante el uso de comodines, para ello, se debe dar clic al icono `<span class="material-icons">`lock “Candado”. Ejemplo, si se escribe %adm%, el sistema entiende que debe seleccionar aquellos Terceros cuyo centro responsable tenga incluida la secuencia  “adm”.

**Ciudad:** Permite la selección de la ciudad donde se encuentre un Tercero.

**Código:** Esta selección agrupa los Terceros relacionados por su código. Por ejemplo: si se escribe 98%, el sistema localiza aquellos Terceros cuyo código empieza por 98. El porcentaje a continuación, es un carácter comodín que significa ** “todos”**.

**Tipo:** Filtra los Terceros de Tipo Responsable Interno, Responsable Externo, Proveedor / Fabricante u Otro, al dar clic en uno o algunos de los cuadros de selección.

![tipo](../../assets/images/cap02/chp02_img10.png)

**Contacto:** Permite la selección de los Terceros que tengan un contacto asociado, ya sea el mismo nombre del Tercero o el nombre de la persona representante de la empresa.

**Estado:** Permite la selección de los Terceros de acuerdo al estado de Activo o Inactivo. El estado de los Terceros es importante para la selección en las listas  desplegables. Por ejemplo: Si un Tercero de tipo RI, tiene definido el Estado ** “Inactivo”**, este no aparecerá en la lista de los Responsables de la OT.

**Nombre:** Selecciona los Terceros según criterios basados en su Nombre. Ejemplo: **%Manuel%**  selecciona todos los Terceros en cuyo nombre, en cualquier parte, tengan la palabra ** “Manuel”**.

**Oficio:** Muestra los Terceros que tengan asignados el Oficio seleccionado.

![oficio](../../assets/images/cap02/chp02_img11.png)

De igual forma, se puede elegir el oficio mediante la opción Utilizar comodines, para ello, se debe dar clic al icono `<a class="btn">`Candado `</a>`, . Esta selección agrupa los Terceros relacionados por su oficio. Por ejemplo: si se escribe ayudante%, el sistema localiza aquellos Terceros cuyo oficio empieza por la palabra ** “ayudante”**.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones.  Esto significa que inmediatamente después de haber

realizado una selección es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección se da un clic al botón `<a class="btn">`Mas (+)`</a>`, en  lugar de darlo al botón `<a class="btn">`Acepar `</a>`

### Ubicaciones Físicas

Las Ubicaciones Físicas corresponden a los sitios o áreas geográficas donde se encuentran los Activos, Equipos, Objetos de Mantenimiento y los Repuestos. Es la lista de las áreas  físicas que conforman el  “Layout” de la planta de producción (Industria, Manufactura) o de la planta de servicios (Hoteles, Hospitales, Banca) o simplemente de las facilidades que conforman las instalaciones que son objetos de mantenimiento.

El  concepto  de  Ubicaciones  Físicas  es  netamente  de  geografía,  diferenciado completamente del concepto de Equipo y de Centro de Costo, además la ubicación física puede estar en forma activa o inactiva dentro de **AM**. En ocasiones un Centro de Costo corresponde a una Ubicación Física pero en muchas otras no es así. De igual forma en ocasiones  un equipo o unidad funcional caracteriza a la ubicación física pero en muchas otras no. Por esta razón los tres conceptos se definen independientemente en **AM**eso si con la posibilidad de relacionarlos en distintos contextos.

Para ilustrar mejor este concepto definimos a continuación algunos ejemplos de Ubicaciones Físicas.

- Planta de Acabados.
- Planta de Acabados.
- Empaqué Planta de Acabados.
- Pesaje Edificio de Administración.
- Edificio de Administración, Oficinas.
- Edificio de Administración. Laboratorio Químico.
- Edificio de Administración. Laboratorio Textil
- Almacén General
- Almacén de Materia Prima.
- Almacén de Materiales y Repuestos.
- **FC-** Fundición.
- **FC-** Fundición. Fleje FC-Fundición. Hornos.
- **FC-**Fundición. Línea 1.
- **FC-** Fundición. Línea 1.Fresado.
- **FC**-Fundición. Línea 2.
- **FC-**Fundición. Línea 2.Fresado.
- **FC-** Fundición. Puente Grúa.
- **FC-** Fundición, Sostenimiento.

Se recomienda utilizar los nombres de las Ubicaciones Físicas que la cultura  empresarial ha acostumbrado manejar. Existe disponible un espacio de cuarenta  caracteres para la Ubicación Física. Es posible también mezclar una porción de código y lenguaje natural.

En el ejemplo anterior FC es el apócope de una planta en una fábrica. Esta planta a su vez está conformada por varios departamentos de proceso, uno de los cuales es Fundición, que a su vez se compone por varias secciones como Fleje,  Hornos, las Líneas de proceso y la sección de Sostenimiento.

Cuando la Ubicación Física es un criterio para seleccionar un subgrupo en Equipos, o  en Órdenes de Trabajo activas o históricas, es posible referenciar una Ubicación Física global, así:

**FC-Fundición%:** Se refiere a todas las secciones que conforman el departamento de fundición.

**FC%:** Se refiere a todas las secciones de todos los departamentos de la Planta FC.

El registro  de las Ubicaciones Físicas es muy importante, pues ellas serán  invocadas desde muchas ventanas de otras opciones de Menú Principal como  Equipos, Repuestos, Órdenes de Trabajo, Solicitudes de Servicio e Historia de Mantenimiento.

![ventana ie](../../assets/images/cap02/chp02_img12.png)

En la gráfica anterior, Ventana Técnicos, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Terceros se  encuentra la información relevante al Técnico del Tercero seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código UF:** Se define un código o indicativo único para la ubicación física, que puede ser un consecutivo. Ejemplo: UF-001, el cual UF corresponde a las abreviaturas de Ubicación Física y 001 corresponde al primer registro.

**Nombre UF:** En 50 caracteres se registra el  nombre de la nueva Ubicación Física.

**Área (opcional):** Se escribe el área de la Ubicación Física.

**Unidad de Medida Área:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Capacidad (opcional):** Se escribe la capacidad de la Ubicación Física. La capacidad a definirse, si es requerida, es un concepto de importancia relativa a la organización. Información sobre capacidad en número de personas o de escritorios o de computadores o de máquinas-herramienta o de cabezas de ganado o árboles puede ser incluida aquí.

**Unidad de Medida Capacidad:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Estado:** El campo estado se utiliza para definir si la UF actual se encuentra Activa o Inactiva. Este Estado se utiliza para posibilitar o inhabilitar el despliegue de UF en otros contextos (Equipos, OT, PM, etc.). De esta forma, una UF inactiva NO aparece al intentar crear Equipos, OT u otros.

### Subgrupo Ubicaciones Físicas

![ubicaciones fisicas](../../assets/images/cap02/chp02_img14.png)

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas  las Ubicaciones Físicas. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todas las Ubicaciones Físicas.

El programa permite entonces hacer selección de un grupo de Ubicaciones Físicas

![subgrupo](../../assets/images/cap02/chp02_img15.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes.

**Área:** Filtra las UF que tienen la cantidad de área ingresada en el campo.

![area](../../assets/images/cap02/chp02_img16.png)

**Capacidad:** Filtra las UF que tienen la cantidad de capacidad ingresada en el campo.

![capacidad](../../assets/images/cap02/chp02_img17.png)

**Código UF:** Esta selección agrupa las UF relacionados por su código. **Por ejemplo:** si se escribe UF-12%, el sistema localiza aquellas UF cuyo código empieza por UF-12. El porcentaje a continuación, es un carácter comodín que significa ** “todos”**.

![codigo uf](../../assets/images/cap02/chp02_img18.png)

**Estado:** Permite la selección de las UF de acuerdo al estado de Activo o Inactivo. El estado de las UF es importante para la selección en las listas  desplegables.
**Por ejemplo:** Si una UF, tiene definido el Estado ** “Inactivo**, esta no aparecerá en la lista de las Ubicaciones Físicas de los módulos de Activos, Solicitudes de Servicio, Paros, Ordenes de Trabajo, Historia y Almacén.

![Estado](../../assets/images/cap02/chp02_img19.png)

**Nombre UF:** Selecciona las UF según criterios basados en su Nombre.
**Ejemplo:** %Planta% selecciona todas las UF en cuyo nombre, en cualquier parte, tengan la palabra
** “Planta”**.

![nom uf](../../assets/images/cap02/chp02_img20.png)

**Unidad de Medida Área:** Lista las Unidades de Medida registradas en la tabla de Unidades de Medida. Se elige de la lista la Unidad de Medida deseada.

![uni de med area](../../assets/images/cap02/chp02_img21.png)

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono `<a class="btn">`Candado `</a>`. Ejemplo, si se escribe metros%, el sistema entiende que debe seleccionar aquellas UF cuya unidad de medida comience por la palabra ** “metros”**. El porcentaje a continuación, es un carácter comodín que significa ** “todos”**.

**Unidad de Medida Capacidad:** Lista las Unidades de Medida registradas en la tabla de Unidades de Medida. Se elige de la lista la Unidad de Medida deseada.

![uni de med capacidad](../../assets/images/cap02/chp02_img22.png)

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono `<a class="btn">`Candado `</a>`. Ejemplo, si se escribe la palabra sin porcentajes %, el sistema realiza una búsqueda de aquellas UF que en cualquier parte del campo tengan el nombre de la palabra digitada, en este caso, la palabra ** “bloques”**.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber
realizado una selección es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección se da un clic al botón `<a class="btn">`Mas (+)`</a>`, en  lugar de darlo al botón `<a class="btn">`Aceptar `</a>`.

## Almacenes

Es la tabla de Infraestructura en la que se definen los distintos Almacenes,  Bodegas o Depósitos de: Materias Primas, Materiales y Repuestos o elementos generales de una organización.

El **AM** PRO es un sistema multicompañía y multialmacén, por tanto es posible definir múltiples almacenes en la base de datos para cada compañía; entonces, a una compañía se le pueden definir varios almacenes.

El **AM** ST es un sistema monocompañía y multialmacén.

![Detalles del Almacen](../../assets/images/cap02/chp02_img23.png)

En la gráfica anterior, Ventana Almacén, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Almacenes se encuentra la información relevante al Almacén seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código:** este campo recibe un número de máximo dos dígitos, con el cual se  identifica  la bodega o Almacén de Equipos o repuestos.

**Nombre:** se define el nombre del Almacén.

**Ubicación física:** Indica el sitio donde está ubicado el Almacén o bodega. Esta Ubicación Física se selecciona de la tabla de Ubicaciones Físicas previamente definidas.

**Tipo Costeo:** Aquí se define la forma como se costean los ítems, repuestos o materiales en el Almacén actual. Existen dos opciones:

La primera consiste en valorizar todos los ítems de un código según el costo del último reaprovisionamiento, en este caso se habla de valorizar por Último Ingreso.

La segunda opción Promedio Ponderado, consiste en valorizar todo el conjunto de ítems de un mismo código mediante el cálculo sencillo de un promedio ponderado.

Utilizar uno u otro método depende de si el Almacén es contable o no. Se recomienda utilizar el método de Promedio Ponderado si se trata de un Almacén contable. Si se trata de un Almacén no contable, o sea, cuando se considera que los ítems que lo conforman, al ser trasladados a esta bodega ya fueron consumidos contablemente, entonces se recomienda usar el método de costeo por Último  Ingreso, en cuyo caso la elaboración y proyección de presupuestos puede arrojar información más  realista, al tiempo que no existe el riesgo de la revalorización  contable de los mismos ítems.

**Tipo Almacén:** Esta opción, de tipo combo, muestra tres ítems: Contable y No Contable.

Esta funcionalidad, permitirá a futuro definir si el Almacén seleccionado es Contable, es decir, tendrá una interacción con el sistema contable de la organización la cual  generara un costo o factura de venta; y No Contable hace referencia al Almacén que guarda el inventario de Repuestos para simple funcionalidad del sistema  **AM**. Por defecto, cuando se crea un almacén el tipo se define con NO CONTABLE.

**Almacén  Corporativo:** Este switche indica si el almacén al cual se está haciendo referencia es el corporativo. Cuando se define si es el almacén corporativo, se declara con la palabra ** “SI”**, en caso contrario se define con la palabra ** “NO”**. Para  definir el almacén corporativo se realiza en el módulo de Administración, en la opción de Valores por defecto, en la etiqueta General, existe la opción de ** “Almacén corporativo”** con un combo desplegable para escoger cual es el almacén.

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

## Unidades de Medida

Es la tabla que se encarga de la definición de los distintos tipos de unidades de medición con el objeto de que se estandarice su uso en dos aspectos: nombre de la  unidad y su abreviatura. Las Unidades de Medida están agrupadas por el concepto Tipo, en el que se establece su categoría de medición: Longitud, superficie, volumen, peso y otra.

![Detalles del Almacen](../../assets/images/cap02/chp02_img24.png)

En la gráfica anterior, Ventana Unidades de Medida, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Unidades de Medida se  encuentra la información relevante a la Unidad de Medida seleccionada en el Visor.
A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se escribe la nueva unidad de medida que se quiere definir.

**Abreviatura:** En este campo se detalla la abreviatura que identifica la unidad de  medida que se está definiendo.

**Tipo:** De acuerdo con la nueva unidad de medida se debe seleccionar el **Tipo:** longitud, superficie, volumen, peso u otra.

### Monedas

Es la tabla en la que se establecen las distintas monedas a ser usadas en el sistema cuando se hace referencia al costo de compra o al costo vigente, de un  equipo o de un repuesto. Hasta este momento se trata de un medio de  documentación  sobre el costo indicado para Equipos o Activos.

![Detalles de monedA](../../assets/images/cap02/chp02_img25.png)

contenidos. En la ventana Detalle de Monedas se encuentra la información relevante a la Moneda seleccionada en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se registra el nombre de la moneda.

**Abreviatura:** En este campo se establece la abreviatura que identifica la moneda

## Contadores

En esta tabla de Infraestructura se registran los medidores o contadores de estado,  que reflejan la cantidad de trabajo realizado por un Equipo. Los medidores o contadores más comunes son los horómetros, que reflejan en todo momento la cantidad en horas de trabajo realizado, por el Equipo que lo posee. De igual forma, en la mayoría de los automotores existe otro medidor de uso bastante común, es el  contador de Kilómetros o Millas rodadas, que refleja la distancia recorrida a partir de  un punto relativo, de interés para su propietario.

Cuando el sistema se inicializa, en la tabla de Contadores aparece una propuesta de contadores básicos, que puede ser modificada o complementada de acuerdo al interés de la compañía usuaria.

![Detalles de CONTADOR](../../assets/images/cap02/chp02_img26.png)

En la gráfica anterior, Ventana Contadores, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Contadores se encuentra la información relevante al Contador seleccionado en el Visor.

A continuación se describe el campo que compone el registro.

**Nombre del Contador:** En este campo se registra el nombre del contador

## Características

Es una tabla conformada por los nombres de las Características propias de los Equipos o de los Repuestos, que se utilizan al definir la porción variable de su ficha técnica.  En esta tabla sólo se ingresan los nombres de las Características o los  parámetros-característica de los Equipos y Repuestos. Se cuenta con 30 dígitos para  ingresar la característica deseada.

El valor  y las unidades correspondientes a cada Característica se ingresan en  la  ficha técnica del Equipo o del Repuesto.

La gama de Características depende del tipo de equipamiento de la empresa, por tanto es una tabla modificable o adecuable con gran facilidad.

Existen varios tipos de Características que se configuran según el equipo, al definir su ficha técnica. El primer tipo, el más común, corresponde a las de tipo Informativo o No Controlable, en el que van acompañadas, en la ficha técnica, por un valor  nominal y una unidad. El segundo tipo corresponde a las Controlables Cuantitativas,  en el que además del valor nominal y una unidad, se acompañan por un rango de Tolerancia permitido. Finalmente, el tercer tipo corresponde a las Controlables Cualitativas, en el que se registra un valor apreciativo: SI, NO, BUENO, MALO, REGULAR, etc.

Cuando se trata de Características de Repuestos solo existe un tipo de ellas y son las de tipo Informativo.

![Detalle  de caracteristicas](../../assets/images/cap02/chp02_img27.png)

En la gráfica anterior, Ventana Características, se aprecian sus componentes y sus contenidos. En la ventana Detalle se encuentra la información relevante a la Característica seleccionada en el Visor.

A continuación se describe el campo que compone el registro.

**Nombre de la Característica:** En este campo se define la característica. La Característica es a la vez, la clave de la tabla conformada por los parámetros-característica requeridos por  los Equipos propios de la empresa.

## Centros de Costo

Es la primera tabla que aparece en el listado de Infraestructura, el Centro de Costo (CC) se refiere al área o departamento administrativo, operativo o productivo que recibe servicios de mantenimiento. Se refiere también a la definición contable de los departamentos o áreas responsables de Activos, Equipos o de Objetos de Mantenimiento y por ende de los costos de su mantenimiento.

![Detalle  de caracteristicas](../../assets/images/cap02/chp02_img28.png)

conceptos de costo de mantenimiento, a las Órdenes de Trabajo. Esta asociación posibilita generar múltiples reportes por actividades o por costos o tipos de costos para los distintos Centros de Costo definidos en el sistema.

Es posible usar un Centro de Costo con el objeto de compendiar todos los trabajos relacionados a un Proyecto o a una Inversión. Para este caso se crea un  nuevo CC, copiando su definición desde aquel que es el centro del Proyecto y  se agrega a continuación, como parte del mismo CC, un número o código  identificador del Proyecto o de la Inversión.  En adelante toda OT que corresponda a tal Proyecto se asocia al nuevo CC.

En otro contexto, el concepto de Centros de Costo se asocia al concepto de Clientes. Se trata del caso en que una compañía prestadora de servicios de mantenimiento  atiende a múltiples clientes y quiere llevar un control detallado de las actividades técnicas ejecutadas y los costos asociados a cada uno de ellos. En este caso el sistema posibilita el  registro de datos adicionales sobre el Centro de Costo o Cliente; son ellos el nombre del contacto, su estado, una clasificación y datos generales para su ubicación.

![Detalle el centro de costo](../../assets/images/cap02/chp02_img29.png)

En la gráfica anterior, ventana visor Centros de Costo,  se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Centros de Costo se encuentra la información relevante al Centro de Costo seleccionado en el visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código CC:** En  este campo se registra el código de cada Centro de Costo. La capacidad del campo es de 40 caracteres alfanuméricos.

**Código Sub CC:** En  este campo se registra el Sub CC (si aplica) asociado al Centro de Costo. El Sub CC es un mecanismo para controlar las distintas porciones de costo dentro de un Centro de Costo a manera de cuentas internas.

**Descripción CC:** Se usa para escribir el nombre del Centro de Costo. Es posible, a gusto de la empresa usuaria, escribir los nombres de cada Centro de Costo en forma de título: La primera letra de cada nombre en mayúscula y las siguientes en  minúsculas,  o todo en mayúsculas. Para la descripción se dispone de 60 caracteres alfanuméricos.

Si el Centro de Costo se refiere a un Cliente, en este campo se define el nombre de la empresa cliente.

**Tipo:** Se elige el tipo del Centro de Costo que aplique. Si el Centro de Costo se refiere a un Centro de Costo interno de la empresa usuaria, se elige el tipo Usuario. Si el Centro de Costo se refiere a un Centro de Costo de Mantenimiento y es interno de la empresa usuaria, se elige el tipo Mantenimiento. Si el Centro de Costo se refiere a un Cliente, se elige el tipo Externo.

**Responsable:** Aquí se define a la persona encargada de la responsabilidad o del manejo del Centro de Costo. Se define el Responsable para los Centros de Costo tipo Usuario y Mantenimiento.

**Contacto:** Si el Centro de Costo se refiere a un Cliente, aquí se define el nombre de la persona que representa a ese Cliente. Se define el Contacto para los Centros de Costo tipo Externo.

**CC Superior**: En este campo se define el Centro de Costo correspondiente a la jerarquía inmediatamente superior.

**Área/Depto:** Indica el área o departamento al cual pertenece el Centro de Costo respectivo. Si el Centro de Costo se refiere a un Cliente, aquí se define el grupo o sector de industria al que pertenece esa empresa Cliente.

**Ciudad (Opcional):** Este campo se usa para indicar la ciudad del Área o  Departamento responsable del Centro de Costo. Si el Centro de Costo se refiere a  un  Cliente, aquí se define la ciudad de la dirección del Cliente.

**Dirección (Opcional):** En este campo se diligencia la dirección del Área o  Departamento al que pertenece el Centro  de Costo. Si el Centro de Costo se refiere a un Cliente, aquí se define la dirección del Cliente.

**Teléfono (Opcional):** En él se define el número del teléfono correspondiente al Centro de Costo. Si el Centro de Costo se refiere a un Cliente, aquí se detalla el teléfono del Cliente. Se debe recordar que al escribir un número telefónico los tres primeros dígitos que se escriben corresponden al indicativo de la ciudad. El programa automáticamente escribe estos tres dígitos dentro de un paréntesis. Los siguientes siete dígitos corresponden al número de teléfono y a partir del octavo dígito corresponde al número de la Extensión telefónica (si aplica). El programa automáticamente escribe la palabra Ext.

**Correo Electronico:** En este campo se escribe la dirección electrónica del Centro de Costo o del Responsable o Contacto del Centro de Costo.

**Estado:** Indica el estado en que se encuentra el Centro de Costo: Activo o inactivo.

**Clase:** Indica la clase a que pertenece el Centro de Costo: Com (Comercial), Ind (Industrial), Ser (Servicios), Fin (Financiero), Edu (Educativo), Gob (Gobierno) y Otr (Otro).

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

### Subgrupo Centros de Costo

Se usa para seleccionar grupos de Centros de Costo que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<a class="btn">`icono de filtro `</a>`, ubicado en la parte superior derecha de la ventana Visor de Centros de Costo.

![Detalle el centro de costo](../../assets/images/cap02/chp02_img30.png)

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Centros de Costo. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Centros de Costo.

El programa permite entonces hacer selección de un grupo de Centros de Costo de acuerdo con los criterios seleccionados en la siguiente ventana.

![subgrupo centro de costo](../../assets/images/cap02/chp02_img31.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes.

Área/Depto: Filtra los CC que tengan asignada el área o departamento de la institución ingresada en este campo.

![area/ depto](../../assets/images/cap02/chp02_img32.png)

**CC Superior:** Permite filtrar por aquellos CC Superior que fueron asociados a los CC. Lista los CC creados en la tabla de Centros de Costos.

![cc superior](../../assets/images/cap02/chp02_img33.png)

**Ciudad:** Filtra los CC que están asociados a la Ciudad especificada.

![ciudad](../../assets/images/cap02/chp02_img34.png)

También se puede escribir la ciudad mediante el uso de comodines. Ejemplo, si se escribe Bog%, el sistema entiende que debe seleccionar aquellos CC cuya ciudad comience por la palabra  “Bog”. El porcentaje a continuación, es un carácter comodín que significa  “todos”.

**Clase:** Filtra los CC que están asociados a una de las clases listadas.

![clase](../../assets/images/cap02/chp02_img35.png)

**Código CC:** Esta selección agrupa los CC relacionados por su código. Por ejemplo: si se escribe cont%, el sistema localiza aquellos CC cuyo código empieza por cont. El porcentaje a continuación, es un carácter comodín que significa  “todos”.

![cod cc](../../assets/images/cap02/chp02_img36.png)

**Código Sub CC:** En  este campo se filtra por el Sub CC asociado a un Centro de Costo.

![cod sub cc](../../assets/images/cap02/chp02_img38.png)

**Contacto:** Filtra los CC que tengan asociada a una persona externa como contacto. Ejemplo: %maria josé% selecciona todos los CC cuyo Contacto, en cualquier parte, tengan la palabra  “maria josé”.

![contacto](../../assets/images/cap02/chp02_img39.png)

**Descripción CC:** Agrupa los CC cuya descripción corresponda a un Centro de Costo Interno o a un Cliente.

![contacto](../../assets/images/cap02/chp02_img40.png)

**Dirección:** Permite filtrar por la dirección del Área o  Departamento asociada a los CC.

![contacto](../../assets/images/cap02/chp02_img41.png)

**Correo Electrónico:** Filtra la dirección electrónica asociada a un CC.

![correo](../../assets/images/cap02/chp02_img42.png)

**Estado:** Permite la selección de los CC de acuerdo al estado de Activo o Inactivo. El estado de los CC es importante para la selección en las listas  desplegables.
**Por ejemplo:** Si un CC, tiene definido el Estado  “Inactivo”, esta no aparecerá en la lista de los Contratos, Terceros, módulos de Activos, Kárdex, Programas, Solicitudes de Servicio, Paros, Ordenes de Trabajo, Historia y Administración.

![estado](../../assets/images/cap02/chp02_img43.png)

**Responsable:** Filtra los CC (tipo: mantenimiento y usuario) cuyos responsables corresponden al diligenciado en el campo.

![responsable](../../assets/images/cap02/chp02_img44.png)

**Teléfono:** Filtra por el teléfono asociado a un CC.

![telofono](../../assets/images/cap02/chp02_img45.png)

**Tipo:** Agrupa los CC de acuerdo al tipo seleccionado.

![tipo](../../assets/images/cap02/chp02_img46.png)

## Centros Responsables

Son los centros especializados, encargados de ejecutar labores de mantenimiento. Se incluyen tanto los Centros Responsables de Mantenimiento propios de la empresa  como

los externos a ella (Contratistas y Talleres Externos).

Se pueden definir a través de su descripción o  de su código según costumbre en la empresa. Para ello existe un espacio reducido, compuesto por  trece caracteres; esto debido a la necesidad de asociar posteriormente a cada Centro  Responsable el Oficio o Especialidad, o los Oficios o Especialidades que le pertenecen.

Cuando se trata de los Centros Responsables Internos de la organización existen  varias alternativas de definición:

En primer lugar como Centros especialistas en cada uno de los tipos de  mantenimiento: Mecánico, Eléctrico, Instrumentación u otros.

Pero pueden ser también Centros técnicos de mantenimiento multiobjetivo,  conformados por especialistas de cada tipo de mantenimiento, que prestan servicio a uno o varios sectores productivos de la organización.

El **AM**administra los Centros Responsables de mantenimiento de la empresa cualquiera que sea su forma en la jerarquía organizacional.

Se debe definir además, como un Centro Responsable, al conjunto de Talleres Externos que prestan servicio a la empresa, por solicitud y a elección de ella,  sin  que exista un compromiso previo contractual.

De igual forma, debe constituir un Centro Responsable el conjunto de Contratistas, externos, que prestan servicio a la empresa en forma permanente y rutinaria sobre bases contractuales.

**Ejemplos de Centros Responsables:**

**Talleres Externos:** Tall.Ext

**Contratistas:** Contratis

**Mantenimiento Mecánico:** Mtto.Mec

**Taller Eléctrico:** Tall.Elec

![ipo](../../assets/images/cap02/chp02_img47.png)

En la gráfica anterior, Ventana Centros Responsables, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Centros Responsables se  encuentra la información relevante al Centro Responsable seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre CR:** En este campo se escribe el código del Centro Responsable a  ser incluido. El campo tiene una capacidad de 13 caracteres.

**Estado:** Es un campo para seleccionar un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Centro Responsable ante el aplicativo.

**Tipo:** Se elige si es un Centro Responsable de tipo Interno, sí es de la empresa; o tipo Externo, sí corresponde a un Taller Externo o Contratista.

## Oficios

Aquí se definen los Oficios o Cargos Técnicos de mantenimiento que el área de Relaciones Laborales de la empresa tiene registrados dentro de cada Centro Responsable.

En otras palabras esta es la tabla en la que se registran los nombres de los Cargos Técnicos de mantenimiento a los que se asocian posteriormente las personas de las áreas de

También se definen aquí las especialidades de los Talleres Externos o de los Contratistas que prestan servicios de mantenimiento. Ejemplos: Talleres Eléctricos, Talleres Mecánicos, Talleres de Motores y Bombas;  Contratistas de Aire Acondicionado, Contratistas de Mecanizado, Contratistas para Instalaciones de Redes, entre otros.   Los oficios son requeridos por los Programas de Mantenimiento y las Órdenes de Trabajo.

![detalle](../../assets/images/cap02/chp02_img48.png)

En la gráfica anterior, Ventana Oficios, se aprecian sus componentes y sus  respectivos contenidos. En la ventana Detalle de Oficios se encuentra la información  relevante al Oficio seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Centro responsable:** Este campo permite seleccionar un Centro Responsable preexistente, al  cual pertenece el oficio. Se encuentran disponibles para la selección los Centros Responsables definidos en la tabla correspondiente.

**Oficio:** En este campo se definen los diferentes Oficios del personal de  mantenimiento propio de la empresa, o las Especialidades de los Talleres externos y Contratistas.

**Tipo Trabajo (TT):** Indica el tipo de trabajo al cual está relacionado el Oficio o la especialidad que se está definiendo. Elc (eléctrico), Mec (mecánico), I/E (instrumentación y  electrónica), Otr (otros). Tanto la definición como la abreviatura, de cada Tipo de Trabajo, son configurables para una compañía, desde el módulo de Infraestructura, en la tabla llamada Tipos de Trabajo.

**Valor Hora 1:** En este campo se registra el valor de la Hora Ordinaria del Oficio referido. Es obligatoria definirla para los Oficios que estén relacionados a un Centro Responsable tipo interno.

**Valor Hora 2:** En este campo se registra el valor de la Hora Extra o Nocturna de Oficio referido.

**Valor Hora 3:** En este campo se registra el valor de la Hora Dominical o Festiva del Oficio referido.

## Responsables

Aquí se registran los nombres propios de las personas definidas para cada Oficio o  los nombres o razones sociales de los Talleres Externos o Contratistas, definidos  para  cada grupo o Especialidad.

Se visualiza la información sobre cada Empleado o Taller o Contratista.

![vent ie](../../assets/images/cap02/chp02_img49.png)

En la gráfica anterior, Ventana Responsables, se aprecian sus componentes y  sus respectivos contenidos. En la ventana Detalle de Responsables se encuentra la información relevante al Responsable seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Centro Responsable:** En este campo se muestra el Centro Responsable asociado al Responsable.

**Oficio:** En este campo se muestra el Oficio al cual pertenece el Responsable.

**Código TE:** En este campo se muestra el código del Tercero  definido en su tabla. De esta forma se establece la relación entre el Responsable y su Oficio, y mediante este último con el Centro Responsable.

**Nombre TE:** En este campo se muestra el nombre del Tercero definido en su tabla.

**Tipo TE:** En este campo se muestra el tipo del Tercero definido en su tabla.

**Contacto TE:** En este campo se muestra el contacto del Tercero definido en su tabla.

**Correo Electrónico TE:** En este campo se muestra el correo electrónico del Tercero definido en su tabla.

**Centro de Costo:** En este campo se muestra el nombre del Centro de Costo del Tercero definido en su tabla.

**Sub CC:** En este campo se muestra el código del Sub CC que está relacionado al Centro de Costo definido en el campo anterior.

**Estado:** Es un campo que muestra un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Responsable ante el aplicativo.

## Riesgos

Los Riesgos corresponden a los riesgos asociados a cada uno de los Activos/Equipos que se encuentran definidos en el módulo de Activos.

![ipo](../../assets/images/cap02/chp02_img50.png)

En la gráfica anterior, Ventana Riesgos, se aprecian sus componentes y  sus respectivos contenidos. En la ventana Detalle de Riesgos se encuentra la información relevante al Riesgo seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se define el nombre del riesgo.

## Magnitudes

El objetivo de esta nueva tabla es registrar las magnitudes que después se asociarán a los Activos, que se utilizaran al definir la porción de Metrología. En esta tabla sólo se registrarán los nombres de la Magnitud. Se cuenta con 60 dígitos para  ingresar la magnitud deseada.

![magni](../../assets/images/cap02/chp02_img51.png)

En la gráfica anterior, Ventana Magnitudes, se aprecian sus componentes y  sus respectivos contenidos. En la ventana Detalle de Magnitudes se encuentra la información relevante a la Magnitud seleccionada en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre de la Magnitud:** En este campo se define el nombre de la magnitud.

## Características Biomédicas

Es una tabla conformada por los nombres de las Características propias de los Activos o Equipos, que se utilizan al definir la porción variable de Info. Biomédica en su ficha técnica.  En esta tabla sólo se ingresan los nombres de las Características. Se cuenta con 30 dígitos para  ingresar la característica deseada.

El valor o nombre, la unidad de medida correspondiente y la clasificación, a cada Característica se ingresan en  la  ficha técnica del Activo o Equipo en la porción de Info. Biomédica.

La gama de Características depende del tipo de equipamiento de la empresa, por tanto es una tabla modificable o adecuable con gran facilidad.

Se recomienda utilizar esta tabla únicamente para empresas o compañías que sean Biomédicas.

Existen varios tipos de Características que se configuran según el equipo, al definir su ficha técnica. El primer tipo, el más común, corresponde a las de tipo Informativo. El segundo tipo corresponde a las de tipo instalación. El tercer tipo corresponde a las de tipo apoyo. El cuarto tipo corresponde a las de tipo Técnicas. Finalmente, las del quinto tipo corresponde a las de funcionamiento. Todas las características biomédicas van acompañadas de un valor o nombre y la unidad de medida.

![detalle caracteristicas](../../assets/images/cap02/chp02_img52.png)

En la gráfica anterior, Ventana Características Biomédicas, se aprecian sus componentes y  sus respectivos contenidos. En la ventana Detalle de Características Biomédicas se encuentra la información relevante al Características Biomédicas seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se define el nombre de la característica biomédica.

**Estado:** Indica el estado en que se encuentra la Característica

**Biomédica:** Activo o inactivo.

## Otros Conceptos de Costo

El objetivo de esta tabla es registrar aquellas actividades complementarias que generan costos en una OT, que son indirectos respecto a la misma y que son  facturados por un ente externo. Este es el caso, por ejemplo, de los costos de transporte necesarios para llevar a mecanizar una pieza, o para arrendar y desplazar un equipo o un  instrumento,  o para desplazar a un ingeniero y cubrir sus gastos de viaje y viáticos.

También se usa para cargar a una OT, costos de trabajos eventuales, no rutinarios, especializados, de costo relativamente bajo, que no ameritan la generación de una OT. Algunos ejemplos son: la cepillada de una campana o una rotación de llantas, labores que se ejecutan como parte de una OT mecánica.

![detalle concepto](../../assets/images/cap02/chp02_img53.png)

En  la  gráfica  anterior,  Ventana Otros Conceptos de Costo, se aprecian sus componentes y sus respectivos contenidos.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código:** Se define un código o indicativo único para el otro concepto de costo, que puede ser un consecutivo. Ejemplo: OC-001, el cual OC corresponde a las abreviaturas de Otro Concepto y 001 corresponde al primer registro.

**Nombre:** En este campo se escribe el nombre del Concepto generador de costo distinto de Mano de Obra y de Materiales y Repuestos. Es una descripción corta de 25 caracteres. Algunos ejemplos de estos Otros Conceptos pueden ser: Transporte Terrestre de un Equipo, Transporte y Viáticos de un operador que se trasladó desde otra ciudad, mecanizado de una pieza sencilla, etc.

**Valor Unitario:** Este campo indica el costo unitario de la actividad. Solamente se debe registrar este valor si corresponde a una tarifa o precio que se ha pactado con el proveedor, y que  se ejecuta rutinariamente. Es posible dejar  este valor en blanco y al momento de cargarlo a una Orden de Trabajo, registrar  manualmente el  valor.

**Unidad de Medida (UM):** Este campo es para seleccionar la unidad de medida que corresponde al **Otro Concepto de Costo**. Se elige una de las disponibles que se descuelgan de la lista.

**Informativo:** Este campo permite activar el Otro Concepto de Costo  como campo informativo, lo que quiere decir que NO se genera costo. En caso de querer cuantificar esta actividad simplemente no se da clic en el cuadro de la opción **Campo Informativo.**

**Tipo  de Trabajo (TT):** Indica el Tipo de Trabajo al cual se relaciona el Concepto de Costo registrado: Elc (eléctrico), Mec (mecánico), I/E (instrumentación y electrónica), Otr (otros).

El Tipo de Trabajo cualifica el valor del costo permitiendo que se cargue en una fila y en una columna precisamente definida en la tabla de Gasto Real en la Orden de Trabajo.

## Causas de OT Pendiente

Aquí se registran las posibles Causas por las que la ejecución de una Orden de Trabajo fue suspendida o pospuesta. En el sistema se proponen las siguientes causas de pendiente:

**M** - Pendiente Por Mano De Obra
**O** - Pendiente Por Otros Conceptos
**P** - Pendiente Por Programación
**R** - Pendiente Por Repuestos
**S** - Pendiente Por Presupuesto

Estos valores predefinidos pueden ser modificados o complementados por el usuario, según su cultura técnica y organizacional.

![detalle causa](../../assets/images/cap02/chp02_img54.png)

En la gráfica anterior, Ventana Causas de OT Pendiente, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Causas de OT Pendiente se encuentra la información relevante a la Causa de Pendiente seleccionada en el Visor.

A continuación se describe el campo que compone el registro.

**Nombre:** En este campo se escribe la Causa por la que se puede detener la ejecución de una OT. Se recomienda nombrar la causa de pendiente  iniciando con una letra que la distinga de las demás, continuar con un guion y a continuación el nombre de la causa. La capacidad del campo es de 30 caracteres.

## Tipos de Actividad

El objetivo de esta tabla es registrar otros Tipos de Actividad. Los Tipos de Actividad  se usan para caracterizar aún más las Órdenes de Trabajo. Algunos  corresponden a Actividades de Mantenimiento como: Correctivo, Preventivo, Preventivo Manual, Predictivo, Inspección, Calibración; pero otros corresponden a actividades que no constituyen mantenimiento formalmente pero sí consumen recursos apreciables de los propios de Mantenimiento: Horas Hombre de Mano de Obra, Materiales y Repuestos y/o Servicios Externos.

El Tipo de Actividad puede ser un criterio más de selección y de búsqueda, en estudios sobre Órdenes de Trabajo e Historia de Mantenimiento.

El **AM** suministra una tabla de Tipos de Actividad que incluye una recopilación interesante de ellas, que el usuario puede enriquecer adicionando  nuevas  o modificando las existentes.

Algunos ejemplos de Tipos de Actividad que ya hacen parte de **AM**son los siguientes:

- EQ-Contrato
- EQ-Garantía
- EQ- Instalación/Montaje
- EQ-Inversión
- EQ-Mejoras distintas de Mntto
- EQ-Overhaul
- EQ-Puesta a punto
- EQ-Recuperación de Activos
- EQ-Reposición de Equipos
- EQ-Revisión / Inspección
- EQ-Servicios Aux Producción
- IC-Comunicaciones
- IL-Dotación Habitaciones
- IL-Iluminación
- IL-Jardinería
- IL-Mejoras / Modificaciones
- IL-Obra Civil
- IL-Pintura/ Plomería
- IL-Señalización
- IL-Ventanería
- IT-Informática Hardware
- IT-Informática Redes
- IT-Informática Software
- IT-Instalación / Montaje de HW
- MN- Mantto
- TV-Ajustes y Ensambles
- TV-Carpintería
- TV-Limpieza
- TV-Mecanizado
- TV-Obra Civil
- TV-Telefonía
- TV-Trabajo Sobre Repuestos

Donde los dos primeros caracteres, entre otros, significan:

- **EQ**  Otros Trabajos sobre Equipos.
- **IC**	Informática y Comunicaciones.
- **IL** Trabajos sobre. Instalaciones Locativas.
- **IT** 	Informática y Tecnología.
- **MN**	Trabajos que constituyen Mantenimiento.
- **TV**	Trabajos Varios

![detalle del tipo de activid](../../assets/images/cap02/chp02_img56.png)

En la gráfica anterior, Ventana Tipos de Actividad, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Tipos de Actividad se encuentra la información relevante al Tipo de Actividad seleccionado en el Visor.

A continuación se describe el campo que compone el registro.

**Nombre TA:** En este campo se registra el Tipo de Actividad. La capacidad  del  campo es de 50 caracteres.

**Tipo de Mantenimiento (TM):** Indica el Tipo de Mantenimiento al cual se relaciona el Tipo de Actividad registrado: Preventivo, Preventivo Manual, Predictivo, Inspección, Lubricación, Metrología, Correctivo, Otro-Mantto, Otro.

## Causas de Cierre de OT

Es la tabla en la que se registran las posibles Causas de Cierre de una Orden de Trabajo (ya sea Ejecutada o No Ejecutada). También es una tabla con contenido propuesto por el aplicativo, que puede ser complementada o adecuada a gusto del usuario.

La primera que se define se refiere a las Órdenes de Trabajo Cerradas Ejecutadas; todas las que siguen son Causas de Cierre para Órdenes de Trabajo Cerradas No Ejecutadas.

En el sistema se incluyen las siguientes Causas de Cierre:

**CAUSAS DE CIERRE**

- seOT Ejecutada
- Cambio por otra OT
- Error en la programación
- Equipo fuera de rvicio

**CAUSAS DE CIERRE OT**

- Equipo no disponible
- Cierre de mes
- Labor no requerida
- Otra causa

**Nota:** La Causa de Cierre  “OT ejecutada” es implícita a las OTs cerradas ejecutadas. Esta
Causa de Cierre no es editable

![detalle de la causa de cierre](../../assets/images/cap02/chp02_img57.png)

En la gráfica anterior, Ventana Causas de Cierre de OT, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Causas de Cierre de OT se encuentra la información relevante a la Causa de Cierre seleccionada en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se escribe la posible Causa de Cierre de una Orden de Trabajo.

**Tipo:**En este campo están predeterminadas dos opciones: Orden de Trabajo Ejecutada y Orden de Trabajo No Ejecutada.

## Acciones Técnicas

Es la tabla que contiene un listado de Acciones Técnicas frecuentes en un área de Mantenimiento. Con la información contenida en esta tabla se pretende describir,  breve pero concretamente, la actividad general a ser realizada en una Orden de  Trabajo. Se suministra por defecto un conjunto de verbos en infinitivo que denotan  Acciones Técnicas de Mantenimiento. El usuario puede utilizar tales verbos para definir Acciones Técnicas detalladas con base en ellos.

Una vez definidas las Acciones Técnicas, es posible incluir una o varias de  ellas, asociadas a una causa, en la tabla de Causas de Falla o asociadas a un efecto, en la tabla de  Efectos de Falla.

![detalle de accion tecnica](../../assets/images/cap02/chp02_img57.png)

En la gráfica anterior, Ventana Acciones Técnicas, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Acciones Técnicas se encuentra la información relevante a la Acción Técnica seleccionada en el Visor.

A continuación se describen los campos que componen el registro.

**Nombre:** Este campo tiene capacidad de 80 caracteres y se describe la Acción Técnica.

**Costo Estándar:** En este campo se registra el costo estándar de la Acción Técnica.

**Duración Estándar:** Se define la duración estándar de ejecución de esa Acción Técnica.

**Unidad Estándar:** Se define la unidad de tiempo estándar correspondiente en días, horas y minutos.

## Causas de Falla

Esta tabla de la Infraestructura pretende definir las Causas reales de Falla, que normalmente sólo se detectan a través de una inspección previa.

En ella se han propuesto a manera de guía, algunas Causas de Falla, agrupadas en Básicas (B) e Inmediatas (I), según orientación de la norma ISO-14224. Se considera que de todas maneras la cultura técnica del área de mantenimiento y su experiencia en equipamiento y procesos específicos pueden variar y/o complementar la propuesta que hace el AM.

**BASICAS (B)**

**BAD**-FALLAS ADMINISTRATIVAS
**BAD**-Error Administrativo
**BAD**-Error de Documentación

**BFI**-FALLAS FABRICACIÓN / INSTALACIÓN
**BFI**-Error de Fabricación
**BFI**-Error de Instalación / Montaje

**BOP**-FALLAS OPERACIONALES
**BOP**-Desgaste o rotura esperada
**BOP**-Error de Mantenimiento
**BOP**-Error de Operación
**BOP**-Servicio fuera de diseño

**BDI**-FALLAS DISEÑO
**BDI**-Capacidad Inadecuada
**BDI**-Diseño Inadecuado
**BDI**-Material Inadecuado

**BMI**-FALLAS MISCELANEAS
**BMI**-Desconocida
**BMI**-Miscelánea
**BMI**-Oculta

**INMEDIATAS (I)**

**IEL**-FALLAS ELECTRICAS
**IEL**-Circuito Abierto
**IEL**-Corto Circuito
**IEL**-Falla de Energía / Voltaje
**IEL**-Falla Tierra / Aislamiento
**IEL**-Sin / Bajo Energía / Voltaje

**IIN**-FALLAS INSTRUMENTOS
**IIN**-Desajustado
**IIN**-Falla Común (falla redundante)
**IIN**-Falla en Control
**IIN**-No Señal / Ind / Alarma
**IIN**-Señal / Ind / Alarma incorrecta
**IIN**-Software

**IMI**-FALLAS MISCELANEAS
**IMI**-Desconocida
**IMI**-Miscelánea
**IMI**-Oculta

**IIE**-FALLAS EXTERNAS
**IIE**-Bloqueado / Taponado
**IIE**-Contaminación

**IME**-FALLAS MECANICAS
**IME**-Bloqueado / Taponado
**IME**-Deformación
**IME**-Desalineamiento
**IME**-Fuga
**IME**-Pegado
**IME**-Suelto
**IME**-Vibración

**IMT**-FALLAS MATERIAL
**IMT**-Cavitación
**IMT**-Corrosión
**IMT**-Desgaste
**IMT**-Erosión
**IMT**-Fatiga
**IMT**-Fractura
**IMT**-Quemado
**IMT**-Sobrecalentamiento

Los Prefijos significan:

**B:** BÁSICAS
**I:** INMEDIATAS
**AD:** ADMINISTRATIVAS
**DI:** DISENO
**FI:** FABRICACION / INSTALACION
**MI:** MISCELANEAS
**OP:** OPERACIONALES
**EL:** ELECTRICAS
**IE:** EXTERNAS
**IN:** INSTRUMENTOS
**ME:** MECANICAS
**MT:** MATERIAL

![detalle de accion tecnica](../../assets/images/cap02/chp02_img60.png)

En la gráfica anterior, Ventana Causas de Falla, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Causas de Falla se encuentra la información relevante a la Causa de Falla seleccionada en el Visor.

A continuación se describen los campos que componen el registro.

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: **BOP**-01, el cual **BOP** corresponde a las abreviaturas del grupo y prefijo al que pertenece la Causa de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra la Causa de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Causa de Falla las Acciones Técnicas que más comúnmente se ejecutan para evitarla y solucionarla. Hay que recordar que las Acciones Técnicas por Efecto pretenden ubicar la causa y que las Acciones Técnicas por Causa pretenden evitar y solucionar la causa.

adicionan con el botón del  `<a class="btn">`+`</a>`.

![detalle de la causa de falla](../../assets/images/cap02/chp02_img61.png)

Para desasociar una Acción Técnica de una Causa de Falla, se ubica en la Acción a desasociar y se presiona el icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura)

Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Causa de Falla.

## Efectos de Falla

En esta tabla se describen las formas en que una falla se manifiesta inmediatamente después de ocurrir. Se trata de las consecuencias de la falla, de los  efectos que esa falla ocasionó. Es un concepto que aunque ligado también a la falla es diametralmente opuesto a la causa. La causa, que normalmente es una sola, es la  fuente de la falla, su origen.  El efecto en cambio es la forma como se percibe, como se muestra la falla, una vez  ha ocurrido. Hay efectos sonoros, otros son de rompimiento, otros son de generación de calor, otros de suspensión de la energía o de inoperancia o malfuncionamiento del  equipo.  La mayoría de ellos esconde, oculta o enmascara la causa real de la falla.

![detalle del efecto de falla](../../assets/images/cap02/chp02_img62.png)

A continuación se describen los campos que componen el registro.

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: EF-01, el cual EF corresponde a las abreviaturas de Efecto de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra el Efecto de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Efecto de Falla las Acciones Técnicas que más comúnmente se ejecutan como consecuencia de ésta. Como se menciona en  las Causas de Falla, las Acciones Técnicas por Efecto pretenden  “Ubicar la Causa” y las Acciones Técnicas por Causa pretenden  “Solucionar la Causa”.

En la ventana anterior las Acciones Técnicas se seleccionan de la lista despegable y se  adicionan con el botón `<span class="iconify btn" data-icon="mdi-plus-circle">`Más.
.

Para desasociar una Acción Técnica de un Efecto de Falla, se ubica en la Acción a desasociar y se presiona el icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura)
Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar el Efecto de Falla.

## Contratos

En esta tabla es posible registrar los Contratos sobre servicios a cargo de  contratistas externos. No se trata de un módulo de administración de contratos sino de una facilidad simplista que hace funciones de control y seguimiento generales sobre ellos.

Al tiempo se usa para facilitar la selección y búsqueda de Órdenes de Trabajo e Historia de Mantenimiento, en función de un contratista y/o de un Contrato particulares.

Aunque el objetivo general es el registro de los contratos anuales,  también es posible registrar, en aras de centralización de la información, los contratos de corta vigencia que respaldan la ejecución de una o varias Órdenes de Trabajo por parte de un contratista.

Una función adicional es capaz de hacer seguimiento a la vigencia del Contrato cada vez que se genera una Orden de Trabajo, imprimiendo un mensaje cuando el Contrato que la respalda está a punto de vencerse o está vencido.

También, es posible realizar el seguimiento de la vigencia de los Contratos, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado de vigencia acuerdo a la cantidad de días o meses. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana
visor.

![contratos](../../assets/images/cap02/chp02_img63.png)

La renovación de contratos se realiza utilizando la numeración del  contrato  anterior, realizando  una copia y adicionando un consecutivo adicional que relacione esta renovación con su contrato original.

**Ejemplo:** Código 00008 (contrato original), Código 00008-1 (renovación del contrato)

![detalle de contrato](../../assets/images/cap02/chp02_img64.png)

En la gráfica anterior, Ventana Contratos, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Contratos se encuentra la información relevante al Contrato seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código CN:** En este campo que tiene una capacidad de quince caracteres se registra el número del Contrato. Es posible cambiar el código del contrato sin afectar la asociación existente entre el contrato modificado y otros módulos, y sin obtener mensajes de error por este intento de modificación.

**Descripción:** En este campo se escribe una corta descripción del Contrato que se está definiendo.

**Objeto:** En este campo se establece la finalidad del Contrato acordado por las partes.

**Objeto Resumen:** En este campo se escribe un resumen del Objeto del Contrato definido en el campo anterior.

**Fecha Inicio Vigencia:** En este campo se define la fecha en la que se da inicio a la vigencia del Contrato.

**Fecha Fin Vigencia:** En este campo se define la fecha en la que está prevista la terminación de la vigencia del Contrato.

**Valor Contrato Año:** En este campo se indica el valor total anual del Contrato. Se habla de Valor Contrato Año refiriéndose a aquellos Contratos que se realizan anualmente  como por ejemplo el mantenimiento anual de los aires acondicionados. En otros  casos se refiere al costo total del contrato durante su vigencia.

**Responsable:** Aquí se registra el nombre propio o la razón social de la persona natural o jurídica que es Responsable, como contratista, del manejo y ejecución del contrato.  Los contratistas que se registran en esta tabla deben haber sido creados previamente  en la tabla de Terceros, y su tipo debe ser Responsable Externo / Contratista (RX).

**Centro de Costo:** Para registrar el código correspondiente al Cliente externo al que se le presta servicio a través del Contrato. Este campo no tiene ninguna incidencia en otros casos.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Estado:** Se selecciona el estado del contrato, puede encontrarse Activo o Inactivo.

**Gasto Real total ejecutado:** Como su nombre lo indica, este campo muestra el valor total real gastado hasta la fecha de dicho contrato.

**Gasto Real ejecutado en el año actual:** Este campo muestra el valor total real gastado en el periodo del año en curso de dicho contrato.

**Presupuesto Pendiente por ejecutar:** Muestra cuanto valor le resta a dicho  contrato para terminar.

**Gasto Real ejecutado en OT pendientes:** En este campo se muestra el valor total del gasto real en OT cuyo estado se encuentra pendiente.

## Multimedia Contratos

Esta nueva funcionalidad permite asociar el Contrato de forma digital.

![detalle de contrato](../../assets/images/cap02/chp02_img65.png)

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al Contrato en cada una de sus carpetas asignadas. Esta opción permite asociar al Contrato, uno o varios documentos, con el  objetivo de facilitar el trabajo a  realizar,  o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** el Contrato en forma digital, especificaciones  detalladas, otros sí anteriores, entre otros; para  su  seguimiento y control, acceso directo  a la información.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al Contrato, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Contrato como el Código y la Descripición.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al Contrato. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al Contrato.  Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Contrato. Ejemplo: Videos en formato wmv, entre otros.

![detalle de contrato](../../assets/images/cap02/chp02_img66.png)

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono de `<a class="btn">`subir `</a>` , a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir,  se selecciona el archivo y se da clic en `<a class="btn">`abrir `</a>`.

![detalle de contrato](../../assets/images/cap02/chp02_img67.png)

Una vez se da clic en `<a class="btn">`abrir `</a>`., se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón `<a class="btn">`Subir archivo `</a>`.

![detalle de contrato](../../assets/images/cap02/chp02_img68.png)

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, al Contrato se da clic al `<span class="iconify btn" data-icon=delete>`nar (basura) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón `<a class="btn">`Aceptar `</a>`.

![detalle de contrato](../../assets/images/cap02/chp02_img69.png)

Si se desea descargar un archivo adjunto al Contrato, se debe dar clic en el icono de  `<span class="iconify btn" data-icon=cloud-download>`la nube con flecha hacia abajo , que se encuentra al lado derecho del archivo que se quiere descargar.

![detalle de contrato](../../assets/images/cap02/chp02_img70.png)

## Conceptos de Kárdex

En este módulo se describen detalladamente los tipos de transacciones o conceptos que constituyen el movimiento de los ítems de un Almacén. Tales transacciones pueden ser de Entrada, de Salida o de Ajuste de inventarios. Cada transacción de  movimiento o concepto de Kárdex tiene asociado: un código o número distintivo (de 01 a 49, o, de 001 a 499, para las entradas por ejemplo) y otras condiciones de su uso.

![detalle de contrato](../../assets/images/cap02/chp02_img71.png)

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Almacén:** Indica el Almacén al cual está asociado el Concepto de Kárdex. Este campo es seleccionado de una lista desplegable que contiene los Almacenes. Cada Almacén  tiene su propio conjunto independiente de conceptos de Kárdex.

**Número CP:** Se refiere al código que identifica cada concepto. Por ejemplo, un número entre el 01 y 49 se puede establecer para conceptos de entrada, y del 51 al 99 para conceptos de salida. Mientras que el 50 para conceptos de ajuste.

**Descripción de CP:** Es una breve descripción, en treinta (30) caracteres, que define la transacción correspondiente al número seleccionado. Es un buen complemento el especificar la descripción de cada concepto como de Entrada, de Salida o de Ajuste (E/ S/, A/), al inicio de cada descripción del concepto.

**Tipo:** Se selecciona si el Concepto es de entrada, salida, ajuste o traslado.

Adicional, se encuentran tres opciones de definición del Concepto, estas son:

- **¿Este Concepto de Kárdex requiere una OT válida?**
  Se enmarca cuando se trata de una transacción de movimiento que requiere para su ejecución, una OT válida.
- **¿Este Concepto de Kárdex es el predeterminado?**
  Es una opción para definir que este concepto se utiliza por defecto en una transacción.
- **¿Este Concepto de Kárdex Corresponde a ítems Suministrados por el Contratista?**
  Es una opción para definir si el concepto corresponde a ítem que son suministrados por el contratista.

### Subgrupo Conceptos de Kárdex

Se usa para seleccionar grupos de Conceptos de Kárdex que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<a class="btn">`icono de filtro `</a>` icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Conceptos de Kárdex.

![detalle de contrato](../../assets/images/cap02/chp02_img72.png)

- **AM**- mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Conceptos de Kárdex. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Conceptos de Kárdex.

El programa permite entonces hacer selección de un grupo de Conceptos de Kárdex de acuerdo con los criterios seleccionados en la siguiente ventana.

![ventana ie ](../../assets/images/cap02/chp02_img73.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes.

**Almacén:** Permite filtrar aquellos Conceptos de Kárdex que fueron asociados al almacén seleccionado. Lista los Almacenes creados en la tabla de Almacenes.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones.  Esto significa que inmediatamente después de haber
realizado una selección es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección se da un clic al botón `<a class="btn">`Mas (+)`</a>` , en  lugar de darlo al botón `<a class="btn">`Aceptar `</a>`.

## Operaciones

Permite registrar las Operaciones, requeridas en el proceso de elaboración de una Referencia. Estas Operaciones se van a referenciar como Operación Actual (Óp.  Actual) en el módulo de Paros / Averías

![detalle de operacion](../../assets/images/cap02/chp02_img74.png)

En la gráfica anterior, Ventana Operaciones, se aprecian sus componentes y sus respectivos contenidos. A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** Es un campo de treinta caracteres que define la operación.

**Estado:** Una Operación puede encontrarse en uno de dos estados: Activa o Inactiva. El estado definirá si puede o no ser asociada con una Referencia.

## Referencias

Permite registrar, cuando sea aplicable, las Referencias de Producto, de la compañía usuaria. Tales Referencias de Producto se usan para complementar la información de un paro o una avería en el módulo de Paros / Averías. El objetivo es poder identificar detalladamente las circunstancias que rodearon el paro o la avería qué Referencia, y en qué operación particular del proceso, se estaba elaborando.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Código:** Es un alfanumérico único de 10 caracteres, que identifica la Referencia de producto.

**Nombre:** Contiene una descripción de la Referencia de Producto, cuenta con un espacio de 80 caracteres.

**Estado:** Una Referencia puede encontrarse en uno de dos estados: Activa o Inactiva.

**Adicionar OP:** Es posible adicionar una o varias Operaciones a una Referencia.

![detalle de ref](../../assets/images/cap02/chp02_img75.png)

En la ventana anterior se seleccionan Operaciones de la lista despegable y se adicionan con el botón del signo Más a la lista de Operaciones asociadas a una Referencia.

Para desasociar una Operación, se ubica el cursor en la Operación a desasociar y se presiona el icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura).

Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Referencia.

![tipos de rgimen](../../assets/images/cap02/chp02_img76.png)

Es posible, en la Tabla de Tipos de Régimen la parametrización de más tipos de régimen para la tabla de Terceros en el módulo de Infraestructura; con el objeto de darle individualidad a un responsable interno, empleado, responsable externo o una empresa para adecuar los propios o para adicionar nuevos. Cada tipo de régimen tiene una longitud de 15 caracteres alfanuméricos.

## Estados

Esta tabla de Infraestructura contiene  una lista de los ** “Estados”** predefinidos en el sistema, que caracterizan los Activos u Objetos de Mantenimiento, las Órdenes de Trabajo, las Solicitudes de Servicio y Paros ( **FDA**).

![tipos de rgimen](../../assets/images/cap02/chp02_img77.png)

Es posible, en la Tabla de Estados la parametrización de los estados de los módulos de Órdenes de Trabajo, Solicitudes de Servicio, Activos y Paros ( **FDA**); con el objeto de darle individualidad a una empresa para adecuar los propios o para adicionar nuevos, que reflejen situaciones corporativas reales y necesarias. Cada estado tiene una longitud de 40 caracteres alfanuméricos, y puede ser de uno de dos tipos:

**Estado de Activo:** Descripción que se usa al definir un Activo o Equipo para personalizar su estado respecto a operatividad, actividad/inactividad y propiedad. Tener activa la opción de Indicativo-(Uso) indica que su estado se encuentra activo.

![tipos de rgimen](../../assets/images/cap02/chp02_img80.png)

Estado de Solicitud de Servicio: Descripción que se usa para personalizar los estados en los que puede encontrarse una Solicitud de  Servicio. Se utiliza el campo de Indicativo-(Abreviatura) para especificar la abreviatura del Estado. Es posible crear nuevos estados de SS, ellos se consideran variaciones  del  estado En Análisis (AN). Existen siete Estados de SS que no pueden ser nados ni modificados dado que se utilizan por defecto en la funcionalidad del sistema, estos son:

- **AN-** En Análisis
- **AS-** Asignada
- **NE-** Cerrada No Ejecutada
- **CE-** Cerrada Ejecutada
- **CO-** Cerrada con OT
- **EJ-** En Ejecución
- **CP-** Cerrada Parcial (AMovil)

![tipos de rgimen](../../assets/images/cap02/chp02_img81.png)

# Exportar

Esta opción permite la exportación de los registros de la tabla seleccionada, que aparecen en el visor, totales o provenientes de un subgrupo, a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación.

![tipos de rgimen](../../assets/images/cap02/chp02_img82.png)

Al darle clic en el botón  `<a class="btn">` “Exportar”`</a>`, se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los registros contenidos en el visor a un archivo plano, para luego ser analizados.

Adicionalmente, es posible exportar todos los campos de la ventana Detalle de los registros, para esto se da clic en el cuadro llamado `<a class="btn">`Exportar Todos Los Campos `</a>`. También, es posible exportar uno o varios campos de la ventana Detalle de los registros, para esto se da clic en cada uno de los cuadros que acompañan los campos.

# Servicios

## Reportes

Este comando permite visualizar los reportes relacionados con el módulo o la tabla donde se encuentre. A esta ventana se llega dando clic al `<a class="btn">`icono de la impresora `</a>`,se encuentra ubicado en la parte superior derecha de la ventana Visor del módulo seleccionado. Existen reportes básicos disponibles de tipo Resumen y Detalle:
![tipos de rgimen](../../assets/images/cap02/chp02_img83.png)

Los anteriores reportes pueden ser impresos, para una o varias Órdenes de Trabajo Históricas preseleccionadas:

**Lista  de  Selección:** Es la tabla donde aparecen los campos: Código, Descripción y Subtítulo. Bajo el título Código se listan los códigos de los reportes existentes. Bajo el título Descripción se listan los nombres de los reportes existentes. Bajo el título de Subtítulo se lista en algunos reportes, una descripción adicional del reporte.

**Todos los Registros:** Con esta opción se permite la impresión de todas las Órdenes de Trabajo Históricas existentes en la base de datos de la compañía activa, sin  importar si se ha realizado un subgrupo.

**Registros del Visor:** Esta opción permite hacer una impresión de todas aquellas OTs Históricas que están seleccionados en el visor.

**Registro Seleccionado:** Esta opción permite hacer una impresión de la OT Histórica señalada, o sea la que está resaltada con la línea verde en el visor.

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Después de seleccionar el tipo de registro, se procede a seleccionar el Reporte que se  desea  imprimir, para esto se  debe pulsar el botón `<a class="btn">`Imprimir `</a>`, de esta manera se abre una ventana visor para formatos PDF, que muestra el Reporte seleccionado. Desde esta ventana es posible guardar el reporte y exportarlo a Excel.

Al dar clic al botón `<a class="btn">`Exportar `</a>` permite exportar el Reporte seleccionado sin necesidad de imprimirlo. Mientras que, al dar clic al botón `<a class="btn">`Cerrar `</a>` se cierra la ventana de la generación de reportes.
