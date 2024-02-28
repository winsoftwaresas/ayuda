---

title: Conceptos Básicos
subtitle: Descripción de los modos de sincronización, botones y comandos básicos generales para comenzar
tags: [AMovil]
author: win
order: 16_01


---


# AMovil

# ¿Que es AMovil?

**AMovil** es una aplicación móvil complementaria de **AM** enfocada para los ejecutores de mantenimiento interno.  Este capítulo contiene información básica para su comprensión y uso. Se plantea una visión general sobre la interfaz del usuario y sobre los elementos que aparecen en pantalla a manera de convenciones generales.

Se aprende a interpretar los comandos y a seleccionar las opciones de los módulos y submódulos, para ejecutar las funciones propias de la aplicación.
 

Una vez se ingrese a la aplicación (APK suministrada por WIN Software), se visualiza la ventana para iniciar sesión:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img01.jpeg)

_**Imagen 1.** AMovil - Iniciar Sesión_


Cuando se ingresa a la aplicación se muestran los dashboards sin carga de datos como se visualiza a continuación:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img02.jpeg)

_**Imagen 2.** AMovil - Inicio_

## Sincronización 


En la parte superior derecha se visualizan los siguientes íconos que representan la funcionalidad de sincronización:


<a class="btn cl-white bg-blue fs-2"><span class="iconify btn-icon cl-white" data-icon="mdi-download"></span><span class="dot bg-af-green"></span></a>: descarga la información de la base de datos para comenzar a trabajar con la aplicación. Al dar un toque aparece un mensaje de advertencia:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img03.jpeg)

_**Imagen 3.** AMovil - Mensaje Advertencia descarga_

Para continuar dar un toque en <a class="btn cl-white bg-blue px-4"> Aceptar</a>. 

Para evitar el proceso dar un toque sobre el botón <a class="btn cl-white bg-green px-4"> Cancelar</a>. 


Una vez se inicie el proceso de descarga, se indica el avance así:

![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img04.jpeg)

_**Imagen 4.** AMovil - Descarga de datos_


Finalizado el proceso de descarga, los dashboards se actualizan automáticamente:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img05.jpeg)

_**Imagen 5.** AMovil - Actualización de datos_



De la imagen anterior se visualiza el dashboard seleccionado de Solicitudes <a class="btn cl-black bg-white bd-blue px-4"><span class="mdi mdi-circle cl-gray pr-1"></span><span class="pr-1">Estados de solicitudes</span></a> , para visualizar el dashboard de Órdenes se debe dar un toque sobre el botón <a class="btn cl-black bg-white bd-gray px-4"><span class="mdi mdi-circle cl-gray pr-1"></span><span class="pr-1">Estados de las ordenes</span></a>.

<a class="btn cl-white bg-orange px-4">66</a>: indica el total de las SS o OT según el gráfico.



<a class="btn cl-black bg-white px-5">71</a> : indica el total de registros en la base de datos o un subgrupo de datos en un módulo. 


<a class="btn cl-white bg-blue fs-2"><span class="iconify btn-icon cl-white" data-icon="mdi-upload"></span><span class="dot bg-af-red"></span></a>: Inicia el proceso de sincronización del aplicativo con **AM.**

>**Nota:** Cualquier actividad dentro del aplicativo supone una cantidad de trabajo, por lo que hasta que no se sincronice nuevamente, AMovil no permite hacer descarga de datos.

Al sincronizar, aparece un mensaje de advertencia:


![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img06.jpeg)

_**Imagen 6.** AMovil - Advertencia Sincronizar datos_

Para continuar dar un toque en <a class="btn cl-white bg-blue px-4"> Aceptar</a>. Mostrando el progreso de sincronización:
.  
![Procesar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img07.jpeg)

_**Imagen 7.** AMovil - Proceso Sincronizar_

Una vez complete el proceso, puede cerrar sesión en la aplicación.


## Generalidades y Comandos

<a class="btn cl-white bg-blue"><span class="mdi mdi-menu cl-white fs-2"></span></a>: ingresa al menú principal de la aplicación, como se muestra a continuación:  

![Proces  <ar imagen](https://ayuda.winsoftware.com.co/assets/images/cap16/chp16_img08.jpeg)

_**Imagen 8.** AMovil - Ir a Menú_




A continuación se describen los botones del menú de inicio:

<a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-home-outline"></span> Inicio</a>: Hace un direccionamiento a la página inicio donde se visualizan los bashboards de Solicitudes y Órdenes de Trabajo.

<a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-home-city-outline"></span> Activos</a> : Ingresa al módulo de Activos.
 

<a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-warehouse"></span> Almacén</a> : Permite ingresar al módulo de Materiales/Repuestos.


<a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-card-text-outline"></span> Solicitudes</a> : Ingresa al módulo de Solicitudes de Servicio


<a class="btn cl-black bg-white pl-2 pr-3 bd-gray"><span class="iconify cl-black fs-2 pr-1" data-icon="mdi-text-box-outline"></span> Órdenes</a> : Ingresa al módulo de Órdenes de Trabajo. 


- Algunos comandos a tener en cuenta son:

<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-filter-variant"></span></a>: Es el ícono del subgrupo el cual permite filtrar o preseleccionar información acorde a un conjunto de criterios.

<span class="iconify icon cl-white bg-blue" data-icon=mdi-dots-vertical></span></a> : abre un conjunto de opciones según el módulo o submódulo. 

Estas opciones son:

<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-update"></span></a>: En el detalle de una SS u OT indica ingresar o modificar los tiempos de ejecución.

<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-wechat"></span></a>: Permite ingresar los comentarios de ejecución en una SS ou OT.


<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-paperclip"></span></a>: Permite agregar la Multimedia al registro en cuestión.

<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-check-circle"></span></a> : Permite hacer un cambio de estado en la SS/OT.


<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-format-list-checks"></span></a> : Ingresa al formulario de evaluación del servicio de la SS/OT.


<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-close"></span></a> : Cierra la ventana del menú de opciones.

<a class="fab cl-white bg-blue box-shadow"><span class="iconify cl-white fs-2" data-icon="mdi-file-edit-outline"></span></a> : Permite hacer un ingreso o registro de la firma masiva tanto del Responsable ejecutor como de la persona quien recibe en una SS ou OT. 
