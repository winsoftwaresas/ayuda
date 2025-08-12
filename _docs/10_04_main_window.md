---
title: Ventana Principal
subtitle: En esta sección se encuentran los comandos principales de Historia y la explicación de los componentes de las ventanas.
author: win
order: '10_04'
date: 2022-03-28T20:34:50.748Z
media: "../../assets/images/docs/"
---
# Ventana Principal de Historia de Mantenimiento (HM)

![Procesar imagen](../../assets/images/cap10/chp10_img01.png)
_**Imagen 1.** Historia - Ventana Visor_

A esta ventana se llega haciendo clic sobre la opción <a class="btn blue">Historia </a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar la Historia de Mantenimiento. A continuación se ilustran las porciones que la componen.

## Ventana Visor

![Procesar imagen](../../assets/images/cap10/chp10_img02.png)
***Imagen 2.** Historia - Ventana Visor*

Desde esta ventana es posible observar la Historia de Mantenimiento activa, existente o un subconjunto de ellas (efectuado a través de un subgrupo). El conjunto de Órdenes de Trabajo Históricas disponible a ser desplegado se muestra a través de páginas. El tamaño de las páginas es configurable desde la opción <a class="btn blue">administración</a> del menú principal, en la sección “Valores por Defecto” por parte de un usuario autorizado.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle

Al hacer clic sobre alguna de las OT, SS o Paros Históricas del Visor el sistema responde mostrando la información de esa OT, en forma detallada, en una ventana llamada **Ventana Detalle**.

![Procesar imagen](../../assets/images/cap10/chp10_img03.png)
_**Imagen 3.** Historia - Ventana Detalle_

 En esta ventana se encuentra la información relevante a la OT histórica seleccionada en el Visor. A través de ella se administran los datos genéricos y también es posible modificar la información de una OT Histórica. Por supuesto que, para ello se requieren permisos especiales, que pueden ser proporcionados por el Administrador.

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

**Código de Inventario:** En este campo se visualiza el código del inventario del Activo que se haya establecido en la ficha técnica de este mismo. Es un campo que no es modificable por el usuario.

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

**Filtrar por CR:** Al seleccionar esta opción, en el campo “Responsable Ejecutor” solo se despliegan los Responsables correspondientes al Centro Responsable elegido en la opción “Centro Responsable”. En otro caso, en el campo “Responsable Ejecutor” se despliegan todos los “Responsables” existentes en la tabla respectiva.

**Contrato:** En este campo se selecciona el contrato que pertenece al Contratista responsable de ejecutar la OT.

**Responsable por la Institución:** En este campo se elige a la persona de la institución, que acompañará y/o recibirá la labor prestada por el Responsable ejecutor, cuando este sea un Contratista o Servicio Externo. Para ello se selecciona uno de los Responsables que están definidos en la tabla de “Responsables” en la Infraestructura. Es la persona que recibe a satisfacción.

**T. Trabajo:** **AM** predefine cuatro tipos de trabajo: Mecánico (MEC), Eléctrico (ELE), Instrumentación/Electrónica (IEL) y Otro (OTR). Indica los Tipos de Trabajo que se realizan en la OT. Es posible definir más de un Tipo de Trabajo para una OT.

**T. Mtto:** Este campo indica el Tipo de Mantenimiento a realizar en la OT. Todo registro debe poseer uno. Si en la OT se va a registrar un trabajo que no corresponde a una labor de mantenimiento, en este campo se elige “Otro” y a continuación, en el tipo de “Actividad” se especifica detalladamente, el tipo de labor.

**T. Actividad:** Aquí se establece el Tipo de Actividad a realizar en la OT. Este campo trabaja en coordinación con el anterior (Tipo de Mantenimiento).Si en el campo anterior se ha seleccionado el valor “Otro”, en el campo Tipo de Actividad se debe seleccionar un valor que defina consistentemente la labor a ejecutar.

**F/H Paro:** Para las Órdenes de Trabajo Correctivas, en este campo se registra la Fecha y hora del daño, falla o avería. La fecha se maneja en formato DD/MM/AAAA (Día, Mes, Año); la hora se maneja en formato de 12 horas. Cabe anotar, que la fecha y hora consignadas corresponden al momento en que se informó del daño o falla a Mantenimiento, así que es posible que el daño haya ocurrido en una fecha/hora anterior. Sin embargo se debe procurar, administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del paro.

**T. Estimado:** Es un campo netamente informativo, e indica de manera aproximada cuánto Tiempo demora la labor. Se establece el número y a continuación el período de tiempo que representa (Días, Horas o Minutos).

**Tiempo Improductivo:** En este campo indica la persona o el planer de realizar la labor, si debe pararse el Activo para proceder a la realización de la misma. Cuando se dice que el Equipo genera Tiempo Improductivo significa que no está en operación, y por lo tanto,  posiblemente improductivo.  Este campo se tiene en cuenta al momento de cerrar la **OT**: si el indicativo de Tiempo Improductivo está habilitado, **AM* calcula y carga el Tiempo Improductivo, en caso contrario no lo hace.

**Criterio:** Este campo siempre está bloqueado, es informativo y despliega el criterio utilizado por **AM** para haber generado la OT. (Solamente para Órdenes de Trabajo Programadas).

**Tarea:** Este campo siempre está bloqueado, es informativo, permite establecer, a través del ordinal de la tarea que muestra, cual fue el PM que generó la OT actual. Es válido solamente en el caso de Órdenes Programadas.

**Control Presupuestal:** Esta opción indica si la OT manejó Presupuesto. 

**Comentarios:** Esta opción se usa para ingresar los nuevos comentarios referentes a toda la ejecución de la OT. Al dar clic al botón <a class="btn gray">Agregar comentario</a> aparecerá el comentario ingresado al lado derecho en una ventana tipo chat bloqueada y a su vez inhabilita la modificación de los comentarios que allí se encuentren; además de la fecha, hora y el usuario logueado que realizó el comentario.

La finalidad de este campo registrar hechos interesantes acerca de la misma ejecución, como el estado del equipo antes, durante y después de la intervención, estado del mismo equipo después de ella, recomendaciones a los usuarios del equipo, recomendaciones a las personas de mantenimiento y otros conceptos interesantes a juicio de los ejecutantes.

Es posible que el sistema añada comentarios automáticos cuando la OT sea proveniente de una SS. 
 


## Vistas Parciales / Pestañas

### Acciones técnicas

Para las OT que se hayan enviado a Historia con costos ABC, esta pestaña sólo permite consultar el costo de las acciones técnicas asociadas a la labor:

![Procesar imagen](../../assets/images/cap10/chp10_img04.png)
_**Imagen 4.** Historia - Acciones Técnicas de una OT_


### Gasto Real

Para ingresar a esta opción, se debe dar clic en la pestaña “Gasto Real” de la ventana detalle de Órdenes de Trabajo Históricas.

Este refleja los costos registrados en la OT Histórica:

![Procesar imagen](../../assets/images/cap10/chp10_img10.png)
_**Imagen 5.** Historia - Gasto Real de una OT_

 A través de esta ventana, se puede administrar el Gasto Real de la OT Histórica. Se compone de dos zonas:

En la zona superior, aparece la matriz de Gasto Real discriminada por Tipo de Trabajo (En las filas), y por Tipo de Consumo (En las columnas). La última fila y columna de la matriz, discriminan la diferencia entre el Gasto Real y el Presupuesto, sólo en caso de las OT que en su momento fueron generadas  automáticamente. 

En la zona inferior, aparecen los botones para ingresar al detalle de <a class="btn gray">mano obra interna</a>, <a class="btn gray">mano obra externa</a>, <a class="btn gray">mat y rep</a>, y <a class="btn gray">o.conceptos</a>, ya que es posible aún en la Historia hacer modificaciones siempre y cuando se cuenten con los respectivos permisos. 

**Ingresar Mano de obra Interna**

![Procesar imagen](../../assets/images/cap10/chp10_img11.png)
_**Imagen 6.** Historia - Gasto Real MO_


A diferencia del Presupuesto de Mano de Obra Interna, el Gasto Real de la Mano de Obra Interna se efectúa a nivel de Responsable, es decir, se tiene en cuenta a la persona que realizó la labor.

