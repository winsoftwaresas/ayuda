---
title:      'Administración'
subtitle:   'El módulo de Administración permite parametrizar cada compañía y asignar permisos a los usuarios de acuerdo con las necesidades de la organización.'
tags:       [setup]
author:     'win'
order:      '17_01'
media: "../../assets/images/docs/"
---

## **Administración**

El módulo de Administración es parametrizable de forma independiente para cada compañía, permitiendo que AM se adapte a la estructura organizacional, los procesos de mantenimiento y las necesidades específicas de cada empresa.

Se recomienda que el acceso a este módulo esté restringido únicamente al personal del área de Tecnología de la Información (TI) y a los responsables o gerentes del área de mantenimiento, debido a que las configuraciones realizadas pueden afectar el funcionamiento general del sistema.

A continuación, se presentan los conceptos básicos relacionados con la estructura del módulo de Administración, sus elementos generales y las parametrizaciones disponibles a nivel de usuario.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_01.png"
  alt:"Modulo de Administración"
%}

## **VALORES POR DEFECTO**

La parametrización de valores por defecto permite configurar cada una de las compañías de AM de manera general, así como establecer parámetros específicos para cada uno de sus módulos, de acuerdo con las necesidades operativas de la organización.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_02.png"
  alt:"Administración - Valores por defecto"
%}

## GENERAL

**Logo de la compañía (Reportes):** Permite adicionar la imagen del logo de la compañía para el registro en los diferentes reportes del AM.

**Tiempo de expiración de sesión:** El sistema realiza un cierre automático tras los minutos indicados, por defecto son 20 minutos, en los cuales un usuario no haya realizado un movimiento del puntero o teclado indicando que se encuentra inactivo por lo que se le cerrará la sesión.

**Desplegar Combos de Centros de Costo por:** El usuario elige si desea visualizar los Centros de Costo por nombre o por código.

**Desplegar Combos de Responsables por:** El usuario elige si desea visualizar los Responsables por nombre o por código

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_03.png"
  alt:"Valores por defecto"
%}

## Seguridad en Acceso

**CONTRASEÑA:** Permite ingresar longitud mínima y máxima de contraseña asi como el número de intentos permitidos previo al bloqueo del usuario.

**Activar caducidad claves:** Check que permite activar la caducidad de una contraseña en un periodo de tiempo determinado.

**Días para solicitar cambio de clave:** Periodo de tiempo en el cual se indicará que la contraseña caducó y se debe modificar.

**Activar historial de claves:** Check que permite activar un historial de contraseñas garantizando que la persona no repita las previamente usadas.

**Número de claves que se guardan (máximo 5):** Indica el número de contraseña que se almacenan el historial para garantizar que no se repitan contraseñas.

**Activar complejidad de contraseña:** Check que permite habilitar/inhabilitar una contraseña con mayor exigencia en sus parámetros, exige una mayúscula, un símbolo y entre 1 a 4 caracteres numéricos.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_04.png"
  alt:"Contraseña"
%}

En línea con la norma ISO/IEC 27001:2022, especialmente con los controles relacionados con la gestión de credenciales y la protección de la información, WIN Software recomienda que las áreas de Tecnología de la Información (TI) asignen a los nuevos usuarios un nombre de usuario y una contraseña temporal al momento de la creación de su cuenta.

Posteriormente, durante el primer inicio de sesión (first logon)., el sistema solicitará de forma obligatoria el cambio de la contraseña temporal por una contraseña definida únicamente por el usuario. Esta práctica fortalece la seguridad de la plataforma al garantizar que las credenciales de acceso sean conocidas exclusivamente por su titular, reduciendo el riesgo de accesos no autorizados y contribuyendo al cumplimiento de las buenas prácticas de seguridad de la información.


{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_05.png"
  alt:"Seguridad en Acceso"
%}

Adicionalmente siguiendo con los lineamientos de la norma ISO/IEC 27001:2022 el AM registra todos los eventos de autenticación, incluyendo los inicios de sesión exitosos y los intentos de inicio de sesión fallidos. Estos registros (logs) permiten realizar auditorías, detectar accesos no autorizados, identificar posibles intentos de ataque y facilitar el análisis de incidentes de seguridad.

