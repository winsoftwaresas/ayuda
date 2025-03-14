---
title: Ventana Principal
subtitle: Se explica la ventana con sus componentes y funcionalidades.
tags:       [setup]
author:     'win'
order:      '13_03'
---

## Ventana Visor


La forma de ingresar a la ventana principal o al visor del módulo es dando un clic en el menú principal en la opción  <a class="btn cl-white bg-blue px-3"> Combustibles </a>, como se indica en el siguiente ejemplo:

![Procesar imagen](../../assets/images/cap18/chp18_img01.png)
_**Imagen 1.** Combustibles - Ir a Combustibles_

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado, al igual que los demás módulos, es posible desplazarse entre páginas <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-left"> </span></a> <a class="btn white cl-blue bd-white"><span class="mdi mdi-chevron-right"> </span></a>. 

### Subgrupo 


Esta funcionalidad se ubica en la parte superior derecha del visor, representado por medio del ícono <span class="mdi mdi-filter-variant"></span>. Se usa para filtrar grupos de registros o abastecimientos que cumplen con un conjunto de filtros o criterios. El objetivo de hacerlo es realizar un estudio posterior sobre los consumos del mes o de un determinado período. 

![Procesar imagen](../../assets/images/cap18/chp18_img02.png)
_**Imagen 2.** Combustibles - Ir a Subgrupo_


Al ingresar al subgrupo, se muestran los siguientes criterios de búsqueda.  Cada uno aparece inicializado en un valor global que permite mostrar todos los abastecimientos. Lo que significa que de no escoger un criterio se obtiene como resultado del  subgrupo el mismo conjunto de todos los registros de abastecimientos.

**AM** mantiene activo cualquier subgrupo visualizandose el ícono con una pelota de color rojo <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>; esto indica que lo que se visualiza en el visor es un subgrupo hasta que el usuario lo modifique o restablezca los valores estándar. 

Se da una explicación breve de cada criterio:

![Procesar imagen](../../assets/images/cap18/chp18_img03.png)
_**Imagen 2.** Combustibles - Subgrupo_


**1. FILTRAR POR CAMPOS DEL ACTIVO ASOCIADO AL COMBUSTIBLE**

**AC - Alias:** Este campo filtra los registros activos para el o los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC – Cód. de Barras Int.:** Permite seleccionar los registros que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo y que posea una Órden.

**AC – Cód. de Barras Prov.:** Permite seleccionar los  registros asociados a un Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.


**AC - Código:** Esta selección agrupa los abastecimientos cuyos Activo coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todas los abastecimientos cuyo código de Activo inicia por 341. Si se escribe %1 se seleccionan todas las OTs cuyo código de Activo finaliza en un “1”. El porcentaje (%) es un carácter comodín que significa “todos”. También, es posible seleccionar el Activo a través del visor del módulo de Activo. Para ello se da un clic sobre el icono <span class="mdi mdi-filter-variant"></span> que se encuentra al lado del campo. Acto seguido se muestra la ventana de visor de Activos independiente. Allí, una vez se encuentra el Activo, se selecciona dando un clic sobre cualquiera de sus campos. A continuación, se da un clic sobre botón <a class="btn white">Aceptar</a> o se hace doble clic sobre el registro seleccionado. Inmediatamente este código aparece automáticamente en el campo.

**AC-Descripción:** Agrupa los registros asociados a los Activos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra “Motor”.

**AC-Estado:** Filtra los registros de acuerdo con el “Estado” de un Activo/Equipo u objeto de mantenimiento que se encuentre en estado “activo”.

**AC-Número Activo Fijo:** Este campo filtra los registros para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Referencia:** Agrupa los registros para el o los Activos cuya Referencia  corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines (%).

**AC-Serial:** Esta alternativa permite filtrar los registros de acuerdo con el número serial del Activo objeto de mantenimiento, el campo acepta comodines (%).

**AC-Ubicación Física:** Permite la selección de los consumos cuyo Activo se encuentre en una Ubicación Física determinada. Existen dos formas de definir la Ubicación Física del Activo. La primera es seleccionando una de la lista desplegable. La segunda es dando clic al icono <span class="mdi mdi-lock"></span>, el cual se desactiva <span class="mdi mdi-lock-open-outline"></span> y permite digitar segmentos del nombre de la Ubicación Física utilizando comodines (%) lo cual, también hace posible seleccionarun consumo cuyo Activo esté en una Ubicación Física que tenga parte del nombre igual. Por ejemplo: Cava% selecciona los registros con Activos cuya Ubicación Física empieza por la palabra Cava, independientemente de si se está hablando de la Cava de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona los consumos  asociados a los Activos que se encuentran asociados al tipo ingresado por el usuario.



**2. FILTRAR POR CAMPOS DEL CONSUMO**

**Vale:** Agrupa los consumos según el vale o comprobante ingresado en el campo. Este campo permite usar comodines (%).

**Referencia:** Filtra según el número o código único que asignada a una carga de combustible. Este campo permite usar comodines (%).

**Contrato:** Filtra los registros cuyo contrato para combustibles se defina en este campo.

**Conductor:** Este campo desplegable selecciona los registros o consumos cuyo conductor (Responsable Interno - RI) se defina en este campo.

**FF de Consumo:** Agrupa los registros según el rango de fechas que se defina en el campo **Desde** y **Hasta**.