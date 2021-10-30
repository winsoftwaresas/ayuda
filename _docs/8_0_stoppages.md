---
layout: page
title: ◼ Stoppages - Failures, Damages and Breakdowns ( **FDA**)
order: 08_00
---
# Paros: Fallas, Daños y Averías ( **FDA**)

- ¿Qué es un Paro o  **FDA**?.
- ¿cuál es el objetivo de un módulo dedicado a ellos?.
- Quién puede definir  **FDA**. ¿Cómo se definen y cómo trabaja un Paro o  **FDA**?.
- ¿Cuál es su proceso, quienes los protagonistas y como se les hace seguimiento?.
  Son las preguntas básicas que obtienen respuesta en el presente capítulo.

# Conceptos Básicos sobre Paros / Averías

## Paros / Averías ( **FDA**)

El  módulo de Paros / Averías en el  **AM** tiene como objetivo el registro simple  pero detallado, de los hechos y de las actividades que se ejecutan como consecuencia de un Paro o una Avería en la prestación del servicio de un Equipo/Activo. Tal  **FDA** se pudo haber ocasionado en un Fallo, o en un  **FDA**.

Un Fallo, en la mayoría de los casos es funcional y ocurre cuando el Equipo/Activo se encuentra trabajando anormalmente, a pesar de que todos sus componentes  están en  perfecto estado. Ello denota un problema  de  ensamble,  de  ajuste, de puesta a punto, de mantenimiento o de otros similares.

Un Daño se presenta cuando un componente del Equipo/Activo/Activo está defectuoso, por cualquiera de múltiples razones. Aunque deben ser corregidos, algunos daños son tolerables y no afectan el buen desempeño del Equipo/Activo, ni la calidad del producto o servicio, que de él se derivan. Por ejemplo, en un vehículo, una luz delantera rota o descompuesta, no afecta su uso normal, al menos en horas del día.

Este módulo es entonces un  medio de comunicación entre las áreas de Producción  y Mantenimiento,  para  el  registro  de   actividades  relacionadas  con  Paros  /   Averías; actividades que pueden, posteriormente, ser estudiadas estadísticamente, en conjunto con otras relacionadas en Ordenes de Trabajo, principalmente Correctivas,  para concluir en frecuencias de fallas, causas de esas fallas, efectos e implicaciones de las mismas y las acciones técnicas y los recursos requeridos para su prevención y corrección.

El módulo de Paros / Averías se caracteriza por tener dos caras o interfaces. Es decir, se puede trabajar de una forma simplifica de campos o de forma.

# Creación de un Paro o  **FDA**

Crear un  **FDA** exige en primera instancia, que el usuario tenga la autorización en el sistema para poder hacerlo. Son potenciales generadores de  **FDA** los técnicos y supervisores de Producción y también los de Mantenimiento.

La creación de un  **FDA** se realiza a través de la Ventana Detalle de  **FDA**, en la  ventana principal de Paros / Averías. En cuanto se da un clic sobre el botón `<a class="btn">`Nuevo `</a>`. esta ventana adopta la forma que se muestra a continuación. Al crear un  **FDA**, ella asume automáticamente el estado inicial: **“En Análisis”**.

La creación de un  **FDA** normalmente está en manos del personal de Producción. Si no existen los medios expeditos para que Producción reporte el  **FDA**, es natural que el reporte del  **FDA** se haga por  otro medio: teléfono, alertas de sonido o visuales o un reporte persona-persona. Entonces, se concluye, que el reporte del  **FDA** puede ser registrado antes o después de   la   ejecución  de   la actividad correctiva del mismo.  Si es previo,  será Producción  el  área  encargada  del  registro,  y  si  es  posterior,  será  mantenimiento el encargado. Aunque la primera prioridad es resolver la situación de Paro / Avería, el registro del  **FDA** debería hacerse muy cercano a su ocurrencia.

El proceso de Creación debería incluir como mínimo, los siguientes campos, que están a cargo del usuario: Turno, módulo (si es aplicable), referencia (si es aplicable), operación (si

es aplicable), operador del Equipo/Activo/Activo, efecto de la falla, Equipo/Activo objeto del  **FDA** y descripción de la falla o daño del PA.

Los demás campos son generados por el sistema o son llenados solo en el momento del cierre del PA.

El  **AM** maneja la siguiente Vista.