**Mostrar compañía en AMsi:** permite mostrar u ocultar la compañía en AMsi en caso de que no se desee su uso como centro de servicio o se encuentre en proceso de implementación.

**Permitir crear Solicitudes y Ordenes solo usuarios incluidos en Terceros:** Parámetro que obliga a definir como solicitante solamente a un Tercero valido.

**En los módulos de Activos, Kárdex, Programas, Solicitudes, Paros, Órdenes de trabajo, usar Centros de Costo inactivos en la creación de registros:** Parámetro que habilita los centros de costo inactivos para funcionalidad en los módulos mencionados.

**Desea Usar Formato en Ubicaciones Física:** Permite definir un formato de codificación física separado por guiones de forma automática y con capacidad de 20 caracteres por cada nombre.

**Servidor y Puerto para Evaluaciones de SS y OT:** Se debe ingresar la URL de Login hasta el nombre de la instancia. 

Por ejemplo, URL Completa: https://am.winsoftware.com.co:28063/AM4G/src/Home/login.html

Dato a ingresar: https://am.winsoftware.com.co:28063/AM4G/

**Ciudad predeterminada:** Permite ingresar una ciudad predeterminada.

**País predeterminado:** Permite ingresar un país predeterminado.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_06.png"
  alt:"Valores por defecto, General"
%}

**¿Compañía biomédica?:** Parametrización para habilitar en compañías del área Clínica u Hospitalaria y habilitar funciones específicas.

**¿Requiere Metrología?:** Parametrización para habilitar en compañías del área Clínica u Hospitalaria y habilitar funciones específicas.

**¿Requiere Tecnovigilancia?:** Parametrización para habilitar en compañías del área Clínica u Hospitalaria y habilitar funciones específicas.

**¿Requiere Combustibles?:** Parametrización para habilitar/inhabilitar módulo de combustibles

**¿Va a usar la habilitación de Terceros?:** Parámetro para habilitar/inhabilitar el registro de datos de técnicos y/o certificaciones en los terceros.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_07.png"
  alt:"Valores por defecto, General"
%}

**Se considera que el Tiempo de Ejecución fue oportuno si la acción se ejecutó dentro del mes de la fecha planeada. (En otro caso definir rango de dias):** Permite definir los tiempos de ejecución oportunos para las entidades no hospitalarias. El rango se refiere a un número de días anteriores o posteriores a la fecha programada. Por ejemplo: si el parámetro dice 3 días y la labor se debe ejecutar el día 15, se considera que fue ejecución oportuna si se ejecutó entre el 12 y el 18 del mismo mes.

**¿Se requiere modificar Dirección y Ciudad para cada Ubicación Física?:** Parametrización que habilita/inhabilita el ingreso de dirección y ciudad en la tabla de ubicaciones físicas.

**¿Usa Interfase Uno?:** Interfase que permite cargar saldos de almacén.

**¿Usa Interfase Dos?:** Interfase que permite cargar repuestos en gasto real.

**¿Usa Interfase Tres?:** Interfase que permite enviar datos a ERP o CRM externos.

**¿Usa la Interfase de Consumos?:** Interfase que permite enviar datos de consumos a ERP o CRM externos.

**Generar token para las API's:** Campo que genera el Token para autenticar las API´s. Solo el token de la compañía 1 es válido. 

**Calendario de días Improductivos:** Parametrización que permite definir días improductivos para mantenimiento, días improductivos para producción, Turnos estándar para mantenimiento y Turnos estándar para producción

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_08.png"
  alt:"Valores por defecto, General"
%}

## AMovil

**Permitir Estado Cerrado Ejecutado desde AMovil:** Parametrización que permite definir la posibilidad a los tecnicos de usar el estado "Cerrado Ejecutado" en Ordenes y Solicitudes

**Usa el Modulo de Pedidos:** Parametrización que permite definir el uso del modulo de Pedidos

**¿Habilitar vista de deslizar hacia abajo en Transacciones?:**

