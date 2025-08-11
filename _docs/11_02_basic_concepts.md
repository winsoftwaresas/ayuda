---
title: Conceptos Básicos de Programas de Mantenimiento
subtitle: aqui se despejaran dudas sobre los conceptos basicos de almacenes,
  explicando su diversidad, funcionalidad y adaptabilidad a las necesidades del
  usuario.
tags:
  - setup
author: win
order: '11_02'
date: 2022-04-26T20:21:00.312Z
media: "../../assets/images/docs/"
---

Dentro del ciclo de Gestión de Mantenimiento en **AM** los Programas de Mantenimiento (PMs) apoyan las tres primeras etapas del ciclo, siendo la primera la Planeación, la segunda la Presupuestación y la tercera la Programación. Para las dos primeras etapas, éste módulo ejecuta el proceso de Proyección, sobre un periodo futuro, de largo plazo, sin generar Órdenes de Trabajo (OTs).  Para la tercera etapa el proceso de Programación se ejecuta en forma idéntica, desde el módulo de <a class="btn cl-white bg-blue px-3"> Órdenes </a>. A pesar de que  se  ejecuta  desde allí,  la  base   del  proceso  son  los  Programas  de Mantenimiento.

Un Programa de Mantenimiento (PM) es un conjunto de información que permite definir labores de Mantenimiento, para que sean ejecutadas en forma cíclica,  repetitiva  y periódica o sistemática,  sobre un Activo. Ella puede ser de varios tipos: Preventivo, Predictivo, Metrología,  Lubricación, Inspección, Otros, Otros Mantenimientos quen vienen por defecto en la tabla de Tipos de Mantenimiento en el módulo de <a class="btn cl-white bg-blue px-3"> Infraestructura </a>.

Los Programas de Mantenimiento (PMs), son un eje estratégico de **AM**.  Ellos son modificables y adecuables mediante la retroalimentación de los resultados obtenidos de distintos análisis sobre la Historia de Mantenimiento, con el objeto de afinarlos y lograr una proyección para el   Presupuesto del nuevo periodo, más ajustada y de acuerdo al desempeño real de los periodos anteriores.

Definir un Plan de Mantenimiento para el largo plazo, a través de un conjunto sólido de Programas, sienta las bases para una gestión avanzada, garantizando al grupo gestor de Mantenimiento, la información permanente de sus  labores proyectadas a futuro y posibilitando sobre ellas el establecer prioridades y asignar recursos, para garantizar una ejecución eficaz.

Un PM es el conjunto de información que describe una Tarea a ser ejecutada cíclica o sistemáticamente desde el momento de su definición, en adelante. En general, un PM cubre los siguientes tópicos alrededor de la tarea que se programa: 

- Qué Activo/Equipo es el Objeto de la Actividad.
- Qué Actividad se va a ejecutar. (Descripción del PM).
- Quién realiza la Actividad (Centro Responsable).
- Quién asume los Costos de la Actividad (Centro de Costo).
- Cuánto Tiempo demora la ejecución de la Actividad (Tiempo Estimado).
- Cuánto cuesta la ejecución de la Actividad (Presupuesto detallado de Costos).
- Cuándo se debe ejecutar la Actividad (Criterios de Programación).
- Cómo se debe ejecutar la Actividad (Instructivo o procedimiento a seguir).

Además de la información característica que se acaba de mencionar, un PM se  define  y enmarca en cada uno de los siguientes atributos: Tipo de Mantenimiento, Tipo de Trabajo y Tipo de Actividad, que denotan el tipo y contexto del mismo. Esta  información se complementa con dos definiciones: Prioridad y un indicativo de la  necesidad de que el Activo este inoperante **“Activo parado”**.

Un PM se define con el objeto de que él genere, automáticamente con la  anticipación requerida, una Órden de Trabajo (OT) para un Activo/Equipo u Objeto de Mantenimiento (AC), cada vez que se cumpla el criterio interno establecido en el  Programa (PM). Se debe recordar que toda la información definida en un PM se traslada a la OT cuando el PM la genere.

Para definir un PM se requiere haber registrado previamente el Activo objeto  del mismo, el Centro de Costo, el Centro de Responsable, los Oficios y los Responsables, el Tipo de Actividad de Mantenimiento, al igual que los Repuestos requeridos y todos aquellos instructivos y procedimientos requeridos.

