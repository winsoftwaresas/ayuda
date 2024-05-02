---
layout: page
title: AM4G Versión 1.2 Cambios y Adiciones
---
**MODULO DE ACTIVOS**

- Se realiza parametrización en activos para permitir dos Contadores en un Activo. Para ello el usuario debe marcar el switche y podrá adicionar los dos Contadores al Activo.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen1.png)


- Se desarrolla una función la cual generara automáticamente una Orden de Trabajo cuando una característica controlable adiciona una lectura fuera del rango 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen2.png)

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen3.png)

**MODULO DE KARDEX**

- Se añade un campo de **Recibido por** en los movimientos de Salida, el cual lista los **Terceros** internos para relacionar a quien se le entrega. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen4.png)

- Se añade un campo de **Comentario** en los movimientos de Salida, en el cual el usuario puede escribir notas sobre la entrega por movimiento o sobre el movimiento en particular

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen5.png)


- Se añaden los filtros de búsqueda en Subgrupo por los campos **Recibido por** y **Comentarios**, relacionados a los movimientos de Salida.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen6.png)

- Se desarrolla reporte **KXR-RST Informe de Salidas – Entregas** el cual relaciona las salidas con las entregas y comentarios de los movimientos

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen7.png)

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen8.png)

- Se adiciona una validación en Entradas que permite al **Concepto 33** realizar movimiento de entrada con valor unitario en 0.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen9.png)


**MODULO DE PROGRAMAS**

- Se habilita el criterio de programación por dos contadores. (Ambos deben ser incrementales).

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen10.png)

- Se permite relacionar en un programa **Presupuesto y Acciones Técnicas** (las acciones técnicas contienen una lista de chequeo de acciones a realizar en la futura Orden de trabajo). 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen11.png)

**MODULO DE SOLICITUDES**

- Se desarrolla una validación al campo Comentario para que no permita Actualizar el detalle de la Solicitud si se encuentra un Comentario sin agregar.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen12.png)

- Se agrega el **Código de activo** a la exportación a Excel en Solicitudes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen13.png)

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen14.png)

**MODULO DE ORDENES**

- Se permite en una Orden manejar Acciones técnicas y control de Gastos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen15.png)

- Se desarrollan los check-list en acciones técnicas, con lo cual los planeadores pueden definir que acciones se deben realizar en una Orden y los técnicos pueden marcar si se realizaron o no, adicionar un valor nominal si se requiere en la acción y un comentario.

- Los planeadores adicionan las acciones técnicas directamente en la pestaña de Acciones Técnicas.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen16.png)

- El técnico selecciona la acción técnica que realizo dando click sobre la tabla, llena los campos que necesita y da click en actualizar. (Si el cliente tiene AMovil también podrán hacerlo desde este aplicativo).

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen17.png)

- Se desarrolla el reporte **0TD-AT** con el detallado de Acciones técnica por Orden de Trabajo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen18.png)

- Se modifican los procesos de **Insertar** y **Actualizar** en las matrices de gasto real y presupuesto. Los usuarios ya no deben usar el botón de Actualizar situado arriba en el detalle a la hora de interactuar con las matrices estas insertan o actualizan de forma directa al ingresar a las tablas.

- Para insertar quedara guardado el registro solo dando click en el botón +

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen19.png)

Para actualizar quedara registrado el cambio solo dando click en **Actualizar**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen20.png)


**Nota: Esto aplica para todas las tablas de la matriz en la Orden de Trabajo. Prepuesto de mano de Obra Interna y Externa, Materiales Y Repuestos y Otros Conceptos. Gasto Real mano de Obra Interna y Externa, Materiales Y Repuestos y Otros Conceptos y Acciones Técnicas**


- Se desarrolla una validación al campo Comentario para que no permita Actualizar el detalle de la Orden de Trabajo si se encuentra un Comentario sin agregar.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen21.png)

- Se adiciona al registro en la **bitácora** de la Orden de trabajo los cambios de Activos 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen22.png)

**MODULO DE HISTORIA**

- Se desarrolla el reporte **HMD-AT** con el detallado de Acciones técnica por Orden de Trabajo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen23.png)

- Se desarrolla una validación al campo Comentario para que no permita Actualizar el detalle de la Historia si se encuentra un Comentario sin agregar.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen24.png)

- Se modifican los procesos de **Insertar** y **Actualizar** en las matrices de gasto real y presupuesto. Los usuarios ya no deben usar el botón de Actualizar situado arriba en el detalle a la hora de interactuar con las matrices estas insertan o actualizan de forma directa al ingresar a las tablas.

- Para insertar quedara guardado el registro solo dando click en el botón +

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen25.png)

- Para actualizar quedara registrado el cambio solo dando click en **Actualizar**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.2/Imagen26.png)

**Nota: Esto aplica para todas las tablas de la matriz en la Orden de Trabajo. Gasto Real mano de Obra Interna y Externa, Materiales Y Repuestos y Otros Conceptos y Acciones Técnicas. **





