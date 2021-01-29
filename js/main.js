document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  const typed = new Typed('.typed', {
    strings : [
        '<span class="letter">J</span>uan<span class="letter"> R</span>obledo Developer.'],
     typeSpeed : 100,
     loop : false,
     startDelay: 220

    
 });


});

$(document).ready(function() {
    // Handler for .ready() called.
    $(function() {
        $('.demo').textillate({ in: { effect: 'fadeIn' } });
    });
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

   if ($(window).width() <= "992"){

   $("#navegacion").hide();
   $("#iconmenu").show();
   let checkbox = $("#btn-menu");
   var navegacion = $(".navegacion");
   var icono = $(".iconMenu");
    
   checkbox.on("change", function(event){
     if(this.checked){   
        $("#iconmenu").hide("fast");
         $("#navegacion").show("slow");
        } else{
            $("#iconmenu").show("fast");
            $("#navegacion").hide("slow");
        }
        $("#navegacion").on("click", function(event){
            $("#iconmenu").show("fast");
            $("#navegacion").hide("slow");
            checkbox.prop("checked", false);
        });
   

   });
}
   
   

});