Para ingresar MO se debe dar clic en el botón <a class="btn gray">adicionar mano de obra interna</a> y diligenciar los siguientes campos:

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el oficio al que pertenece el Responsable asignado. Es un campo de solo lectura, que se establece una vez se indica el Responsable.

**Responsable:** Es la persona que ha ejecutado la OT. Se elige el Responsable descolgando el listado de Responsables, traído desde la tabla de Infraestructura.

**Filtrar por OF:** Al seleccionar esta opción, en el campo  **Responsable** solo se descuelgan aquellos  asociados al Oficio definido en el campo anterior **OF**. De no hacerlo,  se despliegan todos los **Responsables** ejecutores existentes en la tabla respectiva.

**H. Hombre:** Es el número de Horas Hombre consumidas por el Responsable en cuestión.

**Minutos:** Es el número de Minutos, que junto con las horas, conforman el tiempo total consumido. Por ejemplo, si se consumen 3 horas y media de un responsable, debe registrarse "3" en el campo **H. Hombre** y "30" en el campo **Minutos**.

**Tipo Hr.:** Dado que un Responsable a través del Oficio del mismo puede poseer varios tipos de Hora, cada uno con un valor distinto, en este campo se indica el Tipo de Hora adecuado. **AM** sugiere el valor hora correspondiente, dependiendo del tipo elegido. Si se elige el Tipo “Otro”, AM no sugiere ningún valor hora, y deja a decisión del usuario el valor a asignar en este campo.

**Vlr. Hora:** Es el valor unitario de la hora para el oficio del Responsable en cuestión. 
**AM** automáticamente sugiere el costo por hora traído desde la tabla de Infraestructura para el Oficio, en los casos en que el tipo hora es distinto de “Otro”, el campo se habilitará para digitar un valor hora.

**Tipo de Asignación:** Este campo define al responsable de la mano de obra de la OT. La opción “Presupuesto para Histograma” es para definir la proyección a futuro de la carga de trabajo del responsable; y “Ejecución Real” es para definir la carga de trabajo ejecutada.

**TT:** Este campo es informativo. Muestra el TT que tiene definido el Oficio seleccionado, se establece automáticamente una vez se ha seleccionado el Responsable y se visualiza en la tabla de Mano de Obra Interna.

**Vlr.Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total del Gasto Real para ese Responsable. Es el producto del Vlr. Hora por H. Hombre y Minutos. Se visualiza en la tabla de Mano de Obra Interna.

Una vez se diligencien estos campos se da clic en el ícono de Mas <span class="mdi mdi-plus-circle icon white"></span> para agregar, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img12.png)
_**Imagen 7.** Historia - Gasto Real Ingresar MO_

En el caso de actualizar la información de Mano de Obra Interna se da clic en <a class="btn gray">actualizar mano de obra interna</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

![Procesar imagen](../../assets/images/cap10/chp10_img13.png)
_**Imagen 8.** Historia - Gasto Real Actualizar MO_

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img14.png)
_**Imagen 9.** Historia - Gasto Real Eliminar MO_


**Ingresar Mano de Obra Externa**

![Procesar imagen](../../assets/images/cap10/chp10_img15.png)
_**Imagen 10.** Historia - Gasto Real ME_


Es importante resaltar que el Gasto Real de Mano de Obra Externa de una OT, se prepara a nivel del Responsable Ejecutor Externo, es decir, quiénes fueron los encargados de ejecutar la labor.

Para ingresar Mano de Obra Externa se debe dar clic en el botón <a class="btn gray">adicionar mano obra externa</a> y se deberán diligenciar los siguientes campos:

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el Oficio al que pertenece el Responsable Externo asignado. Es un campo de solo lectura, que se establece una vez se selecciona el Responsable.

**Responsable:** Es el Responsable Externo que ha ejecutado la OT. Para seleccionarlo se descuelga el listado de Responsables Externos, traído desde la tabla de Infraestructura.

**Filtrar por OF:** Al seleccionar esta opción, en el campo **Responsable** solo se descuelgan los Responsables Externos correspondientes al Oficio definido en la opción **OF**. De no hacerlo, en el campo **Responsable** se despliegan todos los **Responsables** ejecutores Externos” existentes en la tabla respectiva.

**Costo Unitario por hora/visita:** Se digita el valor o el costo unitario por hora o por visita de parte del Responsable Ejecutor Externo para esa actividad programada.

**TT:** Este campo es informativo. Muestra el TT que tiene definido el Oficio seleccionado, se establece automáticamente una vez se ha seleccionado el Responsable y se visualiza en la tabla de Mano de Obra Interna.

Una vez se diligencien estos campos se da clic en el ícono de Mas <span class="mdi mdi-plus-circle icon white"></span> para agregar, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img16.png)
_**Imagen 11.** Historia - Gasto Real Ingresar ME_

En el caso de actualizar la información de Mano de Obra Externa, se da clic en <a class="btn gray">Actualizar Mano de Obra Externa</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

![Procesar imagen](../../assets/images/cap10/chp10_img17.png)
_**Imagen 12.** Historia - Gasto Real Actualizar ME_

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img18.png)
_**Imagen 13.** Historia - Gasto Real Eliminar ME_


**Ingresar Materiales y Repuestos**

![Procesar imagen](../../assets/images/cap10/chp10_img19.png)
_**Imagen 14.** Historia - Gasto Real M Y R_

Para ingresar Materiales y Repuestos se debe dar clic en el botón <a class="btn gray">adicionar Material y Repuesto</a> y se deberán diligenciar los siguientes campos:

**Fecha de Uso:** Es la fecha en la cual se utiliza el recurso.

**Almacén:** Se elige el almacén dónde se encuentra el Repuesto a consumir y a ingresar al Gasto Real.

**Buscar Por:** Este campo es de solo lectura y muestra por defecto la opción de Código. Una vez se elige el Almacén, este campo se habilita y lista las opciones por las cuales se puede buscar el ítem a relacionar. Las opciones son: Código, Referencia, Cod. Barra Int y Cod. Barra Prov.

**M y R:** Este campo se habilita una vez se haya seleccionado el Almacén. Existen dos formas de seleccionar el Repuesto:

La primera consiste de forma manual solo digitando el valor correspondiente al código, referencia, código de barras interno o proveedor del Material y Repuesto, según la opción anterior **Buscar por**.

La segunda consiste en buscar el Material y Repuesto, a través del visor de Material y Repuesto. Para ello se da un clic sobre el icono de filtro de Repuesto <span class="mdi mdi-filter-variant"></span>. Acto seguido se muestra la ventana de visor de Repuesto con la posibilidad de hacer allí subgrupos. Una vez se encuentra el Repuesto, se selecciona dando un clic sobre cualquiera de sus campos, seguidamente un clic sobre el botón <a class="btn white">Aceptar</a> de esa ventana o también es posible seleccionarlo dando doble clic sobre el registro seleccionado. Inmediatamente ese código aparece en el campo de M y R y automáticamente se actualizan los campos de UM y Valor Unitario.

**Descripción M y R:** Es un campo de solo lectura, que muestra la descripción del material y repuesto seleccionado.

**Cantidad:** Es la cantidad que se va a consumir en la ejecución de esa OT para el repuesto seleccionado.

**UM:** Es un campo de solo lectura que muestra la unidad de consumo del repuesto seleccionado.

**Vlr. Unitario:** Es el valor unitario del repuesto seleccionado. AM sugiere el valor unitario ya establecido del Repuesto en cuestión, sin embargo, puede cambiarse.

**TT:** Este campo es informativo. Muestra el TT que tiene definido el Material y Repuesto seleccionado, se establece automáticamente una vez se ha seleccionado el Material y Repuesto. También, se visualiza en la tabla de Materiales y Repuestos.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total consumido para ese Material y Repuesto. Es el producto del Vlr. Unitario por la Cantidad. Se visualiza en la tabla de Materiales y Repuestos.

Una vez se diligencien estos campos se da clic en el ícono de Mas <span class="mdi mdi-plus-circle icon white"></span> para agregar, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img20.png)
_**Imagen 14.** Historia - Gasto Real Ingresar M Y R_

En el caso de actualizar la información de Materiales y Repuestos, se da clic en <a class="btn gray">Actualizar Material y Repuesto</a>. Regresar a seleccionar el Almacén respectivo, y elegir el Repuesto. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

