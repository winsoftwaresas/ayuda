---
layout: page
title: AM4G Versión 0.82 Cambios Y Adiciones.
---
**MÓDULO DE AMsi:**

- Se adiciona el campo: Confirmar contraseña de Usuario.

![Procesar imagen](../../assets/images/Version82/Imagen1.png)

![Procesar imagen](../../assets/images/Version82/Imagen2.png)


Para los ambientes donde la configuración definida en AMsi es: No Relacionar Usuarios por centros de costo . Se adicionan las funciones:

![Procesar imagen](../../assets/images/Version82/Imagen3.png)


- Por defecto el AMsi toma la primera compañía de la lista

![Procesar imagen](../../assets/images/Version82/Imagen4.png)


- Función de búsqueda con el tabulador para activos. Permite la búsqueda por Código, Número de Activo Fijo y Serial.

![Procesar imagen](../../assets/images/Version82/Imagen5.png)

**MODULO DE INFRAESTRUCTURA:**

* **PERMISOS**

- Se revisan y corrigen los permisos de visualización para todas las tablas de Infraestructura

![Procesar imagen](../../assets/images/Version82/Imagen6.png)

![Procesar imagen](../../assets/images/Version82/Imagen7.png)

* **CONTRATOS**

- Se calculan y muestran los valores de ejecución de contratos.

![Procesar imagen](../../assets/images/Version82/Imagen8.png)

**Gasto Real Ejecutado:** Comprende la sumatoria de los gastos de Mano de Obra Externa, Otros Conceptos y Materiales y Repuestos de las Ordenes Cerradas en el modulo de Ordenes y las Ordenes que se encuentran en el módulo de Historia asociadas a este contrato.

**Gasto Real Ejecutado en el Año Actual:** Comprende la sumatoria de los gastos de Mano de Obra Externa, Otros Conceptos y Materiales y Repuestos de las Ordenes Cerradas en el módulo de Ordenes y las Ordenes que se encuentran en el módulo de Historia asociadas a este contrato en el año actual.

**Presupuesto pendiente por ejecutar:** Corresponde a la diferencia entre el Valor Contrato Año y el Gasto Real Total Ejecutado.

Gasto Real Ejecutado en OT Pendientes: Comprende la sumatoria de los gastos de Mano de Obra Externa, Otros Conceptos y Materiales y Repuestos de las Ordenes asociadas al contrato y su estado no es cerrado ni cancelado.

**MÓDULO DE ACTIVOS:**

- Se adiciona la validación de tipo de compañía biomédica y uso de metrología en el detalle de activo cuando se ingresa desde la vista tipo Árbol a los detalles de los Activos.

![Procesar imagen](../../assets/images/Version82/Imagen9.png)

- Se desarrolla el calculo del valor actual depreciado, años de uso y años restantes del Activo. 

![Procesar imagen](../../assets/images/Version82/Imagen10.png)

> **Nota:** Para realizar el calculo del valor depreciado del Activo se debe llenar la información de los campos Adquisición, Valor Moneda Nacional y Valor de Salvamento. 

**MÓDULO DE PROGRAMAS:**

- Se guarda la relación de contador con el criterio para que el historial del contador no se pierda al momento de volver a seleccionar el Criterio por Contador.

![Procesar imagen](../../assets/images/Version82/Imagen11.png)

**MÓDULO DE SOLICITUDES:**

- Los usuarios con permisos restrictivos solo podrán exportar y modificar masivamente los registros a los que tienen acceso.

![Procesar imagen](../../assets/images/Version82/Imagen12.png)

**MÓDULO DE ÓRDENES:**

- Los usuarios con permisos restrictivos solo podrán exportar y modificar masivamente los registros a los que tienen acceso

![Procesar imagen](../../assets/images/Version82/Imagen13.png)

- Se corrige falla en el campo responsable que llevaba el responsable anterior al siguiente registro si este no estaba asignado.

![Procesar imagen](../../assets/images/Version82/Imagen14.png)

**MÓDULO DE HISTORIA:**

- Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Historia.

![Procesar imagen](../../assets/images/Version82/Imagen15.png)

**MÓDULO DE ADMINISTRACIÓN:**

- Se parametriza la opción Permitir crear Solicitudes y Órdenes solo usuarios incluidos en Terceros en valores por defecto de la compañía.

![Procesar imagen](../../assets/images/Version82/Imagen16.png)

Si la opción se encuentra marcada en SI. Solo permitirá a usuarios incluidos en terceros generar solicitudes y Ordenes.

![Procesar imagen](../../assets/images/Version82/Imagen17.png)

![Procesar imagen](../../assets/images/Version82/Imagen18.png)