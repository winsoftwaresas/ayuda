---
layout: page
title: Versión 1.6
media: "../../assets/images/v1.6/"
---

## MÓDULO AMSI

{% include tag.html tag="added" %}  
Al momento de crear una solicitud en AMSI, ahora podrás ver y seleccionar el **SubCentro de Costo** correspondiente. Esto te permitirá asignar correctamente los recursos desde el inicio y facilitar el seguimiento y control de los costos asociados

![SubCentro de Costo]({{ page.media }}/image01.png)

{% include tag.html tag="added" %}  
Ahora, en AMSI podrás ver indicadores que te muestran el estado de los servicios que has solicitado: si ya fueron evaluados, si están en análisis o si ya han sido asignados. Esto te da mayor visibilidad y control sobre el avance de tus solicitudes.

![Indicadores]({{ page.media }}/image02.png)

{% include tag.html tag="added" %}  
Además, en AMSI ahora podrás filtrar la búsqueda de servicios utilizando el nuevo campo de indicadores de estado. Esto te permitirá encontrar fácilmente solicitudes que ya fueron evaluadas, están en análisis o han sido asignadas, mejorando la gestión y el seguimiento de tus requerimientos.

![Filtro de Indicadores]({{ page.media }}/image03.png)

![Vista de Indicadores]({{ page.media }}/image04.png)

---

## MÓDULO DE INFRAESTRUCTURA

### ACCIONES TÉCNICAS

{% include tag.html tag="added" %}  
Ahora, cuando realices una acción técnica en una Orden de Trabajo, el sistema actualizará automáticamente las características relevantes del activo, sin que tengas que hacerlo manualmente. Esto te ahorra tiempo y asegura que la información del activo siempre esté actualizada y sea confiable.

- Para realizar esto el usuario debe relacionar la Acción Técnica con una Característica Controlable en el modulo de **Infraestructura >> Acciones Técnica**. Se marca la Opción Relaciona y se Elige de la lista desplegable la Característica Controlable a relacionar.

![Acción Técnica]({{ page.media }}/image05.png)

- En la Orden de Trabajo se adiciona la Acción Técnica y se actualiza su valor.

![Detalle de la Orden de Trabajo]({{ page.media }}/image06.png)

- El sistema automáticamente llevará el valor actualizado a la tabla de Características Controlables dentro del Activo.

![Detalle de Activos]({{ page.media }}/image07.png)

### MÓDULO DE ACTIVOS

{% include tag.html tag="added" %}  
Ahora, en AM 4G, los usuarios pueden registrar no solo el valor de una característica controlable, sino también la hora exacta en la que se tomó. Esto permite un seguimiento más preciso y detallado del comportamiento del activo a lo largo del tiempo.

![Registro de Hora]({{ page.media }}/image08.png)

{% include tag.html tag="added" %}  
Ahora los usuarios podrán visualizar la unidad de medida de las características asociadas a los activos en el reporte ACD-FTE: Ficha Técnica de Activo. Esta mejora permite interpretar con mayor precisión los valores técnicos, facilitando la comprensión de la información y apoyando una toma de decisiones más informada.

![Ficha Técnica]({{ page.media }}/image09.png)

### INVENTARIO DE ACTIVOS

{% include tag.html tag="added" %}  
Ahora, en AM 4G, los usuarios pueden consultar los reportes de los inventarios tomados desde AMovil, gracias al nuevo submódulo de **Inventario de Activos**. Esto permite tener una visión centralizada y actualizada del estado de los activos directamente desde la plataforma web.

- Para esto el usuario debe ingresar al SubMódulo.

![SubMódulo]({{ page.media }}/image10.png)

- Este listara los inventarios que se han tomado a lo largo del tiempo en AMovil, para que el usuario seleccione el Inventario que desea visualizar.

![Registro de Inventarios]({{ page.media }}/image11.png)

- El usuario selecciona el Inventario e imprime el reporte.

![Generador de Reportes]({{ page.media }}/image12.png)

![Resumen de Inventarios]({{ page.media }}/image13.png)

---

## MÓDULO DE ALMACÉN

{% include tag.html tag="added" %}  
Ahora, en el módulo de Almacén de AM 4G, los usuarios pueden filtrar los repuestos según la cantidad disponible. Esto facilita la búsqueda de materiales en stock y mejora la eficiencia en la gestión de inventarios.

![Subgrupo Materiales y Repuestos]({{ page.media }}/image14.png)

![Materiales y Repuestos]({{ page.media }}/image15.png)

---

### MÓDULO DE KÁRDEX

{% include tag.html tag="added" %}  
Ahora, en el módulo de Kárdex de AM 4G, los usuarios podrán ver el consecutivo del documento directamente en el detalle del movimiento. Esto facilita la trazabilidad y el control de cada transacción realizada en el almacén.

![Detalle de Documento]({{ page.media }}/image16.png)

