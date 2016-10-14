console.log('\'Allo \'Allo!'); // eslint-disable-line no-console XXXX


$(document).ready(function(){
  $('.btn.btn-lg.btn-success').click(function(){
    var x = $('.lead')
    x.animate({left: '650px'});
    x.animate({left: '0px'});
  });
});
