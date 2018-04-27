var Map;

var canvas = document.getElementById('people');
var ctx = canvas.getContext('2d');
var l = 0;
var frameRate = 30;

function scale()
{
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;

	l = Math.round(canvas.height / 12);
	ctx.lineWidth = Math.round(l / 3);
	ctx.lineCap = 'round';
}
scale();

$(document).keydown(function(e){

	//e.preventDefault();

	switch(e.keyCode)
	{
		case 37: elx = elx - l*2 * Math.round(Math.cos(15)); hlx = elx - Math.round(l*2/3);
		break;
		case 39: elx = elx + l*2 * Math.round(Math.cos(30)); hlx = elx + Math.round(l/6);
		break;
	}

});