![Procesar imagen](../../assets/images/cap10/chp10_img21.png)
_**Imagen 15.** Historia - Gasto Real Actualizar M Y R_

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img22.png)
_**Imagen 16.** Historia - Gasto Real Eliminar M Y R_

**Ingresar Otros Conceptos de Costo**

![Procesar imagen](../../assets/images/cap10/chp10_img23.png)
_**Imagen 17.** Historia - Gasto Real OC_


Para ingresar Otros Conceptos de Costo o Gastos indirectos, se debe dar clic en el botón <a class="btn gray">adicionar otro concepto</a> y se deberán diligenciar los siguientes campos:

**Concepto:** Es el “Otro Concepto” a presupuestar. Se selecciona descolgando la lista de Otros Conceptos, traída desde su tabla en Infraestructura.

**Fecha de Uso:** Es la fecha en la cual se utiliza el recurso.

**Concepto:** Es el “Otro Concepto‟ a cargar a la OT. Se selecciona descolgando la lista de otros Conceptos, traída desde su tabla en Infraestructura.

**Nro. Unidades:** Se define el número de unidades consumidas del Concepto de Costo seleccionado anteriormente.

**Vlr. Unitario:** Es el valor presupuestado del “Otro Concepto Costo”. AM sugiere el valor unitario del concepto que se encuentra ingresando al sistema. Sin embargo, es modificable por el usuario.

**Moneda:** Este campo de solo lectura, muestra la moneda definida al otro Concepto de Costo en la tabla de Infraestructura.

**Vlr. Total:** Es el costo total consumido del “Otro Concepto Costo” teniendo en cuenta el número de unidades y el valor unitario.

**Info. Adicional:** Es un campo donde se define un pequeño comentario sobre el consumo.

Una vez se diligencien estos campos se da clic en el ícono de Mas <span class="mdi mdi-plus-circle icon white"></span> para agregar, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img24.png)
_**Imagen 18.** Historia - Ingresar OC_

En el caso de actualizar la información de Materiales y Repuestos, se da clic en <a class="btn gray">Actualizar Otro Concepto</a>. Seguidamente, se observa que la información queda grabada en la tabla ubicada al lado izquierdo.

![Procesar imagen](../../assets/images/cap10/chp10_img25.png)
_**Imagen 19.** Historia - Actualizar OC_

Por otro lado, para eliminar un registro de la tabla, se selecciona el registro y luego se da clic al ícono de eliminar <span class="mdi mdi-delete"></span>, sale un mensaje de alerta que indica al usuario si está seguro de eliminar el registro, finalmente se da clic en <a class="btn">aceptar</a> como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img26.png)
_**Imagen 20.** Historia - Eliminar OC_

_> **Nota:** Para finalizar, hacer clic en el botón <a class="btn gray">ir a la matriz</a> para regresar a la ventana principal de Gasto Real y luego para acentar los cambios en el Gasto Real de la OT se debe dar clic en <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a>. Esto automáticamente cambia el estado de la OT a Cerrada Retroalimentada._

## Evaluación del Servicio

Se puede visualizar la evaluación del servicio del personal de mantenimiento o de servicios que realizó la labor. La evaluación fue hecha por un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez que se haya cerrado la OT. Sin embargo, es posible realizarla desde un usuario con los permisos respectivos en Historia y guardando los cambios a través del botón  <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a>.

![Procesar imagen](../../assets/images/cap10/chp10_img05.png)
_**Imagen 21.** Historia - Evaluación del Servicio_

## Seguimiento o Cierre

A esta opción se llega dando un clic sobre la esotaña “Seguimiento o Cierre”. Esta opción se encuentra disponible mientras se tengan los permisos respectivos de cierre en Historia, este permiso sólo permite cerrar una OT individual y actualizar sólo la actual pestaña

En el Seguimiento o Cierre en HM es posible corregir los tiempos, duración de la ejecución y tiempo improductivo y demás básicos concernientes a la ejecución de la labor.

![Procesar imagen](../../assets/images/cap10/chp10_img06.png)
_**Imagen 22.** Historia - Seguimiento y Cierre_

En la gráfica anterior, Ventana de Seguimiento o Cierre, se aprecian sus componentes y sus respectivos contenidos. Sobre cada campo se da una breve descripción:

**Que Hacer:** Este recuadro aparece con los campos bloqueados para que el usuario visualice la información básica de la OT.

**F/H de Paro:** Este campo aparece adicional sólo para las OT de HM Correctivas, y se registra la Fecha y hora del daño ocurrido. La fecha se maneja en formato DD/MM/AAAA (Día, Mes, Año); la hora se maneja en formato de 12h. Cabe anotar, que la fecha y hora consignadas corresponden al momento en que se informó del daño o falla a Mantenimiento, así que es posible que el daño haya ocurrido en una fecha/hora anterior. Sin embargo se debe procurar, administrativamente, que Mantenimiento se entere lo más pronto posible de la Fecha y Hora reales del Daño.

**F/H Atención:** Es la fecha y hora en la que el Personal de Mantenimiento atendió la solicitud de la labor, se hizo presente con una inspección previa sobre el Activo/Equipo reportado. La fecha se maneja en formato DD/MM/AAAA (Día, Mes, Año) y la hora se maneja en formato de 12h. Una vez se digita la Fecha y Hora de Atención, éstas se sugieren para la fecha/hora de Inicio de Trabajos y Fin de Trabajos de la OT, claro está, si tales fechas y horas no han sido digitadas aún.

**F/H Inicio Trabajos:** Es la Fecha y Hora que indica el momento en que se inició labores una vez que todas las condiciones fueron dadas: se han superado los tiempos de inspección y administrativos; la máquina está lista y en condiciones de ser mantenida, ya fue entregada al Depto. de Mantenimiento y éste a su vez, cuenta con todos los recursos necesarios para la ejecución: herramientas, instrumentos, materiales, repuestos y responsable. La fecha se maneja en formato DD/MM/AAAA (Día, Mes, Año) y la hora se maneja en formato de 12h.

**F/H Fin Trabajos:** Es la Fecha y Hora que indica el momento en que finalizaron las labores de mantenimiento, incluyendo las pruebas o ensayos que determinaron el buen funcionamiento del equipo. La fecha se maneja en formato DD/MM/AAAA (Día, Mes, Año) y la hora se maneja en formato de 12h.

**Tiempo Duración (ttr):** **AM** sugiere como Tiempo de Duración, (o time to repair), la diferencia entre la Fecha/Hora de Fin de Trabajos y la Fecha/Hora de Inicio de Trabajos. Cabe anotar, que no siempre el Tiempo de Duración es la diferencia entre estas fechas/horas, porque pueden existir eventos que dejaron temporalmente a la OT en Estado de “Pendiente”. AM permite corregir el tiempo de Duración en una OT, después de que fue calculado por el sistema, para que refleje el tiempo real de la ejecución.
Por ejemplo, si una OT tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30 a.m., y como Fecha de Fin de Trabajos XXXX/12/01 04:00 p.m., AM sugiere como Tiempo de Duración 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar otra labor, se debe corregir la duración en 5 horas y 30 minutos.

**T. Improductivo:** **AM** sugiere como Tiempo Improductivo la diferencia entre la Fecha/Hora de Fin de Trabajos y la Fecha/ Hora de Paro (Para OT Correctivas), o como la diferencia entre la Fecha/Hora de Fin de Trabajos y la Fecha/Hora de Inicio de Trabajos (Para OT no Correctivas). Sin embargo, este valor puede corregirse, después de que fue calculado por el sistema, para reflejar la cantidad Real de Tiempo Improductivo que tuvo el Equipo en la OT actual.

Por ejemplo, si una OT correctiva tiene como fecha de Información de Paro XXXX/12/01 08:00 a.m., y como fecha de Fin de Trabajos XXXX/12/02 12:30 pm, AM sugiere como Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora este turno de producción, se debe definir el tiempo improductivo como solamente de 20 horas y 30 minutos.


**Tiempo Total de Solución:**  Este campo es calculado por el sistema y no permite corrección manual, equivale a la diferencia entre la Fecha de Paro y la fecha de Fin de Trabajos para las Órdenes Correctivas y para las OT preventivas o con otro tipo de mantenimiento es la diferencia entre la Fecha De Atención y la Fecha Fin de Trabajos.


**Estado de la OT:** Un registro puede tener uno de los siguientes Estados:

