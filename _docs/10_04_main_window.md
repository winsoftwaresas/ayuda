---
title: Ventana Principal
subtitle: en esta seccion encontrará el el instructivo de el funcionamiento
  adecuado  de cada ventana que compone esta seccion en el programa am4g.
author: win
order: 10_04
date: 2022-03-28T20:34:50.748Z
---
# Ventana Principal de Historia de Mantenimiento

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap10/chp010_img01.png)
_**Imagen 145.** Historia - Ventana Visor_

A esta ventana se llega haciendo clic sobre la opción Historia del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar la Historia de Mantenimiento. A continuación se ilustran las porciones que la componen.

## Ventana Visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap10/chp010_img02.png)
_**Imagen 146.** Historia - Ventana Visor_

Se accede directamente desde la ventana principal de Historia de Mantenimiento.


Desde esta ventana es posible observar la Historia de Mantenimiento activa, existente o un subconjunto de ellas (efectuado a través de un subgrupo). El conjunto de Órdenes de Trabajo Históricas disponible a ser desplegado se muestra a través de páginas. El tamaño de las páginas es configurable desde la opción Administración del menú principal, en la sección “Valores por Defecto” por parte de un usuario autorizado.


Al hacer clic sobre alguna de las Órdenes de Trabajo Históricas del Visor el sistema responde mostrando la información de esa OT, en forma detallada, en una ventana llamada Ventana Detalle.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic del mouse sobre él o se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap10/chp010_img03.png)
_**Imagen 147.** Historia - Ventana Visor_

En la gráfica anterior, Ventana Detalle de Órdenes Históricas, se aprecian sus componentes y sus respectivos contenidos. En esta ventana se encuentra la información relevante a la OT histórica seleccionada en el Visor. A través de ella se administran los datos genéricos y también es posible modificar la información de una OT Histórica. Por supuesto que, para ello se requieren permisos especiales, que pueden ser proporcionados por el Administrador.

A continuación, se describen los campos que componen esta ventana Detalle de Órdenes de Trabajo Históricas. Sobre cada campo se da una breve explicación:

**OT:** Aparece el número de OT asignado por AM a la OT en el momento en que se generó.

**F/H Creación:** Es la fecha en la cual se crea la Orden de Trabajo Histórica. En el caso de Órdenes Programadas, esta fecha fue asignada automáticamente por el sistema y no es modificable, según el Programa de Mantenimiento que la genera. Para las Órdenes de Trabajo Histórica Manuales, – AM4G – asigna automáticamente la fecha actual del sistema.

**Descripción:** Es un texto corto por medio del cual se indica la naturaleza de la labor a realizar. Debe ser conciso y no dar lugar a ambigüedades, este campo tiene una longitud de 100 caracteres. Se recomienda definir la descripción bajo la siguiente norma: iniciar con un verbo en infinitivo: revisar, corregir, inspeccionar, conectar, etc., continuar con el Objeto de mantenimiento o Activo/Equipo y finalizar con un complemento explicatorio. Ejemplos: Revisar la transmisión delantera del sistema. Cambiar a los rodillos la cobertura de caucho.

**Prioridad:** Es un número de 1 a 7 que indica la prioridad de realización de la OT. Normalmente 1 significa un trabajo de gran urgencia, mientras que 7 es una labor de baja prioridad.

**F/H Programada:** En este campo se ingresa la fecha programada o fecha tentativa para ejecutar la OT.

**Referencia:** En este campo se puede ingresar el número de un documento, que sirve como referencia o relación a la OT; ejemplo: Número de una factura, número de una orden de Compra asociada, o un documento interno de despacho de almacén, etc.

**Estado:** Este campo está bloqueado y muestra el nombre del Estado de la OT. Los tres posibles estados son: Cerrada Ejecutada, Cerrada Retroalimentada (para registros que se han editado) y Canceladas.

**Código del Activo:** Aquí se establece el Objeto de Mantenimiento, aquel Activo al que se le realizó la labor. Este se escoge bien sea digitando directamente el Código (seguido de la tecla tabular) y como resultado, se muestra la descripción del Equipo/Activo seleccionado al lado derecho del campo código Activo. La segunda opción es seleccionándolo con el icono de filtro <span class="mdi mdi-filter-variant"></span>. Acto seguido se muestra la ventana de visor de Activos allí también se puede filtrar o hacer subgrupos. Una vez se encuentra el Activo se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">Aceptar</a> de esa ventana o se hace doble clic sobre el registro seleccionado. Inmediatamente ese código aparece en el primer campo de la línea de Activo con su respectiva información registrada en el módulo de Activos.

**Descripción:** Muestra el nombre o la descripción del Activo seleccionado. Es un campo que no es modificable por el usuario.

**FF Fin Garantía:** En este campo se visualiza la fecha de fin de garantía del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Activo Fijo:** En este campo se visualiza la información del Número de Activo Fijo del Equipo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Código de Inventario:** En este campo se visualiza el código del inventario del Equipo/Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Referencia Externa Proveedor:** En este campo se visualiza la información de la referencia del Activo que se ha ya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Serial:** En este campo se visualiza la información del Serial del Equipo/Activo que se haya establecido en la ficha técnica de este m ismo. Es un campo que no es modificable por el usuario.

**Alias:** En este campo se visualiza la información del Alias del Activo que se ha ya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

**Solicitante:** En este campo se define el nombre del Solicitante de la OT. El solicitante puede registrar su nombre en el espacio correspondiente. Sin embargo, es posible también seleccionar su nombre de la lista que se habilita como desplegable al marcar la opción <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> incluido en TE (RI)</span></a>. Se debe tener en cuenta que de la tabla de Terceros solo se despliegan los Terceros de Tipo RI. El nombre del solicitante usuario de AMSi se registra automáticamente desde la creación de la solicitud. 

**Incluido en TE (RI):** Al seleccionar esta opción, en el campo **Solicitante** solo se despliegan los Terceros o Responsables Internos existentes en la tabla de Terceros en infraestructura.

**Correo Electrónico:** En este campo se define el correo electrónico del Solicitante de la OT, cuando el solicitante es digitado manualmente o bien aparece el correo asociado al usuario de AMSi. Si el solicitante se selecciona con la opción <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> incluido en TE (RI)</span></a> y allí se tiene definido el correo electrónico, automáticamente se carga a este campo el e-mail definido en el módulo de Terceros. La funcionalidad del envío de correos electrónicos se parametriza en Administración y con la colaboración de Win Software.

