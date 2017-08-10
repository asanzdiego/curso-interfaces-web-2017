$('#obtener-random').on('click', function() {
    $('#random').html(Math.random());
});

$('#titulo-desplegable').on('click', function() {

    var panel = $('#desplegable');
    panel.toggleClass('visible');
    panel.toggleClass('hidden');

    if (panel.hasClass('visible')) {
        $(this).html("Cierrame");
        $(this).attr('aria-expanded', true);
        panel.attr('aria-hidden', false);
    } else {
        $(this).html("Despliegame");
        $(this).attr('aria-expanded', false);
        panel.attr('aria-hidden', true);
    }
});

$('#tab1').on('click', function() {

    activar($('#tab1'), $('#tab2'), $('#section1'), $('#section2'));
});

$('#tab2').on('click', function() {

    activar($('#tab2'), $('#tab1'), $('#section2'), $('#section1'));
});

$('body').on('keydown', function(e) {

  switch (e.keyCode) {
    case 37:
      activar($('#tab1'), $('#tab2'), $('#section1'), $('#section2'));
      break;
    case 39:
      activar($('#tab2'), $('#tab1'), $('#section2'), $('#section1'));
      break;
  }
});

function activar(tabActivada, tabDesactivada, panelActivado, panelDesactivada) {

      tabActivada.addClass('selected')
      tabDesactivada.removeClass('selected');

      panelActivado.addClass('visible');
      panelActivado.removeClass('hidden');

      panelDesactivada.addClass('hidden');
      panelDesactivada.removeClass('visible');

      tabActivada.attr('aria-selected', true);
      tabActivada.attr('tabindex', 0);
      tabActivada.focus();

      tabDesactivada.attr('aria-selected', null);
      tabDesactivada.attr('tabindex', -1);

      panelActivado.attr('aria-hidden', null);
      panelDesactivada.attr('aria-hidden', true);
}
