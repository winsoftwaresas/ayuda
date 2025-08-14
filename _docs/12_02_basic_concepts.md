---
title: Conceptos Básicos
subtitle: Esta sección habla sobre que és la historia archivada y que finalidad tiene
tags: [setup]
author: win
order: '12_02'
media: "../../assets/images/docs/"
---
# Conceptos Básicos Historia de Archivada (HA)

La Historia Archivada se conforma por los registros de OTs que por ser muy antiguos o por ser irrelevantes  no se consultan con frecuencia sino en forma eventual. Son transferidos desde la Historia de Mantenimiento. 

Este módulo es independiente de la base de datos, es decir, toda la información allí contenida se asemeja a una tabla plana sin relación alguna con las tablas de la base de datos. 

Al generar HA se logra que la base de datos se vuelva mas ligera, liviana y ágil. 

Es importante tener en cuenta que cuando se envían registros a <a class="btn blue">Historia Archivada</a> se hace posible eliminar registros  antiguos o en deshuso de tablas como Centros de Costos, Terceros, Ubicaciones Físicas y Activos.

El envío de registros Históricos a Historia Archivada es un proceso controlado, es decir, se hace por cada cinco mil registros como máximo y estos deben ser preseleccionados en un Subgrupo <span class="mdi mdi-filter-variant"></span>. Este proceso puede tardar hasta cinco horas y por ende se recomienda hacer un respaldo de datos o copia de seguridad previo  a ser ejecutado.

# ¿Qué tipo de consultas se pueden hacer desde Historia Archivada?.

Se pueden hacer consultas de registros por diferentes criterios de búsqueda a través del Subgrupo <span class="mdi mdi-filter-variant"></span> y el sistema permite la impresión <span class="mdi mdi-printer"></span>  de solo un reporte sobre el contenido del Subgrupo. 

En HA el principal enfoque es para analizar un registro individual y así de uno en uno (OT, SS o Paro).

> **Nota:** Para enviar, consultar y eliminar la Historia Archivada se debe ingresar con usuario administrador o contar con los permisos específicos para ello.