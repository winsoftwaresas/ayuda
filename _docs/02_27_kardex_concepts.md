---
title: Conceptos de Kárdex
subtitle: Se explica la tabla de conceptos de kárdex y alcance.
tags: [setup]
author: win
order: '02_27'

---

El objetivo es registrar los tipos de movimientos en un Almacén. Estas transacciones de movimientos pueden ser de Entrada, de Salida o de Ajuste de inventarios. Cada transacción de movimiento o concepto de Kárdex tiene asociado: un código o número distintivo (de 01 a 49, o, de 001 a 499, para las entradas por ejemplo) y otras condiciones de su uso.

![Procesar imagen](../../assets/images/cap02/chp02_img67.png)
_**Imagen 67.** Ventana Detalle IE Concepto de Kardex_

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Almacén:** Indica el Almacén al cual está asociado el Concepto de Kárdex. Este campo es seleccionado de una lista desplegable que contiene los Almacenes. Cada Almacén  tiene su propio conjunto independiente de conceptos de Kárdex.

**Número CP:** Se refiere al código que identifica cada concepto. Por ejemplo, un número entre el 01 y 49 se puede establecer para conceptos de entrada, y del 51 al 99 para conceptos de salida. Mientras que el 50 para conceptos de ajuste.

**Descripción de CP:** Es una breve descripción, en treinta (30) caracteres, que define la transacción correspondiente al número seleccionado. Es un buen complemento el especificar la descripción de cada concepto como de Entrada, de Salida o de Ajuste (E/ S/, A/), al inicio de cada descripción del concepto.

**Tipo:** Se selecciona si el Concepto es de entrada, salida, ajuste o traslado.

Adicional, se encuentran tres opciones de definición del Concepto a modo switche, estas son:

- **¿Este Concepto de Kárdex requiere una OT válida?**
Se enmarca cuando se trata de una transacción de movimiento que requiere para su ejecución, una OT válida.

- **¿Este Concepto de Kárdex es el predeterminado?**
Es una opción para definir que este concepto se utiliza por defecto en una transacción.

- **¿Este Concepto de Kárdex Corresponde a ítems Suministrados por el Contratista?**
Es una opción para definir si el concepto corresponde a ítem que son suministrados por el contratista.

### Subgrupo Conceptos de Kárdex

Se usa para seleccionar grupos de Conceptos de Kárdex que cumplen un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al ícono de filtro <span class="mdi mdi-filter-variant"></span> ubicado en la parte superior derecha de la ventana Visor de Conceptos de Kárdex.

![Procesar imagen](../../assets/images/cap02/chp02_img68.png)
_**Imagen 68.** Ventana Visor IE Conceptos de Kardex_

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Conceptos de Kárdex. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Conceptos de Kárdex.

El programa permite entonces hacer selección de un grupo de Conceptos de Kárdex de acuerdo con los criterios seleccionados en la siguiente ventana:

![Procesar imagen](../../assets/images/cap02/chp02_img69.png)
_**Imagen 69.** Ventana IE Subgrupo Conceptos de Kardex_

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes:

**Almacén:** Permite filtrar aquellos Conceptos de Kárdex que fueron asociados al almacén seleccionado. Lista los Almacenes creados en la tabla de Almacenes.

_**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además es posible hacer unión de selecciones. Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a>, en lugar de darlo al botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>._
