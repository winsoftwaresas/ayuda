---
title: Interfaz de Usuario
subtitle: Aquí se incluye información general sobre los elementos principales
  presentes en una ventana de AM.
tags:
  - setup
author: win
order: 01_03
date: 2021-11-30T20:50:23.757Z
---
### Ventana Principal **AM**

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img01.png)
_**Imagen 1.** Ventana Acceso **AM**_

Los elementos que conforman esta vista principal son:

#### Menú Principal

La porción de Menú Principal normalmente está conformada por la barra de opciones que se muestra a continuación.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img02.png)
_**Imagen 2.** Ventana Menú Principal_

En caso de estar trabajando en Infraestructura, se muestra una ventana que se ubica debajo de ella y que detalla los nombres de cada una de las tablas de la Infraestructura. A través de ellas se posibilita el acceso directo al módulo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img03.png)
_**Imagen 3.** Ventana Infraestructura_

En caso de estar trabajando con Gerente o un usuario administrador, esta barra se complementa listando todas las compañías existentes.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img04.png)
_**Imagen 4.** Ventana Administración_

#### Submenú

El submenú tiene un conjunto de transacciones que se usan para ejecutar funciones operaciones o procedimientos especiales que afectan uno, varios o todos los registros del módulo activo. Al **sobreponer** el mouse por un módulo o una opción del menú principal la pantalla muestra debajo de ella un recuadro como se muestra a continuación:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img05.png)
_**Imagen 5.** Submenú **AM**_

#### Ventana Visor

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img07.png)
_**Imagen 6.** Ventana Visor_

Es la ventana en la que se lista el total de los registros o aquellos preseleccionados, del módulo activo. Para facilitar su recorrido es posible realizar desplazamientos verticales del cursor tanto hacia el comienzo como hacia el final de la tabla, y desplazamientos horizontales de izquierda a derecha y viceversa.

Los títulos en azul que encabezan las columnas son también botones que permiten ordenar la tabla, según el título seleccionado.

Para elegir un registro de la tabla se da un clic sobre él o se desplaza el cursor con las teclas de desplazamiento.

En la parte superior izquierda de esta ventana se observa la identificación actual del módulo en pantalla que corresponde a la opción del menú seleccionada. También, al lado derecho de esta sección, se encuentra el botón <a class="btn white">Nuevo</a> con el fin de acceder rápidamente a la ventana Detalle con el fin de ingresar un nuevo registro.

En la parte superior derecha se encuentra un conjunto de transacciones de la ventana Visor del módulo seleccionado, para ejecutar funciones, operaciones o procedimientos especiales que afectan uno, varios o todos los registros del módulo activo. Este conjunto de transacciones varía dependiendo del módulo seleccionado.

En la parte inferior izquierda de esta ventana se encuentra el número de registros por página que se quieren visualizar, además de la cantidad de registros totales que conforman la tabla. Como guía existe un indicador a modo de fracción (N/M) que indica el número de registros por página de un total de registros seleccionados (N) sobre el número de registros totales en el módulo (M).

Es por lo anterior que esta fracción se verá afectada al realizarse un “Subgrupo” o filtro en el módulo seleccionado, por lo cual se muestra la cantidad de registros del subgrupo actual en la ventana Visor (N) y el total de registros existentes en el módulo activo (M). Si no hay preselección, los dos números en sus totales son los mismos.

> _**Nota:** Es posible configurar el número de registros que conforman una página desde el módulo de Administración, en la opción del submenú “Valores por defecto”._

En la parte inferior derecha de esta ventana se observan también varios enlaces para navegar avanzando y retrocediendo páginas completas de registros. Como guía existe un indicador sobre la página relativa actual y la posibilidad de ingresar a la primer o última página, sin importar la página en la que se encuentre.

#### Ventana detalle

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img08.png)
_**Imagen 7.** Ventana Detalle_

Es la porción de la pantalla en la que se muestran los datos detallados del registro seleccionado en la ventana Visor. También se visualiza un conjunto de Vistas Parciales o Pestañas que se usan para visualizar porciones específicas de datos del módulo activo; módulo que depende de la opción del menú principal seleccionada. Para visualizar la información completa del registro seleccionado y facilitar su recorrido es posible realizar desplazamientos verticales del cursor tanto hacia el comienzo como hacia el final de la tabla.