**Se pueden definir PMs de tipo:** Preventivo, Predictivo, Metrología, Lubricación, Inspección, Otro, Otros Mantenimiento y los que se definan en la tabla de Tipos de mantenimiento en el módulo de Infraestructura.

Las demás actividades que pueden ser ejecutadas por el área de Mantenimiento  se agrupan conjunto de actividades no programadas dentro de las cuales se destacan las **Correctivas** y aquellas orientadas por  decisiones Técnicas, Operativas o  Administrativas; además las Mejorativas y todas aquellas que no constituyen Mantenimiento: Instalaciones o montajes, Traslado de Activos, Servicios a Producción u otras áreas, entre otras. 	Todas ellas  se crean manualmente en el Módulo de Ordenes de Trabajo.

## Presupuesto

El Presupuesto de un PM es la estimación de los Costos en los que se puede incurrir al ejecutar la Actividad de Mantenimiento. Está conformado normalmente por cuatro componentes: Mano de Obra Interna, Mano de Obra Externa, Materiales/ Repuestos y Otros Conceptos de Costo (Gastos indirectos).


Realizar permanentemente un Control Presupuestal de sus Gastos de Mantenimiento es una labor casi obligante para una organización. **AM** brinda esta posibilidad y para ello, permite definir a nivel de cada PM una matriz de presupuesto, que es la base para el logro del objetivo planteado. Cuando un PM genera una OT, la matriz de presupuesto del PM se traslada a la matriz respectiva en la OT generada.

Crear el Presupuesto a un PM en **AM** consiste en hacer una evaluación de las necesidades de recursos de Mano de Obra, Materiales/Repuestos, y Otros Conceptos de Costo, todos ellos discriminados por Tipo de Trabajo y Concepto de Gasto. Con ello, se procede a ingresar los valores en la Matriz de Presupuesto.

## Fecha de Inicio de Período (FIP)

La Fecha de Inicio de Periodo (FIP) sirve para definir el inicio de la vigencia de un Programa. La FIP indica el momento, a partir del cual, se comienza el conteo de tiempo para la generación de una nueva Órden de Trabajo. **Esta fecha corresponde a la ejecución de la última vez (anterior) de la Actividad de Mantenimiento que se está Programando.**

En otro contexto, cuando se ha definido un PM cuyo Criterio de Programación no es la Frecuencia sino un **Contador** la FIP tiene una significación especial: se trata de la fecha a partir de la cual entra en vigencia el PM ó se refiere al valor del contador en último mantenimiento. 
Para este caso se debe tener configurador el contador en la Ficha Técnica del Activo. 

<!-- En otro contexto, cuando se ha definido un PM cuyo Criterio de Programación no es la Frecuencia sino un Contador o Semanas del Año, la FIP tiene una significación especial: se trata de la fecha a partir de la cual entra en vigencia el PM. Esto significa que para los PM con criterio de programación distinto a Frecuencia, mientras la Fecha de Inicio del lapso a programar no sea igual o posterior o a la FIP, no se generan Órdenes de Trabajo, aunque su criterio de programación se cumpla.-->

## Fecha de última Generación (FUG)

La fecha de última generación es informativa; indica el momento en el cual el PM generó, en forma real una Órden de Trabajo, por última vez. Este dato es importante para chequear la fecha de la última generación real, para revisar los intervalos de tiempo  en que se ha dejado de generar Órdenes de Trabajo desde ese PM, por razones como olvido, error en la  programación, cambios en los datos de los Criterios de  Programación, o modificaciones incorrectas de las Fechas de Inicio de Período, entre otras.

La FUG y la FIP son iguales la mayor parte del tiempo. Los únicos dos casos en que ésta premisa no se cumple, son: Primero, en el momento de la creación del PM (la FUG tiene un valor de inicialización) y Segundo, en el momento en que se modifique la FIP a través de la transacción **“Modificar la FIP”**. En cualquier caso, para efectos de generación automática de OT, por criterio Frecuencia, tiene prioridad la FIP.  

>**Nota:** En el campo Última Generación de OT en un PM es un campo sólo informativo, pues está protegido y es actualizado automático, después de la primera generación automática de OT.


## Criterios de Programación

A través de ellos se establece cuándo ejecutar las labores de Mantenimiento. Se hace énfasis en éstos, pues su dominio y administración son la herramienta clave para distribuir la carga de  la actividad de Mantenimiento programado, permitiendo alcanzar una distribución factible de los recursos de Mantenimiento en un período,  que minimiza el tiempo improductivo de los Activos y por ende de los paros programados de Producción.

