---
title: Contratos
subtitle: Se explica la tabla de contratos, alcance y funcionalidad.
tags: [setup]
author: win
order: '02_09'
---

En esta tabla es posible registrar los Contratos sobre servicios a cargo de contratistas externos. No se trata de un módulo de administración de contratos sino de una facilidad simplista que hace funciones de control y seguimiento generales sobre ellos.

Al tiempo, se usa para facilitar la selección y búsqueda de Órdenes de Trabajo e Historia de Mantenimiento, en función de un contratista y/o de un Contrato particular.

Aunque el objetivo general es el registro de los contratos anuales, también es posible registrar, en aras de centralización de la información, los contratos de corta vigencia que respaldan la ejecución de una o varias Órdenes de Trabajo por parte de un contratista.

También es posible realizar el seguimiento de la vigencia de los Contratos, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado de vigencia acuerdo a la cantidad de días o meses. El significado del color de cada pelota, se puede ver en el ícono de Indicador <span class="mdi mdi-message-alert"></span>, ubicado en la parte superior derecha de la ventana
visor.

![Procesar imagen](../../assets/images/cap02/chp02_img59.png)
_**Imagen 42.** Ventana Visor Contratos_

La renovación de contratos se realiza utilizando la numeración del contrato anterior, realizando  una copia y adicionando un consecutivo adicional que relacione esta renovación con su contrato original.

**Ejemplo:** Código 00008 (contrato original), Código 00008-1 (renovación del contrato)

![Procesar Imagen ](../../assets/images/cap02/chp02_img60.png)
_**Imagen 43.** Ventana Detalle del Contrato_

En la gráfica anterior, Ventana Detalle del Contrato. Se encuentra la información relevante al Contrato seleccionado en el Visor:


#### Identificación

**Código CN:** En este campo que tiene una capacidad de quince caracteres se registra el número del Contrato. Es posible cambiar el código del contrato sin afectar la asociación existente entre el contrato modificado y otros módulos, y sin obtener mensajes de error por este intento de modificación.

**Descripción:** En este campo se escribe una corta descripción del Contrato que se está definiendo.

<a class="btn cl-black"><span class="mdi mdi-checkbox-blank-outline"> Combustible </span></a>: De marcar esta opción el Contrato se destina al Consumo de Combustibles, esto permite llevar el Control del Gasto del Contrato según las relaciones realizadas en el módulo de Consumo de <a class="btn cl-white bg-blue px-6"> Combustibles </a>.

**Objeto:** En este campo se establece la finalidad del Contrato acordado por las partes.

**Objeto Resumen:** En este campo se escribe un resumen del Objeto del Contrato definido en el campo anterior.

**Fecha Inicio Vigencia:** En este campo se define la fecha en la que se da inicio a la vigencia del Contrato.

**Fecha Fin Vigencia:** En este campo se define la fecha en la que está prevista la terminación de la vigencia del Contrato.


**Valor Contrato Año:** En este campo se indica el valor total anual del Contrato. Se habla de Valor Contrato Año refiriéndose a aquellos Contratos que se realizan anualmente, por ejemplo, el mantenimiento anual de los aires acondicionados. En otros  casos se refiere al costo total del contrato durante su vigencia.


**Tipo de Contrato:** Se establecen dos tipos:


- **Se recibe el servicio:** Un tercero externo (RX) presta el servicio como contratista y la compañía recibe el servicio como contratante. Los costos asociados al contrato son la mano de Obra de externa, Materiales/Repuestos y Otros Conceptos de Costo asociados a las Órdenesde Trabajo relacionadas a estos contratos.

- **Se presta el servicio:** Un tercero interno (RI) presta el servicio como contratista y una compañía externa recibe el servicio como contratante. Los costos asociados al contrato son la mano de Obra de Interna, Materiales/Repuestos y Otros Conceptos de Costo asociados a las Órdenes de Trabajo relacionadas a estos contratos.

