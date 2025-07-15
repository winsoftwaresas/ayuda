---
layout: page
title: Versión 1.5
---

## MÓDULO DE INFRAESTRUCTURA

### ALMACÉN

{% include tag.html tag="added" %}
- Se permite a los usuarios relacionar un **Encargado del Almacén**.

![Encargado del Almacén](../../assets/images/Version1.5/Imagen1.png)

{% include tag.html tag="added" %}
- Se adiciona a la Infraestructura los **Registros de Residuos** para relacionar con los **Activos**.

![Registros de Residuos](../../assets/images/Version1.5/Imagen2.png)

{% include tag.html tag="added" %}
- Los Usuarios podrán ingresar los tipos de Residuos que generan los activos para poder relacionarlos con los mismos, de igual manera podrán descargarlos.

![Tipos de Residuos](../../assets/images/Version1.5/Imagen3.png)

{% include tag.html tag="added" %}
- Los usuarios pueden ingresar tipos de Residuos nuevos o editar los existentes.

![Edición Tipos de Residuos](../../assets/images/Version1.5/Imagen4.png)

---

## MÓDULO DE ACTIVOS

{% include tag.html tag="added" %}
- Los Usuarios podrán relacionar los residuos con los Activos

![Relación de Residuos con Activos](../../assets/images/Version1.5/Imagen5.png)

- Se insertan según las Opciones cargadas en la tabla de Infraestructura, luego deben elegir la unidad de medida si corresponde y se tiene un campo de escritura con 250 caracteres permitidos.

![Opciones de Residuos](../../assets/images/Version1.5/Imagen6.png)

{% include tag.html tag="added" %}
- Se genera el indicador de **Alertas de Tecnovigilancia**, el cual se puede visualizar en el registro del activo, cuando este tenga una alerta de Tecnovigilancia Abierta.

![Alertas de Tecnovigilancia](../../assets/images/Version1.5/Imagen7.png)

{% include tag.html tag="added" %}
- Se crea el filtro para buscar por el indicador de Tecnovigilancia.

![Filtro de Tecnovigilancia](../../assets/images/Version1.5/Imagen8.png)

{% include tag.html tag="added" %}
- Se Genera una función para mostrar al sobrepasar el mouse sobre los indicadores de una **Ubicación Técnica** el código relacionado a la **Ubicación Técnica**.

![Indicadores de Ubicación Técnica](../../assets/images/Version1.5/Imagen9.png)

{% include tag.html tag="added" %}
- Se Genera una función para mostrar al sobrepasar el mouse sobre los indicadores de un **Componente Intercambiable** el código del activo Padre.

![Indicadores de Componente Intercambiable](../../assets/images/Version1.5/Imagen10.png)

---

## MÓDULO DE KÁRDEX

{% include tag.html tag="added" %}
- Se desarrolla una función que permite tomar la firma en los **Movimientos de Salida**, sea a través del mouse, pantalla táctil o un dispositivo Wacom.

![Firma en Movimiento de Salida](../../assets/images/Version1.5/Imagen11.png)

- El usuario da click sobre el botón Realizar Firma lo cual generara un modal para obtener la firma, luego se da Guardar y esta se sube en el momento que se adiciona el movimiento.

![Procedimiento de Firma](../../assets/images/Version1.5/Imagen12.png)

- En el reporte KXR-RTF Informe de Salidas, podrán observar las firmas cargadas.

![Firmas Cargadas](../../assets/images/Version1.5/Imagen13.png)

---

## MÓDULO DE TECNOVIGILANCIA

{% include tag.html tag="added" %}
- A esta ventana visor se llega accionando el módulo **Tecnovigilancia** como se muestra a continuación

![Módulo Tecnovigilancia](../../assets/images/Version1.5/Imagen14.png)

- Luego, el usuario debe ingresar el rango de fechas a analizar y continuar accionando el botón **Iniciar Búsqueda**.

![Rango de Fechas](../../assets/images/Version1.5/Imagen15.png)

- Una vez el sistema haga la carga, acciona el botón **Activos con Alerta**.

![Botón Activos con Alerta](../../assets/images/Version1.5/Imagen16.png)

- De esta manera, el sistema muestra los Activos relacionados con la alerta sanitaria.

![Activos con Alerta](../../assets/images/Version1.5/Imagen17.png)

{% include tag.html tag="added" %}
- Se adiciona la función Subgrupos que permite filtrar información precisa y detallada acorde a un conjunto de criterios, con el fin de hacer análisis y gestión específica, para ello diríjase a la parte superior derecha y accione el ícono:

![Función Subgrupos](../../assets/images/Version1.5/Imagen18.png)

{% include tag.html tag="added" %}
- El usuario puede ver la ventana de Detalle donde hará gestión de la alerta. Ingrese dando un clic sobre el registro en el visor, el cual muestra la siguiente ventana detalle:

![Ventana Detalle](../../assets/images/Version1.5/Imagen19.png)

{% include tag.html tag="added" %}
- El usuario puede actualizar el estado de la alerta del Activo por medio del botón **ACTUALIZAR**. En caso de aplicar, accione la opción **No Aplica/Aplica** y guarde los cambios

![Botón Actualizar](../../assets/images/Version1.5/Imagen20.png)

{% include tag.html tag="added" %}
- El usuario puede visualizar el PDF de Alerta del sitio del Invima dando click directamente en el botón **Visualizar Alerta**.

![Botón Visualizar Alerta](../../assets/images/Version1.5/Imagen22.png)

![Botón Visualizar Alerta](../../assets/images/Version1.5/Imagen23.png)

{% include tag.html tag="added" %}
- El Usuario puede registrar los comentarios y acciones realizadas sobre la Alerta en tablas independientes.

![Registro de Comentarios](../../assets/images/Version1.5/Imagen24.png)

{% include tag.html tag="added" %}
- Si el usuario decide que la Alerta aplica, el sistema generara de manera automática una **Orden de Trabajo Correctiva** sobre la Alerta.

![OT Correctiva automática](../../assets/images/Version1.5/Imagen25.png)

---

## MÓDULO DE ADMINISTRACIÓN

{% include tag.html tag="added" %}
- El usuario Administrador de la Compañía puede definir si se permiten o no valores repetidos en el campo **Parte Número**.

![Parametrización del Campo 'Parte Número'](../../assets/images/Version1.5/Imagen26.png)
