---
title: Vistas Parciales
subtitle: Se explica la ventana detalle y sus vistas parciales.
tags:
  - setup
author: win
order: '03_06'

---


## Ventana Detalle


![Procesar imagen](../../assets/images/cap03/chp03_img04.png)
_**Imagen 4.** Ventana Detalle Activos_

En la gráfica anterior, se visualiza la Ventana Detalle detalle de un Activo/Equipo. En ella se encuentra toda la información relevante del registro seleccionado en el Visor (sombreado en verde) que se compone de las vistas parciales ó pestañas.

Las Vistas Parciales o Pestañas permiten complementar la información de la Ficha Técnica de un Activo/Equipo, con otro conjunto de información que solo se muestra cuando es necesario por solicitud del usuario. Las vistas parciales  disponibles mas comunes son: las Características, Vida útil, Metrología (en algunas parametrizaciones) y Multimedia. 

**Para compañías biomédicas:** Características, Vida Útil, Metrología, Información Biomédica y Multimedia.

A continuación se describen las vistas parciales o porciones de la información del Activo:


#### Identificación 


**Código:** En este campo se registra el código del Activo/Equipo, correspondiente al código de Mantenimiento, de acuerdo a la estructuración por niveles que se haya definido durante la etapa de Planeación de la Implementación.

**Descripción:** Este campo no tiene un rótulo determinado. Se utiliza para el nombre del Activo/Equipo. Este campo cuenta con una capacidad de 60 caracteres, es obligatorio.

**Activo Fijo:** También Número de Inventario, es el Código Contable del Activo, según Contabilidad. Este campo cuenta con una disponibilidad de 20 caracteres.

**Código de Inventario:** En este campo se registra el código de inventario del Activo/Equipo, que Mantenimiento haya definido o el definido por el área de Activos o el área Contable de la institución.

**Referencia Externa (Proveedor):** En este campo se indica el código con el cual el Proveedor conoce el Equipo. Este campo cuenta con una disponibilidad de 20 caracteres. 

**Serial:** Este campo se utiliza para registrar el número de serie o lote que identifica individualmente a un Activo/Equipo según el fabricante. Este campo cuenta con una disponibilidad de 40 caracteres.

**Alias:** En algunas plantas por tradición o cultura, se tiene una denominación especial con la cual se conocen algunos Activos/Equipos. Este campo es el especial para registrar tal nombre especial. Igualmente se puede utilizar para registrar códigos  antiguos con que se definían este Activo antes de la nueva codificación. Este campo cuenta  con una disponibilidad de 20 caracteres.



#### Información General

**Centro de Costo:** En este campo se registra o se despliega automáticamente, el Centro de Costo al que está asociado el Activo. Si el Activo se definió previamente, el Centro  de  Costo aparece automáticamente. Si es una nueva definición la que se está realizando, el sistema muestra  y  pone como disponible todo el contenido de la tabla de  Centros de Costo definidos en la Infraestructura, para seleccionar el que corresponde al Activo. Es muy importante definir este campo desde el mismo momento de la definición del Activo, puesto que es un campo derivado o sea que se  trae automáticamente para muchas funciones, cada vez que se invoca el Activo.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Ubicación Física:** En este campo se traen  automáticamente las Ubicaciones Físicas definidas en la infraestructura, para definir la ubicación geográfica del Activo en la planta. Este campo es muy importante definirlo desde el mismo momento en que se cree el Activo/Equipo, puesto que es un campo derivado, es decir, que se trae automáticamente para muchas funciones.

**Código Barras Interno:** Este campo pertenece al Código de Barras Interno del equipo, en caso que exista alguno dentro de la empresa. Este campo cuenta con una disponibilidad de 22 caracteres.

**Código Barras Proveedor:** Este campo pertenece al Código de Barras que fue asociado al equipo por parte del Proveedor.

**Criticidad del Activo:** Es la importancia o criticidad de un Activo/Equipo en la línea o en un proceso. En este campo se traen automáticamente las diferentes clasificaciones sugeridas:

- **Clave o crítico**
- **Detiene el proceso**
- **Fácil reemplazo**
- **No afecta el proceso**
- **Poco uso**
- **Ninguno**

