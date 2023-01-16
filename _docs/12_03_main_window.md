---
title: Ventana Principal
subtitle: Esta sección explica los componentes de la ventana principal y ventana detalle con sus vistas parciales
tags: [setup]
author: win
order: 12_03
---

# Ventana Principal de Historia Archivada

## Ventana Visor de Historia Archivada

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img01.png)
_**Imagen 1.** Historia Archivada - Visor_

A esta ventana se accede haciendo clic sobre la opción <a class="btn blue">Historia Archivada</a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los registros archivados. Se visualizan todos los registros de la Historia  Archivada o una selección de ellos a través de un subgrupo.  La HA disponible se despliega a través de las páginas.  El tamaño de los registros en el visor, al igual que en todos los visores del sistema se  configura desde <a class="btn blue">administración</a> por medio de un usuario administrador.

Los títulos en azul que encabezan las columnas, permiten ordenar de manera ascendente/descendente la información por cada ítem seleccionado, por medio de un clic en el respectivo encabezado.

## Ventana Detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img02.png)
_**Imagen 2.** Historia Archivada - Ventana Detalle_

En la gráfica anterior, Ventana Detalle de Órdenes de Trabajo HA, se aprecian  sus componentes  y  sus  respectivos  contenidos.  

Toda la información de esta tabla de HA es inmodificable.

A continuación se describen los campos que componen esta ventana Detalle de Órdenes de Trabajo HA. Sobre cada campo se da una breve explicación:

**OT:** Aparece el número de la Órden de Trabajo asignado por **AM** cuando fue generada.

**F/H Creación:** Es la fecha en la cual se creó la OT.  Esta fecha es asignada automáticamente por el sistema.

**Descripción:** Es un texto corto por medio del cual se indica la naturaleza de la  labor  a realizar.  Debe ser conciso y no dar lugar a ambigüedades, este campo tiene una longitud de 80 caracteres.  

**Prioridad:** Es  un número de  1  a  7  que  indica la  prioridad de realización de la   **OT**. Normalmente 1 significa un trabajo de gran urgencia, mientras que 7 es una labor de baja prioridad.

**F/H Programada:** En  este  campo se muestra  la  fecha  programada para  realizar  la ejecución de la OT.

**Referencia:** En  este  campo  se indica  el  número de  un  documento,  que sirvió como referencia o relación a la OT.  

**Estado:** Este campo muestra el Estado de la OT. 

**Código del Activo:** Aquí se estableció el Activo/Equipo que fue objeto de la labor.

**Descripción:**  En este  campo  se  visualiza  la   información  de la descripción del Activo seleccionado.

**Activo Fijo:** Se visualiza la información del Número de Activo Fijo del Activo/Equipo que se haya definido en la ficha técnica de este mismo.

**Referencia Externa Proveedor:** En este campo se visualiza la información de la referencia del Activo/Equipo que se haya establecido en la ficha técnica de este mismo.

**Serial:** En este campo se visualiza la información del Serial del Activo/Equipo que se haya definido en la ficha técnica de este mismo.

**Alias:** En  este campo se  visualiza la  información del  Alias  del Activo/Equipoque se haya definido en la ficha técnica de este mismo.

**Solicitante:** En este campo se definió el nombre del Solicitante de la OT. Cuando la OT fue generada desde una Solicitud de Servicio, este campo contiene el  nombre del solicitante ingresado en la Solicitud.

**Correo Electrónico:** En este campo se definió el correo electrónico del Solicitante del servicio.

**Centro de Costo:** Es el Centro de Costo asignado a la OT que corresponde a los predefinidos en la tabla de infraestructura  y  que  es Responsablde  del pago de los consumos de  Gasto   Real  ue dicha  OT. 

**Ubi. Física:** Es el lugar físico en el que se realizó la labor.	

**Centro Responsable:** Muestra el Centro Responsable o grupo de mantenimiento, encargado  de realizar la labor.

**Responsable ejecutor:** En este campo se muetsra a la persona, natural o jurídica, Responsable por la labor ejecutada.

**Contrato:** Se muestra referenciado el contrato que fue asociado a la OT.

