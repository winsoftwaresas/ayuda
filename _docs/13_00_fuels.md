---
layout: page
title: ◼ Fuels
order: '13_00'
media: "../../assets/images/docs/"
---
#  Combustibles

La gestión eficiente del consumo de combustible es esencial para organizaciones que dependen de vehículos, maquinaria y otros equipos en sus operaciones diarias. En este contexto, contar con un sistema de control de combustible se convierte en una herramienta indispensable para optimizar recursos y reducir costos operativos.

El módulo de combustibles de **AM** está diseñado para adaptarse a diversos tipos de activos, como vehículos de transporte, equipos de construcción, maquinaria agrícola, generadores eléctricos, montacargas, flotas de camiones y equipos industriales, entre otros.

Este módulo permite registrar de manera precisa cada abastecimiento, calcular el rendimiento de combustible por mes, permitiendo identificar patrones de consumo y generar informes detallados que ofrecen una visión integral del desempeño energético de los Activos.



## Conceptos Básicos sobre Combustibles

Un combustible es una sustancia que se utiliza para producir energía, generalmente a través de la combustión. Los combustibles pueden ser líquidos, sólidos o gaseosos y se utilizan en diversos tipos de maquinaria, vehículos y sistemas para generar energía que permita su funcionamiento. En el contexto de nuestro sistema, los combustibles se gestionan a través del consumo registrado por los activos, ya sea en galones por hora o kilómetros por galón. Este seguimiento permite evaluar la eficiencia operativa y el desempeño de los activos, optimizando su uso de combustible y mejorando la planificación de mantenimiento.


### Parametrización Tipos de Combustible

- Vaya a la sección configuración en el módulo de <a class="btn cl-white bg-blue px-3">Infraestructura</a>
e ingrese a la tabla de Combustible.
- Registre los tipos de combustibles disponibles (diésel, gasolina, gas natural, etc.).
- Asigne a cada Activo el tipo de consumo que tenga en su ficha técnica (kms/galón ó Galones/Hora)



### Parametrizaciones adicionales

- Diríjase a la configuración de contratos en el módulo de <a class="btn cl-white bg-blue px-3">Infraestructura</a> e ingrese a la tabla de Contratos.
- Parametrice en la ficha técnica del Activo si consume kms/galon ó galones/hora.


### Beneficios del módulo


- Mejora la eficiencia operativa mediante el monitoreo preciso del consumo de combustible.
- Reduce costos asociados a consumos excesivos o anómalos.
- Facilita la planificación y optimización de rutas.
- Genera informes detallados para una mejor toma de decisiones.



## Ventana Visor


La forma de ingresar a la ventana principal o al visor del módulo es dando un clic en el menú principal en la opción  <a class="btn cl-white bg-blue px-3"> Combustibles </a>, como se indica en el siguiente ejemplo:

![Procesar imagen](../../assets/images/cap18/chp18_img01.png)
_**Imagen 1.** Combustibles - Ir a Combustibles_

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado, al igual que los demás módulos, es posible desplazarse entre páginas <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-left"> </span></a> <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-right"> </span></a>. 

### Subgrupo 


Esta funcionalidad se ubica en la parte superior derecha del visor, representado por medio del ícono <span class="mdi mdi-filter-variant"></span>. Se usa para filtrar grupos de registros o abastecimientos que cumplen con un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los consumos del mes o de un determinado período. 

![Procesar imagen](../../assets/images/cap18/chp18_img02.png)
_**Imagen 2.** Combustibles - Ir a Subgrupo_


Al ingresar al subgrupo, se muestran los siguientes criterios de búsqueda.  Cada uno aparece inicializado en un valor global que permite mostrar todos los abastecimientos. Lo que significa que de no escoger un criterio se obtiene como resultado del  subgrupo el mismo conjunto de todos los registros de abastecimientos.

**AM** mantiene activo cualquier subgrupo visualizandose el ícono con una pelota de color rojo <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>; esto indica que lo que se visualiza en el visor es un subgrupo hasta que el usuario lo modifique o restablezca los valores estándar. 

Se da una explicación breve de cada criterio:

![Procesar imagen](../../assets/images/cap18/chp18_img03.png)
_**Imagen 2.** Combustibles - Subgrupo_


**1. FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO AL COMBUSTIBLE**

**AC - Alias:** Este campo filtra los registros activos para el o los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC – Cód. de Barras Int.:** Permite seleccionar los registros que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo y que posea una Orden.

**AC – Cód. de Barras Prov.:** Permite seleccionar los  registros asociados a un Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.


