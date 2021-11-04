---
title: Codificación de Repuestos
subtitle: AM 4G está diseñado para trabajar un código de Repuestos de hasta 15 posiciones alfanuméricas, en esquema inteligente por niveles o en esquema de codificación bruta. 
tags: [setup]
author: win
order: 04_03
---
Si no se tiene una codificación de Repuestos definida o sí se desea modificar la existente, se  recomienda  utilizar  el  esquema  inteligente  por  niveles. Es  una  metodología  que requiere de una cuidadosa planeación, en la que se definen los niveles y su longitud, para que  no  exista  el  riesgo  de  que  el  sistema  de  codificación  colapse  en  el  futuro,  y  que además toma en cuenta, desde el contenido del  almacén  hasta el sistema de control de inventarios más adecuado para cada grupo de ítems.

La política de codificación resultante de este ejercicio es tal, que todos los códigos son de la misma longitud y tienen una composición tipo:

```
                    **XXYYZZMMNNN**
```

En la que cada conjunto de letras es una división del conjunto anterior. Esta  codificación requiere la realización de un estudio previo.

**Ejemplo:** **Para el nivel XX, o Grupo Principal se pueden definir entre otros:**

- Tornillería, Elementos de Unión
- Lubricantes y Combustibles
- Bandas y Correas
- Tubería, Elementos de Unión y Accesorios
- Rodamientos y  Balineras
- Repuestos para Motores
- Repuestos para Generadores de Corriente
- Repuestos para Bombas y Compresores
- Repuestos para Aparatos de Transporte Móvil
- Repuestos para Aparatos de Transporte Fijo

Cada uno de estos grupos se puede dividir en Subgrupos, Tipos y Clases según la cultura técnica de la organización.

En  muchos casos  es  importante definir  en  el  primer  nivel **(XX)**  grupos de   Repuestos específicos para un Equipo o grupo de Equipos.

**Ejemplo**

* Repuestos para la Máquina Extractora A28
* Repuestos para las Cizallas **CZAJ21**
