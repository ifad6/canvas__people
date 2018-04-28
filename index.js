
Canvas.set( document.getElementById('people') );
Canvas.setFrameRate(30);


var C = Canvas.getContext();



$(window).resize(function() {
	Canvas.setSize();
	People.resize();
});
$(window).resize();

setInterval(function(){
	C.clearRect(0, 0, Canvas.getSize().width, Canvas.getSize().height);
	People.recalc();
	People.LeftHand.angle += 3;
	People.RightHand.angle += 5;
}, 1000 / Canvas.frameRate);

/*$(document).keydown(function(e) {

	//e.preventDefault();

	switch(e.keyCode)
	{
		case 37: elx = elx - l*2 * Math.round(Math.cos(15)); hlx = elx - Math.round(l*2/3);
		break;
		case 39: elx = elx + l*2 * Math.round(Math.cos(30)); hlx = elx + Math.round(l/6);
		break;
	}

});*/