**AC - Código:** Esta selección agrupa los abastecimientos cuyos Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todas los abastecimientos cuyo código de Activo inicia por 341. Si se escribe %1 se seleccionan todas las OTs cuyo código de Activo finaliza en un “1”. El porcentaje (%) es un carácter comodín que significa “todos”. También, es posible seleccionar el Activo a través del visor del módulo de Activo. Para ello se da un clic sobre el icono <span class="mdi mdi-filter-variant"></span> que se encuentra al lado del campo. Acto seguido se muestra la ventana de visor de Activos independiente. Allí, una vez se encuentra el Activo, se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">Aceptar</a> o se hace doble clic sobre el registro seleccionado. Inmediatamente este código aparece automáticamente en el campo.

**AC-Descripción:** Agrupa los registros asociados a los Activos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**AC-Estado:** Filtra los registros de acuerdo con el “Estado” de un Activo/Equipo u objeto de mantenimiento que se encuentre en estado “activo”.

**AC-Número Activo Fijo:** Este campo filtra los registros para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Referencia:** Agrupa los registros para el o los Activos cuya Referencia  corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Serial:** Esta alternativa permite filtrar los registros de acuerdo con el número serial del Activo objeto de mantenimiento, el campo acepta comodines (%).

**AC-Ubicación Física:** Permite la selección de los consumos cuyo Activo se encuentre en una Ubicación Física determinada. Existen dos formas de definir la Ubicación Física del Activo. La primera es seleccionando una de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span>, el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre de la Ubicación Física utilizando comodines (%) lo cual, también hace posible seleccionarun consumo cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona los registros con Activos cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona los consumos  asociados a los Activos que se encuentran asociados al tipo ingresado por el usuario.



**2. FILTRAR POR CAMPOS DEL CONSUMO**

**Vale:** Agrupa los consumos según el vale o comprobante ingresado en el campo. Este campo permite usar comodines (%).

**Referencia:** Filtra según el número o código único que asignada a una carga de combustible. Este campo permite usar comodines (%).

**Contrato:** Filtra los registros cuyo contrato para combustibles se defina en este campo.

**Conductor:** Este campo desplegable selecciona los registros o consumos cuyo conductor (Responsable Interno - RI) se defina en este campo.

**FF de Consumo:** Agrupa los registros según el rango de fechas que se defina en el campo **Desde** y **Hasta:**.



## Ventana Detalle


Cuando se ingresa a un consumo o cuando se crea uno nuevo el sistema muestra la información detallada o relevante de la carga de combustible. Para acceder a esta ventana hay dos formas:

- En la ventana visor desde el botón <a class="btn cl-blue bg-white px-3"> NUEVO</a>, donde se debe diligeciar el formulario.

![Procesar imagen](../../assets/images/cap18/chp18_img04.png)
_**Imagen 4.** Combustibles - Crear nuevo registro_


- Desde un clic a cualquiera de los registros se visualiza la información detallada. 



![Procesar imagen](../../assets/images/cap18/chp18_img05.png)
_**Imagen 4.** Combustibles - Formulario_


En la gráfica anterior, Ventana Detalle del abastecimiento se aprecian todos sus componentes  y sus respectivos contenidos.

A continuación se explican brevemente los campos que componen el registro. 

- **Datos de Control de Consumo**

**Vale de Consumo:** Es un documento o comprobante que se emite cuando se realiza un abastecimiento de combustible. Donde se detallan aspectos importantes, este campo es obligatorio. 

**Contrato:** Es un campo despegable que muestra aquellos contratos asociados a los abastecimientos o consumos (definido en la ficha técnica del contrato desde su respectiva tabla en la <a class="btn cl-white bg-blue px-3">Infraestructura</a>). 

**Referencia:** Es un número o código único que se asigna a cada transacción o abastecimiento de combustible. 

- **Datos del Vehiculo**


**Código del Activo** Es un campo donde debe estar registrado el Activo/Equipo.  Se debe usar el subgrupo <span class="mdi mdi-filter-variant icon white"></span>. 
Continue dando clic sobre el subgrupo y en la ventana ventana de Activos que se despliega, también es posible hacer búsquedas o subgrupo. Seleccione el Activo de interés con un doble clic o accione el botón 
<a class="btn cl-blue bg-white px-6"> ACEPTAR </a> como se muestra en la siguiente imagen:


![Procesar imagen](../../assets/images/cap18/chp18_img06.png)
_**Imagen 5.** Combustibles - Seleccionar Activo_

**Conductor:** Se refiere al responsable del Activo/Vehículo. Es un campo desplegable que lista los Responsables Internos (RI) en la tabla de Terceros en <a class="btn cl-white bg-blue px-3">Infraestructura</a>. 

**Kilómetros recorridos:** Es un campo de sólo números que indica los kilómetros o las horas trabajadas hasta el abastecimiento actual. 

