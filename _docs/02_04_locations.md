---
title: Ubicaciones Físicas
subtitle: Las ubicaciones físicas corresponden a los sitios geográficos o áreas donde se encuentran los activos, equipos, objetos de mantenimiento y repuestos.
tags: [setup]
author: win
order: 02_04
---
Es la lista de las áreas físicas que conforman el **“Layout”** de la planta de producción (Industria, Manufactura) o de la planta de servicios (Hoteles, Hospitales, Banca) o simplemente de las facilidades que conforman las instalaciones que son objetos de mantenimiento.

El concepto de Ubicaciones Físicas es netamente de geografía, diferenciado completamente del concepto de Activo y de Centro de Costo, además la ubicación física puede estar en forma activa o inactiva dentro de **AM**. En ocasiones un Centro de Costo corresponde a una Ubicación Física pero en muchas otras no es así. De igual forma en ocasiones un Activo/Equipo o unidad funcional caracteriza a la ubicación física pero en muchas otras no. Por esta razón los tres conceptos se definen independientemente en **AM** con la posibilidad de relacionarlos en distintos contextos.

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

Se recomienda utilizar los nombres de las Ubicaciones Físicas que la cultura  empresarial ha acostumbrado manejar. Existe disponible un espacio de cincuenta caracteres en la descripción de la Ubicación Física. Es posible también mezclar una porción de código y lenguaje natural.

En el ejemplo anterior FC es el apócope de una planta en una fábrica. Esta planta a su vez está conformada por varios departamentos de proceso, uno de los cuales es Fundición, que a su vez se compone por varias secciones como Fleje,  Hornos, las Líneas de proceso y la sección de Sostenimiento.

Cuando la Ubicación Física es un criterio para seleccionar en un subgrupo en Activos o en Órdenes de Trabajo activas o históricas, es posible referenciar una Ubicación Física global, así:

**FC-Fundición%:** Se refiere a todas las secciones que conforman el departamento de fundición.

**FC%:** Se refiere a todas las secciones de todos los departamentos de la Planta FC.

El registro  de las Ubicaciones Físicas es muy importante, pues ellas serán  invocadas desde muchas ventanas de otras opciones del Menú Principal como Activos, Almacenes, Órdenes de Trabajo, Solicitudes de Servicio, Paros e Historia de Mantenimiento.

![Procesar imagen](../../assets/images/cap02/chp02_img12.png)
_**Imagen 12.** Ventana Detalle UF_

En la gráfica anterior, Ventana Detalle Ubicaciones Físicas, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Técnico del Tercero seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación:

**Código UF:** Se define un código o indicativo único para la ubicación física, que puede ser un consecutivo. Ejemplo: UF-001, el cual UF corresponde a las abreviaturas de Ubicación Física y 001 corresponde al primer registro.

**Nombre UF:** Se hace el registro de la descripción de la Ubicación Física. El campo tiene hasta un máximo de 50 caracteres.

**Área (opcional):** Se escribe el área de la Ubicación Física. Este campo es númerico.

**Unidad de Medida Área:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Capacidad (opcional):** Se escribe la capacidad de la Ubicación Física, si es requerida, es un concepto de importancia relativa a la organización. Por ejemplo, información sobre capacidad en número de personas o de escritorios o de computadores o de máquinas-herramienta o de cabezas de ganado o árboles puede ser incluida aquí.

**Unidad de Medida Capacidad:** Se elige la Unidad de Medida utilizada para definir la capacidad del área; para ello se selecciona uno de los valores predefinidos en esa tabla.

**Estado:** El campo estado se utiliza para definir si la UF actual se encuentra Activa o Inactiva. Este Estado se utiliza para posibilitar o inhabilitar el despliegue de UF en otros contextos (Activos, OT, PM, SS, etc.). De esta forma, una UF inactiva NO aparece al intentar crear Activos, OT u otros.

> **Nota:** La dirección y la ciudad son campos que son configurados en el módulo de Administración en la transacción Valores por Defecto.

### Subgrupo Ubicaciones Físicas

Se usa para seleccionar grupos de Ubicaciones Físicas que cumplen con un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al icono de filtro <span class="mdi mdi-filter-variant"></span>, ubicado en la parte superior derecha de la ventana Visor de Ubicaciones Físicas.

![Procesar imagen](../../assets/images/cap02/chp02_img13.png)
_**Imagen 13.** Ventana Visor UF_

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todas  las Ubicaciones Físicas. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todas las Ubicaciones Físicas.

El programa permite entonces hacer selección de un grupo de Ubicaciones Físicas:

![Procesar imagen](../../assets/images/cap02/chp02_img14.png)
_**Imagen 14.** Subgrupo UF_

Los campos de datos que constituyen los criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes:

**Área:** Filtra las UF que tienen la cantidad de área ingresada en el campo.

![Procesar imagen](../../assets/images/cap02/chp02_img15.png)
_**Imagen 15.** Subgrupo UF Criterio Área_

**Capacidad:** Filtra las UF que tienen la cantidad de capacidad ingresada en el campo.

![Procesar imagen](../../assets/images/cap02/chp02_img16.png)
_**Imagen 16.** Subgrupo UF Criterio Capacidad_

**Código UF:** Esta selección agrupa las UF relacionados por su código. **Por ejemplo:** si se escribe UF-12%, el sistema localiza aquellas UF cuyo código empieza por UF-12. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

![Procesar imagen](../../assets/images/cap02/chp02_img17.png)
_**Imagen 17.** Subgrupo UF Criterio Código UF_

**Estado:** Permite la selección de las UF de acuerdo al estado de Activo o Inactivo. El estado de las UF es importante para la selección en las listas desplegables.
**Por ejemplo:** Si una UF, tiene definido el Estado **“Inactivo**, esta no aparecerá en la lista de las Ubicaciones Físicas de los módulos de Activos, Solicitudes de Servicio, Paros, Órdenes de Trabajo, Historia y Almacén.

![Procesar imagen](../../assets/images/cap02/chp02_img18.png)
_**Imagen 18.** Subgrupo UF Criterio Estado_

**Nombre UF:** Selecciona las UF según criterios basados en su Nombre.
**Ejemplo:** %Planta% selecciona todas las UF en cuyo nombre, en cualquier parte, tengan la palabra **“Planta”**.

![Procesar imagen](../../assets/images/cap02/chp02_img19.png)
_**Imagen 19.** Subgrupo UF Criterio Nombre UF_

**Unidad de Medida Área:** Lista las Unidades de Medida registradas en la tabla de Unidades de Medida. Se elige de la lista la Unidad de Medida deseada.

![Procesar imagen](../../assets/images/cap02/chp02_img20.png)
_**Imagen 20.** Subgrupo UF Criterio Unidad de Medida Área_

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono <a class="btn">Candado</a>. A continuación este ícono se muestra abierto <span class="mdi mdi-lock-open-outline"></span> y permite escribir. Ejemplo, si se escribe metros%, el sistema entiende que debe seleccionar aquellas UF cuya unidad de medida comience por la palabra **“metros”**. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

**Unidad de Medida Capacidad:** Busca las Ubicaciones Físcas que tengan definido este campo. Las Unidades de Medida que se despliegan en la lista están registradas en la tabla de Unidades de Medida. Se elige de la lista la Unidad de Medida deseada.