![ventana  FDA](0.images/cap10/chp10_img01.png)

# Seguimiento y Cierre de Paros / Averías

El proceso de cierre de un  **FDA** reviste el rigor de un cierre de OT y un proceso similar al de una SS. Se refiere el rigor de una OT a la precisión sobre las fechas y horas y a la clara definición de la Causa de la Falla.

El proceso de cierre de un  **FDA** como tal, es similar, aunque más sencillo, al de una  SS. consiste en cambiar el **“Estado”**, por uno de dos: **“Cerrada Ejecutada”** o  **“Cerrado con OT”**, Para mayor detalle se debe referir al acápite **“Seguimiento y Cierre”** de Solicitudes de Servicio.

# Ventana Principal de Paros/Averías

![Ventana Principal de Paros/Averías](0.images/cap10/chp10_img02.png)

A esta ventana se llega haciendo clic sobre la opción Paros del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los PA. A continuación, se ilustran las porciones que la componen.

## Ventana Visor de PA /  **FDA**

![Ventana Visor de PA /  FDA](0.images/cap10/chp10_img03.png)

Desde esta ventana es posible observar los PAROS /  **FDA** existentes. Se listan todos o   una selección o subgrupo de ellos. El conjunto de PAROS /  **FDA** disponibles a ser desplegado se muestra a través de  páginas.                 El tamaño  de  las  páginas  es  configurable  desde  la  opción Administración del menú principal, en la  sección **“Valores por Defecto”** por parte de un usuario autorizado.

Al hacer clic sobre algún registro de PAROS /  **FDA** del Visor, el sistema responde  mostrando la información de ese  **FDA**, en forma detallada, en una ventana llamada Ventana Detalle.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la    tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic del mouse sobre él o se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle de Paros/Averías

![Ventana Detalle de Paros/Averías](0.images/cap10/chp10_img04.png)

En la gráfica anterior, que muestra la ventana Detalle de  **FDA**, se aprecian todos los componentes y sus respectivos contenidos. En esta ventana Detalle de PAROS /  **FDA** se encuentra toda la información relevante al PAROS /  **FDA** seleccionado en el Visor.

A continuación, se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Núm. Paro:** En este campo el sistema registra en forma automática el número del PARO /  **FDA**, sobre una base de consecutivo cronológico. El número del PARO /  **FDA** solo es asignado al concluir su proceso de Creación.

**F/H Creación:** El sistema registra automáticamente en este campo la fecha y  hora exacta en la que se registra el PARO /  **FDA** en el sistema.

**Descripción:**  En  este  campo  se  registra  una  descripción  breve  sobre  el  Paro. La descripción debe tener un tamaño no máximo de 100 caracteres. La funcionalidad de poder definir la descripción del  **FDA**, se parametriza en Administración, Valores por Defecto, en la etiqueta PAROS, la opción **“Solicitar Descripción”**.

**Estado:** Permite elegir el  estado de  seguimiento en  el  que  se  encuentra el  PA.  Las opciones de estado son: En Análisis, Cerrado Ejecutado o Cerrado con OT.
Un PARO /  **FDA** está en análisis  desde que  se  genera  hasta que  se  le da  atención  y se  finaliza  el  trabajo correctivo. Cuando se finaliza el trabajo, se define si el PARO /  **FDA** debe ser cerrado y enviado a Historia como  **FDA**, porque se pudo resolver en corto tiempo, a bajo costo y por la acción de un solo técnico de mantenimiento.
También un Paro se puede cerrar como OT, porque los costos en que se incurrió,  o  el  tiempo transcurrido,  o  el  número  de  horas  hombre  fueron  **“mayores”**, o porque la trascendencia del PARO /  **FDA** es grande en el contexto histórico del Equipo/Activo.
Al seleccionar el estado **“Cerrado como Paro”** se permite la modificación de cualquier información del PA. Mientras que, si se selecciona el estado **“Cerrado con OT”** no se permite la modificación del PA, porque toda su información se traslada automáticamente a la OT que se crea con el cierre.

**Turno:** Indica el turno laboral en el cual se produjo el paro. Se puede elegir entre  los turnos 1, 2, 3 y 4.

**Módulo/Posición:** Es un campo de información documental, variable, cuyo uso se define por  necesidades  propias  de  la  Organización. Puede  hacer  referencia  a  una  isla  de producción, a una posición dentro de una máquina, o a un proceso, en medio de los cuales se ubica el PA.