**AM** ofrece tres Criterios de Programación: por Frecuencia, por Semanas del Año y por Contador. Sobre cada uno de ellos se presenta un breve estudio a continuación.
 
## Frecuencia

Define la periodicidad de tiempo con la cual un PM debe generar una OTs ; las frecuencias son: Días, Semanas, Meses. A cada Frecuencia se le especifica un Período que la complementa. Por ejemplo: Un PM con frecuencia Meses y período 1, significa que el PM genera una OT mensualmente; de igual forma, si la frecuencia definida es días y el período especificado es 10, significa que el PM genera una OT cada 10 días.

El Sistema genera una OT obedeciendo al Criterio de Programación que  cumpla las condiciones establecidas en el PM.

## Semanas del Año (SA)

Este criterio de programación permite generar OTs en cualquier semana del año, con base en eventos programados, sin que haya necesidad de haber cumplido un ciclo o haber sobrepasado una cantidad de trabajo realizado por el Activo. Por ejemplo: Señalar una casilla de las 52, una por cada semana, en las que se ha dividido el año. Entonces, un PM por este criterio, genera una OT para cada semana señalada. Las Órdenes de Trabajo de cada semana se generan cuando al rango de Análisis/Generación definido, para la próxima generación, corresponda a una o varias de las semanas señaladas.

Cuando se definan PMs por Semanas del Año (SA), se debe especificar al **AM** en qué día de Enero inicia la segunda (2ª) semana del año. Para ello se debe ir a la opción <a class="btn blue">Administración</a> del Menú Principal, **Valores por defecto”** en la opción **Programas** en el submenú y especificar la semana.  **AM** es capaz entonces, con ese dato, de proyectar todas las semanas del año, de  acuerdo al calendario de la organización.

Semanas del Año es un Criterio excluyente en el conjunto. Por lo tanto no se  puede combinar con ninguno de los otros tres Criterios de Programación.

## Por Contador

Este criterio se usa cuando el Activo a programar opera bajo una función no uniforme en el tiempo, o sea cuando trabaja por demanda, y mantiene un registro de su operación real, mediante un contador, que puede ser de horas, de kilómetros recorridos, metros hilados, unidades producidas, golpes, revoluciones o moldeadas, entre muchos otros, predefinidos o definibles por el usuario en <a class="btn blue">Infraestructura</a>. Este es un criterio que se usa entonces, para generar OT en función del trabajo realizado por el Activo u Objeto de Mantenimiento.

Para poder usar este criterio en un PM, es necesario que el Activo a programar, tenga asignado un Contador en su Ficha Técnica, con su respectivo valor y fecha de medición actualizado.

Hay dos modos de definir el Criterio de Programación por Contador, el primero es por **Incremento**, el segundo es por **Límite.**

En el primer caso, por **Incremento**, el PM genera una Órden de Trabajo múltiples veces, cada vez que el contador del Activo supere, en el valor de la **Recurrencia** al **“Valor del contador al inicio del período”** definido en el PM. Para establecer cuando generar una OT, se compara el valor actual del contador (Ficha Ténica del Activo) contra el valor contenido en el campo **“Última Generación de OT”**. Esta diferencia se compara contra el valor en el campo **“Recurrencia”** y si es mayor se genera una OT.

En el segundo caso, por **Límite**, el PM solo genera una Órden de Trabajo cuando el valor actual del contador del Activo llegue al valor contenido en el PM, indicado en el campo Recurrencia (Valor límite, en este caso).

Cuando se define un PM en función de un contador de un Activo, se debe definir un mecanismo administrativo: manual o automático, para  actualizar y mantener al día el contador de ese Activo en **AM**. Se trata de garantizar que tales contadores reflejen permanente la cantidad de trabajo realizado por el equipo.

En los casos en que la actualización de los contadores de los Activos no pueda ser frecuente, **AM** suministra un mecanismo automático que lo simula, mientras se puede realizar una nueva lectura y actualización real a ese contador. Se trata del campo **“Estándar de Planeación”** que se encuentra en la parte inferior de la ventana detalle de la ficha técnica de <a class="btn blue">Activos</a>. Allí se define una cantidad de trabajo estándar que realiza ese Activo por unidad de tiempo. Este valor es definido con base en una estadística real del trabajo de ese Activo en un período considerable, ojalá no inferior a 1 mes.

Mas adelante se da una explicación detallada de la creación de un PM.
