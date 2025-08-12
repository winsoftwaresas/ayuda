---
title: Conceptos Básicos sobre Solicitudes de Servicio
subtitle: En este modulo se encontrará la explicacion sobre el las generalidades y momentos de la Solicitud de Servicio.
tags:
  - setup
author: win
order: '07_02'
date: 2022-08-29T15:46:20.800Z
media: "../../assets/images/docs/"
---

## Solicitud de Servicio (SS)

**AM** propone la facilidad llamada Solicitudes de Servicio con dos objetivos: Primero, que un número amplio de personas, autorizadas, dentro de una Organización, soliciten la prestación de un servicio al área encargada, normalmente a Mantenimiento, y segundo, que el personal de Mantenimiento pueda registrar de una forma rápida, aquellos trabajos sencillos que realiza; sencillez expresada en términos de ***bajo costo***, ***corto tiempo*** y ***un solo recurso (Responsable)*** requerido para su ejecución. Para uno y otro caso, se trata de un mecanismo fácil y simple que permite además de generar la SS, hacerle seguimiento hasta su cierre definitivo.

El trámite de una SS consta de varios pasos, el primero de ellos una inspección (análisis previo), por esta razón no es éste el mecanismo más adecuado para solicitar servicios urgentes. Se parte de la base, además, de que el servicio solicitado puede o no prestarse. La decisión de ejecutar o no la SS, o de ejecutarla como SS o como OT, depende de factores como: Razonabilidad de la Solicitud, Viabilidad de la Solución, Disponibilidad de presupuesto autorizado, tiempo, costo y recursos presupuestados.

A manera de recomendación, para el área de Servicios encargada de recibir y decidir sobre las Solicitudes, se debe tener en cuenta que el volumen de las Solicitudes puede llegar a ser muy alto, principalmente al inicio del ofrecimiento del servicio al gran público de la Organización. Ello debe generar un ejercicio de planeación sobre los recursos requeridos tanto para la recepción de las Solicitudes como para su atención. La planeación debería incluir una buena definición de procesos y de procedimientos, que garanticen la agilidad de los tres aspectos: recepción, decisión y ejecución. No prestar suficiente atención a alguno de ellos puede redundar en insatisfacción de los clientes del servicio.

> **Nota:** Para que una Solicitud de Servicio se gestione y se cierre como Solicitud y no como una Orden de Trabajo, depende de tres condiciones: ***bajo costo***, ***corto tiempo*** y ***un solo recurso (Responsable ejecutor)***, si alguna de estas tres condiciones no se cumple por alguna razón, como por ejemplo: Si la labor requerida requiere de solicitar materiales/repuestos al Almacén con el fin de registrarlos, se debe manejar la SS como una Orden de Trabajo.

## Creación de Solicitudes de Servicio

Crear una Solicitud de Servicio exige en primera instancia, que el  usuario tenga la autorización  o el permiso en el sistema para poder hacerlo. Son  potenciales generadores  de Solicitudes de Servicio: los usuarios de los servicios de mantenimiento  de la Organización, como  el  personal  de  producción,  el  personal  de  servicios,  el  personal administrativo y el personal de mantenimiento.

La creación de una SS se realiza a través del visor de Solicitudes. En cuanto se acciona el botón <a class="btn white">NUEVO</a> esta ventana adopta  la  forma  que  se  muestra  a  continuación (Ventana Detalle).

{% set_image
  path:""
  css_class:""
  number:""
  filename:"07_01.png"
  alt:"Solicitudes - Creación de un registro"
%}

De otra forma, también es posible crearla desde la aplicación complementaria **AMSi** (_Capítulo AMSi_). 

A partir del momento en que se **“Inserta”** la SS, el usuario solicitante no puede modificar ningún campo, pero si puede hacer seguimiento permanente sobre ella. (_Para mejor detalle y explicación, diríjase a la sección de este capítulo Ventana Principal_).

## Seguimiento y Cierre de Solicitudes de Servicio

El paso siguiente es ejecutado por la persona encargada de Administrar las Solicitudes de Servicio por parte de Mantenimiento. Consiste en la asignación de un recurso  interno como responsable  ejecutor de la SS. Tal responsable es notificado y se  encarga, a  partir del momento de la SS, iniciando con una visita e inspección previa, al objeto que requiere de su servicio. En el momento de asignar el Responsable, se registra la fecha y hora, y se cambia el estado de la Solicitud a  **“Asignada”**. 

El Inspector visita al solicitante, se entera y profundiza sobre su solicitud y  determina  sí ejecutar o no ejecutar la SS. Para ello, en este momento, el  Responsable estudia la razonabilidad  de  la  solicitud,  la  factibilidad  de   su   solución  y  la  disponibilidad  de presupuesto. Pero también el Responsable estima la cantidad de los recursos requeridos, su costo y el tiempo requerido en términos de horas-hombre. De esta decisión depende el tercer  paso: el  cierre  de  la  SS.  El  Responsable  decide  entonces  una  de  las  tres alternativas siguientes:

1.  Se decide no ejecutar la Solicitud de Servicio. En este caso, el Responsable cambia el estado de la SS a **“Cerrada no ejecutada”**. Se actualizan y registran los Comentarios, es decir, se documenta la razón por la que se toma la decisión de no ejecutar y se cierra la solicitud accionando el  botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>. 

2.  Se decide ejecutar, como Solicitud de Servicio. Este es el caso en que los costos o estimados  se  encuentran  por  debajo  de  los  parámetros   predefinidos  por  la Organización: El costo de ejecución, el tiempo de ejecución y el número de horas hombre son relativamente bajos.  Se ejecuta la Solicitud y a continuación se cambia el estado a **“Cerrada Ejecutada”**, se actualizan y registran los campos referentes a este Estado. El Responsable cierra la Solicitud como ejecutada, haciendo clic en el botón <a class="btn blue">ACTUALIZAR <span class="mdi mdi-pencil"></span></a>.

3. Se decide ejecutar la Solicitud como Orden de Trabajo. En este caso, al  analizar los  parámetros predefinidos (Costo de ejecución, tiempo de ejecución, número de horas hombre), se establece que es un trabajo apreciable, que exige mayor control para seguimiento posterior y por ello se debe generar una Orden de Trabajo desde la Solicitud de Servicio. Se ejecuta entonces la Solicitud y a continuación se cambia el estado a **“Cerrada con OT”**. Se actualizan y registran los campos referentes a este Estado y se cierra con un clic en el botón <a class="btn blue">ACTUALIZAR<span class="mdi mdi-pencil"></span></a>.

Acto seguido el sistema crea una Orden de Trabajo, este nuevo registro, contiene toda la información que se había registrado previamente en la Solicitud de Servicio, lo que significa que no hay que  reingresarla. Existe la posibilidad de hacer acceso directo desde la Solicitud, a la  Orden de Trabajo, dando un  clic en  el  hipervínculo azul que se observa en el Detalle de la SS. De igual forma, estando en la ventana Detalle de la Orden de Trabajo, es posible regresar directamente a la SS, dando un clic sobre el hipervínculo azul que se observa en la parte izquierda. _(Para mas detalle véase Ventana Principal y Ventana Detalle)._