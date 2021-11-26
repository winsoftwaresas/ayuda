---
title: Conceptos de Kárdex
subtitle: Este módulo describe en detalle los tipos de transacciones o conceptos que constituyen el movimiento de artículos en un Almacén.
tags: [setup]
author: win
order: 02_05
---
Tales transacciones pueden ser de Entrada, de Salida o de Ajuste de inventarios. Cada transacción de  movimiento o concepto de Kárdex tiene asociado: un código o número distintivo (de 01 a 49, o, de 001 a 499, para las entradas por ejemplo) y otras condiciones de su uso.

![detalle de contrato](../../assets/images/cap02/chp02_img71.png)

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Almacén:** Indica el Almacén al cual está asociado el Concepto de Kárdex. Este campo es seleccionado de una lista desplegable que contiene los Almacenes. Cada Almacén  tiene su propio conjunto independiente de conceptos de Kárdex.

**Número CP:** Se refiere al código que identifica cada concepto. Por ejemplo, un número entre el 01 y 49 se puede establecer para conceptos de entrada, y del 51 al 99 para conceptos de salida. Mientras que el 50 para conceptos de ajuste.

**Descripción de CP:** Es una breve descripción, en treinta (30) caracteres, que define la transacción correspondiente al número seleccionado. Es un buen complemento el especificar la descripción de cada concepto como de Entrada, de Salida o de Ajuste (E/ S/, A/), al inicio de cada descripción del concepto.

**Tipo:** Se selecciona si el Concepto es de entrada, salida, ajuste o traslado.

Adicional, se encuentran tres opciones de definición del Concepto, estas son:

- **¿Este Concepto de Kárdex requiere una OT válida?**
  Se enmarca cuando se trata de una transacción de movimiento que requiere para su ejecución, una OT válida.
- **¿Este Concepto de Kárdex es el predeterminado?**
  Es una opción para definir que este concepto se utiliza por defecto en una transacción.
- **¿Este Concepto de Kárdex Corresponde a ítems Suministrados por el Contratista?**
  Es una opción para definir si el concepto corresponde a ítem que son suministrados por el contratista.

### Subgrupo Conceptos de Kárdex

Se usa para seleccionar grupos de Conceptos de Kárdex que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al `<a class="btn">`icono de filtro`</a>` icono de filtro, ubicado en la parte superior derecha de la ventana Visor de Conceptos de Kárdex.

![detalle de contrato](../../assets/images/cap02/chp02_img72.png)

- **AM**- mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos  los Conceptos de Kárdex. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Conceptos de Kárdex.

El programa permite entonces hacer selección de un grupo de Conceptos de Kárdex de acuerdo con los criterios seleccionados en la siguiente ventana.

![ventana ie ](../../assets/images/cap02/chp02_img73.png)

Los campos de datos que constituyen criterio de selección haciendo parte de la Ventana Subgrupo son los siguientes.

**Almacén:** Permite filtrar aquellos Conceptos de Kárdex que fueron asociados al almacén seleccionado. Lista los Almacenes creados en la tabla de Almacenes.

**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además  es posible hacer unión de selecciones.  Esto significa que inmediatamente después de haber
realizado una selección es posible hacer otra y unir el resultado de las dos.  Para ello, tras definir los criterios de la segunda selección se da un clic al botón `<a class="btn">`Mas (+)`</a>` , en  lugar de darlo al botón `<a class="btn">`Aceptar`</a>`.