**Centro de Costo:** Es el Centro de Costo asignado a la OT, que corresponde a uno de los Centros de Costo predefinidos en la tabla respectiva, y que es el "cliente" que es responsable del objeto de mantenimiento. Cuando se define un Equipo u Objeto de Mantenimiento válido, el sistema trae automáticamente a este campo el Centro de Costo asociado. Inicialmente se sugiere el Centro de Costo que tiene asociado el Activo Objeto de Mantenimiento, aun así, puede cambiarse.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubi. Física:** Es el lugar físico en el que se realiza la labor. Este campo permite seleccionar la Ubicación Física en la que se encuentra el Objeto de Mantenimiento para el que se genera la OT. Cuando se define un Equipo u Objeto de Mantenimiento válido, el sistema trae automáticamente a este campo la Ubicación Física asociada. Inicialmente se sugiere la Ubicación Física que tiene asociada el Activo Objeto de Mantenimiento, aun así, puede cambiarse.

**Centro Responsable:** Se define en este campo el nombre del grupo de Mantenimiento encargado de la ejecución de la OT. Para ello se selecciona uno de los Centros Responsables que están definidos en la tabla de “Centros Responsables” en la Infraestructura.

**Responsable ejecutor:** En este campo se elige a la persona, natural o jurídica, Responsable por la labor a ejecutar, que verificará el estado del Equipo u Objeto de Mantenimiento. Para ello se selecciona uno de los Responsables que están definidos en la tabla de “Responsables” en la Infraestructura. Al lado derecho de este campo existe un cuadro de selección <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"> incluido en TE (RI)</span></a>, que al ser marcado filtra los Responsables por el Centro Responsable previamente seleccionado. El responsable es obligante al escoger el estado “Cerrada Ejecutada”.

**Filtrar por CR:** Al seleccionar esta opción, en el campo **“**Responsable **”** solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción **“**C. Responsable **”**. En  otro  caso,  en  el  campo  **“**Responsable **”**  se  despliegan  todos   los  **“**Responsables **”** existentes en la tabla respectiva.

**Contrato:** Se selecciona el contrato que se despliega de la lista.

**Responsable por la institución:** En este campo se elige a la persona de la institución, que acompañará y/o recibirá la labor prestada por el Responsable ejecutor, cuando este sea un Contratista o Servicio Externo.

**T. Trabajo:** Indica los Tipos de Trabajo que se realizan en la **OT**.   Es posible  definir más de un Tipo de Trabajo para una Orden.

**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en la Orden de Trabajo. Toda **OT** debe poseer uno. Si en la **OT** se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige **“**Otro **”** y a  continuación, en el tipo de **“**Actividad **”** se especifica detalladamente, el tipo de labor.

**T. Actividad:** Aquí se establece el Tipo de Actividad a realizar en la **OT**.   La Actividad de Mantenimiento para una **OT** Manual, se elige desde la tabla 	**“**Tipos  de  Actividad **”** en el módulo de **“**Infraestructura **”**.   Este campo trabaja en  coordinación con el anterior (Tipo de Mantenimiento).  Si en el campo anterior se ha hecho la selección de un valor diferente de **“**Otro **”**, en el tipo de Actividad se debe seleccionar el valor **“**MN: Mantto **”**, lo que indica que se  trata  de  una  actividad  que  constituye mantenimiento. 	Si  en  el campo  anterior se ha seleccionado el valor **“**Otro **”**, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

Es posible definir una Actividad, por defecto, en **“**Administración **”**, **“**Valores por defecto **”**. Este valor se usa como estándar, al definir una **OT** m anual.

**F/H Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la
Fecha y hora del daño, falla o avería.  La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas).  Cabe anotar, que la fecha y hora consignadas 	corresponden 	 al 	m omento 	en	que	se informó  del daño o  falla  a Mantenimiento, así que es posible que el daño haya ocurrido en una fecha/hora   anterior. Sin   embargo se debe  procurar, administrativamente,   que Mantenim iento se entere lo más pronto posible de la Fecha y Hora reales del paro.

**T.  Estimado:** Es un campo netamente informativo, e indica de manera  aproximada cuánto Tiempo  demora  la  labor.	Se  establece  el  número  y  a   continuación  el período de tiempo que representa (Días, Horas o Minutos).

**Tiempo Improductivo:** En este campo indica la persona o personas encargadas (s) de realizar la labor, si debe pararse el Equipo para proceder a la realización de la misma.  Cuando se dice que el Equipo genera Tiempo Improductivo significa que no está en operación, y por lo tanto,  posiblemente improductivo.  Este campo se tiene en cuenta al momento de cerrar la **OT**: si el indicativo de Tiempo Improductivo está habilitado, el –AM 4G- calcula y carga el Tiempo Improductivo al equipo. En caso contrario no lo hace.

**Criterio:** Es un campo informativo que despliega el criterio utilizado por -AM 4G- para haber generado la **OT**. (Solamente para Órdenes de Trabajo Programadas).

**Tarea:**  Este  campo  informativo, permite  establecer,  a  través  del  ordinal  de  la  tarea que muestra, cual fue el PM que generó la **OT** actual. Es válido solamente  en  el caso de Órdenes Program adas.

**Control  Presupuestal:** Esta  Opción permite  definir  si  la  Orden  de  Trabajo maneja Presupuesto. Para las Órdenes de Trabajo Programadas, esta opción  siempre está  seleccionada, pero  aparece protegida,   ya  que  toda  **OT**   Programada  conlleva el Presupuesto Aprobado.

Para  las  Órdenes  de  Trabajo  Manuales,  esta  opción se  establece en  el  m omento  de creación de la misma.  Esta elección se debe m arcar antes de darle clic al botón `<a class="btn">`Insertar `</a>`, de otra f orma, -AM 4G- asume que la **OT** no va a requerir Control Presupuestal y la posibilidad de hacer la marcación se inactiva en el acto.

Cuando una Orden de Trabajo Manual exige control presupuestal, y el presupuesto no ha sido aprobado, no es posible registrar ni modificar el Gasto Real en ella.

