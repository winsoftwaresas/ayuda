---
title: Tablas de Infraestructura
subtitle: Aquí se aclara el uso y las opciones de las tablas de infraestructura del sistema AM.
tags: [setup]
author: win
---

## Terceros 

Almacena la información de cuatro tipos diferentes de entes terceros relacionados con el sistema.

**Responsable Interno / Empleado (RI):** Es el tipo de Tercero que denota a los trabajadores del área interna de mantenimiento de la compañía. Caben también  en este tipo los empleados de la compañía que tienen bajo su responsabilidad algún objeto de mantenimiento definido en la módulo de Activos. Un ejemplo de ello,  los conductores de vehículos de la empresa o los operarios de algún equipo.

**Responsable Externo / Contratista (RX):** Es el tipo de Terceros, responsables de la ejecución de tareas de mantenimiento, como entes externos a la empresa, en la categoría de Contratistas, de Talleres Externos o de Servicios Externos de Mantenimiento.  Un ejemplo, los proveedores de servicio de mantenimiento de ascensores, de calderas, o de aire comprimido, cuando son Talleres Externos, expertos, llamados por solicitud, o cuando actúan según términos definidos en un contrato de servicios.

**Proveedor / Fabricante (PF):** En este grupo se registran los proveedores, en todas  sus modalidades, los fabricantes de los Activos/Equipos o de los objetos de mantenimiento. También caben aquí los proveedores de Repuestos y de materiales de la organización.

**Otro Tipo de Tercero (OT):** Este grupo está abierto para definir otros tipos de Terceros requeridos por condiciones particulares de cada organización. Únicamente se puede usar en conjunto con el tipo RI, para indicar que son usuarios solicitantes. 

![Procesar imagen](../../assets/images/cap02/chp02_img02.png)
_**Imagen 2.** Ventana Terceros_

En la porción de la ventana Visor de Terceros que se aprecia en la gráfica aparecen  las columnas correspondientes a los campos más significativos de esta tabla. Al seleccionar un registro de esta ventana, se muestra la ventana Detalle con la  información completa del Tercero seleccionado.

![Procesar imagen](../../assets/images/cap02/chp02_img03.png)
_**Imagen 3.** Ventana Detalle TE_

En la ventana Detalle de Terceros se encuentra toda la información relevante del Tercero seleccionado en el Visor. Es una ventana que de no aparecer completa debe ser recorrida con la ayuda de la barra de desplazamiento vertical.

A continuación se describen los campos que componen el registro. No todos ellos son obligantarios. Sobre cada campo se da una breve explicación: su contenido y diversas recomendaciones para su registro correcto y consistente en la base de datos.

**Código (de Tercero):** En este campo se escribe el código de Tercero Externo, para el caso de los contratistas, proveedores y fabricantes, se usa normalmente el NIT o el RUT, o cualquier otro código de identificación nacional, único  ante los sistemas fiscal, tributario y financiero. Cuando se trate de personal propio de la empresa se debe escribir el número de su cédula de ciudadanía o un número interno de carné o de identificación personal.

**Nombre:** En este segundo campo se escribe el nombre con el que se identifica el Tercero. Es posible escribir los nombres tipo título: La primera letra de cada nombre en mayúscula y las siguientes en minúsculas, o en otro caso con todo el texto en mayúsculas.

**Estado:** En este campo se asigna si el tercero está activo o inactivo. Es importante utilizar este campo cuando se quiera identificar el personal que está en vacaciones, incapacitado, en comisión, suspendido, retirado de la empresa u otro.

**Tipo:** Este campo permite identificar claramente la actividad y relación del Tercero con la empresa. Un Tercero puede tener varias relaciones con la empresa, relaciones que se establecen seleccionando una o varias posibilidades en las casillas correspondientes. Se han definido los siguientes tipos de Tercero:

- Responsable Interno / Empleado (RI) 

- Responsable Externo / Contratista (RX) 

- Proveedor / Fabricante (PF)

- Responsable Interno y Otro (RI-OT)

- Responsable Externo y Proveedor / Fabricante (RX-PF)

Cuando se selecciona cualquiera de los dos primeros tipos de Tercero (Responsable), es necesario identificar el **Oficio** que realiza el Tercero. Para esto el programa permite desplegar todos los Cargos Técnicos/Oficios que han sido ingresados previamente al sistema.

El programa permite seleccionar solo uno de dos: **Responsable Interno** o **Responsable Externo**. En ambos casos el sistema solicita a continuación el nombre del Oficio o de la especialidad del Tercero.

Un **Responsable Interno (RI)** no puede ser al tiempo **Proveedor (PF)** de la compañía, entonces ésta combinación está inhabilitada.

