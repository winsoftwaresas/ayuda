---
title: Vistas Parciales
subtitle: Se explican las porciones de la ventana detalle que compone un material/repuesto.
tags:
  - setup
author: win
order: '04_05'
date: 2022-11-10T20:17:34.887Z
---


## Ventana Detalle

![Procesar imagen](../../assets/images/cap04/chp04_img04.png)
_**Imagen 4.** Ventana Detalle_ 

En la gráfica anterior, ventana Detalle de Materiales y Repuestos se accede dando un clic sobre el registro. En esta ventana se aprecian las porciones, pestañas ó vistas parciales en donde se encuentra toda la información relevante sobre el Repuesto seleccionado en el Visor. 

Estas vistas parciales permiten complementar la información que se despliega normalmente sobre un Repuesto (**Información General**) con otro conjunto de información en la cual su edición depende de los permisos asociados al usuario. Las disponibles son: Ficha técnica, Características Técnicas y Multimedia. 

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

###  Vistas Parciales/Pestañas

#### Información General

**Repuesto:** En este campo se registra el código del material/repuesto, de acuerdo a la política de codificación organizacional que se haya definido.

**Descripción:** En este campo se registra la descripción del material/repuesto en lenguaje natural.

**No Inv/Inv:** Define el tipo de material/repuesto respecto a su connotación de Inventariado o No Inventariado. Un ítem es inventariado si está codificado en el Almacén y sobre él existen políticas de inventarios y reaprovisionamiento. Es No inventariado si su uso es de solo una vez y de él no se van a realizar más compras. También puede ser No inventariado, en un almacén  particular, cuando se trata de un ítem   cuya  existencia, contablemente ya fue consumida, pero se almacena para ser consumido, por demanda, en un lapso corto.

**Descripción larga:** Este botón permite realizar una descripción larga del material/repuesto. Para ello se abre una nueva ventana en la que se adicionan más de 200 caracteres, como se muestra a continuación:


![Procesar imagen](../../assets/images/cap04/chp04_img05.png)
_**Imagen 5.** Información General_

**Clase:** Es un campo que permite clasificar o agrupar los artículos del Almacén por un criterio particular para la Organización.

**Familia:** Es un campo que permite definir la familia a la cual pertenece el artículos del Almacén que se está definiendo.

**Grupo:** Es un campo que permite definir el grupo al cual pertenece el artículos del Almacén que se está definiendo.

**Parte Número:** Es un campo que permite definir la parte número del artículo del Almacén que se está definiendo.

**Casilla:** Es el campo en el que se establece la ubicación física del material/repuesto dentro del Almacén. Este campo permite cualquier nomenclatura de organización. Ejemplo. E21B (7,12) significaría Estante 21, lado B, posición matricial fila 7 columna 12.

**Existencia Inventario:** Registra la cantidad en  existencia en el Almacén del  material/repuesto seleccionado. Este campo puede ser actualizado manualmente o en forma  automática a través del módulo de <a class="btn cl-white bg-blue px-6"> Kárdex </a>. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él. También, al lado de este campo, el sistema muestra el Valor Total del inventario del Repuesto, que corresponde al producto de la  “Existencia Inventario” por el “Costo Unitario Vigente”.

**Cantidad Reservada:** Informa la cantidad reservada del material/repuesto seleccionado. Una reserva es una cantidad de la existencia actual del artículo, que se ha  comprometido para ser usada, por una  persona o almacenista, para una OT en particular y la separa a través de la transacción **Reservas**. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Cantidad  Disponible:** Es la diferencia entre   “Existencia Inventario”  menos  la “Cantidad Reservada”. Es la Cantidad Disponible para consumos de Mantenimiento. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Costo Unitario Vigente:** Este campo refleja siempre el Costo Unitario del artículo seleccionado. Es  un valor  que  puede haber  sido  actualizado manualmente por  alguien que  tenía los permisos para hacerlo. Puede también haber sido actualizado  automáticamente por el sistema según  el  sistema de  costeo  definido para  el  almacén,  a través del  Kárdex  de Repuestos.

**FF Costeo:** Es la fecha en la que se hizo el último recálculo del costo unitario para el artículo seleccionado. Normalmente es la fecha en la que éste entró al almacén por última vez por medio de un concepto valorizado.

**Costo Última Compra:** Este campo registra la última compra del material/repuesto seleccionado del Almacén. Automatizando los movimientos de la compra través del módulo <a class="btn cl-white bg-blue px-6"> Kárdex </a>.