**Comentarios:** Esta opción se usa para ingresar los nuevos comentarios referentes a toda la ejecución de la **OT**. Al dar clic al botón `<a class="btn">`Agregar Comentario `</a>` aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario.

**Este espacio de comentarios sirve para dos efectos:**

Cuando  se  genera  la   **OT**,  como  comentarios  a  priori,  para  especificar  referencias    importantes o ayudas previstas y necesarias en la ejecución posterior de la **OT**: planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o  de especificaciones detalladas; normas de seguridad o enfoques de acción.  Sin embargo, en la gran mayoría de  los casos se utiliza la pestaña Multimedia para registrar estos datos.
Cuando ha concluido la ejecución de la **OT**, es posible utilizarlo para registrar hechos   interesantes acerca de la misma ejecución, como el estado del equipo antes de la intervención, detalles de la intervención, estado del mismo equipo  después de ella, recomendaciones a  los   usuarios  del  equipo,  recomendaciones  a  las  personas de mantenimiento y otros conceptos interesantes a juicio de los ejecutantes.

**Contrato:** Para el caso de Órdenes de Trabajo programadas, que se hayan  generado desde un PM asociado a un Contrato que esté vencido o a punto de vencerse, -AM 4G- informa al  respecto,  en el campo **“**Comentarios **”** junto con la Fecha de vencimiento de aquel.

# Ventana Submenú de Historia de Mantenimiento

## Subgrupo

Se usa para seleccionar grupos de Órdenes de Trabajo Históricas que cumplen con un conjunto de criterios o filtros definibles aquí, con el objeto de lograr un estudio posterior sobre ellos.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas las Órdenes de Trabajo Históricas.  Lo que significa que de no escoger un criterio se  obtiene como resultado del  subgrupo el  mismo conjunto completo de  todas las  Órdenes de  Trabajo Históricas.

**–AM 4G** permite entonces hacer selección de un grupo de **OTs** Históricas, de acuerdo con los criterios seleccionados en la próxima gráfica.

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana
Subgrupo (Próxima gráfica) son los siguientes.

!![Ventana Submenú de Historia de Mantenimiento](0.images/cap11/chp11_img03.png)

**1. FILTRAR POR TIPO DE REGISTRO**

**Tipo  de  Registro:**  Tres tipos de registros   conforman la Historia de  Mantenimiento: Solicitudes  de  Servicio,  Órdenes  de  Trabajo  y  Paros/Averías.   Con  este  filtro  se seleccionan los registros de un tipo, de todos los tipos o de alguna combinación de ellos.

**2. FILTRAR POR C AMPOS DEL ACTIVO ASOCI ADO A LA ORDEN DE TRABAJO, PARO O SOLICITU DE SERVICIO**

**AC-Activo Fijo:** Este campo preselecciona las Órdenes de Trabajo Históricas para el o los
Equipos cuyo Número de Activo corresponda a los valores aquí definidos.   En este campo se pueden utilizar los comodines.

**AC-Alias:** Este campo preselecciona las Órdenes de Trabajo Históricas para los Equipos cuyo Alias corresponda a los valores aquí definidos.	En este campo se pueden  utilizar los comodines.

**AC-Código:**  Esta  selección  agrupa  las  **OTs**  Históricas  cuyos  Equipos  coincidan  con  el relacionado en este criterio. Por ejemplo: si se escribe 341%, se seleccionan todas las **OTs** Históricas cuyo código de Equipo inicia por 341. Si se escribe _ _1% se seleccionan
todas las **OTs** Históricas cuyo código de Equipo inicia por cualquier par de valores pero en su tercera posición tienen un 1. El porcentaje (%) es un carácter comodín que significa **“**todos **”**.

**AC-Código  de  Barras Interno:** Permite seleccionar las **OTs** Históricas que se  encuentran asociadas al Activo/ Equipo que  se encuentre con el Código de Barras  Interno que el usuario ingresa en este campo del subgrupo.

**AC-Código  de  Barras  Proveedor:** Permite seleccionar las **OTs** Históricas asociadas a  un Activo/ Equipo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo/ Equipo.

AC-Descripción: Selecciona las  **OTs**  Históricas que  se  encuentran relacionadas con  los
Activos / Equipos según los criterios que se fundamentan en su descripción. Ejemplo:
%Motor% selecciona todas las  **OTs** que son asociadas a los que Activos / Equipos en
cuya descripción, en cualquier posición, tengan la palabra **“**Motor **”**.

**AC-Referencia:** Esta opción permite seleccionar las **OTs** Históricas de cuyos Equipos la Referencia coincide con la definida en este criterio.

**AC-Serial:** Esta alternativa permite seleccionar las **OTs** Históricas de cuyos Equipos el serial coincide con el definido en este criterio.

**AC-Tipo:** Selecciona las **OTs** Históricas que se encuentran asociadas con los Activos/ Equipos que se encuentran ligados al Tipo ingresado por el usuario.

**3. FILTRAR POR C AMPOS DE LA ORDEN DE TRABAJO**

**Acción Técnica:** Filtra las **OTs** Históricas a las cuales se le definió la Acción Técnica seleccionada en esta opción; es posible utilizar comodines.

**Causa de Cierre:** Permite buscar las **OTs** Históricas que tienen la Causa de Cierre específica, seleccionada en este criterio.

**Causa de Falla:** Permite buscar las **OTs** Históricas que tienen la Falla específica, seleccionada en este criterio.

**Centro de Costo:** Permite la selección de **OTs** Históricas, de acuerdo con el Centro de Costo asignado a ellas. Cuando se utilizan comodines, es posible seleccionar  las  **OTs** Históricas, pertenecientes a Centros de Costo que tengan parte del  nombre  igual. Por ejemplo: Sistema% selecciona todas las **OTs** Históricas en cuyo Centro de Costo tengan
la palabra sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Centro responsable:** Agrupa las **OTs** Históricas asociadas al Centro Responsable definido en este criterio.

**Comentario:** Filtra las **OTs** Históricas que cumplan con la opción de poseer comentario. Este es un campo para ingresar el comentario que se desee buscar

**Contiene Comentario:** Filtra los registros que cumplan con la opción seleccionada **“**Con
Comentario **”** o **“**Sin Comentario **”**.

**Contrato:** Permite filtrar las **OTs** Históricas que estén asociadas al Contrato definido en este criterio.

