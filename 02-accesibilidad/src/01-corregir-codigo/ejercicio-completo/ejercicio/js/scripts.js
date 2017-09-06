$("#obtener-random").on('click', function() {
  $('#random').html(Math.random());
});

$('#titulo-desplegable').on('click', function() {

    var panel = $('#desplegable');
    panel.toggleClass('visible');
    panel.toggleClass('hidden');

    if (panel.hasClass('visible')) {
        $(this).html("Cierrame");
    } else {
        $(this).html("Despliegame");
    }
});


$('#tab1').on('click', function() {

    activar($('#tab1'), $('#tab2'), $('#section1'), $('#section2'));
});

$('#tab2').on('click', function() {

    activar($('#tab2'), $('#tab1'), $('#section2'), $('#section1'));
});

function activar(tabActivada, tabDesactivada, panelActivado, panelDesactivada) {

      tabActivada.addClass('selected')
      tabDesactivada.removeClass('selected');

      panelActivado.addClass('visible');
      panelActivado.removeClass('hidden');

      panelDesactivada.addClass('hidden');
      panelDesactivada.removeClass('visible');
}