{% include tag.html tag="added" %}  
Ahora, en el módulo de Kárdex de AM 4G, se podrá visualizar la unidad de consumo en los documentos de entrada. Esto permite una mejor identificación y control del tipo de unidad en la que se gestiona cada repuesto o material, facilitando la trazabilidad y el manejo del inventario.

![Unidad de Consumo]({{ page.media }}/image17.png)

{% include tag.html tag="added" %}  
Cuando un documento de Kárdex genere una salida que deje el inventario por debajo del punto mínimo de pedido, el sistema enviará automáticamente un correo al responsable del almacén. Esto permite actuar rápidamente para reabastecer el stock y evitar faltantes críticos.

![Punto Mínimo de Pedido]({{ page.media }}/image18.png)

![Notificación de Punto Mínimo]({{ page.media }}/image19.png)

### MÓDULO DE PROGRAMAS

{% include tag.html tag="added" %}  
Ahora, en el módulo de Programas de AM 4G, se permite registrar en el presupuesto la cantidad de horas correspondientes a la mano de obra externa. Esto mejora el control de los costos asociados a servicios contratados y facilita el análisis detallado de los recursos utilizados en cada orden de trabajo.

![Detalle del Programa de Mantenimiento]({{ page.media }}/image20.png)

> Nota: Se modifican todos los reportes de Mano de obra para que muestre y calcule tanto las horas como el costo total.

{% include tag.html tag="added" %}  
Se han añadido tres nuevos reportes en el módulo de **Programas** de AM 4G:

* PRP-PRMPT – Listado de Repuestos
* PRP-PRMR – Listado de Repuestos Detallado
* PRP-PRMRT – Totales de Repuestos

Estos reportes permiten visualizar el costo futuro estimado de los mantenimientos programados, facilitando la planificación presupuestal y la toma de decisiones en la gestión de activos.

![Nuevos Reportes]({{ page.media }}/image21.png)

![Listado de Repuestos Detallado]({{ page.media }}/image22.png)

![Listado de Repuestos]({{ page.media }}/image23.png)

![Totales de Repuestos]({{ page.media }}/image24.png)

---

## MÓDULO DE SOLICITUDES

{% include tag.html tag="added" %}  
Ahora, en el módulo de Solicitudes de AM 4G, los usuarios podrán registrar y editar la fecha programada de atención. Esta fecha será visible tanto en el detalle de la solicitud como en la grilla principal, lo que facilita la planificación y el seguimiento de los requerimientos.

![Detalle de la Solicitud de Servicio]({{ page.media }}/image25.png)

![Solicitudes de Servicio]({{ page.media }}/image26.png)

> La semaforización de los Estados cambia a la Fecha Programada.

![Semaforización de los Estados]({{ page.media }}/image27.png)

{% include tag.html tag="added" %}  
Se ha incorporado un nuevo filtro por semaforización en el **Módulo de Solicitudes** de AM 4G. Este filtro permite clasificar y visualizar rápidamente las solicitudes según su nivel de prioridad o estado, utilizando colores tipo semáforo (por ejemplo: rojo, amarillo y verde), lo que facilita la gestión y atención oportuna de los requerimientos.

![Subgrupo Solicitudes de Servicio]({{ page.media }}/image28.png)

![Solicitudes de Servicio]({{ page.media }}/image29.png)

{% include tag.html tag="added" %}  
Al momento de cerrar una solicitud en AM 4G, ahora es posible registrar la firma tanto de la persona que recibe el servicio como del técnico que lo ejecutó. Esto mejora la trazabilidad, la validación del servicio prestado y el respaldo documental del proceso.

![Ficha Técnica]({{ page.media }}/image30.png)

- El Técnico da click sobre la **Firma de Técnico** que desea realizar, realiza la firma y da click en Guardar.

![Firma del Técnico]({{ page.media }}/image31.png)

- Luego da click sobre la **Firma Recibido**, registra el nombre de la persona que recibe, toma su firma y da click en Guardar.

![Firma Recibido]({{ page.media }}/image32.png)

- Cuando las firmas ya fueron tomadas el texto se pondrá en color naranja, indicando que fueron tomadas y se pueden visualizar.

![Color de las Firmas]({{ page.media }}/image33.png)

- Da click sobre la firma que desea visualizar Y luego click sobre el botón **Visualizar Firma**

![Botón Visualizar Firma]({{ page.media }}/image34.png)

- Puede visualizar la Firma, la fecha en que fue registrada y el nombre del técnico o persona que recibe.

![Firma Visualizada]({{ page.media }}/image35.png)

---

## MÓDULO DE ÓRDENES

{% include tag.html tag="added" %}  
Se ha incorporado un nuevo filtro por semaforización en el **Módulo de Ordenes** de AM 4G. Este filtro permite clasificar y visualizar rápidamente las Órdenes de Trabajo según su nivel de prioridad o estado, utilizando colores tipo semáforo (por ejemplo: rojo, amarillo y verde), lo que facilita la gestión y atención oportuna de los requerimientos.