**Criterio de Generación:** Permite visualizar el subconjunto de **OTs** Históricas definidos con el Criterio de Programación **“**X **”**; así que se pueden listar en el visor de Historia, aquellas **OTs**  que  fueron definidos con Criterio de   Programación trimestral, o   mensual,  o  por Contador, o por incremento entre otros.

**Descripción:** Este opción permite seleccionar las **OTs** Históricas que cumplan con el criterio de selección establecido en este campo, es posible utilizar la funcionalidad de comodines.

**Efecto de Falla:** Este campo permite seleccionar las **OTs** Históricas que posean  una causa de falla específica.

**Estado General:** Permite seleccionar las **OTs** Históricas de acuerdo con su estado de cierre: **“**Cerradas **”** que fueron normalmente ejecutadas o  **“**Canceladas **”**.

**Estado Particular:** Permite seleccionar las **OTs** Históricas de acuerdo con su estado.  Al descolgar aparece el listado de todos los estados posibles para una Orden de  Trabajo Histórica.

**Fecha de Cierre:** Este criterio filtra las Órdenes de Trabajo Históricas por un rango de la Fecha de Cierre. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo Históricas cuya fecha de cierre esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar
el campo **“**Hasta **”**, se buscan las **OTs** Históricas cuya fecha de cierre esté en un lapso posterior a la digitada en **“**Desde **”**.

Fecha de Consumo Materiales: Este criterio filtra las Órdenes de Trabajo Históricas por un rango de la Fecha de consumo de materiales en el Gasto Real de la **OT**.  Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo cuya fecha de consumo de materiales esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** cuya fecha de consumo de materiales esté en un lapso posterior a la digitada en **“**Desde **”**.

**Fecha de Consumo Mano de Obra:** Este criterio filtra las Órdenes de Trabajo Históricas por un rango de la Fecha de consumo de mano de obra en el Gasto  Real de la **OT**. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo cuya fecha de consumo de mano de obra esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en **“**Desde **”**.

**Fecha de Daño:** Este criterio filtra las **OTs** Históricas por un rango de la Fecha de Daño. Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo  Históricas  cuya fecha de Daño esté en el lapso anterior a la fecha digitada en  **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** Históricas cuya fecha de Daño esté en un lapso posterior a la digitada en **“**Desde **”**.

**Fecha de Fin de Trabajos:** Este criterio filtra las **OTs** Históricas por un rango de la Fecha de Fin de Trabajos. Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo Históricas cuya fecha de fin de trabajos esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** Históricas cuya fecha de fin de trabajos esté
en un lapso posterior a la digitada en **“**Desde **”**.

**Fecha  Programada:** Este criterio filtra las  **OTs**  Históricas por  un  rango de  la  Fecha Programada. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo Históricas cuya fecha programada esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** Históricas cuya fecha  de  programación esté en un lapso posterior a la digitada en **“**Desde **”**.

**Fecha de Inicio de Trabajos:** Este criterio filtra las **OTs** Históricas por un rango  de  la Fecha de Inicio de Trabajos. Aparecen dos campos: Desde y Hasta.  En cada uno de ellos se digita una fecha. De no digitar el campo **“**Desde **”**, se buscan las Órdenes de Trabajo Históricas cuya fecha de inicio esté en el lapso anterior a la fecha digitada en **“**Hasta **”**. De no digitar el campo **“**Hasta **”**, se buscan las **OTs** Históricas cuya fecha de inicio esté en un lapso posterior a la digitada en **“**Desde **”**.

**Gasto Real Mano Obra:** Al seleccionar esta opción se habilita una lista desplegable donde se escoge un operador. Al lado hay un cuadro donde se digita el valor de comparación.
Los operadores son: Igual (=), Mayor (>) y Menor (<).  El criterio consiste en seleccionar
las **OTs** Históricas cuyo costo total de mano de Obra es <, =, o > al valor digitado en el cuadro. Ejemplo: si se escoge el criterio Mayor (>) y la cantidad que se digita es 100.000, eso significa, que se desea agrupar todas las **OTs** Históricas cuyo Gasto Real de Mano de Obra es Mayor a Cien Mil Pesos.

**Número de la **OT**:** Permite filtrar **OTs** Históricas, con base en su número consecutivo. Para ello se define en el  criterio un rango.   Aparecen cuatro  campos,  para ubicar el comienzo  del  rango   **“**Desde **”**  (Año-Consecutivo)  y  el  fin   del  rango  **“**Hasta **”**  (Año- Consecutivo).   De no digitar los campos **“**Desde **”**, se  buscan las **OTs** Históricas cuyo número es inferior al digitado en **“**Hasta **”**. De no digitar los campos **“**Hasta **”**, se buscan las **OTs** Históricas cuyo número es posterior al digitado en **“**Desde **”**.

**Prioridad:** Permite hacer subgrupo de **OTs** Históricas, cuya prioridad es la seleccionada en este criterio.

**Referencia:** Esta opción permite seleccionar las **OTs** Históricas que tienen asociado el valor seleccionado, en el campo Referencia. Es posible utilizar comodines.

**Repuesto:** Selecciona las **OTs** Históricas en las que se realizaron consumos del Repuesto seleccionado. En esta opción se puede utilizar comodines.

**Responsable:** Selecciona las **OTs** Históricas de acuerdo al Responsable de la Orden de
Trabajo.

**Responsable en Gasto Real:** Permite la preselección de las **OTs** Históricas cuyo
Responsable está definido en la mano de obra del gasto real.

**Solicitante (Digitado Manualmente):** Permite la preselección de las **OTs** Históricas cuyo Solicitante fue especificado manualmente, y coincide con el definido en este campo. Se pueden utilizar los comodines.

Solicitante (Incluido en terceros - Tipo RI) Permite la preselección de las **OTs** Históricas cuyo Solicitante fue seleccionado de  la tabla de terceros (como RI) y  coincide con el definido en este criterio.   Existen dos formas de definir el Solicitante o grupo de Solicitantes en este criterio: La primera es seleccionándolo de la lista desplegable.  La segunda es marcando la caja de selección **“**Utilizar comodines **”** y digitando a continuación segmentos del nombre del Solicitante, utilizando comodines.

**Tipo de Actividad:** Filtra las **OTs** Históricas por Tipo de Actividad.

