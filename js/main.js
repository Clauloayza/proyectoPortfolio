$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-aboutMe').click(onClickAboutMe);
	$('#btn-skills').click(onClickBtnSkills);
    

	TweenMax.from($('#boutMe h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnAboutMe() {
	gotoSection('boutMe');
}

function onClickBtnSkills() {
	gotoSection('skills');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	
}