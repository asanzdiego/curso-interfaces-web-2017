% Accesibilidad Web
% Adolfo Sanz De Diego
% Septiembre 2016



# El autor



## Adolfo Sanz De Diego

- Empecé **desarrollando aplicaciones web**, hasta que di el salto a la docencia.

- Actualmente soy **Asesor Técnico Docente** en el servicio TIC de la D.G de Infraestructuras y Servicios de la Consejería de Educación, Juventud y Deporte de la Comunidad de Madrid.

- Además colaboro como **formador especializado en tecnologías de desarrollo**.


## Algunos proyectos

- **Hackathon Lovers** <http://hackathonlovers.com>: un grupo creado para emprendedores y desarrolladores amantes de los hackathones.

- **Password Manager Generator** <http://pasmangen.github.io>: un gestor de contraseñas online.

- **MarkdownSlides** <https://github.com/asanzdiego/markdownslides>: un script para crear slides a partir de ficheros MD.


## ¿Donde encontrarme?

- Mi nick: **asanzdiego**

    - AboutMe:  <http://about.me/asanzdiego>
    - GitHub:   <http://github.com/asanzdiego>
    - Twitter:  <http://twitter.com/asanzdiego>
    - Blog:     <http://asanzdiego.blogspot.com.es>
    - LinkedIn: <http://www.linkedin.com/in/asanzdiego>
    - Google+:  <http://plus.google.com/+AdolfoSanzDeDiego>



# Introducción



## Objetivos

- La accesibilidad web **no se centra sólo en las personas con discapacidad**, en realidad tiene como objetivo lograr que las páginas web sean utilizables por el máximo número de personas, **independientemente de sus conocimientos o capacidades personales e independientemente de las características técnicas del equipo** utilizado para acceder a la Web.

## Destinatarios

- La mayoría de los estudios estiman que un **20% de la población tiene algún tipo de discapacidad**, no todas tienen discapacidades que dificultan su acceso a Internet, pero sigue siendo una parte importante de la población.

- Cada discapacidad requiere de ciertos tipos de adaptaciones, que la mayoría de las veces, **beneficiarán a casi todos, no sólo a las personas con discapacidad**.

## Desarrolladores

- La mayoría de los errores de accesibilidad web son **por falta de conocimientos del desarrollador**.

## W3C

- El W3C es un grupo internacional e independiente que define los **protocolos y estándares para la web**, como HTML, CSS, etc.

## WAI

- Una de las principales iniciativas del W3C es la **WAI (Web Accessibility Initiative)** que se encarga del desarrollo de normas de accesibilidad.

## WCAG

- Las **WCAG (Web Content Accessibility Guidelines)** o Pautas de Accesibilidad al Contenido en la Web son las principales normas de accesibilidad web.

### WCAG 1.0

- Finalizadas en **1999**, fueron un avance importante.

- Proporcionaban **14 directrices** y numerosos puntos de control.

- Proporcionaban tres prioridades:
    - **Nivel A** requisitos básico,
    - **Nivel AA** mejor accesibilidad y la eliminación de importantes barreras,
    - **Nivel AAA** proporcionaba mejoras a la accesibilidad.

### WCAG 2.0

- Se fundamentan en WCAG 1.0, pero introducen algunos cambios significativos.

- Las pautas están **centradas en principios más que en técnicas**, para que sigan siendo relevantes incluso cuando la tecnología cambie.

- Sitúa únicamente 4 principios en el nivel superior, las 4 directrices POUR (Servir).

### WAI-ARIA 1.0

- **Accessible Rich Internet Applications**

- Accesibilidad de aplicaciones web enriquecidas con contenido dinámico (eg. widgets, AJAX)

### WCAG-EM 1.0

- **Website Accessibility Conformance Evaluation Methodology**

- Metodología de evaluación de la accesibilidad del contenido de páginas web

### ATAG 2.0

- **Authoring Tool Accessibility Guidelines**

- Accesibilidad de editores de páginas web

### UAAG 2.0

- **User Agent Accessibility Guidelines**