![Procesar imagen](../../assets/images/cap02/chp02_img21.png)
_**Imagen 21** Subgrupo UF Criterio Área_

También se puede elegir la unidad de medida mediante el uso de comodines, para ello, se debe dar clic al icono <span class="mdi mdi-lock"></span>. A continuación este ícono se muestra abierto <span class="mdi mdi-lock-open-outline"></span> y permite escribir. Ejemplo, si se escribe la palabra sin porcentajes %, el sistema realiza una búsqueda de aquellas UF que en cualquier parte del campo tengan el nombre de la palabra digitada, en este caso, la palabra **“bloques”**.

> **Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn">Mas (+)</a>, en lugar de darlo al botón <a class="btn">Aceptar</a>.

## Almacenes

Es la tabla de Infraestructura en la que se definen los distintos Almacenes, Bodegas o Depósitos de: Materias Primas, Materiales y Repuestos o elementos generales de una organización.

El **AM** PRO es un sistema multicompañía y multialmacén, por tanto es posible definir múltiples almacenes en la base de datos para cada compañía.

El **AM** ST es un sistema monocompañía y multialmacén.

![Procesar imagen](../../assets/images/cap02/chp02_img22.png)
_**Imagen 22** Ventana Detalle IF Almacén_

En la gráfica anterior, Ventana Almacén, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Almacenes se encuentra la información relevante al Almacén seleccionado en el Visor.

A continuación se describen los campos que componen el registro:

**Código:** Este campo recibe un número de máximo dos dígitos, con el cual se identifica la bodega o Almacén de Equipos o repuestos.

**Nombre:** Se define el nombre del Almacén.

**Ubicación física:** Indica el sitio donde está ubicado el Almacén o bodega. Esta Ubicación Física se selecciona de la tabla de Ubicaciones Físicas previamente definidas.

**Tipo Costeo:** Aquí se define la forma como se costean los ítems, repuestos o materiales en el Almacén actual. Existen dos opciones:

La primera consiste en valorizar **todos** los ítems de un código según el costo del último reaprovisionamiento, en este caso se habla de valorizar por **Último Ingreso**.

La segunda opción **Promedio Ponderado**, consiste en valorizar todo el conjunto de ítems de un mismo código mediante el cálculo sencillo de un promedio ponderado.

Utilizar uno u otro método depende de si el Almacén es contable o no. Se recomienda utilizar el método de Promedio Ponderado si se trata de un Almacén contable. Si se trata de un Almacén no contable, es decir, cuando se considera que los ítems que lo conforman, al ser trasladados a esta bodega ya fueron consumidos contablemente, entonces se recomienda usar el método de costeo por Último Ingreso, en cuyo caso la elaboración y proyección de presupuestos puede arrojar información más realista, al tiempo que no existe el riesgo de la revalorización contable de los mismos ítems.

**Tipo Almacén:** Esta opción, de tipo combo, muestra dos ítems: Contable y No Contable.

Esta funcionalidad, permitirá a futuro definir si el Almacén seleccionado es Contable, es decir, tendrá una interacción con el sistema contable de la organización la cual generara un costo o factura de venta; y No Contable hace referencia al Almacén que guarda el inventario de Repuestos para simple funcionalidad del sistema **AM**. Por defecto, cuando se crea un almacén el tipo se define con NO CONTABLE.

**Almacén Corporativo:** Este switche indica si el almacén al cual se está haciendo referencia es el corporativo. Cuando se define si es el almacén corporativo, se declara con la palabra **“SI”**, en caso contrario se define con la palabra **“NO”**. Para definir el almacén corporativo se realiza en el módulo de Administración, en la opción de Valores por defecto, en la etiqueta General, existe la opción de **“Almacén corporativo”** con un combo desplegable para escoger cual es el almacén.

**Comentario:** Aquí se ingresan los comentarios sobre el Almacén, Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

## Unidades de Medida

Es la tabla que se encarga de la definición de los distintos tipos de unidades de medición con el objeto de que se estandarice su uso en dos aspectos: nombre de la unidad y su abreviatura. Las Unidades de Medida están agrupadas por el concepto Tipo, en el que se establece su categoría de medición: Longitud, superficie, volumen, peso y otra.

![Procesar imagen](../../assets/images/cap02/chp02_img23.png)
_**Imagen 23** Ventana Detalle IF Unidades de Medida_

En la gráfica anterior, Ventana Detalle Unidades de Medida, se aprecian sus componentes y sus respectivos contenidos. Indica  la información relevante a la Unidad de Medida seleccionada en el Visor.

A continuación se describen los campos que componen el registro:

**Nombre:** En este campo se escribe la nueva unidad de medida que se quiere definir.

**Abreviatura:** En este campo se detalla la abreviatura que identifica la unidad de  medida que se está definiendo.

**Tipo:** De acuerdo con la nueva unidad de medida se debe seleccionar el si corresponde a longitud, superficie, volumen, peso u otra.

### Monedas

Es la tabla en la que se establecen las distintas monedas a ser usadas en el sistema cuando se hace referencia al costo de compra o al costo vigente, de un Activo. Hasta este momento se trata de un medio de documentación sobre el costo indicado para Activos/Equipos.

![Procesar imagen](../../assets/images/cap02/chp02_img24.png)
_**Imagen 24** Ventana Detalle IF Monedas_

En la gráfica anterior, Ventana Detalle Monedas, se aprecian sus componentes y sus respectivos contenidos. Indica la información relevante a la Moneda seleccionada en el Visor.

A continuación se describen los campos que componen el registro:

**Nombre:** En este campo se registra el nombre de la moneda.

**Abreviatura:** En este campo se establece la abreviatura que identifica la moneda

## Contadores

En esta tabla de Infraestructura se registran los medidores o contadores de estado, que reflejan la cantidad de trabajo realizado por un Activo/Equipo. Los medidores o contadores más comunes son los horómetros, que reflejan en todo momento la cantidad en horas de trabajo realizadas, por el Activo/Equipo que lo posee. De igual forma, en la mayoría de los automotores existe otro medidor de uso bastante común, es el  contador de Kilómetros o Millas rodadas, que refleja la distancia recorrida a partir de un punto relativo, de interés para su propietario.

Cuando el sistema se inicializa, en la tabla de Contadores aparece una propuesta de contadores básicos, que puede ser modificada o complementada de acuerdo al interés de la compañía usuaria.

![Procesar imagen](../../assets/images/cap02/chp02_img25.png)
_**Imagen 25** Ventana Detalle IF Contadores_

En la gráfica anterior, Ventana Detalle Contadores, se aprecian sus componentes y sus respectivos contenidos. Indica la información relevante al Contador seleccionado en el Visor.

A continuación se describe el campo que compone el registro:

**Nombre del Contador:** En este campo se registra el nombre del contador

## Características

Es una tabla conformada por los nombres de las Características propias de los Activos/Equipos o de los Repuestos, que se utilizan al definir la porción variable de su ficha técnica. En esta tabla sólo se ingresan los nombres de las Características o los parámetros-características de los Activos/Equipos y Repuestos. Se cuenta con 30 dígitos para ingresar la característica deseada.

El valor y las unidades correspondientes a cada Característica se ingresan en la ficha técnica del Activo o del Repuesto.

La gama de Características depende del tipo de equipamiento de la empresa, por tanto es una tabla modificable o adecuable con gran facilidad.

