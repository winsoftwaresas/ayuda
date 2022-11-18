---
title: Ventana Principal de Almacén de Repuestos
subtitle: especifica el por que y para que de las ventanas y opciones que
  presenta el programa en este campo.
tags:
  - setup
author: win
order: 04_04
date: 2022-11-10T20:17:34.887Z
---
# Ventana Principal de Almacén de Repuestos

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img01.png)
_**Imagen 1.** Menú Almacenes_

Al sobreponer el cursor en el módulo de <a class="btn blue">almacén</a> se listan los almacenes creados en la tabla de Almacenes de la Infraestructura y cuando se elige un Almacén, el sistema muestra al lado izquierdo del nombre del respectivo almacén un <span class="mdi mdi-check-circle"></span></a> en color verde y en frente en azul, el aviso <a class="btn blue">seleccionado</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img02.png)
_**Imagen 2.** Ventana Principal Repuestos_

A esta ventana se llega haciendo clic sobre la opción <a class="btn blue">almacén</a>  del Menú Principal. A través de ella se ejecutan todas las funciones dedicadas a administrar los Almacenes de Repuestos para Mantenimiento. A continuación se ilustran las porciones que la componen.

## Ventana Visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img02.png)
_**Imagen 3.** Ventana Visor_

Desde esta ventana es posible observar los Repuestos existentes. Se listan todos o un Subgrupo de ellos. Es posible configurar el número de registros que  se muestran por página desde el menú <a class="btn blue">administración</a> en la opción  “Valores por Defecto” en la etiqueta **General**.

Al hacer clic sobre alguno de los Repuestos del Visor el sistema responde  mostrando  la información de ese Repuesto, en forma detallada, en una ventana llamada **Ventana Detalle**.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la  tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic sobre él o se desplaza el cursor con las teclas de desplazamiento.

## Ventana Detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img04.png)
_**Imagen 4.** Ventana Detalle_ 

En la gráfica anterior, ventana Detalle de Materiales y Repuestos se aprecian todos sus componentes y su  respectivo contenido.
 
Se encuentra toda la información relevante de inventarios sobre el Repuesto seleccionado en el Visor.
A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:}

### I﻿nformación General

**Repuesto:** En este campo se registra el código del Repuesto, de acuerdo a la política de codificación que se haya definido.

**Descripción:** En este campo se registra la descripción del Repuesto en lenguaje natural.

**No Inv/Inv:** Define el tipo de Repuesto respecto a su connotación de Inventariado o No Inventariado.  Un ítem es inventariado si está codificado en el Almacén y sobre él existen políticas de inventarios y reaprovisionamiento. Es No inventariado si su uso es de solo una vez y de él no se van a realizar más compras. También puede ser No inventariado, en un almacén  particular, cuando se trata de un ítem   cuya  existencia, contablemente ya fue consumida, pero se almacena para ser consumido, por demanda, en un lapso corto.

**Descripción larga:** Este botón permite realizar una descripción larga del Repuesto. Para ello se abre una nueva ventana en la que se adicionan más de 200 caracteres.


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img05.png)
_**Imagen 5.** Información General_

**Clase:** Es un campo que permite clasificar o agrupar los artículos del Almacén por un criterio particular para la Organización.

**Familia:** Es un campo que permite definir la familia a la cual pertenece el artículos del Almacén que se está definiendo.

**Grupo:** Es un campo que permite definir el grupo al cual pertenece el artículos del Almacén que se está definiendo.

**Parte Número:** Es un campo que permite definir la parte número del artículo del Almacén que se está definiendo.

**Casilla:** Es el campo en el que se establece la ubicación física del Repuesto dentro  del Almacén. Este campo permite cualquier nomenclatura de organización. Ejemplo. E21B (7,12) significaría Estante 21, lado B, posición matricial fila 7 columna 12.

**Existencia  Inventario:** Registra la  cantidad en  existencia en  el  Almacén del  Repuesto seleccionado. Este campo puede ser actualizado manualmente o en forma  automática a través del módulo de Kárdex de Repuestos. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él. También, al lado de este campo, el sistema muestra el Valor Total del inventario del Repuesto, que corresponde al producto de la  “Existencia Inventario” y el  “Costo Unitario Vigente”.

**Cantidad Reservada:** Informa la cantidad reservada del Repuesto seleccionado. Una reserva es una cantidad de la existencia actual del Repuesto, que se ha  comprometido para  ser  usada,  por  una  persona,  en  una  OT  particular  y la  separa  a  través de  la transacción **Reservas**. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Cantidad  Disponible:** Es  la  diferencia  entre   “Existencia  Inventario”  menos   “Cantidad Reservada”. Es la Cantidad Disponible para consumos de Mantenimiento. Este campo no es modificable por el usuario. Al lado de este campo, el sistema muestra la unidad de medida que se ha definido para él.

