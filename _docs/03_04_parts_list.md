---
title: Codificación y Despiece de Activos
subtitle: Aquí se encuentra información sobre cómo codificar un activo y despiece.
tags:
  - setup
author: win
order: '03_04'
media: "../../assets/images/docs/"
---

**AM** está capacitado para aceptar y definir 5 códigos para cada Activo/Equipo. Cada estructura de código es  independiente de las otras y sirve para localizar o estudiar un Activo, partiendo de distinta información que distintos tipos de usuarios puedan tener sobre el mismo.

Las cinco estructuras son: el Código de Mantenimiento (objeto de la presente sección), el Código Referencia (código externo, o dado por el proveedor), el Código de Inventario, un número de Activo Fijo (normalmente contable), un número de Serie propio del Activo, y un Código Alias (propio de la cultura técnica empresarial).

Como se dijo antes, en esta sección se estudia el Código de Mantenimiento del Activo.

Se trata entonces de un Código de 18 posiciones. Es un código amplio, jerárquico, multinivel, que se estructura y  diseña flexiblemente de acuerdo con la necesidad o el gusto del usuario.

Estructurar el código de Activo/Equipo es una labor de Implementación que exige estudio, discusiones y participación de varios usuarios entendidos. Al tiempo exige a todo usuario con capacidad de definir códigos de Activos, el compromiso de uso, ajustado a la norma que lo estructuró.

**AM** es capaz de asumir la estructura de Código que ya exista en la instalación. De todas formas si no se tiene una estructura predefinida o si se desea revisar y modificar la que ya existe, se deben tener en cuenta las siguientes observaciones:

**1.** **AM** garantiza un conjunto de funciones con base en el Código de Activo, que es estructurado y conformado por niveles jerárquicos. Con base en tal estructuración se posibilita el despiece de los Activos. A manera de ejemplo, una estructuración de los niveles que se menciona, podría ser: Activo/Equipo, Sistema, Subsistema, Componente y Parte, entre otros.

**Por ejemplo:** el código COARCSU se puede descomponer de la siguiente forma:

- **CO** Grupo de Equipos corrugadores
- **COA** Corrugador A
- **COARC**  Sistema de Rodillos Corrugadores del Corrugador A.
- **COARCSU** Rodillo superior del Sistema de Rodillos Corrugadores del **COA**

**2.**	Antes de codificar algún Activo se debe haber establecido la estructura general y común de codificación de Activos de la empresa. Tal estructura se conforma definiendo los grupos significativos de primer, segundo, tercer y en ocasiones hasta de cuarto orden, de acuerdo a la cultura técnica y requerimientos del área de Mantenimiento.

## Despiece de Activos / Equipos

Existen varios criterios para despiezar un Activo/Equipo o uno de sus componentes. El primero que se menciona es lograr el despiece total del Activo/Equipo hasta asociar cada componente mínimo con un código de Repuesto en el Almacén.

Otro, plantea el despiece a un nuevo nivel, por la necesidad de mantener Historia de Mantenimiento individual y detallada. Para ese nuevo nivel de despiece, el **AM** trabaja principalmente bajo este segundo concepto.

Lo anterior posibilita obtener la Historia de Mantenimiento total, detallada de u  n Activo/Equipo, en conjunto con la de todos sus componentes de despiece, si es del caso. Pero también es posible obtener la Historia detallada de un Activo o de algún componente de despiece, incluyendo  solamente las actividades relacionadas con el nivel  requerido, sin incluir más niveles inferiores de despiece. En todo caso, el proceso de definir un nuevo nivel de despiece se centra en la creación de un nuevo nivel jerárquico en la estructura del código actual. En el ejemplo del  numeral 1 de la sección anterior vemos como el nivel COARCSU es un nuevo nivel de despiece del nivel anterior, el COARC.