Además de la información detallada de un registro, contiene un grupo de botones estándar para la mayoría de las ventanas Detalle que siempre están en la parte superior izquierda de la ventana.

| Botón                     | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Nuevo](#0){: .btn.blue}      | Prepara la ventana Detalle para el ingreso de un nuevo registro, blanqueando cada uno de los campos que son objeto de llenado. Al activarlo el sistema reemplaza la línea de 4 botones por una nueva de 2 botones:[Insertar](#0){: .btn.blue} que se usa para ingresar el nuevo registro a la base de datos actualizando la ventana Visor, mientras que el botón [Cancelar](#0){: .btn.blue} aborta el proceso de creación del nuevo registro retornando a la ventana Detalle.                                                                                                                                                                                                                                                                           |
| [Copiar](#0){: .btn.blue}     | Toma una copia instantánea del registro actual, señalado por el cursor en la ventana Visor, y la deja disponible en la ventana Detalle para que sobre ella se hagan las modificaciones necesarias para crear un nuevo registro. Tales modificaciones involucran en la mayoría de los casos aquellos campos clave del registro y otros propios que deben ser particularizados para el nuevo. Al activar este botón el sistema reemplaza la línea de 4 botones por una nueva de 2 botones:[Insertar](#0){: .btn.blue} que se usa para ingresar el nuevo registro a la base de datos actualizando la ventana Visor, mientras que el botón [Cancelar](#0){: .btn.blue} aborta el proceso de creación del nuevo registro retornando a la ventana Detalle. |
| [Actualizar](#0){: .btn.blue} | Sirve para guardar o salvar en la base de datos la información que se ha modificado en la ventana Detalle, correspondiente al registro señalado por el cursor en la ventana Visor y registrar allí simultáneamente el mismo cambio.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Eliminar](#0){: .btn.blue}   | Se utiliza para borrar un registro de la base de datos y registrar simultáneamente el cambio en la ventana Visor.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

En la parte superior izquierda de esta ventana se observa la identificación actual de la ventana Detalle del módulo en pantalla que corresponde a la opción del menú seleccionada, adicional, el cuadro de chequeo (checkbox) que está ubicado al lado derecho de esta sección,permite habilitarlo para que al finalizar una transacción de inserción, actualización o eliminación, la ventana Detalle permanezca en esta vista.

En la parte superior derecha de esta ventana se observan dos enlaces para navegar avanzando y retrocediendo entre registros. Como guía existe un indicador a modo de fracción que indica el número del registro actual en el que se está posicionado sobre el número deregistros totales en el módulo.

Para salir de la ventana Detalle se puede dar clic a la **X** que se encuentra arriba de los enlaces de navegación, o dar clic por fuera de la ventana Detalle. Ambos, llevan a la ventana Visor.

#### Ventana menú de más información

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img09.png)
_**Imagen 8.** Ventana menú de mas información_

Esta ventana se ubica en la parte superior derecha del menú principal. Contiene la siguiente información:

- **Compañía**: Indica al usuario el número y nombre de la compañía en la que se encuentra.
- **Usuario conectado:** Indica el login del usuario conectado en la compañía.
- **Limpiar filtros:** Limpia todos los filtros de todos los módulos para desbloquear el acceso a alguno de ellos.
- **Inicio**: Esto conlleva al dashboard de **Inicio** o a la Ventana Principal de **AM**.
- **Interfases:** Se usará para definir los criterios de las interfaces que se realizarán a futuro entre **AM** y otros sistemas propios de la empresa o institución.
- **Cambiar de contraseña:** Permite que el usuario logueado cambie su contraseña.
- **Cerrar Sesión:** Se usa para manejar la sesión del usuario actual con el fin de salir del aplicativo.

### Ventana Reportes

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img10.png)
_**Imagen 9.** Ventana Reportes_

Esta ventana presenta las opciones de impresión de reportes escritos relacionados con cada módulo del sistema. A esta ventana se llega dando clic al icono de la impresora que se encuentra ubicado en la parte superior derecha de la ventana Visor del módulo seleccionado.

**Lista de Selección:** Es la tabla donde aparecen los campos Código, Descripción y Subtítulo. Bajo el título **Código** se listan los códigos de los reportes existentes. Bajo el título **Descripción** se listan los nombres de los reportes existentes. Bajo el título de **Subtítulo** se lista en algunos reportes una descripción adicional del reporte.

**Todos los Registros:** Esta opción permite la impresión de todos los Registros existentes en la base de datos relacionados con el módulo actual, sin importar si se ha realizado un subgrupo. Corresponde al número de registros especificados en el denominador de la selección (M).

**Registros del Visor:** Esta opción permite hacer una impresión de todos aquellos registros que están seleccionados en el subgrupo actual. Corresponde al número de registros especificados en el numerador de la selección (N).

**Registro Seleccionado:** Esta opción permite hacer una impresión del registro que está seleccionado en la Ventana Visor mediante el cursor con la línea verde.

**Subtítulo:** Este campo permite registrar un poco menos de una línea de información, tipo documentación del Reporte, para que se imprima bajo el área de título estándar.

Después de seleccionar el tipo de registro se procede a seleccionar el reporte que se desea imprimir; para esto se debe pulsar el botón <a class="btn white">imprimir</a>. De esta manera se abre una ventana visor para formatos PDF, que muestra el reporte seleccionado. De esta misma ventana es posible guardarlo y descargarlo.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img11.png)
_**Imagen 10.** Ventana Reporte Impresa_

