---
layout: page
title: VERSION 81 CAMBIOS Y ADICIONES
feature_image: ""
feature_text: "\n"
image: ""
---
MODULO DE INFRAESTRUCTURA:

1. Se corrigen las tablas de Referencias. Permiten actualizar y eliminar registros.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/Referencias.png)

2. Se corrige la tabla de Almacén:  Permite Crear, Adicionar y eliminar Almacén.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/Almacen.png)

Nota: No se pueden registrar dos Almacenes con el mismo nombre en la misma Compañía.


3. Se corrige la validación en Ubicaciones Físicas: No se pueden registrar o actualizar dos Ubicaciones con el mismo código en la misma compañía.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/UbiFIsi.png)


MODULO DE ACTIVOS:

1. Se desarrolla el subgrupo Valor Nominal: Asociado a Características, el cual permite filtrar todos los activos que tenga el valor nominal filtrado en una o más de sus características.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ValorNominal.png)

2. Se corrige Eliminar contadores, el sistema borra tanto el contador como su historial.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DeleteCont.png)

3. Se adicionan 5 puntos más a Metrología: Para un total de 8 puntos

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/AddMetrol.png)

4. Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de activos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DashAct.png)

5. Se corrige el reporte ACR-SINPM para que no repita información de los registros.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepACRSINPM.png)

6. Se mejora el diseño de exportación a Excel para el reporte ACE-CTC – Historial de Características Controlables.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepACECTC.png)


MODULO ALMACEN:

1. En el Submódulo Asociar Con Activos se igualan los indicadores de la grilla, con los indicadores vistos en el módulo de Activos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/AsociarActivos.png)


 

2. Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Almacén.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DashAlmacen.png)


 



MODULO PROGRAMAS:

1. Se valida automáticamente antes de analizar y generar los programas, que no existan relaciones fallidas entre tercero incluidos como solicitantes (ver imagen). EL sistema al encontrar esta relación corrige la selección de check en incluidos en TE; Evitando de esta manera conflictos en la generación de programas.


 
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ProgError.png)




2. Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Programas.


 
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DashProg.png)



MODULO SOLICITUDES:



1.Se corrige las relaciones con los permisos restrictivos (Las versiones anteriores tenían trocados los permisos restrictivos de Solicitudes Creadas por el Usuario y Solicitudes donde el usuario era Responsable)
En la nueva versión al usuario se le cargaran solo los registros que su restricción le permite.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/PermitSS.png)


 
2. Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ExportSS.png)



 





MODULO ORDENES:



1. El sistema valida que no existan registros en Gasto Real sin asociar a un responsable antes de cambiar el estado la Orden a cerrada ejecutada.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ValidOT.png)


 





2. Los indicadores de Seguimiento y Cierre se igualan con los indicadores del modulo principal de Ordenes

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/TraceCloseInd.png) 

 




3. Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ExportOT.png)



 











4. Se corrigen los comentarios en modificación masiva para que no dupliquen la información.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ModComU.png) 


 
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/ModComD.png)
 

5. Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Ordenes.  

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DashOT.png)




6. Se desarrolla el reporte OTD-G2XP	Detalle De Orden De Trabajo: El cual contiene una pagina adicional para comentarios y espacio adicional en los valores de Gastos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepOTD-G2XP.png)


 


7. Se desarrolla el reporte OTD-P2XP	Detalle De Orden De Trabajo: El cual contiene una página adicional para comentarios y espacio adicional en los valores de Gastos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepOTD-P2XP.png)


 




MODULO DE HISTORIA:



1. Se muestran a los usuarios los Gastos de Mano de Obra que pasaron a Historia sin estar asociados a un tercero.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/GastRRespHI.png)


 

Nota: Se deben corregir y asociar a un responsable.

Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

 



2. Se complementa el reporte HMD-HIHV - Hoja De Vida Activo En Historia. Se incluye al activo
La misma información que contiene el reporte de ficha técnica en Activos.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepHMDHIHV.png)


 


3. Se desarrolla el reporte HMD-HIHVBIO - Hoja De Vida Activo de Biomédica En Historia. EL cual adiciona las características biomédicas del activo al reporte.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepHMDHIHVBIO.png)


 

4. Se modifica el reporte HMI-IND3- Porcentaje De Cumplimiento Preventivos. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepHMIIND3.png)

 

5. Se modifica el reporte HMI-IND4 - Porcentaje De Cumplimiento Correctivos. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes y Solicitudes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepHMIIND4.png)

 

6. Se modifica el reporte HMI-IND7 - Indicador De Oportunidad De Mantenimiento Correctivo. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes y Solicitudes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/RepHMIIND7.png)


 




MODULO DE ADMINISTRACION:



1. Se corrige el proceso de eliminar Usuario, el cual no permitía la eliminación por la relación con la tabla de auditoría.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/DeleteUser.png) 


 


2. Se crea el módulo de Notificaciones en valores por defecto, con lo cual se permite al administrador del sistema seleccionar que correos desea que se envíen tanto al solicitante como al Responsable de las Ordenes y Solicitudes. 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/uploads/Notificaciones.png)


 

