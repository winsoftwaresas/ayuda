---
title:  Creación de Paros
subtitle: Cómo se crea un Paro/Avería y que características tiene.
tags: [setup]
author: win
order: '08_03'
media: "../../assets/images/docs/"
---


# Creación de un Paro o FDA

Crear un  **FDA** exige en primera instancia, que el usuario tenga los permisos en el sistema para poder hacerlo. Son potenciales generadores de **FDA** los técnicos y supervisores de Producción y también los de Mantenimiento.

La creación de un  **FDA** normalmente está en manos del personal de Producción. Si no existen los medios expeditos para que Producción reporte el  **FDA**, es natural que el reporte del  **FDA** se haga por  otro medio: teléfono, alertas de sonido o visuales o un reporte persona-persona. Entonces, se concluye, que el reporte del  **FDA** puede ser registrado antes o después de   la   ejecución  de   la actividad correctiva del mismo.  Si es previo,  será Producción  el  área  encargada  del  registro,  y  si  es  posterior,  será  mantenimiento el encargado. Aunque la primera prioridad es resolver la situación de Paro/Avería. El registro del  **FDA** debería hacerse muy cercano a su ocurrencia.

Un FDA se crea bajo las condiciones de ser ejecutado bajo una sola persona, a bajo costo y en corto tiempo. También es posible, que un FDA pueda dar origen a una Órden de Trabajo, con el fin de registrar todos los recursos empleados en la ejecución (Gasto Real).

Para crear un registro FDA se debe dirigir al módulo de **Paros** en el menú principal de **AM**¨como se muestra a continuación:


![Procesar imagen](../../assets/images/cap08/chp08_img01.png)
_**Imagen 1.** Paros - Ir a Paros_

Luego de ingresar al módulo o a la Ventana Visor de Paros dirigirse a la parte superior izquierda y seleccionar el botón  <a class="btn white">NUEVO</a>. 


![Procesar imagen](../../assets/images/cap08/chp08_img02.png)
_**Imagen 2.** Paros - Visor de Paros_

A continuación se muestra la Ventana Detalle con el siguiente formulario:  


![Procesar imagen](../../assets/images/cap08/chp08_img02.png)
_**Imagen 3.** Paros - Ventana Detalle Formulario Creación FDA_

A continuación se da una breve explicación de cada campo:

**Núm. Paro:** En este campo el sistema registra en forma automática el número del PARO / FDA, sobre una base de consecutivo cronológico. El número del PARO / FDA solo es asignado al concluir su proceso de Creación. 

**F/H Creación:** El sistema registra automáticamente en este campo la fecha y  hora exacta en la que se registra el PARO / FDA en el sistema.

**Descripción:**  En  este  campo  se  registra  una  descripción  breve  sobre  el  FDA. La descripción debe tener un tamaño no máximo de 100 caracteres. 

**Estado:** Permite elegir el estado de  seguimiento en  el  que  se  encuentra el  FDA.  Las opciones de estado son: En Análisis, Cerrado Ejecutado y Cerrado con OT. 
Un PARO/FDA está en análisis  desde que  se  genera  hasta que  se  le da  atención  y se  finaliza  el  trabajo correctivo, luego, se define si el PARO / FDA debe ser cerrado y enviado a Historia como FDA, porque se pudo resolver en corto tiempo, a bajo costo y por la acción de un solo técnico de mantenimiento.  
También un Paro se puede cerrar como OT, porque los costos en que se incurrió,  o  el  tiempo transcurrido,  o  el  número  de  horas  hombre  fueron  “mayores”, o porque la trascendencia del PARO / FDA es grande en el contexto histórico del Equipo/Activo. 
Al seleccionar el estado “Cerradoa 
Ejecutada” se permite la modificación de cualquier información del PA/FDA. Mientras que, si se selecciona el estado “Cerrado con OT” no se permite la modificación del PA, porque toda su información se traslada automáticamente a la OT que se crea con el cierre.

**Turno:** Indica el turno laboral en el cual se produjo el paro. Se puede elegir entre  los turnos 1, 2, 3 y 4.

**Módulo/Posición:** Es un campo de información documental, variable, cuyo uso se define por  necesidades  propias  de  la  Organización. Puede  hacer  referencia  a  una  isla  de producción, a una posición dentro de una máquina, o a un proceso, en medio de los cuales se ubica el FDA.

**Referencia:** En este campo se puede elegir la Referencia o producto, que se  estaba produciendo en el Equipo/Activo, en el momento en que se produjo el FDA. A las  referencias es posible asignarle operaciones, por lo cual es conveniente elegir la  Referencia antes de elegir la Operación actual. Cuando se elige primero la Referencia, las operaciones que se despliegan son las que están relacionadas con ella.
 