- Accesibilidad de navegadores web



# Directrices POUR



## Perceptible

- Disponible para los sentidos (visión y audición principalmente), bien a través del navegador o por medio de ayudas técnicas (por ejemplo, **lectores de pantalla, ampliadores de pantalla**, etc.)

## Operable

- Los usuarios pueden interactuar con todos los controles y elementos interactivos usando **el ratón, un teclado o un dispositivo de ayuda**.

## Comprensible

- El contenido es claro y se **limita la confusión y la ambigüedad**.

## Robusto

- Una **amplia gama de dispositivos y tecnologías** puede acceder al contenido.



# Problemas discapacidad



## Visual

- Imágenes o elementos multimedia **sin texto alternativo**
- Tamaño del **texto muy reducido**
- Información basada **exclusivamente en el color**
- Combinaciones de **colores con poco contraste**

## Auditiva

- Ausencia de **transcripciones** del audio
- Ausencia de **subtítulos** en vídeos
- Textos **largos y complejos**
- Ausencia de **imágenes que complementen** la información textual

## Física

- Interfaces de usuario que sólo se pueden **utilizar con ratón**
- Enlaces y controles de **formulario muy pequeños**
- Interfaces de usuario que requieren un **control muy preciso**
- Interfaces de usuario con **tiempos de respuesta** por parte del usuario muy pequeños

## Cognitiva y neurológica

- Textos **largos y complejos**
- Ausencia de **imágenes que complementen** la información textual
- Ausencia de un **mapa del sitio web**
- Ausencia de **descripciones y ayudas** para interpretar los controles de un formulario
- **Inconsistencias** entre distintas páginas de un mismo sitio web

## Relacionadas con el envejecimiento

- Normalmente, problemas relacionados con:
    - la discapacidad **visual**,
    - la discapacidad **auditiva** y
    - la discapacidad **física**.

## Tecnológica

- **Sistemas operativos** antiguos
- **Navegadores** alternativos
- **Ancho de banda** de comunicación por Internet bajo
- Ausencia de un **plugin** para reproducir ciertos contenidos
- Dispositivo de visualización de **pequeño tamaño**.



# Imágenes y animaciones



## Use el atributo alt

- Para describir la función de cada elemento visual (**IMG, AREA, APPLET e INPUT**).

## Ayuda a los usuarios

- El **texto alternativo** ayuda a los usuarios:
    - que no tengan terminales gráficas,
    - cuyos navegadores no soporten formularios,
    - con discapacidades visuales,
    - que utilicen sintetizadores de voz,
    - que hayan configurado sus agentes de usuario para no mostrar imágenes, etc.

## No especificar texto alternativo

- **cuando las imágenes sólo sirven para dar formato a una página**, por ejemplo, alt="bola roja" para una imagen que añade una bola roja para decorar un título o un párrafo

- **cuando el texto carezca de significado** (p.ej., "relleno que queda bonito"), pues esto no solamente frustrará a los usuarios, sino que ralentizará a los agentes de usuario que deban convertir texto a salida por voz o Braille.



# Mapas de imagen



## ¿Qué son?

- Los mapas de imágenes permiten a los autores **especificar regiones en una imagen u objeto y asignar una acción** específica a cada región.

## Texto alternativo

- Para que sea accesible, se tiene que proporcionar un **texto alternativo con alt para cada etiqueta \<area\>**.

- Como cada zona activa realiza la misma función que un enlace, el texto alternativo tiene que **ser eficaz**, y tiene que **tener sentido cuando se lea fuera de contexto**.



# Multimedia



## Poco accesibles

- Los elementos multimedia pueden ocasionar problemas de accesibilidad, ya no sólo a las personas con algún tipo de discapacidad, sino a todo el mundo en general, pues, aunque cada ve menos, en muchos casos, requieren la **instalación de plug-in**.

## Transcripción y subtítulos

- Se tiene que proporcionar **una transcripción de los diálogos y una descripción de los sonidos**.

- En el caso de los vídeos también se tiene que proporcionar **una descripción del vídeo en sí (de la imagen)**.

