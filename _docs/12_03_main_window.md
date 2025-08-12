---
title: Ventana Principal
subtitle: Esta sección explica los componentes de la ventana principal y ventana detalle con sus vistas parciales
tags: [setup]
author: win
order: '12_03'
media: "../../assets/images/docs/"
---

# Ventana Principal de Historia Archivada

## Ventana Visor de Historia Archivada

![Procesar imagen](../../assets/images/cap13/chp13_img01.png)
_**Imagen 1.** Historia Archivada - Visor_

A esta ventana se accede haciendo clic sobre la opción <a class="btn blue">Historia Archivada</a> del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los registros archivados. Se visualizan todos los registros de la Historia  Archivada o una selección de ellos a través de un subgrupo.  La HA disponible se despliega a través de las páginas.  El tamaño de los registros en el visor, al igual que en todos los visores del sistema se  configura desde <a class="btn blue">administración</a> por medio de un usuario administrador.

Los títulos en azul que encabezan las columnas, permiten ordenar de manera ascendente/descendente la información por cada ítem seleccionado, por medio de un clic en el respectivo encabezado.

## Ventana Detalle

![Procesar imagen](../../assets/images/cap13/chp13_img02.png)
_**Imagen 2.** Historia Archivada - Ventana Detalle_

En la gráfica anterior, Ventana Detalle de Órdenes de Trabajo HA, se aprecian  sus componentes  y  sus  respectivos  contenidos.  

Toda la información de esta tabla de HA es inmodificable.

A continuación se describen los campos que componen esta ventana Detalle de Órdenes de Trabajo HA. Sobre cada campo se da una breve explicación:

**OT:** Aparece el número de la Orden de Trabajo asignado por **AM** cuando fue generada.

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

Para ingresar a esta opción, se debe dar clic en la pestaña “Gasto Real” de la ventana detalle de Órdenes de Trabajo HA.

![Procesar imagen](../../assets/images/cap13/chp13_img03.png)
_**Imagen 3.** Historia Archivada- Gasto Real de una OT_

Esta tabla resume los totales de los gastos reales de Mano de Obra Interna, Mano de Obra Externa, Materiales y Repuestos y Otros Conceptos de Costo que se registraron en la OT de HA:


En la zona inferior, aparecen los botones para consultar exclusivamente:  <a class="btn gray">mano obra interna</a>, <a class="btn gray">mano obra externa</a>, <a class="btn gray">mat y rep</a>, y <a class="btn gray">o.conceptos</a> .

**Mano de obra Interna**

Para consultar dar un clic sobre el botón<a class="btn gray">mano obra interna</a> en el cual se visualizan los siguientes campos:

![Procesar imagen](../../assets/images/cap13/chp13_img04.png)
_**Imagen 4.** Historia Archivada- Gasto Real MO_

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el oficio al que pertenece el Responsable asignado. 

**Responsable:** Es la persona que ejecutó la labor. 

**H. Hombre:** Es el número de Horas Hombre consumidas por el Responsable en cuestión.

**Minutos:** Es el número de Minutos, que junto con las horas, conforman el tiempo total consumido. 

**Tipo Hr.:** Dado que un Responsable a través del Oficio del mismo puede poseer varios tipos de Hora, cada uno con un valor distinto, en este campo se muestra registrado el Tipo de Hora que se asoció al Responsable de la OT.

**Vlr. Hora:** Es el valor unitario del tipo de hora (Tipo Hr) que se asoció al Responsable en la OT.

Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a>.


**Mano de Obra Externa**

Para consultar la Mano de Obra Externa se debe dar clic en el botón <a class="btn gray"> mano obra externa</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:


![Procesar imagen](../../assets/images/cap13/chp13_img05.png)
_**Imagen 5** Historia Archivada - Gasto Real ME_

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**OF:** Es el Oficio al que perteneció el Responsable Externo asignado. 

**Responsable:** Es el Responsable Externo que ha ejecutado la OT. 

**Costo Unitario por hora/visita:** Es el valor o el costo unitario por hora o por visita de parte del Responsable Ejecutor Externo asociado a la OT.

Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a> 


**Ingresar Materiales y Repuestos**


Para consultar Materiales y Repuestos se debe dar clic en el botón <a class="btn gray">Mat y Rep</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:

![Procesar imagen](../../assets/images/cap13/chp13_img06.png)
_**Imagen 6** Historia Archivada- Gasto Real M y R_ 

**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**Almacén:** Se muestra el Almacénn donde se encuentra  el Repuesto que se comsumió.

**Descripción M y R:** Es un campo que muestra la descripción del material y repuesto seleccionado.

**Cantidad:** Es la cantidad consumida del Respuesto en la ejecución de la OT.

**UM:** Es un campo que muestra la unidad de consumo del repuesto seleccionado.

**Vlr. Unitario:** Es el valor unitario del repuesto consumido en la OT.

**Vlr. Total:** Este campo muestra el valor total consumido para ese Material y Repuesto. Es el producto del Vlr. Unitario por la Cantidad. 


Si se desea continuar consultando el gasto real, se debe un clic en <a class="btn gray">ir a la matriz</a>

**Ingresar Otros Conceptos de Costo**

![Procesar imagen](../../assets/images/cap13/chp13_img07.png)
_**Imagen 7.** Historia Archivada- Gasto Real OC_

Para consultar  Otros Conceptos de Costo o Gastos indirectos, se debe dar clic en el botón <a class="btn gray"> O. Conceptos</a> y dar un clic sobre el registro, en el cual se visualizan los siguientes campos:


**Fecha de Uso:** Es la fecha en la cual se utilizó el recurso.

**Concepto:** Es el “Otro Concepto‟ que fue cargado a la OT. 

**Nro. Unidades:** Es el número de unidades que fueron consumidas del Concepto de Costo.

**Vlr. Unitario:** Es el valor presupuestado del “Otro Concepto Costo”. 

**Vlr. Total:** Es el costo total consumido del “Otro Concepto Costo” teniendo en cuenta el número de unidades y el valor unitario.

**Info. Adicional:** Es un campo donde se definió un pequeño comentario sobre el consumo.

## Evaluación de Servicio

Se puede visualizar la evaluación del servicio del personal de mantenimiento o de servicios que realizó la labor. La evaluación fue hecha por un usuario, previamente autorizado, quien fuera el receptor del servicio, una vez que se haya cerrado la OT. 

![Procesar imagen](../../assets/images/cap13/chp13_img08.png)
_**Imagen 8.** Historia Archivada- Evaluación del Servicio_


### Multimedia

![Procesar imagen](../../assets/images/cap13/chp13_img09.png)
_**Imagen 9.** Historia Archivada- Multimedia_


A través de la ventana Multimedia se consulta información gráfica y multimedia que complementó o sustentó la ejecución de la OT. A continuación se describen los campos:

**Que Hacer:** Es la información general que de la OT. 

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada a la OT. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas a la OT. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados a la OT. Ejemplo: Videos en formato wmv y mp4.

Para ingresar a una carpeta específica se debe de dar un doble clic:

![Procesar imagen](../../assets/images/cap13/chp13_img10.png)
_**Imagen 10.** Historia Archivada - Detalle Multimedia_

Para visualizar los anexos tipo:  WORD, PDF, EXCEL, ellos se descargan dando un clic en el ícono <span class="mdi mdi-cloud-download icon white"></span>. 

![Procesar imagen](../../assets/images/cap13/chp13_img11.png)
_**Imagen 11.** Historia Archivada- Descargar Multimedia_
