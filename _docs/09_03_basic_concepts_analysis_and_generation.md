---
title: Conceptos Básicos Análisis y Generación de Órdenes de Trabajo Programadas
subtitle: Aquí se encuentralas bases para analiar/generar órdenes automáticas.
tags: [setup]
author: win
order: '09_03'
media: "../../assets/images/docs/"
---
Análisis/Generación automática de OTs desde PMs, es una facilidad de **AM**, que se encuentra disponible en el módulo de OT y que debería ser utilizada sobre una base periódica. El proceso consiste en que **AM** revisa cada programa, definido para cada Activo/Equipo y analiza si la condición programada en cada uno, se va a cumplir, para el equipo respectivo, durante el próximo período que se va a estudiar o proyectar.

Se trata de un proceso que es ejecutado periódicamente por la persona que hace las veces de Programador o Planeador de **AM** en la Organización. Una buena práctica consiste en generar las **OT** programadas, de todo un mes, el día 15 del mes anterior.

Es posible sin embargo, por razones particulares, ejecutar este proceso a diario o en otra periodicidad, o cuando sea requerido. El sistema asegura que un periodo ya programado, no se reprograma. Por eso, si se presenta la necesidad de reprogramar un período, se debe a que se han creado o modificado algunos PM, para que generen OT adicionales a las ya generadas.

**AM** suministra una ayuda que indica cual fue el último período para el que se realizó una Generación Automática, ella se encuentra en la transacción de **“ANALIZAR/GENERAR”** en la parte inferior izquierda del rango a analizar.

![Procesar imagen](../../assets/images/cap09/chp09_img01.png)
_**Imagen 66.** Órdenes- Analizar/Generar_

El periodo objeto de la Programación se define mediante las Fechas Desde y Hasta del Rango de fechas a analizar. Este proceso de generación se puede ejecutar con la anticipación que sea requerida.

Por ejemplo, es posible generar las OTs para una semana, con una semana o con 10 días de anticipación; o es posible generar las OT para todo un mes, con un mes o con 15 días de anticipación; o es posible generar las OTs para un mes con tres meses de anticipación, etc. Otras organizaciones, por su cultura técnica o por las duraciones de proceso de sus lotes o de sus **“batches”** bien podrían generar las OT de toda una semana, con una semana ó con diez días de anticipación.

Se recomienda que se programe al menos una semana, con una semana de anticipación. La anticipación que se recomienda tiene tres objetivos:

Lograr un acuerdo con el programa de Producción o con el Responsable del Equipo para poder ejecutar la intervención planeada sin interferir con actividades productivas. Asegurar la disponibilidad, a tiempo, de Materiales, Repuestos u otros Conceptos de Costo requeridos en la ejecución de cada **OT** y programar el recurso humano necesario para ejecutarlas.

### El CICLO DE VIDA DE UNA ÓRDEN DE TRABAJO

El centro de actividad gerencial en **AM** es el ambiente de las Órdenes de Trabajo. Ya sea recién creada, o ejecutada hace varios años, **AM** dispone de herramientas que permiten la administración efectiva de cada una de ellas.

Una **OT** puede haber sido creada Automática o Manualmente. Las Órdenes Automáticas, son generadas desde los PM (Programas de Mantenimiento), sobre una base periódica. Las Órdenes de Trabajo Manuales son creadas por los usuarios de mantenimiento, cuando las condiciones ocasionadas por el diario transcurrir de la organización lo exijan. Las  OT manuales son en su mayoría Correctivas, sin embargo, pueden ser también de otros tipos, que no corresponden a actividades propias de Mantenimiento, como por ejemplo: Cambios de  Condiciones, Trabajos sobre repuestos,  Servicios auxiliares a Producción o a la Gerencia, Instalaciones o Montajes, etc. Todas estas actividades deben ser registradas como ots en el sistema, pues son altamente consumidoras del recurso de Mantenimiento.

La situación ideal, consiste en generar una **OT** antes de su ejecución. Ella se crea para que sirva de soporte a la realización de la misma **(creación a priori)**.

Es posible también, sobre todo en el caso de Mantenimientos Correctivos, crear la **OT** cuando la labor ya se ha ya ejecutado, habiendo dado prioridad a la ejecución que a la generación de la misma **(creación a posteriori)**.

Al crear una **OT** manual, se procede a  digitar la información básica de la misma (Descripción, Activo, Tipo de Trabajo, Tipo de Mantenimiento, Tipo de Actividad, Responsable, Presupuesto, etc.). Para OT creadas a priori, se digita la información disponible sobre la labor a realizar, con el fin de darle un compendio detallado de ejecución al operario que la realizará.

Para las Órdenes Programadas o Automáticas, el  caso es distinto, pues la información básica de la **OT** ya se encuentra creada en el PM, que le dio origen. Una **OT** generada automáticamente debe ser complementada, con información sobre el responsable y los ejecutores.

Una vez efectuado este paso, se procede a Imprimir la OT, para entregarla al responsable que la ejecuta. La persona (o personas) encargadas de la labor reciben esta impresión y se disponen a realizarla. Durante este tiempo, se hace seguimiento a la **OT**, alimentándola con información de la ejecución (Gasto  Real,  Comentarios, fechas, tiempos, etc.).

Por distintos motivos, una Orden de Trabajo puede quedar en estado Pendiente. Por ejemplo,  no hay recursos disponibles, ya sea de Mano de Obra, de Materiales o Repuestos, u otros Conceptos. **AM** contempla este caso, posibilitando asignar a la **OT** el Estado de Pendiente. También se puede establecer la causa por la cual la **OT** se ha definido en estado Pendiente.

Cuando una OT no pueda ser Ejecutada, o se decida que no se va a ejecutar, se debe cerrar con un Estado de **“Cancelada”**, el cual se complementa con una Causa de Cierre, indicando la razón de por qué no se Ejecutó.

Cuando finaliza la ejecución de la OT se deben consignar en **AM** todos los pormenores de la ejecución, es decir, se procede a su Liquidación (Cargar todos los conceptos de costo ocasionados por su ejecución) y Cierre. Una vez finaliza la OT, se liquida, se cierra, y ya está lista para ser enviada a Historia.

Como puede observarse, durante el ciclo de vida de la OT, ésta  pasa por  distintos Estados: Al crearse, está **“En Ejecución”**, también mientras se ejecuta; en algún momento puede quedar en Estado **“Pendiente”**; al finalizar, dependiendo de si se ejecutó o no, puede quedar en un Estado de **“Cerrada”** o **“Cancelada”**, respectivamente.

Al ser enviadas a Historia, las Órdenes de Trabajo allí conforman un centro de información y  consulta, para la generación de Índices,  del Balance de Gestión, de Estadísticas, Paretos y una gran variedad de reportes. De esta manera, **AM** brinda las bases para realizar una Gestión Integral del Mantenimiento de la organización.


>**Nota:** Para mayor información sobre esta transacción de analizar/generar Órdenes de Trabajo dirigirse a la sección _**Transacciones**_ de este capítulo.