| ABREVIATURA | SIGNIFICADO |
| ----------- | ----------- |
| **CE:**     | Cerrada Ejecutada  |
| **CR:**     | Cerrada Retroalimentada  |
| **K:**      | Cancelada   |

El estado de **Cerrada Retroalimentada** indica por cualquier razón una actualización sobre el registro de HM.

**Causa de Cierre:** Por defecto, cuando se trata de una OT cerrada y ejecutada, el sistema
 ubica en este campo la causa “OT Ejecutada”. Si la OT se ha cerrado con un Estado de “K:
Cancelada”, en este campo se definió la Causa respectiva y es posible que se pueda cambiar.

**FF Cierre:** Es asignada automáticamente por el sistema, cuando el usuario cambia la OT, SS o PA, al estado Cerrada Ejecutada o Cancelada.

**Activo No se entrega Limpio/ Activo se entrega limpio:** es un switch que permitió definir en el cierre de la OT si el activo se entregó limpio. 

**Causa de Falla:** Para OT correctivas, este campo es obligatorio, en al que se registró la Causa de la Falla que dio origen a la labor actual. Estas opciones que se despliegan, corresponden a las definidas en su tabla en la Infraestructura.

**Efecto de Falla:** Para OT correctivas, en este campo se registra el Efecto mas significativo de la falla que se presentó y fue reportado por producción.

**Meses de Garantía:** Indica cuántos meses de garantía se ofrecen por la labor realizada. El número de meses establecido empieza a regir a partir de la Fecha de Fin de Trabajos de la OT.

**Conf. Subjetiva AC.:** Este campo permitió al técnico ejecutor, establecer subjetivamente en cuánto quedó (en porcentaje) la confiabilidad del Activo/Equipo una vez finalizada la labor. Al
frente de este valor, aparece el porcentaje de confiabilidad actual del Equipo, como valor de referencia. Este valor fue definido por el responsable de la ejecución de la OT según su apreciación subjetiva.

**Email:** En este campo el sistema asigna automáticamente el correo electrónico del Solicitante definido en la ficha técnica de la OT de la ventana detalle en el campo de Correo Electrónico. 

**Fecha y estado del contador al momento de ejecución:** En este recuadro se ingresa toda la información relacionada con el contador del Activo y su fecha de lectura al momento del cierre de la OT. 

Se deben llenar los siguientes campos para proceder a actualizar la información:

**Tipo CO:** Este campo permanece bloqueado y muestra el nombre del Contador del Activo que fue asignado en el PM por Contador.

**Valor del CO en el Activo:** Este campo permanece bloqueado y muestra el valor del Contador del Activo que se tenga definido en el módulo de Activos en la pestaña Ficha Técnica.

**FF Lectura CO en el Activo:** Este campo permanece bloqueado y muestra la fecha de lectura del Contador del Activo que se tenga definido en el módulo de Activos en la pestaña Ficha Técnica.

**Valor del CO en la Generación:** Este campo permanece bloqueado y muestra el valor del Contador del Activo proyectado por el PM al momento de generarse la OT.

**FF Lectura CO en la Generación:** Este campo permanece bloqueado y muestra la fecha de lectura del Contador del Activo proyectado por el PM al momento de generarse la OT.

**Valor del CO en la Ejecución:** En este campo se define el valor del Contador del Activo al momento de ejecutarse la labor o al momento del cierre de la OT.

**FF Lectura CO en la Ejecución:** En este campo se definió la fecha de lectura del Contador del Activo al momento de ejecutarse o al momento del cierre de la OT.

En el Seguimiento o Cierre, además de los botones <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a> y <a class="btn blue">cancelar <span class="mdi mdi-block-helper"></span></a>, se visualiza el botón <a class="btn blue">bitácora <span class="mdi mdi-view-week"></span></a>, éste muestra en nueva ventana el historial de cambios de la OT en: Estado, Prioridad y Responsable. Se muestra esta información solo si se han presentado modificaciones, de lo contrario los campos permanecen en blanco.

![Procesar imagen](../../assets/images/cap10/chp10_img52.png)
_**Imagen 23.** Historia - Detalle Bitácora en Seguimiento y Cierre_


_>**Nota:** Nótese que para hacer efectivo los cambios efectuados en el seguimiento y cierre individual de la OT de HM se debe hacer clic en <a class="btn blue">Actualizar </a> como se indica en las dos imágenes anteriores, este botón sólo cumple la función de actualizar únicamente la pestaña de seguimiento y cierre, ya que el botón de <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a> se inactiva una vez que se encuentre en esta pestaña, es por esto que si se desean guardar otros cambios se debe estar en las otras pestañas (ficha técnica, gasto real, multimedia)_

Una vez se actualice el sistema responde con un mensaje de advertencia, para continuar dar un clic en <a class="btn white">aceptar</a>.

![Procesar imagen](../../assets/images/cap10/chp10_img53.png)
_**Imagen 24.** Historia - Mensaje alerta en Seguimiento y Cierre_


## Multimedia 

![Procesar imagen](../../assets/images/cap10/chp10_img54.png)
_**Imagen 25.** Historia - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.
A través de la ventana Multimedia se consulta o adjunta información adicional a la OT. Esta opción permite asociar a la OT uno o varios documentos, con el objetivo de registrar el trabajo realizado minuciosamente. **AM** acepta documentos de extensiones .DOC, XLS, PDF, JPG es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes.

Los documentos anexos pueden contener ayudas necesarias en la ejecución de la OT, planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, listas de verificación, protocolos de prueba u otra información estándar para su ejecución.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información a la OT, se deberán registrar así:

**Que Hacer:** Es la información general que aparece en cada pestaña con los campos bloqueados para que el usuario visualice la información básica de la OT.

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada a la OT. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas a la OT. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados a la OT. Ejemplo: Videos en formato wmv y mp4.

Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img55.png)
_**Imagen 26.** Historia - Abrir Explorador Archivos_

A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn">abrir</a>.

![Procesar imagen](../../assets/images/cap10/chp10_img56.png)
_**Imagen 27.** Historia - Seleccionar Archivos_

De manera adicional u opcional se puede escribir un nombre en el siguiente campo para enfatizar de lo que trata el archivo:

![Procesar imagen](../../assets/images/cap10/chp10_img57.png)
_**Imagen 28.** Historia - Nombrar Archivo_

Para finalizar dar un clic en el botón  <a class="btn white">subir archivo </a>,  el sistema responde con un mensaje aviso:

![Procesar imagen](../../assets/images/cap10/chp10_img58.png)
_**Imagen 29.** Historia - Subir archivo_

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre el nombre de una de las imágenes, se muestra la previsualización, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img59.png)
_**Imagen 30.** Historia - Prevualización formato imagen_

Para desasociar un documento, o una imagen o un video, a la OT se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn white">Aceptar</a>.

![Procesar imagen](../../assets/images/cap10/chp10_img60.png)
_**Imagen 31.** Historia - Desasociar archivo_


Si se desea descargar un archivo adjunto a la OT, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.


# Ventana Submenú de Historia de Mantenimiento

## Subgrupo

Se usa para seleccionar grupos de OT, SS y Paros  que cumplen con un conjunto de filtros o criterios. El objetivo de hacerlo, es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono <span class="mdi mdi-filter-variant"></span>, ubicado en la parte superior derecha de la ventana Visor de Historia.

![Procesar imagen](../../assets/images/cap10/chp10_img61.png)
_**Imagen 32.** Historia - Ir a Subgrupo_

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas las OT, SS y PA de Historia. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo, el mismo conjunto completo de todos los registros

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Los campos de datos que constituyen criterio de selección son los siguientes:

![Procesar imagen](../../assets/images/cap10/chp10_img62.png)
_**Imagen 33.** Historia - Subgrupo_

**1. FILTRAR POR TIPO DE REGISTRO**

**Tipo  de  Registro:**  Tres tipos de registros conforman la Historia de Mantenimiento: SS, OT y Paros/Averías. Con este filtro se seleccionan los registros de un tipo, de todos los tipos o de alguna combinación de ellos.

**2. FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO A LA ORDEN DE TRABAJO, PARO O SOLICITUD DE SERVICIO**

