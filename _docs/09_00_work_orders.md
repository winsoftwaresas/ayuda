---
layout: page
title: ◼ Work orders
order: '09_00'
media: "../../assets/images/docs/"
---
# Órdenes de Trabajo

- ¿Cómo se genera una Orden de Trabajo?.
- ¿Qué tipos  de Órdenes de Trabajo se  pueden crear?.
- ¿Cómo se controlan y administran?.
- ¿Cómo se cierran?.
  Son los tópicos que se discuten en este capítulo.

#Conceptos Básicos sobre Órdenes de Trabajo

El módulo de Órdenes de Trabajo (**OT**) constituye el centro de actividad de la Gerencia de Mantenimiento. Es en este módulo es donde están disponibles para consulta y toma  de decisiones todas las Órdenes de Trabajo activas, Pendientes de Ejecución o ya Ejecutadas y listas para ser archivadas en la Historia de Mantenimiento. Se   pueden  consultar   y agrupar  por  múltiples  conceptos  como:  Fecha  de  Generación,  Responsable,  Ubicación Física del Activo, Centro  de Costo, Tipo de Trabajo, Tipo  de Mantenimiento, Tipo de Actividad, Centro de Responsabilidad, etc.

Cuando se elige la opción Órdenes de Trabajo, es posible:

- Crear Órdenes de Trabajo Manuales (Para todos los tipos de Mantenimiento, incluyendo una opción para Preventivo Manual).
- Buscar, seleccionar, revisar en general y detalladamente las Órdenes de Trabajo activas.
- Actualizar las Órdenes de Trabajo activas, en lo referente a tiempos, costos y comentarios sobre su ejecución.
- Liquidar y cerrar cada **OT** para ser enviada al archivo Histórico de Mantenimiento. Imprimir **OT**s en cualquiera de las etapas de su ejecución, incluso después de haber sido cerradas, antes de ser enviadas a Historia de Mantenimiento.

## Tipo de Trabajo vs Tipo de Mantenimiento vs Tipo de Actividad

Toda Orden de Trabajo debe tener un Tipo de Trabajo, un Tipo de Mantenimiento y un
Tipo de Actividad.

### Tipo de Trabajo

**AM** Predefine  cuatro  tipos  de  trabajo:

- Mecánico  **(MEC)**.
- Eléctrico   **(ELE)**.
- Instrumentación/Electrónica **(I/E)**
- OTro **(OTR)**.

Pueden  personalizarse,  en la tabla **"Tipos de Trabajo"** del módulo de Infraestructura. Cada **OT** acepta la definición de uno o varios de estos Tipos de Trabajo, dependiendo de la naturaleza de la labor que se realice.

### Tipo de Mantenimiento

**AM** predefine ocho Tipos   de   Mantenimiento:   Preventivo, Preventivo Manual, Correctivo, Predictivo, Inspección, Metrología, Lubricación y Otro. Como su nombre lo indica, el Tipo de Mantenimiento caracteriza al Mantenimiento que se realiza. Cada   Orden   de Trabajo permite la definición de uno y sólo un Tipo de Mantenimiento.

### Tipo de Actividad

Una vez se define el Tipo de Trabajo y el Tipo de Mantenimiento, se procede a catalogar la labor   por   su   Tipo   de   Actividad. Los Tipos de Actividad se administran desde Infraestructura, y son completamente personalizables por empresa. El Tipo de Actividad se utiliza para agrupar las labores de Mantenimiento por  actividades genérica. Es a través de los Tipos de Actividad que se definen muchas actividades realizables  por  el departamento  de  Mantenimiento,  pero  que  en  realidad  no  constituyen  una  labor  de Mantenimiento. **AM** predefine  varios  Tipos  de   Actividad. Para   mayor  información, consultar el ítem correspondiente en Infraestructura.

Así, toda Orden de Trabajo se discrimina en cuanto a su labor, con tres  agrupadores distintos: El Tipo de Trabajo, El Tipo de Mantenimiento y el Tipo de  Actividad. Por ejemplo: Puede existir una Orden de Trabajo cuyos Tipos de Trabajo son: Mecánico  y Eléctrico (es decir, realiza labores mecánicas y eléctricas), su Tipo de  Mantenimiento es Correctivo (debido a una falla del equipo) y su Tipo de Actividad  es **IL-Iluminación**(el daño que se presenta tiene que ver con iluminación).

Es posible también que en ocasiones el Tipo de Actividad sea el identificador determinante de la   labor, en una Orden de Trabajo. En  este  caso: se  define el  Tipo  de  Trabajo específico que corresponda;   el Tipo de Mantenimiento se define como **“OTRO”**, después de lo cual se selecciona el Tipo de Actividad más adecuado.

Una vez se definan para cada **OT** estos datos, es posible efectuar consultas y filtros  por cada uno de ellos.

## Órdenes de Trabajo Manuales vs Órdenes de Trabajo Programadas

El módulo de Órdenes de Trabajo Administra tanto las  Órdenes generadas en  forma
Manual como las automáticas, generadas desde Programas de Mantenimiento.

Las Órdenes de Trabajo manuales se generan a medida que se requiere: en el momento de presentarse una falla sobre un Equipo o cuando se debe realizar un trabajo que no es rutinario ni programado, por decisión técnica, operativa o administrativa.   Una **OT** manual puede ser Correctiva, Preventiva Manual, Predictiva, de Calibración, de Lubricación, u **OT**ro Tipo de Mantenimiento.

Las 	**OT** 	Programadas 	se 	generan 	periódicamente, 	mediante		el 	comando ** “ANALIZAR/GENERAR”**  en  el  submenú  de  Ordenes  de  Trabajo.  El  proceso   de Generación revisa y verifica los criterios definidos en cada Programa de  Mantenimiento, proponiendo generar, en forma automática, la Orden de Trabajo correspondiente, cuando tales criterios son válidos, para Mantenimientos Preventivo, Predictivo, Calibración, Lubricación y Rutas de Inspección, u **OT**ro Tipo de Mantenimiento

## Presupuesto vs Gasto Real

La ejecución de toda Orden de Trabajo puede generar costos, asociados a los  recursos utilizados: Mano de Obra, Materiales y Repuestos, u otros Conceptos o Gastos indirectos.

**AM**  permite Presupuestar estos consumos, de forma anticipada, para establecer cuales recursos y en qué cantidad se necesitan, al igual que su costo aproximado. Para  las Órdenes  de  Trabajo  Programadas,  el  Presupuesto fue  registrado en  el   Programa de Mantenimiento, y en el momento en que se genera la Orden de Trabajo, este Presupuesto se transfiere a ella.   Para las Órdenes de Trabajo Manuales, también es posible definir un Presupuesto, pero éste se crea directamente en la **OT**.

Si una Orden de Trabajo maneja Presupuesto (ya sea una **OT** Programada o Manual), éste debe aprobarse antes de poder registrar el consumo o Gasto Real.  Solo una vez aprobado el Presupuesto, puede iniciarse el registro del Gasto Real, con las cantidades y cifras  de costo reales.   De esta manera es posible contrastar el Presupuesto contra el Gasto Real, en cada **OT**.

## Tiempo de Duración (ttr) vs Tiempo Improductivo

Estos   dos   conceptos, en   una Orden  de  Trabajo, son  básicos para la  generación de estadísticas de tiempos y variados Índices de Gestión.

- **AM**- asume el concepto de Tiempo de Duración o ttr (Time to Repair), en una Orden de Trabajo,   como   la   cantidad   de   Tiempo   Real  en   la   que   se   realiza   una   labor   de Mantenimiento,  una  vez  que  todas  las  condiciones  están  dadas:  se  han  superado  los tiempos  de  inspección  y  administrativos;  la  máquina  lista  y  en   condiciones  de  ser mantenida ya fue entregada al Depto. de Mantenimiento y éste a su vez, ya cuenta con todos los recursos necesarios para la ejecución:  herramientas, instrumentos, materiales, repuestos y por supuesto, personal.
- **AM**- sugiere como Tiempo de Duración, la diferencia entre la Fecha y Hora de Fin  de Trabajos y la Fecha y Hora de Inicio de Trabajos. Cabe an**OT**ar, que no siempre el Tiempo de Duración es la diferencia entre estas fechas/horas, pues pueden existir  eventos que dejan temporalmente a la **OT** en Estado de ** “Pendiente”**. **AM** permite corregir el tiempo de Duración en una **OT**, para que refleje el tiempo real de la ejecución.

Por ejemplo, si una **OT** tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30, y como Fecha de Fin de Trabajos XXXX/12/01 16:00, **AM** sugiere como Tiempo de Duración, 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar Otra labor, se debe corregir la duración: 5 horas y 30 minutos.

Para  **AM**,  el  Tiempo Improductivo de   un  Equipo, en  una   Orden de Trabajo, es   la cantidad  Real  de   tiempo  en   que  el   Equipo  estuvo  Improductivo  por   Razones   de Mantenimiento, es  decir,  tiempo en el cual el Equipo debió estar  operando y no pudo hacerlo debido a que durante dicho tiempo se estaba realizando la labor.

