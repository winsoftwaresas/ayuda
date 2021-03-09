---
title: Resumen Como empezar a trabajar
subtitle: El programa AM 4G - Administrador de mantenimiento se facilita enormemente siguiendo los procedimientos básicos que se explican a continuación..
author: win
--- 

---

# Resumen: Como empezar a trabajar

El uso del programa **AM 4G**-   Administrador de Mantenimiento se facilita en gran forma si se atienden los procedimientos básicos que se explican a continuación.

Estos procedimientos permiten implementar el   programa, organizando la   estructura de datos en una forma lógica y simple, sin importar la complejidad propia del área de Mantenimiento o de las funciones administrativas, técnicas u operativas que realice.

La guía general para la implementación exitosa del programa   **- **AM 4G**-   Administrador de Mantenimiento incluye la realización de los siguientes pasos en ese justo orden:

- Definición de Compañía(s) y perfiles de Usuarios (en la versión **AM 4G**-** ST solo es necesario la definición de los perfiles de Usuarios).
- Definición de la Infraestructura.

- Definición de Activos, Equipos u Objetos de Mantenimiento y su despiece. 

- Incorporación del inventario de Repuestos y Materiales.

- Definición de los Programas de Mantenimiento.

- Incorporación de Solicitudes de Servicio y Paros/Averías.

- Uso rutinario de Órdenes de Trabajo (automáticas, semiautomáticas y manuales).

- Gestión de Mantenimiento y compendio de Historia de Mantenimiento.

**Nota general:** Una vez ejecutada cada acción de mantenimiento la Orden de Trabajo correspondiente debe ser liquidada, cerrada y posteriormente enviada a   Historia de Mantenimiento.  Puesto que la generación automática y el ingreso manual de las Órdenes de Trabajo son voluminosos, se debe realizar con frecuencia el envío de tales Órdenes, a Historia de Mantenimiento, para evitar que la gestión diaria se vea congestionada con actividades ya ejecutadas.

De hecho, los procesos periódicos de Balance de Gestión, Reportes, Índices, Paritos y distintos análisis y estudios, se realizan principalmente sobre el conjunto de Órdenes de Trabajo que residen en la tabla de Historia de Mantenimiento.

##  General – A tener en cuenta

A nivel general dentro del **- **AM 4G** solo es posible especificar campos de minutos (MM) menores o iguales a 59, campos de horas (HH) menores o iguales a 23. De ser necesario el sistema automáticamente convierte los valores ingresados a HH MM. Por ejemplo, si el usuario ingresa 78 MM, el sistema lo interpretará de la siguiente manera: MM se reduce a 18 y se traslada una unidad a HH (78 minutos equivalen a 1 hora y 18 minutos).

La conversión también se da cuando se trata de un campo de días (DD), por ejemplo, si el usuario ingresa 65 HH, el campo HH contendría finalmente 17 y al campo DD se le sumaría
(265 horas equivalen a 2 días y 17 horas).

### PARA ENTENDER CODIFICACIÓN DE REPORTES

### Política de Codificación:

A continuación, se describe la convención utilizada para la nomenclatura de los Reportes de **- **AM 4G**. Se ha implementado esta convención con el fin de mejorar el proceso de búsqueda de los mismos.

![nomenclatura](../../assets/images/cap01/chp01_img63.png)

## Módulo o Categoría al que pertenece el Reporte:

Corresponden a las siglas establecidas en **AM 4G**-** para denominar los módulos o las categorías a las que pertenece el Reporte.

### Abreviación de Módulos:

