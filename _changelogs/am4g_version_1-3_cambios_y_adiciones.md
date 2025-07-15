---
layout: page
title: AM4G Versión 1.3 Cambios y Adiciones
feature_text: ""
---
**MODULO DE AMSI**





- Se desarrolla la funcionalidad para relacionar **Responsables** de manera automática a las solicitudes de Servicio creadas en el módulo de AMsi.


El usuario administrador de la Compañía debe configurar en la tabla de Valores por defecto de la compañía, en la opción de Solicitudes como Si a la Opción **Llevar automáticamente Responsable de Centro de Costo a las Solicitudes creadas desde AMsi y Enviar correo al Responsable asociado.**










![Procesar imagen](../../assets/images/Version1.3/Imagen1.png)

- El usuario administrador de la compañía debe relacionar los responsables a los Centros de Costo respectivos, es importante recordar que para generar esta relación los Centros de Costo deben ser de tipo **Mantenimiento.**

![Procesar imagen](../../assets/images/Version1.3/Imagen2.png)

- Los usuarios de AMsi realizaran la solicitud de forma habitual.

![Procesar imagen](../../assets/images/Version1.3/Imagen3.png)

- El sistema relacionara automáticamente el Responsable del Centro de Costo al cual llega la solicitud como el Responsable de la Solicitud creada.

![Procesar imagen](../../assets/images/Version1.3/Imagen4.png)

- El sistema enviara automaticamente un correo al email registrado del Responsable.

![Procesar imagen](../../assets/images/Version1.3/Imagen5.png)


**MODULO DE INFRAESTRUCTURA**

**CONTRATOS**

- Se permite a los Usuarios definir si el Contrato se destina al Consumo de Combustibles, de ser así llevara el Control de Gasto del contrato según las relaciones realizadas en el módulo de Consumo de Combustibles.

![Procesar imagen](../../assets/images/Version1.3/Imagen6.png)

- Se crea un Indicador para los contratos que estén definidos para Combustibles.

![Procesar imagen](../../assets/images/Version1.3/Imagen7.png)


**TERCEROS**

- Se amplia el tamaño del campo email para permitir hasta 100 caracteres.

![Procesar imagen](../../assets/images/Version1.3/Imagen8.png)


**UNIDAD DE MEDIDA**

- El usuario puede definir si la Unidad de Medida se debe listar en para la relación con  Combustibles 

![Procesar imagen](../../assets/images/Version1.3/Imagen9.png)


**COMBUSTIBLES**

- El usuario debe definir los tipos de Combustibles que  se relacionaran en las Consumos de Combustibles.

![Procesar imagen](../../assets/images/Version1.3/Imagen10.png)

- En esta opción se listarán los Tipos de Combustible que el usuario defina.

![Procesar imagen](../../assets/images/Version1.3/Imagen11.png)

- En el detalle del Combustible se debe definir, el nombre, el valor y la unidad de medida que se relacionaran a este tipo de combustible.

![Procesar imagen](../../assets/images/Version1.3/Imagen12.png)


**MODULO DE ACTIVOS**

- Se adiciona el campo Fecha de Vencimiento para el Registro Invima

![Procesar imagen](../../assets/images/Version1.3/Imagen13.png)

- Se desarrolla el reporte ACU-MYMO – Resumen de Activos con Marca y Modelo; el cual adiciona el valor de la característica técnica **Consumo Energía.**

![Procesar imagen](../../assets/images/Version1.3/Imagen14.png)


**MODULO DE KARDEX**

- Se adiciona la Columna Familia al Pop-UP para seleccionar los Materiales y Repuestos.

![Procesar imagen](../../assets/images/Version1.3/Imagen15.png)

- Se desarrolla el reporte KXU-IDCC – Informe Detallado Por Centro de Costo. El cual adiciona los campos de Recibido y Fecha al Detalle del registro y el Total de Cantidad al resumen de Centro de Costo.

![Procesar imagen](../../assets/images/Version1.3/Imagen16.png)


**MODULO DE COMBUSTIBLES**

- El usuario administrador define si la Compañía registra el Consumo de Combustibles