**AM** sugiere como Tiempo Improductivo: la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora Info de Paro (Para Órdenes de Trabajo Correctivas), o como, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos (Para Ordenes de Trabajo no Correctivas). Sin embargo, este valor puede corregirse para reflejar la cantidad Real exacta de Tiempo Improductivo que tuvo el Equipo en cuestión.

Por ejemplo, si una **OT** correctiva tiene como fecha de Info de Paro XXXX/12/01 08:00, y como  fecha  de   Fin   de   Trabajos  XXXX/12/02  12:30,  - **AM**- sugiere   como  Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese  lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora turno de producción, se debe definir el tiempo improductivo como solamente de 20 horas y 30 minutos.

## Numeración de las Órdenes de Trabajo

**AM** diferencia una Orden de Trabajo de Otra, por su número de **OT**, o consecutivo. Este número está conf ormado por dos valores: Primero, el Año en la cual fue creada la **OT**, y posteriormente, seguido de un guion y el Consecutivo de dicha **OT** en ese año.  Así, si una **OT** tiene como número ** “200X-1503”**, quiere decir que esa **OT** es la número 1503 del año 200X.

- **AM**- administra automáticamente el número de cada Orden de Trabajo, por lo tanto no es posible modificarlo manualmente.

# Análisis y Generación de Órdenes de Trabajo Programadas

Análisis/Generación automática de **OT**s desde PMs, es una facilidad del **AM**, que  se encuentra disponible en el módulo de **OT**s  y que debería ser utilizada sobre  una  base periódica. El proceso consiste en que  **AM**- revisa cada programa, definido para cada Activo/Equipo y analiza si la condición programada en cada uno, se  va a cumplir, para el equipo respectivo, durante el próximo período que se va a estudiar o proyectar.

Se trata de un proceso que es ejecutado periódicamente por  la persona que hace  las veces de Programador o Planeador del **AM** en la  Organización. Una buena práctica consiste en generar las **OT** s programadas, de todo un mes, el día 15 del mes anterior.

Es posible sin embargo, por razones particulares, ejecutar este proceso a diario o en Otra periodicidad, o cuando sea requerido. El sistema asegura que un periodo ya programado, no se reprograma. Por eso, si se presenta la necesidad de reprogramar un período, se debe a que se han creado o modificado algunos PMs, para que generen **OT**s adicionales a las ya generadas.

**AM** suministra una ayuda que indica cual fue el último período para el que se realizó una Generación Automática, ella se encuentra en la ventana de ** “ANALIZAR/GENERAR”** en la parte superior derecha de la misma.

![Ventana Principal de Solicitudes de Servicio](manualAM/0.images/cap11/chp011_img01.png)

El periodo objeto de la Programación se define mediante las Fechas Desde y Hasta  del Rango de fechas a   analizar. Este proceso de generación se   puede   ejecutar  con   la anticipación que sea requerida.

Por ejemplo, es posible generar las **OT**s para una semana, con una semana o con 10 días de anticipación; o es posible generar las **OT**s para todo un mes, con un mes o con 15 días de anticipación; o es posible generar las **OT**s para un mes con tres m eses de anticipación, etc. Otras organizaciones, por su cultura técnica o por las duraciones de proceso de sus l**OT**es o de sus ** “batches”** bien podrían generar las  **OT**s de toda  una semana, con una semana ó con diez días de anticipación.

Se recomienda que se programe al menos una semana, con una semana de anticipación. La anticipación que se recomienda tiene tres objetivos:

Lograr un acuerdo con el programa de Producción o con el Responsable del Equipo para poder ejecutar la intervención planeada sin interferir con actividades productivas. Asegurar la disponibilidad, a tiempo, de Materiales, Repuestos u otros Conceptos de Costo requeridos en la ejecución de cada **OT**. Programar el recurso humano necesario para ejecutarlas.

# El ciclo de vida de una Orden de Trabajo

El centro de actividad gerencial en **AM** es el ambiente de las Órdenes de Trabajo. Ya sea recién creada, o ejecutada hace varios años, **AM** dispone de  herramientas que permiten la administración efectiva de cada una de ellas.

Una **OT** puede haber sido creada Automática o Manualmente. Las Órdenes Automáticas, son generadas desde los PM (Programas de Mantenimiento), sobre una  base periódica. Las Órdenes de Trabajo Manuales son creadas por los usuarios de mantenimiento, cuando las condiciones ocasionadas por el diario transcurrir de la  empresa lo exijan.  Las  **OT**s manuales son en su mayoría Correctivas, sin embargo pueden ser también de otros tipos, que no corresponden a actividades propias de Mantenimiento, como por ejemplo: Cambios de  Condiciones,  Trabajos  sobre  repuestos,  Servicios  auxiliares  a  Producción  o  a  la Gerencia,  Instalaciones o Montajes, etc. Todas estas actividades deben ser  registradas como **OT**s en el sistema, pues son altamente consumidoras del recurso de Mantenimiento.

La situación ideal, consiste en generar una **OT** antes de su ejecución. Ella se crea para que sirva de soporte a la realización de la misma **(creación a priori)**.

Es posible también, sobre todo en el caso de Mantenimientos Correctivos, crear la  **OT** cuando la labor ya se ha ya ejecutado, habiendo dado prioridad a la ejecución  que a la generación de la misma (creación a posteriori).

Al  crear  una  **OT**  manual,  se  procede  a  digitar la información  básica  de  la  misma (Descripción,  Equipo,  Tipo  de  Trabajo,  Tipo  de   Mantenimiento,  Tipo  de   Actividad, Responsable, Presupuesto, etc.). Para **OT**s creadas a priori, se digita la   información disponible sobre la labor a realizar, con el fin de darle un compendio detallado de ejecución al operario que la realizará.

Para las  Órdenes Programadas o Automáticas, el  caso es  distinto, pues  la  información básica de la **OT** ya se encuentra creada, en el PM (Programa de Mantenimiento), que le dio origen. Una **OT** generada automáticamente debe ser complementada, con información sobre el responsable y los ejecutores.

Una vez efectuado este paso, se procede a Imprimir la Orden de Trabajo, para entregarla al responsable que la ejecuta. La persona (o personas) encargadas de la  labor reciben esta impresión y se disponen a realizarla.  Durante este tiempo, se hace seguimiento a la **OT**,  alimentándola con  información  de  la  ejecución  (Gasto  Real,  Comentarios,  fechas, tiempos, etc.).

Por distintos m**OT**ivos, una Orden de Trabajo puede quedar en estado Pendiente. Por ejemplo,  no  ha y  recursos  disponibles,  ya  sea  de  Mano  de  Obra,  de   Materiales   o Repuestos, u otros Conceptos. **AM** contempla este caso, posibilitando asignar a la **OT** el Estado de Pendiente. También se puede establecer la causa por la cual la **OT** se ha definido en estado Pendiente.

Cuando una Orden no pueda ser Ejecutada, o se decida que no se va a ejecutar, se debe cerrar con un Estado de ** “Cancelada”**, el cual se complementa con una Causa de Cierre, indicando la razón de por qué no se Ejecutó.

Cuando finaliza la ejecución de la **OT** se deben consignar en **AM** todos los pormenores de la ejecución, es decir, se procede a su Liquidación (Cargar todos  los  conceptos de costo ocasionados por su ejecución) y Cierre. Una vez finaliza la **OT**, se liquida, se cierra, y ya está lista para ser enviada a Historia.

Como  puede observarse, durante el ciclo de vida de la **OT**, ésta  pasa por  distintos Estados: Al crearse, está ** “En Ejecución”**, también mientras se ejecuta; en algún momento puede quedar  en  Estado  ** “Pendiente”**; al finalizar,  dependiendo de  si  se  ejecutó o no, puede quedar en un Estado de ** “Cerrada”** o ** “Cancelada”**, respectivamente.

Al ser enviadas a Historia, las Órdenes de Trabajo allí conforman un centro de información y  consulta,  para  la  generación de  Índices,  del  Balance  de  Gestión,  de  Estadísticas, Paretos, y una gran variedad de reportes. De esta manera, - **AM**- brinda las bases para realizar una Gestión Integral del Mantenimiento de la empresa.

# Ventana Principal de Órdenes de Trabajo

![Ventana Principal de Solicitudes de Servicio](manualAM/0.images/cap11/chp011_img02.png)

Se accede desde el comando Órdenes de Trabajo en la barra de menú principal   del

- **AM**-. A través de esta  ventana se  permite crear  Órdenes de Trabajo manuales  y Administrar la totalidad de las Órdenes activas, Pendientes de Ejecución, o listas para ser enviadas a Historia. Igualmente, desde esta ventana se Administran las  Órdenes de Trabajo Programadas (las que se generan desde Programas de Mantenimiento).

## Ventana Visor

![Ventana Visor](manualAM/0.images/cap11/chp11_img02.png)

Se accede directamente desde la ventana principal de Órdenes de Trabajo.

Desde esta ventana es posible observar la lista de las Órdenes de Trabajo existentes o un subconjunto de ellas (efectuado a través de un subgrupo). Se puede hacer clic en alguna de ellas, para visualizar el registro completo de la Orden de Trabajo, en la  parte inferior (Ventana Detalle).

Los  nombres  que encabezan las  columnas  a  manera  de  títulos en azul, permiten ordenar  de manera ascendente la información por cada ítem seleccionado, al dar clic en el respectivo encabezado.