**Operador(a):** En este campo se debe elegir el operario, lista proveniente de la tabla de Terceros del  módulo de Infraestructura, la persona que  estaba operando el  Equipo/Activo, en  el  momento que  se produjo el FDA. 

**Op. Actual:** Permite elegir la Operación, registrada en la tabla Operaciones del módulo de
Infraestructura, que se estaba ejecutando en el momento en que se produjo el FDA.

**A qué Activo:** En esta sección se pretende  identificar claramente el  Equipo/Activo  o  el  Objeto  de Mantenimiento que presentó el PA.

**Código del Activo:** En este campo se visualiza la información del código del Equipo/Activo seleccionado.

**Elección de un Equipo/Activo:**

Consiste en buscar el Equipo/Activo, a través del visor de Equipo/Activos. Para ello se da un clic sobre el subgrupo .    Acto seguido se muestra la ventana de visor de Equipo/Activos junto con la de subgrupo para poder ubicarlo. Una vez se encuentra el Equipo/Activo en la Tabla de visor de Equipo/Activos, se selecciona dando un clic sobre cualquiera de sus campos. A continuación se da un clic sobre botón “Aceptar” de   esa   ventana   o   se   hace   doble   clic   sobre   el   registro   seleccionado. Inmediatamente ese código aparece en el primer campo de la línea de Equipo/Activo en la forma de registro de paros. 

Descripción: Muestra el nombre o la descripción del Activo seleccionado. Es un campo que no es modificable por el usuario.

FF Fin Garantía: Muestra la fecha en la que se vence la garantía del Activo seleccionado. Si se encuentra con fecha de garantía vigente se muestra en color negro, mientras que si se encuentra con fecha de garantía vencida se muestra en color rojo. Es un campo que no es modificable por el usuario.

Activo Fijo: En este campo se visualiza la información del Número de Activo Fijo del
Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

Código de Inventario: En este campo se visualiza el código del inventario del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

Referencia Externa (Proveedor): En este campo se visualiza la información de la referencia del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

Serial: En  este  campo se  visualiza  la información del  Serial  del  Equipo/Activo que se  haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

Alias:   En este  campo se  visualiza la  información del  Alias  del  Equipo/Activo que  se  haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

Solicitante:   En este campo se define el nombre del Solicitante del Paro y Avería. Cuando la OT es generada desde un FDA, este campo contiene el solicitante ingresado en el PA. El solicitante puede registrar su nombre en el espacio correspondiente. Sin embargo  es posible también seleccionar su nombre de la lista que se habilita como  desplegable al marcar la opción “Incluido en Terceros”.     

Incluido en TE (RI): Al seleccionar esta opción, en el campo “Solicitante” solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura. Se debe tener  en cuenta que de la tabla de Terceros solo se despliegan los Terceros de Tipo RI. La funcionalidad de poder definir el Solicitante del FDA, se  parametriza  en  Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en “Valores por defecto”, en la etiqueta de Paros, se selecciona la opción “Preguntar Solicitante”.

El  solicitante  del  FDA,  se  permite  parametrizar  para que  se  defina  el  usuario  logueado  al sistema,  bloqueando  el  campo  para  que  no  se  pueda  modificar.  Para  realizar  tal funcionalidad, se debe ir a Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en “Valores por defecto”, en la etiqueta de Paros, se selecciona la opción “El solicitante es tomado del usuario logueado y no se puede modificar.”.

Correo Electrónico: En este campo se define el correo electrónico del solicitante del FDA, cuando el solicitante es digitado manualmente. Si el solicitante se selecciona con la opción “Incluido en Terceros” y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. La funcionalidad del envío de correos electrónicos se parametriza en Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en “Valores por defecto”, en la etiqueta de General, se selecciona la opción “Enviar correo electrónico al solicitante”. 

Centro de Costo: Este campo permite seleccionar el Centro de Costo o Cliente que es responsable del Objeto de Mantenimiento. Cuando se define un Equipo u Objeto  de Mantenimiento válido, el sistema trae automáticamente a este campo el Centro de Costo asociado. Inicialmente se sugiere el Centro de Costo que tiene asociado el Activo Objeto de  Mantenimiento, aun así, puede cambiarse.

Sub CC: Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido. 

Ubicación Física: Este campo permite seleccionar la   Ubicación Física en   la que  se encuentra el  Objeto de  Mantenimiento para  el  que  se  genera el PA. Cuando se  define  un  Equipo  u  Objeto  de  Mantenimiento  válido,  el   sistema  trae automáticamente a este campo la Ubicación Física asociada. Inicialmente se sugiere la Ubicación Física que tiene asociada el Activo Objeto de  Mantenimiento, aun así, puede cambiarse.

