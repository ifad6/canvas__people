
Canvas.set('people');
Canvas.setFrameRate(30);

var C = Canvas.getContext();


$(window).resize(function() {
	Canvas.setSize();
	People.resize();
}).resize();


setInterval(function(){
	C.clearRect(0, 0, Canvas.width, Canvas.height);
	People.recalc();
	People.draw();
}, Canvas.frameTime);

People.LeftHand.moveTo(110, 1).moveTo(10, 1);

$(document).keydown(function(e) {

	e.preventDefault();

	switch(e.keyCode)
	{
		case 37: People.LeftHand.angle += 3;
		break;
		case 38: People.LeftLeg.angle += 3;
		break;
		case 39: People.RightHand.angle += 5;
		break;
		case 40: People.RightLeg.angle += 3;
		break;
	}

});
