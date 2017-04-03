$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#home');
	$('#btn-home').click(onClickHome);
	$('#btn-aboutMe').click(onClickAboutMe);
	$('#btn-skills').click(onClickSkills);
	$('#btn-portfolio').click(onClickPortfolio);
	$('#btn-contact').click(onClickContact);
    

	TweenMax.from($('#aboutMe h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickHome(){
    
	gotoSection('home');
}

$(function(){
  $(".slides").slidesjs({
    play: {
      active: true,
      effect: "slide",
      interval: 3000,
      auto: true,
      swap: true,
      pauseOnHover: false,
      restartDelay: 2500
    }
  });
});


function onClickAboutMe() {
	gotoSection('aboutMe');
        
}

document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "CLAUDIA MARIEL LOAYZA MEDINA", "CLAUDIA MARIEL LOAYZA MEDINA"];
  
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
     typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});



function onClickSkills() {
	gotoSection('skills');
    
  $(".skills").addClass("active")
  $(".skills .skill .skill-bar span").each(function() {
      $(this).animate({
         "width": $(this).parent().attr("data-bar") + "%"
      }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
     });
   
     setTimeout(function() {
     $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
      }, 2000);
 }

function onClickPortfolio(){
	gotoSection('portfolio');
    
    
}
$(function() {
		var selectedClass = "";
		$("p").click(function(){
		selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut();
    setTimeout(function() {
      $("."+selectedClass).fadeIn();
      $("#portfolio").fadeTo(500, 1);
    }, 500);
		
	});
});
/*var colour = [
    "rgba(226, 169, 169, 0.67)",
    "rgba(169, 226, 224, 0.67)",
    "rgba(219, 223, 226, 0.79)",
    "rgba(167, 228, 250, 0.79)",
    "rgba(195, 195, 195, 0.67)",
    "rgba(229, 223, 202, 0.67)",
    "rgba(231, 207, 245, 0.67)",
    "rgba(207, 245, 235, 0.67)",
    "rgba(227, 188, 223, 0.67)",
    "rgba(229, 223, 202, 0.67)",  
];

//para que los bloques tomen form segun aplicativo :3
$(".free-wall .brick").each(function(){
    this.style.backgroundColor = colour[colour.length * Math.random()<<0]
});

//opciones y eventos como onresize que direccion el tmaño del servidor de freewall que pasaremos como parametros
$(function(){
    var wall = new free-wall('free-wall');
    wall.reset({
        selector: '.brick',
        animate:false,
        cell:{
            width:160,
            height: 160,
        },
        delay:30,
        onResize:function(){
            wall.fitZone($(window).outerWidth() - 20, $(window).outerHeight() - 20);
            
        }
    })
    wall.fitZone($(window).outerWidth() - 20, $(window).outerHeight() - 20)
  });*/

function onClickContact(){
	gotoSection('contact');
}

function gotoSection(_identificador)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificador);

	nextSection.addClass('visible');
    currentSection = nextSection;
	
}