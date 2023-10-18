---
layout: page
title: AM4G Versión 1.1 Cambios y Adiciones
---
**MODULO DE AMSI:**
 
- A partir de esta versión los usuarios de AMsi podrán interactuar con el aplicativo desde el móvil o tableta sin perder ninguna funcionalidad del sistema.



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen1.png)

- Se realizan mejoras y validaciones en el modulo de administración para evitar errores en el registro de nuevos usuarios, a partir de esta versión la única ruta para adicionar usuarios es el botón Nuevo en el modulo de administración de AMsi. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen2.png)

** MODULO DE INFRAESTRUCTURA: **


**TERCEROS**

-﻿ Se revisan las validaciones para la tabla de terceros, permitiendo la actualización fluida de los cambios en terceros

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen3.png)

**CONTRATOS**

-	Se establecen 2 tipos de contratos: 
1.	Se recibe el servicio: Un tercero externo presta el servicio como contratista y la compañía recibe el servicio como contratante. Los costos asociados al contrato son la mano de Obra de externa, otros conceptos y materiales y repuestos asociados a las ordenes relacionadas a estos contratos.
2.	Se presta el servicio: Un tercero interno presta el servicio como contratista y una compañía externa recibe el servicio como contratante. Los costos asociados al contrato son la mano de Obra de interna, otros conceptos y materiales y repuestos asociados a las ordenes relacionadas a estos contratos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen4.png)








- En este proceso se crean los campos de Contratante y Contratista para tener un registro de quien ejerce la labor y a quien se presta el servicio. En caso de definir que se Recibe el servicio el sistema listara los terceros externos en la casilla de responsable; caso contrario listara los terceros internos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen5.png)





**TIPO DE MANTENIMIENTO:**

- Se bloquea la tabla de tipos de mantenimientos. Los usuarios no podrán agregar, modificar o eliminar ningún tipo de mantenimiento establecido en el sistema.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen6.png)


**MODULO DE ACTIVOS**

- En el Submódulo de contadores se presentan los activos con ordenamiento alfabético (código del activo), para facilitar su actualización:
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen7.png)

**MODULO DE KARDEX**

- Se crea el campo de Usuario en la inserción del documento de Kardex, el sistema registra el usuario que crea el documento y se podrá ver reflejado en el reporte KXP-MDRV Y KXP-MDR.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen8.png)

- Se desarrolla la función de validación para los valores unitarios en las entradas, el sistema no permite entradas con valores unitarios de repuestos en 0. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen9.png)

- Se parametriza la opción para Congelar los documentos de Kardex una vez realizado el proceso de Insertar Movimientos.
En la tabla de valores por defectos >> Kardex. Por compañía el sistema preguntara si: ¿Desea congelar el documento al momento de Insertar el movimiento?

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen10.png)

*En caso de marcar Si, al momento de Insertar los movimientos el sistema automáticamente congelara el documento de Kardex*

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen11.png)

**MODULO DE PROGRAMAS**

-	Se corrige el reporte PRP-PRYAMD para que muestre todos los criterios de programación.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen12.png)

**MODULO DE SOLICITUDES**

-	Al momento de crear una nueva solicitud Correctiva el sistema tomara la fecha y hora automáticamente y la asignara a la fecha y hora de Paro.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen13.png)

-	Se adiciona el campo Ubicación Física a las opciones de descarga en el módulo de Solicitudes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen14.png)

-	Se adicionan Dashboard con los estados de las Solicitudes, tanto de las acumuladas como de las solicitudes creadas en el mes actual.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen15.png)


El Dashboard permite saber cuántas solicitudes vienen de los meses anteriores y su Estado (Izquierda), como el numero de solicitudes y su estado en el mes actual (Derecha).


**MODULO DE ORDENES**

-	Se corrige la toma de tiempo improductivo automática para Ordenes con tipo de mantenimiento **Correctivo**. Esta se toma desde la fecha de paro hasta la fecha de fin de trabajos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen16.png)

-	Se elimina la validación para los campos obligatorios de Causa de Falla y Efecto de Falla al momento de cancelar una Orden.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen17.png)

-	En la Opción Agregar Responsable al gasto real de modificación masiva de Ordenes de Trabajo, se carga a su vez el tipo de asignación definida por el usuario.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen18.png)

-	Al agregar un responsable ejecutor con la opción Modificación masiva si este responsable es un interno se selecciona a la vez de forma automática como responsable por la Institución.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen19.png)

-	Se adiciona en Dashboard con los estados de las Ordenes, tanto de las acumuladas como de las solicitudes creadas en el mes actual.


El Dashboard permite saber cuántas Ordenes vienen de los meses anteriores 


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen20.png)

Dashboard permite saber cuántas Ordenes vienen del mes actual.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen21.png)