Al dar clic al botón <a class="btn white">exportar</a> permite exportar el Reporte seleccionado sin necesidad de imprimirlo a un formato excel. Mientras que, al dar clic al botón <a class="btn white">cerrar</a> se cierra la ventana de la generación de reportes.

### Otros elementos de la Interfaz de Usuario

#### Los Botones

| Botón                                                       | Descripción                                                                                                                                                                                                                                                                           |
| :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Aceptar](#0){: .btn.gray}                                      | Con este botón se salva o graba el registro de datos que se acaba de Ingresar.                                                                                                                                                                                                        |
| [Cancelar](#0){: .btn.gray}                                     | Con este botón se cancela cualquier transacción que se esté realizando.                                                                                                                                                                                                             |
| [Actualizar](#0){: .btn.blue}                                   | Con este botón se salva el registro de datos que se acaba de modificar.                                                                                                                                                                                                               |
| [Copiar](#0){: .btn.blue}                                       | Con este botón se copian los datos del registro activo en pantalla, dejando el nuevo registro listo para ser modificado e insertado.                                                                                                                                                  |
| [Nuevo](#0){: .btn.blue}                                        | Este botón inicializa todos los campos para proceder a ingresar un nuevo registro en cualquier módulo de la Base de Datos.                                                                                                                                                           |
| [Insertar](#0){: .btn.blue}                                     | Almacena los datos del registro que se acaba de copiar o de crear.                                                                                                                                                                                                                     |
| [Eliminar](#0){: .btn.blue}                                     | Borra el registro que se encuentra activo en pantalla, siempre y cuando no tenga vínculos y/o asociaciones. Normalmente aparece un mensaje para confirmar la eliminación.                                                                                                            |
| [Aprobar Presupuesto](#0){: .btn.gray}                          | Este botón se encuentra en el módulo de OT mientras no se haya aprobado el presupuesto de una OT que exige presupuesto. Permite aprobar el presupuesto que ha sido asignado a una OT. Una vez aprobado, es posible iniciar el registro manual del Gasto Real.                        |
| [Mano Obra Interna](#0){: .btn.gray}                            | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ver el detalle de la Mano de Obra Interna presupuestada o usada, respectivamente.                                                                                                   |
| [Mano Obra Externa](#0){: .btn.gray}                            | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ver el detalle de la Mano de Obra Externa presupuestada o usada, respectivamente.                                                                                                   |
| [Mat y Rep](#0){: .btn.gray}                                    | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ver el detalle de los Materiales y Repuestos.                                                                                                                                       |
| [O. Conceptos](#0){: .btn.gray}                                 | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ver el detalle de los Otros Conceptos de Costos.                                                                                                                                    |
| [Ir a Matriz](#0){: .btn.gray}                                  | Este botón regresa a la vista de matriz de Presupuesto o gasto real en HI, OT y PM, después de visualizar, ingresar o modificar información detallada de algún concepto de costo.                                                                                                  |
| [Adicionar Mano Obra Interna](#0){: .btn.gray}                  | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ingresar el detalle de la Mano de Obra Interna presupuestada o usada, respectivamente.                                                                                              |
| [Adicionar Mano Obra Externa](#0){: .btn.gray}                  | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ingresar el detalle de la Mano de Obra Externa presupuestada o usada, respectivamente.                                                                                              |
| [Adicionar Material de repuesto](#0){: .btn.gray}               | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ingresar el detalle de los Materiales y Repuestos.                                                                                                                                  |
| [Adicionar Otro Concepto](#0){: .btn.gray}                      | Este botón se encuentra en la opción Presupuesto (en OT y PM) y en Gasto Real (OT e HI). Permite ingresar el detalle de los Otros Conceptos de Costos.                                                                                                                               |
| [Asociar](#0){: .btn.gray}                                      | Botón utilizado para registrar la relación entre Activos y sus Repuestos.                                                                                                                                                                                                            |
| [Desasociar](#0){: .btn.gray}                                   | En Almacén de Repuestos RP, permite desasociar uno o varios Activos a uno o varios de sus Repuestos asociados.                                                                                                                                                                        |
| <span class="mdi mdi-plus-circle icon white"></span>            | **Agregar**<br />Este botón permite adicionar información al registro actual.                                                                                                                                                                                                  |
| [Cerrar](#0){: .btn.white}                                      | Con este botón se cierra la ventana de generación de reportes y regresa a la ventana en proceso.                                                                                                                                                                                     |
| [Exportar](#0){: .btn.white}                                    | Este botón permite Exportar los datos qué se encuentran en el visor, a un formato de Excel.                                                                                                                                                                                          |
| [Imprimir](#0){: .btn.white}                                    | Este botón genera el reporte seleccionado en una nueva ventana. Refiérase a_Servicios » Reportes_ en la ventana submenú de cada módulo del sistema.                                                                                                                             |
| [Iniciar Sesión](#0){: .btn.blue}                              | Este botón valida el usuario y la contraseña, necesarios para ingresar a**AM**.                                                                                                                                                                                                |
| [Enviar a Historia](#0){: .btn.gray}                            | Este botón ejecuta el envío de registros de Solicitudes de Servicio, Órdenes de Trabajo Y Paros/Averías cerradas y/o canceladas, hasta el módulo de Historia de Mantenimiento.                                                                                                    |
| [Proyectar](#0){: .btn.white}                                   | Inicia el proceso de proyección en PM, con el objetivo de planear y/o presupuestar un periodo de largo plazo, a partir de los PM activos.                                                                                                                                             |
| [Generar](#0){: .btn.gray}                                      | Este botón convierte en OT reales, aquellas OT que fueron resultado del proceso de Analizar que se acaba de ejecutar, en el módulo de OT.                                                                                                                                            |
| [Modificar FIP](#0){: .btn.gray}                                | En Programas de Mantenimiento, actualiza el valor de la Fecha de Inicio de Período.                                                                                                                                                                                                   |
| <span class="mdi mdi-filter-variant icon white"></span>         | **Buscar**<br />Abre una nueva ventana compuesta (Ventana Visor y Ventana Subgrupo) para realizar una selección que facilite la búsqueda de un registro.                                                                                                                       |
| <a class="btn white">Mas <span class="mdi mdi-plus-circle"></span></a>            | **Más**<br />Este botón permite hacer unión de selecciones dentro de una opción de subgrupo en una Ventana Visor. Es útil cuando se necesita visualizar conjuntamente dos o más subgrupos.                                                                                 |
| <a class="btn white">Menos <span class="mdi mdi-minus-circle"></span></a>     | **Menos**<br />Este botón permite hacer substracción de un subconjunto desde una selección previa, de subgrupo en una Ventana Visor.                                                                                                                                          |
| <a class="btn white">valores por defecto <span class="mdi mdi-notification-clear-all "></span></a> | **Valores Por Defecto**<br />Este botón desmarca todos los criterios de selección en un subgrupo para iniciar la conformación de otro subgrupo con un nuevo conjunto de criterios o filtros.                                                                                  |
| <a class="btn white">aceptar <span class="mdi mdi-check-circle"></span></a>           | **Aceptar**<br />Con este botón se realiza el subgrupo o filtro de acuerdo a los criterios de selección.                                                                                                                                                                       |
| [Todos Adicionan](#0){: .btn.gray}                              | Activa la función de sumar los nuevos valores a los anteriores en el proceso de actualizar contadores de AC.                                                                                                                                                                          |
| [Todos Reemplazan](#0){: .btn.gray}                             | Activa la función de reemplazar los valores anteriores por los nuevos, en el proceso de actualizar contadores de AC.                                                                                                                                                                  |
| <span class="mdi mdi-cloud-upload icon white">           | **Cargar**<br />Con este botón se realiza la búsqueda de un anexo, documento, imagen, video, entre otros; que será cargado en la pestaña de Multimedia disponible en varios módulos.                                                                                        |
| [Subir Archivo](#0){: .btn.white}                               | Con este botón se realiza la carga de un anexo, documento, imagen, video, entre otros; en las opciones de Multimedia disponible en varios módulos.                                                                                                                                   |
| [Ver Diagrama](#0){: .btn.gray}                                 | Con este botón se visualiza en un Diagrama de Gantt, la proyección de los PM activos en el módulo de PM o el listado de las OT analizadas en el módulo de OT.                                                                                                                      |
| [Ver Reportes](#0){: .btn.gray}                                 | Con este botón se visualiza el listado de los Reportes disponibles en PM y OT, como resultado de los procesos de proyección o analizar, respectivamente.                                                                                                                             |
| [Ver RP Asociados](#0){: .btn.gray}                             | Con este botón se visualiza la asociación de uno o varios Repuestos a un Activo, en el módulo de Almacén de Repuestos.                                                                                                                                                              |
| [Ver AC Asociados](#0){: .btn.gray}                             | Con este botón se visualiza la asociación de uno o varios Activos a un Repuesto, en el módulo de Almacén de Repuestos.                                                                                                                                                             |
| <span class="mdi mdi-arrow-left-right icon gray">        | **Navegador**<br /> Con este botón se puede navegar avanzando y retrocediendo páginas completas de registros.                                                                                                                                                              |
| <span class="mdi mdi-magnify icon gray">                 | **Ir A**<br />Con este botón se puede buscar un Activo digitando exactamente el código del AC, el código del Repuesto, el consecutivo de una SS o el consecutivo de una OT según el módulo.                                                                                 |
| <span class="mdi mdi-autorenew icon gray">               | **Cambiar a TreeGrid**<br />Con este botón se pueden visualizar los Activos que están en el módulo o en un subgrupo en una vista de árbol, en la que se parte de las Ubicaciones Físicas, y luego se ven los Activos pertenecientes a esa Ubicación Física y su Despiece. |
| <span class="mdi mdi-download icon gray">                | **Descargar**<br />Con este botón se puede descargar cualquier campo del módulo seleccionado a Excel.                                                                                                                                                                          |
| <span class="mdi mdi-printer icon gray">                 | **Generador de Reportes**<br />Con este botón se permite ingresar al listado de Reportes disponibles en el módulo seleccionado.                                                                                                                                                |
| <span class="mdi mdi-message-alert icon gray">           | **Indicadores**<br />Con este botón se muestra el significado de los colores mostrados en la columna de Indicadores de los módulos de IF, AC, Almacén de Repuestos, PM, SS, PA, OT e HI.                                                                                                     |



## Iniciar la ejecución de **AM**

La ejecución de **AM** se inicia activando el link correspondiente a través de un navegador como Chrome o Mozilla.

Si se trata de la versión **AM** PRO, el sistema solicita el nombre de usuario, la selección de la Compañía con la cual desea interactuar y su clave de acceso.

Cuando se trata de la versión **AM** ST el sistema solicita el nombre de usuario y su clave de acceso.

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img61.png)
_**Imagen 11.** Ventana de Acceso AM_

Cuando se ha hecho el acceso exitoso al sistema se muestra por defecto una ventana con un tablero de entrada que corresponde a un _DashBoard Home_ que permite visualizar conjuntos de indicadores e información que muestran la forma actual de las cosas en distintos módulos del sistema.

![Ventana acceso directo](https://ayuda.winsoftware.com.co/assets/images/cap01/chp01_img62.png)
_**Imagen 12.** Ventana de Acceso AM_