**Costo Unitario Vigente:** Este campo refleja siempre el Costo Unitario del Repuesto  seleccionado. Es  un valor  que  puede haber  sido  actualizado manualmente por  alguien que  tenía los permisos para hacerlo. Puede también haber sido actualizado  automáticamente por el sistema según  el  sistema de  costeo  definido para  el  almacén,  a través del  Kárdex  de Repuestos.

**FF Costeo:** Es la fecha en la que se hizo el último recálculo del costo unitario para el Repuesto seleccionado. Normalmente es la fecha en la que el Repuesto entró al almacén por última vez por medio de un concepto valorizado.

**Costo Última Compra:** Este campo registra la última compra del repuesto seleccionado del Almacén. Automatizando los movimientos de la compra través del Kárdex del Almacén.

**FF Última Compra:** Es la fecha de la última compra del Repuesto seleccionado del Almacén. Se actualiza automáticamente cuando tal movimiento de compra se efectuó a través del Kárdex del Almacén.

**FF Último Uso:** Es la fecha de la última salida del Repuesto seleccionado  del Almacén. Se actualiza automáticamente cuando tal movimiento de salida se  efectuó  a través del Kárdex de Almacén. En otro caso el sistema no actualiza este campo.

**Nivel de Existencia:** En este campo se define la cantidad o el nivel en existencia que siempre debe haber de ese Repuesto en el almacén seleccionado.

**Nivel Mínimo / Punto de Pedido:** Este campo registra  una  cantidad  que  tiene  un significado dependiendo del modelo de inventarios que maneje el Repuesto. En el  caso de que se trate de un Repuesto controlado bajo un modelo simple de Inventarios, o de Harris, este campo significa el punto en el nivel de Inventario en el que se debe iniciar una gestión que exige una cantidad mínima en existencia  permanentemente,  este campo denota esa cantidad mínima. En ningún caso este parámetro es recalculado por el sistema. 

**Nivel Máximo:** En este campo se define la cantidad o nivel máximo en existencia de ese Repuesto en el almacén seleccionado dependiendo del modelo simple de Inventario.

**Lote Óptimo a Comprar:** En este campo se define el parámetro de inventarios sobre la cantidad adecuada de compra, en cada proceso de re-abastecimiento. Este parámetro no es recalculado por el sistema.

**Período  de  Reaprovisionamiento:**  De  acuerdo  a  estadísticas  de  consumo  sobre  el Repuesto seleccionado, normalmente se establece en este campo el parámetro  indicativo del período normal de Reaprovisionamiento, acorde con el Lote Óptimo de  Compra y con la estadística de consumo. Este parámetro no es recalculado por el sistema. Al lado de este campo, el sistema muestra la palabra  “días” para indicar la unidad de medida del período de reaprovisionamiento.

**Unidad de Empaque:**  Es  la  unidad  de  compra, de  adquisición o  de  despacho por  parte  del proveedor. Ej. Caneca de 55 galones, o Caja por 24 unidades.

**Unidad de Consumo:** Es la unidad mediante la cual se le solicita al Almacén o mediante la cual el Almacén despacha un determinado artículo.  Ej. Galones o Unidades.

**Precio Venta 1, Precio Venta 2, Precio Venta 3:** Estos campos son utilizados de tipo información  para almacenar los precios actuales, anteriores y promedio del repuesto, estos campos son parametrizables en en el modúlo <a class="btn blue">administración</a> en la etiqueta **Almacén**, en la opción  “Manejo de Precios de Venta” y elegir la opción ** “SI”**.


## Vistas Parciales / Pestañas

Las Vistas Parciales o Pestañas permiten complementar la información que se despliega normalmente sobre un Repuesto (**Información General**) con otro conjunto de información que solo se muestra cuando es necesario,  por solicitud del usuario. Las vistas parciales  disponibles son: Ficha técnica, Características Técnicas y Multimedia. 

### Ficha Técnica

En la pestaña de Ficha Técnica, se encuentra toda la información relevante del Repuesto seleccionado en el Visor.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img06.png)
_**Imagen 6.** Vistas Parciales - Ficha Técnica_

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Repuesto al cual se le está definiendo la información de la ficha técnica.

**Estado:** En este campo de opciones seleccionables es posible registrar el estado  del Repuesto: Activo, Vencido, EOI (Excedente Obsoleto o Inservible).