**Confiabilidad Subjetiva:** Este es un concepto subjetivo. En este campo se escribe un valor del 0 al 100%, a criterio del técnico ejecutor, que indica el grado de confiabilidad del Equipo. A pesar de lo subjetivo, este valor puede ser de consideración importante cuando se realiza una reparación a un Equipo. Se puede actualizar desde las  Órdenes de Trabajo, en el momento de su cierre.

**Proveedor:** En este campo se traen automáticamente los diferentes Terceros asignados como Proveedor/Fabricante, para seleccionar el correspondiente.

**Fabricante:** En este campo se traen automáticamente los diferentes Terceros asignados como Proveedor/Fabricante, para seleccionar el correspondiente.

**Marca:** Este campo se utiliza para diligenciar la Marca que identifica el Activo/Equipo. Este campo cuenta con una disponibilidad de 22 caracteres.

**Modelo:** Este campo se utiliza para diligenciar el Modelo que identifica un Activo/Equipo según el fabricante. Este campo cuenta con una disponibilidad de 30 caracteres.

**Tipo:** Es una característica particular de un Activo/Equipo. Este campo se utiliza  para diligenciar el tipo que identifica un Equipo según su uso o el fabricante. Este campo cuenta con una disponibilidad de 20 caracteres.

**Encargado:** Son personas propias de la empresa  encargadas de la operación o funcionamiento del Activo/Equipo. En este campo se traen automáticamente los diferentes Terceros asignados como Responsable Interno/Empleado y Responsable Externo/Contratista.


#### Estados

**Inactivo/Activo:** Es un switche que permite Controlar el estado de un Activo/Equipo. Cuando se pone a un estado inactivo se muestra un enlace azul **Desincorporación** para ingresar el detalle de cuando se da de baja un Equipo.  

>**Nota:** Es importante tener en cuenta que este switch se utiliza durante los procesos de Generación Automática de Ordenes  de Trabajo y de Proyección para un período futuro, pues solamente se tienen en  cuenta aquellos Equipos con estado Activo y tampoco se listarán en **AMsi** para los usuarios solicitantes. 

**Estado:** Este campo se utiliza para especificar el tipo de Estado en el que se encuentra el Activo/Equipo. Dependiendo del campo anterior. Si el Activo actual se encuentra  Activo (Operativo) se listan las siguientes opciones:

**A** - Dado en préstamo

**A** - Recibido en préstamo

**A** - Dado en arriendo

**A** - Recibido en arriendo

**A** - En convenio

**A** - Otro


Los que están Inactivos (bien sea No Operativos o Dados de baja temporal o totalmente) se especifican en las siguientes opciones:

**I** - Dado de baja

**I** - Overhaul

**I** - No está en operación

**I** - Otro

**AC raíz:** Este campo se utiliza para identificar el Activo/Equipo que es una unidad funcional que se despieza (Equipos raíz). Solo se consideran como Equipo Raíz aquellos Activos/Equipos que no tienen una dependencia de otros y que más bien son la base de despiece de sus componentes.

**Ubicación técnica:** Con este switche se especifica si un Equipo es una ubicación física del AC Raíz. 

**Componente intercambiable:** Si el Activo que se define es un componente que se intercamnbia en un Activo. 

**Fijo/Móvil:** Se usa para definir si un Activo es estático en un área o no. 

**Ruta:** En este campo se indica si el Activo/Equipo que se está definiendo es una Ruta. Cuando se ha indicado que se trata de una Ruta, el sistema se prepara para recibir un conjunto de información adicional correspondiente a la Ruta. Se debe recordar que las rutas de mantenimiento asocian o integran varios Activos/Equipos.

**Permitir Dos Contadores :** Este switch permite deifnir dos tipo de contadoeres en el Activo. 


**Adicionar Contador:** Este botón abre el siguiente formulario:

- **Contador:** En este campo se traen automáticamente de la tabla de Infraestructura los tipos de Contadores que pueden ser definidos para un Activo o una máquina. Se  selecciona el que mejor refleje o sea más representativo del trabajo que realiza el Activo. Se usa además, para definir un Programa de Mantenimiento en función del trabajo realizado por el mismo Equipo.