Existen varios tipos de Características que se configuran según el equipo, al definir su ficha técnica. El primer tipo, el más común, corresponde a las de tipo Informativo o No Controlable, en el que van acompañadas, en la ficha técnica, por un valor  nominal y una unidad. El segundo tipo corresponde a las Controlables Cuantitativas, en el que además del valor nominal y una unidad, se acompañan por un rango de Tolerancia permitido.

Cuando se trata de Características de Repuestos solo existe un tipo de ellas y son las de tipo Informativo.

![Procesar imagen](../../assets/images/cap02/chp02_img26.png)
_**Imagen 26** Ventana Detalle IF Características_

En la gráfica anterior, Ventana Detalle Características, se aprecian sus componentes y sus contenidos.Indica la información relevante a la Característica seleccionada en el Visor.

A continuación se describe el campo que compone el registro.

**Nombre de la Característica:** En este campo se define la característica. La Caracterítica es a la vez, la clave de la tabla conformadas por los parámetros-características requeridos por los Equipos propios de la empresa.

## Centros de Costo

Es la primera tabla que aparece en el listado de Infraestructura, el Centro de Costo (CC) se refiere al área o departamento administrativo, operativo o productivo que recibe servicios de mantenimiento. Se refiere también a la definición contable de los departamentos o áreas responsables de Activos, Equipos o de Objetos de Mantenimiento y por ende de los costos de su mantenimiento.

![Procesar imagen](../../assets/images/cap02/chp02_img27.png)
_**Imagen 27** Ventana Visor IF Centros de Costo_

Los Centros de Costo se utilizan en **AM** para asociar los cargos, por distintos conceptos de costo de mantenimiento, a las Órdenes de Trabajo. Esta asociación posibilita generar múltiples reportes por actividades, costos o tipos de costos para los distintos Centros de Costo definidos en el sistema.

Es posible usar un Centro de Costo con el objeto de compendiar todos los trabajos relacionados a un Proyecto o a una Inversión. Para este caso se crea un nuevo CC, copiando su definición desde aquel que es el centro del Proyecto y se agrega a continuación, como parte del mismo CC, un número o código identificador del Proyecto o de la Inversión. En adelante toda OT que corresponda a tal Proyecto se asocia al nuevo CC.

En otro contexto, el concepto de Centros de Costo se asocia al concepto de Clientes. Se trata del caso en que una compañía prestadora de servicios de mantenimiento atiende a múltiples clientes y quiere llevar un control detallado de las actividades técnicas ejecutadas y los costos asociados a cada uno de ellos. En este caso el sistema posibilita el registro de datos adicionales sobre el Centro de Costo o Cliente; son ellos el nombre del contacto, su estado, una clasificación y datos generales para su ubicación.

![Procesar imagen](../../assets/images/cap02/chp02_img28.png)
_**Imagen 28** Ventana Detalle IF Centros de Costo_

En la gráfica anterior, Ventana Detalle Centros de Costo, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Centro de Costo seleccionado en el visor.

A continuación se describen los campos que componen el registro:

**Código CC:** En este campo se registra el código de cada Centro de Costo. La capacidad del campo es de 40 caracteres alfanuméricos.

**Código Sub CC:** En este campo se registra el Sub CC (si aplica) asociado al Centro de Costo. El Sub CC es un mecanismo para controlar las distintas porciones de costo dentro de un Centro de Costo a manera de cuentas internas.

**Descripción CC:** Se usa para escribir el nombre del Centro de Costo. Es posible, a gusto de la empresa usuaria, escribir los nombres de cada Centro de Costo en forma de título: La primera letra de cada nombre en mayúscula y las siguientes en minúsculas,  o todo en mayúsculas. Para la descripción se dispone de 60 caracteres alfanuméricos.

Si el Centro de Costo se refiere a un Cliente, en este campo se define el nombre de la empresa cliente.

**Tipo:** Se elige el tipo del Centro de Costo que aplique. Si el Centro de Costo se refiere a un Centro de Costo interno de la empresa usuaria, se elige el tipo Usuario. Si el Centro de Costo se refiere a un Centro de Costo de Mantenimiento y es interno de la empresa usuaria, se elige el tipo Mantenimiento. Si el Centro de Costo se refiere a un Cliente, se elige el tipo Externo.

**Responsable:** Aquí se define a la persona encargada de la responsabilidad o del manejo del Centro de Costo. Se define el Responsable para los Centros de Costo tipo Usuario y Mantenimiento.

**Contacto:** Si el Centro de Costo se refiere a un Cliente, aquí se define el nombre de la persona que representa a ese Cliente. Se define el Contacto para los Centros de Costo tipo Externo.

**CC Superior**: En este campo se define el Centro de Costo correspondiente a la jerarquía inmediatamente superior.

**Área/Depto:** Indica el área o departamento al cual pertenece el Centro de Costo respectivo. Si el Centro de Costo se refiere a un Cliente, aquí se define el grupo o sector de industria al que pertenece esa empresa Cliente.

**Ciudad (Opcional):** Este campo se usa para indicar la ciudad del Área o  Departamento responsable del Centro de Costo. Si el Centro de Costo se refiere a  un Cliente, aquí se define la ciudad de la dirección del Cliente.

**Dirección (Opcional):** En este campo se diligencia la dirección del Área o  Departamento al que pertenece el Centro  de Costo. Si el Centro de Costo se refiere a un Cliente, aquí se define la dirección del Cliente.

**Teléfono (Opcional):** En él se define el número del teléfono correspondiente al Centro de Costo. Si el Centro de Costo se refiere a un Cliente, aquí se detalla el teléfono del Cliente. Se debe recordar que al escribir un número telefónico los tres primeros dígitos que se escriben corresponden al indicativo de la ciudad. El programa automáticamente escribe estos tres dígitos dentro de un paréntesis. Los siguientes siete dígitos corresponden al número de teléfono y a partir del octavo dígito corresponde al número de la Extensión telefónica (si aplica). El programa automáticamente escribe la palabra Ext.

**Correo Electronico:** En este campo se escribe la dirección electrónica del Centro de Costo o del Responsable o Contacto del Centro de Costo.

**Estado:** Indica el estado en que se encuentra el Centro de Costo: Activo o inactivo.

**Clase:** Indica la clase a que pertenece el Centro de Costo: (Comercial), (Industrial), (Servicios), (Financiero),  (Educativo), (Gobierno) y (Otro).

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

### Subgrupo Centros de Costo

Se usa para seleccionar grupos de Centros de Costo que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al ícono de filtro <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Centros de Costo.

![Procesar imagen](../../assets/images/cap02/chp02_img29.png)
_**Imagen 29** Subgrupos Centro de Costo_

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Centros de Costo. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Centros de Costo.

El programa permite entonces hacer selección de un grupo de Centros de Costo de acuerdo con los criterios seleccionados en la siguiente ventana.

![Procesar imagen](../../assets/images/cap02/chp02_img30.png)
_**Imagen 30** Ventana Subgrupos Centro de Costo_

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes:

**Área/Depto:** Filtra los CC que tengan asignada el área o departamento de la institución ingresada en este campo.

![Procesar imagen](../../assets/images/cap02/chp02_img31.png)
_**Imagen 31** Subgrupo Criterio Área/Depto_