**FF Última Compra:** Es la fecha de la última compra del artículo seleccionado del Almacén. Se actualiza automáticamente cuando tal movimiento de compra se efectuó a través del módulo <a class="btn cl-white bg-blue px-6"> Kárdex </a>.

**FF Último Uso:** Es la fecha de la última salida del artículo seleccionado del Almacén. Se actualiza automáticamente cuando tal movimiento de salida se  efectuó a través del Kárdex de Almacén. En otro caso el sistema no actualiza este campo.

**Nivel de Existencia:** En este campo se define la cantidad o el nivel en existencia que siempre debe haber de ese artículo en el almacén seleccionado.

**Nivel Mínimo / Punto de Pedido:** Este campo registra  una  cantidad  que  tiene  un significado dependiendo del modelo de inventarios que maneje el Repuesto. En el  caso de que se trate de un artículo controlado bajo un modelo simple de Inventarios, o de Harris, este campo significa el punto en el nivel de Inventario en el que se debe iniciar una gestión que exige una cantidad mínima en existencia  permanentemente,  este campo denota esa cantidad mínima. 

>**Nota:** En ningún caso este parámetro es recalculado por el sistema o genera alarmas.

**Nivel Máximo:** En este campo se define la cantidad o nivel máximo en existencia del artículo en el almacén seleccionado dependiendo del modelo simple de Inventario.

**Lote Óptimo a Comprar:** En este campo se define el parámetro de inventarios sobre la cantidad adecuada de compra, en cada proceso de re-abastecimiento. Este parámetro no es recalculado por el sistema.

**Período  de  Reaprovisionamiento:**  De  acuerdo  a  estadísticas  de  consumo  sobre  el artículo seleccionado, normalmente se establece en este campo el parámetro  indicativo del período normal de Reaprovisionamiento, acorde con el Lote Óptimo de  Compra y con la estadística de consumo. Este parámetro no es recalculado por el sistema. Al lado de este campo, el sistema muestra la palabra  **“días”** para indicar la unidad de medida del período de reaprovisionamiento.

**Unidad de Empaque:**  Es  la  unidad  de  compra, de  adquisición o  de  despacho por  parte  del proveedor. Ej. Caneca de 55 galones, o Caja por 24 unidades.

**Unidad de Consumo:** Es la unidad mediante la cual se le solicita al Almacén o mediante la cual el Almacén despacha un determinado artículo.  Ej. Galones o Unidades.

**Precio Venta 1, Precio Venta 2, Precio Venta 3:** Estos campos son utilizados de tipo información  para almacenar los precios actuales, anteriores y promedio del repuesto, estos campos son parametrizables en en el modúlo <a class="btn blue">Administración</a> en la etiqueta **Almacén**, en la opción  **“Manejo de Precios de Venta”** y elegir la opción **“SI”**.



#### Ficha Técnica

En la pestaña de Ficha Técnica, se encuentra toda la información relevante del artículo, material/repuesto seleccionado en el Visor.

![Procesar imagen](../../assets/images/cap04/chp04_img06.png)
_**Imagen 6.** Vistas Parciales - Ficha Técnica_

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Material/Repuesto al cual se le está definiendo la información de la ficha técnica.

**Estado:** En este campo de opciones seleccionables es posible registrar el estado  del Material/Repuesto: Activo, I-Vencido, I-EOI (Excedente Obsoleto o Inservible), I-Otro.

**TT por Uso:** En este campo se listan los tipos de trabajo para seleccionar el tipo de trabajo que clasifique el Material/Repuesto.

**A, B, C, O:** Informa si el  material/repuesto se clasifica con el  método de Costos basado en actividades (ABC).  Este  campo Clasificación se  utiliza a futuro  para  el  manejo  de inventario rotativo. Su definición por defecto es O (significa Otro).

**Código de Barras Interno:** Si existe un código de barras interno dentro la organización para la codificación de Materiales/Repuestos, se debe de ingresar en este campo.

**Código de Barras del Proveedor:** Se  refiere  al  Código de  Barras  del  Proveedor  que  se encuentra asociado al Material/Repuesto.


**Proveedor 1, Proveedor 2, Proveedor 3:** En estos campos se pueden relacionar hasta 3 proveedores del Material/Repuesto seleccionado.


**Referencia Proveedor 1, Referencia Proveedor 2,   Referencia Proveedor 3:** En estos campos se  registran las  referencias  con  las  que  cada  Proveedor  correspondiente  suministra  el  Material/Repuesto seleccionado.

