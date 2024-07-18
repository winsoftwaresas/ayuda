---
layout: page
title: AM4G Versión 0.86 Cambios Y Adiciones.
---
**CAMBIO GLOBAL**

- En los listados desplegables se cambia el seleccionador por un filtro. De esta manera los usuarios al escribir sobre el campo verán solo las opciones que contiene la cadena de caracteres que van escribiendo, permitiendo una búsqueda mas optima y sencilla para el usuario. 

![Procesar imagen](../assets/images/Version86/Imagen1.png)

**MODULO DE AMSI:**

- Se desarrolla la parametrización para solicitar la Fecha Tentativa. El usuario administrador del AMsi puede definir si a los usuarios solicitantes se le permite ingresar fecha tentativa o no.

Para esto el usuario administrador debe logearse y en configuración seleccionar la opción que desee.

![Procesar imagen](../assets/images/Version86/Imagen2.png)

Si la Opción marcada es No. El usuario solicitante no puede ingresar FF Tentativa.

![Procesar imagen](../assets/images/Version86/Imagen3.png)

Si la Opción marcada es Si. El usuario solicitante puede ingresar FF Tentativa.

![Procesar imagen](../assets/images/Version86/Imagen4.png)

- Se desarrolla una validación para que la Fecha Tentativa ingresada por el usuario no sea Inferior a la fecha de la solicitud. 

![Procesar imagen](../assets/images/Version86/Imagen5.png)

**MODULO DE ACTIVOS:**

- Se desarrolla el submódulo **Cruce De Activos**

![Procesar imagen](../assets/images/Version86/Imagen6.png)

En esta grilla los usuarios pueden observar el número de Programas, Solicitudes, Paros, Ordenes y registros e Historia que tiene cada activo. El usuario puede realizar búsquedas por filtros, exportar los datos a un archivo de Excel o realizar búsquedas cruzadas entre uno o varios activos dando como resultado un resume de los registros de cada búsqueda.

![Procesar imagen](../assets/images/Version86/Imagen7.png)

Para realizar búsqueda tiene la Opción de filtro ya conocida por los usuarios con los mismos campos de búsqueda del módulo principal de Activos.

![Procesar imagen](../assets/images/Version86/Imagen8.png)

Para exportara Excel tiene la Opción a la izquierda del filtro

![Procesar imagen](../assets/images/Version86/Imagen9.png)

Obtendrá un archivo plano de acuerdo a la opción solicitada.

![Procesar imagen](../assets/images/Version86/Imagen10.png)

Para ver el listado de los registros, el usuario debe seleccionar el o los activos que desea relacionar y dar click sobre el módulo que desea listar.

![Procesar imagen](../assets/images/Version86/Imagen11.png)

El sistema desplegara un listado que contiene los registros solicitados según la selección del usuario, estos datos también pueden ser descargados a un archivo plano de Excel.

![Procesar imagen](../assets/images/Version86/Imagen12.png)


- Se desarrolla el reporte ACR-INV Resumen De Activos con su Último Mantenimiento Realizado. Con este reporte el usuario puede ver el ultimo mantenimiento realizado al Activo, el módulo en que se encuentra y el comentario del mismo. 

![Procesar imagen](../assets/images/Version86/Imagen13.png)

**MODULO DE PROGRAMAS:**

- Se adicionan los filtros de búsqueda por FF de Ultima Generación y Responsable por la Institución 

![Procesar imagen](../assets/images/Version86/Imagen14.png)

![Procesar imagen](../assets/images/Version86/Imagen15.png)


**MODULO DE SOLICITUDES**

- Las Solicitudes Cerradas Ejecutadas y Cerradas No Ejecutadas luego de encontrarse en este Estado no permitirán el cambio de estado o FF De Atención. 

![Procesar imagen](../assets/images/Version86/Imagen16.png)

Si el usuario tiene marcado el Permiso Impedir modificar SS con estado Cerradas. El usuario no podrá realizar ningún cambio sobre las solicitudes Cerradas Ejecutadas y Cerradas No Ejecutadas

![Procesar imagen](../assets/images/Version86/Imagen17.png)

**MODULO DE ORDENES:**

- Por defecto los usuarios no podrán realizar ningún cambio sobre una Orden Cerrada Ejecutada o Cancelada. 

Si el usuario tiene marcado el **Permiso Permitir modificar Ordenes en Estado Cerrada Ejecutada.**

![Procesar imagen](../assets/images/Version86/Imagen18.png)

El usuario podrá realizar cambios sobre las Ordenes Cerradas Ejecutadas y canceladas. Con excepción de los campos de Estado y la FF de Atención.

![Procesar imagen](../assets/images/Version86/Imagen19.png)


- Se preselecciona siempre la opción Ejecución en tiempo Real al relacionar un responsable al Oficio en la matriz de Gasto Real

![Procesar imagen](../assets/images/Version86/Imagen20.png)

- Se cambia el total de la Matriz de Presupuesto – Real a Real – Presupuesto, de esta manera se vera en rojo cuando el valor real supere el presupuesto y la diferencia en negro indica que todavía hay presupuesto disponible. 

![Procesar imagen](../assets/images/Version86/Imagen21.png)


**MODULO DE HISTORIA:**

- Se desarrolla la función de Eliminar Masivamente en Historia.  

El usuario debe tener el permiso de proceso Eliminar Masivamente de Historia para poder realizar el proceso

![Procesar imagen](../assets/images/Version86/Imagen22.png)

Si tiene el permiso el usuario debe ingresar al submódulo Eliminar Masivamente posterior a ver realizado el filtro de los registros que desea eliminar

![Procesar imagen](../assets/images/Version86/Imagen23.png)

![Procesar imagen](../assets/images/Version86/Imagen24.png)


- Se Adiciona el campo F/H Creación a las Opciones de Exportar. 


![Procesar imagen](../assets/images/Version86/Imagen25.png)


**MODULO DE HISTORIA ARCHIVADA:**

- Se desarrolla la función de Eliminar Masivamente en Historia Archivada. 

El usuario debe tener el permiso básico de Eliminar en Historia – Historia Archivada

![Procesar imagen](../assets/images/Version86/Imagen26.png)

Si tiene el permiso el usuario debe ingresar al submódulo Eliminar Masivamente posterior a ver realizado el filtro de los registros que desea eliminar

![Procesar imagen](../assets/images/Version86/Imagen27.png)

![Procesar imagen](../assets/images/Version86/Imagen28.png)


**MODULO DE ADMINISTRACION:**

- Se desarrollan permisos restrictivos independientes para los usuarios de **AMovil**, de esta manera podrán tener permisos restrictivos en AMOVIL y no necesariamente en **AM4G**.

![Procesar imagen](../assets/images/Version86/Imagen29.png)

- Se crea el usuario **Manager** con el fin de que el administrador del sistema pueda solucionar problemas por bloqueos de concurrencia.

**Nota: El administrador del sistema debe pedir la contraseña a Winsoftware, este usuario solo tiene permisos sobre el módulo de administración.**