## YouTube

- YouTube ofrece un sistema para la **inclusión de subtítulos de forma automática**.

- En YouTube, se puede emplear **"Filtros" de búsqueda** para indicar que se quiere buscar vídeos que tengan subtítulos.

- YouTube permite añadir subtítulos en diferentes idiomas, y también permite emplear un servicio de **traducción automática** de los subtítulos.



# Enlaces



## Fuera de contexto

- Algunos navegadores y algunos programas de ayuda permiten mostrar **la lista de enlaces de una página web**.

- Para que el enlace tenga sentido en esa lista de enlaces, **el texto del enlace tiene que tener sentido fuera de su contexto**.

## Evitar "Pincha aquí"

- Intenta **evitar los enlaces tipo "Pincha aquí"**:

## Tamaño

- Asegúrate que **los enlaces son lo suficiente grandes** para que sea fácil hacer click en ellos.

## Importancia primer enlace

- El primer enlace va a llevarse la mayor parte de la atención del lector y el mayor porcentaje de clicks.
- **Elige tu primer enlace cuidadosamente**.
- Empieza por lo importante y no lo malgastes en una trivialidad.

## No enlaces todo

- Usar demasiados enlaces hace el texto difícil de leer y además devalúa el valor de los enlaces importantes.
- Dedica algo de tiempo a pensar **qué es lo más importante que estás escribiendo y qué puede tener sentido enlazar**.

## No repitas los enlaces

- Si utilizas por primera vez algún término o concepto nuevo puedes enlazar a alguna enciclopedia o diccionario para que el lector encuentre más información si no sabe de qué hablas, pero **hazlo sólo la primera vez, no cada vez que se encuentre el término en la página**.

## Mismo idioma página

- Intenta enlazar en el mismo idioma de la página, y **si tienes que hacerlo, y no es obvio, indica el idioma del enlace** entre paréntesis.

## Comportamiento estándar

- **No alteres el comportamiento de los enlaces**, como por ejemplo poner previsualizaciones de la página que enlaza cuando se pasa el ratón por encima.

## Los enlaces son enlaces

- Dales un estilo distintivo **que no pueda ser confundido** con ningún otro elemento o texto de la página.
- Usa un color único no usado en ninguna otra parte de la página y **considera usar la convención de un enlace subrayado**.
- Usa el **mismo diseño para todos los enlaces** del site.

## No ofusques tus URLs

- Los usuarios pueden querer ver previamente dónde van a ser enviados con tu enlace poniendo el ratón encima y viendo la URL en la barra de estado.
- **Evita utilizar redirecciones y servicios acortadores de URLs** que hacen la URL totalmente opaca.

## Comprueba los enlaces

- Visítalos antes de enlazar, copia correctamente la URL y una vez publicado **recuerda pulsarlos para comprobar** que funcionan correctamente.
- No hay nada más frustrante en la Red que un enlace mal puesto o estropeado.



# Organización de las páginas



## Elementos estructurales

- Las páginas web tienen que estar correctamente estructuradas.
- Para ello, se tienen que **emplear las etiquetas de HTML que definen la estructura de una página**, como son: \<title\>, \<h1\>, \<h2\>, ..., \<ul\>, \<ol\>, \<p\>, \<blockquote\>.

## title (I)

- Toda página web debe tener un título  **descriptivo pero a la vez breve** definido con **la etiqueta \<title\> que resuma el contenido o la función** de la página.

- Es conveniente **incluir el nombre del sitio web** para definir el contexto de la página.

## title (II)

- El título de la página se emplea:
    - en los **marcadores de los navegadores**,
    - en los **resultados que muestran los buscadores**,
    - y suele ser el **texto que se comparte en las redes sociales**.

## title (III)

- El título de la página **es lo primero que leen los lectores de pantalla**.

- Como se lee en todas las páginas, **debe ser corto y no debe ser el mismo en todas las páginas**.

## Encabezados (I)

