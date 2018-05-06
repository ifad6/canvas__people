
var player = new People('ifad6');
player.Head.setPosition(200, 100);


window.addEventListener('resize', function() {
	//Canvas.setSize();
	player.resize();
});
var event = new Event('resize');
window.dispatchEvent(event);


setInterval(function(){
	player.recalc();
	player.draw();
}, Canvas.frameTime);

//player.Body.moveTo([ [-10, 0.5], [10, 0.5] ], true);
player.LeftPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
player.LeftHand.moveTo([ [20, 0.5], [0, 0.5] ], true);
player.RightPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
player.RightHand.moveTo([ [20, 0.5], [0, 0.5] ], true);

player.LeftPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
player.LeftLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
player.RightPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
player.RightLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);

//console.log(Player);

document.addEventListener('keydown', function(e) {
	//e.preventDefault();

	switch(e.keyCode)
	{
		case 37: player.LeftHand.angle += 3;
		break;
		case 38: player.LeftLeg.angle += 3;
		break;
		case 39: player.RightHand.angle += 5;
		break;
		case 40: player.RightLeg.angle += 3;
		break;
	}

});