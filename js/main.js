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

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	
}