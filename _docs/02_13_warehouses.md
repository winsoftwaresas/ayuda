---
title: Almacenes
subtitle: Se explica la tabla de Almacén, alcance y su parametrización.
tags: [setup]
author: win
order: '02_13'
---

Es la tabla de Infraestructura en la que se definen los distintos Almacenes, Bodegas o Depósitos de: Materias Primas, Insumos, Materiales y Repuestos o elementos generales de una organización.

**AM** versión PRO es un sistema multicompañía y multialmacén, por tanto es posible definir múltiples almacenes en la base de datos para cada compañía.

**AM** versión ST es un sistema monocompañía y multialmacén.

![Procesar imagen](../../assets/images/cap02/chp02_img22.png)
_**Imagen 53.** Ventana Detalle IF Almacén_

En la gráfica anterior, Ventana Detalle Almacén, se encuentra la información relevante al Almacén seleccionado en el Visor.

A continuación se describen los campos que componen el registro:

**Código:** Este campo recibe un número de máximo dos dígitos, asignado automáticamente ppor el sistema con el cual se identifica la bodega o Almacén de Equipos o Repuestos.

**Nombre:** Se define el nombre del Almacén.

**Ubicación física:** Indica el sitio donde está ubicado el Almacén o bodega. Esta Ubicación Física se selecciona de la tabla de Ubicaciones Físicas previamente definidas.

**Tipo Costeo:** Aquí se define la forma como se costean los ítems, repuestos o materiales en el Almacén actual. Existen dos opciones:

La primera consiste en valorizar **todos** los ítems de un código según el costo del último reaprovisionamiento, en este caso se habla de valorizar por **Último Ingreso**.

La segunda opción **Promedio Ponderado**, consiste en valorizar todo el conjunto de ítems de un mismo código mediante el cálculo sencillo de un promedio ponderado.

Utilizar uno u otro método depende de si el Almacén es contable o no. Se recomienda utilizar el método de Promedio Ponderado si se trata de un Almacén contable. Si se trata de un Almacén no contable, es decir, cuando se considera que los ítems que lo conforman, al ser trasladados a esta bodega ya fueron consumidos contablemente, entonces se recomienda usar el método de costeo por Último Ingreso, en cuyo caso la elaboración y proyección de presupuestos puede arrojar información más realista, al tiempo que no existe el riesgo de la revalorización contable de los mismos ítems.

**Tipo Almacén:** Esta opción, de tipo combo, muestra dos ítems: Contable y No Contable.

Esta funcionalidad, permitirá a futuro definir si el Almacén seleccionado es Contable, es decir, tendrá una interacción con el sistema contable de la organización la cual generara un costo o factura de venta; y No Contable hace referencia al Almacén que guarda el inventario de Repuestos para simple funcionalidad del sistema **AM**. Por defecto, cuando se crea un almacén el tipo se define con NO CONTABLE.

**Almacén Corporativo:** Este switche indica si el almacén al cual se está haciendo referencia es el corporativo. Cuando se define si es el almacén corporativo, se declara con la palabra **“SI”**, en caso contrario se define con la palabra **“NO”**. Para definir el almacén corporativo se realiza en el módulo de <a class="btn cl-white bg-blue px-6"> Administración </a>, en la opción **Valores por defecto**, en la etiqueta Almacén, existe la opción de **“Almacén corporativo”** con un combo desplegable para escoger cual es el almacén.

**Comentario:** Aquí se ingresan los comentarios sobre el Almacén, Centro de Costo o sobre un Cliente, representado por su Centro de Costo.
