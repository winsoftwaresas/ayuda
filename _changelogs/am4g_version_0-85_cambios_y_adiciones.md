---
layout: page
title: AM4G Versión 0.85 Cambios Y Adiciones.
---
**MODULO DE AMSI:**

Se verifica funcionalidad para que solo los Usuarios que crean la solicitud de AMsi puedan hacer comentarios sobre la misma. Los usuarios pueden ver todas las solicitudes de los centros de costo que tienen relacionados, pero solo pueden interactuar con las que ellos crearon.


![Procesar imagen](../../assets/images/Version85/imagen1.png)

Si el usuario no está habilitado no podrá realizar cambios

![Procesar imagen](../../assets/images/Version85/imagen2.png)

**MODULO DE PROGRAMAS:**

Se permite ingresar valores negativos al Valor de contador al Inicio del Periodo. Es necesario en el caso en que se deba cambiar el contador de un activo y ese contador está inicializado en 0.  Se pretende que no se alteren las proyecciones futuras y se logre la normalidad con el nuevo contador.

![Procesar imagen](../../assets/images/Version85/imagen3.png)

**MODULO DE SOLICITUDES DE SERVICIO:**

Se valida que el Activo/Equipo este en estado Activo antes de cambiar el estado de la SS a Cerrado con OT.  El sistema no permite crear Ordenes si el Activo/Equipo esta Inactivo.

![Procesar imagen](../../assets/images/Version85/imagen4.png)

**MODULO DE PAROS:**

Se desarrolla la función de exportación de datos de la grilla.

![Procesar imagen](../../assets/images/Version85/imagen5.png)

**MODULO DE HISTORIA:**

**ENVIAR A HISTORIA ARCHIVADA**

Se crea el submódulo Enviar a Historia Archivada.
Mediante esta nueva función se puede enviar a Historia Archivada un conjunto de Ordenes Históricas que se han seleccionado previamente mediante el subgrupo de Historia.  De esta forma se pueden seleccionar Ordenes viejas de años anteriores que ya no se necesitan en línea todo el tiempo, o también Ordenes de Activos que ya no existen.
Este proceso permite mejorar sustancialmente el rendimiento del módulo de Historia y de la Base de Datos en general.  
El proceso incluye la depuración de la data: resuelve todas las relaciones y los links de Integridad referencial.  La tabla resultante, de Historia archivada, es una tabla plana, a manera de datos sin relaciones y con información quemada, que puede ser consultada con gran agilidad y facilidad, puesto que se conserva para ella el mismo subgrupo que hay en Historia.
Otra ventaja adicional es que al desaparecer las relaciones con los Terceros, con las UF y CC, con los Activos, con los Repuestos, con el TT, TM y TA y demás, empieza a ser posible borrar de la BD aquella información no requerida o que fue remplazada o modificada hace tiempo y que insistentemente se ha deseado eliminar.  Además, se aclara que esta información que se elimina de la BD, NO se elimina de la Historia Archivada.  Allí permanece y allí se consulta normalmente.
Se debe tener en cuenta que, por seguridad, se ha determinado que el subgrupo a ser enviado a Historia Archivada debe ser igual o menor a 5.000 registros.
Cuando se requiera que este proceso elimine de Historia un número mayor de Ordenes Históricas, por ejemplo 100.000 o 500.000 de ellas, WIN Software ofrece un Script para realizarlo, en medio de un procedimiento de alta seguridad que tiene como primer paso el tomar y guardar un respaldo de la BD.

![Procesar imagen](../../assets/images/Version85/imagen6.png)

Para enviar a Historia Archivada el usuario debe realizar un subgrupo con los registros que desea eliminar de Historia, enviándolos a Historia Archivada.

![Procesar imagen](../../assets/images/Version85/imagen7.png)

Después de realizar el filtro el usuario selecciona si desea enviar a Historia Archivada: (1) Toda la información histórica o (2) la información que se encuentra en el visor.
El proceso de envío a Historia Archivada puede tomar entre 2 minutos y 5 Horas dependiendo de la cantidad de registros seleccionados.  Se recomienda tomar una copia de la base de datos antes de realizar este proceso, ya que después de ser enviada a Historia Archivada los registros no pueden volver a Historia.

![Procesar imagen](../../assets/images/Version85/imagen8.png)

Al finalizar el proceso el sistema alerta con la cantidad de registros enviados.

![Procesar imagen](../../assets/images/Version85/imagen9.png)


**VISTA HISTORIA ARCHIVADA**

![Procesar imagen](../../assets/images/Version85/imagen10.png)

El submódulo mostrara todos los registros previamente enviados. Estos estarán solo para consulta y ya no se podrán realizar modificaciones sobre los mismos. La grilla mantiene tanto los Indicadores como el formato y data de la grilla principal de Historia.

![Procesar imagen](../../assets/images/Version85/imagen11.png)

El usuario puede observar el detalle del registro

![Procesar imagen](../../assets/images/Version85/imagen12.png)

El usuario puede usar los mismos filtros que en Historia.

![Procesar imagen](../../assets/images/Version85/imagen13.png)

El usuario puede exportar los registros

![Procesar imagen](../../assets/images/Version85/imagen14.png)

El usuario puede imprimir reportes sobre la Historia Archivada.

![Procesar imagen](../../assets/images/Version85/imagen15.png)