**Permitir Firma de Recibido sin Evaluación en AMovil:**Parametrización que permite definir la exigencia de la Firma de recibido pero sin evaluación.

**Permitir descarga de Ordenes programadas solo del dia Actual en AMovil:**

**Calcular Tiempo Improductivo en las Ordenes de Trabajo Creadas desde AMovil:**

**No permitir Cierre Sin Evaluación:** Parametrización que permite definir la exigencia de la evaluación del servicio prestado en Ordenes de trabajo y Solicitudes

**Usar Costeo por Presupuesto para las Ordenes Creadas desde AMovil:**

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_09.png"
  alt:"Valores por defecto, AMovil"
%}

## Activos

**Permitir Seriales Duplicados:** Parametrización que habilita/inhabilita los seriales duplicados.

**Información de Ficha Técnica Obligatoria:** Parametrización que habilita/inhabilita la obligatoriedad en la ficha técnica de los activos.

**Información de Vida Útil Obligatoria:** Parametrización que habilita/inhabilita la obligatoriedad en la vida útil de los activos.

**Información Biomédica Obligatoria:** Parametrización que habilita/inhabilita la obligatoriedad en la información biomédica de los activos biomédicos.

**Validar que incrementos en contadores no sean superiores al Estándar de Planeación Mensual:** Control de seguridad que evita que un mayor valor erróneo tecleado al momento de actualización sea aceptado por el sistema.

**Manejo de Depreciación por línea Recta:** Habilita que el sistema realice el cálculo del valor depreciado del activo a la fecha.

**Grupo 1 de Activos:** Parametrización de clasificación de grupos de activos, se entrega predeterminado con equipos de Apoyo Administrativo.

**Grupo 2 de Activos:** Parametrización de clasificación de grupos de activos, se entrega predeterminado con equipos de Apoyo Operacional.

**Grupo 3 de Activos:** Parametrización de clasificación de grupos de activos, se entrega predeterminado con equipos de Infraestructura.

**Grupo 4 de Activos:** Parametrización de clasificación de grupos de activos, se entrega vacío para que la compañía ingrese la información deseada.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_10.png"
  alt:"Valores por defecto, Activos"
%}

## Almacen

**Permitir Parte Número Duplicados:** Parametrización que habilita/restringe el ingreso de parte número duplicados.

**Desea usar el Almacen Corporativo:** Parametrización que habilita/restringe definir un almacén corporativo para uso en clientes con versión pro.

**Definir Almacén:** Permite definir el almacén corporativo.

**Inventario / Saldo negativo:** Parametrización que habilita/restringe saldos negativos en el almacén.

**Establecer el código de barras como valor por defecto en las búsquedas:** Parametrización que habilita/restringe establecer el código de barras como valor por defecto en las búsquedas.

**Permitir la modificación del Valor Unitario y de Existencia de Inventario desde el formulario de detalle:** Parametrización que habilita/restringe modificar directamente en el almacén la modificación del Valor Unitario y de Existencia de Inventario.

**Manejo de Precios de Venta:** Parametrización que habilita/restringe el manejo de precios de venta de los ítems del almacén.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_11.png"
  alt:"Valores por defecto, Almacen"
%}

## Kardex

**Utilizar IVA y Descuento:** Parametrización que habilita/restringe el manejo de IVA y descuento en los documentos de Kardex.

**El IVA constituye mayor valor al Costo Unitario:** Parametrización que habilita/restringe el IVA como mayor valor al costo unitario.

**¿Desea congelar el documento al momento de Insertar los movimientos?:** Parametrización que habilita/restringe la acción de congelar los documentos de Kardex de forma automática al insertar los movimientos.

**¿Desea enviar Correo para capturar Firma de Recibido?:** Parametrización que habilita/restringe la notificación mediante correo electrónico para las firmas de documento recibido.

**Desea manejar los consecutivos de Kardex por:** Parametrización que habilita definir si los consecutivos de Kardex serán por almacén o por compañía.

**Valor de Documento de Kardex por Defecto igual al Consecutivo:** Parametrización que permite definir si automáticamente deseamos que el documento de Kardex sea igual al consecutivo

