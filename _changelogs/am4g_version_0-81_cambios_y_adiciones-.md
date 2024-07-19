---
layout: page
title: AM4G Versión 0.81 Cambios Y Adiciones.
---
**MODULO DE INFRAESTRUCTURA:**

- Se corrigen las tablas de Referencias. Permiten actualizar y eliminar registros.

![Procesar imagen](../../assets/images/uploads/Referencias.png)

- Se corrige la tabla de Almacén:  Permite Crear, Adicionar y eliminar Almacén.

![Procesar imagen](../../assets/images/uploads/Almacen.png)

Nota: No se pueden registrar dos Almacenes con el mismo nombre en la misma Compañía.


- Se corrige la validación en Ubicaciones Físicas: No se pueden registrar o actualizar dos Ubicaciones con el mismo código en la misma compañía.

![Procesar imagen](../../assets/images/uploads/UbiFIsi.png)


**MODULO DE ACTIVOS:**

- Se desarrolla el subgrupo Valor Nominal: Asociado a Características, el cual permite filtrar todos los activos que tenga el valor nominal filtrado en una o más de sus características.

![Procesar imagen](../../assets/images/uploads/ValorNominal.png)

- Se corrige Eliminar contadores, el sistema borra tanto el contador como su historial.

![Procesar imagen](../../assets/images/uploads/DeleteCont.png)

- Se adicionan 5 puntos más a Metrología: Para un total de 8 puntos

![Procesar imagen](../../assets/images/uploads/AddMetrol.png)

- Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de activos.

![Procesar imagen](../../assets/images/uploads/DashAct.png)

- Se corrige el reporte ACR-SINPM para que no repita información de los registros.

![Procesar imagen](../../assets/images/uploads/RepACRSINPM.png)

- Se mejora el diseño de exportación a Excel para el reporte ACE-CTC – Historial de Características Controlables.

![Procesar imagen](../../assets/images/uploads/RepACECTC.png)


**MODULO ALMACEN:**



- En el Submódulo Asociar Con Activos se igualan los indicadores de la grilla, con los indicadores vistos en el módulo de Activos.

![Procesar imagen](../../assets/images/uploads/AsociarActivos.png)


 

- Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Almacén.

![Procesar imagen](../../assets/images/uploads/DashAlmacen.png)


 



**MODULO PROGRAMAS:**


- Se valida automáticamente antes de analizar y generar los programas, que no existan relaciones fallidas entre tercero incluidos como solicitantes (ver imagen). EL sistema al encontrar esta relación corrige la selección de check en incluidos en TE; Evitando de esta manera conflictos en la generación de programas.


 
![Procesar imagen](../../assets/images/uploads/ProgError.png)




- Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Programas.


 
![Procesar imagen](../../assets/images/uploads/DashProg.png)



**MODULO SOLICITUDES:**



- Se corrige las relaciones con los permisos restrictivos (Las versiones anteriores tenían trocados los permisos restrictivos de Solicitudes Creadas por el Usuario y Solicitudes donde el usuario era Responsable)
En la nueva versión al usuario se le cargaran solo los registros que su restricción le permite.

![Procesar imagen](../../assets/images/uploads/PermitSS.png)


 
- Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

![Procesar imagen](../../assets/images/uploads/ExportSS.png)



 





**MODULO ORDENES:**



- El sistema valida que no existan registros en Gasto Real sin asociar a un responsable antes de cambiar el estado la Orden a cerrada ejecutada.

![Procesar imagen](../../assets/images/uploads/ValidOT.png)


 





- Los indicadores de Seguimiento y Cierre se igualan con los indicadores del modulo principal de Ordenes

![Procesar imagen](../../assets/images/uploads/TraceCloseInd.png) 

 




- Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

![Procesar imagen](../../assets/images/uploads/ExportOT.png)



 











- Se corrigen los comentarios en modificación masiva para que no dupliquen la información.

![Procesar imagen](../../assets/images/uploads/ModComU.png) 


 
![Procesar imagen](../../assets/images/uploads/ModComD.png)
 

- Se activa la función de Subgrupo en el Dashboard: El usuario podrá realizar el filtro directamente desde en la ventana de Dashboard sin tener que cargarlo en la ventana de Ordenes.  

![Procesar imagen](../../assets/images/uploads/DashOT.png)




- Se desarrolla el reporte OTD-G2XP  Detalle De Orden De Trabajo: El cual contiene una pagina adicional para comentarios y espacio adicional en los valores de Gastos.

![Procesar imagen](../../assets/images/uploads/RepOTD-G2XP.png)


 


- Se desarrolla el reporte OTD-P2XP  Detalle De Orden De Trabajo: El cual contiene una página adicional para comentarios y espacio adicional en los valores de Gastos.

![Procesar imagen](../../assets/images/uploads/RepOTD-P2XP.png)


 




**MODULO DE HISTORIA:**



- Se muestran a los usuarios los Gastos de Mano de Obra que pasaron a Historia sin estar asociados a un tercero.

![Procesar imagen](../../assets/images/uploads/GastRRespHI.png)


 

Nota: Se deben corregir y asociar a un responsable.


- Los campos de fechas en la exportación se llevan a un formato sin milisegundos para permitir a los usuarios interactuar con fórmulas del Excel de manera más ágil.

 
![Procesar imagen](../../assets/images/uploads/ExportHI.png)


 




- Se complementa el reporte HMD-HIHV -Hoja De Vida Ficha Técnica Resumida. Se incluye al activo
La misma información que contiene el reporte de ficha técnica en Activos.

![Procesar imagen](../../assets/images/uploads/RepHMDHIHV.png)


 


- Se desarrolla el reporte HMD-HIHVBIO - Hoja De Vida por Activo. El cual adiciona las características biomédicas del activo al reporte.

![Procesar imagen](../../assets/images/uploads/RepHMDHIHVBIO.png)


 

- Se modifica el reporte HMI-IND3- Porcentaje De Cumplimiento Preventivos. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes.

![Procesar imagen](../../assets/images/uploads/RepHMIIND3.png)

 

- Se modifica el reporte HMI-IND4 - Porcentaje De Cumplimiento Correctivos. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes y Solicitudes.

![Procesar imagen](../../assets/images/uploads/RepHMIIND4.png)

 

- Se modifica el reporte HMI-IND7 - Indicador De Oportunidad De Mantenimiento Correctivo. Este reporte responde a cualquier filtro y toma la información según el subgrupo creado en historia, para el módulo de Ordenes y Solicitudes.

![Procesar imagen](../../assets/images/uploads/RepHMIIND7.png)


 




**MODULO DE ADMINISTRACION:**



- Se corrige el proceso de eliminar Usuario, el cual no permitía la eliminación por la relación con la tabla de auditoría.

![Procesar imagen](../../assets/images/uploads/DeleteUser.png) 


 


- Se crea el módulo de Notificaciones en valores por defecto, con lo cual se permite al administrador del sistema seleccionar que correos desea que se envíen tanto al solicitante como al Responsable de las Ordenes y Solicitudes. 

![Procesar imagen](../../assets/images/uploads/Notificaciones.png)


 

