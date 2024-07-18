---
layout: page
title: AM4G Versión 1.0A Cambios y Adiciones
---
**MODULO DE AMSI:**



- Se desarrolla la funcionalidad para relacionar los usuarios por compañías. Al marcar no en la relación de usuarios por Centros de Costo el sistema asumirá que se manejaran los usuarios por compañías. Esto implica que las relaciones de acceso de los usuarios que les permite ver los activos cambian y se gestiona el acceso a los activos de las compañías a las que tienen acceso. 



![Procesar imagen](../assets/images/Version1.0A/Imagen1.png)

- El administrador del sistema ahora definirá a que compañías accede cada usuario. 

![Procesar imagen](../assets/images/Version1.0A/Imagen2.png)


- El usuario elige la compañía en la que desea poner la solicitud, según sus relaciones, el activo y copiara la descripción. En esta funcionalidad de AMsi el usuario tiene activo el atajo de *Tab* para seleccionar el activo (Siempre que tenga relación con la compañía del activo).  

![Procesar imagen](../assets/images/Version1.0A/Imagen3.png)

**MODULO DE KARDEX:**

Se realiza la validación para los tipos de documento según el tipo de movimiento. De la siguiente manera:
-	Movimiento de Entrada: Factura, Remisión y devolución de Almacén.
-	Movimiento de Salida: Salida de Almacén 
-	Movimiento de Ajuste: Salida de Almacén y Devolución de Almacén 

![Procesar imagen](../assets/images/Version1.0A/Imagen4.png)

**MODULO DE HISTORIA:**

- Se desarrollan cambios de indicadores sobre los reportes:
 
HMI-IND Datos Básicos Del Periodo Para Índices De Gestión	
HMI-IND1	Indicadores De Nivel De Cumplimiento	
HMI-IND2	Indicadores De Tiempo

Los nuevos reportes de índices son precisos para cualquier periodo de tiempo seleccionado en los filtros, al igual que las relaciones con activos, centros de costos, ubicación físicas, etc.. Seleccionadas y realizan búsquedas según se indica en su enunciado en los diferentes módulos del sistema (SS: Solicitudes, OT: Ordenes, PA: Paros, HM: Historia).

HMI-IND Datos Básicos Del Periodo Para Índices De Gestión	

![Procesar imagen](../assets/images/Version1.0A/Imagen5.png)

HMI-IND1 Indicadores De Nivel De Cumplimiento
![Procesar imagen](../assets/images/Version1.0A/Imagen6.png)


HMI-IND2 Indicadores De Tiempo
![Procesar imagen](../assets/images/Version1.0A/Imagen7.png)


**MODULO DE INTERFASE:**

Se desarrollan nuevas funciones en las 2 interfases de carga de archivos planos, ahora los usuarios podrán subir los datos directamente en formato .xls facilitando la interacción del usuario con el sistema.

![Procesar imagen](../assets/images/Version1.0A/Imagen8.png)8