**CC Superior:** Permite filtrar por aquellos CC Superior que fueron asociados a los CC. Lista los CC creados en la tabla de Centros de Costos.

![Procesar imagen](../../assets/images/cap02/chp02_img32.png)
_**Imagen 32** Subgrupo CC Superior_

**Ciudad:** Filtra los CC que están asociados a la Ciudad especificada.

![Procesar imagen](../../assets/images/cap02/chp02_img33.png)
_**Imagen 33** Subgrupo Ciudad_

También se puede escribir la ciudad mediante el uso de comodines. Ejemplo, si se escribe Bog%, el sistema entiende que debe seleccionar aquellos CC cuya ciudad comience por la palabra  “Bog”. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

**Clase:** Filtra los CC que están asociados a una de las clases listadas.

![Procesar imagen](../../assets/images/cap02/chp02_img34.png)
_**Imagen 34** Subgrupo Clase_

**Código CC:** Esta selección agrupa los Centros de Costos relacionados por su código. Por ejemplo: si se escribe cont%, el sistema localiza aquellos CC cuyo código empieza por cont. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

![Procesar imagen](../../assets/images/cap02/chp02_img35.png)
_**Imagen 35** Subgrupo Código CC_

**Código Sub CC:** En  este campo se filtra por el Sub CC asociado a un Centro de Costo.

![Procesar imagen](../../assets/images/cap02/chp02_img36.png)
_**Imagen 36** Subgrupo Código Sub CC_

**Contacto:** Filtra los CC que tengan asociada a una persona externa como contacto. Ejemplo: %maria josé% selecciona todos los Centros de Costo cuyo Contacto, en cualquier parte, tengan la palabra **“maria josé”.**

![Procesar imagen](../../assets/images/cap02/chp02_img37.png)
_**Imagen 37** Subgrupo Contacto_

**Descripción CC:** Agrupa los CC cuya descripción corresponda a un Centro de Costo Interno o a un Cliente.

![Procesar imagen](../../assets/images/cap02/chp02_img38.png)
_**Imagen 38** Subgrupo Descripción CC_

**Dirección:** Permite filtrar por la dirección del Área o  Departamento asociada a los CC.

![Procesar imagen](../../assets/images/cap02/chp02_img39.png)
_**Imagen 39** Subgrupo Dirección_

**Correo Electrónico:** Filtra la dirección electrónica asociada a un CC.

![Procesar imagen](../../assets/images/cap02/chp02_img40png)
_**Imagen 40** Subgrupo Correo Electrónico_

**Estado:** Permite la selección de los CC de acuerdo al estado de Activo o Inactivo. El estado de los CC es importante para la selección en las listas  desplegables.
**Por ejemplo:** Si un CC, tiene definido el Estado  “Inactivo”, esta no aparecerá en la lista de los Contratos, Terceros, módulos de Activos, Kárdex, Programas, Solicitudes de Servicio, Paros, Órdenes de Trabajo, Historia y Administración.

![Procesar imagen](../../assets/images/cap02/chp02_img41.png)
_**Imagen 41** Subgrupo Estado_

**Responsable:** Filtra los CC (tipo: mantenimiento y usuario) cuyos responsables corresponden al diligenciado en el campo.

![Proccesar imagen](../../assets/images/cap02/chp02_img42.png)
_**Imagen 42** Subgrupo Responsable_

**Teléfono:** Filtra por el teléfono asociado a un CC.

![Procesar imagen](../../assets/images/cap02/chp02_img43.png)
_**Imagen 43** Subgrupo Teléfono_

**Tipo:** Agrupa los CC de acuerdo al tipo seleccionado.

![Procesar imagen](../../assets/images/cap02/chp02_img44.png)
_**Imagen 44** Subgrupo Tipo_

## Centros Responsables

Son los centros especializados, encargados de ejecutar labores de mantenimiento. Se incluyen tanto los Centros Responsables de Mantenimiento propios de la empresa como los externos a ella (Contratistas y Talleres Externos).

Se define a través de su código y descripción según costumbre en la empresa. El código tiene un espacio reducido compuesto de trece caracteres; esto debido a la necesidad de asociar posteriormente a cada Centro Responsable el Oficio o Especialidad, o los Oficios o Especialidades que le pertenecen.

Cuando se trata de los Centros Responsables Internos de la organización existen  varias alternativas de definición:

En primer lugar como Centros especialistas en cada uno de los tipos de  mantenimiento: Mecánico, Eléctrico, Instrumentación u otros.

Pero pueden ser también Centros técnicos de mantenimiento multiobjetivo, conformados por especialistas de cada tipo de mantenimiento, que prestan servicio a uno o varios sectores productivos de la organización.

El **AM** administra los Centros Responsables de mantenimiento de la empresa cualquiera que sea su forma en la jerarquía organizacional.

Se debe definir además, como un Centro Responsable, al conjunto de Talleres o Servicios Externos que prestan servicio a la empresa, por solicitud y a elección de ella,  sin  que exista un compromiso previo contractual.

De igual forma, debe constituir un Centro Responsable el conjunto de Contratistas, externos, que prestan servicio a la empresa en forma permanente y rutinaria sobre bases contractuales.

**Ejemplos de Centros Responsables:**

**Talleres Externos:** Tall.Ext

**Contratistas:** Contrat

**Mantenimiento Mecánico:** Mtto.Mec

**Taller Eléctrico:** Tall.Elec

![Procesar imagen](../../assets/images/cap02/chp02_img45.png)
_**Imagen 45** Ventana Detalle Centros Responsables_

En la gráfica anterior, Ventana Detalle Centros Responsables, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Centro Responsable seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada unos se da una breve explicación:

**Nombre CR:** En este campo se escribe el código del Centro Responsable, con una capacidad de 13 caracteres.

**Estado:** Es un campo para seleccionar un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Centro Responsable ante el aplicativo.

**Tipo:** Se elige si es un Centro Responsable de tipo Interno, sí es de la empresa; o tipo Externo, sí corresponde a un Taller/Servicio Externo o Contratista.

## Oficios

Aquí se definen los Oficios o Cargos Técnicos de mantenimiento que el área de Relaciones Laborales de la empresa tiene registrados dentro de cada Centro Responsable.

En otras palabras esta es la tabla en la que se registran los nombres de los Cargos Técnicos de mantenimiento a los que se asocian posteriormente las personas de las áreas de

También se definen aquí las especialidades de los Talleres/Servicios Externos o de los Contratistas que prestan servicios de mantenimiento. Ejemplos: Talleres Eléctricos, Talleres Mecánicos, Talleres de Motores y Bombas; Contratistas de Aire Acondicionado, Contratistas de Mecanizado, Contratistas para Instalaciones de Redes, entre otros. Los oficios son requeridos por los Programas de Mantenimiento y las Órdenes de Trabajo.

![detalle](../../assets/images/cap02/chp02_img46.png)
_**Imagen 46** Ventana Detalle Centros Responsables_

En la gráfica anterior, Ventana Detalle Oficios, se aprecian sus componentes y sus  respectivos contenidos. Se encuentra la información  relevante al Oficio seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Centro responsable:** Este campo permite seleccionar un Centro Responsable preexistente, al cual pertenece el oficio. Se encuentran disponibles para la selección los Centros Responsables definidos en la tabla correspondiente.