**Modificar fecha de Documento:** Parametrización que habilita/inhabilita la posibilidad de modificación de la fecha del documento.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_12.png"
  alt:"Valores por defecto, Kardex"
%}

## Programas

**Inicio de la Semana #2 del año:** Permite definir el inicio de semana para el criterio de programación por semanas del año.

**Opciones de traslado de Presupuesto y Gasto Real:** Permite definir si se copiara el presupuesto y gasto real en la OT o exclusivamente el presupuesto.

**Manejar Planeación y Programación de Ordenes de Trabajo:** Permite automatizar que las ordenes generadas desde programas se creen con el estado **PL: Planeada** y ello le permite al planner manejar el estado de **PR: Programada** antes de definir el estado **E: En Ejecución**. En caso contrario las ordenes se generan siempre en estado E: En Ejecución.

**Al generar una Órden de Trabajo desde un Programa:** Permite definir si se aprobará el presupuesto, aunque sea cero o no aprobarlo si está en valor cero.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_13.png"
  alt:"Valores por defecto, Programas"
%}

## Solicitudes

**Para crear solicitudes y generar reportes asociados la dirección se toma de:** Permite definir si la dirección se toma del Centro de costo o de la ubicación física del equipo.

**El solicitante es tomado del usuario logueado y no se puede modificar:** Parametrización que habilita/inhabilita si el solicitante se puede modificar.

**Mostrar mensaje de alerta al insertar solicitudes de servicio repetidas:** Parametrización que habilita/inhabilita la identificación de solicitudes repetidas indicando una alerta al usuario antes de enviarla.

**Llevar automáticamente Responsable de Centro de Costo a las Solicitudes creadas desde AMsi y Enviar correo al responsable asociado:**  Parametrización que habilita/inhabilita la notificación de correos al responsable asignado.

**Seleccionar Valores por defecto en AMsi para TM, TA y TT:** Parametrización que permite definir la tipificación por defecto de las solicitudes.

**Estado por defecto de Órdenes de Trabajo generadas desde AMsi:** Parametrización que permite definir el estado en que se generan las ordenes de trabajo desde AMsi.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_14.png"
  alt:"Valores por defecto, Solicitudes"
%}

## Ordenes

**Año OT:** Parametrización que permite definir el consecutivo de la codificación de las ordenes de trabajo. Se debe ingresar el año en los primeros días del mismo.

**Inventario permanente de OTs:** Parametrización que permite indicar si se utiliza la fecha de fin de trabajos o la fecha de envio a historia.

**Opción de manejo de presupuesto y gasto real en seguimiento/cierre:** Parametrización que habilita/inhabilita el manejo de presupuesto y gasto real en seguimiento cierre.

**Exigir el ingreso de comentarios al cerrar las órdenes de trabajo:** Parametrización que habilita/inhabilita la obligatoriedad de los comentarios en una orden de trabajo.

**El solicitante es tomado del usuario logueado y no se puede modificar:** Parametrización que habilita/inhabilita la modificación del solicitante teniendo en cuenta el usuario logueado.

**Mostrar mensaje de alerta al insertar órdenes de trabajo repetidas:** Parametrización que habilita/inhabilita los mensajes de alerta al identificar ordenes repetidas.

**Exigir evaluación de Servicios en Ordenes y Solicitudes para enviar a Historia:** Parametrización que habilita/inhabilita la obligatoriedad de la evaluación de servicio previo al envio a historia.

**Transferir a Gasto Real el Presupuesto al momento de aprobarse:** Parametrización que habilita/inhabilita transferencia del gasto real al presupuesto al momento de aprobarse.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_15.png"
  alt:"Valores por defecto, Ordenes"
%}

## Notificaciones

En esta pestaña podremos parametrizar las notificaciones enviadas al correo electrónico, para esto es indispensable que los solicitantes actualicen su correo en el perfil de AMsi y para los responsables tener asignado un correo en la tabla de terceros, infraestructura para recibir las notificaciones.

**Desea enviar al Solicitante correo de Creación de la Solicitud:** Parametrización que habilita/inhabilita la notificación de creación de solicitud al solicitante.

