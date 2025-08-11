---
title: Centros de Costo
subtitle: Se explican los centros de costos (CC), alcance, y funcionalidades dentro de la tabla.
tags: [setup]
author: win
order: '02_03'
media: "../../assets/images/docs/"
---

Es la primera tabla que aparece en el listado de Infraestructura, el Centro de Costo (CC) se refiere al área o departamento administrativo, operativo o productivo que recibe servicios de mantenimiento. Se refiere también a la definición contable de los departamentos o áreas responsables de Activos, Equipos o de Objetos de Mantenimiento y por ende de los costos de su mantenimiento.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_02.png"
  alt:"Ventana Visor IF Centros de Costo"
%}

Los Centros de Costo se utilizan en **AM** para asociar los cargos, por distintos conceptos de costo de mantenimiento, a las Órdenes de Trabajo. Esta asociación posibilita generar múltiples reportes por actividades, costos o tipos de costos para los distintos Centros de Costo definidos en el sistema.

Es posible usar un Centro de Costo con el objeto de compendiar todos los trabajos relacionados a un **Proyecto** o a una **Inversión** . Para este caso se crea un nuevo CC, copiando su definición desde aquel que es el centro del Proyecto y se agrega a continuación, como parte del mismo CC, un número o código identificador del Proyecto o de la Inversión. En adelante toda OT que corresponda a tal Proyecto se asocia al nuevo CC.

En otro contexto, el concepto de Centros de Costo se asocia al concepto de Clientes. Se trata del caso en que una compañía prestadora de servicios de mantenimiento atiende a múltiples clientes y quiere llevar un control detallado de las actividades técnicas ejecutadas y los costos asociados a cada uno de ellos. En este caso el sistema posibilita el registro de datos adicionales sobre el Centro de Costo o Cliente; son ellos el nombre del contacto, su estado, una clasificación y datos generales para su ubicación.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_03.png"
  alt:"Ventana Detalle IF Centro de Costo"
%}

En la gráfica anterior, Ventana Detalle Centros de Costo, se encuentra la información relevante al Centro de Costo seleccionado en el visor.

A continuación se describen los campos que componen el registro:

**Código CC:** En este campo se registra el código de cada Centro de Costo. La capacidad del campo es de 40 caracteres alfanuméricos.

**Código Sub CC:** En este campo se registra el Sub Centro de Costo (si aplica) asociado al Centro de Costo. El Sub CC es un mecanismo para controlar las distintas porciones de costo dentro de un Centro de Costo a manera de cuentas internas.

**Descripción CC:** Se usa para escribir el nombre del Centro de Costo. Es posible, a gusto de la empresa usuaria, escribir los nombres de cada Centro de Costo en forma de título: La primera letra de cada nombre en mayúscula y las siguientes en minúsculas,  o todo en mayúsculas. Para la descripción se dispone de 60 caracteres alfanuméricos.

Si el Centro de Costo se refiere a un Cliente, en este campo se define el nombre de la empresa cliente.

**Tipo:** Se elige el tipo del Centro de Costo que aplique. Si el Centro de Costo se refiere a un Centro de Costo interno de la empresa usuaria, se elige el tipo Usuario. Si el Centro de Costo se refiere a un Centro de Costo de Mantenimiento y es interno de la empresa usuaria, se elige el tipo Mantenimiento. Si el Centro de Costo se refiere a un Cliente externo, se elige el tipo Externo.

**Responsable:** Aquí se define a la persona encargada de la responsabilidad o del manejo del Centro de Costo. Se define el Responsable para los Centros de Costo tipo Usuario y Mantenimiento. Si el Centro de Costo es de tipo Usuario, se asocia el Tercero tipo RI-OT, si es un Centro de Costo de tipo Mantenimiento se asocia el Tercero tipo RI.

**Contacto:** Si el Centro de Costo se refiere a un Cliente, aquí se define el nombre de la persona que representa a ese Cliente. Se define el Contacto para los Centros de Costo tipo Externo.

**CC Superior**: En este campo se define el Centro de Costo correspondiente a la jerarquía inmediatamente superior.

**Área/Depto:** Indica el área o departamento al cual pertenece el Centro de Costo respectivo. Si el Centro de Costo se refiere a un Cliente externo, aquí se define el grupo o sector de industria al que pertenece esa empresa Cliente.

**Ciudad (Opcional):** Este campo se usa para indicar la ciudad del Área o  Departamento responsable del Centro de Costo. Si el Centro de Costo se refiere a  un Cliente externo, aquí se define la ciudad de la dirección del Cliente.

**Dirección (Opcional):** En este campo se diligencia la dirección del Área o  Departamento al que pertenece el Centro  de Costo. Si el Centro de Costo se refiere a un Cliente externo, aquí se define la dirección del Cliente.

