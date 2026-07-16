---
title:      'Usuarios'
subtitle:   'El módulo de Administración permite parametrizar cada compañía y asignar permisos a los usuarios de acuerdo con las necesidades de la organización.'
tags:       [setup]
author:     'win'
order:      '17_03'
media: "../../assets/images/docs/"
---

## **USUARIOS**

La parametrización de usuarios permite que cada compañía defina, de acuerdo con los cargos de su organización, el alcance y los permisos de acceso tanto para los líderes de las áreas de mantenimiento como para los diferentes cargos técnicos. Estos permisos se configuran de manera específica para cada módulo, determinando las acciones que cada usuario puede realizar dentro del sistema.

Inicialmente, WIN Software entrega tres usuarios predeterminados: Gerente, Administrador y Usuario. Para la creación de nuevos usuarios, se recomienda definir plantillas de permisos según el cargo; por ejemplo, una plantilla para los técnicos. De esta manera, la parametrización establecida podrá copiarse y asignarse fácilmente a cada usuario que desempeñe ese cargo, garantizando uniformidad en la configuración y agilizando el proceso de administración.

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

Al desplegar el módulo Infraestructura con el símbolo +, se visualizan de forma organizada las diferentes tablas que lo componen. Las tablas iniciales, que deben ser diligenciadas por cada compañía, comprenden desde Centros de Costo hasta Contratos.

Posteriormente, se encuentra la configuración de Almacénes, donde es posible parametrizar los permisos de acceso de los usuarios, permitiendo restringir su consulta y operación a los diversos usuarios. Adicionalmente, se incluyen tablas relacionadas con la metodología ISO de Mantenimiento Clase Mundial, así como información necesaria para complementar las fichas técnicas de los activos y otras parametrizaciones fundamentales para el funcionamiento del sistema.

# Permisos para ejecución de procesos

En esta pestaña se despliegan permisos para cada uno de los módulos los cuales se deben habilitar o inhabilitar de acuerdo al cargo del usuario y el alcance de este. Adicionalmente también hay permisos generales como la exportación de visores que aplican para todo el sistema. Es indispensable tener en cuenta que algunos permisos no habilitan solo restringen.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_21.png"
  alt:"Parámetrización usuarios, permisos para ejecución de procesos"
%}

## Permisos restrictivos

En esta pestaña se despliegan permisos principalmente enfocados a los técnicos de mantenimiento en función de restringir órdenes y solicitudes asignadas a su respectivo usuario.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_22.png"
  alt:"Parámetrización usuarios, permisos restrictivos"
%}

## Permisos básicos AMóvil

En esta pestaña se despliegan los permisos básicos de AMóvil por modulo donde si habilitamos el check brindamos el permiso a este usuario para cada acción en cada módulo o el permiso general para visualizar el módulo completo.

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_23.png"
  alt:"Parámetrización usuarios, permisos básicos AMóvil"
%}

## Permisos restrictivos AMóvil

En esta pestaña se despliegan permisos principalmente enfocados a los técnicos de mantenimiento en función de restringir órdenes y solicitudes asignadas a su respectivo usuario en la aplicación AMóvil

{% set_image
  path:""
  css_class:""
  number:""
  filename:"17_24.png"
  alt:"Parámetrización usuarios, permisos restrictivos AMóvil"
%}

## Encargado

Campo desplegable donde encontraremos los terceros con el propósito de relacionar a un tercero con un usuario, esta acción es indispensable para los técnicos de mantenimiento y la visualización de las ordenes de trabajo asignadas.

## Correo Electrónico

Campo designado para el ingreso de correo corporativo del usuario.