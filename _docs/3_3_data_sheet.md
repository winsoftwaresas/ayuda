---
title: Ficha Técnica
subtitle: aqui se encontrara el conjunto de información que define como un Activo de la empresa y también como un Objeto de Mantenimiento, tambin como se divide cuales son sue funciones y usos en am 4g.
tags: [setup]
author: win
order: 03_03
---
# Ficha Técnica

La Ficha Técnica de un Activo / Equipo es el conjunto de información que lo define como un Activo de la empresa y también como un Objeto de Mantenimiento.  Como activo de la empresa se define información relacionada a su Número de Activo o Número de Inventario, lo  relacionado  con  el  Centro  de  Costo  al  que  presta  sus   servicios  y  su  respectivo Responsable, además de sus fechas y costos de compra.

Como Objeto de Mantenimiento se define la información técnica del Activo / Equipo.  Esta porción  de  información técnica  se  descompone  en: Información Universal,  Información Característica e Información sobre Contadores y Estado.  Cada una de estas porciones se revisará detenidamente en los numerales que siguen.

**Nota:** Antes de proceder a registrar un Activo (Ficha Técnica), es importante verificar que toda la información prerrequisito ya fue creada en el Sistema.  Para un Activo se considera Información Prerrequisito: su Ubicación Física, Centro de Costo, Proveedor,  Fabricante y Características del Activo.	Esto garantiza una definición ágil del Activo,  al  tiempo que garantiza que cada nuevo Equipo similar, que se copie desde un  original, sea generado con la información integral.

En muchos procesos a través de opciones posteriores el – **AM**- entrega  automáticamente los campos de Ubicación Física, Centro de Costo, Proveedor,  Referencia, etc. con el solo hecho de seleccionar el Activo.  Esta es otra razón para involucrar desde el comienzo tales campos en el registro del Activo/Equipo.

## Información Universal

Es el conjunto de información genérica que es válida para cualquier Activo / Equipo,  sin distingos del  tipo, o de la función  que  desempeña. Código, Descripción, Referencia, Ubicación Física, Centro de Costo, Proveedor, Fabricante, Número de Serie, Tipo, Modelo, etc. es un conjunto de datos que encaja  en el concepto de Información Universal.  Son estos datos que son definibles a cualquier Objeto de Mantenimiento.

## Información Característica

Es un conjunto de datos propio del Activo / Equipo que depende del mismo, de su tipo o modelo y que se relaciona con sus características técnicas y funcionales. Cuando por ejemplo  se  define  la  información  característica  de  un  motor  se   toman  en  cuenta parámetros como su Voltaje, Amperaje, HP, RPM, Fases,  Conexión,  Blindaje, Factores de Potencia y de Servicio, etc.

Ninguno  de  estos  parámetros  sin  embargo,  es  de  utilidad  si  la  intención  es  definir  un Equipo   de   cómputo   o   una   instalación   locativa,   en   cuyos   casos   los   parámetros característicos serían muy diferentes.

Sobre  esta  información  característica  el  – **AM**– ofrece  una  tabla  preconfigurada   con nombres de  parámetros que  pueden  ser  escogidos  al  momento de configurar  la ficha técnica. Tales nombres de parámetros son modificables, adecuables,  borrables e incluso es posible adicionar nuevos a la tabla. Se pretende que el tratamiento que se dé a estos parámetros  a  todo  lo  largo  del  sistema  sea  uniforme  y  estandarizado.      Por esto la Administración  de la Tabla de Características es restringida y centralizada.

![detalle de activos](../../assets/images/cap03/chp03_img01.png)

## Información sobre Contadores

Es el conjunto de información referente al contador del Activo / Equipo. El contador  es normalmente un medidor de la cantidad de trabajo realizada por el Activo, en  función de una unidad de producción predefinida, como Horas trabajadas, Kilómetros recorridos por el vehículo, o número de Batches o Lotes o Piezas producidas.

Esta  información  se  requiere  sólo  cuando  el  Activo  usa  un  contador  que  sirve  para programar	Actividades 	de 	Mantenimiento,	mediante	la 	opción 	Programas 	de Mantenimiento del Menú Principal.

En forma alterna, cuando se trata de un Activo / Equipo que no trabaja con base en  una
Función Uniforme, sino en función de oferta y demanda, como por ejemplo un  compresor.

De respaldo el – **AM**- posibilita definir un Estándar de Planeación, que es un datos promedio del trabajo realizado por ese Activo en una Unidad de Tiempo, y que se debería ser definido para al menos una semana. Este dato se establece con base en registros históricos o estadísticos del desempeño del Activo. Este dato es utilizado por el Módulo de Programas de Mantenimiento, cuando debe realizar una proyección hacia el futuro.

## Codificación de Activos/Equipos

El **AM** está capacitado para aceptar y definir 5 códigos para cada Activo / Equipo.   Cada estructura de  código  es  independiente de  las  otras  y sirve  para  localizar  o   acceder  o estudiar un Activo, partiendo de distinta información que distintos tipos de usuarios puedan tener sobre el mismo.
Las cinco estructuras son: el Código de Mantenimiento (objeto de la presente sección),  el Código  Referencia  (código  externo,  o  dado  por  el  proveedor),  el   Código  de  Activo, el  Código de Inventario, un número de Activo Fijo (normalmente contable), un número de Serie propio del Activo, y un Código Alias (propio de la cultura técnica empresarial).

Como se dijo antes, en esta sección se estudia el Código de Mantenimiento del Activo.

Se trata entonces de un Código de 18 posiciones. Es  un  código  amplio,  jerárquico,  multinivel,  que  se  estructura  y  diseña flexiblemente de acuerdo con la necesidad o el gusto del usuario.

Estructurar el código de Activo / Equipo es una labor de Implementación que exige estudio, discusiones y participación de varios usuarios entendidos. Al tiempo exige a todo usuario con capacidad de definir códigos de Activos, el compromiso de uso,  ajustado a la norma que lo estructuró.
– **AM**– es capaz de asumir la estructura de Código que ya exista en la instalación. De todas formas si no se tiene una estructura predefinida o si se desea revisar y modificar la que ya existe, se deben tener en cuenta las siguientes observaciones:

**1.** **AM** garantiza un conjunto de funciones con base en el Código de Activo, que es estructurado y conformado por niveles jerárquicos. Con base en tal estructuración se posibilita el despiece de los Activos. A manera de ejemplo, una estructuración de los niveles que se menciona, podría ser: Activo/Equipo, Sistema, Subsistema, Componente y Parte, entre otros.

**Por ejemplo:** el código COARCSU se puede descomponer de la siguiente forma:

**CO** Grupo de Equipos corrugadores
**COA** Corrugador A
**COARC**  Sistema de Rodillos Corrugadores del Corrugador A.
**COARCSU** Rodillo superior del Sistema de Rodillos Corrugadores del **COA**

**2.**	Antes de codificar algún Activo se debe haber establecido la estructura general y común de codificación de Activos de la empresa. Tal estructura se conforma definiendo los grupos significativos de primer, segundo, tercer y en ocasiones hasta de cuarto orden, de acuerdo a la cultura técnica y requerimientos del área de Mantenimiento.
