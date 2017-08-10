% Novedades en Bootstrap 4.0
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



# Novedades



## Navegadores soportados

- Deja de soportar IE 8 e iOS 6.

- Soporta **IE 9+ e iOS 7+**.

## Cambios globales

- Remplazado LESS por **SASS**.

- Remplazado PX por **REM** (salvo en los puntos de ruptura de los Media Query)

## Diseño

- Tamaño de la fuente por defecto inrementada de 14px a **16px**.

- Nuevos colores más actuales.

## Flexbox

- Soporte opcional (**hay que activarlo y recompilar**)

- Si activado: soporte alineación horizontal y vertical.

## Sistema de rejilla (I)

- Añadido **un tamaño más** (xs, xm, md, lg y xl)

----------- ---- -------
Extra small (XS) <544px
Small       (SM) ≥544px
Medium      (MD) ≥768px
Large       (LG) ≥992px
Extra large (XL) ≥1200px
----------- ---- -------

## Sistema de rejilla (I)

- Remplada las clases .col-{breakpoint}-{modifier}-{size} por **.{modifier}-{breakpoint}-{size}**

## Margin y padding

- Nuevas clases **.{m,p}-{a,t,l,b,r,x,y}-{0,auto,md,lg}**
    - "m" para margin, "p" para padding
    - "a" para todo
    - "t" top, "l" left, "r" right, "b" bottom
    - "x" para left y right y "y" para top y bottom
    - "0" cero, "auto" auto, "md" mediano, "lg" grande

## Cabeceras

- Nuevas clases **.display-{1,2,3,4}** para aumentar el tamaño a las cabeceras.

## Cards

- **Nuevo componente** que sustituye a: paneles, thumbnails y wells

## Iconos

- Ahora hay que elegir una librería de terceros:
    - <http://fontawesome.io/>
    - <https://octicons.github.com/>
    - <https://materialdesignicons.com/>

## Varios

- Uso de "non-responsive" no soportado.

- Remplazado "Customizer online" por una mejora documentación sobre el setup.


## Tipografía

- **Eliminada clase .dl-horizontal** -> usar .row.

- La clase .list-inline tiene que estar seguido por hijos **.list-inline-items**.

## Imágenes

- Remplazada clase .image-responsive por **.image-fluid**.

## Tablas

- Remplazado clase .table-condensed por **.table-sm**.

- Añadida la clase **.table-inverse**.

## Formularios (I)

- Remplazada clase .control-label por **.form-control-label**.

- Remplazada clases .input-lg y .input-sm por **.form-control-lg y .form-control-sm**.

- La clase **.form-group ya no se coporta como .row** -> añadir .row si necesario

## Formularios (II)

- **Eliminadas clases .form-group-\*** -> usar .form-control-*

- **Eliminada clase .help-block** -> usar .form-text y/o .text-muted.

- Eliminada la necesidad de añadir icono en las validaciones.

## Botones

- Remplazada clase .btn-default por **.btn-secondary**.

- **Eliminada clase .btn-xs**.

- Añadida clase **.btn-outline-\***

## Dropdowns

- Remplazada clase .divider por **.dropdown-divider**.

- Los items del dropdown tienen que tener la clase **.dropdown-item**.

- Ya no es necesario añadir \<span class="caret"\>\<\/span\>.

## Navs

- Obligatoriedad de usar las clases **.nav-item y .nav-links**.

## Pagination

- Obligatoriedad de usar las clases **.page-item y .page-links**.

## Breadcrumbs

- Obligatoriedad de usar la clase **.breadcrumb-item**.

## Labels, badges, and tags

- Remplazada clase .label por **.tag**.

- Eliminada clase .badge -> usar **.tag-pill**.

## Panels, thumbnails, and wells

- Eliminados totalmente y remplazados por el **nuevo componente card**.

## Carousel

- Remplazada clase .item por **.carousel-item**.

## Utilities (I)

- Añadidas clases **.pull-{xs,sm,md,lg,xl}-{left,right,none}**.

- **Eliminadas classes .pull-left y .pull-right** -> .pull-xs-{left,right}.

- Añadidas clases **.text-{xs,sm,md,lg,xl}-{left,center,right}**.

- **Eliminadas clases .text-{left,center,right}** -> .text-xs-{left,center,right}.

## Utilities (II)

- Remplazada clase .center-block por **.m-x-auto**.

- Remplazada clase .progress por el uso del elemento del mismo nombre.

## Responsive utilities

- **Eliminadas clases .hidden y .show**.

- Remplazadas clases .hidden-* y .visible-* por **.hidden-{xs,sm,md,lg}-{up,down}**.



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

## Bibliografía (I)

- Página oficial de Bootstrap 4.0 alpha:
    - <http://v4-alpha.getbootstrap.com/>

- 10 novedades de Bootstrap 4.0:
    - <https://platzi.com/blog/novedades-bootstrap/>

- Bootstrap 4.0, novedades y ejemplos:
    - <http://funnyfrontend.com/bootstrap-4-alpha-novedades-y-ejemplos/>

- El futuro del CSS Grid Layout
    - <https://carlosazaustre.es/blog/css-grid-layout-css/>

## Bibliografía (II)

- El gran poder de CSS3: FlexBox
    - <https://filisantillan.com/el-gran-poder-de-css3-flexbox/>

- Los 5 patrones del Responsive Design con FlexBox
    - <https://carlosazaustre.es/blog/los-5-patrones-del-responsive-design/>

- Learn CSS Flexbox in 3 Minutes
    - <https://medium.com/learning-new-stuff/learn-css-flexbox-in-3-minutes-c616c7070672>
