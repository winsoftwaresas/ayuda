---
title: Ventana Principal
subtitle: Se explican los comandos y detalles respecto a la ventana visor de Tecnovigilancia.
tags:
  - setup
author: win
order: '06_03'
---


A esta ventana visor se llega accionando el módulo <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a> como se muestra a continuación:


![Procesar imagen](../../assets/images/cap17/chp17_img01.png)
_**Imagen 1.** Tecnovigilancia - Ir a Analizar_


Luego, el usuario debe ingresar el rango de fechas a analizar y continuar accionando el botón <a class="btn cl-blue bg-gray px-6"> Iniciar Búsqueda </a>: 

![Procesar imagen](../../assets/images/cap17/chp17_img02.png)
_**Imagen 2.** Tecnovigilancia - Iniciar búsqueda_


Una vez el sistema haga la carga, accione el botón <a class="btn cl-red bg-white px-6"> Activos con Alertas </a>:

![Procesar imagen](../../assets/images/cap17/chp17_img03.png)
_**Imagen 3.** Tecnovigilancia - Iniciar búsqueda_

De esta manera, el sistema muestra los Activos relacionados con la alerta sanitaria:

![Procesar imagen](../../assets/images/cap17/chp17_img04.png)
_**Imagen 4.** Tecnovigilancia - Resultado búsqueda_


A continuación se da una explicación de los componentes de la ventana principal:

### Indicadores 

En la parte superior derecha se ubica el  icono <span class="mdi mdi-message-alert"></span>, esto permite visualizar y hacer gestión inmediata el estado de las alertas, los colores son:

- **Rojo:** Alerta aplica
- **Verde:** Alerta no aplica
- **Negro:** Alerta Abierta 
- **Azul:** Alerta Cerrada


>**Nota:** Por defecto, el sistema asigna los indicadores Alerta No Aplica y Alerta Abierta. 


### Subgrupo


Esta función  <span class="mdi mdi-filter-variant"></span> permite filtrar información precisa y detallada acorde a un conjunto de criterios, con el fin de hacer análisis y gestión específica, para ellos diríjase a la parte superior derecha y accione el ícono:


![Procesar imagen](../../assets/images/cap17/chp17_img05.png)
_**Imagen 5.** Tecnovigilancia - Ir a Subgrupo_

Cada criterio trabaja en conjunto con los demás, con el operador intersección (Combinación de criterios).

Cada criterio aparece inicializado en un valor global que permite mostrar todos los Activos. Lo que significa que de no escoger un criterio se obtiene como resultado del subgrupo el mismo conjunto de todos los Activos. Para ver si un subgrupo está activo el ícono se visualiza con una pelota de color rojo <a class="btn bg-white fs-2"><span class="iconify btn-icon cl-black" data-icon="mdi-filter-variant"></span><span class="dot bg-af-red"></span></a>; esto indica que lo que se visualiza en el visor es un subgrupo hasta que el usuario lo modifique o restablezca los valores estándar. Se muestra un ejemplo:


![Procesar imagen](../../assets/images/cap17/chp17_img06.png)
_**Imagen 6.** Tecnovigilancia - Subgrupo_


>**Nota:** La imagen anterior, muestra que se observa 1 registro o alerta de un total de 17 Activos con alerta. Esta fracción al igual que el icono indican que hay un subgrupo activo.  



El programa permite entonces hacer selección de un grupo de Activos de acuerdo con los criterios de la  ventana. Los campos que constituyen los criterio de selección haciendo parte de la Ventana Subgrupo de Tecnovigilancia, sobre cada uno se da una explicación:  



![Procesar imagen](../../assets/images/cap17/chp17_img07.png)
_**Imagen 7.** Tecnovigilancia - Subgrupo_

**Código:** Esta selección agrupa los Activos/Equipos relacionados, por su código. Por ejemplo si se escribe **2101%**, se seleccionan todos los Equipos cuyo código inicia por 2101. El porcentaje es un carácter comodín que significa **“todos”.**


**Código INVIMA:** Filtra aquellos Activos con una parte o el número completo del registro INVIMA. Este campo acepta comodines (%).


**Descripción:** Selecciona los Activos/Equipos según criterios que se fundamenten en su descripción. Ejemplo: %Motor% selecciona todos los Activos/Equipos en cuya descripción, en cualquier posición, tengan la palabra  “Motor”.

**Fabricante:** Permite seleccionar los Activos/Equipos de  acuerdo con un determinado Fabricante. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.


**Marca:** Esta opción permite realizar un filtro de los Activos/Equipos que tengan asignada la Marca que se especifica en este campo.

**Modelo:** Permite realizar un Subgrupo de Activos/ Equipos que tengan asignado el Modelo que se especifica en este campo.

**Proveedor:** Permite seleccionar los Activos/Equipos según un determinado Proveedor. Esta opción también permite el  uso de comodines y funciona igual que en los casos anteriores.

**Referencia:** Permite seleccionar los Activos/Equipos según la referencia definida en su ficha técnica. Esta opción también permite el uso de comodines y funciona igual que en los casos anteriores.


**Serial:** Esta alternativa permite seleccionar un Activo/Equipo de acuerdo con su número Serial.



>**Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos, se pueden utilizar uno o varios de estos criterios simultáneamente. También se permite la unión de selecciones, es decir, después de haber realizado una búsqueda de un criterio, es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección, se da un clic al botón <a class="btn white">MAS <span class="mdi mdi-plus-circle"></span></a> , en lugar de darlo al botón <a class="btn white">ACEPTAR <span class="mdi mdi-check-circle"></span></a>. Utilice el 
<a class="btn white">MENOS <span class="mdi mdi-minus-circle"></span></a> para el caso contrario; restar registros a un subgrupo. 