**Responsable por la institución:** Este campo muestra a la persona de la institución, que acompañó y/o recibió la labor prestada por el Responsable ejecutor, cuando este haya sido un Contratista o Servicio Externo.

**T. Trabajo:** Indica los Tipos de Trabajo que fueron asociados a la OT.   

**T. Mtto:** Este campo indica el Tipo de Mantenimiento asociado a la OT. 

**T. Actividad:** Aquí se establece el Tipo de Actividad asociada a la OT.  

**F/H Paro:** Para las OT Correctivas, en este campo se registró la Fecha y hora del daño, falla o avería.  Cabe anotar, que la fecha y hora consignadas corresponden al momento en	que	se informó  del daño o  falla a Mantenimiento.

**T.  Estimado:** Es un campo netamente informativo, e indica el presupuesto aproximado de tiempo que iba a demorar la  labor. 

**Tiempo Improductivo:**  En este campo se indicó si la parada del respectivo Activo generó tiempo improductivo. 

**Criterio:** Este campo indica el criterio utilizado por **AM** para haber generado la OT. (Solamente para Órdenes de Trabajo que fueron generadas desde Programadas).

**Tarea:**  Este  campo  indica cual fue el PM que generó la OT. Es válido solamente  en  el caso de Órdenes Programadas.

**Control  Presupuestal:** Esta  opción indica si  la  OT debía manejar Presupuesto. 


**Comentarios:** Muestra los comentarios referentes a toda la ejecución de la OT. Los comentarios se visualizan en un sólo recuadro individual.


## Vistas Parciales / Pestañas


### Gasto Real

Para ingresar a esta opción, se debe dar clic en la pestaña “Gasto Real” de la ventana detalle de Órdene de Trabajo Histórica.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img03.png)
_**Imagen 3.** Historia Archivada- Gasto Real de una OT_

Esta tabla resume los totales de los gastos de Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos de Costo. A través de esta ventana de Gasto Real se puede administrar el Gasto Real de la OT Histórica. Se compone de dos zonas:

En la zona superior, aparece la matriz de Gasto Real, que resume los costos reales para la OT, discriminando por TT (En las filas), y por Tipo de Consumo (En las columnas). La última fila y la última columna de la matriz, discriminan la diferencia contra el Presupuesto, conformando así el Control Presupuestal de la OT.

En la zona inferior, aparecen los botones para ingresar <a class="btn gray">mano obra interna</a>, <a class="btn gray">mano obra externa</a>, <a class="btn gray">mat y rep</a>, y <a class="btn gray">o.conceptos</a>. Sin embargo, cabe destacar que son sólo en este caso para consultar el detalle de cada uno de ellos.

**Mano de obra Interna**

A través de la ventana de GR de Ingreso de Mano de Obra Interna se hace consulta de las personas que fueron ingresadas.

Para ver el detalle de laMO se debe dar clic en el botón <a class="btn gray">adicionar mano de obra interna</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img04.png)
_**Imagen 4** Historia Archivada- Gasto Real MO_

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el oficio al que pertenece el Responsable asignado. Es un campo de solo lectura, que se establece una vez se selecciona el Responsable.

**Responsable:** Es la persona que ha ejecutado la OT. 

**H. Hombre:** Es el número de Horas Hombre consumidas por el Responsable en cuestión.

**Minutos:** Es el número de Minutos, que junto con las horas, conforman el tiempo total consumido. 

**Tipo Hr.:** Dado que un Responsable a través del Oficio del mismo puede poseer varios tipos de Hora, cada uno con un valor distinto, en este campo se muestra registrado el Tipo de Hora que asoció al Responsable de la OT.

**Vlr. Hora:** Es el valor unitario del tipo de hora (Tipo Hr), 
que se asoció al Responsable en la OT.

Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a>.


**Mano de Obra Externa**

A través de la ventana de Ingreso de Mano de Obra Externa se consulta el Gasto Real de Mano de Obra Externa de la OT.

Para ver el detalle de la Mano de Obra Externa se debe dar clic en el botón <a class="btn gray">adicionar mano obra externa</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img05.png)
_**Imagen 5** Historia Archivada - Gasto Real ME_


