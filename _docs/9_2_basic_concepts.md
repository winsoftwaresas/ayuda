---
title: Conceptos Básicos sobre Órdenes de Trabajo 
subtitle: Es en este módulo es donde están disponibles para consulta y toma  de decisiones todas las Órdenes de Trabajo activas.
tags: [setup]
author: win
---

# Conceptos Básicos sobre Órdenes de Trabajo

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

**-  **AM 4G**-** Predefine  cuatro  tipos  de  trabajo: 

- Mecánico  **(MEC)**.
- Eléctrico   **(ELE)**.
- Instrumentación/Electrónica **(I/E)**  
- OTro **(OTR)**. 


Pueden  personalizarse,  en la tabla **"Tipos de Trabajo"** del módulo de Infraestructura. Cada **OT** acepta la definición de uno o varios de estos Tipos de Trabajo, dependiendo de la naturaleza de la labor que se realice.

### Tipo de Mantenimiento

**- **AM 4G**-** predefine ocho Tipos   de   Mantenimiento:   Preventivo, Preventivo Manual, Correctivo, Predictivo, Inspección, Metrología, Lubricación y Otro. Como su nombre lo indica, el Tipo de Mantenimiento caracteriza al Mantenimiento que se realiza. Cada   Orden   de Trabajo permite la definición de uno y sólo un Tipo de Mantenimiento.  

###	Tipo de Actividad


Una vez se define el Tipo de Trabajo y el Tipo de Mantenimiento, se procede a catalogar la labor   por   su   Tipo   de   Actividad. Los Tipos de Actividad se administran desde Infraestructura, y son completamente personalizables por empresa. El Tipo de Actividad se utiliza para agrupar las labores de Mantenimiento por  actividades genérica. Es a través de los Tipos de Actividad que se definen muchas actividades realizables  por  el departamento  de  Mantenimiento,  pero  que  en  realidad  no  constituyen  una  labor  de Mantenimiento. **AM 4G**-** predefine  varios  Tipos  de   Actividad. Para   mayor  información, consultar el ítem correspondiente en Infraestructura.

Así, toda Orden de Trabajo se discrimina en cuanto a su labor, con tres  agrupadores distintos: El Tipo de Trabajo, El Tipo de Mantenimiento y el Tipo de  Actividad. Por ejemplo: Puede existir una Orden de Trabajo cuyos Tipos de Trabajo son: Mecánico  y Eléctrico (es decir, realiza labores mecánicas y eléctricas), su Tipo de  Mantenimiento es Correctivo (debido a una falla del equipo) y su Tipo de Actividad  es **IL-Iluminación**(el daño que se presenta tiene que ver con iluminación).

Es posible también que en ocasiones el Tipo de Actividad sea el identificador determinante de la   labor, en una Orden de Trabajo. En  este  caso: se  define el  Tipo  de  Trabajo específico que corresponda;   el Tipo de Mantenimiento se define como **“OTRO”**, después de lo cual se selecciona el Tipo de Actividad más adecuado.

Una vez se definan para cada **OT** estos datos, es posible efectuar consultas y filtros  por cada uno de ellos.

## Órdenes de Trabajo Manuales vs Órdenes de Trabajo Programadas

El módulo de Órdenes de Trabajo Administra tanto las  Órdenes generadas en  forma
Manual como las automáticas, generadas desde Programas de Mantenimiento.

Las Órdenes de Trabajo manuales se generan a medida que se requiere: en el momento de presentarse una falla sobre un Equipo o cuando se debe realizar un trabajo que no es rutinario ni programado, por decisión técnica, operativa o administrativa.   Una **OT** manual puede ser Correctiva, Preventiva Manual, Predictiva, de Calibración, de Lubricación, u **OT**ro Tipo de Mantenimiento.

Las 	**OT** 	Programadas 	se 	generan 	periódicamente, 	mediante		el 	comando ** “ANALIZAR/GENERAR”**  en  el  submenú  de  Ordenes  de  Trabajo.  El  proceso   de Generación revisa y verifica los criterios definidos en cada Programa de  Mantenimiento, proponiendo generar, en forma automática, la Orden de Trabajo correspondiente, cuando tales criterios son válidos, para Mantenimientos Preventivo, Predictivo, Calibración, Lubricación y Rutas de Inspección, u **OT**ro Tipo de Mantenimiento

##	Presupuesto vs Gasto Real

La ejecución de toda Orden de Trabajo puede generar costos, asociados a los  recursos utilizados: Mano de Obra, Materiales y Repuestos, u otros Conceptos o Gastos indirectos.