- El contenido de las páginas se tiene que estructurar con las **etiquetas de encabezado \<h1\>, \<h2\>, ...**

## Encabezados (II)

- La mayoría de los lectores de pantalla y algunos navegadores permiten al usuario desplazarse dentro de una página web "saltando" de un encabezado a otro encabezado, lo **permite llegar de una forma más rápida a la información que se busca**.

## Encabezados (III)

- Utiliza **un único encabezado \<h1\> para el título principal** de la página web.

- Utiliza **diferentes encabezados \<h2\> para cada apartado principal** de la página.

- Emplea **el resto de encabezados (\<h3\> ... <\h6\>) para añadir mayor nivel de detalle** en la estructura de la página.

## Encabezados (IV)

- Se consistente en el uso de los encabezados: por ejemplo, **no pases de \<h2\> a \<h4\> sin utilizar \<h3\>**.

## Encabezados (V)

- Si no quieres que se vean los encabezados en un navegador visual, **utiliza CSS para esconderlos**.

- Para ello, **no utilices display: none;** si no desplaza el encabezado fuera del área de visualización con posicionamiento absoluto, por ejemplo, **position: absolute; top: -500px;**.

## Maquetación

- Muchos desarrolladores de páginas web emplean las etiquetas \<div\> y \<span\> para definir encabezados de sección y estructurar el contenido, sin embargo, estas etiquetas **\<div\> y \<span\> no proporcionan contenido semántico**, por lo que se debe evitar su uso.

- En una página web **nunca se deben utilizar las tablas para maquetar**, ya que suponen un grave problema de accesibilidad.

## HTML5

- Sin perder de vista todo lo mencionado anteriormente, **se pueden empezar a usar las nuevas etiquetas semánticas y estructurales de HTML5**: \<header\>, \<hgroup\>, \<nav\>, \<article\>, \<aside\> o \<footer\>.

## header

- La etiqueta **\<header\> se usa para marcar un grupo de elementos de introducción o de navegación** dentro de una sección o documento.

- El uso de la etiqueta **\<header\> no está restringido a una por documento**:

## hgroup

- La etiqueta **\<hgroup\> se usa para agrupar un conjunto de elementos de encabezado** (\<h1\>–\<h6\>).

- El uso más típico de esta etiqueta es para **agrupar el título de la página con su eslogan**.

## nav

- La etiqueta **\<nav\> se usa para marcar la navegación** de la página web.

- Esta etiqueta **no debe ser usada para marcar todos los grupos de enlaces**, únicamente los bloques principales de navegación por la página.

## article

- La etiqueta **\<article\> se usa para marcar contenido independiente que tendría sentido fuera del contexto de la página actual y que podría sindicarse**, por ejemplo: una noticia, un artículo en un blog o un comentario.

- Normalmente un \<article\> podrá además tener de su propio contenido, también una cabecera (\<header\>) y posiblemente un pie (\<footer\>).

## section

- La etiqueta **\<section\> se usa para marcar una sección genérica** de un documento o aplicación, típicamente con un encabezado (\<header\>).

- Sólo se debería usar \<section\> para contenido independiente al que se podría poner un encabezado y que no sea susceptible de ir marcado con \<article\>, \<aside\> o \<nav\>.

## aside

- La etiqueta **\<aside\> se usa para marcar un trozo de contenido que está relacionado con el contenido de la página web, pero que no es parte del mismo**. Ejemplos de uso serían: glosario de términos, grupos de enlaces a páginas relacionadas, barras laterales, ...

## footer

- La etiqueta **\<footer\> se usa para marcar el pie de una sección o documento** y que contiene información sobre el mismo como el autor, licencia, términos de uso, ...



# Figuras y diagramas



## longdesc

- Nos podemos encontrar con el caso de tener una imagen a la que haya que asociarle un texto alternativo, pero dicho **texto sea excesivamente largo**, para esas ocasiones está el atributo longdesc.



# Scripts



## Poco accesibles

- Algunos de los navegadores que emplean las personas discapacitadas **no son capaces de interpretar el código de JavaScript** o algunos elementos multimedia como applets u objetos que requieren de un plug-in.