**Tipo de Mantenimiento:** Filtra las Órdenes de Trabajo Históricas por Tipo de
Mantenimiento.

**Tipo de Trabajo:** Agrupa las **OTs** Históricas de acuerdo al tipo de trabajo que realizaron. Utilizando la opción **“**Individualizar **”** es posible filtrar las Órdenes de  Trabajo que tienen uno y solo un tipo de trabajo. De no activar la opción **“**Individualizar **”**, se buscan las **OTs** Históricas, que tengan el tipo de trabajo seleccionado, sin importar si tienen otros tipos de trabajo activos.

**Ubicación Física:** Permite la selección de las **OTs** Históricas cuyo equipo se encontraba en una ubicación física, determinada en este criterio. Cuando se utilizan comodines, es posible seleccionar **OTs** Históricas cuyo equipo esté en una ubicación física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona las **OTs** Históricas, efectuadas a Equipos	cuyo 	nombre 	de 	Ubicación	Física	empieza 	por 	la 	palabra 	cava, independientemente de si se  está hablando de la cava de fermentación, maduración o contrapresión.

**4. FILTRAR POR CAMPOS PARTICULARES DE P AROS**

**Turno:** Permite la selección de los PAs Históricos cuyo turno laboral indique en el cual se produjo el paro. Se puede elegir entre los turnos 1, 2, 3 y 4.

**Módulo:** Permite la selección de  los  PAs Históricos, cuyo campo tenga  definido información documental, variable, según las necesidades propias de la Organización.

**Operación Actual:** Permite la selección de los PAs Históricos cuya operación actual fue la que se registró en el momento en que se produjo el PA.

**Operación Anterior:** Permite la selección de los PAs Históricos cuya operación anterior fue la que se registró en el momento anterior en que se produjera el PA.

**Operador:** Permite la selección de los PAs Históricos cuyo operario corresponde al  que está registrado en  la  tabla de  Terceros del módulo de  Infraestructura, cuando  estaba operando el equipo en el momento que se produjo el PA. La selección del operario también se puede realizar utilizando los comodines.

**Referencia:** Permite la selección de los PAs Históricos que tengan registrada la referencia elegida.  En este campo se pueden utilizar los comodines.

**Restricción:** Permite la selección de los PAs Históricos que hayan sido o no restrictivo en el momento en que se presentó el fallo del equipo.

**5. FILTRAR POR C AMPOS PARTICULARES DE SOLICITUDES DE SERVICIO**

**Estado:** Permite seleccionar las SS Históricas de acuerdo con su estado de cierre: **“**Cerrada no ejecutada **”**, **“**Cerrada ejecutada **”** o **“** Cerrada con **OT** **”**.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos,  se pueden utilizar  uno  o  varios  de  los criterios anteriores, simultáneamente.   Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección, es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección, se da un clic al botón `<span class="iconify btn" data-icon="mdi-plus-circle">`Más, en lugar de darlo al botón `<a class="btn">`Aceptar `</a>`.

## Vistas Parciales / Pestañas

### Acciones técnicas

Esta opción conduce a la tabla de Acciones Técnicas de la **OT**. Esta tabla se ha creado con información seleccionada desde la tabla del mismo nombre en la  Infraestructura, que contiene  un  listado  de  Acciones  Técnicas  frecuentes  en  un  área  de  Mantenimiento. Con   la   información   contenida   en   esta   tabla   se   pretende   describir,   breve   pero concretamente, la actividad general realizada en  una  Orden de Trabajo. Las  Acciones Técnicas en  una **OT** se pueden definir, después de haber seleccionado en la ventana Detalle de la Ficha Técnica de la **OT**, el cuadro llamado **“**Manejo de Costos ABC **”**. La adición de las  Acciones Técnicas se realiza de igual forma que en los módulos Efectos de Falla y Causas de Falla en la Infraestructura.

!![Acciones técnicas](0.images/cap11/chp11_img04.png)

### Seguimiento o Cierre

En la próxima gráfica, que contiene la Ventana de Información de Cierre, se aprecian sus componentes y sus respectivos contenidos. A través de ella se realizó el proceso de cierre de la Orden de Trabajo, en el módulo de Órdenes de Trabajo.  En esta ventana, en Historia de mantenimiento, la única opción permitida es la de modificar, ello bajo las condiciones
de autorización que son exigidas. De tener la autorización para hacerlo, se modifica el o
los campos requeridos y se concluye la operación con un clic  en el botón `<a class="btn">`Actualizar `</a>`.

!![Seguimiento o Cierre](0.images/cap11/chp11_img05.png)

A continuación se describen los campos que componen esta ventana.

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica de la **OT**.

**F/H de Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la Fecha y hora del daño ocurrido. La fecha se m aneja en formato AAAA/MM/DD (Año, Mes, día); la hora se m aneja en formato Militar (de 24 horas). Cabe anotar, que la fecha y hora consignadas   corresponden   al   momento   en   que    se   informó   del   daño   o   falla   a Mantenimiento, así que es posible que el daño  ha ya ocurrido en una fecha/hora anterior. Sin embargo se debe procurar,  administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del Daño.

**F/H Atención:** Es la fecha y hora en la cual el Personal de Mantenimiento **“**atendió **”** la solicitud de labor, o sea se hizo presente con una inspección previa sobre el equipo reportado. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora se maneja en formato Militar (de 24 horas). Normalmente se utiliza solo en Órdenes de Trabajo Manuales.

**F/H Inicio Trabajos:** Es la Fecha y Hora que indica el momento de inicio de labores, una vez  que  todas  las  condiciones  estuvieron  dadas.  La  fecha  se  maneja  en  formato AAAA/MM/DD (Año, Mes, día); la hora se maneja en formato Militar (de 24 horas).

**F/H Fin Trabajos:** Es la Fecha y Hora que indica el momento en que finalizaron las labores de mantenimiento,   incluyendo   las   pruebas   o   ensayos,   que   determinaron   el    buen funcionamiento del equipo. La fecha se maneja en formato AAAA/MM/DD (Año, Mes, día); la hora se maneja en formato Militar (de 24 horas).

**Tiempo Duración (ttr):** Aunque – AM 4G– sugirió como Tiempo de Duración, (o time to repair) en este campo, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos, cabe anotar, que  **–AM 4G** también permitió corregir el tiempo de
Duración en la **OT**, después de que fue calculado por el sistema, entonces debe reflejar el tiempo real de la ejecución.

