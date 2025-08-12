---
layout: page
title: ◼ Technosurveillance
order: '06_00'
media: "../../assets/images/docs/"
---
# Introducción 

El módulo de <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a> en **AM** está diseñado para facilitar la gestión y monitoreo de los eventos adversos relacionados con los dispositivos médicos registrados en el sistema. A través de este módulo, las instituciones de salud pueden automatizar el proceso de comparación de los eventos reportados por el INVIMA, optimizando la trazabilidad y el cumplimiento normativo de manera eficiente.


## Conceptos Básicos


### Características

- **Registro Detallado de Dispositivos Médicos:** Permite almacenar información clave como marca, modelo y código de registro sanitario de los dispositivos médicos.

- **Barrido Histórico:** Opción para realizar un análisis completo desde una fecha específica (por ejemplo, un rango de trimestre) hasta la actualidad.

- **Extracción Automática de Información:** Conexión directa con el sitio web del INVIMA para extraer datos sobre eventos adversos.

- **Comparación Inteligente:** Cruza las alertas publicadas por INVIMA con los activos registrados en **AM** utilizando el parámetro principal como el registro sanitario.

- **Gestión de Alertas:** Visualización detallada de alertas, incluyendo ficha técnica del activo, descripción de la alerta y opción de descarga de la alerta en formato PDF.

- **Historial de Actividades:** Registro editable de comentarios y acciones tomadas frente a cada alerta.


- **Seguimiento de Incidentes:** Monitoreo continuo del estado de cada alerta a través de indicadores:  Estados de Alertas, Activos y generación automática de Órdenes de Trabajo. 



### Beneficios 

- **Eficiencia Operativa:** Automatización de la extracción de datos y generación de reportes, reduciendo tiempos de gestión.

- **Gestión Integral de Riesgos:** Identificación y seguimiento proactivo de dispositivos médicos afectados por alertas.

- **Cumplimiento Normativo:** Facilita la gestión y documentación requerida para cumplir con los estándares regulatorios.


- **Toma de Decisiones Informadas:** Proporciona información detallada y actualizada para evaluar riesgos y priorizar acciones correctivas.


- **Optimización de Recursos:** Centraliza la información clave, minimizando esfuerzos duplicados y mejorando la coordinación entre equipos.



- **Visibilidad y Transparencia:** Permite el acceso a un historial detallado de incidentes, acciones tomadas y estados de alerta.


- **Facilidad de Uso:** Interfaz intuitiva con opciones claras para buscar alertas, registrar incidentes y generar informes.

### Requerimientos iniciales 

- Parametrizar la compañía como Biomédica, habilitar permisos del módulo de Tecnovigilancia. 

- Los dispositivos médicos deben estar registrados en AM, incluyendo su marca, modelo y registro sanitario.

- Se sugiere realizar una búsqueda del último trimestre si es la primera vez que se utiliza el módulo.

- Establecer un proceso periodico para actualizar la información.


### Estracción de Eventos Adversos



El usuario debe seleccionar el periodo de tiempo deseado (por ejemplo, las fechas específicas de interés) en el módulo de <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a>
y presionar el botón <a class="btn cl-blue bg-gray px-6"> Iniciar Búsqueda </a>. 

Al realizar esta acción:

- El sistema AM  se conecta al sitio web del INVIMA.
- Extrae automáticamente la información de eventos adversos que coinciden con el periodo seleccionado.
- Almacena los eventos en el módulo de tecnovigilancia para análisis y gestión.


### Identificación de Activos con Alertas

Una vez extraída la información, el sistema compara las alertas publicadas por el INVIMA con los activos registrados en **AM** . Esta comparación se realiza utilizando el parámetro **registro sanitario INVIMA** de los dispositivos, identificando aquellos que coincidan con las alertas reportadas.

Cuando el usuario selecciona la opción <a class="btn cl-red bg-white px-6"> Activos con Alertas </a>, se abre una nueva ventana con un listado detallado de las coincidencias encontradas. Este listado incluye información clave como:


- Descripción de la alerta.
- Código del activo.
- Registro sanitario INVIMA.
- Proveedor asociado.


#### Visualización de la Ficha Técnica del Activo


En esta sección, el usuario puede consultar todos los datos relevantes del activo asociado a la alerta seleccionada. La ficha técnica incluye información como:


- **Código del Activo:** Identificador interno del activo dentro del sistema.
- **Ubicación Física:** Lugar donde se encuentra actualmente el activo.
- **Modelo:** Modelo específico del dispositivo médico.
- **Proveedor:** Empresa que suministró el activo.
- **Referencia del Proveedor:** Número o código que identifica el activo con el proveedor.
- **Número de Serie:** Identificador único del activo dentro del sistema del proveedor.


#### Información de la Alerta

La ventana también muestra información relevante de la alerta emitida por el INVIMA, como:

- **Descripción del Dispositivo Médico:** Detalle del dispositivo afectado por la alerta.
- **Fecha de Publicación:** Fecha en la que el INVIMA emitió la alerta.
- **Estado de la Alerta:** Indica si la alerta está abierta, cerrada, o en otro estado de gestión


#### Opción de Descargar la Alerta

El sistema incluye un link denominado “Descargar Alerta", que permite al usuario descargar la documentación oficial emitida por el INVIMA en formato PDF. Esto facilita tener acceso a la fuente oficial de la información para revisión, impresión o respaldo.


#### Sección de Comentarios

En esta sección, el personal encargado puede registrar información sobre las acciones tomadas en relación con la alerta. Estas acciones pueden incluir medidas correctivas, preventivas, o cualquier otra actividad relacionada con el manejo de la alerta.
El campo de comentarios es editable y permite mantener un historial de actividades gestionadas para cada alerta.


#### Procedimiento Inicial y Mantenimiento
Después de analizar las coincidencias, registrar las acciones tomadas en el campo de “Comentarios”.
Cada alerta debe cerrarse con un estado definido: "Aplica" o "No Aplica". Las alertas aplicadas deben incluir una acción antes de cerrarse.


#### Seguimiento de Incidentes

Los responsables de mantenimiento biomédico pueden seguir el estado de cada incidente, asegurándose de que se tomen las acciones correctivas y preventivas necesarias.





## Ventana Principal

A esta ventana visor se llega accionando el módulo <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a> como se muestra a continuación:


![Procesar imagen](../../assets/images/cap17/chp17_img01.png)
_**Imagen 1.** Tecnovigilancia - Ir a Analizar_


Luego, el usuario debe ingresar el rango de fechas a analizar y continuar accionando el botón <a class="btn cl-blue bg-gray px-6"> Iniciar Búsqueda </a>: 

![Procesar imagen](../../assets/images/cap17/chp17_img02.png)
_**Imagen 2.** Tecnovigilancia - Iniciar búsqueda_


Una vez el sistema haga la carga, accione el botón <a class="btn cl-red bg-white px-6"> Activos con Alertas </a>:

![Procesar imagen](../../assets/images/cap17/chp17_img03.png)
_**Imagen 3.** Tecnovigilancia - Iniciar búsqueda_

De esta manera, el sistema muestra los Activos relacionados con la alerta sanitaria:

![Procesar imagen](../../assets/images/cap17/chp17_img04.png)
_**Imagen 4.** Tecnovigilancia - Resultado búsqueda_


A continuación se da una explicación de los componentes de la ventana principal:

### Indicadores 

En la parte superior derecha se ubica el  icono <span class="mdi mdi-message-alert"></span>, esto permite visualizar y hacer gestión inmediata el estado de las alertas, los colores son:

- **Rojo:** Alerta aplica
- **Verde:** Alerta no aplica
- **Negro:** Alerta Abierta 
- **Azul:** Alerta Cerrada


>**Nota:** Por defecto, el sistema asigna los indicadores Alerta No Aplica y Alerta Abierta. 


### Subgrupo


Esta función  <span class="mdi mdi-filter-variant"></span> permite filtrar información precisa y detallada acorde a un conjunto de criterios, con el fin de hacer análisis y gestión específica, para ellos diríjase a la parte superior derecha y accione el ícono:


![Procesar imagen](../../assets/images/cap17/chp17_img05.png)
_**Imagen 5.** Tecnovigilancia - Ir a Subgrupo_

Cada criterio trabaja en conjunto con los demás, con el operador intersección (Combinación de criterios).

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Activos. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto de todos los Activos. Para ver si un subgrupo está activo el ícono se visualiza con una pelota de color rojo <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>; esto indica que lo que se visualiza en el visor es un subgrupo hasta que el usuario lo modifique o restablezca los valores estándar. Se muestra un ejemplo:


![Procesar imagen](../../assets/images/cap17/chp17_img06.png)
_**Imagen 6.** Tecnovigilancia - Subgrupo_


>**Nota:** La imagen anterior, muestra que se observa 1 registro o alerta de un total de 17 Activos con alerta. Esta fracción al igual que el icono indican que hay un subgrupo activo.  



El programa permite entonces hacer selección de un grupo de Activos de acuerdo con los criterios de la  ventana. Los campos que constituyen los criterio de selección haciendo parte de la Ventana Subgrupo de Tecnovigilancia, sobre cada uno se da una explicación:  



![Procesar imagen](../../assets/images/cap17/chp17_img07.png)
_**Imagen 7.** Tecnovigilancia - Subgrupo_

**Código:** Esta selección agrupa los Activos/Equipos relacionados, por su código. Por ejemplo si se escribe **2101%**, se seleccionan todos los Equipos cuyo código inicia por 2101. El porcentaje es un carácter comodín que significa **“todos”.**