Es de resaltar, que en esta versión se añade una nueva columna a la ventana Visor llamada Vencimiento, la cual lista los días vencidos de cada Orden de Trabajo.

En la ventana Visor por la columna Estado, se define una semaforización de las  Órdenes de Trabajo. La finalidad de esta columna es mostrar de manera gráfica el  estado de la Orden de Trabajo.

La definición de colores está definida, según la siguiente convención:

**Rojo:** Con fecha de generación anterior a más de 7 días antes de la fecha actual.

**Amarillo:** Con fecha de generación anterior en un rango comprendido entre 7 días antes de la fecha actual y un día anterior a la fecha actual.

**Verde:** Con fecha de generación entre la fecha actual y 7 días después.

**Naranja:** Con fecha de generación comprendidas después de 7 días de la fecha actual.

**Morado:** Ordenes que han sido Canceladas.

**Azul:** Ordenes que han sido Cerradas, Cerradas Retroalimentadas o Cerradas Parciales.

## Ventana Detalle

![Ventana Detalle](manualAM/0.images/cap11/chp11_img03.png)

En   la   gráfica  anterior,   Ventana  Detalle  de   Ordenes   de  Trabajo,  se  aprecian   sus componentes y sus respectivos contenidos. En  esta ventana Detalle se  encuentra la información relevante a la **OT** seleccionada en el Visor. A través de ella se Administran los datos genéricos de la Orden de Trabajo.  Es desde esta ventana que se crean Órdenes de Trabajo Manuales.

A continuación se describen los campos que componen esta ventana Detalle de Ordenes de Trabajo; además cuando se quiera ingresar una nueva Orden de Trabajo, se deberán diligenciar los siguientes campos.

**OT**:** Aparece el número de **OT** asignado por **AM** a la Orden de Trabajo. Si se está en el proceso de creación de una **OT** Manual, este campo solamente muestra el Año. Una vez se crea (Insertar) la **OT**, **AM** asigna un consecutivo a dicha Orden.

**F/H  Creación:** Es  la fecha en la cual se crea la  Orden de Trabajo.  En  el caso  de Órdenes Programadas, esta fecha es asignada automáticamente por el sistema y no es modificable, según el Programa de Mantenimiento que la genera.        Para las Órdenes de Trabajo Manuales, **AM** sugiere   la   fecha   actual   del   sistema   (aunque   puede   ser modificada).

**Descripción:** Es un texto corto por medio del cual se indica la naturaleza de la  labor  a realizar.  Debe ser conciso y no dar lugar a ambigüedades, este campo tiene una longitud de 80 caracteres.  Se recomienda definir la descripción bajo la siguiente norma: iniciar con un verbo en infinitivo: revisar, corregir, inspeccionar, conectar, etc., continuar con el Objeto de mantenimiento o Activo / Equipo y finalizar con un  complemento explicatorio. Ejemplo: Revisar la transmisión delantera del sistema.  Cambiar a  los  rodillos  la  cobertura  de caucho.

**Prioridad:** Es   un  número de  1   a  7  que  indica  la  prioridad de realización de la   **OT**. Normalmente 1 significa un trabajo de gran urgencia, mientras que 7 es una labor de baja prioridad.

**F/H  Programada:**  En  este  campo  se  ingresa  la  fecha  programada  para  realizar  la ejecución de la Orden de Trabajo.

**Referencia:** En este campo se puede ingresar el número de un documento, que  sirve como referencia o relación a la **OT**; ejemplo: número de una factura, número de una Orden de Compra asociada, o un documento interno de despacho de almacén, etc.

**Estado:** Este campo está bloqueado y muestra el nombre del Estado de la **OT**.

**Código del Activo:** Aquí se establece el Objeto de Mantenimiento, ya sea digitando directamente el Código, o seleccionándolo con el icono de filtro, al que se le realiza la labor. Una vez se digita o se selecciona, aparece al lado derecho la Descripción del Equipo.

**Descripción:** En este campo se visualiza la información de la descripción del Activo seleccionado.

**Activo Fijo:** En este campo se visualiza la inf ormación del Número de Activo Fijo del
Equipo que se ha ya establecido en la ficha técnica de este m ismo.

**Referencia Externa (Proveedor):** En este campo se visualiza la inf ormación de la Referencia del Equipo que se ha ya establecido en la ficha técnica de este mismo.

**Serial:**  En  este campo se  visualiza  la  inf ormación  del  Serial  del  Equipo que se  ha ya establecido en la ficha técnica de este m ismo.

**Alias:**  En  este  campo se  visualiza  la  inf ormación del  Alias  del  Equipo que  se  haya establecido en la ficha técnica de este m ismo.

**Solicitante:** En este campo se define el nombre del Solicitante de la **OT**. Cuando la **OT** es generada desde una Solicitud de Servicio, este campo contiene el solicitante ingresado en la Solicitud.

**Incluido en TE (RI):** Al seleccionar esta opción, en el campo ** “Solicitante”** solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura.

**Correo Electrónico:** En este campo se define el correo electrónico del Solicitante de la **OT**, cuando el solicitante es digitado manualmente. Si el solicitante se selecciona con la opción ** “Incluido en Terceros”** y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. La funcionalidad del envío de correos electrónicos se parametriza Administración, Valores por Defecto, la etiqueta GENERAL, la opción ** “Enviar e-mail al solicitante”**.

**Centro de Costo:** Es el Centro de Costo asignado a la Orden de Trabajo, que corresponde a uno de los Centros de Costo predefinidos en la tabla respectiva, y que es  ** “Responsable”** del pago de los consumos de Gasto Real que dicha **OT** genere. Inicialmente se sugiere el Centro de Costo que tiene asociado el Equipo Objeto de Mantenimiento, aun así, puede cambiarse.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubi. Física:** Es el lugar físico en el que se realiza la labor. Inicialmente se  sugiere  la Ubicación Física asociada al Equipo u Objeto de Mantenimiento, pero puede cambiarse a cualquier **OT**ro valor predefinido en la tabla de Ubicaciones Físicas, en la tabla respectiva.

**Centro Responsable:** Especifica el  Centro  Responsable o  grupo  de  mantenimiento,  encargado  de realizar la labor.

**Responsable ejecutor:** En este campo se elige a la persona, natural o jurídica, Responsable por la labor a ejecutar.

**Filtrar por CR:** Al seleccionar esta opción, en el campo ** “Responsable”** solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción ** “C. Responsable”**. En  **OT**ro  caso,  en  el  campo  ** “Responsable”**  se  despliegan  todos   los  ** “Responsables”** existentes en la tabla respectiva.

**Contrato:**   En  este  campo  se  selecciona  el  contrato  que  pertenece  al   Contratista responsable de ejecutar la Orden de Trabajo.

**Responsable por la institución:** En este campo se elige a la persona de la institución, que acompañará y/o recibirá la labor prestada por el Responsable ejecutor, cuando este sea un Contratista o Servicio Externo.

**T. Trabajo:** Indica los Tipos de Trabajo que se realizan en la **OT**. Es posible definir más de un Tipo de Trabajo para una Orden.

**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en la Orden de  Trabajo. Toda **OT** debe poseer uno. Si en la **OT** se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige **otro”** y a continuación, en el tipo de ** “Actividad”** se especifica detalladamente, el tipo de labor.

**T. Actividad:** Aquí se establece el Tipo de Actividad a realizar en la **OT**.  La Actividad de Mantenimiento para una **OT** Manual, se elige desde la tabla ** “Tipos de Actividad”** en  el módulo de ** “Infraestructura”**. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de ** “Otro”**, en el tipo de Actividad se debe seleccionar el valor ** “MN: Mantto”**, lo que indica que se trata de una actividad que constituye mantenimiento. Si en el  campo anterior se ha seleccionado el valor ** “Otro”**, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

Es posible definir una Actividad, por defecto, en ** “Administración”**, ** “Valores por  defecto”**. Este valor se usa como estándar, al definir una **OT** m anual.

**F/H  de  Paro:** Para las  Órdenes de Trabajo Correctivas, en este campo se  registra  la Fecha y hora del daño, falla o avería. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora se maneja en formato Militar (de 24 horas). Cabe anotar, que la fecha y hora consignadas  corresponden  al momento  en  que se informó del daño o falla a  Mantenimiento, así que es posible que el daño haya ocurrido en una fecha/hora anterior. Sin embargo se  debe procurar, administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del paro.

**T. Estimado:** Es un campo netamente informativo, e indica de manera aproximada cuánto Tiempo demora la labor. Se establece el número y a continuación el período  de tiempo que representa (Días, Horas o Minutos).

**Tiempo Improductivo:** En este campo indica la persona o personas encargadas (s) de realizar la labor, si debe pararse el Equipo para proceder a la realización de la misma.  Cuando se dice que el Equipo genera Tiempo Improductivo significa que no está en operación, y por lo tanto,  posiblemente improductivo.  Este campo se tiene en cuenta al momento de cerrar la **OT**: si el indicativo de Tiempo Improductivo está habilitado, el **AM** calcula y carga el Tiempo Improductivo al equipo. En caso contrario no lo hace.