Centro Responsable: Se define en este campo el nombre del grupo de Mantenimiento encargado de la ejecución del PA. Para ello, se selecciona uno  de  los  Centros Responsables  que   están  definidos  en  la  tabla  de   “Centros   Responsables” en  la Infraestructura.

Responsable: En esta lista se debe elegir la persona de mantenimiento que dió atención y estuvo al frente de la solución al PA. El responsable es obligante al escoger el estado “Cerrada Ejecutada” o “Cerrado con OT”. Para ello se selecciona uno de los Responsables que están definidos en la tabla de “Responsables” en la Infraestructura. Al lado derecho de este campo existe una caja de selección “Filtrar  por CR”, que al ser marcada filtra los Responsables por el Centro Responsable previamente seleccionado.

Filtrar por CR: Al seleccionar esta opción, en el campo “Responsable” solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción “Centro Responsable”. En otro caso, en el campo “Responsable” se despliegan todos los  “Responsables” existentes en la tabla respectiva.

Causa de Falla: Una vez se solucione el PAROS / FDA y se determine la causa, se debe seleccionar en esta lista la causa de la falla que ocasionó el PA. Si no existe la causa de falla en la lista que se despliega, ella se debe crear en la tabla respectiva, Causas de Falla, en el módulo de infraestructura.

Restricción: Indica si el Equipo/Activo que presentó el FDA, es restrictivo o no. Un Equipo/Activo es restrictivo si el hecho de que pare, detiene la línea de producción a la que pertenece.

T. Trabajo: –AM 4G– 	predefine  (aunque  pueden  personalizarse) cuatro  tipos  de trabajo: Mecánico (MEC),  Eléctrico (ELE),  Instrumentación/Electrónica (IEL)  y  Otro (OTR). Indica los Tipos de Trabajo que se realizan en el PA. Es posible definir más de un Tipo de Trabajo para un Paro. 

T. Mtto: Este campo indica el Tipo de Mantenimiento a realizar en el Paro y Avería.  Todo Paro debe poseer uno. Si en el Paro se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige “Otro” y a continuación, en el tipo de “Actividad” se especifica detalladamente, el tipo de labor. 

T. Actividad: Aquí se establece el Tipo de Actividad a realizar en el Paro. La Actividad de Mantenimiento para un Paro y Avería, se elige desde la tabla “Tipos de Actividad” en el módulo de “Infraestructura”. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento). Si en el campo anterior se ha hecho la selección de un valor diferente de “Otro”, en el tipo de Actividad se debe seleccionar el valor “Mantto”, lo que indica que se trata de una actividad que constituye mantenimiento. Si en el  campo  anterior se ha seleccionado el valor “Otro”, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar. 

Los campos “T. Trabajo, T. Mtto y T. Actividad”, se parametrizan de forma opcional desde el módulo de Administración, se sobrepone el mouse en una compañía de la lista que se muestra y se da clic en “Valores por defecto”, en la etiqueta de Paros, se selecciona la opción “Solicitar datos para definir proceso (Tipo Trabajo, Tipo Mantenimiento, Tipo Actividad)”.




F/H Paro: Se registra en este campo la fecha y hora exacta en la que  se informa del PARO / FDA a Mantenimiento.

F/H Atención: Se registra en este campo la fecha y hora exacta en la que se dio atención al paro.

F/H Inicio Trabajo: Se registra en este campo la fecha y hora exacta en la que se dio inicio a la labor para solucionar el  PA. El trabajo correctivo da inicio una vez  que se cumplan con todos los requerimientos de la labor: Producción ha entregado el Equipo/Activo en estado de ser mantenido y Mantenimiento ha preparado todos los recursos necesarios.

F/H Fin Trabajo: Se registra en este campo la fecha y hora exacta en la que se culminó la labor correctiva o de reparación del Equipo/Activo, para solucionar el PA.

F/H Cierre: El sistema registra en este campo, automáticamente, la fecha y hora exacta en la que el usuario encargado, cambia el estado del PARO/ FDA a uno de los estados de cierre.

Sugerir Fecha / Hora: Este botón registra automáticamente la fecha y hora de creación del Paro, en los campos de F/H Paro, F/H Atención, F/H Inicio Trabajo y F/H Fin Trabajo. 

Comentarios Trabajo Realizado: Se registra en este campo la descripción y el trabajo realizado del PA.  Es importante cuando el PARO / FDA se va a cerrar con OT, y no se tiene activo el campo Descripción del FDA, este campo se utiliza para determinar la descripción de la OT.

Ir a la Orden de Trabajo generada: Cuando el PARO / FDA es cerrado con OT, el sistema crea un vínculo directo a la OT generada en el módulo de Órdenes de Trabajo. En la OT correspondiente también se crea un vínculo hacia el PAROS / FDA que le dio origen.