- **Decremental/Incremental:** En este campo se elige si es un Contador tipo Incremental (siempre aumenta) o Decremental (permite valores que decrecen o negativos).

- **Valor Contador:** En este campo con capacidad de 15 dígitos se registra el valor del contador según la última lectura realizada. Es un valor base para los procesos de  Proyección y Programación que se realizan desde Programas de Mantenimiento.

- **FF Lectura:** Es la fecha en la cual se toma la medición actual del contador. Es una fecha base para el proceso  de  Proyección y Programación que se realiza desde Programas de Mantenimiento.

- **Std. Planeación:** Es un promedio de trabajo realizado por el Activo en una unidad de tiempo, en función de su contador asociado. En este campo se escribe la cantidad de unidades que avanza en un lapso, el contador seleccionado. Por medio del estándar de Planeación se realiza la proyección de un contador para un Activo hacia el futuro.

**Por:** En este campo se indica la unidad de tiempo  considerada en el Estándar de Planeación. Se puede seleccionar cualquiera de las siguientes opciones, aunque se sugiere que sea mensual:

- Día
- Semana
- Quincena
- Mes

>**Nota:** Para añadir el contador se debe dar clic en el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue"></span> y luego en <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a> el registro.


**Comentario:** Aquí se ingresan los comentarios sobre un Activo o se especifica información adicional al AC.



### Características

Esta opción permite definir para un determinado Activo/Equipo las Características técnicas que lo definen. En la parte izquierda de la ventana aparece un nuevo Visor en el que irán apareciendo las Características que se van creando en la ventana Detalle, mientras que en la parte derecha aparece los campos para crear o actualizar la información de las características.

![Procesar imagen](../../assets/images/cap03/chp03_img07.png)
_**Imagen 9.** Activos - Características_

En la gráfica anterior, Vista Parcial de Características, se aprecian sus componentes y sus respectivos contenidos. En  la ventana Detalle de Características se encuentra la información relevante a la Característica seleccionada en el Visor, que hace referencia al Activo/Equipo.

A continuación se describen los campos que contiene el formulario:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**Car. Técnica:** En este campo se traen automáticamente las características definidas  en la Infraestructura, para seleccionar aquellas que son propias del Activo/Equipo activo.

**Unidad  de Medida:** En este campo se traen automáticamente las Unidades de Medida definidas en la   Infraestructura, para seleccionar aquella que corresponda a la Característica seleccionada.

**Tipo:** En este campo se define la cualidad de la Característica definida de acuerdo con los siguientes criterios:

- Controlable
- No controlable

**Valor Nominal:** En este campo se ingresa el Valor Nominal (Máximo 30 caracteres) de la Característica definida de acuerdo con las indicaciones del fabricante.

**Tolerancia:**  En este campo se ingresa el factor de   tolerancia o rango permitido para la característica definida de acuerdo con los criterios del fabricante o la experiencia técnica de los responsables del Activo/Equipo. Existen 2 campos y son:

**Desde:** Se define el valor mínimo permitido para la característica definida.

**Hasta:** Se define al valor máximo permitido para la característica definida.


Para agregar una característica técnica se debe dar clic en <a class="btn cl-blue bg-gray px-6"> Adicionar Car.Técnica </a> se debe diligenciar el formulario  anterior y adicionar cada una con el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>. 

![Procesar imagen](../../assets/images/cap03/chp03_img07_01.png)
_**Imagen 10.** Activos - Adicionar Características_

Es posible Actualizar los valores o realizar cambios en una característica agregada. Para ello, seleccione la característica técnica y una vez se encuentre sombreada realice los cambios en el formulario y finalice dando un clic en el botón <a class="btn cl-blue bg-gray px-6"> Actualizar Car.Técnica </a> como se indica en la siguiente imagen: 

![Procesar imagen](../../assets/images/cap03/chp03_img07_02.png)
_**Imagen 11.** Activos - Actualizar Características_


####   Características Controlables

Esta opción permite ingresar valores de medición a aquellas características que fueron definidas previamente como controlables.

![Procesar imagen](../../assets/images/cap03/chp03_img08.png)
_**Imagen 12.** Activos - Características Controlables_

