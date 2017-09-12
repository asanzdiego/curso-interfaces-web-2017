% Bootstrap, un framework CSS
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



## ¿Qué es?

- Boostrap es un **framework CSS, liberado por Twitter** y muy popular hoy en día.

- Está pensado para hacer un desarrollo **Mobile First**

## Ventajas (I)

- Utiliza un conjunto de **buenas prácticas** que perdurarán en el tiempo.

- Utiliza **HTML5 y CSS3**

## Ventajas (II)

- Implementa un **sistema de rejillas**, que por defecto incluye 12 columnas.

- Utiliza **SASS**, un preprocesador CSS.

- Es **OOCSS**, o sea CSS Orientado a Objetos: organizado por módulos independientes y reutilizables.

## Ventajas (III)

- Hay una enorme **comunidad detrás**.

- Herramienta **sencilla y ágil** para construir sitios web e interfaces.

- Tiene un **theme** por defecto bastante optimizado y que puedes modificar fácilmente.

## Desventajas (I)

- Es necesario **adaptarse a su forma de trabajo**, si bien su curva de aprendizaje es liviana, deberás comprender y familiarizarte con su estructura y nomenclatura.

- Debes adaptar tu diseño a un grid de **12 columnas**.

- Trae **anchos y márgenes por defecto**, que a veces son un poco tediosos de cambiar.

## Desventajas (II)

- Es complicado **cambiar de versión** si has realizado modificaciones profundas sobre el core.

- Si necesitas **añadir componentes que no existen**, debes hacerlos tú mismo en CSS y cuidar de que mantenga coherencia con tu diseño y cuidando el responsive.

- A veces **implementar un diseño impuesto**, puede llegar a resultar bastante difícil, al menos si eres un perfeccionista.



# Utilización



## Documentación

- La documentación de Bootstrap es muy buena.

- Para aprender Bootstrap lo mejor es hacer ejercicios y utilizar dicha documentación.

## Descarga

- <https://github.com/twbs/bootstrap/releases>

~~~
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── bootstrap-theme.css
│   └── bootstrap-theme.min.css
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
└── fonts/
~~~

## Plantilla básica

~~~
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap.min.css">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="jquery-3.2.1.slim.min.js"></script>
    <script src="umd/popper.min.js"></script>
    <script src="bootstrap.min.js"></script>
  </body>
</html>
~~~

## HTML5 doctype

- Bootstrap necesita un **doctype de HTML5**:

~~~
<!DOCTYPE html>
<html lang="en">
  ...
</html>
~~~

## Grid system (I)

- Bootstrap incluye un **sistema de rejilla responsive y mobile first de 12 columnas**.

## Grid system (II)

- El sistema de rejilla de Bootstrap **funciona así**:

    - Se deben colocar .row dentro de un **.container** (ancho fijo) o **.container-fluid** (ancho completo).
    - Utilice **.row** para crear grupos horizontales.
    - El contenido se debe colocar entre .row y deben de ser **hijos inmediatos**.
    - Si hay más de 12 columnas en una .row, esta son desplazadas abajo.

## Grid system (III)

- Se puede configurar dependiendo del tamaño de la pantalla.

----------- ---- -------
Extra small (XS) <544px
Small       (SM) ≥544px
Medium      (MD) ≥768px
Large       (LG) ≥992px
Extra large (XL) ≥1200px
----------- ---- -------



# Acerca de



## Licencia

- Estas **transparencias** están hechas con:
    - MarkdownSlides: <https://github.com/asanzdiego/markdownslides>

- Estas **transparencias** están bajo una licencia Creative Commons Reconocimiento-CompartirIgual 3.0:
    - <http://creativecommons.org/licenses/by-sa/3.0/es>

## Fuentes

- Transparencias:
    - <https://github.com/asanzdiego/curso-interfaces-web-2016/tree/master/05-bootstrap/05-bootstrap-4.0/slides>

- Ejercicios:
    - <https://github.com/asanzdiego/curso-interfaces-web-2016/tree/master/05-bootstrap/05-bootstrap-4.0/src>

## Bibliografía

- Página oficial de Bootstrap:
    - <http://getbootstrap.com>

- Bootstrap sí, pero no
    - <http://bruno.garciaechegaray.com/Bootstrap.The.Melee/presentation>

- Ventajas y desventajas de usar Bootstrap
    - <http://jorgelessin.com/ventajas-y-desventajas-de-usar-bootstrap>