- Por regla general, **el HTML Dinámico no funcionará con un navegador no visual y no será accesible**.

- La solución es lograr que una página web funcione correctamente **sin necesidad de tener que ejecutar el código JavaScript**.

## Capas

- Separar contenido (HTML), de presentación (CSS), de comportamiento (Javascript)

![Separación de contenido, presentación y comportamiento](../img/html5-css3-javascript.jpg)



# Frames



## Poco accesibles

- Los frames son un elemento del HTML que **siempre han causado problemas**.

    - no se puede enlazar a una combinación particular de marcos,
    - no se llevan bien con los buscadores,
    - se puede llegar a una situación de múltiples marcos anidados, etc.

## Evitar uso

- De cara a lograr la máxima accesibilidad posible, es mejor **evitar el uso de marcos**.

- Hoy en día, existen diferentes técnicas para incluir automáticamente un elemento, como un menú de navegación o un pie de página en un lugar determinado de todas las páginas, con lo que se consigue la misma función que con el uso de marcos pero sin sus inconvenientes.



# Tablas



## Difíciles de entender

- Una tabla de datos es **muy difícil de entender si sólo se puede ver un dato aislado** cada vez, que es el problema que sufren los usuarios que emplean navegadores no visuales.

- Para evitar este problema, se tienen que **etiquetar correctamente** las tablas.

## caption

- Poner **un título que proporcione una descripción breve en la etiqueta \<caption\>**, justo después de la etiqueta \<table\>.

## summary

- Poner **un resumen que complemente al título en el atributo summary** de la etiqueta \<table\>:
    - con la estructura de la tabla (número de fílas, número de columnas)
    - con la descripción de los encabezamientos
    - con la relación que guarda la tabla con el resto de la página, etc.

## th

- Definir los **encabezados tanto verticales como horizontales con la etiqueta \<th\>**.



#  Formularios



## label

- Asegúrate de que cada elemento de un formulario tiene asociada una **etiqueta \<label\>**.



# Elementos repetitivos



## Problema

- Suele ser molesto **cuando se navega con un lector de pantalla que cada vez que se recarga una página vuelve a repetir de nuevo la cabecera** que suele ser idéntica.

## Solución

- Proporciona un método (por ejemplo un enlace **"Saltar al contenido"** en la parte superior de la página) que permita saltarse la navegación u otros elementos que se repiten en cada página.



# Validadores



## De HTML

- W3C Markup Validation Service
    - <http://validator.w3.org>

- WDG HTML Validator
    - <http://www.htmlhelp.com/tools/validator>

## De CSS

- W3C CSS Validation Service
    - <http://jigsaw.w3.org/css-validator>

- WDG CSS Check
    - <http://www.htmlhelp.com/tools/csscheck>

## De enlaces

- W3C Link Checker
    - <http://validator.w3.org/checklink>

- WDG Link Valet
    - <http://www.htmlhelp.com/tools/valet>

- Link Checker
    - <http://wummel.github.io/linkchecker>

## Otros validadores

- W3C mobileOK Checker
    - <http://validator.w3.org/mobile>

- W3C Feed Validation Service
    - <http://validator.w3.org/feed>

- W3C Semantic Data Extractor
    - <http://www.w3.org/2003/12/semantic-extractor.html>

## Unificados

- W3C Unicorn
    - <http://validator.w3.org/unicorn>

## Accesibilidad (I)

- Checkers
  - <http://checkers.eiii.eu>

- TAW
  - <http://www.tawdis.net/>

- AChecker
    - <http://achecker.ca/checker>

## Accesibilidad (II)

- eXaminator
    - <http://examinator.ws>

- CynthiaSays
    - <http://www.cynthiasays.com>

- Nibbler
    - <http://nibbler.silktide.com>

## Accesibilidad (III)

- WAVE Web Accessibility Tool
    - <http://wave.webaim.org>

- WAVE Web Accessibility Toolbar for Firefox
    - <http://wave.webaim.org/toolbar>