![Procesar imagen](../../assets/images/Version1.3/Imagen17.png)

- Los usuarios podrán ver e interactuar con el módulo de Consumo de Combustibles

![Procesar imagen](../../assets/images/Version1.3/Imagen18.png)

- La grilla listara los consumos registrados con su consecutivos, referencia, vehículo relacionado, fecha de consumo, conductor, tipo de combustible, cantidad, valor y contrato.

![Procesar imagen](../../assets/images/Version1.3/Imagen19.png)

- En el detalle el usuario debe registrar el vale de consumo, el contrato relacionado, la referencia, el vehículo relacionado, fecha de consumo, conductor, tipo de combustible, cantidad y valor

![Procesar imagen](../../assets/images/Version1.3/Imagen20.png)

- Se permite a los usuarios usar filtros de búsqueda por: Atributos del Activo/Vehículo, vale, fecha de consumo, conductor, contrato y referencia.

![Procesar imagen](../../assets/images/Version1.3/Imagen21.png)

- El usuario puede exportar la grilla con las opciones de Referencia, Cod. Activo, Desc. Activo, conductor, fecha de consumo, tipo, cantidad, valor, total, kilómetros y contrato.

![Procesar imagen](../../assets/images/Version1.3/Imagen22.png)

- Se genera el reporte CMR-RPT – Resumen de Consumos de Combustible, el cual dará un resumen del consumo de combustible agrupado por Vehículo y meses, mostrando un total de Consumo en base a estas relaciones.

![Procesar imagen](../../assets/images/Version1.3/Imagen23.png)


**MODULO DE SOLICITUDES**

- Se consulta al usuario al momento de cerrar la solicitud con OT, si desea que esta lleve Control presupuestal.

![Procesar imagen](../../assets/images/Version1.3/Imagen24.png)

- Se adiciona la validación para que el sistema no permita Cerrar una solicitud como Cerrada no Ejecutada; si esta no tiene un activo real relacionado.

![Procesar imagen](../../assets/images/Version1.3/Imagen25.png)

- Se adiciona el Indicador de Firma de Técnico a la grilla de Solicitudes.

![Procesar imagen](../../assets/images/Version1.3/Imagen26.png)

**MODULO ORDENES DE TRABAJO**

- Se adiciona el campo De **Técnico Externo** a las Ordenes de Trabajo, este técnico esta relacionado a los **Terceros Externos** seleccionados como Responsables de la Orden de Trabajo, según los técnicos registrados a este Tercero.

![Procesar imagen](../../assets/images/Version1.3/Imagen27.png)

- Se adiciona el Indicador de Firma de Técnico a la grilla de Ordenes de Trabajo

![Procesar imagen](../../assets/images/Version1.3/Imagen28.png)

- Se adiciona el reporte OTU-MPICAT – Detalle Orden De Trabajo Pre-Ejecución con Acciones Técnicas.

![Procesar imagen](../../assets/images/Version1.3/Imagen29.png)

 
**MODULO DE HISTORIA**

- Se adiciona el campo De **Técnico Externo** a las Ordenes de Trabajo, este técnico está relacionado a los **Terceros Externos** seleccionados como Responsables de la Orden de Trabajo, según los técnicos registrados a este Tercero.

![Procesar imagen](../../assets/images/Version1.3/Imagen30.png)

- Se adiciona el Indicador de Firma de Técnico a la grilla de Historia.           

![Procesar imagen](../../assets/images/Version1.3/Imagen31.png)

- Se adicionan nuevo Submódulo en Historia con Indicadores gráficos.

![Procesar imagen](../../assets/images/Version1.3/Imagen32.png)

**Total actividades por tipo de registro.**

- Muestra la cantidad de actividades clasificadas según su tipo de registro, lo que facilita el análisis del uso de diferentes registros.

![Procesar imagen](../../assets/images/Version1.3/Imagen33.png)


**Total de actividades de un periodo clasificadas por estado en historia.**

- Presenta las actividades realizadas en un periodo específico, clasificadas por su estado en el historial. 

![Procesar imagen](../../assets/images/Version1.3/Imagen34.png)

**Total de actividades agrupadas por estados .**