**Criterio:** Es un campo informativo que despliega el criterio utilizado por **AM** para  haber generado la **OT**. (Solamente para Órdenes de Trabajo Programadas).

**Tarea:** Este campo informativo  permite establecer, a través del ordinal de la tarea  que muestra, cual fue el PM que generó la **OT** actual. Es válido solamente en el caso  de Órdenes Programadas.

**Control  Presupuestal:** Esta  Opción permite  definir  si  la  Orden  de  Trabajo maneja Presupuesto. Para las Órdenes de Trabajo Programadas, esta opción  siempre está  seleccionada, pero  aparece protegida,   ya  que  toda  **OT**   Programada  conlleva el Presupuesto Aprobado.

Para  las  Órdenes  de  Trabajo  Manuales,  esta  opción se  establece en  el  m omento  de creación de la misma.  Esta elección se debe m arcar antes de darle clic al botón `<a class="btn">`Agregar `</a>`, de  Otra forma, **AM** asume que la **OT** no va a requerir Control Presupuestal y la posibilidad de hacer la marcación se inactiva en el acto.

Cuando una Orden de Trabajo Manual exige control presupuestal, y el presupuesto no ha sido aprobado, no es posible registrar ni modificar el Gasto Real en ella.

**Comentarios:** Esta opción se usa para ingresar los nuevos comentarios referentes a toda la ejecución de la **OT**. Al dar clic al botón `<a class="btn">`Agregar Comentario `</a>` aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario.

Este espacio de comentarios sirve para dos efectos:

Cuando  se  genera  la   **OT**,  como  comentarios  a  priori,  para  especificar  referencias    importantes o ayudas previstas y necesarias en la ejecución posterior de la **OT**: planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o  de especificaciones detalladas; normas de seguridad o enfoques de acción.  Sin embargo, en la gran mayoría de  los casos se utiliza la pestaña Multimedia para registrar estos datos.
Cuando ha concluido la ejecución de la **OT**, es posible utilizarlo para registrar hechos   interesantes acerca de la misma ejecución, como el estado del equipo antes de la intervención, detalles de la intervención, estado del mismo equipo  después de ella, recomendaciones a  los   usuarios  del  equipo,  recomendaciones  a  las  personas de mantenimiento y otros conceptos interesantes a juicio de los ejecutantes.

**Contrato:** Para el caso de Órdenes de Trabajo programadas, que se hayan  generado desde un PM asociado a un Contrato que esté vencido o a punto de vencerse, **AM** informa al  respecto,  en el campo ** “Comentarios”** junto con la Fecha de vencimiento de aquel.

# Ventana submenú de Órdenes de trabajo

## Subgrupo

Se usa para seleccionar un grupo de Órdenes de Trabajo que cumplen con un conjunto de criterios o filtros definibles aquí, con el objeto de realizar estudio posterior sobre él.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas las Órdenes de Trabajo.  Lo que significa que de no escoger un criterio, se obtiene como resultado del subgrupo el mismo conjunto de todas las Órdenes de Trabajo.

Una vez establecido el subgrupo, el **AM** permite mantener activo cualquier subgrupo en cada módulo, hasta ser cambiado por el usuario.

**AM** permite entonces hacer selección de un grupo de ots de acuerdo con los criterios seleccionados en la siguiente ventana.

![Ventana submenú de Órdenes de trabajo](manualAM/0.images/cap11/chp11_img04.png)

Los campos de datos que constituyen criterio de selección, se agrupan en tres bloques:

**1.	FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A L A ORDEN DE TRABAJO**

**AC - Activo  Fijo:** Este campo preselecciona las Órdenes de Trabajo activas para el o  los Equipos cuyo Número de Activo corresponde a los valores aquí definidos.   En este  campo se pueden utilizar los comodines.

**AC -  Alias:** Este campo preselecciona las Órdenes de Trabajo activas para el o los  Equipos cuyo Alias corresponda a los valores aquí definidos.   En este campo se pueden utilizar los comodines.

**AC - Código:** Esta selección agrupa los Equipos relacionados por su código. Es posible definir el  código   completó  o  una  porción  del  m ismo.  Por  ejemplo:  si  se  escribe  341%,  se seleccionan  todas  las  **OT**s  cuyo  código  de  Equipo  inicia  por  341.   Si   se  escribe ** “_ _1%”**
se seleccionan todas las ots cuyo código de Equipo inicie por cualquier par de valores y que tienen un ** “1”** en la tercera posición.	El  porcentaje  (%) es  un carácter comodín que significa ** “todos”**.  El  carácter ** “_”**  es  otro  comodín, posicional que  indica ** “cualquier valor”**.

**AC - Código de Barras Int.:** Permite seleccionar las **OT**s que se encuentran  asociadas al Activo/ Equipo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo del subgrupo.

**AC - Código de Barras Prov.:** Permite seleccionar las **OT**s que se encuentran asociadas con un Activo/Equipo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo/Equipo.

**AC - Descripción:** Selecciona las **OT**s que se encuentran relacionadas con los Activos / Equipos según los criterios que se fundamentan en su descripción. Ejemplo: %Motor%  selecciona todas las	**OT**s que son asociadas a los que Activos / Equipos  en  cuya descripción, en cualquier posición, tengan la palabra ** “Motor”**.

**AC - Referencia:** Esta opción permite seleccionar un Equipo o Equipos de acuerdo con  su
Número de Referencia.

**AC - Relación:** Filtra las **OT**s cuyo Equipo tiene algún tipo de relación con **OT**ro Equipo.   Tiene que ver con el concepto de Equipo Repuesto / Equipo Posición. Por ejemplo,  pueden buscarse las **OT**s cuyo equipo no está relacionado con ningún **OT**ro, o las **OT**s cuyo equipo sea Posición, etc.

**AC - Serial:** Esta alternativa permite seleccionar las **OT**s de acuerdo con el número serial del equipo objeto de mantenimiento.

**AC - Tipo:** Selecciona las **OT**s que se encuentran asociadas con los Activos/ Equipos que se encuentran ligados al Tipo ingresado por el usuario.

**2. FILTRAR POR CAMPOS DE LA ORDEN DE TRABAJO**

**Acción Técnica:** Filtra las Órdenes de Trabajo a las cuales se le definió la Acción Técnica seleccionada en esta opción, es posible utilizar comodines.

**Causa de Cierre:** Permite buscar las Órdenes de Trabajo que tienen una Causa de Cierre específica.

**Causa de  Pendiente:** Filtra  las  Órdenes  de  Trabajo donde  el  Estado de  la  **OT**,  es
** “Pendiente”** y cum ple con la Causa Pendiente seleccionada en esta opción.

**Causa de Falla:** Permite buscar las Órdenes de Trabajo que tienen una Causa de Falla específica.

**Centro de Costo:** Permite la selección de Órdenes de Trabajo de acuerdo con el Centro de Costo asignado a ella. Cuando se utilizan comodines, es posible seleccionar las OTs pertenecientes a Centros de Costo que tengan parte del  nombre  igual.  Por ejemplo: Sistema% selecciona todas las OTs en cuyo Centro de Costo exista la palabra  Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Centro Responsable:** Agrupa las Órdenes de Trabajo cuyo Centro Responsable sea el seleccionado.

**Comentario:** Filtra las Ordenes de Trabajo que cumplan con la opción de poseer comentario. Este es un campo para ingresar el comentario que se desee buscar en las Órdenes de Trabajo.

**Contiene Comentario:** Filtra las Órdenes de Trabajo que cum plan con la  opción seleccionada: ** “Con Comentario”** o ** “Sin Comentario”**.

**Contrato:** Filtra las **OT** que se encuentren asociadas a un contrato ya definido en la tabla de ** “CONTRATO”** en el módulo de Infraestructura.

**Contrato - Vencimiento:** Este campo filtra las **OT**s que posean un contrato y éste se encuentre vencido o no vencido, en la fecha establecida por el usuario.

**Criterio de Generación:** Permite seleccionar el subconjunto de **OT**s generadas desde PM, bajo  el  Criterio  de  Programación ** “XX”**  seleccionado.	Es   posible  utilizar   comodines. Los criterios son:

| **Abreviatura** | **Significado**          |
| --------------------- | ------------------------------ |
| **MM**          | Mensual                        |
| **SS**          | Semanal                        |
| **SM**          | Semestral                      |
| **AN**          | Anual                          |
| **DD**          | Días (Mín\. 3)               |
| **SA**          | Semanas del año               |
| **+M**          | Meses (m as de uno)            |
| **+S**          | Semanas\(m as de una)          |
| **KI**          | Contador por Incremento        |
| **KL**          | Contador por Límite           |
| **FC**          | Contador y/o Característica   |
| **FK**          | Frecuencia y/o Característica |
| **TM**          | Frecuencia y/o Contador        |
| **CM**          | Característica                |
| **??**          | Sin Criterio                   |

**Descripción:** Esta opción permite seleccionar las  **OT**s que cum plan con el  criterio  de selección establecido en este campo, es posible utilizar la funcionalidad de comodines.

**Efecto de Falla:** Este campo permite seleccionar las **OT**s que posean una causa de falla específica.

**Estado General:** Permite seleccionar las **OT**s de acuerdo a su Estado General, es decir las ** “Abiertas”** (Que tienen estado „E – En Ejecución‟, o estado „P – Pendiente‟), o las ** “Cerradas”** (Que tienen el estado „C‟ – Cerrada, o „K‟ – Cancelada), u Otras.

