document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  const typed = new Typed('.typed', {
    strings : [
        '<span class="letter">J</span>uan<span class="letter">R</span>obledo.'],
     typeSpeed : 100,
     loop : false,
     startDelay: 220

    


});
});
$( document ).ready(function() {
    // Handler for .ready() called.
   //MENU FIJO
   var ventanaAltura = $(window).height();
   var barraAltura = $('.menu').innerHeight();
   var alturaBienvenida = $('.bienvenida').innerHeight();

  
  
   $(window).scroll(function() {
       var scroll = $(window).scrollTop();
       if (scroll > alturaBienvenida) {
           $('.menu').addClass('fixed');
           $('body').css({ 'margin-top': barraAltura + 'px' });
       } else {
           $('.menu').removeClass('fixed');
           $('body').css({ 'margin-top': '0px' });
       }

   });

   $(function() {
    $('.demo').textillate({ in: { effect: 'rollIn' } });
});
    var menu = $('#btn-menu');
    var icono = $('.iconMenu');
    var navegacion = $('.navegacion a');

    if (menu.prop('checked')){
        navegacion.css('display', 'block');
        icono.hide(1000);
    }
    

});