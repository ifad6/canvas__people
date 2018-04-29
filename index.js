
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

People.Body.moveTo([ [-10, 0.5], [10, 0.5] ], true);
People.LeftHand.moveTo([ [150, 0.5] ]);
People.LeftPreHand.moveTo([ [110, 0.5], [70, 0.5] ], true);
People.RightHand.moveTo([ [140, 0.5] ]);
People.RightPreHand.moveTo([ [70, 0.5], [100, 0.5] ], true);
People.LeftPreLeg.moveTo([ [90, 0.5], [60, 0.5] ], true);
People.RightPreLeg.moveTo([ [80, 0.5], [60, 0.5] ], true);
People.LeftLeg.moveTo([ [10, 0.5], [100, 0.5], true ]);
People.RightLeg.moveTo([ [40, 0.5], [30, 0.5] ], true);

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