**- **AM 4G**-**  permite Presupuestar estos consumos, de forma anticipada, para establecer cuales recursos y en qué cantidad se necesitan, al igual que su costo aproximado. Para  las Órdenes  de  Trabajo  Programadas,  el  Presupuesto fue  registrado en  el   Programa de Mantenimiento, y en el momento en que se genera la Orden de Trabajo, este Presupuesto se transfiere a ella.   Para las Órdenes de Trabajo Manuales, también es posible definir un Presupuesto, pero éste se crea directamente en la **OT**.

Si una Orden de Trabajo maneja Presupuesto (ya sea una **OT** Programada o Manual), éste debe aprobarse antes de poder registrar el consumo o Gasto Real.  Solo una vez aprobado el Presupuesto, puede iniciarse el registro del Gasto Real, con las cantidades y cifras  de costo reales.   De esta manera es posible contrastar el Presupuesto contra el Gasto Real, en cada **OT**.

## Tiempo de Duración (ttr) vs Tiempo Improductivo

Estos   dos   conceptos, en   una Orden  de  Trabajo, son  básicos para la  generación de estadísticas de tiempos y variados Índices de Gestión.

- **AM 4G**- asume el concepto de Tiempo de Duración o ttr (Time to Repair), en una Orden de Trabajo,   como   la   cantidad   de   Tiempo   Real  en   la   que   se   realiza   una   labor   de Mantenimiento,  una  vez  que  todas  las  condiciones  están  dadas:  se  han  superado  los tiempos  de  inspección  y  administrativos;  la  máquina  lista  y  en   condiciones  de  ser mantenida ya fue entregada al Depto. de Mantenimiento y éste a su vez, ya cuenta con todos los recursos necesarios para la ejecución:  herramientas, instrumentos, materiales, repuestos y por supuesto, personal.

- **AM 4G**- sugiere como Tiempo de Duración, la diferencia entre la Fecha y Hora de Fin  de Trabajos y la Fecha y Hora de Inicio de Trabajos. Cabe an**OT**ar, que no siempre el Tiempo de Duración es la diferencia entre estas fechas/horas, pues pueden existir  eventos que dejan temporalmente a la **OT** en Estado de ** “Pendiente”**. **AM 4G**-** permite corregir el tiempo de Duración en una **OT**, para que refleje el tiempo real de la ejecución.

Por ejemplo, si una **OT** tiene como Fecha de Inicio de Trabajos XXXX/12/01 08:30, y como Fecha de Fin de Trabajos XXXX/12/01 16:00, **- **AM 4G**-** sugiere como Tiempo de Duración, 7 horas y 30 minutos. Sin embargo, si durante ese lapso se tuvo que detener la ejecución por 2 horas, debido a que faltaba un Repuesto o a que el técnico encargado se ausentó a realizar Otra labor, se debe corregir la duración: 5 horas y 30 minutos.

Para  **- **AM 4G**-**,  el  Tiempo Improductivo de   un  Equipo, en  una   Orden de Trabajo, es   la cantidad  Real  de   tiempo  en   que  el   Equipo  estuvo  Improductivo  por   Razones   de Mantenimiento, es  decir,  tiempo en el cual el Equipo debió estar  operando y no pudo hacerlo debido a que durante dicho tiempo se estaba realizando la labor.

**- **AM 4G**-** sugiere como Tiempo Improductivo: la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora Info de Paro (Para Órdenes de Trabajo Correctivas), o como, la diferencia entre la Fecha y Hora de Fin de Trabajos y la Fecha y Hora de Inicio de Trabajos (Para Ordenes de Trabajo no Correctivas). Sin embargo, este valor puede corregirse para reflejar la cantidad Real exacta de Tiempo Improductivo que tuvo el Equipo en cuestión.

Por ejemplo, si una **OT** correctiva tiene como fecha de Info de Paro XXXX/12/01 08:00, y como  fecha  de   Fin   de   Trabajos  XXXX/12/02  12:30,  - **AM 4G**- sugiere   como  Tiempo Improductivo, 1 día, 4 horas y 30 minutos. Sin embargo, si en ese  lapso, el Equipo no trabaja de 10 PM a 6 AM, pues la empresa no labora turno de producción, se debe definir el tiempo improductivo como solamente de 20 horas y 30 minutos.

## Numeración de las Órdenes de Trabajo

**- **AM 4G**-** diferencia una Orden de Trabajo de Otra, por su número de **OT**, o consecutivo. Este número está conf ormado por dos valores: Primero, el Año en la cual fue creada la **OT**, y posteriormente, seguido de un guion y el Consecutivo de dicha **OT** en ese año.  Así, si una **OT** tiene como número ** “200X-1503”**, quiere decir que esa **OT** es la número 1503 del año 200X.

- **AM 4G**- administra automáticamente el número de cada Orden de Trabajo, por lo tanto no es posible modificarlo manualmente.