---
title: Efectos de Falla
subtitle: Se explica la tabla de efectos de falla y alcance.
tags: [setup]
author: win
order: '02_26'
---

En esta tabla se describen las formas en que una falla se manifiesta inmediatamente después de ocurrir. Se trata de las consecuencias de la falla, de los  efectos que esa falla ocasionó. Es un concepto que aunque ligado también a la falla es diametralmente opuesto a la causa. La causa, que normalmente es una sola, es la fuente de la falla, su origen. El efecto en cambio es la forma como se percibe, como se muestra la falla, una vez ha ocurrido. Hay efectos sonoros, otros son de rompimiento, otros son de generación de calor, otros de suspensión de la energía o de inoperancia o malfuncionamiento del equipo. La mayoría de ellos esconde, oculta o enmascara la causa real de la falla.

![Procesar imagen](../../assets/images/cap02/chp02_img58.png)
_**Imagen 67.** Ventana Detalle Efecto de Falla (Acción Técnica)_

A continuación se describen los campos que componen el registro:

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: EF-01, el cual EF corresponde a las abreviaturas de Efecto de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra el Efecto de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Efecto de Falla las Acciones Técnicas que más comúnmente se ejecutan como consecuencia de ésta. Como se menciona en las Causas de Falla, las Acciones Técnicas por Efecto pretenden **“Ubicar la Causa”** y las Acciones Técnicas por Causa pretenden **“Solucionar la Causa”**.

En la ventana anterior, las Acciones Técnicas se seleccionan de la lista despegable y se adicionan con el botón <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>.

Para desasociar una Acción Técnica de un Efecto de Falla, se da clic en la Acción a desasociar y se presiona el icono de basura <span class="mdi mdi-delete"></span>.

> _**Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar el Efecto de Falla._