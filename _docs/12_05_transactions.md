---
title: Transacciones
subtitle: Esta sección explica como se usa la transacción eliminar masivamente historia de mantenimiento archivada
tags: [setup]
author: win
order: 12_05
---

### Eliminar Masivamente HA


Eliminar masivamente se ejecuta cuando se tiene la certeza de que un grupo de datos en HA ya no es requerido, porque los Activos referidos ya no existen o porque su historia es irrelevante.


Para ir a la transacción sobreponer el cursor sobre el módulo de  <a class="btn blue">Historia Archivada</a> y dar clic en la opción **Eliminar Masivamente**, como se indica a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img19.png)
_**Imagen 20.** Historia Archivada - Ir a Eliminar Masivamente_

Para eliminar un conjunto de registros se debe primero realizar un Subgrupo no mayor de 5000 mil registros (este proceso puede tardar hasta 5 horas dependiendo del subgrupo), de no hacerlo el sistema muestra un mensaje de advertencia:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img20.png)
_**Imagen 21.** Historia - Alerta Eliminar Masivamente_

Una vez se tenga el conjunto de registros preseleccionados con el Subgrupo proceder con la transacción así:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img21.png)
_**Imagen 22.** Historia Archivada - Alerta Eliminar Masivamente_

Se puede eliminar un registro de OT, SS, Paro o un conjunto de registros preseleccionados: 

**Todas las HI del visor:** Esta opción eliminar todos los registros históricos de la Ventana Visor, es decir, los registros preseleccionados a través del Subgrupo actual.

**La HI seleccionada:** Esta opción permite eliminar el registro que está seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

Para continuar dar clic en el botón <a class="btn blue">eliminar historia</a> ubicado debajo de las opciones anteriores, el sistema muestra un mensaje alerta:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img22.png)
_**Imagen 23.** Historia Archivada - Mensaje Advertencia Eliminar Masivamente_

Para finalizar el proceso dar clic en <a class="btn blue">aceptar</a>, y el sistema confirma  a través de un mensaje aviso: 

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap13/chp13_img23.png)
_**Imagen 24.** Historia - Aviso Satisfactorio Eliminar Masivamente_