**Referencia:** En este campo se puede elegir la Referencia o producto, que se  estaba produciendo en el Equipo/Activo, en el momento en que se produjo el PA. A las  referencias es posible asignarle operaciones, por lo cual es conveniente elegir la  Referencia antes de elegir la Operación actual. Cuando se elige primero la Referencia, las operaciones que se despliegan son las que están relacionadas con ella. Una vez seleccionada la Referencia, se visualiza un link con el nombre de la Referencia seleccionada al lado derecho del botón
`<span class="iconify btn" data-icon="mdi-filter-variant">`Buscar que está contiguo a este campo. La funcionalidad de poder definir una Referencia al   **FDA**, se parametriza en Administración, Valores por Defecto, en la etiqueta PAROS, la opción **“El campo Referencia es obligatorio”**.

**Operador(a):** En este campo se debe elegir el operario, registrado en la tabla de Terceros del  módulo de Infraestructura, la persona que  estaba operando el  Equipo/Activo, en  el  momento que  se produjo el PA. Una vez seleccionado el operador, se visualiza un link con el nombre del operador seleccionado al lado derecho del botón `<span class="iconify btn" data-icon="mdi-filter-variant">`Buscar que está contiguo a este campo. Además, se puede digitar el nombre del operador, sin elegir el operario de la tabla de Terceros.

**Óp. Actual:** Permite elegir la Operación, registrada en la tabla Operaciones del módulo de
Infraestructura, que se estaba ejecutando en el momento en que se produjo el PA.

**A qué Activo:** En esta sección se pretende  identificar claramente el  Equipo/Activo  o  el  Objeto  de Mantenimiento que presentó el PA.

**Código del Activo:** En este campo se visualiza la información del código del Equipo/Activo seleccionado.

**Elección de un Equipo/Activo**:

Consiste en buscar el Equipo/Activo, a través del visor de Equipo/Activos. Para ello se da un clic sobre el icono de filtro de `<a class="btn">`Equipo/Activos `</a>` (icono de triángulo invertido).    Acto seguido se muestra la ventana de visor de Equipo/Activos junto con la de subgrupo para poder ubicarlo. Una vez se encuentra el Equipo/Activo en la Tabla de visor de Equipo/Activos, se selecciona dando un clic sobre cualquiera de sus campos. A continuación se da un clic sobre botón `<a class="btn">` Aceptar `</a>` de   esa   ventana   o   se   hace   doble   clic   sobre   el   registro   seleccionado. Inmediatamente ese código aparece en el primer campo de la línea de Equipo/Activo en la forma de registro de paros.

**Descripción:** Muestra el nombre o la descripción del Activo seleccionado. Es un campo que no es modificable por el usuario.

**FF Fin Garantía:** Muestra la fecha en la que se vence la garantía del Activo seleccionado. Si se encuentra con fecha de garantía vigente se muestra en color negro, mientras que si se encuentra con fecha de garantía vencida se muestra en color rojo. Es un campo que no es modificable por el usuario.

**Activo Fijo:** En este campo se visualiza la información del Número de Activo Fijo del
Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Código de Inventario:** En este campo se visualiza el código del inventario del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Referencia Externa (Proveedor):** En este campo se visualiza la información de la referencia del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Serial:** En  este  campo se  visualiza  la información del  Serial  del  Equipo/Activo que se  haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Alias:**   En este  campo se  visualiza la  información del  Alias  del  Equipo/Activo que  se  haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Solicitante:**   En este campo se define el nombre del Solicitante del Paro y Avería. Cuando la OT es generada desde un  **FDA**, este campo contiene el solicitante ingresado en el PA. El solicitante puede registrar su nombre en el espacio correspondiente. Sin embargo  es posible también seleccionar su nombre de la lista que se habilita como  desplegable al marcar la opción **“Incluido en Terceros”**.

**Incluido en TE (RI):** Al seleccionar esta opción, en el campo **“Solicitante”** solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura. Se debe tener  en cuenta que de la tabla de Terceros solo se despliegan los Terceros de Tipo RI. La funcionalidad de poder definir el Solicitante del  **FDA**, se  parametriza  en  Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en `<a class="btn">`Valores por defecto `</a>`, en la etiqueta de Paros, se selecciona la opción **“Preguntar Solicitante”**.