**Estado Particular:** Permite seleccionar las **OT**s de acuerdo a su Estado Particular. Al descolgar aparece el listado de todos los Estados posibles para una **OT**.

**Fecha de Cierre:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Cierre de Trabajos.  Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha.  De no digitar el campo ** “Desde”**, se buscan las Órdenes de Trabajo cuya fecha de cierre esté en el lapso anterior a la fecha digitada en ** “Hasta”**.   De no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de cierre esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha de consumo Mano de Obra:** Este criterio filtra las Órdenes de Trabajo por  un rango de la Fecha de consumo de mano de obra en el Gasto Real de la **OT**. Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha.  De no digitar el campo ** “Desde”**, se buscan las Órdenes de Trabajo cuya fecha de consumo de mano de obra esté en el lapso anterior a la fecha digitada en ** “Hasta”**.	De no  digitar  el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha de consumo en Gasto Real:** 	Este criterio filtra las Órdenes de Trabajo por  un rango de la Fecha de consumo de Gasto Real de la **OT**. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De  no  digitar el campo ** “Desde”**, se buscan las Órdenes de Trabajo cuya fecha de  consumo de Gasto Real esté en el lapso anterior a la fecha digitada en ** “Hasta”**.	De  no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha de Inicio de Trabajos:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Inicio de Trabajos.  Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha.   De no digitar el campo ** “Desde”**, se buscan las Órdenes  de Trabajo cuya fecha de Inicio de trabajos esté en el lapso anterior a la fecha digitada en ** “Hasta”**.  De no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha de Fin de Trabajos:** Este criterio filtra las Órdenes de Trabajo por un rango de la Fecha de Fin de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo ** “Desde”**, se buscan las Órdenes  de Trabajo cuya fecha de fin de trabajos esté en el lapso anterior a la fecha digitada en ** “Hasta”**. De no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha de Creación:** Permite la preselección de las Órdenes  de Trabajo cuya fecha  de Creación se encuentren incluidas en el rango especificado en este campo. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo ** “Desde”**, se buscan las Órdenes  de Trabajo cuya fecha de creación esté en el lapso anterior a la fecha digitada en ** “Hasta”**. De no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha de fin de trabajos esté en un lapso posterior a la digitada en ** “Desde”**.

**Fecha  Programada:**  Este  criterio  filtra  las  Órdenes  de  Trabajo  por  un  rango  de  la Fecha Programada. Aparecen dos campos: Desde y Hasta. En cada uno de ellos  se digita una fecha. De no digitar el campo ** “Desde”**, se buscan las Órdenes de Trabajo cu ya fecha programada esté en el lapso anterior a la fecha digitada en  ** “Hasta”**. De no digitar el campo ** “Hasta”**, se buscan las **OT**s cuya fecha programada esté en un lapso posterior a la digitada en ** “Desde”**.

**Gasto  Real  Mano  de  Obra:**  Al  seleccionar  esta  opción  se  habilita  una  lista desplegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación. Los criterios son:

- **Igual (=)**.
- **Mayor (>)**.
- **Menor (<)**.

Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético. Ejemplo:

si se escoge el criterio Mayor (>)  y la cantidad  es 100.000, eso significa que filtrara todas las **OT**s cuyo Gasto Real en la Mano de Obra sea Mayor a Cien Mil Pesos o unidades monetarias.

**Gasto Real Materiales y Repuestos:** Al seleccionar esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación.
Los criterios son:**Igual (=), Mayor (>) y Menor (<)**.
Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético.

**Gasto Real otros Conceptos:** Al seleccionar esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación.
Los criterios son: **Igual (=), Mayor (>) y Menor (<)**. Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético.

**Número de la **OT**:** Permite filtrar **OT**s, con base en su número consecutivo. Para ello se define en el criterio un rango. Aparecen cuatro campos, para ubicar el comienzo del rango ** “Desde”** (Año-Consecutivo) y el fin del rango ** “Hasta”** (Año-Consecutivo). De no digitar los campos ** “Desde”**, se buscan las **OT**s cuyo número es inferior al digitado en ** “Hasta”**.  De no digitar los campos ** “Hasta”**, se buscan las **OT**s cuyo número es  posterior al digitado en ** “Desde”**.

**Número de la Solicitud:** Permite buscar una solicitud de servicio especifica por medio del número que ésta fue asociada.

**Ordenes Evaluadas:** Agrupa las órdenes de trabajo que ya han sido evaluadas.

**Presupuesto:** Permite filtrar las Órdenes de Trabajo de acuerdo al manejo que  hagan sobre su Presupuesto: No maneja, No aprobado, Aprobado.

**Prioridad:** Permite hacer subgrupo de acuerdo a una Prioridad, habilitándose una lista despegable desde el nivel 1 hasta el nivel 7.

**Referencia:**  Este  opción  permite  seleccionar  las  **OT**s  que  tienen  asociado  el   valor seleccionado, en el campo Referencia. Es posible utilizar comodines.

**Responsable:** Agrupa las Órdenes de Trabajo de acuerdo al Responsable de la Orden de Trabajo.

**Responsable Asignado para Histograma:** Permite la preselección de las **OT**s cuyo Responsable está asignado para el histograma.

**Responsable en Gasto Real:** Permite la preselección de las **OT**s cuyo Responsable está definido en la mano de obra del gasto real.

**Solicitante (Digitado Manualmente):** Permite la preselección de las **OT**s cuyo Solicitante fue especificado manualmente,  y coincide con el definido en este campo.  Se  pueden utilizar los comodines.

**Solicitante (Incluido en  terceros - Tipo RI):** Permite la preselección de las  **OT**s  cuyo Solicitante fue seleccionado de la tabla de terceros (como RI) y coincide con el definido en este criterio. Existen dos formas de definir el Solicitante o grupo de Solicitantes en este criterio: La primera es seleccionándolo de la lista desplegable. La segunda es marcando la caja de selección ** “Utilizar comodines”** y digitando a  continuación segmentos del nombre del Solicitante, utilizando  comodines.

**Tipo de  Actividad:** Filtra las Órdenes de Trabajo por el Tipo de Actividad que aquí  se selecciona. Existen dos formas de definir el Tipo de Actividad: La primera forma es seleccionar de la lista desplegable el Tipo de Actividad. La segunda forma es marcando la caja de selección ** “Utilizar comodines”** y digitando a  continuación segmentos del Tipo de Actividad, utilizando  comodines.

**Tipo   de   Mantenimiento:** Filtra las Órdenes de trabajo por Tipo de Mantenimiento. Al activar ésta opción se activan las siguientes opciones: Correctivo, Preventivo, Preventivo Manual, Predictivo, Calibración, Lubricación y **OT**ro.

**Tipo de Trabajo:** Agrupa las **OT**s de acuerdo al tipo de trabajo al que están  asociadas. Utilizando la opción ** “Individualizar”** es posible filtrar las Órdenes de  Trabajo que tienen uno y solo un tipo de trabajo. De no activar la opción ** “Individualizar”**, se buscan las **OT**s, que tengan el tipo de trabajo seleccionado, sin  importar si tienen otros tipos de trabajo activos.

**Origen **OT**:** Filtra las Ordenes de Trabajo que se hayan generado por Solicitudes de Servicio, Paros y Averías u Órdenes de trabajo.

**Ubicación  Física:** Permite la selección de las OTs cuyo equipo se encontraba en  una ubicación física, determinada en este criterio. Cuando se utilizan comodines, es  posible seleccionar OTs cuyo equipo esté en una ubicación física que tenga parte  del nombre igual. Por  ejemplo: Cava%  selecciona las  OTs,  efectuadas a Equipos  cuyo  nombre de Ubicación Física empieza por la palabra cava, independientemente de si se está hablando de la cava de fermentación, maduración o contrapresión.

**Días  Vencimiento:** Muestra los días vencidos que tiene una orden, a partir de la fecha programada y la fecha actual.

**3. FILTRAR POR EL USUARIO QUE MANIPULÒ LA ORDEN DE TRABAJO**

**Cierre  Manual  de  la  Orden:**  Filtra  las  Ordenes  de  Trabajo  que  hayan  sido  cerradas m anualmente por el usuario digitado en este campo. Es posible utilizar comodines.

**N**OT**a:** Es importante tener en cuenta que cuando se están realizando los subgrupos,  se pueden utilizar uno o varios de los criterios anteriores, simultáneamente. Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección, es posible hacer Otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón `<span class="iconify btn" data-icon="mdi-plus-circle">`Más, en lugar del botón `<a class="btn">`Aceptar `</a>`.

**4. EV ALU ACION DE SERVICIO**

**Filtrar por Calificación:** Busca filtrar las órdenes de acuerdo a una calificación. Al activar esta opción se activa una lista despegable con las siguientes opciones:

- Excelente.
- Bueno.
- Aceptable.
- Regular.
- Malo.

**Filtrar  por  evaluación:**  Filtra  las  Órdenes  de  Trabajo  que  fueron  calificadas  o   no calificadas.

## Vistas Parciales / Pestañas

### Acciones técnicas

