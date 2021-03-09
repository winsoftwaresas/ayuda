---
title: Análisis y Generación de Órdenes de Trabajo Programadas
subtitle: Aquí encontrará la explicacion ´requerida sobre el uso y preoceso de la generación de ódenes en el programa.
tags: [setup]
author: win
---

Análisis/Generación automática de ots desde PMs, es una facilidad del **AM 4G**-, que  se encuentra disponible en el módulo de ots  y que debería ser utilizada sobre  una  base periódica. El proceso consiste en que  **AM 4G**- revisa cada programa, definido para cada Activo/Equipo y analiza si la condición programada en cada uno, se  va a cumplir, para el equipo respectivo, durante el próximo período que se va a estudiar o proyectar.

Se trata de un proceso que es ejecutado periódicamente por  la persona que hace  las veces de Programador o Planeador del **AM 4G**-** en la  Organización. Una buena práctica consiste en generar las **OT** s programadas, de todo un mes, el día 15 del mes anterior.

Es posible sin embargo, por razones particulares, ejecutar este proceso a diario o en Otra periodicidad, o cuando sea requerido. El sistema asegura que un periodo ya programado, no se reprograma. Por eso, si se presenta la necesidad de reprogramar un período, se debe a que se han creado o modificado algunos PMs, para que generen ots adicionales a las ya generadas.

**- **AM 4G**-** suministra una ayuda que indica cual fue el último período para el que se realizó una Generación Automática, ella se encuentra en la ventana de ** “ANALIZAR/GENERAR”** en la parte superior derecha de la misma.

![Ventana Principal de Solicitudes de Servicio](manualAM/0.images/cap11/chp011_img01.png)

El periodo objeto de la Programación se define mediante las Fechas Desde y Hasta  del Rango de fechas a   analizar. Este proceso de generación se   puede   ejecutar  con   la anticipación que sea requerida.

Por ejemplo, es posible generar las ots para una semana, con una semana o con 10 días de anticipación; o es posible generar las ots para todo un mes, con un mes o con 15 días de anticipación; o es posible generar las ots para un mes con tres m eses de anticipación, etc. Otras organizaciones, por su cultura técnica o por las duraciones de proceso de sus l**OT**es o de sus ** “batches”** bien podrían generar las  ots de toda  una semana, con una semana ó con diez días de anticipación.

Se recomienda que se programe al menos una semana, con una semana de anticipación. La anticipación que se recomienda tiene tres objetivos:

Lograr un acuerdo con el programa de Producción o con el Responsable del Equipo para poder ejecutar la intervención planeada sin interferir con actividades productivas. Asegurar la disponibilidad, a tiempo, de Materiales, Repuestos u otros Conceptos de Costo requeridos en la ejecución de cada **OT**. Programar el recurso humano necesario para ejecutarlas.

**El ciclo de vida de una Orden de Trabajo**

El centro de actividad gerencial en **AM 4G**-** es el ambiente de las Órdenes de Trabajo. Ya sea recién creada, o ejecutada hace varios años, **- **AM 4G**-** dispone de  herramientas que permiten la administración efectiva de cada una de ellas.

Una **OT** puede haber sido creada Automática o Manualmente. Las Órdenes Automáticas, son generadas desde los PM (Programas de Mantenimiento), sobre una  base periódica. Las Órdenes de Trabajo Manuales son creadas por los usuarios de mantenimiento, cuando las condiciones ocasionadas por el diario transcurrir de la  empresa lo exijan.  Las  ots manuales son en su mayoría Correctivas, sin embargo pueden ser también de otros tipos, que no corresponden a actividades propias de Mantenimiento, como por ejemplo: Cambios de  Condiciones,  Trabajos  sobre  repuestos,  Servicios  auxiliares  a  Producción  o  a  la Gerencia,  Instalaciones o Montajes, etc. Todas estas actividades deben ser  registradas como ots en el sistema, pues son altamente consumidoras del recurso de Mantenimiento.

La situación ideal, consiste en generar una **OT** antes de su ejecución. Ella se crea para que sirva de soporte a la realización de la misma **(creación a priori)**.

Es posible también, sobre todo en el caso de Mantenimientos Correctivos, crear la  **OT** cuando la labor ya se ha ya ejecutado, habiendo dado prioridad a la ejecución  que a la generación de la misma (creación a posteriori).

Al  crear  una  **OT**  manual,  se  procede  a  digitar la información  básica  de  la  misma (Descripción,  Equipo,  Tipo  de  Trabajo,  Tipo  de   Mantenimiento,  Tipo  de   Actividad, Responsable, Presupuesto, etc.). Para ots creadas a priori, se digita la   información disponible sobre la labor a realizar, con el fin de darle un compendio detallado de ejecución al operario que la realizará.

Para las  Órdenes Programadas o Automáticas, el  caso es  distinto, pues  la  información básica de la **OT** ya se encuentra creada, en el PM (Programa de Mantenimiento), que le dio origen. Una **OT** generada automáticamente debe ser complementada, con información sobre el responsable y los ejecutores.

Una vez efectuado este paso, se procede a Imprimir la Orden de Trabajo, para entregarla al responsable que la ejecuta. La persona (o personas) encargadas de la  labor reciben esta impresión y se disponen a realizarla.  Durante este tiempo, se hace seguimiento a la **OT**,  alimentándola con  información  de  la  ejecución  (Gasto  Real,  Comentarios,  fechas, tiempos, etc.).

Por distintos m**OT**ivos, una Orden de Trabajo puede quedar en estado Pendiente. Por ejemplo,  no  ha y  recursos  disponibles,  ya  sea  de  Mano  de  Obra,  de   Materiales   o Repuestos, u otros Conceptos. **AM 4G**-** contempla este caso, posibilitando asignar a la **OT** el Estado de Pendiente. También se puede establecer la causa por la cual la **OT** se ha definido en estado Pendiente.

Cuando una Orden no pueda ser Ejecutada, o se decida que no se va a ejecutar, se debe cerrar con un Estado de ** “Cancelada”**, el cual se complementa con una Causa de Cierre, indicando la razón de por qué no se Ejecutó. 

Cuando finaliza la ejecución de la **OT** se deben consignar en **AM 4G**-** todos los pormenores de la ejecución, es decir, se procede a su Liquidación (Cargar todos  los  conceptos de costo ocasionados por su ejecución) y Cierre. Una vez finaliza la **OT**, se liquida, se cierra, y ya está lista para ser enviada a Historia.

Como  puede observarse, durante el ciclo de vida de la **OT**, ésta  pasa por  distintos Estados: Al crearse, está ** “En Ejecución”**, también mientras se ejecuta; en algún momento puede quedar  en  Estado  ** “Pendiente”**; al finalizar,  dependiendo de  si  se  ejecutó o no, puede quedar en un Estado de ** “Cerrada”** o ** “Cancelada”**, respectivamente.

Al ser enviadas a Historia, las Órdenes de Trabajo allí conforman un centro de información y  consulta,  para  la  generación de  Índices,  del  Balance  de  Gestión,  de  Estadísticas, Paretos, y una gran variedad de reportes. De esta manera, - **AM 4G**- brinda las bases para realizar una Gestión Integral del Mantenimiento de la empresa.