El  solicitante  del   **FDA**,  se  permite  parametrizar  para que  se  defina  el  usuario  logueado  al sistema,  bloqueando  el  campo  para  que  no  se  pueda  modificar.  Para  realizar  tal funcionalidad, se debe ir a Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en `<a class="btn">`Valores por defecto `</a>`, en la etiqueta de Paros, se selecciona la opción **“El solicitante es tomado del usuario logueado y no se puede modificar.”**.

**Correo Electrónico:** En este campo se define el correo electrónico del solicitante del  **FDA**, cuando el solicitante es digitado manualmente. Si el solicitante se selecciona con la opción **“Incluido en Terceros”** y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. La funcionalidad del envío de correos electrónicos se parametriza en Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en `<a class="btn">`Valores por defecto `</a>`, en la etiqueta de General, se selecciona la opción **“Enviar correo electrónico al solicitante”**.

**Centro de Costo:** Este campo permite seleccionar el Centro de Costo o Cliente que es responsable del Objeto de Mantenimiento. Cuando se define un Equipo u Objeto  de Mantenimiento válido, el sistema trae automáticamente a este campo el Centro de Costo asociado. Inicialmente se sugiere el Centro de Costo que tiene asociado el Activo Objeto de  Mantenimiento, aun así, puede cambiarse.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubicación Física:** Este campo permite seleccionar la   Ubicación Física en   la que  se encuentra el  Objeto de  Mantenimiento para  el  que  se  genera el PA. Cuando se  define  un  Equipo  u  Objeto  de  Mantenimiento  válido,  el   sistema  trae automáticamente a este campo la Ubicación Física asociada. Inicialmente se sugiere la Ubicación Física que tiene asociada el Activo Objeto de  Mantenimiento, aun así, puede cambiarse.

**Centro Responsable**: Se define en este campo el nombre del grupo de Mantenimiento encargado de la ejecución del PA. Para ello, se selecciona uno  de  los  Centros Responsables  que   están  definidos  en  la  tabla  de   **“Centros   Responsables”** en  la Infraestructura.

**Responsable:** En esta lista se debe elegir la persona de mantenimiento que dió atención y estuvo al frente de la solución al PA. El responsable es obligante al escoger el estado **“Cerrada Ejecutada”** o **“Cerrado con OT”**. Para ello se selecciona uno de los Responsables que están definidos en la tabla de **“Responsables”** en la Infraestructura. Al lado derecho de este campo existe una caja de selección **“Filtrar  por CR”**, que al ser marcada filtra los Responsables por el Centro Responsable previamente seleccionado.

**Filtrar por CR:** Al seleccionar esta opción, en el campo **“Responsable”** solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción **“Centro Responsable”**. En otro caso, en el campo **“Responsable”** se despliegan todos los  **“Responsables”** existentes en la tabla respectiva.

**Causa de Falla:** Una vez se solucione el PAROS /  **FDA** y se determine la causa, se debe seleccionar en esta lista la causa de la falla que ocasionó el PA. Si no existe la causa de falla en la lista que se despliega, ella se debe crear en la tabla respectiva, Causas de Falla, en el módulo de infraestructura.

**Restricción:** Indica si el Equipo/Activo que presentó el  **FDA**, es restrictivo o no. Un Equipo/Activo es restrictivo si el hecho de que pare, detiene la línea de producción a la que pertenece.

**T. Trabajo:** –AM 4G– 	predefine  (aunque  pueden  personalizarse) cuatro  tipos  de trabajo: Mecánico (MEC),  Eléctrico (ELE),  Instrumentación/Electrónica (IEL)  y  Otro (OTR). Indica los Tipos de Trabajo que se realizan en el PA. Es posible definir más de un Tipo de Trabajo para un Paro.

**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en el Paro y Avería.  Todo Paro debe poseer uno. Si en el Paro se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige **“Otro”** y a continuación, en el tipo de **“Actividad”** se especifica detalladamente, el tipo de labor.

**
** Aquí se establece el Tipo de Actividad a realizar en el Paro. La Actividad de Mantenimiento para un Paro y Avería, se elige desde la tabla **“Tipos de Actividad”** en el módulo de **“Infraestructura”**. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de **“Otro”**, en el tipo de Actividad se debe seleccionar el valor **“Mantto”**, lo que indica que se trata de una actividad que constituye mantenimiento. Si en el  campo  anterior se ha seleccionado el valor **“Otro”**, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