| MM   | Descripción               |
|------|---------------------------|
| **AA**   | Auditoria                 |
| **AD**   | Administración            |
|  **AL**  | Almacenes                 |
| **AT**   | Acciones técnicas         |
| **CA**   | Características           |
| **CC**   | Centros de Costo          |
| **CF**   | Causas de Falla           |
| **CI**   | Causas de Cierre          |
| **CM**   | Combustibles              |
|  **CN**  |  Contratos                |
| **CO**   |  Contadores               |
| **CP**   | Causas de OT Pendiente    |
| **CR**   |  Centros Responsables     |
| **EF**   | Efectos de Falla          |
| **EQ**   | Equipos                   |
| **ES**   | Estados                   |
| **HM**   | Historia de Mantenimiento |
| **KC**   | Conceptos de Kárdex       |
| **KX**   | Kárdex                      |
| **MO**   | Monedas                     |
| **OC**   |  Otros Conceptos de Costo   |
| **OF**   |  Otros Conceptos de Costo   |
| **OP**   | Oficios                     |
|  **OT**  | Operaciones                 |
| **PA**   | Ordenes de Trabajo          |
| **PD**   | Paros y Averías             |
| **PM**   | Pedidos                     |
| **PR**   | Programas                   |
| **RE**   |  Proyección                 |
| **RF**   |  Responsables               |
| **RP**   | Referencias                 |
| **SS**   | Repuestos                   |
| **TA**   | Solicitudes de Servicio     |
| **TE**   | Tipo de Actividad           |
| **UF**   | Terceros Ubicaciones        |
| **UM**   |  Físicas Unidades de Medida |
| **KX**   | Kárdex                      |
| **MO**   | Monedas                     |
| **OC**   |  Otros Conceptos de Costo   |
| **OF**   |  Otros Conceptos de Costo   |
| **OP**   | Oficios                     |
|  **OT**  | Operaciones                 |
| **PA**   | Ordenes de Trabajo          |
| **PD**   | Paros y Averías             |
| **PM**   | Pedidos                     |
| **PR**   | Programas                   |
| **RE**   |  Proyección                 |
| **RF**   |  Responsables               |
| **RP**   | Referencias                 |
| **SS**   | Repuestos                   |
| **TA**   | Solicitudes de Servicio     |
| **TE**   | Tipo de Actividad           |
| **UF**   | Terceros Ubicaciones        |
| **UM**   |  Físicas Unidades de Medida |

## Tipo de Reporte:

Este indicador permite de forma ágil la naturaleza de cada reporte. A continuación, se presenta este listado

| Tipo de reporte | Descripción                 |
|-----------------|-----------------------------|
| **R**               | Resumen                     |
| **P**               | Parcial                     |
| **D**               | Detalle                     |
| **X**               | Para Exportar               |
| **E**               | Especial                    
| **I**               | Índices e Indicadores       |
| **U**               | Personalizado de Usuario    |
| **S**               | Solicitud de Servicio en **HM** |
| **T**               | Paros y Averías en **HM**       |
| **G**               | Gráfico                     |

# RECOMENDACIONES GENERALES 

A continuación, se describen algunas Recomendaciones Generales acerca del manejo funcional del **AM 4G**-**.

•	En el módulo de Administración, del Submenú Valores por Defectos (Programas) se establece el día que inicia la semana número 2 del año, se configura el criterio “Semanas del Año” en Programas de Mantenimiento.  De esta manera, **AM 4G**-** conoce qué día inician las de semanas para el año en curso.

Para establecer este parámetro, debe tenerse a mano un calendario empresarial de semanas numerado, o en su defecto un calendario normal.  Este proceso debe efectuarse al inicio de cada año. Dependiendo de la cultura de trabajo de cada empresa, las semanas pueden iniciar en diferentes días, por ejemplo, los lunes. Debe tenerse en cuenta este tipo de criterios a la hora de establecer dicho parámetro.

•	Verificar en las listas despegables la función de  “Autocompletar”, se debe realizar la selección de esta, tener presente cuando se es agregada el sistema genera error.

•	Se debe evitar el uso de caracteres **(&&, // y #)** en los nombres de los archivos que se van a anexar en **TE, CN, AC, RP, OT, PM, SS, PA, HM.**

•	Se debe evitar el uso de **Ñ, ñ** o letras de carácter tipo vocal que emplean tildes en cualquier dato de la Base de Datos.