En  la  gráfica  anterior, Vista Parcial  de  Características Controlables, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de  Características se encuentra la información relevante a la Característica seleccionada  en el Visor, que hace referencia al Activo/Equipo. Junto con esta información se encuentra un conjunto de datos para el registro de la medición que se va a registrar.

A continuación se describen los campos que componen este formulario:

**Car. Controlable:** En este campo se despliegan automáticamente las características que fueron definidas previamente como Controlables, para seleccionar aquella a la cual se le va a registrar una determinada medición.

**Unidad de Medida:** En este campo se trae automáticamente la Unidad de  Medida definida en la Característica Controlable seleccionada.

**FF Medición:** En este campo se registra la fecha en la cual se realizó la medición de la característica.

**Valor:**  En  este  campo  se  ingresa  el  valor  registrado  en  la  medición  de   la característica.

Para ingresar una característica controlable, primero debe estar agregada como característica controlable y luego en la parte inferior dar clic en <a class="btn cl-blue bg-gray px-6">Adicionar Car. Controlable</a> luego en el desplegable del formulario como se muestra en la imagen anterior seleccionar la característica con el fin de establecer el historial de mediciones. 

_>**Nota:** Si una característica se sale del rango o límite establecido se generará una Órden de Trabajo._


### Vida Útil

![Procesar imagen](../../assets/images/cap03/chp03_img09.png)
_**Imagen 13.** Activos - Vida Útil_

En la gráfica anterior, Porción Vida Útil, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Vida Útil se registra todo el compendio de las fechas en forma de cronología desde que se adquiere el Activo hasta su disposición final.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**FF Registro:** En este campo se registra la fecha de registro del Activo en el software **AM**.

**FF Fabricación:** En este campo se registra la fecha de fabricación del Activo dada por el fabricante.

**FF Ingreso Inventario:** En este campo se registra la fecha en que ingresa el Activo al sistema de Activos de la institución.

**FF Fin Garantía:** En este campo se registra la fecha en la que se da por terminada la garantía del Activo/Equipo por parte del Fabricante o Proveedor. Si la garantía está vigente, la fecha se muestra en color verde, mientras que sí la garantía se encuentra vencida, la fecha se muestra en color rojo.

**FF Instalación:** En este campo se registra la fecha en la cual se instaló el Activo en el servicio.

**FF Inicio Operación:** En este campo se registra la fecha en la cual inició el funcionamiento productivo del Activo.

**FF Dado de Baja:** En este campo se registra automáticamente por el sistema la fecha en que se dio de baja el Activo, cuando se selecciona el estado inactivo  “I-Dado de Baja”.

**FF Adquisición:** En este campo se registra la fecha en la cual se formalizó la adquisición del Activo. Esa adquisición puede ser obtenida a través de una Compra, Donación, Arrendamiento Financiero, Comodato, Préstamo y Otro.

**Tipo de Adquisición:** Se elige de la lista el medio por el cual se adquirió el Activo. Puede  ser: Compra, Donación, Arrendamiento Financiero, Comodato, Préstamo y Otro.

**Documento Adquisición:** Se registra el número o nombre del Documento relacionado con el Tipo de Adquisición del Activo.

**Valor Moneda Nacional:** En este campo con capacidad de 13 dígitos, se escribe el valor del Activo/Equipo según la moneda que se indica en el campo Moneda Nacional (normalmente moneda local: Pesos Colombianos).

**Moneda Nacional:** En este campo se selecciona el nombre o abreviatura de la moneda de acuerdo con la definición que se haga de la tabla de infraestructura (moneda local).

**Valor Moneda Extranjera:** En este campo con capacidad de 13 dígitos, se escribe el valor del Activo/Equipo según la moneda que se indica en el campo Moneda Extranjera (normalmente moneda de origen).

**Moneda Extranjera:** En este campo se selecciona el nombre o abreviatura de la moneda de acuerdo con la  definición que se haga de la tabla de infraestructura (moneda de origen).

**Póliza:** Este es un campo indicado en Modo Switche, una vez que le indiquemos al sistema que un registro tiene asociada una póliza se habilitan los campos a diligenciar: Número de póliza, Fecha Ingreso Póliza y Fecha Retiro Póliza.