Por ejemplo, si una **OT** tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30, y como Fecha de Fin de Trabajos XXXX/12/01 16:00, **–AM 4G** sugiere como Tiempo de Duración, 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar otra labor, el ttr se debe haber corregido a: 5 horas y 30 minutos.

**T. Improductivo:** **–AM 4G** puede haber sugerido como Tiempo Improductivo: la  diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora Info de Paro (Para Órdenes de Trabajo Correctivas), o como, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha  y  Hora  de  Inicio de  Trabajos  (Para  Ordenes de   Trabajo no  Correctivas).  Sin embargo, este valor pudo haberse corregido, después de que fue calculado por el sistema, para reflejar la cantidad Real de Tiempo Improductivo que tuvo el Equipo en la **OT** actual.

Por ejemplo, si una **OT** histórica, que fue correctiva, tiene como fecha de Info de  Paro XXXX/12/01 08:00, y como fecha de Fin de Trabajos XXXX/12/02 12:30,  **–AM 4G**  sugirió como Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora este turno de producción, se debió haber definido el tiempo improductivo como solamente de 20 horas y 30 minutos.

Estado de la **OT**: Una Orden de Trabajo Histórica puede tener uno de los siguientes
Estados:

| ABREVIATURA  | SIGNIFICADO |
| ------------ | ----------- |
| **C:** | Cerrada     |
| **K:** | Cancelada   |

**Causa de Cierre:** Por defecto, cuando se trata de una **OT** cerrada y ejecutada, el sistema ubica en este campo la causa **“**OT Ejecutada **”**. Si la **OT** se ha cerrado con un Estado de **“**K: Cancelada **”**, en este campo se definió la Causa respectiva.

**FF Cierre:** Es asignada automáticamente por el sistema, cuando el usuario le da a la **OT**, SS o PA, el estado Cerrado.

**Causa de Falla:** Para Órdenes de Trabajo correctivas, en este campo se despliega la
Causa de la Falla que dio origen a la labor actual.

**Efecto de Falla:** Para Órdenes de Trabajo correctivas, en este campo se registra el Efecto más significativo de la falla que se presentó y fue reportado por Producción.

**Fecha Garantía:** Esta fecha indica el fin de la garantía ofrecida por el responsable, por la labor prestada en la **OT** Histórica actual. Es una fecha que fue calculada por el sistema con base en los meses de garantía ofrecidos por el responsable, a partir de la fecha de fin de trabajos.

**Conf. Subjetiva AC:** Este campo permitió al técnico ejecutor, establecer subjetivamente en cuánto quedó (en porcentaje) la confiabilidad del Equipo una vez finalizada la  labor. Al frente de este valor, aparece el porcentaje de confiabilidad actual del Equipo, como valor de referencia. .  Este valor fue definido por el responsable de la ejecución de la Orden de Trabajo según su apreciación subjetiva.

**Información del contador al momento de la ejecución:** En este campo se ingresa el contador del equipo y su fecha de lectura al momento de cerrar la Orden de Trabajo. Al actualizar esta información el sistema genera un mensaje para  modificar la fecha de inicio de periodo en el módulo de programas; el usuario  decide si se desea modificar este tipo de información o no.

!![Información del contador al momento de la ejecución](0.images/cap11/chp11_img06.png)

Al momento de ingresar a Información de Cierre se visualiza el botón de Bitácora, al darle clic en este botón, se muestra una nueva ventana, la cual da a conocer al  usuario los diferentes estados por los cuales ha pasado la Orden de Trabajo.

!![cierre](0.images/cap11/chp11_img07.png)

### Gasto Real

!![Gasto Real](0.images/cap11/chp11_img08.png)

En la gráfica anterior, Ventana de Gasto Real, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Gasto Real se puede visualizar el Gasto Real de la Orden de
Trabajo. Esta ventana está com puesta por dos zonas,

En la zona superior, aparece la matriz de Gasto Real, que resume los costos reales para la **OT**, discriminando por Tipo de Trabajo (En las filas), y por Tipo de  Consumo (En las columnas). La última fila y la última columna de la matriz, discriminan la diferencia contra
el Presupuesto, conformando así el Control Presupuestal de la **OT**.  Aparecen también botones para ingresar Mano de Obra, Materiales y Repuestos, y Otros Conceptos.

En la zona inferior, están los botones que permiten ver, en forma de visor, el gasto real de la **OT**.  Igualmente, aparece la leyenda **“**Debe aprobar el Presupuesto **”** o  **“**Presupuesto aprobado **”**, si la **OT** maneja control presupuestal.

**Nota:** Aunque los botones de la zona superior se despliegan siempre, solamente pueden ser operados por un usuario que tenga autorización de modificar Historia.

**Ingresar mano de Obra Interna**

!![Ingresar mano de Obra Interna](0.images/cap11/chp11_img09.png)

En la gráfica anterior, Ventana de Ingreso de Mano de Obra, se aprecian sus componentes y sus respectivos contenidos. A ella se llega desde la ventana de Gasto Real en Historia, dando clic al botón `<a class="btn">`Ingresar Mano de Obra `</a>`.   La forma del acceso  más normal a este proceso es  de  consulta.  Cuando se  dispone de  los   permisos  requeridos, es  posible también Modificar Historia. Por supuesto que este es un permiso exclusivo.

A través de la ventana de Ingreso de Mano de Obra en Gasto Real es posible apreciar el detalle de la Mano de Obra de la Orden de Trabajo Histórica. La funcionalidad es idéntica a la expuesta en el Capítulo Órdenes de Trabajo, en la sección Ingresar Mano de Obra, en Gasto Real.

A continuación se describen los campos que componen esta ventana; cuando se quiera actualizar el gasto real de una **OTH**, en lo referente a Mano de Obra,  se  deberán diligenciar los siguientes campos:

**F. Uso:** (Fecha de Uso).  Es la fecha en la cual se utiliza el recurso.

**Oficio:** Es el oficio al que pertenece el responsable asignado. Es un campo de solo lectura, que se estableció una vez fue seleccionado el Responsable.

**Responsable:** En este campo se despliega el Responsable de la **OT** Histórica.

