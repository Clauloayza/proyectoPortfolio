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

function onClickSkills() {
	gotoSection('skills');
}

function onClickPortfolio(){
	gotoSection('portfolio');
}

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