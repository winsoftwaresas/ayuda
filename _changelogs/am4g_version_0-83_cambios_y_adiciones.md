---
layout: page
title: AM4G Versión 0.83 Cambios Y Adiciones.
---
**MODULO DE AMSI:**

- Se desarrolla la función para exportar los datos de la Grilla en AMsi.



![Procesar imagen](../assets/images/Version83/Imagen1.png)

![Procesar imagen](../assets/images/Version83/Imagen2.png)

**MODULO DE INFRAESTRUCTURA:**
**CONTRATOS**

-  Se ajustan los valores decimales en el cálculo de los contratos


![Procesar imagen](../assets/images/Version83/Imagen3.png)




**MODULO DE ACTIVOS:**

- Se desarrolla la validación de valores en los contadores, según su tipo sean incremental o decremental y el estándar de planeación en relación al tiempo de actualización.



![Procesar imagen](../assets/images/Version83/Imagen4.png)

- Se agregan los campos Alias y Código de barra Interno a la función de modificación masiva.

![Procesar imagen](../assets/images/Version83/Imagen5.png)


![Procesar imagen](../assets/images/Version83/imagen6.png)

**MODULO DE PROGRAMAS:**

- Se corrige el campo Adicionar Comentario en modificación masiva, ahora el sistema permite agregar comentarios a los programas sin borrar la información previa que contenía el programa en este campo.

![Procesar imagen](../assets/images/Version83/imagen7.png)

![Procesar imagen](../assets/images/Version83/imagen8.png)


- Se adiciona el campo Responsable por Institución en la función de modificación masiva.

![Procesar imagen](../assets/images/Version83/imagen9.png)


- Se corrige el campo de insertar Ingresar Presupuesto – Ingresar Materiales y Repuestos en modificación masiva. El usuario debe seleccionar el Almacén desde donde tomara el repuesto antes de abrir la función de búsqueda.

![Procesar imagen](../assets/images/Version83/imagen10.png)

![Procesar imagen](../assets/images/Version83/imagen11.png)

![Procesar imagen](../assets/images/Version83/imagen12.png)

- Se corrige el campo de búsqueda RP-Código el usuario debe elegir primero el almacén antes de desplegar la ventana de búsqueda.

![Procesar imagen](../assets/images/Version83/imagen13.png)

**MODULO DE SOLICITUDES:**

- Se adiciona el campo Fecha FDA (Paro) en la creación de las solicitudes, la fecha de paro precarga por defecto la fecha actual, pero permitirá a los usuarios modificarla por una anterior.

![Procesar imagen](../assets/images/Version83/imagen14.png)

- Se agrega la columna Fecha de Cierre en la función de Exportar Grilla

![Procesar imagen](../assets/images/Version83/imagen15.png)


**MODULO DE ORDENES:**

- Se adiciona modal que contiene la explicación correspondiente a los Colores en la columna de Estado

![Procesar imagen](../assets/images/Version83/imagen16.png)

- Se habilita el campo Agregar Responsable de Gasto Real a la modificación masiva.

![Procesar imagen](../assets/images/Version83/imagen17.png)

- La bitácora de Ordenes de trabajo tomara el registro desde la Creación de la Orden y no desde la primera modificación cómo funcionaba actualmente.

![Procesar imagen](../assets/images/Version83/imagen18.png)

- Se adiciona el campo de Tiempo Total de Solución, este campo será calculado por el sistema y no permite corrección manual, equivale a la diferencia entre la Fecha de Paro y la fecha de Fin de Trabajos.

![Procesar imagen](../assets/images/Version83/imagen19.png)

- Se corrige la función de Actualización en Gasto Real Otros Conceptos.

![Procesar imagen](../assets/images/Version83/imagen22.png)


**MODULO DE HISTORIA:**

- Se lleva al modulo de Seguimiento y Cierre el registro de Activo Limpio.

![Procesar imagen](../assets/images/Version83/imagen23.png)


- Se desarrolla el reporte HMR-RCACD- Resumen De Costos En Ordenes De Trabajo - Agrupado Por Activo Raíz el cual contiene una lista de las Ordenes de trabajo y sus costos agrupados por su Activo Padre.

![Procesar imagen](../assets/images/Version83/imagen24.png)


- Se desarrolla el reporte HMR-RCACDXA - Resumen De Costos En Ordenes De Trabajo - Agrupado Por Activo Raíz y Activos. El cual contiene una lista de Activos con los costos relacionados agrupado por Activo Raíz.

![Procesar imagen](../assets/images/Version83/imagen25.png)