**Oficio:** En este campo se seleccionaal  de la lista despegable, el oficio o cargo técnico o especialidad del Tercero. Al seleccionar un Oficio, el programa muestra automáticamente el nombre del Centro Responsable al que está asociado el Oficio.   

**Contacto:** En este campo se ingresa, para el caso de contratistas y proveedores, el nombre de la persona representante del Tercero ante la empresa. Para el caso de Terceros internos es posible ingresar el mismo nombre del Tercero, o de un representante de su área, o de la secretaria del área o es posible también dejarlo en blanco.

**Correo Electrónico:** En este campo se escribe la dirección electrónica del Tercero. 

**Dirección:** En este campo se diligencia la dirección donde se localiza el Tercero. 

**Ciudad y País:** Aparecen dos campos, en los cuales debe ir la siguiente información:

En el primer campo se escribe la ciudad donde está ubicado el Tercero. En el segundo campo se escribe el país.

**Teléfonos:** Aparecen dos campos para dos números telefónicos: Teléfono 1 y Teléfono 2. 

Cuando se vaya a escribir un número telefónico es importante tener en cuenta que los tres primeros dígitos que se escriban deben corresponder al indicativo de la ciudad o del área. El programa automáticamente escribirá estos tres dígitos dentro de un  paréntesis.   Los siguientes siete dígitos corresponden al número de teléfono y a partir del octavo dígito corresponde al número de la Extensión telefónica (si aplica). El programa automáticamente escribe la palabra Ext.  

**Centro de Costo:** En este campo se selecciona, de la lista despegable, el centro de costo al que pertenece el Tercero. Si es un Tercero tipo RI, lista los Centros de Costo tipo Mantenimiento; si es un Tercero tipo RI-OT, lista los Centros de Costo tipo Usuario; si es un Tercero tipo RX o RX-PF, lista los Centros de Costo tipo Externo.  

**Código Sub CC:** Este campo siempre está bloqueado y muestra el Código Sub CC asociado al Centro de Costo elegido. 

**Ingreso y Retiro:** En el primer campo se escribe la fecha en la cual se hizo el ingreso del Tercero al sistema. En el segundo se ingresa la fecha de retiro del Tercero.

**Comentario:** Aquí se ingresan los comentarios sobre un Centro de Costo o sobre un Cliente, representado por su Centro de Costo o bien para hacer aclaraciones sobre el Tercero. 

###	Certificaciones Terceros

Esta nueva funcionalidad se usa para realizar un seguimiento detallado a los Terceros que tienen documentaciones con vigencias y que son cumplimiento de normas. El objetivo de esta funcionalidad es que a los Terceros tipos RI y RX, se les pueda anexar documentación y que el sistema le informe al usuario si ese Tercero está habilitado para hacer labores de mantenimiento en la institución, en particular, cuando las labores a realizar están relacionadas con la documentación anexada vigente. Dependiendo del tipo de Tercero, se habilita una pestaña al lado derecho de la Ficha Técnica del Tercero que se está definiendo y es en esta nueva pestaña que se relaciona la información mencionada. Para ingresar a esta opción se recomienda tener ingresado el Tercero en la tabla, se debe dar clic a la pestaña de Certificaciones para un tipo RI o a la pestaña de Técnicos para un tipo RX. 

**Certificaciones Terceros Tipo RI**

A continuación la explicación de las Certificaciones de Terceros tipo RI, cuya finalidad es que el usuario pueda asociar información importante del responsable ejecutor de la institución como hoja de vida, documento, tarjeta profesional, pasantías, cursos, registro Invima, entre otros. 

![Procesar imagen](../../assets/images/cap02/chp02_img04.png)
_**Imagen 4.** Certificaciones TE_

En la gráfica anterior, pestaña Certificaciones, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Terceros se  encuentra la información relevante a la Certificación del Tercero seleccionado en el Visor.

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre Certificado:** En este campo se escribe el nombre del documento a adjuntar. 

**FF Vencimiento:** En este campo se elige la fecha de vencimiento del documento a adjuntar. 

**Adjuntar Documentos:** Para adjuntar el documento, se debe dar clic a <a class="btn">Seleccionar archivo</a>, se observa que se abre el explorador de archivos, luego debe seleccionarse a través de un doble clic o dando un clic al botón<a class="btn">Abrir</a>, al lado derecho del campo se observa que se muestra el nombre del archivo adjuntado, para insertar o actualizar los datos en esta tabla se da clic en el botón<a class="btn">Abrir</a>

