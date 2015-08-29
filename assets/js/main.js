$(document).ready(function() {
  $('#order').on('click', function() {
    $('#order_popup').show();
    $('#order_popup').css({
      'position': 'absolute',
      'top': 0,
      'right': 0,
      'bottom': 0,
      'left': 0,
      'background': 'rgba(0, 0, 0, 0.5)'
    }).find('.b-order').css({
      'position': 'relative',
      'top': '50%',
      'margin-top': '-100px'
    });
    $('.b-page').css({
      'overflow': 'hidden'
    });
  });
  $('#order_popup').on('click', function(e) {
    if (e.target != this) {
      return;
    }
    $('#order_popup').hide();
    $('.b-page').css({
      'overflow': 'auto'
    });
  });
});
