---
title: 'Seguimiento y Cierre de Paros / Averías'
subtitle: 'El proceso de cierre de un FDA reviste el rigor de un cierre de OT y un proceso similar al de una SS. Se refiere el rigor de una OT a la precisión sobre las fechas y horas y a la clara definición de la Causa de la Falla.'
tags: [setup]
author: win
order: '08_04'
media: "../../assets/images/docs/"
---
El proceso de cierre de un  **FDA** como tal, es similar, aunque más sencillo, al de una  SS. consiste en cambiar el **“Estado”**, por uno de dos: **“Cerrada Ejecutada”** o  **“Cerrado con OT”**, Para mayor detalle se debe referir al acápite **“Seguimiento y Cierre”** de Solicitudes de Servicio.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_21.png"
  alt:"Estados FDA / PARO"
%}

A esta ventana se llega haciendo clic sobre la opción Paros del Menú Principal. 

Desde esta ventana es posible observar los PAROS /  **FDA** existentes. Se listan todos o   una selección o subgrupo de ellos. El conjunto de PAROS /  **FDA** disponibles a ser desplegado se muestra a través de  páginas. El tamaño  de  las  páginas  es  configurable  desde  la  opción Administración del menú principal, en la  sección **“Valores por Defecto”** por parte de un usuario autorizado.

Al hacer clic sobre algún registro de PAROS /  **FDA** del Visor, el sistema responde  mostrando la información de ese  **FDA**, en forma detallada, en una ventana llamada Ventana Detalle.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la    tabla, según el título seleccionado. Para elegir un registro de la tabla se da un clic del mouse sobre él o se desplaza el cursor con las teclas de desplazamiento.

# Ventana Submenú de Paros / Averías

## Indicadores

Es posible visualizar de manera inmediata, los PAROS / **FDA** con Multimedia y Servicio Evaluado, directamente desde la ventana visor, a través de la columna **Indicadores** que muestra una pelota de color que indica si tiene asociado Multimedia y/o si tiene el Servicio Evaluado. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana visor.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_07.png"
  alt:"Indicadores"
%}

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Naranja:** PARO /  **FDA** que tienen asociados archivos de imágenes, videos y/o documentos en la pestaña Multimedia.
- **Azul:** PARO /  **FDA** en estado Cerrada Ejecutada al que se le realizó la evaluación del Servicio.

## Subgrupo

Se usa para seleccionar grupos de Paros y/o Averías que cumplen con un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al <span class="iconify btn" data-icon="mdi-filter-variant"></span> ícono de filtro, ubicado en la parte superior derecha de la ventana Visor de Paros.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_08.png"
  alt:"Paros FDA"
%}

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Paros. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto de todos los Paros.

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar.

El programa permite entonces hacer selección de un grupo de Paros de acuerdo con los criterios seleccionados en la siguiente ventana.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_09.png"
  alt:"Ventana de Paros FDA"
%}

Los campos de datos que constituyen criterio de selección en la Ventana Subgrupo de
Paros son los siguientes.

**1. FILTRAR POR CAMPOS DEL EQUIPO/ACTIVO ASOCIADO AL PARO**

**AC - Alias:** Este campo preselecciona los Paros para los Activos cuyo Alias corresponda a los valores aquí definidos. En este campo se pueden utilizar los comodines.

**AC – Cód. de Barras Int.:** Permite seleccionar los Paros que se encuentran asociadas al Activo que se encuentre con el Código de Barras Interno que el usuario ingresa en este campo del subgrupo y que posea un Paro.

**AC – Cód. de Barras Prov.:** Permite seleccionar los Paros asociadas a un   Activo que se encuentre ligado al Código de Barras del Proveedor que se ingresó al crear el Activo.

**AC - Código:** Esta selección agrupa los Paros cuyos Equipo/Activos coincidan con el relacionado en este criterio. Es posible definir el código completo o una porción del mismo. Por ejemplo: si se escribe 341%, se seleccionan todos los Paros cuyo código de Equipo/Activo inicia por 341. Si se escribe %1 se seleccionan todos los Paros cuyo código de Equipo/Activo finaliza en un **1**. El porcentaje (%) es un carácter comodín que significa **todos**.

**AC-Descripción:** Selecciona los Paros asociados a los   Activos según criterios que se fundamenten  en  su  descripción.  Ejemplo: %Motor% selecciona todos los Activos, en cuya descripción, en cualquier posición, tengan la palabra **“Motor”**.

**AC-Estado:** Este filtro permite seleccionar los PAROS / **FDA** de acuerdo con el Estado del Activo u Objeto de Mantenimiento. Así que se pueden filtrar los PAROS /  **FDA** para los cuales el AC correspondiente está activo o inactivo.

**AC-Número Activo Fijo:** Este campo preselecciona los PAROS / **FDA** para el o los Activos cuyo Número de Activo corresponde a los valores aquí definidos. En este campo se pueden utilizar los comodines.

**AC-Referencia:** Este filtro permite seleccionar PAROS / **FDA** de acuerdo con su número de Referencia.

**AC-Serial:** Esta alternativa permite seleccionar los Paros de acuerdo con el número serial del Equipo/Activo objeto de mantenimiento. El campo acepta comodines.

**AC-Ubicación Física:** Permite la selección de los PAROS / **FDA** cuyo Activo se encuentre en   una   Ubicación Física   determinada.  Cuando   se   utilizan   comodines, es   posible seleccionar PAROS / **FDA** cuyo Activo esté en una Ubicación Física  que tenga parte del nombre igual.  Por ejemplo: Cava% selecciona los PAROS / **FDA** a Activos cuya Ubicación Física empieza por la  palabra  Cava,  independientemente  de   si  se  está  hablando  de  la  Cava  de Fermentación, Maduración o Contrapresión.

