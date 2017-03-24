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
    $('#aboutMe').click(function(){
    var texto = $('#text-animation');
    texto.animate({right:'700px', opacity:'0.4'}, "slow");
});
    
}



function onClickSkills() {
	gotoSection('skills');
    
    var options = {
        percentageInnerCutout: 70,
        animationEasing:'easeOutQuint',
        animateScale:true
    };
    
    var data ={
       html_css: [
    { value: 95, color: "hsl(120, 39%, 54%)" },
    { value: 5, color: "hsl(120, 10%, 90%)" }
  ],
    };
    
    var offset = 0;
        $.each(data, function(key, data) {
            var canvas = document.querySelector('#' + key);
            if(canvas) {
                offset += 250;
                setTimeout(function() {
                    var ctx = canvas.getContext('2d');
                    var chart = new Chart(ctx);
                    chart.Doughnut(data, options);
                }, offset);
            }
        });
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