- Agrupa las actividades de acuerdo con su estado actual, proporcionando una visión clara de la distribución de las actividades según su avance. 

![Procesar imagen](../../assets/images/Version1.3/Imagen35.png)


**Total de actividades agrupadas por centro de costo.**

- Clasifica las actividades según los diferentes centros de costo, mostrando la carga de trabajo asignada a cada uno.

![Procesar imagen](../../assets/images/Version1.3/Imagen36.png)

**Total de actividades agrupadas por centros responsables .**

- Muestra la cantidad total de actividades gestionadas por los diferentes centros responsables, ayudando a identificar áreas de alta o baja actividad.

![Procesar imagen](../../assets/images/Version1.3/Imagen37.png)

**Actividades del responsable por centro responsable**

- Detalla las actividades asignadas a cada responsable dentro de un centro, permitiendo un análisis más específico de la distribución del trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen38.png)

**Total de solicitudes clasificadas por estados.**

- Presenta el total de solicitudes, organizadas por su estado actual, facilitando el monitoreo de solicitudes en diferentes fases del proceso.

![Procesar imagen](../../assets/images/Version1.3/Imagen39.png)

**Total de ordenes generadas desde Solicitudes.**

- Muestra la cantidad total de órdenes que se han generado a partir de solicitudes, lo que permite evaluar la efectividad del flujo de trabajo desde la solicitud hasta la orden.

![Procesar imagen](../../assets/images/Version1.3/Imagen40.png)


**Total de órdenes.**

- Proporciona una vista general del total de órdenes generadas, sin distinción de periodo o estado.

![Procesar imagen](../../assets/images/Version1.3/Imagen41.png)

**Total de órdenes del mes actual.**

- Presenta el número total de órdenes generadas durante el mes actual, proporcionando un indicador del rendimiento mensual.

![Procesar imagen](../../assets/images/Version1.3/Imagen42.png)

**Total de órdenes meses anteriores**

- Muestra el número total de órdenes generadas en meses previos, facilitando el análisis comparativo con el mes actual.

![Procesar imagen](../../assets/images/Version1.3/Imagen43.png)

**Total de actividades agrupadas por tipo de mantenimiento.**

- Clasifica las actividades según el tipo de mantenimiento (preventivo, correctivo, etc.), mostrando la proporción de cada uno.

![Procesar imagen](../../assets/images/Version1.3/Imagen44.png)


**Total de ordenes clasificadas por tipo de mantenimiento.**

- Presenta las órdenes agrupadas por su tipo de mantenimiento, permitiendo analizar las prioridades y enfoques en el trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen45.png)

**Periodo de ordenes por TM**

- Muestra las órdenes realizadas durante diferentes periodos, clasificadas por tipo de mantenimiento, lo que permite observar tendencias a lo largo del tiempo.

![Procesar imagen](../../assets/images/Version1.3/Imagen46.png)

**Periodo de ordenes por TM en historia **

- Proporciona una visión histórica de las órdenes generadas por tipo de mantenimiento, permitiendo un análisis detallado del desempeño en distintos periodos

![Procesar imagen](../../assets/images/Version1.3/Imagen47.png)

**Se adicionan nuevo Submódulo en Historia con Indicadores de Eficiencia por Tipo de Mantenimiento.**


![Procesar imagen](../../assets/images/Version1.3/Imagen48.png)

**Total de ordenes preventivas clasificadas por estados en ordenes e historia.**

- Muestra el total de órdenes preventivas, organizadas según su estado actual y su historial, lo que permite evaluar el seguimiento y la finalización de tareas preventivas.

![Procesar imagen](../../assets/images/Version1.3/Imagen49.png)

**Total de ordenes preventivas ejecutadas.**

- Presenta el número total de órdenes preventivas que han sido completadas, proporcionando una visión clara de la eficiencia en la ejecución de estas tareas.

![Procesar imagen](../../assets/images/Version1.3/Imagen50.png)

**Total de actividades correctivas clasificadas por estado.**

- Clasifica las actividades correctivas según su estado, destacando el progreso y la resolución de problemas operacionales.

![Procesar imagen](../../assets/images/Version1.3/Imagen51.png)