**AC-Alias:** Este campo filtra las OT Históricas, SS y PA para los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC – Cód. de Barras Int.:** Permite seleccionar las OT Históricas, SS y PA que se encuentran asociadas al Activo/Equipo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo del subgrupo y que posea una OT, SS y PA.

**AC – Cód. de Barras Prov.:** Permite seleccionar las OT Históricas, SS y PA asociadas a un Activo/Equipo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo/Equipo.

**AC-Código:** Esta selección agrupa las OT Históricas, SS y PA cuyo Activo/Equipo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todas las OT Históricas, SS y PA cuyo código de Activo inicia por 341. El porcentaje (%) es un carácter comodín que significa “todos”. También, es posible seleccionar el Activo a través del visor de Activos. Para ello se da un clic sobre el icono de filtro <span class="mdi mdi-filter-variant icon white"></span> de la respectiva ventana. Acto seguido se muestra la ventana de visor de Activos junto con la posibilidad de filtrar. Una vez se encuentra dicho Activo, se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">Aceptar</a> de esa ventana o se hace doble clic sobre el registro seleccionado. Inmediatamente ese código aparece en el primer campo de la línea de Activo en la forma de registro de OT, SS y PA.

**AC-Descripción:** Selecciona las OT Históricas, SS y PA asociados a los Activos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**AC-Estado:** Este filtro permite seleccionar las OT, SS y PA de acuerdo con el Estado del Activo u Objeto de Mantenimiento. Así que se pueden filtrar las OT para los cuales el AC correspondiente está activo o inactivo.

**AC-Número Activo Fijo:** Este campo preselecciona las OT Históricas, SS y PA para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines.

**AC-Referencia:** Esta opción permite seleccionar las OT Históricas, SS y PA de acuerdo con su número de referencia.

**AC-Serial:** Esta alternativa permite seleccionar las OT Históricas, SS y PA de acuerdo con el número serial del Activo/Equipo objeto de mantenimiento. El campo acepta comodines(%).

**AC-Ubicación Física:** Permite la selección de las OT, SS y PA Históricas cuyo Activo se encuentre en una Ubicación Física determinada. Existen dos formas de definir la Ubicación Física del Activo. La primera es seleccionando la Ubicación Física de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span>, una vez se visualice de esta manera <span class="mdi mdi-lock-open-outline"></span> se pueden usar comodines (%) y digitar a continuación segmentos del nombre de la Ubicación Física. Cuando se utilizan comodines, es posible seleccionar OT cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona las OT a Activos cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona las OT Históricas, SS y PA asociados a los Activos que se encuentran asociados al tipo ingresado por el usuario.

**AC - Con Descendientes:** Esta opción permite buscar las OT, SS y PA del eActivo raiz y todos sus activos hijos o descendientes asociados al código del Activo definido en el campo.

**3. FILTRAR POR CAMPOS DE LA ORDEN DE TRABAJO**

**Acción Técnica:** Filtra las OT Históricas a las cuales se le definió la Acción Técnica seleccionada en esta opción, es posible utilizar comodines (%). Existen dos formas de definir la Acción Técnica de la OT Histórica. La primera es seleccionando la Acción Técnica de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> para usar comodines (%), cuando el ícono se visualiza de esta manera <span class="mdi mdi-lock-open-outline"></span> y digitar a continuación segmentos del nombre de la Acción Técnica utilizando cuando se utilizan comodines, es posible seleccionar OT Histórica cuya Acción Técnica tenga parte del nombre igual.

**Causa de Cierre:** Permite buscar las OT Históricas que tienen una Causa de Cierre específica, es posible utilizar comodines (%). Existen dos formas de definir la Causa de Cierre de la OT Histórica. La primera es seleccionando la Causa de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, cuando se desbloquea <span class="mdi mdi-lock-open-outline"></span> para digitar a continuación segmentos del nombre de la Causa de Cierre utilizando comodines. Cuando se utilizan comodines (%), es posible seleccionar OT Histórica cuya Causa de Cierre tenga parte del nombre igual.

**Causa de Pendiente:** Permite buscar las OT Históricas, SS y PA que tienen una Causa pendiente específica. Existen dos formas de definirla. La primera es seleccionando la Causa de Pendiente de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, este se desbloquea <span class="mdi mdi-lock-open-outline"></span> y a continuación se digitan segmentos del nombre de la Causa de Pendiente. Cuando se utilizan comodines (%), es posible seleccionar OT, SS y PA cuya Causa de Pendiente tenga parte del nombre igual.

**Causa de Falla:** Permite buscar las OT Históricas, SS y PA que tienen una Causa de Falla específica. Existen dos formas de definir la Causa de Falla de la OT, SS y PA. La primera es seleccionando la Causa de Falla de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, este se desbloquea <span class="mdi mdi-lock-open-outline"></span> y a continuación se digitan segmentos del nombre de la Causa de Falla. Cuando se utilizan comodines(%), es posible seleccionar OT, SS y PA cuya Causa de Falla tenga parte del nombre igual.

**Centro de Costo:** Permite la selección de OT Históricas, SS y PA de acuerdo con el Centro de Costo asignado a ella. Existen dos formas de definir el Centro de Costo. La primera es seleccionando el Centro de Costo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, luego este se desbloquea  <span class="mdi mdi-lock-open-outline"></span> digitando a continuación segmentos del nombre del Centro de Costo. Cuando se utilizan comodines (%), es posible seleccionar las OT Históricas, SS y PA pertenecientes a Centros de Costo que tengan parte del nombre igual. Por ejemplo: Sistema% selecciona todas los registros Históricas, en cuyo Centro de Costo exista la palabra Sistema, independiente de si se está hablando del Sistema de Agua, de Vapor o de Energía.

**Centro responsable:** Agrupa las OT Históricas, SS y PA cuyo Centro Responsable sea el seleccionado, es posible utilizar comodines(%).Existen dos formas de definir el Centro Responsable. La primera es seleccionando el Centro Responsable de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, este se desbloquea permitiendo digitar segmentos del nombre del Centro Responsable.

**Contrato:** Permite filtrar las OT Históricas que se encuentren asociadas a un contrato ya definido en la tabla de “CONTRATO” en el módulo de Infraestructura. Existen dos formas de definir el Contrato de la OT Histórica. La primera es seleccionando el Contrato de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span>, este se desbloquea <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar a continuación segmentos del nombre del Contrato utilizando comodines (%). Cuando se utilizan comodines, es posible seleccionar OT Histórica cuyo Contrato tenga parte del nombre igual.

**Criterio de Generación:** Permite seleccionar el subconjunto de OT Históricas generadas desde PM, bajo el Criterio de Programación “XX” seleccionado. Es posible utilizar comodines (%). Los criterios son:

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

**Descripción:** Esta opción permite seleccionar las OT Históricas, SS y PA que cumplan con el criterio de selección establecido en este campo, es posible utilizar la funcionalidad de comodines (%). 

**Efecto de Falla:** Este campo permite seleccionar las OT Históricas que posean una causa de falla específica, es posible utilizar comodines (%). Existen dos formas de definir el Efecto de Falla de la OT Histórica. La primera es seleccionando el Efecto de Falla de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> este se desbloquea <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar a continuación segmentos del nombre del Efecto de Falla. 

**Estado General:** Permite seleccionar las OT Históricas de acuerdo con su estado de cierre: “Cerradas” que fueron normalmente ejecutadas o “Canceladas”.

**Estado Particular:** Permite seleccionar las OT Históricas, SS y PA de acuerdo con su estado. Al descolgar aparece el listado de todos los tres únicos estados posibles: "Cancelada", "Cerrada" y "Cerrada Retroalimentada".

**Comentarios:**  Filtra los registros que coincidan con el comentario aquí en este campo. Es posible usar comodines (%) para filtrar porciones del texto.

**FF de Cierre:** Este criterio filtra las OT Históricas por un rango de la Fecha de Cierre. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan los registros Históricas cuya fecha de cierre esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT Históricas cuya fecha de cierre esté en un lapso posterior a la digitada en “Desde”.

**FF Consumo en Materiales:** Este criterio filtra las Órdenes de Trabajo Históricas por un rango de la Fecha de consumo de materiales en el Gasto Real de la OT. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las Órdenes de Trabajo cuya fecha de consumo de materiales esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT cuya fecha de consumo de materiales esté en un lapso posterior a la digitada en “Desde”.

