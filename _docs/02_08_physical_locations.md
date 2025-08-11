---
title: Ubicaciones Físicas
subtitle: Se explican las ubicaciones físicas (UF), alcance y funcionalidad.
tags: [setup]
author: win
order: '02_08'
media: "../../assets/images/docs/"
---

Es la lista de las áreas físicas  que conforman el **“Layout”** de la planta de producción (Industria, Manufactura) o de la planta de servicios (Hoteles, Hospitales, Banca) o simplemente de las facilidades que conforman las instalaciones que son Objetos de mantenimiento o donde se encuentran los Activos.

El concepto de Ubicaciones Físicas es netamente de **geografía**, diferenciado completamente del concepto de Activo y de Centro de Costo, además la ubicación física puede estar en forma activa o inactiva dentro de **AM**. En ocasiones un Centro de Costo corresponde a una Ubicación Física pero en muchas otras no es así. De igual forma en ocasiones un Activo/Equipo o unidad funcional caracteriza a la ubicación física pero en muchas otras no. Por esta razón los tres conceptos se definen independientemente en **AM** con la posibilidad de relacionarlos en distintos contextos.

Para ilustrar mejor este concepto definimos a continuación algunos ejemplos de Ubicaciones Físicas.

- Planta de Acabados.
- Empaque Planta de Acabados.
- Pesaje Edificio de Administración.
- Edificio de Administración, Oficinas.
- Edificio de Administración. Laboratorio Químico.
- Edificio de Administración. Laboratorio Textil.
- Almacén General.
- Almacén de Materia Prima.
- Almacén de Materiales y Repuestos.
- FC-Fundición.
- FC-Fundición. Fleje FC-Fundición. Hornos.
- FC-Fundición. Línea 1.
- FC-Fundición. Línea 1.Fresado.
- FC-Fundición. Línea 2.
- FC-Fundición. Línea 2.Fresado.
- FC-Fundición. Puente Grúa.
- FC-Fundición. Sostenimiento.

Se recomienda utilizar los nombres de las Ubicaciones Físicas que la cultura  empresarial ha acostumbrado manejar. Existe disponible un espacio de 60 caracteres en la descripción de la Ubicación Física. Es posible también mezclar una porción de código y lenguaje natural.
 
En el ejemplo anterior FC es el apócope de una planta en una fábrica. Esta planta a su vez está conformada por varios departamentos de proceso, uno de los cuales es Fundición, que a su vez se compone por varias secciones como Fleje,  Hornos, las Líneas de proceso y la sección de Sostenimiento.

Cuando la Ubicación Física es un criterio para seleccionar en un subgrupo en Activos o en Órdenes de Trabajo activas o históricas, es posible referenciar una Ubicación Física global, así:

**FC-Fundición%:** Se refiere a todas las secciones que conforman el departamento de fundición.

**FC%:** Se refiere a todas las secciones de todos los departamentos de la Planta FC.

El registro  de las Ubicaciones Físicas es muy importante, pues ellas serán  invocadas desde muchas ventanas de otras opciones del Menú Principal como Activos, Almacenes, Órdenes de Trabajo, Solicitudes de Servicio, Paros e Historia de Mantenimiento.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_34.png"
  alt:"Ventana Detalle UF"
%}

En la gráfica anterior, Ventana Detalle Ubicaciones Físicas, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Técnico del Tercero seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

**Código UF:** Se define un código o indicativo único para la ubicación física, que puede ser un consecutivo. Ejemplo: UF-001, el cual UF corresponde a las abreviaturas de Ubicación Física y 001 corresponde al primer registro.

**Nombre UF:** Se hace el registro de la descripción de la Ubicación Física. El campo tiene hasta un máximo de 50 caracteres.

**Área (opcional):** Se escribe el área de la Ubicación Física. Este campo es numérico.

**Unidad de Medida Área:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Capacidad (opcional):** Se escribe la capacidad de la Ubicación Física, si es requerida, es un concepto de importancia relativa a la organización. Por ejemplo, información sobre capacidad en número de personas o de escritorios o de computadores o de máquinas-herramienta o de cabezas de ganado o árboles puede ser incluida aquí.