**Total de actividades correctivas ejecutadas clasificadas por estado.**

- Muestra las actividades correctivas que han sido completadas, organizadas por estado, lo que permite analizar la eficiencia en la respuesta a correcciones necesarias

![Procesar imagen](../../assets/images/Version1.3/Imagen52.png)

**MODULO DE ADMINSITRACION**

- El usuario administrador debe definir si las Ordenes creadas desde AMovil tienen o no Control Presupuestal.

![Procesar imagen](../../assets/images/Version1.3/Imagen53.png)

- El usuario administrador debe definir si los técnicos en AMovil pueden o no Modificar los activos y el responsable de las Solicitudes de Servicio

![Procesar imagen](../../assets/images/Version1.3/Imagen54.png)

- El usuario administrador debe definir si los técnicos en AMovil pueden o no Modificar los activos y el responsable de las Ordenes de Trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen55.png)

- El usuario administrador puede definir por Compañía el mensaje de contacto que se enviara en las notificaciones por correo.

![Procesar imagen](../../assets/images/Version1.3/Imagen56.png)


**NUEVOS DISEÑOS DE LAS NOTIFICACIONES POR CORREO ELECTRONICO**

**Creación de la Solicitud**


Este correo se envía al solicitante cuando se crea una nueva solicitud de servicio. 

![Procesar imagen](../../assets/images/Version1.3/Imagen57.png)


**Asignación de la Solicitud**

- Este correo se envía al solicitante cuando se asigna un responsable a la solicitud de servicio.

![Procesar imagen](../../assets/images/Version1.3/Imagen58.png)

**Modificación de la Solicitud**

- Este correo se envía al solicitante cuando se modifica el estado de la solicitud.

![Procesar imagen](../../assets/images/Version1.3/Imagen59.png)

**Cierre de la Solicitud**

- Este correo se envía al solicitante cuando se cierra una solicitud.

![Procesar imagen](../../assets/images/Version1.3/Imagen60.png)


**Cierre de la Solicitud con OT**

- Este correo se envía al solicitante cuando se cierra la solicitud de servicio con OT.

![Procesar imagen](../../assets/images/Version1.3/Imagen61.png)

**Comentario a la Solicitud**

- Este correo se envía al solicitante cuando se anexa un comentario a la solicitud de servicio.

![Procesar imagen](../../assets/images/Version1.3/Imagen62.png)

**Asignación de la Solicitud**

- Este correo se envía al responsable cuando se le asigna una solicitud de servicio.

![Procesar imagen](../../assets/images/Version1.3/Imagen63.png)

**Modificación de la Solicitud**

-﻿ Este correo se envía al responsable cuando se modifica el estado de la solicitud de servicio.

![Procesar imagen](../../assets/images/Version1.3/Imagen64.png)

**Cierre de la Solicitud**

-﻿ Este correo se envía al responsable cuando se cierra una solicitud de servicio.

![Procesar imagen](../../assets/images/Version1.3/Imagen65.png)

**Cierre de la Solicitud con OT**

- Este correo se envía al responsable cuando se cierra la solicitud de servicio con OT.

![Procesar imagen](../../assets/images/Version1.3/Imagen66.png)

**Creación de la Orden**

- Este correo se envía al solicitante cuando se crea la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen68.png)


**Asignación de la orden**

- Este correo se envía al solicitante cuando se asigna un responsable a la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen69.png)

**Modificación de la Orden**

- Este correo se envía al solicitante cuando se modifica el estado de la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen70.png)

**Cierre de la Orden**

- Este correo se envía al solicitante cuando se cierra una orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen71.png)

**Comentario de la Orden**

- Este correo se le envía al solicitante cuando se anexa un comentario a la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen72.png)

**Asignación de la Orden**

- Este correo se envía cuando se asigna un responsable a la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen73.png)

**Modificación de la Orden**

- Este correo se envía al responsable cuando se modifica el estado de la orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen74.png)

**Cierre de la Orden**

- Este correo se envía al responsable cuando se cierra una orden de trabajo.

![Procesar imagen](../../assets/images/Version1.3/Imagen75.png)