**AC-Tipo:** Selecciona los PAROS / **FDA** asociados a los Activos que se   encuentran asociados al tipo ingresado por el usuario.

**2. FILTRAR POR CAMPOS DEL PARO**

**Causa  de Falla:**   El  sistema  busca  todos  los  Paros  que  tengan  registrada  la   falla seleccionada de la lista o que cumplan con el criterio de búsqueda utilizado, marcando la opción utilizar comodines.

**Centro Responsable:** Agrupa los PAROS /  **FDA** cuyo Centro responsable es el seleccionado.

**Estado del Paro:** Este criterio agrupa los PAROS /  **FDA** de acuerdo a un Estado. Al descolgar aparece el listado de todos los Estados posibles para un Paro.

**FF de Cierre:** Permite la selección de los Paros cuya fecha de Cierre se encuentren incluidas en el rango especificado en este campo, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si se especifica la **“fecha  desde”**, pero no se especifica la **“fecha hasta”**, el sistema utiliza como **“fecha hasta”** la fecha actual.

**FF de  FDA:** Este campo preselecciona los Paros cuya fecha de Falla, Daño o Avería se encuentre en el rango especificado, si no se especifica una de las 2 fechas, el sistema establece un rango abierto para esta fecha, es decir, si  se especifica la **“fecha  desde”**, pero no se especifica la **“fecha hasta”**, el sistema utiliza como **“fecha hasta”** la fecha actual.

**Responsable:** Este criterio agrupa todos los Paros que  hayan sido  atendidos por  el Responsable especificado. En este campo se pueden utilizar los comodines.

**Solicitante (Digitado manualmente):** Agrupa los Paros cuyo solicitante fue especificado manualmente en este campo. Se pueden utilizar los comodines.

**Solicitante (Incluido en TE – Tipo RI)**: Este campo permite seleccionar los Paros activos para el o los Solicitantes aquí definidos. Existen dos formas de definir el Solicitante o grupo de Solicitantes. La primera es seleccionando el  solicitante de la lista desplegable. La  segunda  es dando clic al <span class="iconify btn" data-icon="mdi-lock"></span> Candado **Utilizar  comodines**  y digitando a continuación segmentos del nombre del Solicitante utilizando comodines.

**Tipo de Actividad:** Filtra los Paros por el Tipo de Actividad que aquí se selecciona. Existen dos formas de filtrar el Tipo de Actividad. La primera es seleccionando el Tipo de Actividad de la lista desplegable. La segunda  es dando clic  <span class="iconify btn" data-icon="mdi-lock"></span> Candado **Utilizar  comodines** y digitando a continuación segmentos del Tipo de Actividad utilizando comodines.

**Tipo de Mantenimiento:** Este criterio de búsqueda filtra los Paros y Averías por el Tipo de
Mantenimiento que aquí se selecciona.

**Tipo de Trabajo:** Este criterio de búsqueda filtra los Paros y Averías por el Tipo de Trabajo que aquí se selecciona.

**Referencia:** Este  campo  preselecciona  los  Paros que  tengan  registrada  la  referencia elegida.  En este campo se pueden utilizar los comodines.

## Transacciones

### Enviar a Historia

A esta opción se llega al sobreponer el cursor del mouse sobre el módulo de Paros y al lado derecho se despliega el conjunto de transacciones disponibles para el módulo de Paros, luego se elige la transacción **Enviar a Historia**.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_15.png"
  alt:"Paros"
%}

El objetivo de esta transacción es desplazar hacia el módulo de Historia de Mantenimiento, los  registros que  se  hayan  preseleccionados por  un  subgrupo, es   decir, los que se encuentran en el visor,  que además tengan estado de Cerrados y residan todavía en el módulo de Paros. Los estados de  Cierre  que  son  tomados para  este  proceso son:   Cerrada Ejecutada y Cerrado con OT.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_16.png"
  alt:"Ventana PAROS /  FDA (Transacciones- Enviar a Historia)"
%}

En  la  gráfica  anterior, Enviar a Historia, se  aprecian  sus  componentes  y   sus respectivos contenidos.

A continuación se  describen  los  campos  que  componen  esta  Ventana   información adicional.

En la ventana aparece un botón <a class="btn">Enviar</a> y tres casillas de selección. Estas casillas  de selección parametriza los registros que se desean enviar a Historia.

**Todos los registros del visor:** Con esta opción se realiza el envío de todos los Paros existentes en la base de datos, sin importar cualquier subgrupo activo.

**Registros del visor:** Esta opción realiza el envío de todos los Paros seleccionados en el visor mediante un subgrupo.

**Registro seleccionado:** Esta opción realiza el envío del Paro que está resaltado en el visor (tiene la línea verde del cursor sobre sí).

### Exportar

Esta opción permite la exportación de los Paros y Averías que aparecen en el visor, totales o provenientes de un subgrupo, a un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso.

Al ejecutar esta transacción, se abrirá una ventana la cual se muestra a continuación.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"08_17.png"
  alt:"Ventana PAROS /  FDA (Transacciones- Exportar)"
%}

Al darle clic en el botón <a class="btn">Exportar</a>, se generará un archivo de Excel que se descarga automáticamente en la estación cliente donde se ejecutó el proceso, el objetivo de esta exportación es llevar toda la información de los Paros contenidos en el visor a un archivo plano, para luego ser analizados.

Adicionalmente, es posible exportar todos los campos de la ventana Detalle de los Paros y Averías, para esto se da clic en el cuadro llamado **Exportar Todas Las Columnas**. También, es posible exportar uno o varios campos de la ventana Detalle de los Paros y Averías, para esto se da clic en cada uno de los cuadros que acompañan los campos.