Los campos **“T. Trabajo, T. Mtto y T. Actividad”**, se parametrizan de forma opcional desde el módulo de Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en `<a class="btn">`Valores por defecto `</a>`, en la etiqueta de Paros, se selecciona la opción **“Solicitar datos para definir proceso (Tipo Trabajo, Tipo Mantenimiento, Tipo Actividad)”**.

**F/H Paro:** Se registra en este campo la fecha y hora exacta en la que  se informa del PARO /  **FDA** a Mantenimiento.

**F/H Atención:** Se registra en este campo la fecha y hora exacta en la que se dio atención al paro.

**F/H Inicio Trabajo:** Se registra en este campo la fecha y hora exacta en la que se dio inicio a la labor para solucionar el  PA. El trabajo correctivo da inicio una vez  que se cumplan con todos los requerimientos de la labor: Producción ha entregado el Equipo/Activo en estado de ser mantenido y Mantenimiento ha preparado todos los recursos necesarios.

**F/H Fin Trabajo:** Se registra en este campo la fecha y hora exacta en la que se culminó la labor correctiva o de reparación del Equipo/Activo, para solucionar el PA.

**F/H Cierre:** El sistema registra en este campo, automáticamente, la fecha y hora exacta en la que el usuario encargado, cambia el estado del PARO/  **FDA** a uno de los estados de cierre.

**Sugerir Fecha / Hora:** Este botón registra automáticamente la fecha y hora de creación del Paro, en los campos de F/H Paro, F/H Atención, F/H Inicio Trabajo y F/H Fin Trabajo.

**Comentarios Trabajo Realizado:** Se registra en este campo la descripción y el trabajo realizado del PA.  Es importante cuando el PARO /  **FDA** se va a cerrar con OT, y no se tiene activo el campo Descripción del  **FDA**, este campo se utiliza para determinar la descripción de la OT.

**Ir a la Orden de Trabajo generada:** Cuando el PARO /  **FDA** es cerrado con OT, el sistema crea un vínculo directo a la OT generada en el módulo de Órdenes de Trabajo. En la OT correspondiente también se crea un vínculo hacia el PAROS /  **FDA** que le dio origen.

# Ventana Submenú de Paros / Averías

## Indicadores

Es posible visualizar de manera inmediata, los PAROS /  **FDA** con Multimedia y Servicio Evaluado, directamente desde la ventana visor, a través de la columna **“Indicadores”** que muestra una pelota de color que indica si tiene asociado Multimedia y/o si tiene el Servicio Evaluado. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana visor.

![Indicadores](0.images/cap10/chp10_img05.png)

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Naranja:** PARO /  **FDA** que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
- **Azul:** PARO /  **FDA** en estado Cerrada Ejecutada al que se le realizó la evaluación del Servicio.

## Subgrupo