_**Nota:** El kilometraje o los galones por hora se configuran en la ficha técnica del Activo. De esta manera el nombre del campo cambia a Kilómetros recorridos u Horas Trabajadas_ 

- **Datos del Consumo**

**Fecha del consumo:** Indica la fecha del abastecimiento o carga del combustible. 

**Tipo de combustible:** Este campo lista los tipos de combustibles configurados en la tabla de Combustible en <a class="btn cl-white bg-blue px-3">Infraestructura</a>.

**Cantidad Consumida:** Este campo debe indicar la cantidad del abasteciiento según la unidad de medida ( litros, galones). 

**Unidad de Consumo:** Se listan las unidades de medida o cantidad estándar que se hayan marcado para combustible en la tabla de unidades de medida en <a class="btn cl-white bg-blue px-3">Infraestructura </a>.

**Costo Unitario:** Se refiere al valor o costo de la cantidad suministrada. 

**Costo Total de Consumo:**  Es el producto de la cantidad consumida por el costo unitario.

Para finalizar accione el botón 
<a class="btn blue">INSERTAR <span class="mdi mdi-plus-circle-outline"></span></a> o si está actualizando un registro el botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>. 

Hay otras funcionalidades para visualizar la información de abastecimientos y cargas de combustible:


## Exportar 


Esta opción <span class="mdi mdi-download"></span> permite la exportación de los registros de combustibles, bien sea el total de ellas o provenientes de un subgrupo a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación:

![Procesar imagen](../../assets/images/cap18/chp18_07.png)
_**Imagen 6.** Combustibles - Ventana Exportar_

Al accionar el botón <a class="btn bg-gray cl-black">EXPORTAR</a> se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los registros de cualquier tabla contenidos en el visor a un archivo plano, para luego ser analizados.


Adicional, es posible exportar todos los campos de la ventana Visor de cualquier tabla tanto para un subgrupo como para todos los registros existentes en la base de datos. 


Antes de exportar se encuentran dos opciones para exportar, se debe seleccionar una de ellas, de lo contrario se produce un bloqueo de la ventana:

<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Visor</span></a>: Esta opción permite hacer una exportación de todos los registros de la tabla que están seleccionadass en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.



<a class="btn cl-gray bg-white"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Exportar Todos Los Registros </span></a>: Con esta opción se exportan todos los registros de la tabla existentes en la base de datos, sin importar si se ha realizado un subgrupo.

Para continuar, el siguiente botón ya viene seleccionado por defecto <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>, esto significa que exportará todos los campos de los registros, sin embargo, el usuario también puede escoger los campos que desee exportar, para esto haga clic nuevamente en el campo <a class="btn cl-gray"><span class="mdi mdi-checkbox-blank-outline"> Exportar Todos Las Columnas </span></a>. Seleccione lo campos que desee exportar, luego, accione el botón <a class="btn bg-gray cl-black">EXPORTAR</a> y espere a que el archivo se encuentre listo para descargarlo y finalice accionando <a class="btn bg-gray cl-black">DESCARGAR</a>:



![Procesar imagen](../../assets/images/cap18/chp18_08.png)

_**Imagen 7.** Combustibles - Descargar Exportación_


## Reportes

Este comando <span class="mdi mdi-printer"></span>  permite visualizar los reportes o informes de la información relacionada a los Comsbustibles. Existen los siguientes tipos de reportes básicos disponibles:

![Procesar imagen](../../assets/images/cap18/chp18_09.png)

_**Imagen 8.** Combustibles - Reportes_

Los anteriores reportes pueden ser  seleccionados para uno o varios registros:

**<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Todos los Registros </span></a>** Con esta opción se imprimen todos los reportes de abastecimientos existentes en la base de datos, sin importar si se ha realizado un subgrupo.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Registros del Visor </span></a> Esta opción permite hacer una impresión de todos los abastecimientos que están seleccionados en la Ventana Visor, es decir los registros que están seleccionados en el subgrupo actual.

<a class="btn cl-gray bg-white btn-rounded"><span class="mdi mdi-circle cl-blue pr-1"></span><span class="pr-1"> Registro seleccionado </span></a>: Esta opción permite hacer una impresión del abastecimiento que esta seleccionado en la Ventana Visor (el cursor verde se encuentra sobre él).

**Subtítulo:** En este campo es posible registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de títulos estándar.

Para visualizar los reportes, se da un clic sobre el reporte y luego al botón <a class="btn bg-gray cl-black">IMPRIMIR</a>.

Para exportar el reporte accione el botón <a class="btn bg-gray cl-black">EXPORTAR</a>. Esto descarga automáticamente en la estación cliente el reporte en formato excel.

>**Nota:** Para la explicación de la nomenclatura de los códigos de reportes, remítase a la sesión del centro de ayuda **Trabajando con AM- Generalidades**. 