**Teléfono (Opcional):** En él se define el número del teléfono correspondiente al Centro de Costo. Si el Centro de Costo se refiere a un Cliente externo, aquí se detalla el teléfono del Cliente. Se debe recordar que al escribir un número telefónico los tres primeros dígitos que se escriben corresponden al indicativo de la ciudad. El programa automáticamente escribe estos tres dígitos dentro de un paréntesis. Los siguientes siete dígitos corresponden al número de teléfono y a partir del octavo dígito corresponde al número de la Extensión telefónica (si aplica). **AM** automáticamente escribe la palabra Ext.

**Correo Electrónico:** En este campo se escribe la dirección electrónica del Centro de Costo o del Responsable o Contacto del Centro de Costo.

**Estado:** Indica el estado en que se encuentra el Centro de Costo: Activo o inactivo.

**Clase:** Indica la clase a que pertenece el Centro de Costo: (Comercial), (Industrial), (Servicios), (Financiero),  (Educativo), (Gobierno) y (Otro).

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo.

### Subgrupo Centros de Costo

Se usa para seleccionar grupos de Centros de Costo que cumplen un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al ícono  <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Centros de Costo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_04.png"
  alt:"Ventana Visor IF Centros de Costo"
%}


**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Centros de Costo. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Centros de Costo.

El programa permite entonces hacer selección de un grupo de Centros de Costo de acuerdo con los criterios seleccionados en la siguiente ventana.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_05.png"
  alt:"Ventana Subgrupos Centro de Costo"
%}

A continuación se explica brevemente cada criterio que compone el Subgrupo:

**Área/Depto:** Filtra los CC que tengan asignada el área o departamento de la institución ingresada en este campo:

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_06.png"
  alt:"Subgrupo Criterio Área/Depto"
%}

**CC Superior:** Permite filtrar por aquellos CC Superior que fueron asociados a los CC. Lista los CC creados en la tabla de Centros de Costos.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_07.png"
  alt:"Subgrupo Criterio CC Superior"
%}

**Ciudad:** Filtra los CC que están asociados a la Ciudad especificada.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_08.png"
  alt:"Subgrupo Criterio Ciudad"
%}

También se puede escribir la ciudad mediante el uso de comodines. Ejemplo, si se escribe Bog%, el sistema entiende que debe seleccionar aquellos CC cuya ciudad comience por la palabra  “Bog”. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

**Clase:** Filtra los CC que están asociados a una de las clases listadas.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_09.png"
  alt:"Subgrupo Criterio Clase"
%}

**Código CC:** Esta selección agrupa los Centros de Costos relacionados por su código. Por ejemplo: si se escribe cont%, el sistema localiza aquellos CC cuyo código empieza por cont. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_10.png"
  alt:"Subgrupo Código CC"
%}

**Código Sub CC:** En  este campo se filtra por el Sub CC asociado a un Centro de Costo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_11.png"
  alt:"Subgrupo Criterio Código Sub CC"
%}

**Contacto:** Filtra los CC que tengan asociada a una persona externa como contacto. Ejemplo: %maria josé% selecciona todos los Centros de Costo cuyo Contacto, en cualquier parte, tengan la palabra **“maria josé”.**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_12.png"
  alt:"Subgrupo Criterio Contacto"
%}

**Descripción CC:** Agrupa los CC cuya descripción corresponda a un Centro de Costo Interno o a un Cliente.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_13.png"
  alt:"Subgrupo Criterio Descripción CC"
%}

**Dirección:** Permite filtrar por la dirección del Área o  Departamento asociada a los CC.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_14.png"
  alt:"Subgrupo Dirección"
%}

**Correo Electrónico:** Filtra la dirección electrónica asociada a un CC.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_15.png"
  alt:"Subgrupo Criterio Correo Electrónico"
%}

**Estado:** Permite la selección de los CC de acuerdo al estado de Activo o Inactivo. El estado de los CC es importante para la selección en las listas  desplegables.
**Por ejemplo:** Si un CC, tiene definido el Estado  “Inactivo”, esta no aparecerá en la lista de los Contratos, Terceros, módulos de Activos, Kárdex, Programas, Solicitudes de Servicio, Paros, Órdenes de Trabajo, Historia y Administración.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_16.png"
  alt:"Subgrupo Criterio Estado"
%}

**Responsable:** Filtra los CC (tipo: mantenimiento y usuario) cuyos responsables corresponden al diligenciado en el campo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_17.png"
  alt:"Subgrupo Criterio Responsable"
%}

**Teléfono:** Filtra por el teléfono asociado a un CC.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_18.png"
  alt:"Subgrupo Criterio Teléfono"
%}

**Tipo:** Agrupa los CC de acuerdo al tipo seleccionado.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_19.png"
  alt:"Subgrupo Criterio Tipo"
%}