**Comentario:** Aquí se ingresan los comentarios sobre un Repuesto o se especifica información adicional al Material/Repuesto. Este campo cuenta con un espacio de 220 caracteres.

#### Características Técnicas

Esta opción permite definir para un determinado artículo, material/repuesto las características técnicas que lo definen. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo las Características Técnicas que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de las características.

![Procesar imagen](../../assets/images/cap04/chp04_img07.png)
_**Imagen 7.** Vistas Parciales - Características Técnicas_

En la gráfica anterior, Vista Parcial de Características, se aprecian las dos columnas  de componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana de información adicional:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del material/repuesto al cual se le está definiendo la información de las características técnicas.

**Car. Técnica:** En este campo se lista las características técnicas definidas en la tabla de Infraestructura, para seleccionar aquellas que son  propias del material/repuesto activo.

**Valor:** En  este campo se define  el  valor  de  la  característica correspondiente en la primera columna, en el cual es posible escribir su respectiva unidad de medida. 

Para ingresar una caracteristica técnica al material/repuesto dar clic en el botón <a class="btn blue">Adicionar Car. Técnica</a>

A continuación se muestra el formulario para ingresar la Característica:

![Procesar imagen](../../assets/images/cap04/chp04_img08.png)
_**Imagen 8.** -Ingresar Característica - Formulario_

La Característica Técnica se debe de seleccionar del listado que corresponde a su respectiva tabla de Infraestructura - Características, una vez ingresado el valor se debe accionar el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>. Automáticamente el sistema la registra en la tabla de **Car. Técnica**.

![Procesar imagen](../../assets/images/cap04/chp04_img09.png)
_**Imagen 9.** Adicionar Característica_

Para eliminar una registro se debe dar clic en el icono <span class="mdi mdi-delete"></span>. El sistema muestra un mensaje alerta para confirmar la transacción:

![Procesar imagen](../../assets/images/cap04/chp04_img10.png)
_**Imagen 10.** Adicionar Característica_

>**Nota:** Para asentar los cambios de alguna modificación, añadir o eliminar una característica se debe dar clic en el botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>.


#### Multimedia

![Procesar imagen](../../assets/images/cap04/chp04_img11.png)
_**Imagen 11.** Almacén - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al material/repuesto en cada una de sus carpetas asignadas. Esta opción permite asociar al Repuesto uno o varios documentos, con el objetivo de facilitar o guiar el trabajo a realizar o detallarlo minuciosamente. AM acepta documentos de extensiones .DOC, XLS, PDF, JPG es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes. 

Los documentos anexos pueden contener ayudas necesarias en la ejecución de actividades e instalación del respectivo Repuesto, usos planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, procedimientos, listas de verificación, protocolos de prueba u otra información estándar para su utilización.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información del Repuesto, se deberán registrar así:

**Que Hacer:** Es la información general que aparece en cada pestaña con los campos bloqueados para que el usuario visualice la información básica del Repuesto.

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada al Repuesto. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas al Repuesto. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Repuesto. Ejemplo: Videos en formato wmv y mp4.


Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img12.png)
_**Imagen 12.** Almacén - Abrir Explorador Archivos_

A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn cl-w bg-white bd-black bg-white px-6"> Abrir </a>:

![Procesar imagen](../../assets/images/cap04/chp04_img13.png)
_**Imagen 13.** Almacén  - Seleccionar Archivos_

De manera adicional u opcional se puede escribir un nombre en el siguiente campo para enfatizar de lo que trata el archivo:

![Procesar imagen](../../assets/images/cap04/chp04_img14.png)
_**Imagen 14.** Almacén  - Nombrar Archivo_

Para finalizar se debe de dar un clic en el el botón <a class="btn cl-w bg-white bd-black bg-white px-6"> Subir archivo</a>. El sistema confirma a través de un mensaje que se ha subido el archivo satisfactoriamente.
 
Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre cualquiera de un archivo tipo imagen, se muestra la previsualización sin necesidad de descargarse, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap04/chp04_img15.png)
_**Imagen 15.** Almacén  - Previsualización de imagen_

Para desasociar un documento, o una imagen o un video, se da clic al icono  <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn bg-gray cl-black">ACEPTAR</a> así:

![Procesar imagen](../../assets/images/cap04/chp04_img16.png)
_**Imagen 16.** Almacén - Desasociar un Archivo_

Si se desea descargar un archivo adjunto, se debe dar clic en el ícono <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.

>_**Nota:** Este proceso es el mismo para cualquiera de las tres carpetas de Multimedia._