**Oficio:** En este campo se definen los diferentes Oficios del personal de mantenimiento propio de la empresa o las Especialidades de los Talleres/Servicios Externos y Contratistas.

**Tipo Trabajo (TT):** Indica el tipo de trabajo al cual está relacionado el Oficio o la especialidad que se está definiendo. Elc (eléctrico), Mec (mecánico), I/E (instrumentación y  electrónica), Otr (otros). Tanto la definición como la abreviatura, de cada Tipo de Trabajo, son configurables para una compañía, desde el módulo de Infraestructura, en la tabla llamada Tipos de Trabajo.

**Valor Hora 1:** En este campo se registra el valor de la Hora Ordinaria del Oficio referido. Es obligatoria definirla para los Oficios que estén relacionados a un Centro Responsable tipo interno.

**Valor Hora 2:** En este campo se registra el valor de la Hora Extra o Nocturna de Oficio referido.

**Valor Hora 3:** En este campo se registra el valor de la Hora Dominical o Festiva del Oficio referido.

## Responsables

Aquí se registran automáticamente los nombres propios de las personas definidas para cada Oficio o los nombres o razones sociales de los Talleres/Servicios Externos o Contratistas, definidos  para  cada grupo o Especialidad. 

Se visualiza la información sobre cada Empleado o Taller o Contratista.

![Procesar imagen](../../assets/images/cap02/chp02_img47.png)
_**Imagen 47** Ventana Detalle Responsables_

En la gráfica anterior, Ventana Detalle Responsables, se aprecian sus componentes y  sus respectivos contenidos. Se encuentra la información relevante al Responsable seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Centro Responsable:** En este campo se muestra el Centro Responsable asociado al Responsable.

**Oficio:** En este campo se muestra el Oficio al cual pertenece el Responsable.

**Código TE:** En este campo se muestra el código del Tercero  definido en su tabla. De esta forma se establece la relación entre el Responsable y su Oficio, y mediante este último con el Centro Responsable.

**Nombre TE:** En este campo se muestra el nombre del Tercero definido en su tabla.

**Tipo TE:** En este campo se muestra el tipo del Tercero definido en su tabla.

**Contacto TE:** En este campo se muestra el contacto del Tercero definido en su tabla.

**Correo Electrónico TE:** En este campo se muestra el correo electrónico del Tercero definido en su tabla.

**Centro de Costo:** En este campo se muestra el nombre del Centro de Costo del Tercero definido en su tabla.

**Sub CC:** En este campo se muestra el código del Sub CC que está relacionado al Centro de Costo definido en el campo anterior.

**Estado:** Es un campo que muestra un valor de los predefinidos, Activo o Inactivo que refleja el estado de ese Responsable ante el aplicativo mediante un switche.

## Riesgos

Los Riesgos corresponden a los riesgos asociados a cada uno de los Activos/Equipos que se encuentran definidos en el módulo de Activos.

![Procesar imagen](../../assets/images/cap02/chp02_img48.png)
_**Imagen 48** Ventana Detalle Riesgos_

En la gráfica anterior, Ventana Detalle Riesgos, se aprecian sus componentes y  sus respectivos contenidos.Se encuentra la información relevante al Riesgo seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre:** En este campo se define el nombre del riesgo.

## Magnitudes

El objetivo de esta nueva tabla es registrar las magnitudes que después se asociarán a los Activos, que se utilizan al definir la porción de Metrología. En esta tabla sólo se registrarán los nombres de la Magnitud. Se cuenta con 60 dígitos para  ingresar la magnitud deseada.

![Procesar imagen](../../assets/images/cap02/chp02_img49.png)
_**Imagen 49** Ventana Detalle Magnitudes_

En la gráfica anterior, Ventana Detalle Magnitudes, se aprecian sus componentes y  sus respectivos contenidos. Se encuentra la información relevante a la Magnitud seleccionada en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre de la Magnitud:** En este campo se define el nombre de la magnitud.

## Características Biomédicas

Es una tabla conformada por los nombres de las Características propias de los Activos o Equipos, que se utilizan al definir la porción variable de Info. Biomédica en su ficha técnica.  En esta tabla sólo se ingresan los nombres de las Características. Se cuenta con 30 dígitos para  ingresar la característica deseada.

El valor o nombre, la unidad de medida correspondiente y la clasificación se relacionan a cada Característica en la ficha técnica del Activo o Equipo en la porción de Info. Biomédica.

La gama de Características depende del tipo de equipamiento de la empresa, por tanto es una tabla modificable o adecuable con gran facilidad.

Se recomienda utilizar esta tabla únicamente para empresas o compañías que sean Biomédicas.

Existen varios tipos de Características que se configuran según el equipo, al definir su ficha técnica. El primer tipo, el más común, corresponde a las de tipo Informativo. El segundo tipo corresponde a las de tipo instalación. El tercer tipo corresponde a las de tipo apoyo. El cuarto tipo corresponde a las de tipo Técnicas. Finalmente, las del quinto tipo corresponde a las de funcionamiento. Todas las características biomédicas van acompañadas de un valor o nombre y la unidad de medida.

![Procesar imagen](../../assets/images/cap02/chp02_img50.png)
_**Imagen 50** Ventana Detalle Características Biomédicas_

En la gráfica anterior, Ventana Características Biomédicas, se aprecian sus componentes y  sus respectivos contenidos. Se encuentra la información relevante a la Característica Biomédica seleccionada en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre:** En este campo se define el nombre de la característica biomédica.

**Estado:** Indica el estado en que se encuentra la Característica Biomédica: Activo o Inactivo.

## Otros Conceptos de Costo

El objetivo de esta tabla es registrar aquellas actividades complementarias que generan costos en una OT, que son indirectos respecto a la misma y que son  facturados por un ente externo. Este es el caso, por ejemplo, de los costos de transporte necesarios para llevar a mecanizar una pieza, o para arrendar y desplazar un equipo o un instrumento, o para desplazar a un ingeniero y cubrir sus gastos de viaje y viáticos.

También se usa para cargar a una OT, costos de trabajos eventuales, no rutinarios, especializados, de costo relativamente bajo, que no ameritan la generación de una OT. Algunos ejemplos son: la cepillada de una campana o una rotación de llantas, labores que se ejecutan como parte de una OT mecánica.

![Procesar imagen](../../assets/images/cap02/chp02_img51.png)
_**Imagen 51** Ventana Detalle Otros Conceptos de Costo_

En la gráfica anterior, Ventana Detalle Otros Conceptos de Costo, se aprecian sus componentes y sus respectivos contenidos.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Código:** Se define un código o indicativo único para el otro concepto de costo, que puede ser un consecutivo. Ejemplo: OC-001, el cual OC corresponde a las abreviaturas de Otro Concepto y 001 corresponde al primer registro.

**Nombre:** En este campo se escribe el nombre del Concepto generador de costo distinto de Mano de Obra y de Materiales y Repuestos. Es una descripción corta de 25 caracteres. Algunos ejemplos de estos Otros Conceptos pueden ser: Transporte Terrestre de un Equipo, Transporte y Viáticos de un operador que se trasladó desde otra ciudad, mecanizado de una pieza sencilla, etc.

