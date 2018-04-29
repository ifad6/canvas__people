function gradusToRadian(gradus)
{
	return gradus * Math.PI / 180;
}

function getDeviationX(hypotenuseLength, angle)
{
	return Math.round(hypotenuseLength * Math.sin( gradusToRadian(angle) ));
}

function getDeviationY(hypotenuseLength, angle)
{
	return Math.round(hypotenuseLength * Math.cos( gradusToRadian(angle) ));
}

var People = {

	partSize: 0,
	setPartSize: function(size) {
		this.partSize = size || Math.round(Canvas.height / 10);
	},

	lineWidth: 0,
	setLineWidth: function(width) {
		this.lineWidth = width || Math.round(this.partSize / 3);
		C.lineWidth = this.lineWidth;
		C.lineCap = 'round';
	},


	Head: {
		x: 0, y: 0, radius: 0,
		setPosition: function(x, y, radius) {
			this.x = x || Math.round(Canvas.width / 2);
			this.y = y || Canvas.height - People.partSize * 8;
			this.radius = radius || People.partSize;
			return this;
		},
		draw: function() {
			C.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
			C.fill();
		}
	},

	Body: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 10,
		calc: function(angle) {
			this.length = People.partSize * 3;
			this.angle = angle || this.angle;
			this.x1 = People.Head.x;
			this.y1 = People.Head.y + People.Head.radius;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle);
			this.y2 = this.y1 + getDeviationY(this.length, this.angle);;
			this.neckLength = People.partSize * 0.5;
			this.shoulderX = this.x1 - getDeviationX(this.neckLength, this.angle);
			this.shoulderY = this.y1 + getDeviationY(this.neckLength, this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	LeftPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 1.5;
			this.angle = angle || this.angle;
			this.x1 = People.Body.shoulderX;
			this.y1 = People.Body.shoulderY;
			this.x2 = this.x1 - getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			People.LeftHand.calc();
			return this;
		},
		getAngle: function() { return this.angle + People.Body.angle; },
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	LeftHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.LeftPreHand.x2;
			this.y1 = People.LeftPreHand.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + People.LeftPreHand.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + People.LeftPreHand.getAngle());
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	RightPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 1.5;
			this.angle = angle || this.angle;
			this.x1 = People.Body.shoulderX;
			this.y1 = People.Body.shoulderY;
			this.x2 = this.x1 + getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			People.RightHand.calc();
			return this;
		},
		getAngle: function() { return this.angle - People.Body.angle; },
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	RightHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.RightPreHand.x2;
			this.y1 = People.RightPreHand.y2;
			this.x2 = this.x1 + getDeviationX(this.length, this.angle + People.RightPreHand.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + People.RightPreHand.getAngle());
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	LeftPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			People.LeftLeg.calc();
			return this;
		},
		getAngle: function() { return this.angle + People.Body.angle; },
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	LeftLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.LeftPreLeg.x2;
			this.y1 = People.LeftPreLeg.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + People.LeftPreLeg.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + People.LeftPreLeg.getAngle());
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	RightPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 + getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			People.RightLeg.calc();
			return this;
		},
		getAngle: function() { return this.angle - People.Body.angle; },
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},

	RightLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = People.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = People.RightPreLeg.x2;
			this.y1 = People.RightPreLeg.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + People.RightPreLeg.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + People.RightPreLeg.getAngle());
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { People.moveTo(this, array, cycle); }
	},


	recalc: function() {
		this.Head.setPosition();
		this.Body.calc();
		this.LeftPreHand.calc();
		this.RightPreHand.calc();
		this.LeftPreLeg.calc();
		this.RightPreLeg.calc();
	},
	resize: function() {
		this.setPartSize();
		this.setLineWidth();
	},


	drawLine: function (x1, y1, x2, y2)
	{
		C.moveTo(x1, y1);
		C.lineTo(x2, y2);
	},
	draw: function() {
		this.Head.draw();
		C.beginPath();
		this.Body.draw();
		this.LeftPreHand.draw();
		this.LeftHand.draw();
		this.RightPreHand.draw();
		this.RightHand.draw();
		this.LeftPreLeg.draw();
		this.LeftLeg.draw();
		this.RightPreLeg.draw();
		this.RightLeg.draw();
		C.moveTo(this.Head.x, this.Head.y);
		C.closePath();
		C.stroke();
	},
	moveTo: function(object, array, cycle) {
		if (!array.length) return false;
		var arr = array.shift();
		if (cycle) array.push(arr);
		var angle = arr[0],
			time = arr[1],
			delta = angle - object.angle,
			step = delta / time / Canvas.frameRate,
			needStep = Math.round(delta / step),
			animation = setInterval(function(){
				object.angle += step;
				needStep--;
				if (needStep <= 0)
				{
					clearInterval(animation);
					People.moveTo(object, array, cycle);
				}
			}, Canvas.frameTime);
	}
}