Para actualizar la información de alguna certificación, se ingresa la nueva información en los campos correspondientes y se termina el proceso con el botón <a class="btn">Actualizar</a>. Si se desea desasociar la información de una certificación de un Técnico, se debe dar clic al icono de <span class="iconify btn" data-icon=delete>eliminar (basura)</span> que está al lado izquierdo del documento anexo, donde se muestra un mensaje de alerta que indica al usuario de sí está seguro de eliminar el registro y se da clic en Aceptar. 

**Certificaciones Terceros Tipo RX**

A continuación la explicación de los Técnicos de Terceros tipo RX, cuya finalidad es que el usuario pueda asociar información importante del responsable ejecutor contratista o servicio externo como hoja de vida, documento, tarjeta profesional, pasantías, cursos, registro Invima, entre otros. 

![Procesar imagen](../../assets/images/cap02/chp02_img05.png)
_**Imagen 5.** Técnicos_

En la gráfica anterior, pestaña Técnicos, se aprecian sus componentes y sus respectivos contenidos. En la ventana Detalle de Terceros se  encuentra la información relevante al Técnico del Tercero seleccionado en el Visor. 

A continuación se describen los campos que componen el registro. Sobre cada campo se da una breve explicación.

**Nombre:** En este campo se escribe el nombre propio de la persona que ejecutará las labores de mantenimiento a la institución.

**Título:** En este campo se registra el cargo técnico u oficio de la persona que ejecutará las labores de mantenimiento a la institución.

**Tarjeta Profesional:** En este campo se digita el número de la Tarjeta Profesional de la persona que ejecutará las labores de mantenimiento a la institución.

**Registro Sanitario Invima:** En este campo se escribe el número del Registro Sanitario Invima de la persona que ejecutará las labores de mantenimiento a la institución actual.

**Requiere Certificación:** Este switche permite que al vencerse cualquier documento de una persona, se asigne una pelota de color rojo o verde, para indicar que se encuentra activo, en la columna **“Habilitado”** de la tabla de Técnicos y en la ventana visor de Terceros. El objetivo es que el usuario pueda enterarse con antelación de los vencimientos de los documentos de las personas que ejecutarán las labores de mantenimiento a la institución.

**Nombre Certificado:** En este campo se escribe el nombre del documento a adjuntar. 

**FF Vencimiento:** En este campo se elige la fecha de vencimiento del documento a adjuntar. 

**Adjuntar Documentos:** Para adjuntar el documento, se debe dar clic al botón <a class="btn">Seleccionar archivo</a>. Se observa que se abre una ventana para buscar el archivo y se selecciona dando doble clic o clic al botón <a class="btn">Abrir</a>, al lado derecho del campo se observa que se muestra el nombre del archivo adjuntado, para insertar o actualizar los datos en esta tabla se da clic en el botón <a class="btn">Más</a> o <a class="btn">Actualizar Técnico</a>, que solo aplica cuando el registro ya existe. Para finalizar el proceso, en ambos casos, se debe dar clic al botón <a class="btn">Actualizar</a>.

Para registrar un nuevo técnico se da clic en el botón <a class="btn">Más</a>, ubicado en la parte inferior izquierda de la tabla Técnicos. Para actualizar la información de alguno de los técnicos, primero se selecciona el técnico en la tabla, se observa que se muestra la información detallada de ese técnico, se procede a actualizar los campos, luego dar clic al botón <a class="btn">Actualizar Técnico</a> y finalmente terminar el proceso de actualización con el botón <a class="btn">Actualizar Técnico</a> de la parte superior izquierda. Si se desea desasociar la información de una certificación de un Técnico, se debe dar clic al icono de<span class="iconify btn" data-icon=delete>eliminar (basura)</span> que está al lado derecho del documento anexo, sale mensaje de alerta que indica al usuario de sí está seguro de eliminar el registro y se da clic en <a class="btn">Aceptar</a>.  

### Indicadores

Es posible visualizar de manera inmediata, los Terceros habitados e inhabilitados, directamente desde la ventana visor, a través de la columna **“Indicadores”** que muestra una pelota de color que indica su estado. El significado del color de cada pelota, se puede ver en el recuadro de Indicadores, ubicado en la parte superior derecha de la ventana visor, como se muestra a continuación:

![Procesar imagen](../../assets/images/cap02/chp02_img06.png)
_**Imagen 6.** Indicadores Terceros_

El significado de los colores se visualiza al sobreponer el mouse en el icono que se encuentra al extremo superior derecho y su correspondencia es:

- **Verde:** Terceros con certificaciones que tienen fecha de vencimiento posterior a la fecha actual, es decir, se encuentran con sus certificaciones habilitadas