**Valor Unitario:** Este campo indica el costo unitario de la actividad. Solamente se debe registrar este valor si corresponde a una tarifa o precio que se ha pactado con el proveedor, y que se ejecuta rutinariamente. Es posible dejar  este valor en blanco y al momento de cargarlo a una Órden de Trabajo, registrar manualmente el  valor.

**Unidad de Medida (UM):** Este campo es para seleccionar la unidad de medida que corresponde al **Otro Concepto de Costo.** Se elige una de las disponibles que se descuelgan de la lista.

**Informativo** Este switche permite activar el Otro Concepto de Costo como campo Informativo, lo que quiere decir que NO se genera costo. En caso de querer cuantificar esta actividad no se debe activar el switche.

**Tipo  de Trabajo (TT):** Indica el Tipo de Trabajo al cual se relaciona el Concepto de Costo registrado: Elc (eléctrico), Mec (mecánico), I/E (instrumentación y electrónica), Otr (otros).

El Tipo de Trabajo cualifica el valor del costo permitiendo que se cargue en una fila y en una columna precisamente definida en la tabla de Gasto Real en la Órden de Trabajo.

## Causas de OT Pendiente

Aquí se registran las posibles Causas por las que la ejecución de una Órden de Trabajo es suspendida o pospuesta. En el sistema se proponen las siguientes causas de pendiente:

**M** - Pendiente Por Mano De Obra
**O** - Pendiente Por Otros Conceptos
**P** - Pendiente Por Programación
**R** - Pendiente Por Repuestos
**S** - Pendiente Por Presupuesto

Estos valores predefinidos pueden ser modificados o complementados por el usuario, según su cultura técnica y organizacional.

![Procesar imagen](../../assets/images/cap02/chp02_img52.png)
_**Imagen 52** Ventana Detalle Otros Conceptos de Costo_

En la gráfica anterior, Ventana Detalle Causas de OT Pendiente, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante a la Causa de Pendiente seleccionada en el Visor.

A continuación se describe el campo que compone el registro:

**Nombre:** En este campo se escribe la Causa por la que se puede detener la ejecución de una OT. Se recomienda nombrar la causa de pendiente iniciando con una letra que la distinga de las demás, continuar con un guion y a continuación el nombre de la causa. La capacidad del campo es de 30 caracteres.

## Tipos de Actividad

El objetivo de esta tabla es registrar otros Tipos de Actividad. Los Tipos de Actividad  se usan para caracterizar aún más las Órdenes de Trabajo. Algunos  corresponden a Actividades de Mantenimiento como: Correctivo, Preventivo, Preventivo Manual, Predictivo, Inspección, Calibración; pero otros corresponden a actividades que no constituyen mantenimiento formalmente pero sí consumen recursos apreciables de los propios de Mantenimiento: Horas Hombre de Mano de Obra, Materiales y Repuestos y/o Servicios Externos.

El Tipo de Actividad puede ser un criterio más de selección y de búsqueda, en estudios sobre Órdenes de Trabajo e Historia de Mantenimiento.

**AM** suministra una tabla de Tipos de Actividad que incluye una recopilación interesante de ellas que el usuario puede enriquecer adicionando nuevas o mdificando las existentes.

Algunos ejemplos de Tipos de Actividad que están preconfiguradas en **AM** son las siguientes:

- EQ-Contrato
- EQ-Garantía
- EQ- Instalación/Montaje
- EQ-Inversión
- EQ-Mejoras distintas de Mntto
- EQ-Overhaul
- EQ-Puesta a punto
- EQ-Recuperación de Activos
- EQ-Reposición de Equipos
- EQ-Revisión / Inspección
- EQ-Servicios Aux Producción
- IC-Comunicaciones
- IL-Dotación Habitaciones
- IL-Iluminación
- IL-Jardinería
- IL-Mejoras / Modificaciones
- IL-Obra Civil
- IL-Pintura/ Plomería
- IL-Señalización
- IL-Ventanería
- IT-Informática Hardware
- IT-Informática Redes
- IT-Informática Software
- IT-Instalación / Montaje de HW
- MN- Mantto
- TV-Ajustes y Ensambles
- TV-Carpintería
- TV-Limpieza
- TV-Mecanizado
- TV-Obra Civil
- TV-Telefonía
- TV-Trabajo Sobre Repuestos

Donde los dos primeros caracteres significan:

- **EQ** Otros Trabajos sobre Equipos.
- **IC** Informática y Comunicaciones.
- **IL** Trabajos sobre Instalaciones Locativas.
- **IT** Informática y Tecnología.
- **MN** Trabajos que constituyen Mantenimiento.
- **TV** Trabajos Varios

![Procesar imagen](../../assets/images/cap02/chp02_img53.png)
_**Imagen 53** Ventana Detalle Tipos de Actividad_

En la gráfica anterior, Ventana Detalle Tipos de Actividad, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Tipo de Actividad seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre TA:** En este campo se registra el Tipo de Actividad. La capacidad  del  campo es de 50 caracteres.

**Tipo de Mantenimiento (TM):** Indica el Tipo de Mantenimiento al cual se relaciona el Tipo de Actividad registrado: Preventivo, Preventivo Manual, Predictivo, Inspección, Lubricación, Metrología, Correctivo, Otro-Mantto, Otro.

## Causas de Cierre de OT

Es la tabla en la que se registran las posibles Causas de Cierre de una Órden de Trabajo (ya sea Ejecutada o No Ejecutada). También es una tabla con contenido propuesto por el aplicativo, que puede ser complementada o adecuada a gusto del usuario.

La primera que se define se refiere a las Órdenes de Trabajo Cerradas Ejecutadas; todas las que siguen son Causas de Cierre para Órdenes de Trabajo Cerradas No Ejecutadas.

En el sistema se incluyen las siguientes Causas de Cierre:

**CAUSAS DE CIERRE**

- OT Ejecutada
- Cambio por otra OT
- Error en la programación
- Equipo fuera de servicio
- Equipo no disponible
- Cierre de mes
- Labor no requerida
- Otra causa

>**Nota:** La Causa de Cierre **“OT Ejecutada”** es implícita a las OT cerradas ejecutadas. Esta
Causa de Cierre no es editable.

![Procesar imagen](../../assets/images/cap02/chp02_img54.png)
_**Imagen 54** Ventana Detalle Causas de Cierre de OT_

En la gráfica anterior, Ventana Detalle Causas de Cierre de OT, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante a la Causa de Cierre seleccionada en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Nombre:** En este campo se escribe la posible Causa de Cierre de una Orden de Trabajo.

**Tipo:**En este campo están predeterminadas dos opciones: Órden de Trabajo Ejecutada y Orden de Trabajo No Ejecutada.

## Acciones Técnicas

Es la tabla que contiene un listado de Acciones Técnicas frecuentes en un área de Mantenimiento. Con la información contenida en esta tabla se pretende describir, breve pero concretamente, la actividad general a ser realizada en una Órden de  Trabajo. Se suministra por defecto un conjunto de verbos en infinitivo que denotan Acciones Técnicas de Mantenimiento. El usuario puede utilizar tales verbos para definir Acciones Técnicas detalladas con base en ellos.
 
Una vez definidas las Acciones Técnicas, es posible incluir una o varias de ellas, asociadas a una causa, en la tabla de Causas de Falla o asociadas a un efecto, en la tabla de  Efectos de Falla.