**TT por Uso:** En este campo se listan los tipos de trabajo para seleccionar el tipo de trabajo que clasifique el Repuesto.

**A, B, C, O:** Informa si el  repuesto se clasifica con  el  método  de Costos basado  en actividades  (ABC).  Este  campo  Clasificación  se  utilizara  a  futuro  para  el  manejo  de inventario rotativo. Su definición por defecto es O (significa Otro).

**Código de Barras Interno:** Si existe un código de barras interno dentro la  Organización para la codificación de Repuestos, se debe de ingresar en este campo.

**Código de Barras del Proveedor:** Se  refiere  al  Código de  Barras  del  Proveedor  que  se encuentra asociado al Repuesto.


**Proveedor 1, Proveedor 2, Proveedor 3:** En estos campos se pueden relacionar hasta 3 proveedores del Repuesto seleccionado.


**Referencia Proveedor 1, Referencia Proveedor 2,   Referencia Proveedor 3:** En estos campos se  registran las  referencias  con  las  que  cada  Proveedor  correspondiente  suministra  el   Repuesto seleccionado.

**Comentario:** Aquí se ingresan los comentarios sobre un Repuesto o se especifica información adicional al Repuesto. Este campo cuenta con un espacio de 220 caracteres.

### Características Técnicas

Esta opción permite definir para un determinado Repuesto las características técnicas que lo definen. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo las Características Técnicas que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de las características.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img07.png)
_**Imagen 7.** Vistas Parciales - Características Técnicas_

En la gráfica anterior, Vista Parcial de Características, se aprecian las dos columnas  de componentes y sus respectivos contenidos. A continuación se describen los  campos que componen esta ventana de información adicional:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Repuesto al cual se le está definiendo la información de las características técnicas.

**Car. Técnica:** En este campo se lista las características técnicas definidas en la tabla de Infraestructura, para seleccionar aquellas que son  propias del Repuesto activo.

**Valor:** En  este campo se define  el  valor  de  la  característica correspondiente en la primera columna, en el cual es posible escribir su respectiva unidad de medida. 

P﻿ara ingresar una caracteristica técnica al Repuesto dar clic en el botón <a class="btn blue">Adicionar Car. Técnica</a>

A﻿ continuación se muestra el formulario para ingresar la Característica:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img08.png)
_**Imagen 8.** -Ingresar Característica - Formulario_

L﻿a Característica Técnica se debe de seleccionar del listado que corresponde a su respectiva tabla de Infraestructura - Características, una vez ingresado el valor se debe dar un clic en el botón  <span class="mdi mdi-plus-circle icon white"></span>. Automáticamente el sistema la registra en la tabla de **Car. Técnica**.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img09.png)
_**Imagen 9.** Adicionar Característica_

P﻿ara eliminar una registro se debe dar clic en el icono <span class="mdi mdi-delete"></span>. El sistema muestra un mensaje alerta para confirmar la transacción:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img10.png)
_**Imagen 10.** Adicionar Característica_

>﻿**Nota:** Para asentar los cambios de alguna modificación, añadir o eliminar una característica se debe dar clic en el botón <a class="btn blue">Actualizar <span class="mdi mdi-pencil"></span></a>.


### Multimedia

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img11.png)
_**Imagen 11.** Almacén - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al Repuesto en cada una de sus carpetas asignadas. Esta opción permite asociar al Repuesto uno o varios documentos, con el objetivo de facilitar o guiar el trabajo a realizar o detallarlo minuciosamente. AM acepta documentos de extensiones .DOC, XLS, PDF, JPG es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes. 

Los documentos anexos pueden contener ayudas necesarias en la ejecución de actividades e instalación del respectivo Repuesto, usos planos, manuales técnicos, manuales de normas técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, procedimientos, listas de verificación, protocolos de prueba u otra información estándar para su utilización.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información del Repuesto, se deberán registrar así:

**Que Hacer:** Es la información general que aparece en cada pestaña con los campos bloqueados para que el usuario visualice la información básica del Repuesto.

**Documentos:** En esta carpeta se relaciona toda clase de documentación relacionada al Repuesto. Ejemplo: Archivos en Word, PDF, Excel, entre otros.

**Imágenes:** En esta carpeta se relaciona toda clase de imágenes relacionadas al Repuesto. Ejemplo: Imágenes en formato JPG, PNG, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Repuesto. Ejemplo: Videos en formato wmv y mp4.


Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>, como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap04/chp04_img12.png)
_**Imagen 12.** Almacén - Abrir Explorador Archivos_