**FF Consumo en Mano de Obra:** Este criterio filtra las OT Históricas por un rango de la Fecha de consumo de mano de obra en el Gasto Real de la OT. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan los registros cuya fecha de consumo de mano de obra esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT cuya fecha de consumo de mano de obra esté en un lapso posterior a la digitada en “Desde”.

**FF Consumo en Otros Conceptos:** Este criterio filtra las OT Históricas por un rango de la Fecha de consumo de gastos indirectos en el Gasto Real de la OT. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan los registros cuya fecha de consumo de mano de obra esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT cuya fecha de consumo esté en un lapso posterior a la digitada en “Desde”.

**Fecha de Daño:**Este criterio filtra los registros Históricos por un rango de la Fecha de Daño, Paro o Avería. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las OT Históricas cuya fecha de Daño esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT Históricas cuya fecha de Daño esté en un lapso posterior a la digitada en “Desde”.

**FF Inicio de Trabajo:** Este criterio filtra los registros Históricos por un rango de la Fecha de Inicio de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las Órdenes de Trabajo Históricas cuya fecha de inicio esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan los registros cuya fecha de inicio esté en un lapso posterior a la digitada en “Desde”.

**FF Fin de Trabajo:** Este criterio filtra los registros Históricos por un rango de la Fecha de Fin de Trabajos. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan los registros cuya fecha de fin de trabajos esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT Históricas cuya fecha de fin de trabajos esté
 en un lapso posterior a la digitada en “Desde”.

**Fecha de Creación:** Este criterio filtra los registros Históricos por rango en la fecha de su creación. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las Órdenes de Trabajo Históricas cuya fecha programada esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan los registros cuya fecha de creación esté en un lapso posterior a la digitada en “Desde”.

**FF Programada:** Este criterio filtra las OT Históricas por un rango de la Fecha Programada. Aparecen dos campos: Desde y Hasta. En cada uno de ellos se digita una fecha. De no digitar el campo “Desde”, se buscan las OT Históricas cuya fecha programada esté en el lapso anterior a la fecha digitada en “Hasta”. De no digitar el campo “Hasta”, se buscan las OT Históricas cuya fecha de programación esté en un lapso posterior a la digitada en “Desde”.

**Gasto Real Mano Obra:**  Al seleccionar esta opción se habilita una lista desplegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación. Los criterios son: Igual (=), Mayor (>) y Menor (<). Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético. Ejemplo: si se escoge el criterio Mayor (>) y la cantidad es 100.000, eso significa que filtrara todas las OT Históricas cuyo Gasto Real en la Mano de Obra Interna sea Mayor a Cien Mil Pesos o unidades monetarias.

**Gasto Real Materiales y Repuestos:** Al seleccionar esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación. Los criterios son: Igual (=), Mayor (>) y Menor (<). Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético. Ejemplo: si se escoge el criterio Mayor (>) y la cantidad es 100.000, eso significa que filtrara todas las OT Históricas cuyo Gasto Real en Materiales y Repuestos sea Mayor a Cien Mil Pesos o unidades monetarias.

**Gasto Real Otros Conceptos:** Al seleccionar esta opción se habilita una lista despegable donde se escoge el criterio deseado, junto con un cuadro donde se digita el valor de comparación. Los criterios son: Igual (=), Mayor (>) y Menor (<). Estos criterios actúan en comparación con el valor digitado en la casilla que se activa al lado del operador aritmético. Ejemplo: si se escoge el criterio Mayor (>) y la cantidad es 100.000, eso significa que filtrara todas las OT Históricas cuyo Gasto Real en Otros Conceptos de Costo sea Mayor a Cien Mil Pesos o unidades monetarias.

**Responsable por la Institución:** Filtra las OT Históricas de acuerdo al Responsable por Institución o la persona que recibe a satisfación. Existen dos formas de buscar el Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable, en el cual también es posible usar comodines (%). Cuando se utilizan comodines, es posible seleccionar las OT cuyo Responsable tenga una parte del nombre igual.

**Número de la OT:** Permite filtrar OT Históricas, con base en su número consecutivo. Para ello se define en el criterio un rango. Aparecen cuatro campos, para ubicar el comienzo del rango “Desde” (Año-Consecutivo) y el fin del rango “Hasta” (Año- Consecutivo). De no digitar los campos “Desde”, se buscan las OT Históricas cuyo número es inferior al digitado en “Hasta”. De no digitar los campos “Hasta”, se buscan las OT Históricas cuyo número es posterior al digitado en “Desde”.

**Prioridad:** Permite hacer subgrupo de OT Históricas, cuya prioridad es la seleccionada en este criterio, habilitándose una lista despegable desde el nivel 1 hasta el nivel 7.

**Referencia:** Esta opción permite seleccionar las OT Históricas que tienen asociado el valor seleccionado, en el campo Referencia. Es posible utilizar comodines (%).

**Responsable:** Filtra las SS, PA y OT Históricas de acuerdo al Responsable ejecutor. Existen dos formas de buscar el Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable. En este campo también es posible usar comodines (%), es posible seleccionar las OT cuyo Responsable ejecutor tenga una parte del nombre igual.

**Responsable en Gasto Real:** Permite filtrar las OT Históricas cuyo Responsable ejecutor en Gasto Real está definido en la Mano de Obra del Gasto Real. Existen dos formas de buscar el Responsable. La primera es seleccionándolo de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> permitiendo digitar segmentos del nombre del Responsable. En este campo también es posible usar comodines (%), es posible seleccionar las OT cuyo Responsable definido en el Gasto Real, tenga una parte del nombre igual.

**RP-Código:** Filtra las OT Históricas cuyo Repuesto fue asociado en el Gasto Real en Materiales y Repuestos. Para definir el Repuesto de la OT Histórica, primero se elige el almacén de la lista desplegable en el primer campo. Luego de seleccionarlo, se activa automáticamente el segundo campo que permite seleccionar el Repuesto a través del visor de Materiales y Repuestos. Para ello se da un clic sobre el icono de subgrupo <span class="mdi mdi-filter-variant"></span>. Acto seguido se muestra la ventana de visor de Materiales y Repuestos junto con la de subgrupo para poder ubicarlo. Una vez se encuentra el Repuesto en la Tabla de visor de Materiales y Repuestos, se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">Aceptar</a> de esa ventana o se hace doble clic sobre el registro seleccionado. Inmediatamente ese código aparece en el segundo campo en la forma de registro de Ordenes de Trabajo Histórica.

**Solicitante (Digitado Manualmente):** Permite la preselección de las OT Históricas, SS y PA cuyo Solicitante fue especificado manualmente, y coincide con el definido en este campo. Se pueden utilizar los comodines (%).

**Solicitante (Incluido en terceros - Tipo RI):** Permite la preselección de las OT Históricas, SS y PA cuyo Solicitante fue seleccionado de la tabla de terceros (como RI) y coincide con el definido en este criterio. Existen dos formas de definir el Solicitante de la OT, SS y PA. La primera es seleccionando el Solicitante de la lista desplegable. La segunda es dando clic al icono de candado <span class="mdi mdi-filter-variant"></span> y digitando a continuación segmentos del nombre del Solicitante utilizando comodines (%). Cuando se utilizan comodines, es posible seleccionar OT Histórica, SS y PA cuyo Solicitante tenga parte del nombre igual.

**Tipo de Actividad:** Filtra las OT Históricas, SS y PA por Tipo de Actividad. Existen dos formas de definir el Tipo de Actividad de la OT Histórica, SS y PA. La primera es seleccionando el Tipo de Actividad de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-filter-variant"></span> y digitando a continuación segmentos del nombre del Tipo de Actividad utilizando comodines (%). Cuando se utilizan comodines, es posible seleccionar OT Histórica, SS y PA cuyo Tipo de Actividad tenga parte del nombre igual.

**Tipo de Mantenimiento:** Filtra las OT Históricas, SS y PA por el Tipo de Mantenimiento elegido de la lista desplegable. Al activar ésta opción se activan las siguientes opciones: Correctivo, Preventivo, Preventivo Manual, Predictivo, Metrología, Inspección, Lubricación, Otro-Mantto y Otro.

**Tipo de Trabajo:** Agrupa las OT Históricas, SS y PA de acuerdo al TT seleccionado, sin importar si tienen otros tipos de trabajo activos. Incluso, es posible seleccionarlos todos al mismo tiempo.