**Desea enviar al Solicitante correo de Asignación de la Solicitud:** Parametrización que habilita/inhabilita la notificación de asignación al solicitante.

**Desea enviar al Solicitante correo de Modificación de la Solicitud:** Parametrización que habilita/inhabilita la notificación de modificación al solicitante.

**Desea enviar al Solicitante correo de Cierre de la Solicitud:** Parametrización que habilita/inhabilita la notificación de cierre al solicitante.

**Desea enviar al Solicitante correo de Cierre de la Solicitud con OT:** Parametrización que habilita/inhabilita la notificación de cierre con orden de trabajo al solicitante.

**Desea enviar al Solicitante correo cuando se anexa un Comentario a la Solicitud:** Parametrización que habilita/inhabilita la notificación de adición de comentarios al solicitante.

**Desea enviar al responsable correo de Asignación de la Solicitud:** Parametrización que habilita/inhabilita la notificación de creación de solicitud al responsable asignado.

**Desea enviar al responsable correo de Modificación de la Solicitud:** Parametrización que habilita/inhabilita la notificación de modificación al responsable asignado.

**Desea enviar al responsable correo de Cierre de la Solicitud:** Parametrización que habilita/inhabilita la notificación de cierre al responsable asignado.

**Desea enviar al responsable correo de Cierre de la Solicitud con OT:** Parametrización que habilita/inhabilita la notificación de cierre con orden de trabajo al responsable asignado.

**Desea enviar al responsable correo cuando se anexa un Comentario a la Solicitud:** Parametrización que habilita/inhabilita la notificación de adición de comentarios al responsable asignado.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_16.png"
  alt:"Valores por defecto, Notificaciones"
%}

**Desea enviar al Solicitante correo de Creación de la Orden:** Parametrización que habilita/inhabilita la notificación de creación de orden de trabajo creada desde AMsi al solicitante.

**Desea enviar al Solicitante correo de Asignación de la Orden:** Parametrización que habilita/inhabilita la notificación de asignación de orden de trabajo creada desde AMsi al solicitante.

**Desea enviar al Solicitante correo de Modificación de la Orden:** Parametrización que habilita/inhabilita la notificación de modificación de orden de trabajo creada desde AMsi al solicitante.

**Desea enviar al Solicitante correo de Cierre de la Orden:** Parametrización que habilita/inhabilita la notificación de cierre de orden de trabajo creada desde AMsi al solicitante.

**Desea enviar al Solicitante correo cuando se anexa un Comentario la Orden:** Parametrización que habilita/inhabilita la notificación de adición de comentario a la orden de trabajo creada desde AMsi al solicitante.

**Desea enviar al responsable correo de Asignación de la Orden:** Parametrización que habilita/inhabilita la notificación de creación de orden de trabajo creada desde AMsi al responsable asignado.

**Desea enviar al responsable correo de Modificación de la Orden:** Parametrización que habilita/inhabilita la notificación de modificación de orden de trabajo creada desde AMsi al responsable asignado.

**Desea enviar al responsable correo de Cierre de la Orden:** Parametrización que habilita/inhabilita la notificación de cierre de orden de trabajo creada desde AMsi al responsable asignado.

**Desea enviar al responsable correo cuando se anexa un Comentario la Orden:** Parametrización que habilita/inhabilita la notificación de adición de comentario a la orden de trabajo creada desde AMsi al responsable asignado.

**Mensaje contacto de notificaciones:** Permite indicarles a los solicitantes datos generales de la oficina de mantenimiento que serán enviados a los correos.

**URL Imagen:** Permite ingresar la URL de la imagen del logo de la institución.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_17.png"
  alt:"Valores por defecto, Notificaciones"
%}

## Parámetros para evaluación de servicios

En esta pestaña podremos modificar las 5 preguntas para la evaluación de servicio. WIN Software entrega 5 preguntas precargadas las cuales pueden ser modificadas si el cliente lo requiere, teniendo en cuenta que estas son generales para solicitudes y ordenes de trabajo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_18.png"
  alt:"Parámetros para evaluación de servicios"