-	Se adiciona Dashboard Interactivo por Tipo de Mantenimientos, el cual permite saber el numero de Actividades por tipo de mantenimiento y nos da una grafica por su tipo de actividad.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen22.png)

*Nota: El usuario puede ir variando el tipo de mantenimiento según lo desee consultar.*


**MODULO DE HISTORIA**

-	Los consecutivos se ordenan por campo numérico, lo cual permite tener una mejor visualización de la información.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen23.png)

-	Se adiciona el filtro de Búsqueda por “Fecha de Envió a Historia”.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen24.png)


-	Se adiciona el campo de descarga por “Fecha de Envió a Historia”.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen25.png)


-	Se corrige el reporte HMR-CORECC para imprimir con el filtro de repuestos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen26.png)

-	Se corrige la presentación en los reportes de Pareto, para tener mas claridad sobre el total de las Horas Hombre



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen27.png)

-	Se adiciona el reporte HMR-RECC Resumen De Costo En Ordenes De Trabajo	
Agrupado Por Centro de Costo, el cual nos da un resumen de los costos de las Ordenes de trabajo agrupado por Centros de Costo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen28.png)


-	Se adiciona el reporte HMR-RETM Resumen De Costo En Ordenes De Trabajo	
Agrupado Por Tipo de Mantenimiento, el cual nos da un resumen de los costos de las Ordenes de trabajo agrupado por Tipo de Mantenimiento.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen29.png)


-	Se adiciona el reporte HMR-RETA	Resumen De Costo En Ordenes De Trabajo	 Agrupado Por Tipo de Mantenimiento y Tipo de Actividad, el cual nos da un resumen de los costos de las Ordenes de trabajo agrupado por Tipo de Mantenimiento y discriminado por Tipo de Actividad.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen30.png)


**MODULO DE ADMINISTRACION **

**VALORES POR DEFECTO**

-	Los registros por pagina se deben definir a partir de esta versión entre las opciones 60 0 100 registros por página. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen31.png)

-	El administrador de la Compañía debe definir si se toma o no el tiempo Improductivo para todas las Ordenes creadas desde AMovil.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen32.png)


-	El administrador de la Compañía debe seleccionar el Tipo de Mantenimiento, Tipo de Actividad y Tipo de Trabajo por defecto para las Solicitudes generadas desde AMsi. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen33.png)


-	Se adiciona la Opción de un nuevo Correo al agregar un Comentario a las Solicitudes u  Ordenes de trabajo, el administrador del sistema debe definir si quiere o no el envió de este correo al solicitante o al responsable. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen34.png)

*Nota: Este correo también se envía por defecto al correo relacionado con el usuario que ingresa el comentario.*

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen35.png)

*Nota: A partir de esta versión los correos se ejecutan con una función asincrónica detal manera que el sistema no espera la respuesta del servidor smtp para seguir la operación, mejorando así significativamente la experiencia del usuario*

**USUARIOS**

-	Esta versión permite a los Administradores de Compañía definir los permisos básicos para cada usuario en AMovil, definiendo según el perfil del técnico a cuáles módulos de AMovil tiene este acceso y cuales funciones puede realizar dentro del aplicativo.

Las Opciones Son:


Activos: 
-	Visualizar
-	Crear
-	Modificar
-	Realizar Inventario Físico
-	Actualizar Contadores


Almacén:
-	Visualizar
-	Crear
-	Modificar
-	Realizar Reservas


Solicitudes:
-	Visualizar
-	Crear
-	Modificar
-	Realizar Firma Masiva


Ordenes:
-	Visualizar
-	Crear
-	Modificar
-	Realizar Firma Masiva



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen36.png)


**MODULO DE CONFIGURACION  **

**Usar Autenticación Multifactor Por Correo Electrónico**

-	Los clientes pueden Solicitar a Winsoftware manejar el Login de usuarios con multifactor a través de correo electrónico.

Funciona de la siguiente forma:

1﻿. El usuario inicia sesión de modo normal 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen37.png)

2. Al momento de dar click se le envía un correo con un código Alfanumérico único aleatorio

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen38.png)

3. El usuario deberá validar el código para ingresar a la sesión.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.1/Imagen39.png)

**REGISTROS DEL SISTEMA**

-	Desde esta versión el sistema tiene una auditoria fuerte sobre el módulo de Kardex, la cual registra por base de datos todos los ingresos de nuevos documentos, modificaciones y los movimientos en el mismo, registrando la fecha en que se realizan y el usuario que los realiza.

-	Se crea una tabla de Login fallidos, la cual registrara los intentos de Login por parte de los usuarios que no lograron iniciar sesión, registrando el motivo, el usuario y la dirección ip (siempre que no esté bloqueada por proxy) desde donde se intentó el ingreso.