**H. Hombre:** Es el número de Horas Hombre que fueron consumidas por el responsable en cuestión.

**MM:** Es el número de Minutos, que junto con las horas, conforman el tiempo total consumido.
Tipo Hr.: Dado que un Responsable a través del oficio del mismo puede poseer varios tipos de Hora, cada uno con un valor distinto, en este campo se despliega el Tipo de Hora utilizado.

**Vr. Hora:** Es el valor unitario de la hora, del responsable asignado.

**Ingresar Materiales y Repuestos**

!![Ingresar Materiales y Repuestos](0.images/cap11/chp11_img10.png)

A través de la ventana de Ingreso de Materiales y Repuestos se despliega el consumo real de Materiales y Repuestos de la Orden de Trabajo. Cuando se disponen de los permisos necesarios es posible ingresar Materiales y Repuestos en el Modulo de Historia

A continuación se describen los campos que componen esta ventana.

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**Almacén:** Aparece el almacén desde dónde se consumió el repuesto o material. Repuesto: En este campo se despliega el código del repuesto cargado a la **OT**. Descripción: Es el campo que muestra la descripción del repuesto seleccionado.
Tipo de trabajo: Este campo muestra el Tipo de Trabajo para el cual se cargó el Material o Repuesto.

**Unidad de Medida:** Es el campo que muestra la unidad de consumo del repuesto seleccionado.

**Cantidad:** Es la cantidad utilizada, del repuesto seleccionado.

Valor Unitario: Es el valor unitario del repuesto tal y como fue cargado por  **– AM 4G **.

**Ingresar Otros Conceptos**

!![Ingresar Otros Conceptos](0.images/cap11/chp11_img11.png)

En la gráfica anterior, Ventana de Ingreso de Otros conceptos, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Ingreso de Otros Conceptos se visualiza el Gasto Real de **“**Otros Conceptos **”** de la Orden de Trabajo.

A continuación se describen los campos que componen esta ventana.

**F. Uso:** (Fecha de Uso). Es la fecha en la cual se utilizó el recurso. Concepto: Es el „Otro Concepto‟ seleccionado y cargado a la **OT**.

**Nro. De Unidades:** Es la cantidad del concepto seleccionado  anteriormente.

**Valor  Unitario:** Es  el valor presupuestado del **“**Otro Concepto **”**. 	**–AM 4G** sugiere el valor unitario del concepto que se encuentra ingresando al sistema.

**Valor Total:** Es el costo total presupuestado del **“**Otro Concepto **”** teniendo en cuenta el número de unidades y el valor unitario.

Al hacer clic en el botón `<a class="btn">`Ir a Matriz `</a>`, se regresa a la ventana principal de Gasto Real.

### Evaluación de Servicio

A  través  de  esta  transacción  se  hace  seguimiento  a   la evaluación sobre el  servicio prestado por el personal de mantenimiento o de servicios, en la **OT** seleccionada.   Esta opción se hace disponible en Información de Cierre, dando un clic en la caja de selección que precede a la opción **“**Evaluar el Servicio **”**.

!![Evaluación de Servicio](0.images/cap11/chp12_img12.png)

### Multimedia

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional a la **OT** en cada una de sus carpetas asignadas. Esta opción permite asociar a la **OT**, uno o varios documentos, con el  objetivo de facilitar el trabajo a  realizar,  o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** ayudas necesarias en la ejecución de la  **OT**, planos,  manuales  técnicos,  manuales  de   normas  técnicas  de   Mantenimiento   o  de especificaciones  detalladas,  normas  de  seguridad,  enfoques  de  acción,  procedimientos sobre cómo realizar la labor, check lists, protocolos de prueba y otra inf ormación estándar para  su  ejecución,  en  aras  de  optimizar  los  recursos  de  tiempo  y de   insumos  a  ser consumidos, como también en aras de preservar la seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información a la **OT**, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica de la **OT**.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada a la **OT**. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas a la **OT**. Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados a la **OT**. Ejemplo: Videos en formato wmv, entre otros.

!![Videos](0.images/cap11/chp11_img13.png)

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono de  `<a class="btn">`la nube con una flecha hacia arriba en su interior `</a>`, a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir,  se selecciona el archivo y se da clic en `<a class="btn">`abrir `</a>`.

!![adicionar un documento](0.images/cap11/chp11_img14.png)

Una vez se da clic en `<a class="btn">`abrir `</a>`, se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón `<a class="btn">`Subir archivo `</a>`.

!![archivo elegido](0.images/cap11/chp11_img15.png)

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, a la **OT** se da clic al icono de `<span class="iconify btn" data-icon=delete>`eliminar (basura) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón `<a class="btn">`Aceptar `</a>`.

Si se desea descargar un archivo adjunto a la **OT**, se debe dar clic en el icono de `<span class="iconify btn" data-icon=cloud-download>`la nube con flecha hacia abajo</>, que se encuentra al lado derecho del archivo que se quiere descargar.

## Servicios

### Reportes

Este comando permite visualizar los reportes relacionados con Órdenes de Trabajo Históricas, Solicitudes de Servicio y Paros. Existen reportes básicos disponibles de tipo Resumen,  Detalle, Gráficos, Paretos e Indicadores de Gestión:

!![Servicios](0.images/cap11/chp11_img16.png)

Los anteriores reportes pueden ser impresos, para una o varias Órdenes de Trabajo Históricas preseleccionadas:

**Todos los Registros:** Con esta opción se permite la impresión de todas las Órdenes de Trabajo Históricas existentes en la base de datos de la compañía activa, sin  importar si se ha realizado un subgrupo.

**Registros del Visor:** Esta opción permite hacer una impresión de todas aquellas **OTs** Históricas que están seleccionados en el visor.

**Registro Seleccionado:** Esta opción permite hacer una impresión de la **OT** Histórica señalada, o sea la que está resaltada con la línea verde en el visor.

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Para visualizar los reportes, se selecciona el reporte y luego se da clic al botón `<a class="btn">`Imprimir `</a>`.

### DashBoards

Este comando permite visualizar en tiempo real el comportamiento de los registros de Ordenes de Trabajo Históricas, Solicitudes de Servicio y Paros, con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas.

!![DashBoards](0.images/cap11/chp11_img17.png)

Al dar clic sobre los rectángulos de colores, se oculta la información correspondiente a cada rectángulo.

