---
title: Otros Conceptos de Costo
subtitle: Se explica la tabla de otros conceptos de costos y su alcance.
tags: [setup]
author: win
order: '02_21'
media: "../../assets/images/docs/"
---

El objetivo de esta tabla es registrar aquellas actividades complementarias que generan costos en una OT, que son indirectos respecto a la misma y que son  facturados por un ente externo. Este es el caso, por ejemplo, de los costos de transporte necesarios para llevar a mecanizar una pieza, o para arrendar y desplazar un equipo o un instrumento, o para desplazar a un ingeniero y cubrir sus gastos de viaje y viáticos.

También se usa para cargar a una OT, costos de trabajos eventuales, no rutinarios, especializados, de costo relativamente bajo, que no ameritan la generación de una OT. Algunos ejemplos son: la cepillada de una campana o una rotación de llantas, labores que se ejecutan como parte de una OT mecánica.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"02_63.png"
  alt:"Ventana Detalle Otros Concepto de Costo"
%}

En la gráfica anterior, Ventana Detalle del Otro Concepto de Costo, se aprecian sus componentes y sus respectivos contenidos.

A continuación se describen los campos que componen el registro, sobre cada campo se da una breve explicación:

**Código:** Se define un código o indicativo único para el otro concepto de costo, que puede ser un consecutivo. Ejemplo: OC-001, el cual OC corresponde a las abreviaturas de Otro Concepto y 001 corresponde al primer registro.

**Nombre:** En este campo se escribe el nombre del Concepto generador de costo distinto de Mano de Obra y de Materiales y Repuestos. Es una descripción corta de 25 caracteres. Algunos ejemplos de estos Otros Conceptos pueden ser: Transporte Terrestre de un Equipo, Transporte y Viáticos de un operador que se trasladó desde otra ciudad, mecanizado de una pieza sencilla, etc.

**Valor Unitario:** Este campo indica el costo unitario de la actividad. Solamente se debe registrar este valor si corresponde a una tarifa o precio que se ha pactado con el proveedor, y que se ejecuta rutinariamente. Es posible dejar  este valor en blanco y al momento de cargarlo a una Orden de Trabajo, registrar manualmente el  valor.

**Unidad de Medida (UM):** Este campo es para seleccionar la unidad de medida que corresponde al **Otro Concepto de Costo.** Se elige una de las disponibles que se descuelgan de la lista.

**Informativo** Este switch permite activar el Otro Concepto de Costo como campo Informativo, lo que quiere decir que NO se genera costo. En caso de querer cuantificar esta actividad no se debe activar el switch.

**Tipo  de Trabajo (TT):** Indica el Tipo de Trabajo al cual se relaciona el Concepto de Costo registrado: Elc (eléctrico), Mec (mecánico), I/E (instrumentación y electrónica), Otr (otros).

El Tipo de Trabajo cualifica el valor del costo permitiendo que se cargue en una fila y en una columna precisamente definida en la tabla de Gasto Real en la Orden de Trabajo.