**Contratante:** Es el nombre de la organización que contrata el servicio. 

**Contratista:** Es el nombre del tercero que presta el servicio.

**Responsable:** Según el tipo de contrato aqui se registra el nombre propio o la razón social de la persona natural o jurídica que es Responsable, como contratista, del manejo y ejecución del contrato. Los contratistas que se registran en esta tabla deben haber sido creados previamente  en la tabla de Terceros, y su tipo debe ser Responsable Externo / Contratista (RX) ó RI (Responsable Interno según el tipo de contrato).


**Centro de Costo:** Para registrar el código correspondiente al Cliente externo al que se le presta servicio a través del Contrato. Este campo no tiene ninguna incidencia en otros casos y aplica principalmente cuando es la organización la que presta el servicio.



**Estado:** Se selecciona el estado del contrato, puede encontrarse Activo o Inactivo.

**Gasto Real total ejecutado:** Como su nombre lo indica, este campo muestra el valor total real gastado hasta la fecha de dicho contrato.

**Gasto Real ejecutado en el año actual:** Este campo muestra el valor total real gastado en el periodo del año en curso de dicho contrato.

**Presupuesto Pendiente por ejecutar:** Muestra cuanto valor le resta a dicho contrato para terminar.

**Gasto Real ejecutado en OT pendientes:** En este campo se muestra el valor total del gasto real en las OTs que aún se encuentran en el módulo de <a class="btn cl-white bg-blue px-6"> Órdenes </a>.

###  Multimedia: Contratos

Esta nueva funcionalidad permite asociar el Contrato de forma digital.

![Procesar Imagen](../../assets/images/cap02/chp02_img61.png)
_**Imagen 44.** Ventana Detalle del Contrato (Multimedia)_


A través de la ventana Multimedia se adjunta información adicional al Contrato en cada una de sus carpetas asignadas. Esta opción permite asociar al Contrato, uno o varios documentos, con el  objetivo de facilitar el trabajo a realizar, o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** el Contrato en forma digital, especificaciones  detalladas, entre otros; con el fin de hacer  seguimiento, control y tener acceso directo a la información.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al Contrato, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Contrato como el Código y la Descripición.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al Contrato. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al Contrato.  Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Contrato. Ejemplo: Videos en formato wmv, mp4, entre otros.

Para adicionar un documento, imagen o video, se debe dar acceder a la carpeta deseada por medio de un doble clic, luego accionar el botón <span class="mdi mdi-cloud-upload icon white"></span> que abre el explorador de archivos. Seleccione el archivo y accione nuevamente en 
<a class="btn cl-w bg-gray bd-gray bg-white px-6"> Abrir </a>, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap02/chp02_img62.png)
_**Imagen 45.** Contrato Porción Multimedia_

Luego,  se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón <a class="btn white">Subir archivo</a>.

![Procesar imagen](../../assets/images/cap02/chp02_img63.png)
_**Imagen 46.** Adjuntar un Archivo_

Los archivos que se van adicionando van quedando guardados uno debajo del otro. Solo los formatos de tipo imagen tienen previsualización dando clic sobre el registro:

![Procesar imagen](../../assets/images/cap02/chp02_img64.png)
_**Imagen 47.** Archivo adjunto_

Para desasociar un documento, o una imagen o un video, al Contrato se da clic al ícono <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. El sistema alerta al usuario antes de ejcutar tal acción y para continuar accionar el botón  <a class="btn cl-black bg-gray bd-gray px-6"> ACEPTAR </a>.

![Procesar imagen](../../assets/images/cap02/chp02_img65.png)
_**Imagen 48.** Eliminar un archivo_

Para descargar un archivo adjunto al Contrato, se debe dar clic en el icono  <span class="mdi mdi-cloud-download icon white"></span> que se encuentra al lado derecho del archivo que se quiere descargar, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap02/chp02_img66.png)
_**Imagen 49.** Descargar archivo_