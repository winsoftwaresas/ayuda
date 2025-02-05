---
title: Conceptos Básicos
subtitle: En este capítulo se dan los conceptos básicos de funcionamiento del módulo.
tags:
  - setup
author: win
order: '06_02'
---



### Características

- **Registro Detallado de Dispositivos Médicos:** Permite almacenar información clave como marca, modelo y código de registro sanitario de los dispositivos médicos.

- **Barrido Histórico:** Opción para realizar un análisis completo desde una fecha específica (por ejemplo, un rango de trimestre) hasta la actualidad.

- **Extracción Automática de Información:** Conexión directa con el sitio web del INVIMA para extraer datos sobre eventos adversos.

- **Comparación Inteligente:** Cruza las alertas publicadas por INVIMA con los activos registrados en **AM** utilizando el parámetro principal como el registro sanitario.

- **Gestión de Alertas:** Visualización detallada de alertas, incluyendo ficha técnica del activo, descripción de la alerta y opción de descarga de la alerta en formato PDF.

- **Historial de Actividades:** Registro editable de comentarios y acciones tomadas frente a cada alerta.


- **Seguimiento de Incidentes:** Monitoreo continuo del estado de cada alerta a través de indicadores:  Estados de Alertas, Activos y generación automática de Órdenes de Trabajo. 



### Beneficios 

- **Eficiencia Operativa:** Automatización de la extracción de datos y generación de reportes, reduciendo tiempos de gestión.

- **Gestión Integral de Riesgos:** Identificación y seguimiento proactivo de dispositivos médicos afectados por alertas.

- **Cumplimiento Normativo:** Facilita la gestión y documentación requerida para cumplir con los estándares regulatorios.


- **Toma de Decisiones Informadas:** Proporciona información detallada y actualizada para evaluar riesgos y priorizar acciones correctivas.


- **Optimización de Recursos:** Centraliza la información clave, minimizando esfuerzos duplicados y mejorando la coordinación entre equipos.



- **Visibilidad y Transparencia:** Permite el acceso a un historial detallado de incidentes, acciones tomadas y estados de alerta.


- **Facilidad de Uso:** Interfaz intuitiva con opciones claras para buscar alertas, registrar incidentes y generar informes.

### Requerimientos iniciales 

- Parametrizar la compañía como Biomédica, habilitar permisos del módulo de Tecnovigilancia. 

- Los dispositivos médicos deben estar registrados en AM, incluyendo su marca, modelo y registro sanitario.

- Se sugiere realizar una búsqueda del último trimestre si es la primera vez que se utiliza el módulo.

- Establecer un proceso periodico para actualizar la información.


### Estracción de Eventos Adversos



El usuario debe seleccionar el periodo de tiempo deseado (por ejemplo, las fechas específicas de interés) en el módulo de <a class="btn cl-white bg-blue px-3">Tecnovigilancia</a>
y presionar el botón <a class="btn cl-blue bg-gray px-6"> Iniciar Búsqueda </a>. 

Al realizar esta acción:

- El sistema AM  se conecta al sitio web del INVIMA.
- Extrae automáticamente la información de eventos adversos que coinciden con el periodo seleccionado.
- Almacena los eventos en el módulo de tecnovigilancia para análisis y gestión.


### Identificación de Activos con Alertas

Una vez extraída la información, el sistema compara las alertas publicadas por el INVIMA con los activos registrados en **AM** . Esta comparación se realiza utilizando el parámetro **registro sanitario INVIMA** de los dispositivos, identificando aquellos que coincidan con las alertas reportadas.

Cuando el usuario selecciona la opción <a class="btn cl-red bg-white px-6"> Activos con Alertas </a>, se abre una nueva ventana con un listado detallado de las coincidencias encontradas. Este listado incluye información clave como:


- Descripción de la alerta.
- Código del activo.
- Registro sanitario INVIMA.
- Proveedor asociado.


#### Visualización de la Ficha Técnica del Activo


En esta sección, el usuario puede consultar todos los datos relevantes del activo asociado a la alerta seleccionada. La ficha técnica incluye información como:


- **Código del Activo:** Identificador interno del activo dentro del sistema.
- **Ubicación Física:** Lugar donde se encuentra actualmente el activo.
- **Modelo:** Modelo específico del dispositivo médico.
- **Proveedor:** Empresa que suministró el activo.
- **Referencia del Proveedor:** Número o código que identifica el activo con el proveedor.
- **Número de Serie:** Identificador único del activo dentro del sistema del proveedor.


#### Información de la Alerta

La ventana también muestra información relevante de la alerta emitida por el INVIMA, como:

- **Descripción del Dispositivo Médico:** Detalle del dispositivo afectado por la alerta.
- **Fecha de Publicación:** Fecha en la que el INVIMA emitió la alerta.
- **Estado de la Alerta:** Indica si la alerta está abierta, cerrada, o en otro estado de gestión


#### Opción de Visualizar Alertas

El sistema incluye un link denominado “Visualizar Alerta", que permite al usuario descargar la documentación oficial emitida por el INVIMA en formato PDF. Esto facilita tener acceso a la fuente oficial de la información para revisión, impresión o respaldo.


#### Sección de Comentarios y Acciones Tomadas frente a cada Alerta

En esta sección, el personal encargado puede registrar información sobre las acciones tomadas en relación con la alerta. Estas acciones pueden incluir medidas correctivas, preventivas, o cualquier otra actividad relacionada con el manejo de la alerta. Esto permite mantener un historial de actividades gestionadas para cada alerta. El campo de comentarios y acciones no es editable.


#### Procedimiento Inicial y Mantenimiento

Después de analizar las coincidencias, es opcional y en ocasiones necesario registrar las Acciones Tomadas y los Comentarios como buena práctica.
Cada alerta debe cerrarse con un estado definido: **“Aplica”** o **“No Aplica”**. Las alertas aplicadas deben incluir una acción antes de cerrarse. Cuando se define **Aplica** se genera una Órden de Trabajo Correctiva de manera automática. 

#### Seguimiento de Incidentes

Los responsables de mantenimiento biomédico pueden seguir el estado de cada incidente, asegurándose de que se tomen las acciones correctivas y preventivas necesarias.
