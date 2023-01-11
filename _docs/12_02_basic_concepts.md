---
title: Conceptos Básicos
subtitle: Esta sección se habla sobre que és la historia archivada y que finalidad tiene
tags: [setup]
author: win
order: 12_02
---
# Conceptos Básicos Historia de Archivada (HA)


La Historia Archivada se refiere a los registros mas antiguos que son transferidos desde la Historia de Mantenimiento, este módulo es independiente de la base de datos, es decir, toda la información a su origen (Historia) que antes era fundamentada en links o enlaces con otros módulos desaparecen y se resuelven quedando con la información real, es decir, ahora todos los campos etán diligenciados y grabados, por lo que la visualización de cada registro es una tabla plana que contiene la misma información pero inmodificable. La Historia Archivada hace que la base de datos se vuelva mas ligera, liviana y ágil. 

Es importante tener en cuenta que cuando se envían registros a <a class="btn blue">Historia Archivada</a> se hace posible eliminar o hacer limpieza de registros muy antiguos como Centros de Costo, Terceros, Ubicaciones Físicas, Activos, entre otra información que no tenga uso o no sea vigente.

El envío de registros Históricos a Historia Archivada es un proceso controlado, es decir, este envío se hace por cada cinco mil registros como máximo y estos deben ser preseleccionados en un Subgrupo, el cual puede tardar hasta cinco horas, por ende, se recomienda hacer un respaldo de datos o copia de seguridad previo de efectuar el traslado de los registros.

# ¿Qué tipo de consultas se pueden hacer desde Historia Archivada?.

Se pueden hacer consultas de registros por diferentes criterios de búsqueda a través del Subgrupo <span class="mdi mdi-filter-variant"></span> y permite la impresión de un reporte básico <span class="mdi mdi-printer"></span> 
para analizar un registro individual (OT, SS o Paro). 

>**Nota:** Para enviar, consultar y eliminar la Historia Archivada se debe ingresar con usuario administrador o contar con los permisos específicos para ello.