A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn">abrir</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap07/chp07_img09.png)
***Imagen 7.** Solicitudes - Seleccionar Archivos*

De manera adicional u opcional se puede escribir un nombre en el siguiente campo para enfatizar de lo que trata el archivo:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap07/chp07_img10.png)
_**Imagen 8.** Solicitudes - Nombrar Archivo_

P﻿ara finalizar se debe de dar un clic en el el botón <a class="btn  blue">subir Archivo</a>. El sistema confirma a través de un mensaje que se ha subido el archivo satisfactoriamente.
 ﻿
Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre el nombre de una de las imágenes, se muestra la previsualización, como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap07/chp07_img11.png)
***Imagen 9.** Solicitudes - Previsualización de imagen*

Para desasociar un documento, o una imagen o un video, a la SS se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn white">Aceptar</a>.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap07/chp07_img12.png)
_**Imagen 10.** Solicitudes - Desasociar un Archivo_

Si se desea descargar un archivo adjunto a la SS, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.















# Ventana Submenú de Repuestos

## Ir a RP

El icono `<span class="iconify btn" data-icon="mdi-filter-variant">`Buscar, se abre un campo al lado izquierdo, donde se digita el código exacto del Repuesto que se desea encontrar rápidamente. Luego de digitar el código del Repuesto, se presiona la  tecla   “Enter” y  el  cursor  se  posiciona en  consecuencia,  sobre  el  Repuesto deseado en el Visor.

![ventana detalle](../../assets/images/cap04/chp04_img06.png)

En caso de escribir el código con algún error, el sistema muestra un mensaje de alerta indicando que el Repuesto no existe.

![ventana detalle](../../assets/images/cap04/chp04_img0.png)

## Indicadores

Es posible visualizar de manera inmediata, los Repuestos activos, inactivos y con Multimedia, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado y si tiene asociado Multimedia. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana visor.

![materiales y repuestos ](../../assets/images/cap04/chp04_img07.png)

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Rojo:** Repuestos definidos con estado inactivo.
- **Verde:** Repuestos definidos con estado activo.
- **Naranja:** Repuestos que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.

## Subgrupo

Se usa para seleccionar grupos de Repuestos que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Almacén de Repuestos.

![materiales y repuestos ](../../assets/images/cap04/chp04_img08.png)

Se usa para seleccionar grupos de Repuestos que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al  `<span class="iconify btn" data-icon=filter-variant>`icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Almacén de Repuestos.