Esta opción conduce a la tabla de Acciones Técnicas de la **OT**. Esta tabla se ha creado con información seleccionada desde la tabla del mismo nombre en la  Infraestructura, que contiene  un  listado  de  Acciones  Técnicas  frecuentes  en  un  área  de  Mantenimiento. Con   la   información   contenida   en   esta   tabla   se   pretende   describir,   breve   pero concretamente, la actividad general realizada en  una  Orden de Trabajo. Las  Acciones Técnicas en  una **OT** se pueden definir, después de haber seleccionado en la ventana Detalle de la Ficha Técnica de la **OT**, el cuadro llamado ** “Manejo de Costos ABC”**. La adición de las  Acciones Técnicas se realiza de igual forma que en los módulos Efectos de Falla y Causas de Falla en la Infraestructura.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img05.png)

## Presupuesto

En  una  **OT**  Manual  que  se  acaba  de  crear,  solo  se  permite  definir  o  modificar  su Presupuesto, hasta el momento en que se ha ya aprobado el mismo. Además, solamente se puede crear o modificar el Presupuesto de una **OT**  si se ha  establecido la opción ** “Control Presupuestal”**, en el momento de creación de la **OT**. Esto significa que si a una **OT** no se le marcó el recuadro de Control Presupuestal, no tendrá la posibilidad de aceptar datos de Presupuesto, solamente de Gasto Real.

Los datos de Gasto Real se pueden registrar en una **OT** en cualquier momento, mientras esa **OT** no exija Control Presupuestal. Pero si la **OT** exige Control Presupuestal, solo se puede registrar el Gasto Real después de haber aprobado el Presupuesto, en cuyo caso ya no será posible modificar este último.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img06.png)

En   la  gráfica anterior, Ventana de Presupuesto, se   aprecian sus  componentes y  sus respectivos contenidos.

A través de la ventana de Presupuesto se administra el Presupuesto de la  Orden  de
Trabajo. Esta ventana está conformada por dos zonas.

En la zona superior, aparece la matriz de Presupuesto, que resume los  Costos Presupuestados para la **OT**, discriminando por Tipo de Trabajo (En las filas), y por Tipo de Consumo (En las columnas). Aparecen también botones para ingresar  Mano de Obra, Materiales y Repuestos, y otros Conceptos.

En la zona inferior, están los botones que permiten ver, en forma de visor, el presupuesto de la **OT**. Igualmente, se encuentra el botón `<a class="btn">`Aprobar Presupuesto `</a>`, que se utiliza una vez se ha definido el presupuesto y se desea iniciar el registro de la  información de Gasto Real.

**Ingresar Mano de Obra Interna**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img07.png)

En la gráfica anterior, Ventana de Ingreso de Mano de Obra Interna, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Mano de Obra Interna se administra el Presupuesto o de Mano de Obra de la Orden de Trabajo.

Es importante destacar que el presupuesto de mano de obra de una **OT**, se prepara a nivel de Oficio, es decir, no se tiene en cuenta la persona que va a realizar la labor,  pues se trata de un presupuesto y no se conoce a ciencia cierta, en la mayoría  de  los casos, quiénes serán los encargados de ejecutar la labor.

En la parte superior aparece el listado de los oficios presupuestados para la **OT** activa.  En la parte inferior, es posible efectuar modificaciones, así como ingresar nuevos  oficios al presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se  quiera actualizar o ingresar nuevos oficios al presupuesto de una **OT**, se deberán diligenciar los siguientes campos:

**C. Responsable:** Es el centro responsable al que pertenece el oficio presupuestado. Es un campo de solo lectura, que se establece al seleccionar el oficio.

**Oficio:** En este campo se selecciona el oficio a presupuestar. Esto se hace descolgando el listado de Oficios, definido desde su tabla en la Infraestructura.

**H. Hombre:** Es el número de Horas Hombre que se están Presupuestando para el oficio en cuestión.

**MM:**  Es  el  número  de  Minutos,  que  junto  con  las  horas,  conforman el  tiempo  total presupuestado.  Así, si se desea presupuestar 4 horas y media de un oficio, debe ponerse ** “4”** en el campo ** “H. Hombre”**, y ** “30”** en el c ampo ** “MM”**.

**Personas:** Este campo indica cuántas  personas van         a desempeñar  la labor. Retomando el ejemplo anterior, si se coloca ** “2”** en este campo, se está  diciendo que 2 personas van a desempeñar el oficio. Como ya se definió que el total de tiempo requerido son 4 horas  y media, se deduce entonces que entre las 2  personas consumirán este tiempo.

**Vr. Hora:** Es el valor unitario de la hora para el oficio en cuestión. AM sugiere el costo hora traído desde la tabla de Infraestructura para el oficio, pero puede cambiarse.

**Ingresar Materiales y Repuestos**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img08.png)

En la gráfica anterior, Ventana de Ingreso de Materiales y Repuestos, se aprecian  sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Materiales y Repuestos se administra el Presupuesto de Materiales y Repuestos de la Orden de Trabajo.

En la parte superior aparece el listado de los repuestos presupuestados.  En la  parte inferior,  es  posible  efectuar  modificaciones,  así  como  ingresar  nuevos  materiales  al presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se  quiera actualizar  o  ingresar  nuevos  Materiales  y  Repuestos  al  presupuesto de  una  **OT**,  se deberán diligenciar los siguientes campos:

**Al macén:** Se elige el almacén dónde se encuentra el repuesto a ingresar al presupuesto.

**Repuesto:** En este campo se digita directamente el código del repuesto a  presupuestar. Si no se ha seleccionado un almacén, no es posible seleccionar el repuesto. También puede elegirse el repuesto, al hacer clic en los binoculares,  y seleccionado el repuesto desde la lista. Una vez elegido el repuesto, aparece su descripción al lado derecho del código.

**Descripción:** Es   un  campo de  solo   lectura,  que   muestra la  descripción del  repuesto seleccionado.

**Tipo de trabajo:** Este campo muestra el Tipo de Trabajo para el cual se presupuesta el
Material o Repuesto.

**Unidad de Medida:** Es un campo de solo lectura que muestra la unidad de consumo del repuesto seleccionado.

**Cantidad:** Es la cantidad presupuestada para el repuesto seleccionado.

**Valor Unitario:** Es el valor unitario del repuesto seleccionado.  AM sugiere el valor unitario ya establecido del Repuesto en cuestión, sin embargo puede cambiarse.

**Ingresar otros Conceptos**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img09.png)

En   la  gráfica  anterior,  Ventana  de  Ingreso  de   otros  conceptos,  se  aprecian   sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de otros Conceptos se administra el Presupuesto de
oros Conceptos de la Orden de Trabajo.

En la parte superior aparece el listado de los otros Conceptos presupuestados. En  la parte   inferior,  es   posible  efectuar  modificaciones,  así  como  ingresar  nuevos   otros Conceptos al presupuesto.

A continuación se describen los campos que componen esta ventana; cuando se  quiera actualizar o  ingresar  nuevos  otros  Conceptos al presupuesto de  una **OT**,  se  deberán diligenciar los siguientes campos:

**Concepto:** Es el otro Concepto”** a presupuestar.  Se selecciona descolgando la lista de
otros Conceptos, traída desde su tabla en Infraestructura.

**Nro. De Unidades:** Es la cantidad del concepto seleccionado anteriormente.

**Valor Unitario:** Es el valor presupuestado del **otro Concepto Costo”**. AM sugiere el valor unitario del concepto que se encuentra ingresando al sistema.

**Valor Total:** Es el costototal presupuestado del **otro Concepto Costo”** teniendo en  cuenta el número de unidades y el valor unitario.

Al hacer clic en el botón `<a class="btn">`Ir a Matriz `</a>`, se regresa a la ventana principal de Presupuesto.

### Gasto Real

![Ventana Detalle](manualAM/0.images/cap11/chp11_img10.png)

En  la  gráfica anterior,  Ventana de  Gasto  Real, se  aprecian sus  componentes y sus respectivos contenidos.

A través de la ventana de Gasto Real se puede administrar el Gasto Real de la Orden de
Trabajo. Esta ventana está compuesta por dos zonas,

En la zona superior, aparece la matriz de Gasto Real, que resume los costos reales para la **OT**, discriminando por  Tipo de Trabajo (En  las  filas),  y por Tipo de  Consumo (En las columnas). La  última  fila   y  la   última columna de  la  matriz, discriminan la  diferencia contra el  Presupuesto, conformando así el Control Presupuestal de la **OT**. Aparecen también botones para ingresar Mano de Obra, Materiales y Repuestos, y otros Conceptos.

En la zona inferior, están los botones que permiten ver, en forma de visor, el gasto real de la **OT**. Igualmente, aparece la leyenda ** “Debe aprobar el Presupuesto”** o  ** “Presupuesto aprobado”**, si la Otm anexa control presupuestal.

Debe tenerse en cuenta que el Gasto Real de una **OT** no puede ser modificado si  el
Presupuesto de la misma no ha sido aprobado.

**Ingresar Mano de obra Interna**

![Ventana Detalle](manualAM/0.images/cap11/chp11_img10.png)

En la gráfica anterior, Ventana de Ingreso de Mano de Obra, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Mano de Obra s e administra el Gasto Real de Mano de Obra de la Orden de Trabajo.

