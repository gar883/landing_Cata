document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  const typed = new Typed('.typed', {
    strings : [
        '<span class="letter">F</span>acu<span class="letter"> G</span>aray Developer'],
     typeSpeed : 100,
     loop : false,
     startDelay: 220

    
 });

 
 function calcularEdad(fecha) {
    // Si la fecha es correcta, calculamos la edad

    if (typeof fecha != "string" && fecha && esNumero(fecha.getTime())) {
        fecha = formatDate(fecha, "yyyy-MM-dd");
    }

    var values = fecha.split("-");
    var dia = values[2];
    var mes = values[1];
    var ano = values[0];

    // cogemos los valores actuales
    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getYear();
    var ahora_mes = fecha_hoy.getMonth() + 1;
    var ahora_dia = fecha_hoy.getDate();

    // realizamos el calculo
    var edad = (ahora_ano + 1900) - ano;
    if (ahora_mes < mes) {
        edad--;
    }
    if ((mes == ahora_mes) && (ahora_dia < dia)) {
        edad--;
    }
    if (edad > 1900) {
        edad -= 1900;
    }

    // calculamos los meses
    var meses = 0;

    if (ahora_mes > mes && dia > ahora_dia)
        meses = ahora_mes - mes - 1;
    else if (ahora_mes > mes)
        meses = ahora_mes - mes
    if (ahora_mes < mes && dia < ahora_dia)
        meses = 12 - (mes - ahora_mes);
    else if (ahora_mes < mes)
        meses = 12 - (mes - ahora_mes + 1);
    if (ahora_mes == mes && dia > ahora_dia)
        meses = 11;

    // calculamos los dias
    var dias = 0;
    if (ahora_dia > dia)
        dias = ahora_dia - dia;
    if (ahora_dia < dia) {
        ultimoDiaMes = new Date(ahora_ano, ahora_mes - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - ahora_dia);
    }

    if(edad <= 0 ){
        return  meses + " meses";
    } else {
    return edad + " años " ;
    }
}
/*Poner mi edad y experiencia automaticamente*/
 document.querySelector("#experiencia").textContent = calcularEdad("2020-06-13");
 document.querySelector("#edad").textContent = calcularEdad("1993-03-16");
 

 


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

    $(".figma").show();


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
        $("#general").on("click", function(event){
            $("#iconmenu").show("fast");
            $("#navegacion").hide("slow");
            checkbox.prop("checked", true);
        });
   

   });
}else{
    $(".figma").hide();
}
   
   

});
