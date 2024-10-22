---
title: Concurrencia en AM
subtitle: En esta sección se proporciona y discute un cronograma detallado, que describe las fases, actividades y tareas del proyecto.
author: win
order: '01_04'
---
Es importante tener en cuenta que en **AM**, un mismo usuario no puede iniciar sesión simultáneamente en dos máquinas diferentes.

La cantidad de usuarios que pueden trabajar al mismo tiempo en **AM** depende de la cantidad de licencias adquiridas por la compañía, en un esquema de clientes concurrentes. La cantidad de usuarios creados en el sistema no tiene que ser la misma cantidad de las licencias adquiridas, o sea que es posible definir un número de usuarios mayor al número de licencias disponibles.

### Un enfoque de implementación

El proceso de Implementación de **AM** es realizado con el apoyo cercano de WIN Software, para ello WIN Software suministra y discute con el Usuario un cronograma detallado, que describe las fases, actividades y tareas del proyecto. Se ha previsto realizar al menos una sesión de trabajo de Planeación con el Equipo que estará a cargo del proyecto por parte de la Empresa usuaria, para estudiar el cronograma y establecer los niveles de compromiso de los recursos asignados.

La Implementación se desarrolla en paralelo, al mismo ritmo de avance, del proceso de Capacitación. Para habilitar el sistema es necesario definir ante todo la Compañía y algunos perfiles de usuario. Ello a través de la opción Administración del menú principal (en la versión **AM ST**, solamente es necesario definir los perfiles de usuario).

La actividad que continúa, es la preparación y captura de datos, que se debe iniciar con la Infraestructura. Es recomendado seguir el orden indicado en la definición de las siguientes tablas: **CR, OF, TE, UF, CC**. Las demás tablas se definen o personalizan en cualquier orden, según las necesidades propias de la compañía.

Acto seguido, se definen y registran los Activos o Equipos y su despiece si es del caso; para lo cual se debe haber predefinido un esquema de codificación adecuado.

Luego se definen los Repuestos, de acuerdo a un esquema de codificación también predefinido. Este proceso se puede realizar manualmente, registrando uno por uno los Repuestos o Materiales requeridos; o también mediante la carga masiva desde un archivo plano que contenga la información de interés para Mantenimiento y que será cargada por WIN Software. Cada repuesto debe ser asociado a un almacén, independientemente del proceso que se siga para la inserción de los datos.

Habiendo ingresado los Activos/Equipos y Repuestos, **AM** permite el ingreso de los Programas de Mantenimiento. A partir de este punto, el programa está habilitado también para la generación de las Órdenes de Trabajo, de las Solicitudes de Servicio y de los Paros/Averías. Este es el paso siguiente.

Es importante saber que **AM** no exige la definición completa y exhaustiva de todos los Activos/Equipos de la empresa para empezar a operar. En muchas ocasiones es conveniente definir un grupo de Activos/Equipos, sus Programas y empezar a operar con ellos, actividades tanto programadas automáticas como manuales. Esto permite obtener resultados del programa en muy corto tiempo, justificando tempranamente la inversión.

Las Órdenes de Trabajo se pueden haber generado automáticamente (desde Programas de Mantenimiento), se pueden haber generado semiautomáticamente desde una Solicitud de Servicio, un Paro/Avería, o se pueden haber registrado manualmente (Mantenimiento correctivo, por ejemplo).

Generadas las Órdenes de Trabajo, se procede a lograr un acuerdo con Producción y a programar los recursos requeridos: el personal, los materiales y repuestos, y otros conceptos. Finalmente, se imprimen en lotes o individualmente, o bien se emplea el uso del aplicativo AMovil de modo que las actividades a ejecutar sean asignadas a los responsables de su ejecución.

La Gestión de Mantenimiento se apoya fundamentalmente en el módulo de Órdenes, que contiene todas las actividades pendientes de ejecución o en ejecución.

Cada Órden de Trabajo se ejecuta y en ella se compendia toda la información generada en tal ejecución: Centro de Costo, Centro Responsable, Responsable, Costos (Mano de Obra Interna y Externa, Materiales y Repuestos y otros), Tiempos de Ejecución, Duración e Improductivos, Comentarios generales y Multimedia.

Terminada la actualización de la información de la OT ejecutada, se procede a liquidarla y cerrarla. Las OT en estado “cerrada” permanecen activas en el módulo. Las OT que no se ejecutan deben ser “canceladas”, registrando la razón de la no ejecución mediante comentarios.

Todas las OT cerradas o canceladas, se transfieren mediante un proceso automático a través la transacción “Enviar a Historia”, al módulo de Historia de Mantenimiento.

Se hacen diversos estudios y análisis sobre la información acumulada en la Historia de Mantenimiento, al tiempo que se generan informes sobre la misma: reportes sobre Balance Mensual de Gestión, resúmenes de actividades y costos, información base para Presupuesto y estudios especiales como los reportes de Causas de Fallas, de Pareto, reportes gráficos por variedad de conceptos, índices de Seguimiento e índices de Gestión.