- Tingtun Checker
    - <http://accessibility.tingtun.no/en/pagecheck2.0>

## Accesibilidad (IV)

- Functional Accessibility Evaluator
    - <http://fae20.cita.illinois.edu>

- SortSite - Accessibility Checker and Validator
    - <http://www.powermapper.com/products/sortsite/checks/accessibility-checks.htmlhelp>



# Otras Herramientas



## Plugins

- Web Developer, no ofrece **muchísima información útil** para comprobar que una página web es accesible.
    - <https://addons.mozilla.org/es/firefox/addon/web-developer/>
    - Ver explicación: <http://accesibilidadweb.dlsi.ua.es/?menu=hr-webdevelopertoolbar>

- Fangs Screen Reader Emulator, **emula el comportamiento que tendría un lector de pantallas**.
    - <https://addons.mozilla.org/en-us/firefox/addon/fangs-screen-reader-emulator>

## Colores

- Accessibility Color Wheel
    - <http://gmazzocato.altervista.org/colorwheel/wheel.php>

- Colorblind Web Page Filter
    - <http://colorfilter.wickline.org>

- Check My Colours
    - <http://www.checkmycolours.com>

## Paletas de colores

- Paletton
    - <http://paletton.com>

- Color Palette Generator
    - <http://www.degraeve.com/color-palette>

## Tiempo de carga

- Load Impact
    - <http://loadimpact.com>

- Pingdom Website Speed Test
    - <http://tools.pingdom.com/fpt>

- Site Speed
    - <http://sitespeed.me>

- Web Page Analyzer
    - <http://www.webpageanalyzer.com>



# Acerca de



## Licencia

- Estas **transparencias** están hechas con:
    - MarkdownSlides: <https://github.com/asanzdiego/markdownslides>

- Estas **transparencias** están bajo una licencia Creative Commons Reconocimiento-CompartirIgual 3.0:
    - <http://creativecommons.org/licenses/by-sa/3.0/es>

## Fuentes

- Transparencias:
    - <https://github.com/asanzdiego/curso-interfaces-web-2016/tree/master/02-accesibilidad/slides>

- Ejercicios:
    - <https://github.com/asanzdiego/curso-interfaces-web-2016/tree/master/02-accesibilidad/src>

## Bibliografía (I)

- Página de Accesibilidad Web de la Universidad de Alicante
    - <http://accesibilidadweb.dlsi.ua.es>

- Traducción: Pautas de Accesibilidad para el Contenido Web (WCAG) 2.0
    - <http://www.sidar.org/traducciones/wcag20/es>

## Bibliografía (II)

- Enlazar es importante
    - <http://www.microsiervos.com/archivo/weblogs/enlazar-es-importante-3.html>

- Enlaces para “leer más” que sean simples y accesibles
    - <http://www.torresburriel.com/weblog/2005/10/22/enlaces-para-leer-mas-que-sean-simples-y-accesibles>

- Javascript no obstructivo, Manual de buenas maneras
    - <http://www.anieto2k.com/2006/10/15/javascript-no-obstructivo-manual-de-buenas-maneras>

## Bibliografía (III)

- HTML5: Nuevas etiquetas semánticas y estructurales
    - <http://www.arumeinformatica.es/blog/html5-nuevas-etiquetas-semanticas-y-estructurales>

- HTML y Accesibilidad: el atributo longdesc en imágenes
    - <http://blog.outbook.es/desarrollo-web/html-y-accesibilidad-el-atributo-longdesc-en-imagenes>

- Nuevos tipos de input en HTML5
    - <http://www.htmlcinco.com/nuevos-tipos-de-input-en-html5>

## Bibliografía (IV)

- Lectores de pantalla
    - <http://es.wikipedia.org/wiki/Lector_de_pantalla>

- Validadores y herramientas de accesibilidad y usabilidad
    - <http://www.usableyaccesible.com/recurso_misvalidadores.php>

- Web Accessibility Evaluation Tools: Overview
    - <http://www.w3.org/WAI/ER/tools/Overview.html>