![Procesar imagen](../../assets/images/cap02/chp02_img55.png)
_**Imagen 55** Ventana Detalle Acciones Técnicas_

En la gráfica anterior, Ventana Detalle Acciones Técnicas, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante a la Acción Técnica seleccionada en el Visor.

A continuación se describen los campos que componen el registro.

**Nombre:** Este campo tiene capacidad de 80 caracteres y se describe la Acción Técnica.

**Costo Estándar:** En este campo se registra el costo estándar de la Acción Técnica.

**Duración Estándar:** Se define la duración estándar de ejecución de esa Acción Técnica.

**Unidad Estándar:** Se define la unidad de tiempo estándar correspondiente en días, horas y minutos.

## Causas de Falla

Esta tabla de la Infraestructura pretende definir las Causas reales de Falla, que normalmente sólo se detectan a través de una inspección previa.

En ella se han propuesto a manera de guía, algunas Causas de Falla, agrupadas en Básicas (B) e Inmediatas (I), según orientación de la norma ISO-14224. Se considera que de todas maneras la cultura técnica del área de mantenimiento y su experiencia en equipamiento y procesos específicos pueden variar y/o complementar la propuesta que hace **AM.**

**BASICAS (B)**:

- **BAD**-FALLAS ADMINISTRATIVAS
    - **BAD**-Error Administrativo
    - **BAD**-Error de Documentación

- **BFI**-FALLAS FABRICACIÓN / INSTALACIÓN
    - **BFI**-Error de Fabricación
    - **BFI**-Error de Instalación / Montaje

- **BOP**-FALLAS OPERACIONALES
    - **BOP**-Desgaste o rotura esperada
    - **BOP**-Error de Mantenimiento
    - **BOP**-Error de Operación
    - **BOP**-Servicio fuera de diseño

- **BDI**-FALLAS DISEÑO
    - **BDI**-Capacidad Inadecuada
    - **BDI**-Diseño Inadecuado
    - **BDI**-Material Inadecuado

- **BMI**-FALLAS MISCELANEAS
    - **BMI**-Desconocida
    - **BMI**-Miscelánea
    - **BMI**-Oculta

**INMEDIATAS (I):**

- **IEL**-FALLAS ELECTRICAS
    - **IEL**-Circuito Abierto
    - **IEL**-Corto Circuito
    - **IEL**-Falla de Energía / Voltaje
    - **IEL**-Falla Tierra / Aislamiento
    - **IEL**-Sin / Bajo Energía / Voltaje

- **IIN**-FALLAS INSTRUMENTOS
    - **IIN**-Desajustado
    - **IIN**- Falla Común (falla redundante)
    - **IIN**-Falla en Control
    - **IIN**-No Señal / Ind / Alarma
    - **IIN**-Señal / Ind / Alarma incorrecta
    - **IIN**-Software

- **IMI**-FALLAS MISCELANEAS
    - **IMI**-Desconocida
    - **IMI**-Miscelánea
    - **IMI**-Oculta

- **IIE**-FALLAS EXTERNAS
    - **IIE**-Bloqueado / Taponado
    - **IIE**-Contaminación

- **IME**-FALLAS MECANICAS
    - **IME**-Bloqueado / Taponado
    - **IME**-Deformación
    - **IME**-Desalineamiento
    - **IME**-Fuga
    - **IME**-Pegado
    - **IME**-Suelto
    - **IME**-Vibración

- **IMT**-FALLAS MATERIAL
    - **IMT**-Cavitación
    - **IMT**-Corrosión
    - **IMT**-Desgaste
    - **IMT**-Erosión
    - **IMT**-Fatiga
    - **IMT**-Fractura
    - **IMT**-Quemado
    - **IMT**-Sobrecalentamiento

Los Prefijos significan:

- **B:** BÁSICAS
- **I:** INMEDIATAS
- **AD:** ADMINISTRATIVAS
- **DI:** DISENO
- **FI:** FABRICACION / INSTALACION
- **MI:** MISCELANEAS
- **OP:** OPERACIONALES
- **EL:** ELECTRICAS
- **IE:** EXTERNAS
- **IN:** INSTRUMENTOS
- **ME:** MECANICAS
- **MT:** MATERIAL

![Procesar imagen](../../assets/images/cap02/chp02_img56.png)
_**Imagen 56** Ventana Detalle Acciones Técnicas_

En la gráfica anterior, Ventana Causas de Falla, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Causas de Falla se encuentra la información relevante a la Causa de Falla seleccionada en el Visor.

A continuación se describen los campos que componen el registro.

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: **BOP**-01, el cual **BOP** corresponde a las abreviaturas del grupo y prefijo al que pertenece la Causa de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra la Causa de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Causa de Falla las Acciones Técnicas que más comúnmente se ejecutan para evitarla y solucionarla. Se debe tener en cuenta que las Acciones Técnicas por Efecto pretenden ubicar la causa y que las Acciones Técnicas por Causa pretenden evitar y solucionar la causa.

![Procesar imagen](../../assets/images/cap02/chp02_img57.png)
_**Imagen 57** Ventana Detalle Causa de Falla (Acciones Técnicas)_

En la ventana anterior Acciones Tecnicas se seleccionan de la lista desplegable y se
adicionan con el botón del signo Más <span class="mdi mdi-plus-circle icon white"></span>.

Para desasociar una Acción Técnica de una Causa de Falla, se da clic en la Acción a desasociar y se presiona el icono de Eliminar <span class="mdi mdi-delete"></span>.

> **Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Causa de Falla.

## Efectos de Falla

En esta tabla se describen las formas en que una falla se manifiesta inmediatamente después de ocurrir. Se trata de las consecuencias de la falla, de los  efectos que esa falla ocasionó. Es un concepto que aunque ligado también a la falla es diametralmente opuesto a la causa. La causa, que normalmente es una sola, es la fuente de la falla, su origen. El efecto en cambio es la forma como se percibe, como se muestra la falla, una vez ha ocurrido. Hay efectos sonoros, otros son de rompimiento, otros son de generación de calor, otros de suspensión de la energía o de inoperancia o malfuncionamiento del equipo. La mayoría de ellos esconde, oculta o enmascara la causa real de la falla.

![Procesar imagen](../../assets/images/cap02/chp02_img58.png)
_**Imagen 58** Ventana Detalle Efecto de Falla (Acciones Ténicas)_

A continuación se describen los campos que componen el registro:

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: EF-01, el cual EF corresponde a las abreviaturas de Efecto de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra el Efecto de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Efecto de Falla las Acciones Técnicas que más comúnmente se ejecutan como consecuencia de ésta. Como se menciona en las Causas de Falla, las Acciones Técnicas por Efecto pretenden **“Ubicar la Causa”** y las Acciones Técnicas por Causa pretenden **“Solucionar la Causa”**.

En la ventana anterior, las Acciones Técnicas se seleccionan de la lista despegable y se adicionan con el botón Más <span class="mdi mdi-plus-circle icon white"></span>.

Para desasociar una Acción Técnica de un Efecto de Falla, se da clic en la Acción a desasociar y se presiona el icono de basura <span class="mdi mdi-delete"></span>.

>**Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar el Efecto de Falla.

## Contratos

En esta tabla es posible registrar los Contratos sobre servicios a cargo de contratistas externos. No se trata de un módulo de administración de contratos sino de una facilidad simplista que hace funciones de control y seguimiento generales sobre ellos.