**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el Oficio al que pertenece el Responsable Externo asignado. 

**Responsable:** Es el Responsable Externo que ha ejecutado la OT. 

**Costo Unitario por hora/visita:** Es el valor o el costo unitario por hora o por visita de parte del Responsable Ejecutor Externo asociado a la OT.

Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a> 


**Ingresar Materiales y Repuestos**


A través de la ventana de Ingreso de Materiales y Repuestos se consulta el consumo real de Materiales y Repuestos de la OT.

Para ver el detalle de Materiales y Repuestos se debe dar clic en el botón <a class="btn gray">adicionar Material y Repuesto</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img06.png)
_**Imagen 6** Historia Archivada- Gasto Real M y R_ 

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**Almacén:** Se muestra el Almacen donde se encuentra  el Repuesto que se comsumió.

**Descripción M y R:** Es un campo de solo lectura, que muestra la descripción del material y repuesto seleccionado.

**Cantidad:** Es la cantidad que se va a consumió del Respuesto en la ejecución de la OT en cuestión.

**UM:** Es un campo de solo lectura que muestra la unidad de consumo del repuesto seleccionado.

**Vlr. Unitario:** Es el valor unitario del repuesto consumido en la OT.

**Vlr. Total:** Este campo es informativo y es calculado por el sistema, contiene el valor total consumido para ese Material y Repuesto. Es el producto del Vlr. Unitario por la Cantidad. Se visualiza en la tabla de Materiales y Repuestos.

Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a>

**Ingresar Otros Conceptos de Costo**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img07.png)
_**Imagen 7.** Historia Archivada- Gasto Real OC_

Para ver el detalle de Otros Conceptos de Costo o Gastos indirectos, se debe dar clic en el botón <a class="btn gray">adicionar otro concepto</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:


**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**Concepto:** Es el “Otro Concepto‟ a cargado a la OT. 

**Nro. Unidades:** Es el número de unidades consumidas del Concepto de Costo seleccionado anteriormente.

**Vlr. Unitario:** Es el valor presupuestado del “Otro Concepto Costo”. AM sugiere el valor unitario del concepto que se encuentra ingresando al sistema. Sin embargo, es modificable por el usuario.

**Vlr. Total:** Es el costo total consumido del “Otro Concepto Costo” teniendo en cuenta el número de unidades y el valor unitario.

**Info. Adicional:** Es un campo donde se definió un pequeño comentario sobre el consumo.

## Evaluación de Servicio

Se puede visualizar la evaluación del servicio que fue prestado por el personal de mantenimiento o de servicios en la OT seleccionada. La evaluación la realiza un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez que se ha ya cerrado la OT. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img08.png)
_**Imagen 8.** Historia Archivada- Evaluación del Servicio_


### Multimedia

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img09.png)
_**Imagen 9.** Historia Archivada- Multimedia_


En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.
A través de la ventana Multimedia se consulta información adicional a la OT en cada una de sus carpetas asignadas. La multimedia indica la asociación de uno o varios documentos a la OT. AM acepta documentos de extensiones .DOC, XLS, PDF, JPG es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes.

Los documentos anexos pueden contener ayudas necesarias en la ejecución de la OT, planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, listas de verificación, protocolos de prueba u otra información estándar para su ejecución.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información a la OT, se deberán registrar así:

**Que Hacer:** Es la información general que aparece en cada pestaña con los campos bloqueados para que el usuario visualice la información básica de la OT.

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada a la OT. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas a la OT. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados a la OT. Ejemplo: Videos en formato wmv y mp4.

Para ingresar a una carpeta específica se debe de dar un doble clic:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img10.png)
_**Imagen 10.** Historia Archivada - Detalle Multimedia_

Los archivos tipo JGP, WORD, PDF, EXCEL para visualizar se deben descargar haciendo clic en el ícono <span class="mdi mdi-cloud-download icon white"></span>.  

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img11.png)
_**Imagen 11.** Historia Archivada- Descargar Multimedia_