**Unidad de Medida Capacidad:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Estado:** El campo estado se utiliza para definir si la UF actual se encuentra Activa o Inactiva. Este Estado se utiliza para posibilitar o inhabilitar el despliegue de UF en otros contextos (Activos, OT, PM, SS, etc.). De esta forma, una UF inactiva NO aparece al intentar crear Activos, OT u otros.

> _**Nota:** La dirección y la ciudad son campos que son configurados en el módulo de <a class="btn cl-white bg-blue px-6"> Administración </a> en la transacción Valores por Defecto._

### Subgrupo Ubicaciones Físicas

Se usa para seleccionar grupos de Ubicaciones Físicas que cumplen con un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono de filtro <span class="mdi mdi-filter-variant"></span>, ubicado en la parte superior derecha de la ventana Visor de Ubicaciones Físicas.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_35.png"
  alt:"Ventana Visor UF"
%}

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas  las Ubicaciones Físicas. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todas las Ubicaciones Físicas.

El programa permite entonces hacer selección de un grupo de Ubicaciones Físicas:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_36.png"
  alt:"Subgrupo UF"
%}

Los campos de datos que constituyen los criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes:

**Área:** Filtra las UF que tienen la cantidad de área ingresada en el campo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_37.png"
  alt:"Subgrupo UF Criterio Área"
%}

**Capacidad:** Filtra las UF que tienen la cantidad de capacidad ingresada en el campo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_38.png"
  alt:"Subgrupo UF Criterio Capacidad"
%}

**Código UF:** Esta selección agrupa las UF relacionados por su código. **Por ejemplo:** si se escribe UF-12%, el sistema localiza aquellas UF cuyo código empieza por UF-12. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_39.png"
  alt:"Subgrupo UF Criterio Código UF"
%}

**Estado:** Permite la selección de las UF de acuerdo al estado de Activo o Inactivo. El estado de las UF es importante para la selección en las listas desplegables.
**Por ejemplo:** Si una UF, tiene definido el Estado **“Inactivo**, esta no aparecerá en la lista de las Ubicaciones Físicas de los módulos de Activos, Solicitudes de Servicio, Paros, Órdenes de Trabajo, Historia y Almacén.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_40.png"
  alt:"Subgrupo UF Criterio Estado"
%}

**Nombre UF:** Selecciona las UF según criterios basados en su Nombre.
**Ejemplo:** %Planta% selecciona todas las UF en cuyo nombre, en cualquier parte, tengan la palabra **“Planta”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_41.png"
  alt:"Subgrupo UF Criterio Nombre UF"
%}

**Unidad de Medida Área:** Lista las Unidades de Medida registradas en la tabla de Unidades de Medida, se elige una de la lista. 

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono  <span class="mdi mdi-lock"></span>, a continuación este ícono se muestra abierto <span class="mdi mdi-lock-open-outline"></span> y permite escribir. Ejemplo, si se escribe metros%, el sistema entiende que debe seleccionar aquellas UF cuya unidad de medida comience por la palabra **“metros”**. El porcentaje a continuación, es un carácter comodín que significa **“todos”**, como se indica a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_42.png"
  alt:"Subgrupo UF Criterio Unidad de Medida Área"
%}

**Unidad de Medida Capacidad:** Busca las Ubicaciones Físcas que tengan definido este campo. Las Unidades de Medida que se despliegan en la lista están registradas en la tabla de Unidades de Medida. Se elige de la lista la Unidad de Medida deseada.

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono <span class="mdi mdi-lock"></span>, a continuación este ícono se muestra abierto <span class="mdi mdi-lock-open-outline"></span> y permite escribir. Ejemplo, si se escribe la palabra bloques%, el sistema realiza una búsqueda de aquellas UF que en cualquier parte del campo tengan el nombre de la palabra digitada, en este caso, la palabra **“bloques”**, como se muestra a continuación:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_43.png"
  alt:"Subgrupo UF Criterio Área"
%}

> **Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se acciona el botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> , en lugar de accionar el botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>.