Al tiempo, se usa para facilitar la selección y búsqueda de Órdenes de Trabajo e Historia de Mantenimiento, en función de un contratista y/o de un Contrato particular.

Aunque el objetivo general es el registro de los contratos anuales, también es posible registrar, en aras de centralización de la información, los contratos de corta vigencia que respaldan la ejecución de una o varias Órdenes de Trabajo por parte de un contratista.

También es posible realizar el seguimiento de la vigencia de los Contratos, directamente desde la ventana visor, a través de la columna  “Indicadores” que muestra una pelota de color que indica su estado de vigencia acuerdo a la cantidad de días o meses. El significado del color de cada pelota, se puede ver en el ícono de Indicador <span class="mdi mdi-message-alert"></span>, ubicado en la parte superior derecha de la ventana
visor.

![Procesar imagen](../../assets/images/cap02/chp02_img59.png)
_**Imagen 59** Ventana Visor Contratos_

La renovación de contratos se realiza utilizando la numeración del contrato anterior, realizando  una copia y adicionando un consecutivo adicional que relacione esta renovación con su contrato original.

**Ejemplo:** Código 00008 (contrato original), Código 00008-1 (renovación del contrato)

![Procesar Imagen ](../../assets/images/cap02/chp02_img60.png)
_**Imagen 60** Ventana Detalle del Contrato_

En la gráfica anterior, Ventana Detalle del Contrato, se aprecian sus componentes y sus respectivos contenidos. Se encuentra la información relevante al Contrato seleccionado en el Visor.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Código CN:** En este campo que tiene una capacidad de quince caracteres se registra el número del Contrato. Es posible cambiar el código del contrato sin afectar la asociación existente entre el contrato modificado y otros módulos, y sin obtener mensajes de error por este intento de modificación.

**Descripción:** En este campo se escribe una corta descripción del Contrato que se está definiendo.

**Objeto:** En este campo se establece la finalidad del Contrato acordado por las partes.

**Objeto Resumen:** En este campo se escribe un resumen del Objeto del Contrato definido en el campo anterior.

**Fecha Inicio Vigencia:** En este campo se define la fecha en la que se da inicio a la vigencia del Contrato.

**Fecha Fin Vigencia:** En este campo se define la fecha en la que está prevista la terminación de la vigencia del Contrato.

**Valor Contrato Año:** En este campo se indica el valor total anual del Contrato. Se habla de Valor Contrato Año refiriéndose a aquellos Contratos que se realizan anualmente, por ejemplo, el mantenimiento anual de los aires acondicionados. En otros  casos se refiere al costo total del contrato durante su vigencia.

**Responsable:** Aquí se registra el nombre propio o la razón social de la persona natural o jurídica que es Responsable, como contratista, del manejo y ejecución del contrato. Los contratistas que se registran en esta tabla deben haber sido creados previamente  en la tabla de Terceros, y su tipo debe ser Responsable Externo / Contratista (RX).

**Centro de Costo:** Para registrar el código correspondiente al Cliente externo al que se le presta servicio a través del Contrato. Este campo no tiene ninguna incidencia en otros casos.

**Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido.

**Estado:** Se selecciona el estado del contrato, puede encontrarse Activo o Inactivo.

**Gasto Real total ejecutado:** Como su nombre lo indica, este campo muestra el valor total real gastado hasta la fecha de dicho contrato.

**Gasto Real ejecutado en el año actual:** Este campo muestra el valor total real gastado en el periodo del año en curso de dicho contrato.

**Presupuesto Pendiente por ejecutar:** Muestra cuanto valor le resta a dicho contrato para terminar.

**Gasto Real ejecutado en OT pendientes:** En este campo se muestra el valor total del gasto real en OT cuyo estado se encuentra pendiente.

## Multimedia Contratos

Esta nueva funcionalidad permite asociar el Contrato de forma digital.

![Procesar Imagen](../../assets/images/cap02/chp02_img61.png)
_**Imagen 61** Ventana Detalle del Contrato (Multimedia)_

En la gráfica anterior, Porción Multimedia, se aprecian sus componentes y sus respectivos contenidos.

A través de la ventana Multimedia se adjunta información adicional al Contrato en cada una de sus carpetas asignadas. Esta opción permite asociar al Contrato, uno o varios documentos, con el  objetivo de facilitar el trabajo a realizar, o guiarlo, o detallarlo minuciosamente. Se aceptan documentos de extensiones .DOC, XLS, PDF, JPG, es decir, de Microsoft Word o Microsoft Excel, Acrobat o Imágenes varias.

**Los documentos anexos pueden contener:** el Contrato en forma digital, especificaciones  detalladas, entre otros; con el fin de hacer  seguimiento, control y tener acceso directo a la información.

A continuación se describen las carpetas que componen esta ventana; cuando se quiera actualizar o ingresar nueva información al Contrato, se deberán registrar así:

**Cuadro Identificación:** Aparece con los campos bloqueados para que el usuario visualice la información básica del Contrato como el Código y la Descripición.

**Documentos:** En esta carpeta se relacionan toda clase de documentación relacionada al Contrato. Ejemplo: Archivos en Word, pdf, Excel, entre otros.

**Imágenes:** En esta carpeta se relacionan toda clase de imágenes relacionadas al Contrato.  Ejemplo: Imágenes en formato jpg, png, entre otros.

**Videos:** En esta carpeta se relacionan porciones de videos relacionados al Contrato. Ejemplo: Videos en formato wmv, mp4, entre otros.

![Procesar imagen](../../assets/images/cap02/chp02_img62.png)
_**Imagen 62** Contrato (Multimedia)_

Para adicionar un documento, imagen o video, se debe dar clic en la carpeta deseada, luego se da clic al icono de <a class="btn">subir</a> , a continuación se abre una nueva ventana para realizar la búsqueda del archivo a subir,  se selecciona el archivo y se da clic en <a class="btn">abrir</a>.

![detalle de contrato](../../assets/images/cap02/chp02_img67.png)

Una vez se da clic en <a class="btn">abrir</a>., se evidencia al lado derecho el nombre del archivo elegido y aparece un campo en blanco, para que el usuario escriba un nombre adicional del archivo para ser usado como una referenciación del archivo adjunto. Luego, se da clic en el botón <a class="btn">Subir archivo</a>.

![detalle de contrato](../../assets/images/cap02/chp02_img68.png)

Los archivos que se van adicionando van quedando guardados uno debajo del otro y si se da un clic en uno de las imágenes, se visualiza la imagen adjunta.

Para desasociar un documento, o una imagen o un video, al Contrato se da clic al <span class="iconify btn" data-icon=delete>nar (basura) que se encuentra al lado derecho del archivo al que se le va a realizar la operación. Inmediatamente, sale un mensaje de alerta que pregunta al usuario si está seguro de eliminar este registro y se da clic en el botón<a class="btn">Aceptar</a>.

![detalle de contrato](../../assets/images/cap02/chp02_img69.png)

Si se desea descargar un archivo adjunto al Contrato, se debe dar clic en el icono de <span class="iconify btn" data-icon=cloud-download> la nube con flecha hacia abajo , que se encuentra al lado derecho del archivo que se quiere descargar.

![detalle de contrato](../../assets/images/cap02/chp02_img70.png)
