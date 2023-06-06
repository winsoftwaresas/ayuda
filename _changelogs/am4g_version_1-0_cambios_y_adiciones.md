---
layout: page
title: AM4G Versión 1.0 Cambios y Adiciones
feature_text: ""
---
**CAMBIO GLOBAL**


Se desarrolla indicador en las carpetas de multimedia para informar al usuario cuando estas contienen archivos. Las carpetas marcadas con el indicador naranja son las que contienen archivos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen1.png)


**MODULO DE AMSI:**

Se desarrolla función de búsqueda para usuarios en el módulo de administración del AMsi, el usuario administrador podrá realizar búsquedas rápidas por el Nro. Documento del usuario.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen2.png)

**MODULO DE INFRAESTRUCTURA:**


**MODULO DE OFICIOS:**

Se corrige la validación y ahora el sistema permite a los oficios con responsables internos
Llevar por defecto el valor Hora1 en 0

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen3.png)


**MODULO DE ACTIVOS:**


Se anexan los filtros de búsqueda por Fecha de Registro y Fecha de Ingreso al inventario.





![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen4.png)

**MODULO DE PROGRAMAS:**

Se desarrolla el reporte PMU-DPM Detallado de Programas De Mantenimiento (Materiales, Repuestos y Otros Conceptos)



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen5.png)

**MODULO DE SOLICITUDES:**

Se corrigen los colores en los tiempos de estado para que estos sean acordes con la grafica de indicadores.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen6.png)

Se desarrollan los links de enlace entre las Solicitudes cerradas con Orden y las Ordenes de trabajo que se encuentran en historia.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen7.png)

**MODULO DE ORDENES:**

Se anexa validación de Ubicación Física obligatoria para Ordenes de Trabajo

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen8.png)


Se anexa validación para no permitir el cierre de Ordenes sin definir el responsable ejecutor



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen9.png)

Se anexa validación para no permitir a los usuarios modificar el activo o tipo de mantenimiento en las Ordenes que vienen de Programas

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen10.png)

Se desarrolla el reporte OTR-LREP Resumen de Materiales y Repuestos.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen11.png)

**MODULO DE HISTORIA:**

Se realiza un cambio en el back para permitir una carga más rápida de la grilla de inicio de modulo y mejorar de esta manera la experiencia de usuario
 
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen12.png)

Se desarrolla el reporte HMR-EVAP Porcentaje de Evaluaciones por calificación.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen13.png)





**MODULO DE ADMINISTRACION: **

Se permite al usuario administrador del sistema AM4G definir si los técnicos de Amovil deben 
o no realizar la evaluación antes de la firma de recibido 


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen14.png)


**Notificaciones**

Documentación para enviar correos

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen15.png)

 - Se debe configurar junto con el personal de soporte de Winsoftware el correo origen desde donde se enviarán las notificaciones. 


Host smtp: Se debe definir cual es el servidor smtp que se usara.
Puerto: Se debe definir el puerto del servidor smtp para él envió de correos
Correo Electrónico: Se define cual será el usuario de correo para el envío de notificaciones.
Contraseña: Se debe escribir dependiendo del servidor de correo, si este usa autenticación de dos pasos se deben configurar el correo para permitir el acceso de aplicaciones o crear una contraseña para el acceso de aplicaciones.
Configuración TLS: EL servidor usa configuración TLS.
Configuración SMTP: El servidor usa autenticación por SMPT.
Configuración SSL: EL servidor obliga configuración SSL

Nota : Para el envío de los links de evaluación por correo se debe parametrizar el campo Servidor y Puerto para Evaluaciones de SS y OT de la tabla valores por defecto en la compañía 1 con la dirección del servidor, el puerto y la instancia 


-﻿ En la tabla valores por defecto de cada compañía se debe definir que correos se van a enviar

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen16.png)

**A continuación, veremos la estructura de cada correo**

-﻿ Correo al solicitante de Creación de la Solicitud. 



![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen17.png)

-﻿Correo al solicitante y/o responsable de Asignación de la Solicitud. 
Anexa la multimedia cargada a la solicitud 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen18.png)

-﻿ Correo al solicitante y/o responsable de Modificación de la Solicitud. Anexa la multimedia cargada a la solicitud 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen19.png)


-﻿Correo al solicitante de Cierre de la Solicitud.Anexa la multimedia ,el link de evaluación y los comentarios cargados a la solicitud  

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen20.png)


- Correo al responsable de Cierre de la Solicitud. Anexa la multimedia y los comentarios cargados a la solicitud

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen21.png)


-﻿ Correo al solicitante de Creación de la Orden. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen22.png)

-﻿ Correo al solicitante y/o responsable de Asignación de la Orden. 
Anexa la multimedia cargada a la Orden 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen23.png)

-﻿ Correo al solicitante y/o responsable de Modificación de la Orden. 
Anexa la multimedia cargada a la Orden. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen24.png)

-﻿ Correo al solicitante de Cierre de la Orden. Anexa la multimedia, link de evaluación y los comentarios cargados a la Orden  

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen25.png)

-﻿ Correo al responsable de Cierre de la Orden. Anexa la multimedia y los comentarios cargados a la Orden 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/Version1.0/Imagen26.png)