%}

## OOAK (One Of A Kind)

Registro que permite a los usuarios entregar información manual al sistema con el objeto de generar índices y/o análisis comparativos con datos que no se encuentran presentes en el sistema. Para hacer uso de los campos del registro, se debe lograr un acuerdo con el Departamento de Desarrollo de WIN Software.

## **USUARIOS**

**Nombre:** Campo donde se debe ingresar el nombre completo de la persona que dará uso a este usuario.

**Iniciar Sesión:** Campo donde se debe diligenciar el usuario para el inicio de sesión, se recomienda sea el correo corporativo interno previo a la arroba o el nombre, punto y apellido de la persona. 

**Modificar Contraseña:** En esta pestaña podemos ingresar y/o modificar la contraseña de un usuario.

Modificar Acceso:** En esta pestaña podemos habilitar/inhabilitar el acceso a un usuario. Esta es usada en casos donde la persona ya no trabaje en la compañía o se genere un bloqueo de usuario podemos habilitarlo.

Estado de la sesión:**En esta pestaña podemos habilitar/inhabilitar el estado de la sesión a un usuario. En casos donde a la persona le registra la alerta de sesión activa y no le permite ingresar, podemos cerrar la sesión y desbloquear el acceso.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_19.png"
  alt:"Parámetrización usuarios"
%}

## Permisos básicos

# Permisos en tablas

En esta pestaña los permisos se encuentran en una matriz que relaciona cada uno de los módulos y sus ventanas detalle con permisos de visualización, creación, modificación, masificación, eliminar y reportes donde si habilitamos el check brindamos el permiso a este usuario para cada acción en cada módulo o ventana.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_20.png"
  alt:"Parámetrización usuarios, permisos en tablas"
%}

Al desplegar el módulo Infraestructura con el simbolo +, se visualizan de forma organizada las diferentes tablas que lo componen. Las tablas iniciales, que deben ser diligenciadas por cada compañía, comprenden desde Centros de Costo hasta Contratos.

Posteriormente, se encuentra la configuración de Almacenes, donde es posible parametrizar los permisos de acceso de los usuarios, permitiendo restringir su consulta y operación a los diversos usuarios. Adicionalmente, se incluyen tablas relacionadas con la metodología ISO de Mantenimiento Clase Mundial, así como información necesaria para complementar las fichas técnicas de los activos y otras parametrizaciones fundamentales para el funcionamiento del sistema.

# Permisos para ejecución de procesos

En esta pestaña se despliegan permisos para cada uno de los módulos los cuales se deben habilitar o inhabilitar de acuerdo al cargo del usuario y el alcance de este. Adicionalmente tambien hay permisos generales como la exportación de visores que aplican para todo el sistema. Es indispensable tener en cuenta que algunos permisos no habilitan solo restringen.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_21.png"
  alt:"Parámetrización usuarios, permisos para ejecución de procesos"
%}

# Permisos restrictivos

En esta pestaña se despliegan permisos principalmente enfocados a los técnicos de mantenimiento en función de restringir órdenes y solicitudes asignadas a su respectivo usuario.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_22.png"
  alt:"Parámetrización usuarios, permisos restrictivos"
%}

# Permisos basicos AMovil

En esta pestaña se despliegan los permisos básicos de AMovil por modulo donde si habilitamos el check brindamos el permiso a este usuario para cada acción en cada módulo o el permiso general para visualizar el módulo completo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_23.png"
  alt:"Parámetrización usuarios, permisos basicos AMovil"
%}

# Permisos restrictivos AMovil

En esta pestaña se despliegan permisos principalmente enfocados a los técnicos de mantenimiento en función de restringir órdenes y solicitudes asignadas a su respectivo usuario en la aplicación AMovil

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_24.png"
  alt:"Parámetrización usuarios, permisos restrictivos AMovil"
%}

# Encargado

Campo desplegable donde encontraremos los terceros con el propósito de relacionar a un tercero con un usuario, esta acción es indispensable para los técnicos de mantenimiento y la visualización de las ordenes de trabajo asignadas.

# Correo Electronico