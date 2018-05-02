
//Canvas = new Canvas();
//Canvas.set('people');
//Canvas.setFrameRate(30);

//var C = Canvas.getContext();

var Player = new People('ifad6');
Player.Head.setPosition(200, 100);

//var Player2 = new People;
//Player2.Head.setPosition(700, 100);

/*window.addEventListener('resize', function() {
	//Canvas.setSize();
	Player.resize();
	Player2.resize();
});
var event = new Event('resize');
window.dispatchEvent(event);*/


//var Player = jQuery.extend(true, {}, People);
//Player.Head.setPosition(100, 100);


setInterval(function(){
	Player.recalc();
	Player.draw();
	Player2.recalc();
	Player2.draw();
}, Canvas.frameTime);

//People.Body.moveTo([ [-10, 0.5], [10, 0.5] ], true);
Player.LeftPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
Player.LeftHand.moveTo([ [20, 0.5], [0, 0.5] ], true);
Player.RightPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
Player.RightHand.moveTo([ [20, 0.5], [0, 0.5] ], true);

Player.LeftPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
Player.LeftLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
Player.RightPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
Player.RightLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);

//console.log(Player);

document.addEventListener('keydown', function(e) {
	//e.preventDefault();

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