- **Rojo:** Terceros con certificaciones que tienen fecha de vencimiento anterior a la fecha actual, es decir, se encuentran con una o varias certificaciones inhabilitadas.

### Subgrupo Terceros

Se usa para seleccionar grupos de Terceros que cumplen un conjunto de filtros o criterios. El objetivo para hacerlo es realizar un estudio posterior sobre los registros seleccionados en el subgrupo. Para ingresar a esta opción se debe dar clic al <span class="mdi mdi-filter-variant icon white"></span>, ubicado en la parte superior derecha de la ventana Visor de Terceros. 

![Procesar imagen](../../assets/images/cap02/chp02_img07.png)
_**Imagen 7.** Subgrupos_

**AM** mantiene activo cualquier subgrupo en cada módulo, hasta que el usuario lo modifique o restablezca los valores estándar. 

Cada criterio trabaja en conjunto con los demás, con el operador intersección.

Cada criterio aparece inicializado en un valor global que permite mostrar **todos** los Terceros. Lo que significa que de no escoger un criterio se obtiene como resultado  del subgrupo el mismo conjunto completo de todos los Terceros.

El programa permite entonces hacer selección de un grupo de Terceros de acuerdo con los criterios seleccionados en la siguiente ventana: 

![Procesar imagen ](../../assets/images/cap02/chp02_img08.png)
_**Imagen 8.** Ventana Subgrupo Terceros_

Los campos de datos que constituyen los criterios de selección son los siguientes:

**Centro de Costo:** Se elige de la lista el Centro de Costo al que pertenece el Tercero. 

**Centro Responsable:** Lista los centros responsables registrados en el sistema. 

![Procesar imagen ](../../assets/images/cap02/chp02_img09.png)
_**Imagen 9.** Subgrupo Criterio Centro Responsable_

También se puede elegir el centro responsable o un grupo de centros responsables mediante el uso de comodines, para ello, se debe dar clic al icono <span class="iconify btn" data-icon=lock>Candado</span>. Ejemplo, si se escribe %adm%, el sistema entiende que debe seleccionar aquellos Terceros cuyo centro responsable tenga incluida la secuencia **“adm”**.

**Ciudad:** Permite la selección de la ciudad donde se encuentre un Tercero. 

**Código:** Esta selección agrupa los Terceros relacionados por su código. Por ejemplo: si se escribe 98%, el sistema localiza aquellos Terceros cuyo código empieza por 98. El porcentaje a continuación, es un carácter comodín que significa **“todos”**.

**Tipo:** Filtra los Terceros de Tipo Responsable Interno, Responsable Externo, Proveedor/Fabricante u Otro, al dar clic en uno o algunos de los cuadros de selección.

![Procesar imagen](../../assets/images/cap02/chp02_img10.png)
_**Imagen 10.** Subgrupo Criterio Tipo_

**Contacto:** Permite la selección de los Terceros que tengan un contacto asociado, ya sea el mismo nombre del Tercero o el nombre de la persona representante de la empresa. 

**Estado:** Permite la selección de los Terceros de acuerdo al estado de Activo o Inactivo. El estado de los Terceros es importante para la selección en las listas  desplegables. Por ejemplo: Si un Tercero de tipo RI, tiene definido el Estado **“Inactivo”**, este no aparecerá en la lista de los Responsables de la OT.

**Nombre:** Selecciona los Terceros según criterios basados en su Nombre. Ejemplo: **%Manuel%**  selecciona todos los Terceros en cuyo nombre, en cualquier parte, tengan la palabra **“Manuel”**.

**Oficio:** Muestra los Terceros que tengan asignados el Oficio seleccionado.

![Procesar imagen ](../../assets/images/cap02/chp02_img11.png)
_**Imagen 11.** Subgrupo Criterio Oficio_

De igual forma, se puede elegir el oficio mediante la opción utilizar comodines, para ello, se debe dar clic al icono <a class="btn">Candado</a>. Esta selección agrupa los Terceros relacionados por su oficio. Por ejemplo: si se escribe ayudante%, el sistema localiza aquellos Terceros cuyo oficio empieza por la palabra **“ayudante”**.

> **Nota:** Es importante tener en cuenta que cuando se están realizando los subgrupos  se pueden utilizar uno o varios de los criterios anteriores simultáneamente. Además, es posible hacer unión de selecciones.  Esto significa que inmediatamente después de haber realizado una selección es posible hacer otra y unir el resultado de las dos. Para ello, tras definir los criterios de la segunda selección se da un clic al botón <a class="btn">Mas (+)</a>, en lugar de darlo al botón <a class="btn">Aceptar</a>.