![Subgrupo Órdenes de Trabajo]({{ page.media }}/image36.png)

![Órdenes de Trabajo]({{ page.media }}/image37.png)

{% include tag.html tag="added" %}  
Al momento de cerrar una **Orden de Trabajo** en AM 4G, ahora es posible registrar la firma tanto de la persona que recibe el servicio como del técnico que lo ejecutó. Esto mejora la trazabilidad, la validación del servicio prestado y el respaldo documental del proceso.

![Detalle de la Órden de Trabajo]({{ page.media }}/image38.png)

- El Técnico da click sobre la **Firma de Técnico** que desea realizar, realiza la firma y da click en Guardar.

![Firma de Técnico]({{ page.media }}/image39.png)

- Luego da click sobre la **Firma Recibido**, registra el nombre de la persona que recibe, toma su firma y da click en Guardar.

![Firma Recibido]({{ page.media }}/image40.png)

- Cuando las firmas ya fueron tomadas el texto se pondrá en color naranja, indicando que fueron tomadas y se pueden visualizar.

![Indicador de Firmas]({{ page.media }}/image41.png)

- Da click sobre la firma que desea visualizar Y luego click sobre el botón **Visualizar Firma**.

![Visualizar Firma]({{ page.media }}/image42.png)

- Puede visualizar la firma, la fecha en que fue registrada y el nombre del técnico o persona que recibe.

![Firma Visualizada]({{ page.media }}/image43.png)

{% include tag.html tag="added" %}  
Ahora, en el **Módulo de Órdenes** de AM 4G, se permite registrar la cantidad de horas correspondientes a la mano de obra externa. Esto mejora el control de los costos asociados a servicios contratados y facilita el análisis detallado de los recursos utilizados en cada orden de trabajo.

![Módulo de Órdenes]({{ page.media }}/image44.png)

> Nota: se modifican todos los reportes de Mano de obra para que muestre y calcule tanto las horas como el costo total.

---

## MÓDULO DE HISTORIA

{% include tag.html tag="added" %}  
Ahora, en el **Módulo de Historia** de AM 4G, se permite registrar la cantidad de horas correspondientes a la mano de obra externa. Esto mejora el control de los costos asociados a servicios contratados y facilita el análisis detallado de los recursos utilizados en cada orden de trabajo.

![Detalle de Historia]({{ page.media }}/image45.png)

> Nota: Se modifican todos los reportes de Mano de obra para que muestre y calcule tanto las horas como el costo total.

{% include tag.html tag="added" %}  
Ahora los usuarios podrán visualizar la unidad de medida de las características asociadas a los activos en el reporte **HMD-HIHV**: Hoja de vida Ficha Técnica de Resumida y **HMD-HIHBVIO** : Hoja de vida Activo. Esta mejora permite interpretar con mayor precisión los valores técnicos, facilitando la comprensión de la información y apoyando una toma de decisiones más informada.

![Hoja de Vida Ficha Técnica Resumida]({{ page.media }}/image46.png)

![Hoja de Vida por Activo]({{ page.media }}/image47.png)

---

## MÓDULO DE ADMINISTRACIÓN

### REPORTES

{% include tag.html tag="added" %}  
El usuario administrador de la compañía ahora podrá personalizar los reportes en AM 4G. Esto incluye seleccionar cuáles reportes desea utilizar y modificar los títulos de los mismos, adaptándolos a las necesidades y lenguaje interno de la organización. Esta funcionalidad brinda mayor flexibilidad y control sobre la presentación de la información.

![Listado de Reportes]({{ page.media }}/image48.png)

- Al ingresar el usuario podrá ver los reportes disponibles.

![Reportes]({{ page.media }}/image49.png)

- Seleccione el reporte que desea modificar. Puede Habilitar o Deshabilitar y cambiar el texto de la descripción del reporte y dar click en **Actualizar**.

![Detalle del Reporte]({{ page.media }}/image50.png)

> Nota: Los reportes **Deshabilitados** no se listarán a los usuarios en sus respectivos módulos.

### VALORES POR DEFECTO

{% include tag.html tag="added" %}  
Ahora el usuario administrador puede definir si se exige la evaluación del servicio antes de enviar solicitudes u órdenes a Historia. Esta configuración es completamente parametrizable, lo que permite adaptar el flujo de trabajo según las necesidades operativas de cada institución.

![Valores por Defecto]({{ page.media }}/image51.png)

![Notificación]({{ page.media }}/image52.png)

---

## MÓDULO MULTIMEDIA

{% include tag.html tag="added" %}  
En los módulos de AM 4G que permiten el uso de contenido multimedia, ahora el sistema comprimirá automáticamente las imágenes al momento de cargarlas, antes de enviarlas al servidor. Esto mejora el rendimiento, reduce el tiempo de carga y optimiza el uso del almacenamiento sin comprometer la calidad visual.

![Propiedades de Imagen]({{ page.media }}/image53.png)