**Contrato:** Este es un campo indicado en Modo Switche, una vez que le indiquemos al sistema que un registro tiene asociado un contrato se habilita el campo contrato, una vez que se selccione un contrato el sistema asocia automáticamente los campos: Contratista, Fecha Inicio y Fecha Final.

**Vida Útil:** En este campo se registra el número total de años de vida útil del Activo según el fabricante, este campo puede ser de tipo informativo o un campo que permita hacer un seguimiento del registro cuando se requiere por parte del usuario hacer una depreciación de línea recta. Esta configuración debe hacerse desde el módulo de <a class="btn blue">Administración</a> por parte de un Usuario Administrador autorizado, en la sección Valores por Defecto, opción Activos. 

**Años de Uso:** Este campo es calculado por el sistema cuando se activado la función depreciación por línea recta e indica el tiempo transcurrido hasta la fecha actual del Activo/Equipo.

**Años Restantes:** Este campo es calculado por el sistema cuando se activado la función depreciación por línea recta e indica el tiempo que resta para cumplir la vida útil del Activo/Equipo.

**Valor de Salvamento:** Es aquella parte del costo de un Activo que se espera recuperar finalmente, al final de su vida útil y ello es independiente de la filosofía de depreciación que se use.

**FF Valor Salvamento:** Es la fecha en la que se definió el Valor de Salvamento.

**Valor Depreciado:** Es el costo de un Activo en la actualidad, despues de haber realizado las depreciaciones de rigor hasta la fecha.

**FF Valor Depreciado:** Es la fecha en la que se realizó la depreciación mas reciente del Activo.

**Valor Razonable:** Es el precio que se recibiría por la venta de un Activo en el momento actual y según el estado en el que se encuentra el Activo. 

**FF Valor Razonable:** Es la fecha se registró el valor razonable.

**Valor Reposición:** Es un valor estimado en el que se debería incurrir al tener que reemplazar un Activo ante contingencias, daños irreparables o cambio de tecnología.

**FF Valor Reposición:** Es la fecha en la que se definió el valor de reposición.

A continuación se explican las siguientes porciones/pestañas que se habilitan desde el módulo <a class="btn blue">Administración</a> en la transacción Valores por Defecto, en la sección General:

### METROLOGÍA

Para anexar información metrológica la compañía en la que se trabaja debe estar configurada desde el módulo de <a class="btn blue">Administración</a> en Valores por Defecto como una compañía que requiere Metrología. 

Ingrese a la pestaña correspondiente y continúe dando clic en <a class="btn gray">Adicionar Magnitud</a>, como se muestra en la imagen:

![Procesar imagen](../../assets/images/cap03/chp03_img09_01.png)
_**Imagen 14.** Activos - Metrología_

![Procesar imagen](../../assets/images/cap03/chp03_img09_1.png)
_**Imagen 15.** Activos - Formulario Metrología_

En la gráfica anterior, Porción Metrología, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Metrología se registra las magnitudes referentes al Activo. Estas son variables únicamnete de consulta.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las variables metrológicas.

**Magnitud:** En este campo se muestra el nombre de la variable definida en la tabla de Infraestructura en la Tabla Magnitudes.

**Unidad de Medida:** Es la abreviatura correspondiente a la medición de la magnitud definida.

**División de Escala:** Es la diferencia entre los valores correspondientes a dos trazos sucesivos de la escala.

**Rango de Medición:** Es el intervalo entre el valor máximo y el valor mínimo de una magnitud.

**Rango de Trabajo:** es intervalo de medición del Activo/Equipo.

**Puntos:** Son los ocho puntos de referencia de calibración o de verificación del Activo.

Luego de diligenciar el formulario agregue la magnitud con el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>. También es posible actualizar los campos en una magnitud ya agregada, para asentar los cambios en el formulario dar un clic en <a class="btn gray">Actualizar Magnitud</a>. PAra finalizar actualice el registro con el botón ubicado en la parte superior izquierda <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>.


### INFORMACIÓN BIOMÉDICA

Para anexar información biomédica a la compañía en la que se trabaja debe estar configurada desde el módulo de <a class="btn blue">Administración</a> en Valores por Defecto como una compañía que es **Biomédica.** 