A diferencia del Presupuesto de Mano de Obra, el Gasto Real de la Mano de Obra  se efectúa a nivel de Responsable, es decir, se tiene en cuenta a la persona que  realiza la labor.

A continuación se describen los campos que componen esta ventana; cuando s e requiera actualizar o ingresar nuevas personas que intervinieron en una **OT**, al  gasto  real de la misma, se deberán diligenciar los siguientes campos:

**F. Uso:** (Fecha de Uso).  Es la fecha en la cual se utiliza el recurso.

**Oficio:** Es el Oficio al que pertenece el Responsable asignado.  Es  un campo de  solo lectura, que se establece una vez se selecciona el Responsable.

**Responsable:** En este campo se selecciona el Responsable. Esto se hace descolgando el listado de Responsables, traído desde la tabla de Inf raestructura.

**H. Hombre:** Es el número de Horas Hombre consumidas por el Responsable en cuestión.

**MM:**  Es  el  número  de  Minutos,  que  junto  con  las  horas,  conforman el  tiempo total consumido.  Así, si se consumen 4 horas y media de un responsable, debe registrarse ** “4”** en el campo ** “H. Hombre”**, y ** “30”** en el campo ** “MM”**.

**Tipo Hr.:** Dado que un Responsable a través del Oficio del mismo puede poseer  varios tipos de Hora, cada uno con un valor distinto, en este campo se selecciona el Tipo de Hora adecuado.  AM sugiere el valor hora correspondiente, dependiendo del tipo elegido. Si  se elige el Tipo **otro”**, AM no sugiere ningún valor hora, y deja a decisión del usuario el valor a asignar.

**Vr. Hora:** Es el valor unitario de la hora para el oficio del responsable en cuestión. AM sugiere el costo hora traído desde la tabla de Infraestructura para el oficio, en los casos en que el tipo hora es distinto de **otro”**. Si se elige el tipo de hora **otro”**, debe def inirse un valor hora manualmente.

**Tipo Asignación:** Este campo define al responsable de la mano de obra de la **OT**, el tipo de intervención que realiza en el tiempo que la orden de trabajo esté abierta. La  opción ** “Presupuesto para Histograma”** es para definir la proyección a futuro de la carga de trabajo del responsable; y ** “Ejecución Real”** es para definir la carga de trabajo ejecutada.

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

A  través  de  la  ventana de  Ingreso de  otros  Conceptos se  administra el  Gasto Real de ** “otros Conceptos’’ de la Orden de Trabajo.

A continuación se describen los campos que componen esta ventana; cuando  se quiera actualizar  o  ingresar  nuevos  otros  Conceptos al  gasto  real  de  una  **OT**, se  deberán diligenciar los siguientes campos:

**F. Uso:** (Fecha de Uso).  Es la fecha en la cual se utiliza el recurso.

**Concepto:** Es el otro  Concepto a cargar a la **OT**. Se selecciona descolgando la lista de otros Conceptos, traída desde su tabla en Infraestructura.

**Nro. De Unidades:** Es la cantidad del concepto seleccionado anteriormente.

**Valor Unitario:** Es el valor presupuestado del **otro Concepto”**. AM sugiere el valor unitario del concepto que se encuentra ingresando al sistema.

**Valor Total:** Es el costototal presupuestado del **otro Concepto”** teniendo en cuenta el número de unidades y el valor unitario.

**Información  Adicional:** Es  un campo donde se  define un pequeño  comentario sobre el consumo.

Al hacer clic en el botón `<a class="btn">`Ir a Matriz `</a>`, se regresa a la ventana principal de Gasto Real.

## Evaluación de Servicio

Se puede realizar la evaluación del servicio prestado por el personal de mantenimiento o de servicios, en la **OT**  seleccionada.  La evaluación la debe realizar un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez se ha ya cerrado la **OT**. Esta opción de evaluación se hace disponible, cuando  se  han definido   las  cinco  preguntas  de  evaluación,  en  ** “Parámetros  para Evaluación del  Servicio”**, en ** “Valores por Defecto”**, en el módulo de ** “Administración”**. Es posible realizar la evaluación del servicio de una **OT**, cuando el solicitante se encuentra registrado como un usuario solicitante en el **AM** en el módulo de Administración en Usuarios.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img13.png)

Esta opción está disponible cuando se han  definido las cinco preguntas de evaluación, en ** “Parámetros para Evaluación del Servicio”**, en  ** “Valores por  Defecto”**, en  el  módulo de ** “Administración”** y también es posible realizar la evaluación del servicio a través del -**AMsi**- sin la necesidad de ingresar a –AM4G-.

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

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono `<span class="iconify btn" data-icon="cloud-upload">`Cargar, a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir,  se selecciona el archivo y se da clic en `<a class="btn">`abrir `</a>`.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img16.png)

Una vez se da clic en `<a class="btn">`abrir `</a>`, se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón en `<a class="btn">`Subir archivo `</a>`.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img17.png)

Los archivos que se van adicionando van quedando guardados uno debajo del **OT**ro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, a la **OT** se da clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón `<a class="btn">`Aceptar `</a>`.

Si se desea descargar un archivo adjunto a la **OT**, se debe dar clic en el `<span class="iconify btn" data-icon=cloud-download>` la nube con flecha hacia abajo, que se encuentra al lado derecho del archivo que se quiere descargar.

## Transacciones

### Analizar / Generar

![Ventana Detalle](manualAM/0.images/cap11/chp11_img18.png)

En la gráfica anterior, Analizar / Generar, se aprecian sus componentes y sus respectivos contenidos.

A  través de la  ventana Analizar /  Generar, **AM** propone un conjunto de   ots   que debieran ser ejecutadas en el período seleccionado, para ser analizadas y posteriormente generadas como Órdenes de Trabajo Programadas.

El Procedimiento para efectuar un Análisis y posterior Generación de Órdenes de Trabajo es el siguiente:

Digitar la fecha ** “Desde”**, que corresponde al inicio del período a programar. **AM** sugiere la fecha del sistema.
Digitar la fecha ** “Hasta”**, que corresponde al final del período a programar. **AM** sugiere la fecha de una semana después, pero es una fecha modificable a gusto. Normalmente el período a Analizar, en este proceso, se trata de un período de corto plazo: tres días, una semana, una quincena o un mes.
Debajo de estas fechas, en la sección de ** “Datos de la última generación”**, aparece la información del rango de fechas para el que se realizó un proceso de Generación de **OT**s la última vez, y el código de login del usuario que ejecutó el proceso.

**Clic en el botón  “Analizar”**.
**
Aparece el siguiente mensaje, contestar ** “Aceptar”** si se desea  ejecutar  el proceso de Analizar.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img19.png)

- **AM**- recorre todos   los programas de mantenimiento, y establece cuáles deben generar órdenes de trabajo en el rango de fechas ya estipulado. Durante  este proceso, puede visualizarse el  estado  de  avance  del análisis, en la parte inferior izquierda, el sistema escribe un mensaje en la pantalla de las Ots analizadas deltotal de PMs registrados en la base de datos. El proceso también se puede cancelar haciendo clic en el botón `<a class="btn">`Cancelar `</a>`, y el sistema detiene el proceso sin ningún tipo de perjuicio, es decir, a los datos no son afectados en absoluto.

Una vez finalice el proceso, se muestra el detalle del análisis y se muestra cuántas órdenes de trabajo se detectaron.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img20.png)

- **Clic en Ver Diagrama**

A continuación, se  procede  a visualizar a través de un Diagrama de Gantt, en el cual se muestra la información del Activo con su respectivo PM y al lado derecho se muestra por colores el cronograma con las fechas proyectadas de las actividades. Para esto, se procede a dar clic al botón `<a class="btn">`Ver Diagrama `</a>` y se muestran la siguiente gráfica

![Ventana Detalle](manualAM/0.images/cap11/chp11_img21.png)

Es importante aclarar, que hasta este punto, no ha sido generada ninguna Orden de Trabajo. Solamente se ha detectado un grupo potencial de ellas, que deberían ser ejecutadas de acuerdo a los criterios de programación, si el análisis del programador de mantenimiento lo decide.

- **Clic en Ver Reportes**

A continuación, se procede a verificar si para las órdenes detectadas por el proceso de análisis, existen todas las garantías de ejecución, en el rango de fechas programado. Para esto, se procede a imprimir varios reportes que para el caso se  presentan, tal y como se visualiza en la siguiente gráfica:

![Ventana Detalle](manualAM/0.images/cap11/chp11_img22.png)

**Los reportes disponibles para efectuar esta revisión, son:**

- Cronograma de Mantenimiento Programado con TM
- Cronograma de Mantenimiento Programado
- Actividades por Mes y Día
- Listado de Repuestos
- Actividades por Mes y Día con Presupuesto Discriminado

Los anteriores reportes pueden ser seleccionados para una o varias **OT**.

Después de seleccionar el reporte, pulse el botón `<a class="btn">`imprimir `</a>`.