!![DashBoards](0.images/cap11/chp11_img18.png)

Sí se desea restablecer la información, se debe dar clic botón  `<a class="btn">`actualizar `</a>`. En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic a  `<a class="btn">`la flecha hacia abajo `</a>`.

!![DashBoards](0.images/cap11/chp11_img19.png)

### Balance Periódico de Gestión

Aunque no existe una opción o una función específica en ningún menú o submenú dentro de **–AM 4G** que especifique el tema Balance de Gestión, aquí se trata como una herramienta administrativa y de gerencia que debería ser utilizada periódica y disciplinadamente por un Gerente de Mantenimiento que quiera posicionar su área y su cargo, en un nivel realmente gerencial dentro de la organización.

En algunas empresas y corporaciones se percibe el Departamento de Mantenimiento como un  área  costosa,  incumplida,  sobre  la  que  se  conoce  poco  o  ningún  detalle  de  sus esquemas de planeación, programación, priorización, y ejecución de tareas, y aún mucho menos sobre la  estratificación de  los  costos,  respecto a   Mano de  Obra,  Materiales y Repuestos y otros conceptos.  Estratificación que se  relaciona también con los tipos de Mantenimiento (Preventivo, Correctivo, Predictivo, y otros), también con los tipos de Trabajo (Mecánico, Eléctrico, Instrumentación y otros) y finalmente con los Tipos de Actividad que realiza y los Centros de Costo, sus clientes naturales.

El planteamiento que se hace es simple. Se recomienda al Gerente de Mantenimiento, que elabore un Balance de Gestión, para el período que acaba de concluir: un mes, un trimestre, un semestre, un año.  Todo ello como resultado del trabajo de un período de gran  actividad  técnica  y  de  informática  y  de  gran  organización  procedimental  y metodológica. Es más, se debería generar por  pura  iniciativa del mismo Gerente de Mantenimiento, sin que medie una orden o una solicitud expresa de la Alta Gerencia.

El **–AM 4G** le proporciona todos los elementos y las herramientas para lograrlo. Aún así se requiere  de  parte  del  Departamento  de  Mantenimiento,  desde  su  cabeza,   de  un compromiso decidido para lograrlo.  No es difícil.  Se trata de plantear y  acordar una metodología de reporte y retroalimentación de  información permanente al sistema **–AM 4G** para mantenerlo al día.

Existe un gran ejemplo dentro de la misma Corporación o Empresa. Es el departamento contable y el Sistema de Contabilidad.  Para nadie es un secreto  que  el Balance de Gestión Financiera y otros Estados Financieros están listos siempre a tiempo, durante los primeros días del mes siguiente. Pues bien, este resultado contable real del período no aparece milagrosamente se trata del compendio de la actividad, disciplina y gusto de muchas personas, con el apoyo del Sistema de Información Contable. Desde el primer día de cada mes, con cada transacción contable, se alimenta el sistema y así se mantiene día tras  día,  actualizado. Se hacen  revisiones  periódicas  para  verificar  el  estado  de actualización y de veracidad e integridad de la información. Cuando llega el fin del período, normalmente del mes, el gran porcentaje de la información está al día, registrada ya en el sistema. Entonces solo se hacen ajustes y complementos especiales. Todo está listo para producir el gran resultado del mes: El Balance Mensual.

Nada diferente es lo que se propone al área de Mantenimiento: que genere su Balance Periódico de Gestión.

Un Balance Periódico de Gestión de Mantenimiento debe conformarse, al menos, por los siguientes componentes:

**Reportes de costos, tiempos y número de actividades del período:**

- Gerencial por Centro de Costo, discriminando Mano de Obra, Materiales y Repuestos  y  Otros  Conceptos.  Debería  ser  enviado   al   Gerente  de Producción y a la Gerencia de Planta.
- Detallado a nivel de Orden de Trabajo, también por Centro de  Costo  y discriminado  por  los  mismos  conceptos.  Tendría  como  destino  cada Centro de Costo **“**cliente **”** de Mantenimiento, aprovechando la facilidad que suministra al estar clasificado por Centro de Costo.

**Reportes para Mantenimiento y Almacén:**

- Discriminación de Costos por Tipo de Mantenimiento y Tipo de Trabajo
- Reportes sobre análisis de fallas: Pareto por mayor número de actividades, habiendo preseleccionado del movimiento del  período sólo lo que corresponde a actividades correctivas.
- Listado de consumos de Repuestos del período.

**Índices de Gestión:**

- Se recomienda elegir de la gama de índices que **–AM 4G** ofrece, los índices de gestión más representativos para la empresa y el período evaluado. Además de los índices ya definidos de manera estándar, W IN Software Asociados  ha  desarrollado  algunos  índices  especiales  por  sector  de industria, que están disponibles, solo deben ser solicitados. Igualmente, W IN Software, con su filosofía de continuo mejoramiento del software, está dispuesto a implementar los índices particulares, base de seguimiento de cada empresa, buscando a futuro proveer de manera completa los índices aceptados universalmente para la gestión de Mantenimiento.

Como resultado de implementar periódicamente un Balance de Gestión, se hace posible extraer desde ellos,  al final de cada período, un  resumen de  datos  puntuales, de  los reportes que los conforman, para transferir hacia herramientas externas, como Excel por ejemplo.

Allí   es   posible  efectuar cálculos adicionales  y obtener estadísticas y tendencias  que complementan la Gestión y permiten tener una visión de largo plazo. Por ejemplo, sería valioso al final de cada mes extraer datos como: Índices, Costos totales por concepto, por Tipo de Mantenimiento y por Tipo de Trabajo, al igual que  Número  Total de Fallas por Equipo o grupo de Equipos, y a través de las  herramientas de graficación de Microsoft Excel  u  otra  herramienta  idónea,   generar   seguimiento  mes  a  mes  y  tendencias acumulativas, para cada uno de dichos conceptos.

Todos estos reportes mencionados y muchos más, con capacidad de ser  adecuados según  requerimientos  particulares  de  clasificación  y  preselección,   se   encuentran disponibles en el **–AM 4G** con el fin de que el Gerente de Mantenimiento pueda generar el Balance Periódico de Gestión Básico y todos los complementos que le sean necesarios para apoyo, dinamismo y sustentación de su gestión.