Se usa para seleccionar grupos de Paros y/o Averías que cumplen con un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al  `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Paros.

![paros fda](0.images/cap10/chp10_img05.png)

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Paros. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto de todos los Paros.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Paros de acuerdo con los criterios seleccionados en la siguiente ventana.

![ventana de paros fda](0.images/cap10/chp10_img06.png)

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de
Paros son los siguientes.

**1. FILTRAR POR C AMPOS DEL EQUIPO/ACTIVO ASOCI ADO AL PARO**

**AC - Alias:** Este campo preselecciona los Paros para los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines.

**AC – Cód. de Barras Int.:** Permite seleccionar los Paros que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo del subgrupo y que posea un Paro.

**AC – Cód. de Barras Prov.:** Permite seleccionar los Paros asociadas a un   Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.

**AC - Código:** Esta selección agrupa los Paros cuyos Equipo/Activos coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todos los Paros cuyo código de Equipo/Activo inicia por 341. Si se escribe %1 se seleccionan todos los Paros cuyo código de Equipo/Activo finaliza en un **“1”**. El porcentaje (%) es un carácter comodín que significa **“todos”**.

**AC-Descripción:** Selecciona los Paros asociados a los   Activos según criterios que se fundamenten  en  su  descripción.  Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra **“Motor”**.

**AC-Estado:** Este filtro permite seleccionar los PAROS /  **FDA** de acuerdo con el Estado del Activo u Objeto de Mantenimiento. Así que se pueden filtrar los PAROS /  **FDA** para los cuales el AC correspondiente está activo o inactivo.

**AC-Número Activo Fijo:** Este campo preselecciona los PAROS /  **FDA** para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines.

**AC-Referencia:** Este filtro permite seleccionar PAROS /  **FDA** de acuerdo con su número de Referencia.

**AC-Serial:** Esta alternativa permite seleccionar los Paros de acuerdo con el número serial del Equipo/Activo objeto de mantenimiento. El campo acepta comodines.

**AC-Ubicación Física:** Permite la selección de los PAROS /  **FDA** cuyo Activo se encuentre en   una   Ubicación Física   determinada.  Cuando   se   utilizan   comodines, es   posible seleccionar PAROS /  **FDA** cuyo Activo esté en una Ubicación Física  que tenga parte del nombre igual.  Por ejemplo: Cava% selecciona los PAROS /  **FDA** a Activos cuya Ubicación Física empieza por la  palabra  Cava,  independientemente  de   si  se  está  hablando  de  la  Cava  de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona los PAROS /  **FDA** asociados a los Activos que se   encuentran asociados al tipo ingresado por el usuario.

**2. FILTRAR POR C AMPOS DEL P ARO**

**Causa   de   Falla:**   El  sistema  busca  todos  los  Paros  que  tengan  registrada  la   falla seleccionada de la lista o que cumplan con el criterio de búsqueda utilizado, marcando la opción utilizar comodines.

**Centro Responsable:** Agrupa los PAROS /  **FDA** cuyo Centro responsable es el seleccionado.

**Estado del Paro:** Este criterio agrupa los PAROS /  **FDA** de acuerdo a un Estado. Al descolgar aparece el listado de todos los Estados posibles para un Paro.

**FF de Cierre:** Permite la selección de los Paros cuya fecha de Cierre se encuentren incluidas en el rango especificado en este campo, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la **“fecha  desde”**, pero no se especifica la **“fecha hasta”**, el sistema utiliza como **“fecha hasta”** la fecha actual.

**FF de  **FDA**:** Este campo preselecciona los Paros cuya fecha de Falla, Daño o Avería se encuentre en el rango especificado, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si  se especifica la **“fecha  desde”**, pero no se especifica la **“fecha hasta”**, el sistema utiliza como **“fecha hasta”** la fecha actual.

**Responsable:** Este criterio agrupa todos los Paros que  hayan sido  atendidos por  el
Responsable especificado. En este campo se pueden utilizar los comodines.

**Solicitante (Digitado manualmente):** Agrupa los Paros cuyo solicitante fue especificado manualmente en este campo. Se pueden utilizar los comodines.

**Solicitante (Incluido en TE – Tipo RI)**: Este campo permite seleccionar los Paros activos para el o los Solicitantes aquí definidos. Existen dos formas de definir el Solicitante o grupo de Solicitantes. La primera es seleccionando el  solicitante de la lista desplegable. La  segunda  es dando clic al `<span class="iconify btn" data-icon=lock>`Candado **“Utilizar  comodines”**  y digitando a continuación segmentos del nombre del Solicitante utilizando comodines.

**Tipo de Actividad:** Filtra los Paros por el Tipo de Actividad que aquí se selecciona. Existen dos formas de filtrar el Tipo de Actividad. La primera es seleccionando el Tipo de Actividad de la lista desplegable. La segunda  es dando clic  `<span class="iconify btn" data-icon=lock>`Candado **“Utilizar  comodines”**  y digitando a continuación segmentos del Tipo de Actividad utilizando comodines.

**Tipo de Mantenimiento:** Este criterio de búsqueda filtra los Paros y Averías por el Tipo de
Mantenimiento que aquí se selecciona.

**Tipo de Trabajo:** Este criterio de búsqueda filtra los Paros y Averías por el Tipo de Trabajo que aquí se selecciona.

**Referencia:** Este  campo  preselecciona  los  Paros que  tengan  registrada  la  referencia elegida.  En este campo se pueden utilizar los comodines.

## Vistas Parciales / Pestañas

### Multimedia

![ventana de paros fda](0.images/cap10/chp10_img07.png)

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al PARO /  **FDA** en cada una de sus carpetas asignadas. Esta opción permite asociar al  **FDA**, uno o varios documentos, con el  objetivo de facilitar el trabajo a  realizar,  o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** ayudas necesarias en la ejecución de la OT que se genera desde este PA: planos, manuales técnicos, manuales de normas  técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, checklists, protocolos de prueba y otra información estándar para su ejecución, en aras de optimizar los recursos de tiempo y de insumos a ser consumidos, como también en aras de preservar la  seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al  **FDA**, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Paro al cual se le están definiendo las Características.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al PA. **Ejemplo:** Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al PA. **Ejemplo:** Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al PA. Ejemplo: Videos en formato wmv, entre otros.

![ventana de paros fda](0.images/cap10/chp10_img08.png)

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono `<span class="iconify btn" data-icon="cloud-upload">`Cargar, a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir, se selecciona el archivo y se da clic en `<a class="btn">`Abrir `</a>`.
abrir.

![ventana de paros fda](0.images/cap10/chp10_img09.png)

Una vez se da clic en `<a class="btn">`Abrir `</a>`, se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón `<a class="btn">`Subir archivo `</a>`.

![ventana de paros fda](0.images/cap10/chp10_img10.png)

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, al PARO /  **FDA** se da clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura)) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón `<a class="btn">`Aceptar `</a>`.

Si se desea descargar un archivo adjunto al PARO /  **FDA**, se debe dar clic en el icono de `<span class="iconify btn" data-icon=cloud-download>`la nube con flecha hacia abajo, que se encuentra al lado derecho del archivo que se quiere descargar.

### Evaluar Servicio

Se realiza a través de la pestaña Evaluar Servicio de la ventana Detalle, la evaluación del servicio prestado por el personal de mantenimiento o de servicios, en el Paro seleccionado.  La evaluación la debe realizar un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez se ha ya cerrado el Paro. Esta opción de evaluación se hace disponible, cuando se han definido  las cinco preguntas de  evaluación,  en  **“Parámetros  para Evaluación del  Servicio”**, en **“Valores por Defecto”**, en el módulo de **“Administración”**.

![ventana paros fda](0.images/cap10/chp10_img10.png)

## Transacciones

### Enviar a Historia

A esta opción se llega al sobreponer el cursor del mouse sobre el módulo de Paros y al lado derecho se despliega el conjunto de transacciones disponibles para el módulo de Paros, luego se elige la transacción **“Enviar a Historia”**.

![paros](0.images/cap11/chp10_img10.png)

El objetivo de esta transacción es desplazar hacia el módulo de Historia de Mantenimiento, los  registros que  se  hayan  preseleccionados por  un  subgrupo, es   decir, los que se encuentran en el visor,  que además tengan estado de Cerrados y residan todavía en el módulo de Paros. Los estados de  Cierre  que  son  tomados para  este  proceso son:   Cerrada Ejecutada y Cerrado con OT.

![Ventana PAROS /  FDA (Transacciones- Enviar a Historia)](0.images/cap11/chp10_img11.png)

En  la  gráfica  anterior, Enviar a Historia, se  aprecian  sus  componentes  y   sus respectivos contenidos.

A   continuación se  describen  los  campos  que  componen  esta  Ventana   información adicional.

En la ventana aparece un botón `<a class="btn">`Enviar `</a>` y tres casillas de selección. Estas casillas  de selección parametriza los registros que se desean enviar a Historia.

**Todos los registros del visor:** Con esta opción se realiza el envío de todos los Paros existentes en la base de datos, sin importar cualquier subgrupo activo.

**Registros del visor:** Esta opción realiza el envío de todos los Paros seleccionados en el visor mediante un subgrupo.

**Registro seleccionado:** Esta opción realiza el envío del Paro que está resaltado en el visor (tiene la línea verde del cursor sobre sí).

### Exportar

Esta opción permite la exportación de los Paros y Averías que aparecen en el visor, totales o provenientes de un subgrupo, a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación.

![Ventana PAROS /  FDA (Transacciones- Exportar)](0.images/cap11/chp10_img12.png)

Al darle clic en el botón `<a class="btn">`Exportar `</a>`, se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los Paros contenidos en el visor a un archivo plano, para luego ser analizados.

Adicionalmente, es posible exportar todos los campos de la ventana Detalle de los Paros y Averías, para esto se da clic en el cuadro llamado **“Exportar Todas Las Columnas”**. También, es posible exportar uno o varios campos de la ventana Detalle de los Paros y Averías, para esto se da clic en cada uno de los cuadros que acompañan los campos.