Si al imprimir alguno de estos reportes, el usuario advierte que una o varias de  estas Ordenes de Trabajo no deben ser  Generadas, éste es  el momento para  que  cancele todo el proceso, va ya a los Programas de Mantenimiento respectivos,  revise y modifique sus criterios, y vuelva a realizar un nuevo el proceso de Análisis.
Si después de efectuar la revisión, el usuario está seguro de que ésas son las Órdenes de Trabajo a  generar,  se  hace  clic  en  el  botón  `<a class="btn">`Generar `</a>`.  Este   proceso crea tantas Órdenes de Trabajo como hayan sido detectadas por el  proceso  de Análisis.  Durante este proceso, puede consultarse cómo va el proceso haciendo clic en el botón `<a class="btn">`Consultar `</a>`.
Una vez se generan las Órdenes de Trabajo, los Programas de Mantenimiento que  las generaron, se actualizan automáticamente, ajustando sus criterios y fechas, preparando la consistencia de las generaciones futuras.

### Modificar Masivamente

Esta  transacción  permite  cambiar  masivamente  el  Responsable,  los   Comentarios,  el Estado, la Evaluación de Servicio, entre otros; de las Órdenes de Trabajo previamente seleccionadas, que se encuentran en el Visor.

![Ventana Detalle](manualAM/0.images/cap11/chp11_img23.png)

A  continuación  se  describen  los  campos  que  componen  esta  ventana  de   información adicional.

**Modificar Solamente esta Orden:** Al seleccionar esta opción, el cambio se aplica solamente a la **OT** que esta resaltada en el visor.

**Modificar todas las Ordenes en el  visor**: Al escoger esta opción, el cambio se refleja  en todas las **OT**s previamente seleccionadas en el visor.

**Agregar Responsable Ejecutor**: Se agrega masivamente el Responsable Ejecutor (en Gasto Real), de la(s) **OT**(s)  que están previamente seleccionadas en el visor.

![Agregar Responsable Ejecutor](manualAM/0.images/cap11/chp11_img24.png)

**Modificar Responsable**: Se modifica masivamente el Responsable, de la(s) **OT**(s)  que están previamente seleccionadas en el visor.

![Modificar Responsable](manualAM/0.images/cap11/chp11_img25.png)

**Modificar Comentarios**: Se modifican masivamente los Comentarios, de la(s) **OT**(s) que están previamente seleccionadas en el visor, teniendo en cuenta la opción ** “Añadir  estos comentarios a los comentarios actuales”** o ** “Reemplazar por estos Comentarios”**.

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

**Modificar Solamente esta **OT**:** Al seleccionar esta opción, el cambio se aplica solamente a la **OT** que esta resaltada en el visor.

**Modificar Todas las **OT**s en el  visor:** Al escoger esta opción, el cambio se refleja  en todas las **OT**s previamente seleccionadas en el visor.

**F/H de Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la Fecha y hora del daño ocurrido. La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas). Cabe an**OT**ar, que la fecha y hora consignadas   corresponden   al   momento   en   que    se   informó   del   daño   o   falla   a Mantenimiento, así que es posible que el daño  ha ya ocurrido en una fecha/hora anterior. Sin embargo se debe procurar,  administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del Daño.

**F/H Atención:** Es la fecha y hora en la que el Personal de Mantenimiento llega a atender el fallo reportado, o sea, cuando se hace presente en la Ubicación Física del equipo, para realizar una inspección previa sobre el Equipo Reportado. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora la hora se define en formato Militar (de 24 horas). Normalmente se utiliza en Órdenes de Trabajo Manuales. Una vez se digitan la Fecha y Hora de Atención, éstas se sugieren para la fecha y hora de Inicio de Trabajos y Fin de Trabajos de la Orden, claro está, si tales fechas y horas no han sido digitadas aún.

**F/H Inicio Trabajos:** Es la Fecha y Hora que indica el momento de inicio de labores, una vez que todas las condiciones están dadas: se han superado los tiempos de inspección y administrativos; la máquina está lista y en condiciones de ser mantenida,  ya fue entregada al Depto. de Mantenimiento y éste a su vez, cuenta con todos los recursos necesarios para la ejecución: herramientas, instrumentos, materiales, repuestos y por supuesto, personal. La  fecha se m aneja en formato AAAA/MM/DD  (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas).

**F/H Fin Trabajos:** Es la Fecha y Hora que indica el momento en que finalizan las labores de   mantenimiento,   incluyendo   las   pruebas   o   ensayos,   que   determinaron   el   buen funcionamiento del equipo. La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas).

**Tiempo Duración (ttr):** **AM** sugiere como Tiempo de Duración, (o time to repair) en este campo, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos. Cabe an**OT**ar, que no siempre el Tiempo de Duración es la  diferencia entre estas fechas/horas, pues  pueden existir  eventos  que dejan  temporalmente a  la **OT**  en Estado de ** “Pendiente”**. **AM** permite corregir el tiempo de Duración en una **OT**, después de que fue calculado por el sistema, para que refleje el tiempo real de la ejecución.

Por ejemplo, si una **OT** tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30, y como Fecha de Fin de Trabajos XXXX/12/01 16:00, **AM** sugiere como Tiempo de Duración, 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar Otra labor, se debe corregir la duración: 5 horas y 30 minutos.

**T. Improductivo: - **AM** sugiere como Tiempo Improductivo la diferencia entre la Fecha y Hora  de  Fin  de  Trabajos  y la  Fecha  y Hora Info  de  Paro (Para  Órdenes  de  Trabajo Correctivas), o como, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos (Para Ordenes de Trabajo no Correctivas). Sin embargo, este valor  puede  corregirse,  después  de  que  fue  calculado  por  el  sistema,  para  reflejar  la cantidad Real de Tiempo Improductivo que tuvo el Equipo en la **OT** actual.

Por ejemplo, si una **OT** correctiva tiene como fecha de Info de Paro XXXX/12/01 08:00, y como  fecha  de   Fin   de   Trabajos  XXXX/12/02  12:30, **AM** sugiere   como  Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese  lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora este turno de producción, se debe definir el tiempo improductivo como solamente de 20 horas y 30 minutos.

Estado de la **OT**: Una Orden de Trabajo puede tener uno de los siguientes Estados:

- **E:**	En Ejecución
- **K:** 	Cancelada
- **C:** 	Cerrada
- **P:** 	Pendiente
- **CR:**   Cerrada Retroalimentada

Estos son los Estados predeterminados por el Sistema **AM** para las **OT**, pero el usuario puede personalizar otros Estados en la Tabla de ** “Estados”** de Infraestructura.

**Causa pendiente:** Dado el caso de que a la Orden de Trabajo se le ha ya  definido el
Estado ** “P: Pendiente”**, en este campo se indica la causa por la cual la **OT** está en dicho estado. Para ello se elige una de las opciones que se descuelgan. En caso de requerir registrar una causa distinta, que no exista en la lista, ella se puede crear  en la  tabla respectiva de Infraestructura, tras de lo cual se regresa y se registra en este sitio.

**Causa de Cierre:** Por defecto, cuando se trata de una **OT** cerrada y ejecutada, el sistema ubica en este campo la causa ** “**OT** Ejecutada”**. Si la **OT** se ha cerrado con un Estado de ** “K: Cancelada”**, en  este  campo se  define la  Causa respectiva,  eligiendo una  de  las opciones que se descuelgan. En caso de requerir registrar una  causa distinta, que no exista en la lista, ella se puede crear en la tabla respectiva de  Infraestructura, tras de lo cual se regresa y se registra en este campo.

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

- **C:** 	Cerrada.
- **K:** 	Cancelada

Al hacer clic en la transacción, aparece la siguiente ventana:

![ventana OT ](manualAM/0.images/cap11/chp011_img41.png)

En la ventana aparece un botón ** “Enviar a Historia”** y tres casillas de selección. Estas casillas  de selección parametriza los registros que se desea enviar a Historia.

**Todas las **OT** cerradas:** Con esta opción se realiza el envío de todas las Órdenes de Trabajo existentes en la base de datos, sin importar cualquier subgrupo activo.

**Todas las **OT** cerradas del visor:** Esta opción se realiza el envío de todas las Órdenes seleccionados en el visor mediante un subgrupo.

**La **OT** seleccionada:** Esta opción realiza el envío de la **OT** que está resaltada  en  el visor (tiene la línea verde del cursor sobre sí).

Para enviar a Historia, se selecciona una de las opciones  y se hace clic en el  botón `<a class="btn">`Enviar a Historia `</a>`, entonces aparece la siguiente ventana y se da clic en `<a class="btn">`Aceptar `</a>`:

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

Para visualizar los reportes, se selecciona el reporte y luego se da clic al botón `<a class="btn">`Imprimir `</a>`.

# Exportar

Esta opción permite la exportación de los registros de **OT** que aparecen en el visor,totales o provenientes de un subgrupo, a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación.

![OT exportar](manualAM/0.images/cap11/chp011_img44.png)

Al darle clic en el botón `<a class="btn">`Exportar `</a>`, se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los registros contenidos en el visor a un archivo plano, para luego ser analizados.

Adicionalmente, es posible exportar todos los campos de la ventana Detalle de los registros, para esto se da clic en el cuadro llamado ** “Exportar Todos Los Campos”**. También, es posible exportar uno o varios campos de la ventana Detalle de los registros, para esto se da clic en cada uno de los cuadros que acompañan los campos.