**Ubicación Física:** Permite la selección de las OT Históricas, SS y PA cuyo Activo esté en la ubicación física que se determina en este criterio. Existen dos formas de filtrar la Ubicación Física. La primera es seleccionando la Ubicación Física de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span> el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar a continuación segmentos del nombre de la Ubicación Física. Es posible utilizar comodines (%) y seleccionar OT cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona los registros cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**4. FILTRAR POR CAMPOS PARTICULARES DE PAROS**

**Turno:** Permite filtrar de los PA Históricos cuyo turno laboral indique en el cual se produjo el paro. Se puede elegir entre los turnos 1, 2, 3 y 4.

**Módulo:** Permite filtrar de los PA Históricos, cuyo campo tenga  definido información documental, variable, según las necesidades propias de la Organización.

**Operación:** Permite filtrar de los PA Históricos cuya operación  fue la que se registró en el momento en que se produjo el fallo, daño o avería.

**Operador:** Permite filtrar de los PA Históricos cuyo operario de mantenimiento corresponde al que está registrado en la tabla de  Terceros del módulo de  Infraestructura. La selección del operario también se puede realizar utilizando los comodines (%).

**Referencia:** Permite filtrar los PA Históricos que tengan registrada la referencia elegida. En este campo se pueden utilizar los comodines.

**Restricción:** Permite la selección de los PA Históricos que hayan sido o no restrictivo en el momento en que se presentó el fallo del 
Activo/Equipo.

**5. FILTRAR POR CAMPOS PARTICULARES DE SOLICITUDES DE SERVICIO**

**Estado:** Permite seleccionar las SS Históricas de acuerdo con su estado de cierre: **Cerrada no ejecutada**, **Cerrada ejecutada**, **Cerrada con OT** o **Cerrada Retroalimentada**.

_**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos, se pueden utilizar uno o varios de los criterios anteriores, simultáneamente. Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón <a class="btn white">Mas <span class="mdi mdi-plus-circle"></span></a> o <a class="btn white">Menos <span class="mdi mdi-minus-circle"></span></a>en lugar de darlo al botón <a class="btn white">aceptar <span class="mdi mdi-check-circle"></span></a>._



## Exportar

Esta opción permite exportar los ítems o campos de la ficha técnica de OT, bien sea, para exportar todas las OTs de la base de datos o las provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente.
Para efectuar este proceso, se da clic en Exportar <span class="mdi mdi-download"></span> mostrando las siguientes opciones de exportación:


![Procesar imagen](../../assets/images/cap10/chp10_img63.png)
_**Imagen 34.** Historia - Exportar_


En la gráfica anterior, se aprecian sus componentes y sus respectivos contenidos:

**Exportar Visor:** Esta opción exporta todas los registros seleccionadas en el visor mediante un subgrupo.

**Exportar Todos los Registros:** Esta opción exporta todas las OT, SS y PA existentes en la base de datos, sin importar cualquier subgrupo activo.
Luego de escoger una de las opciones anteriores, en la parte inferior aparece seleccionado por defecto el recuadro <a class="btn white"><span class="mdi mdi-checkbox-blank-outline"></span> exportar todos los campos</a> pero si se prefiere uno o varios, se debe des-seleccionar y a continuación hacer clic en los recuadros a exportar, una vez elegida la información, se da clic en el botón inferior <a class="btn white">exportar</a> el cual genera un archivo de Excel que se descarga automáticamente. El objetivo de esta exportación es llevar toda la información de las OT, SS y PA a un archivo plano, para luego ser analizadas.

## Servicios

### Reportes

Este comando permite visualizar los reportes relacionados a OT, SS y PA en Historia. Existen los siguientes tipos de reportes básicos disponibles:

![Procesar imagen](../../assets/images/cap10/chp10_img64.png)
_**Imagen 35.** Historia - Reportes_

Los anteriores reportes pueden ser seleccionados para una o varios registros a través de las siguientes opciones:

**Todos los Registros:** Con esta opción se realiza la impresión de todas las OT, SS y PA Históricos existentes en la base de datos, sin importar cualquier subgrupo activo.

**Registros del Visor:** Esta opción permite hacer una impresión de todas las OT que están seleccionadas en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

**Registro Seleccionado:** Esta opción permite hacer una impresión de la OT, SS y PA Históricos que esta seleccionado en la Ventana Visor (el cursor verde se encuentra sobre sí).

Una vez seleccionada una de las opciones anteriores se procede a elegir uno de los reportes mostrados.

**Subtítulo:** En este campo es posible escribir un poco menos de una línea de información, bien sea para indicar un tipo documentación del Reporte. Lo que se escriba aquí aparecerá en la línea inferior del título estándar.

Para visualizar los reportes, se selecciona el reporte y luego se da clic al botón <a class="btn white">imprimir</a>.

Para Exportar los reportes, se selecciona el reporte y luego se da clic al botón <a class="btn white">exportar</a>.

Para Cerrar la ventana de los Reportes, se da clic en el botón<a class="btn white">cerrar</a>.

El reporte con código **HMI-CMDAP de Análisis Previo de Disponibilidad** es necesario hacer una carga de datos primero según la información que se tenga filtrada para poder apreciar de manera correcta el análisis de los datos cuando se imprima el reporte, como se indica en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img35.png)
_**Imagen 36.** Historia - Reporte Cargar Análisis Previo de Disponibilidad_

Primero se debe un clic en el botón <a class="btn white">cargar</a>. Una vez que carguen los datos, se muestra el siguiente mensaje:

![Procesar imagen](../../assets/images/cap10/chp10_img36.png)
_**Imagen 37.** Historia - Reporte Mensaje Análisis Previo de Disponibilidad_

De esta manera ya se puede <a class="btn white">imprimir</a> o <a class="btn white">exportar</a> y visualizar el reporte.

A continuación se muestra la vista previa de impresión en formato pdf:

![Procesar imagen](../../assets/images/cap10/chp10_img37.png)
_**Imagen 38.** Historia - Reporte Vista Previa Análisis Previo de Disponibilidad_

Para imprimir o exportar el reporte **HME-CRMACC-Cronograma de Mantenimientos Ejecutados** se debe primero, ir a la transacción de inicio **Valores OOAK** como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img38.png)
_**Imagen 39.** Historia - Valores OOAK_

Luego, se debe digitar el año del cual se quieren analizar los datos, como se indica en la siguiente imagen, a continuación dar un clic en <a class="btn white">cambiar</a> y esperar el mensaje de confirmación:

![Procesar imagen](../../assets/images/cap10/chp10_img39.png)
_**Imagen 40.** Historia - Ingresar Valores OOAK_

![Procesar imagen](../../assets/images/cap10/chp10_img40.png)
_**Imagen 41.** Historia - Mensaje Alerta Valores OOAK_

A continuación, se debe refrescar la página, o bien dando clic derecho y eligiendo la opción **Volver a Cargar** y se debe dirigir nuevamente al módulo de <a class="btn blue">Historia</a> e ir la opción Reportes <span class="mdi mdi-printer"></span> y a continuación <a class="btn white">exportar</a> o <a class="btn white">imprimir</a> los resultados, nótese que el año al lado del campo del reporte confirma el valor OOAK ingresado anteriormente:

![Procesar imagen](../../assets/images/cap10/chp10_img41.png)
_**Imagen 42.** Historia - Cronograma de Mantenimientos Ejecutados_

A continuación se muestra la visualización del respectivo reporte:

![Procesar imagen](../../assets/images/cap10/chp10_img42.png)
_**Imagen 43.** Historia - Reporte Cronograma de Mantenimientos Ejecutados_




# Transacciones

## Enviar a Historia Archivada 

En ocasiones la Historia de Mantenimiento puede volverse pesada debido a grandes volúmenes de información que puede llegar a contener,  lo cual, a falta de mantenimiento se afecta la base de datos y el sistema se ralentiza. Por lo tanto se hace necesaria la herramienta **Enviar a Historia Archivada**. De esta manera toda la información preseleccionada en el Subgrupo en el módulo de <a class="btn blue">Historia</a>, se transfiere a <a class="btn blue">Historia Archivada </a>, la cual tiene la característica de ser completamente independiente de la base de datos, es decir, toda la información a su origen que antes era fundamentada en links o enlaces con otros módulos como Infraestructura (Centro de Costo, Ubicación Física, Centro Responsable, Responsable), Repuestos y Activos se desaparecen y se resuelven quedando con la información real, es decir, ahora todos los campos son diligenciados y están grabados, por lo que se visualiza en una tabla plana que contiene la misma información pero inmodificable. Esto al suceder con un gran volumen de Órdenes, la base de datos se hace mas liviana y  ágil. Es así como se pueden hacer las mismas consultas de registros e impresión de un reporte básico disponible para analizar un registro individual (OT, SS o Paro). 


