console.log('\'Allo \'Allo!'); // eslint-disable-line no-console


$(document).ready(function(){
    $(".btn.btn-lg.btn-success").click(function(){
        var x = $(".lead")
        x.animate({left: '550px'});
        x.animate({left: '0px'});
    });
});
