setInterval(function(){

	scale();
	
	// clear
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.arc(x, y, l, 0, 2*Math.PI, true); $('#x').html(x); $('#y').html(y);
	ctx.fill();

	// Шея s
	ctx.moveTo(x, y);
	ctx.lineTo(sx, sy); $('#sx').html(sx); $('#sy').html(sy);

	// Левый локоть el
	ely = sy + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(sx-elx, 2)));		
	ctx.moveTo(sx, sy);
	ctx.lineTo(elx, ely); $('#elx').html(elx); $('#ely').html(ely);
	// Левая рука hr
	hly = ely + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(elx-hlx, 2)));
	ctx.moveTo(elx, ely);
	ctx.lineTo(hlx, hly); $('#hlx').html(hlx); $('#hly').html(hly);

	// Правый локоть er
	ery = sy + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(sx-erx, 2)));		
	ctx.moveTo(sx, sy);
	ctx.lineTo(erx, ery); $('#erx').html(erx); $('#ery').html(ery);
	// Правая рука hr
	hry = ery + Math.round(Math.sqrt(Math.pow(l*2, 2) - Math.pow(erx-hrx, 2)));
	ctx.moveTo(erx, ery);
	ctx.lineTo(hrx, hry); $('#hrx').html(hrx); $('#hry').html(hry);

	// Таз p
	ctx.moveTo(sx, sy);
	ctx.lineTo(px, py); $('#px').html(px); $('#py').html(py);

	// Левое колено
	ctx.moveTo(px, py);
	ctx.lineTo(klx, kly); $('#klx').html(klx); $('#kly').html(kly);
	// Левая ступня
	ctx.moveTo(klx, kly);
	ctx.lineTo(flx, fly); $('#flx').html(flx); $('#fly').html(fly);

	// Правое колено
	ctx.moveTo(px, py);
	ctx.lineTo(krx, kry); $('#krx').html(krx); $('#kry').html(kry);
	// Правая ступня
	ctx.moveTo(krx, kry);
	ctx.lineTo(frx, fry); $('#frx').html(frx); $('#fry').html(fry);

	ctx.stroke();
	
}, 1000/frameRate);