![materiales y repuestos ](../../assets/images/cap04/chp04_img09.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana
Subgrupo de Repuestos son los siguientes.

**A, B, C, O:** Permite seleccionar los repuestos que tengan una clasificación A, B, C u O definida.

**Casilla:** Esta opción permite seleccionar y agrupar aquellos Repuestos que se encuentran en la casilla que se especificó después de marcar el criterio de selección.

**Clase:** Esta opción permite seleccionar aquellos Repuestos que cumplen con el patrón de clase especificado. También se puede usar los comodines, por Ej. B, B%

**Código de Barras Interno:** Si existe un código de barras interno dentro de la organización para codificar Repuestos; este campo permite seleccionar el Repue
sto  que se encuentre asociado al Código de Barras Interno que se ingresó al crear el Repuesto. En este campo se puede usar los comodines, por Ej. %1%, 1%

**Código de Barras Proveedor:**Permite  seleccionar  el  Repuesto  que  se   encuentre asociado al Código de Barras del Proveedor que se ingresó al crear el Repuesto. En este campo se puede usar los comodines, por Ej. %1%, 1%

**Código del Repuesto:** Esta selección agrupa los Repuestos relacionados por su  código. Por ejemplo: si se escribe BAN%, se seleccionan todos los Repuestos cuyo  código inicia por BAN. Si se escribe  	TR%  se seleccionan todos los Repuestos cuyo código inicie por cualquier cuarteto de valores pero que en la quinta y sexta posición tengan un TR. El porcentaje es un carácter comodín que significa  “todos”.

**Descripción del Repuesto:** Selecciona los Repuestos según criterios que se fundamenten en su descripción. Ejemplo: % Banda%  selecciona todos los Repuestos en cuya descripción, en cualquier posición, tengan la palabra  “Banda”.

**Estado:** Permite seleccionar el Estado de los Repuestos, es posible registrar el estado  de Activo, Vencido, Excedente, Obsoleto o Inservible para el Repuesto activo.

**Proveedor 1:** Lista los Repuestos por el Proveedor seleccionado. La búsqueda se realiza sobre los 3 campos de Proveedor de un repuesto (**Proveedor 1, 2, 3)**. También se puede elegir el Proveedor 1 mediante el uso de comodines, para ello, se debe dar clic al icono `<span class="iconify btn" data-icon=lock>`Candado. Si se selecciona la opción ** “Utilizar comodines”**, se digita la palabra, por ejemplo FER% y el sistema selecciona todos los Proveedores cuyo nombre empieza por FER. Si se escribe %IA% se seleccionan todos los Proveedores en cuyo nombre, en cualquier posición, tengan la palabra ** “IA”**.

**Referencia Proveedor 1:** A través de esta opción es posible digitar el nombre de la referencia del Repuesto, seleccionar los Repuestos que  tienen como referencia proveedor 1 la que se especificó después de marcar el criterio de selección. Este campo permite el uso de

**Referencia Proveedor 2:** Este criterio permite realizar consultas por la segunda referencia establecida perteneciente al segundo proveedor. Permite el uso de comodines, **por Ej. %BR1%, BR1%.**

**Tipo:** Permite seleccionar de la lista el tipo al que pertenece el Repuesto, sí es inventariado o no inventariado.

**Tipo de Trabajo:** Agrupa los Repuestos de acuerdo al tipo de trabajo al que están  asociados.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón `<span class="iconify btn" data-icon="mdi-plus-circle">`Más,  en lugar de darlo al botón `<a class="btn">`Aceptar`</a>`.



## Transacciones

### Asociar con Activos

El comando Asociar  a  Equipos del submenú Repuestos permite asociar un  Repuesto con el o los Equipos a los que sirve. Esta asociación es opcional, pero es muy útil en caso de necesitar ubicar con facilidad aquellos Repuestos específicos que solo sirven a Equipos específicos.

![ detalle de materiales y repuestos ](../../assets/images/cap04/chp04_img16.png)

A esta opción se llega al sobreponer el cursor del mouse sobre un almacén y al lado derecho se despliega el conjunto de transacciones disponibles para ese almacén, luego se elige la transacción ** “Asociar con Activos”**. Al lado izquierdo es posible visualizar el conjunto de Activos y al lado derecho se visualiza los Repuestos existentes en el almacén seleccionado previamente. Para navegar entre las páginas se debe dar clic al icono ubicado en la parte inferior derecha de cada recuadro.

![ detalle de materiales y repuestos ](../../assets/images/cap04/chp04_img17.png)

La asociación de los Repuestos con los Activos, inicia al dar clic a los **check box**, que están al lado izquierdo en la primera columna de la porción de Activos y se puede seleccionar uno o  varios, luego se elige uno o varios Repuestos dando clic a los **check box** que serán asociados a los Activos seleccionados y se asigna la cantidad para cada Repuesto, **AM** asigna por defecto la cantidad 1, como se muestra a continuación:

![ detalle de materiales y repuestos ](../../assets/images/cap04/chp04_img18.png)

Para terminar la transacción se da clic al botón `<a class="btn">`Asociar`</a>` inmediatamente se muestra un mensaje confirmando la ejecución de la transacción y se observa el resultado de la asociación realizada.

![activos](../../assets/images/cap04/chp04_img19.png)

Si el usuario desea ver la asociación de un Activo y sus Repuestos asociados, se debe elegir un único Activo del lado izquierdo y se da clic al botón `<a class="btn">`Ver RP Asociados`</a>`, **AM** mostrará en el lado derecho los Repuestos que fueron asociados al Activo seleccionado.

![activos](../../assets/images/cap04/chp04_img20.png)

Si se eligen dos o más Activos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Activo.

![activos](../../assets/images/cap04/chp04_img21.png)

Si el usuario desea ver la asociación de un Repuesto y los Activos asociados, se debe elegir un único Repuesto del lado derecho y se da clic al botón a `<a class="btn">`Ver RP Asociados`</a>`, **AM** mostrará en el lado izquierdo los Activos que tienen asociados el Repuesto seleccionado.

![activos](../../assets/images/cap04/chp04_img22.png)

Si se eligen dos o más Repuestos, el sistema mostrará un mensaje indicando que solo se debe seleccionar un solo Repuesto.

![activos](../../assets/images/cap04/chp04_img23.png)

Si el usuario desea desasociar uno o varios Repuestos a uno o varios Activos, se deben elegir a través de los check box.

![activos](../../assets/images/cap04/chp04_img24.png)

Para terminar la transacción se da clic al botón a `<a class="btn">`Desasociar`</a>`  inmediatamente se muestra un mensaje confirmando la ejecución de la transacción y se observa el resultado de la desasociación realizada.

![activos](../../assets/images/cap04/chp04_img25.png)
