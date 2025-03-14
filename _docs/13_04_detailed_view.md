---
title: Ventana Detalle
subtitle: Se explica el formulario de la vista detallada de un registro.
tags:       [setup]
author:     'win'
order:      '13_04'
---

## Ventana Detalle


Cuando se ingresa a un consumo o cuando se crea uno nuevo el sistema muestra la información detallada o relevante de la carga de combustible. Para acceder a esta ventana hay dos formas:

- En la ventana visor desde el botón <a class="btn cl-blue bg-white px-3"> NUEVO</a>, donde se debe diligeciar el formulario.

![Procesar imagen](../../assets/images/cap18/chp18_img04.png)
_**Imagen 4.** Combustibles - Crear nuevo registro_


- Desde un clic a cualquiera de los registros se visualiza la información detallada. 



![Procesar imagen](../../assets/images/cap18/chp18_img05.png)
_**Imagen 4.** Combustibles - Formulario_


En la gráfica anterior, Ventana Detalle del abastecimiento se aprecian todos sus componentes  y sus respectivos contenidos.

A continuación se explican brevemente los campos que componen el registro. 

- **Datos de Control de Consumo**

**Vale de Consumo:** Es un documento o comprobante que se emite cuando se realiza un abastecimiento de combustible. Donde se detallan aspectos importantes, este campo es obligatorio. 

**Contrato:** Es un campo despegable que muestra aquellos contratos asociados a los abastecimientos o consumos (definido en la ficha técnica del contrato desde su respectiva tabla en la <a class="btn cl-white bg-blue px-3">Infraestructura</a>). 

**Referencia:** Es un número o código único que se asigna a cada transacción o abastecimiento de combustible. 

- **Datos del Vehiculo**


**Código del Activo** Es un campo donde debe estar registrado el Activo/Equipo.  Se debe usar el subgrupo <span class="mdi mdi-filter-variant icon white"></span>. 
Continue dando clic sobre el subgrupo y en la ventana ventana de Activos que se despliega, también es posible hacer búsquedas o subgrupo. Seleccione el Activo de interés con un doble clic o accione el botón 
<a class="btn cl-blue bg-white px-6"> ACEPTAR </a> como se muestra en la siguiente imagen:


![Procesar imagen](../../assets/images/cap18/chp18_img06.png)
_**Imagen 5.** Combustibles - Seleccionar Activo_

**Conductor:** Se refiere al responsable del Activo/Vehículo. Es un campo desplegable que lista los Responsables Internos (RI) en la tabla de Terceros en <a class="btn cl-white bg-blue px-3">Infraestructura</a>. 

**Kilómetros recorridos:** Es un campo de sólo números que indica los kilómetros o las horas trabajadas hasta el abastecimiento actual. 

_**Nota:** El kilometraje o los galones por hora se configuran en la ficha técnica del Activo. De esta manera el nombre del campo cambia a Kilómetros recorridos u Horas Trabajadas_ 

- **Datos del Consumo**

**Fecha del consumo:** Indica la fecha del abastecimiento o carga del combustible. 

**Tipo de combustible:** Este campo lista los tipos de combustibles configurados en la tabla de Combustible en <a class="btn cl-white bg-blue px-3">Infraestructura</a>.

**Cantidad Consumida:** Este campo debe indicar la cantidad del abasteciiento según la unidad de medida ( litros, galones). 

**Unidad de Consumo:** Se listan las unidades de medida o cantidad estándar que se hayan marcado para combustible en la tabla de unidades de medida en <a class="btn cl-white bg-blue px-3">Infraestructura </a>.

**Costo Unitario:** Se refiere al valor o costo de la cantidad suministrada. 

**Costo Total de Consumo:**  Es el producto de la cantidad consumida por el costo unitario.

Para finalizar accione el botón 
<a class="btn blue">INSERTAR <span class="mdi mdi-plus-circle-outline"></span></a> o si está actualizando un registro el botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>. 

