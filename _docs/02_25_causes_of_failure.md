---
title: Causas de Falla
subtitle: Se explica la tabla de causas de falla y alcance.
tags: [setup]
author: win
order: '02_25'
media: "../../assets/images/docs/"
---

Esta tabla de la Infraestructura pretende definir las Causas reales de Falla, que normalmente sólo se detectan a través de una inspección previa.

En ella se han propuesto a manera de guía, algunas Causas de Falla, agrupadas en Básicas (B) e Inmediatas (I), según orientación de la norma ISO-14224. Se considera que de todas maneras la cultura técnica del área de mantenimiento y su experiencia en equipamiento y procesos específicos pueden variar y/o complementar la propuesta que hace **AM.**

**BÁSICAS (B)**:

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

- **BMI**-FALLAS MISCELÁNEAS
    - **BMI**-Desconocida
    - **BMI**-Miscelánea
    - **BMI**-Oculta

**INMEDIATAS (I):**

- **IEL**-FALLAS ELÉCTRICAS
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

- **IMI**-FALLAS MISCELÁNEAS
    - **IMI**-Desconocida
    - **IMI**-Miscelánea
    - **IMI**-Oculta

- **IIE**-FALLAS EXTERNAS
    - **IIE**-Bloqueado / Taponado
    - **IIE**-Contaminación

- **IME**-FALLAS MECÁNICAS
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
- **DI:** DISEÑO
- **FI:** FABRICACIÓN / INSTALACIÓN
- **MI:** MISCELÁNEAS
- **OP:** OPERACIONALES
- **EL:** ELÉCTRICAS
- **IE:** EXTERNAS
- **IN:** INSTRUMENTOS
- **ME:** MECÁNICAS
- **MT:** MATERIAL

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_67.png"
  alt:"Ventana Detalle Causa de Falla"
%}

En la gráfica anterior, Ventana Detalle de la Causa de Falla, se encuentra la información relevante a la Causa de Falla seleccionada en el Visor.

A continuación se describen los campos que componen el registro.

**Código:** Se define un código o indicativo único para la causa de falla, que puede ser un consecutivo. Ejemplo: **BOP**-01, el cual **BOP** corresponde a las abreviaturas del grupo y prefijo al que pertenece la Causa de Falla y 01 corresponde al primer registro.

**Nombre:** En este campo se registra la Causa de Falla. Este campo tiene una capacidad para 40 caracteres.

**Acciones Técnicas:** Es posible asociar a cada Causa de Falla las Acciones Técnicas que más comúnmente se ejecutan para evitarla y solucionarla. Se debe tener en cuenta que las Acciones Técnicas por Efecto pretenden ubicar la causa y que las Acciones Técnicas por Causa pretenden evitar y solucionar la causa.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_68.png"
  alt:"Ventana Detalle Causa de Falla (Acción Técnica)"
%}

En la ventana anterior Acciones Técnicas se seleccionan de la lista desplegable y se
adicionan con el botón del signo <span class="mdi mdi-plus-circle icon bg-gray cl-blue "></span>

Para desasociar una Acción Técnica de una Causa de Falla, se da clic en la Acción a desasociar y se presiona el icono <span class="mdi mdi-delete"></span>.

> **Nota:** Es importante tener en cuenta que las asociaciones y desasociaciones solo surten efecto al Actualizar o guardar la Causa de Falla.