Es importante tener en cuenta que cuando se envían registros a <a class="btn blue">Historia Archivada</a> los enlaces desaparecen y se hace posible eliminar o hacer limpieza de registros muy antiguos como Centros de Costo, Terceros, Ubicaciones Físicas, Activos, entre otra información que no tenga uso o no sea vigente.

El envío de registros Históricos a Historia Archivada es un proceso controlado, es decir, este envío se hace por cada 5000 registros como máximo y estos deben ser preseleccionados en un Subgrupo, el cual puede tardar horas, por ende, se recomienda hacer un respaldo de datos previo de esta transacción.

Para enviar registros de **Historia** a **Historia Archivada**, previamente se debe hacer un subgrupo y luego sobreponer el cursor sobre el módulo de <a class="btn blue">Historia</a> y dar clic en **Enviar Historia Archivada** como se indica a continuación:


![Procesar imagen](../../assets/images/cap10/chp10_img43.png)
_**Imagen 44.** Historia - Ir a Enviar a Historia Archivada_

Al ingresar a la transacción se muestra la siguiente ventana:

![Procesar imagen](../../assets/images/cap10/chp10_img44.png)
_**Imagen 45.** Historia - Enviar a Historia Archivada_

**Historia Archivada** se puede enviar un registro de OT, SS o Paro
o un conjunto de registros preseleccionados:

**Todas las HIs del visor:** Esta opción envía todos los registros históricos de la Ventana Visor, es decir, los registros preseleccionados a través del Subgrupo actual.

**La HI seleccionada:** Esta opción permite enviar el registro que está seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

Luego de seleccionar una de las opciones anteriores dar clic en el botón <a class="btn blue">Enviar a Historia Archivada</a>, ubicado en la parte inferior de las opciones en el cual aparecerá un mensaje de alerta para el usuario:

![Procesar imagen](../../assets/images/cap10/chp10_img45.png)
_**Imagen 46.** Historia - Mensaje Alerta Enviar Historia Archivada_

Para continuar con el proceso de envío dar clic en <a class="btn white">Aceptar</a>.

Cuando el proceso termine, el sistema muestra un mensaje alerta confirmando el proceso con el número de registros enviados exitosamente entre paréntesis:

![Procesar imagen](../../assets/images/cap10/chp10_img46.png)
_**Imagen 47.** Historia - Mensaje Alerta Envío a Historia Archivada_

>**Nota:** Si el número de registros a enviar es mayor a 5000 registros el sistema muestra un mensaje de advertencia.


![Procesar imagen](../../assets/images/cap10/chp10_img47.png)
_**Imagen 48.** Historia - Mensaje Advertencia_



## DashBoard de HI

Para acceder a esta opción, se debe sobreponer el cursor sobre el módulo de Historia y a continuación, dar un clic sobre la transacción, como se muestra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img27.png)
***Imagen 49.** Historia - Ir a Dashboard*

Este comando permite visualizar en tiempo real el comportamiento de los registros de Órdenes de Trabajo Históricas, Solicitudes de Servicio y Paros, con el fin de usarse como una herramienta para análisis y toma de decisiones rápidas, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap10/chp10_img28.png)
***Imagen 50.** Historia - Dashboard*
 
De la imagen anterior, la información del rectángulo anaranjado ubicado en la parte superior derecha indica el número de registros de OT Históricas, SS y PA filtrados a través del subgrupo o la cantidad total de registros de OT Históricas, SS y PA, existentes en el módulo de HI. 

Como guía existe un indicador a modo de fracción (N/M) que indica el número total de registros de OT Históricas, SS y PA seleccionados (N) sobre el número de registros totales en el módulo de HI (M).

Es por lo anterior que esta fracción se verá afectada al realizarse un “Subgrupo” o filtro en el módulo seleccionado, por lo cual se muestra la cantidad de registros del subgrupo actual (N) y el total de registros existentes en el módulo de Historia (M). Si no hay filtro, los dos números en sus totales son los mismos, como se indica en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img29.png)
***Imagen 51.** Historia - Dashboard*

Al dar clic sobre los rectángulos de colores, se oculta la información correspondiente a cada rectángulo, como se ilustra en la siguiente imagen:

![Procesar imagen](../../assets/images/cap10/chp10_img30.png)
_**Imagen 52.** Historia - Dashboard_

El valor que está ubicado dentro del rectángulo verde, indica el número total de OT Históricas, SS o PA existentes en HI o existentes en el subgrupo realizado, según corresponda al DashBoard.

![Dashboard OT](../../assets/images/cap10/chp10_img31.png)
_**Imagen 53.** Historia - Dashboard OT_

Sí se desea restablecer la información, se debe dar clic al icono de las flechas circulares <span class="mdi mdi-autorenew"></span>. En cambio, si se desea exportar el gráfico en un formato de imagen, es posible dando clic a la flecha hacia abajo <span class="mdi mdi-download"></span>.

![Dashboard SS](../../assets/images/cap10/chp10_img32.png)

_**Imagen 54.** Historia - Dashboard SS_

## Eliminar Masivamente

Eliminar masivamente se ejecuta cuando se tiene la certeza de la existencia  datos en <a class="btn blue">Historia</a> que no se necesitarán mas en adelante. Borrar masivamente Historia, implica no sólo eliminar datos del sistema sino también de la base de datos, lo que quiere decir que no se podrán hacer mas consultas sobre estos registros, a gran diferencia del envío a **Historia Archivada** en la que los datos si se pueden consultar uno a uno e imprimir un reporte básico.   

>**Nota:** El resultado de ejecutar el ambos procesos da como resultado la ligereza de la base de datos, es decir, eliminar masivamente datos basura sobre Terceros y Activos, siempre y cuando todo lo se borre sea desde Historia o bien se haya enviado a Historia Archivada, en este último, al desaparecer los links también se hace posible la transacción **Eliminar Masivamente Historia**.

Para ir a la transacción sobreponer el cursor sobre el módulo de  <a class="btn blue">Historia</a> y dar clic en la opción **Eliminar Masivamente**, como se indica a continuación:

![Dashboard SS](../../assets/images/cap10/chp10_img48.png)
_**Imagen 55.** Historia - Ir a Eliminar Masivamente_

Para eliminar un conjunto de registros se debe primero realizar un Subgrupo no mayor de 5000 mil registros (este proceso puede tardar hasta 5 horas dependiendo del subgrupo), de no hacerlo el sistema muestra un mensaje de advertencia:

![Dashboard SS](../../assets/images/cap10/chp10_img47.png)
_**Imagen 56.** Historia - Alerta Eliminar Masivamente_

Una vez se tenga el conjunto de registros preseleccionados proceder con la transacción así:

![Dashboard SS](../../assets/images/cap10/chp10_img49.png)
_**Imagen 57.** Historia - Eliminar Historia_

Se puede eliminar un registro de OT, SS, Paro o un conjunto de registros preseleccionados: 

**Todas las HIs del visor:** Esta opción eliminar todos los registros históricos de la Ventana Visor, es decir, los registros preseleccionados a través del Subgrupo actual.

**La HI seleccionada:** Esta opción permite eliminar el registro que está seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

Para continuar dar clic en el botón <a class="btn blue">eliminar historia</a> ubicado debajo de las opciones anteriores, el sistema muestra un mensaje alerta:

![Dashboard SS](../../assets/images/cap10/chp10_img50.png)
_**Imagen 58.** Historia - Mensaje Advertencia Eliminar Masivamente_

Para finalizar el proceso dar clic en <a class="btn blue">aceptar</a>, y el sistema confirma  a través de un mensaje aviso: 

![Dashboard SS](../../assets/images/cap10/chp10_img51.png)
_**Imagen 59.** Historia - Aviso Satisfactorio Eliminar Masivamente_




