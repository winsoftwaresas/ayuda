---
title: Referencias
subtitle: Se explica la tabla de referencias y su alcance.
tags: [setup]
author: win
order: '02_29'

---

Permite registrar, cuando sea aplicable, las Referencias de Producto de la compañía usuaria. Tales Referencias de Producto se usan para complementar la información de un paro o una avería en el módulo de Paros / Averías. El objetivo es poder identificar detalladamente las circunstancias que rodearon el paro o la avería qué Referencia, y en qué operación particular del proceso se estaba elaborando.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Código:** Es un alfanumérico único de 10 caracteres, que identifica la Referencia de producto.

**Nombre:** Contiene una descripción de la Referencia de Producto, cuenta con un espacio de 80 caracteres.

**Estado:** Una Referencia puede encontrarse en uno de dos estados: Activa o Inactiva.

**Adicionar OP:** Es posible adicionar una o varias Operaciones a una Referencia.

![Procesar imagen](../../assets/images/cap02/chp02_img71.png)
_**Imagen 71.** Ventana Detalle Referencia_

En la ventana anterior Ventana Detalle de la Referencia se seleccionan las Operaciones de la lista despegable y se adicionan con el botón del signo Más <span class="mdi mdi-plus-circle icon white"></span> a la lista de Operaciones asociadas a una Referencia.

Para desasociar una Operación, se ubica el cursor en la Operación a desasociar y se presiona el icono de Eliminar (basura) <span class="mdi mdi-delete"></span> eliminar (basura).

>_**Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Referencia._