Ingrese a la pestaña correspondiente:

![Procesar imagen](../../assets/images/cap03/chp03_img09_2.png)
_**Imagen 16.** Activos - Info. Biomédica_

En la gráfica anterior, Porción Info. Biomédica, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana de Info. Biomédica aplicable sólo para las compañías biomédicas se registra la información complementaria y reglamentaria referente a los Activos/Equipos biomédicos.

A continuación se describen los campos que componen esta Pestaña:

**Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le está la porción biomédica.

**Datos:** En este recuadro se registra la siguiente información:

- Registro Sanitario INVIMA
- Permiso de Comercialización
- Número (para alguna de las dos opciones anteriores)
- Número de expediente
- Seguridad Eléctrica
- Impacto en el proceso del Activo
- Frecuencia de uso del Activo
- Horas Por (Dia, Semana, Quincena, Mes)
- Proceso Realizado por el Equipo 

**Clasificación por Riesgo:** Las opciones disponibles son: Ninguno, Clase I Bajo Riesgo, Clase II Riesgo Moderado, Clase III Alto Riesgo, Clase IV Muy Alto Riesgo y Crítico Ambiental.

**Clasificación Biomédica:** Las opciones disponibles son: Ninguno, Tratamiento y Mantenimiento de la Vida, Rehabilitacion, Prevención, Análisis de Laboratorio y Equipo Industrial de Apoyo Hospitalario.

Una vez diligencie el formulario anterior finalice guardando los cambios con el botón <a class="btn blue">ACTUALIZAR<span class="mdi mdi-pencil"></span></a>.


### MULTIMEDIA

![Procesar imagen](../../assets/images/cap03/chp03_img10.png)
_**Imagen 14.** Activos - Multimedia_

En la gráfica anterior, Ventana Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al AC en cada una de sus carpetas asignadas. Esta opción permite asociar al registro, uno o varios documentos, con el objetivo de facilitar el trabajo a realizar, o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** ayudas necesarias en la ejecución de la OT que se genera desde este EQ: planos, manuales técnicos, manuales de normas  técnicas de Mantenimiento o de especificaciones detalladas, normas de seguridad, enfoques de acción, procedimientos sobre cómo realizar la labor, check lists, protocolos de prueba y otra información estándar para su ejecución, en aras de optimizar los recursos de tiempo y de insumos a ser consumidos, como también con el fin de preservar la seguridad del recurso humano.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al AC, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Activo al cual se le están definiendo las Características.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al AC. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al AC. Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al AC. Ejemplo: Videos en formato wmv, mp4, entre otros.

![Procesar imagen](../../assets/images/cap03/chp03_img11.png)
_**Imagen 17.** Activos - Explorador de archivos_

Para adicionar un documento, imagen o video, se debe dar un doble clic sobre la carpeta deseada, y luego seleccionar del ícono de nube <span class="mdi mdi-cloud-upload icon white"></span>. A continuación se abre el explorador de archivos, seguido de seleccionar el archivo dar un clic en <a class="btn bg-gray cl-black">Abrir</a>.

![Procesar imagen](../../assets/images/cap03/chp03_img12.png)
_**Imagen 18.** Activos - Subir Archivo_

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic sobre el nombre de una de las imágenes, se muestra la previsualización. 

![Procesar imagen](../../assets/images/cap03/chp03_img13.png)
_**Imagen 19.** Activos - Archivos Cargados_

Para desasociar un documento, o una imagen o un video, al AC se da clic al icono de basura <span class="mdi mdi-delete"></span> que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro, finalmente confirmar con el botón <a class="btn bg-gray cl-black">ACEPTAR</a>.

Si se desea descargar un archivo adjunto al AC, se debe dar clic en el ícono de nube con direccional hacia abajo <span class="mdi mdi-cloud-download icon white"></span> la nube con flecha hacia abajo que se encuentra al lado derecho del archivo que se quiere descargar.

>**Nota:** Sólo los formatos de imagen tiene previsualizaicón, es decir, que con sólo dar clic en la imagen adjunta, ésta se visualiza en otra pequeña ventana, sin necesidad de descargarla: ![Procesar imagen](../../assets/images/cap03/chp03_img47.png)