**Código INVIMA:** Filtra aquellos Activos con una parte o el número completo del registro INVIMA. Este campo acepta comodines (%).


**Descripción:** Selecciona los Activos/Equipos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos/Equipos en cuya descripción, en cualquier posición, tengan la palabra  “Motor”.

**Fabricante:** Permite seleccionar los Activos/Equipos de  acuerdo con un determinado Fabricante. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.


**Marca:** Esta opción permite realizar un filtro de los Activos/Equipos que tengan asignada la Marca que se especifica en este campo.

**Modelo:** Permite realizar un Subgrupo de Activos/ Equipos que tengan asignado el Modelo que se especifica en este campo.

**Proveedor:** Permite seleccionar los Activos/Equipos según un determinado Proveedor. Esta opción también permite el  uso de comodines y funciona igual que en los casos anteriores.

**Referencia:** Permite seleccionar los Activos/Equipos según la referencia definida en su ficha técnica. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.


**Serial:** Esta alternativa permite seleccionar un Activo/Equipo de acuerdo con su número Serial.



>**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos, se pueden utilizar uno o varios de estos criterios simultáneamente. También se permite la unión de selecciones, es decir, después de haber realizado una búsqueda de un criterio, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> , en lugar de darlo al botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>. Utilice el 
<a class="btn white">MENOS <span class="mdi mdi-minus-circle"></span></a> para el caso contrario; restar registros a un subgrupo. 


### Ventana Detalle 

Para ingresar al detalle del Activo y hacer gestión de la alerta ingrese dando un clic sobre el registro en el visor, el cual muestra la siguiente ventana detalle:


![Procesar imagen](../../assets/images/cap17/chp17_img08.png)
_**Imagen 8.** Tecnovigilancia - Ventana Detalle_


El usuario puede actualizar el estado de la alerta del Activo por medio del botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>.  En caso de aplicar accione el switch **No Aplica/Aplica** y guarde los cambios:


![Procesar imagen](../../assets/images/cap17/chp17_img09.png)
_**Imagen 9.** Tecnovigilancia - Actualizar Alerta_

A medida que se actualizan las alertas se actualizan los indicadores:


![Procesar imagen](../../assets/images/cap17/chp17_img10.png)
_**Imagen 10.** Tecnovigilancia - Alerta_


De esta manera al ingresar se visualizan los siguientes detalles para la alerta que aplica:



![Procesar imagen](../../assets/images/cap17/chp17_img11.png)
_**Imagen 11.** Tecnovigilancia - Detalle Alerta_

Es posible hacer la visualización completa del INVIMA accionando el botón <a class="btn cl-blue bg-gray hite px-3"> Visualizar Alerta </a>:


![Procesar imagen](../../assets/images/cap17/chp17_img12.png)
_**Imagen 12.** Tecnovigilancia - Detalle Alerta INVIMA_


Es necesario que se registren los comentarios y las acciones realizadas con respecto a la alerta, accionando el botón <a class="btn cl-blue bg-gray hite px-3"> Agregar Comentario</a> y <a class="btn cl-blue bg-gray hite px-3"> Agregar Acción Realizada </a>:



![Procesar imagen](../../assets/images/cap17/chp17_img13.png)
_**Imagen 13.** Tecnovigilancia - Agregar Comentarios y Acciones_

Los comentarios van quedando agregados en una ventana tipo chat:

![Procesar imagen](../../assets/images/cap17/chp17_img14.png)
_**Imagen 14.** Tecnovigilancia - Agregar Comentarios y Acciones_

Además, una vez que una alerta aplique y se encuentre abierta se genera una Orden de Trabajo, todo esto permite agregar documentación y trazabilidad a la gestión de la alerta:

![Procesar imagen](../../assets/images/cap17/chp17_img15.png)
_**Imagen 15.** Tecnovigilancia - Generación de OT_

En el Activo también se visualiza el indicador de alerta sanitaria INVIMA:



![Procesar imagen](../../assets/images/cap17/chp17_img16.png)
_**Imagen 16.** Tecnovigilancia - Indicador Alerta Activos_


>**Nota:** Para actualizar la alerta ingrese nuevamente al módulo de <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a> y accione nuevamente el botón <a class="btn cl-red bg-white px-6"> Activos con Alertas </a>.



Para dar cierre actualice la alerta accionando el switch Cerrada/Abierta y a medida que se cierren las alertas los indicadores se actualizan:


![Procesar imagen](../../assets/images/cap17/chp17_img17.png)
_**Imagen 17.** Tecnovigilancia - Cierre Alertas_

<br>

![Procesar imagen](../../assets/images/cap17/chp17_img18.png)
_**Imagen 18.** Tecnovigilancia - Cierre Alertas Activos_






