---
title: Un vistazo a AM
subtitle: Esta sección ayuda a entender el programa **AM** (Administrador de Mantenimiento) y a implementarlo para lograr la satisfacción de las necesidades de administración del mantenimiento de los activos en su empresa.
tags: [setup]
author: win
---

Al analizar la ventana principal se aprecia cómo el sistema está conformado por las siguientes funciones, que componen el menú principal.

### **Infraestructura [IE]**

Función que administra el grupo de datos básicos, parametrizables, de mantenimiento de la empresa:

| | | | | |
|-|-|-|-|-|
| Centros de Costo           | Centros Responsables | Oficios          | Terceros                 | Responsables           |
| Ubicaciones Físicas        | Contratos            | Tipos de Trabajo | Tipos de Mantenimiento   | Tipos de Actividad     |
| Almacenes                  | Unidades de Medida   | Monedas          | Contadores               | Características        |
| Características Biomédicas | Riesgos              | Magnitudes       | Otros Conceptos de Costo | Causas de OT Pendiente |
| Causas de Cierre de OT     | Acciones Técnicas    | Causas de Falla  | Efectos de Falla         | Conceptos de Kárdex    |
| Operaciones                | Referencias          | Tipos de Régimen | Estados                  |                        |

Un grupo de estas tablas, se encuentra preconfigurado y puede ajustarse según las necesidades y requerimientos de la empresa. Las restantes describen en detalle la cultura técnica organizacional de mantenimiento.

### **Activos [AC]**

Función central del sistema para la definición de los Activos en general, objetos de mantenimiento, Equipos, Maquinaria, Automotores, Activos de Servicios Recreativos, Activos de tecnología e Informática, Infraestructura Física, más todos los Institucionales, Hospitalarios u Hoteleros.

### **Almacén [AL]**

Es la función que está encargada del registro y control de Materiales y
Repuestos de Almacén. Se registran por cada ítem su ficha técnica y parámetros de inventario. También se describen las distintas referencias de ese Material o Repuesto, de acuerdo con sus diferentes proveedores.

### **Kárdex de Repuestos [KX]**

A través del Kárdex se realiza el registro de todo movimiento
de Entrada, Ajustes o Salida, de Materiales o Repuestos de cada Almacén. Para su operación, en el módulo “Infraestructura”, en la tabla “Conceptos de Kárdex” se definen y configuran previamente los conceptos de transacciones de movimiento, que serán hábiles en el sistema, para cada Almacén de la compañía.

### **Programas de Mantenimiento [PM]**

Es la función que realiza la programación de actividades de mantenimiento rutinarias, cíclicas, sistemáticas o repetitivas en general. Un programa de mantenimiento se define con el objeto de generar Órdenes de Trabajo en forma automática y anticipada. Se toman en cuenta trabajos programados de tipo Preventivo, Predictivo, Lubricación, Metrología, Inspección u Otros.

### **Solicitudes de Servicio [SS]**

Es el módulo mediante el cual todo empleado autorizado de la compañía, puede solicitar una atención o servicio por parte del área de Mantenimiento. Una Solicitud de Servicio puede ser atendida como tal o puede dar origen a una Orden de Trabajo.
El solicitante puede hacer seguimiento permanente del estado de su solicitud. Este módulo tiene una funcionalidad adicional: el registro de acciones técnicas sencillas de mantenimiento: Corto tiempo de ejecución, bajo costo, y ejecutados por un solo responsable.

### **Paros/ Averías [PA]**

A través de esta función, se hace el registro minucioso de toda
actividad de paro de un equipo u objeto de mantenimiento, programado o no programado, que genere tiempos improductivos. Además de los tiempos de paro, se relacionan también la Causa y Efecto de la Falla y las Acciones Técnicas respectivas. Un paro puede dar origen a una Orden de Trabajo.

### **Órdenes de Trabajo [OT]**

Es la función que centraliza la administración de las Órdenes de Trabajo del sistema. Cubre, desde la generación automática o la creación manual de las Órdenes de Trabajo, el seguimiento y consulta integral durante la ejecución de ellas,hasta su cierre y envío posterior a Historia de Mantenimiento. Se estudia este módulo
como el Centro de Gestión de Mantenimiento.

### **Historia de Mantenimiento [HI]**

Es el conjunto de funciones que compendian, estudian y analizan la información histórica de Mantenimiento. La Historia de Mantenimiento está conformada por el conjunto de las OTs que se han ejecutado, liquidado, cerrado y trasladado hasta la Historia de Mantenimiento, y por las Solicitudes de Servicio o los Paros que han sido cerrados y son enviados a Historia. Esta Historia compendia y refleja la actividad de Mantenimiento ejecutada en la empresa. Es a partir del compendio histórico de mantenimiento que se genera el Balance Periódico de Gestión, se generan los índices de seguimiento y de gestión, se realizan una gran variedad de estudios especiales, como análisis de fallas, análisis de Pareto por varios criterios, análisis de costos (mano de obra, materiales/repuestos y otros conceptos), análisis de Confiabilidad o Disponibilidad, análisis sobre consumos de recursos o análisis sobre proveedores de servicio, entre muchos otros.

### **Administración [AD]**

Es el centro funcional donde se provee la Administración del Sistema. Cubre aspectos de:

- Configuración personalizada de la compañía
- Definición de los perfiles de los usuarios en sus diferentes niveles de acceso
- Listado de reportes
- Parametrización del idioma

Antes, de entrar en más detalles, se considera útil hacer un acercamiento general al sistema y a la secuencia de operaciones para poder hacer una planeación básica de su implementación.