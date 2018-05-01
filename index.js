/*function Class() {
	var self = this;
	this.a = 5;
	this.func = function(){
		self.a++;
		console.log(self.a);
	}
	this.Ob = function() {
		this.func = function() {
			console.log(self.a);
		}
		return this;
	}
}

var Ob = new Class();
console.log(Ob);
Ob.Ob.func();
Ob.Ob.func();
Ob.Ob.func();*/


Canvas = new Canvas();
Canvas.set('people');
Canvas.setFrameRate(30);

var C = Canvas.getContext();


$(window).resize(function() {
	Canvas.setSize();
	People.resize();
}).resize();

var Player = jQuery.extend(true, {}, People);
Player.Head.setPosition(100, 100);


setInterval(function(){
	C.clearRect(0, 0, Canvas.width, Canvas.height);
	People.recalc();
	People.draw();
	Player.recalc();
	Player.draw();
}, Canvas.frameTime);

//People.Body.moveTo([ [-10, 0.5], [10, 0.5] ], true);
People.LeftPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
People.LeftHand.moveTo([ [20, 0.5], [0, 0.5] ], true);
People.RightPreHand.moveTo([ [90, 1.5], [0, 1.5] ], true);
People.RightHand.moveTo([ [20, 0.5], [0, 0.5] ], true);

People.LeftPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
People.LeftLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
People.RightPreLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);
People.RightLeg.moveTo([ [40, 1.5], [0, 1.5] ], true);

console.log(Player);

$(document).keydown(function(e) {

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
