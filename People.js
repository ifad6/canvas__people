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

function People(id)
{
	var self = this;

	this. id = id;

	var Canvas = new window.Canvas();
	Canvas.create('body', id).setSize(500, 500).setFrameRate(30);

	var C = Canvas.getContext();

	this.partSize = 0;
	this.setPartSize = function(size) {
		self.partSize = size || Math.round(Canvas.height / 12);
	}

	this.lineWidth = 0;
	this.setLineWidth = function(width) {
		C.lineWidth = self.lineWidth = width || Math.round(self.partSize / 3);
		C.lineCap = 'round';
	},


	this.Head = {
		x: 0, y: 0, radius: 0,
		setPosition: function(x, y, radius) {
			this.x = x || this.x || Math.round(Canvas.width / 2);
			this.y = y || this.y || Canvas.height - self.partSize * 10;
			this.radius = radius || this.radius || self.partSize;
			console.log('Head', this);
			return this;
		},
		draw: function() {
			C.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
			C.fill();
		}
	}

	this.Body = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0,
		calc: function(angle) {
			this.length = self.partSize * 3;
			this.angle = angle || this.angle;
			this.x1 = self.Head.x;
			this.y1 = self.Head.y + self.Head.radius;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle);
			this.y2 = this.y1 + getDeviationY(this.length, this.angle);
			this.neckLength = self.partSize * 0.3;
			this.shoulderX = this.x1 - getDeviationX(this.neckLength, this.angle);
			this.shoulderY = this.y1 + getDeviationY(this.neckLength, this.angle);
			return this;
		},
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.LeftPreHand = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 1.5;
			this.angle = angle || this.angle;
			this.x1 = self.Body.shoulderX;
			this.y1 = self.Body.shoulderY;
			this.x2 = this.x1 - getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			self.LeftHand.calc();
			return this;
		},
		getAngle: function() { return this.angle + self.Body.angle; },
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.LeftHand = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.LeftPreHand.x2;
			this.y1 = self.LeftPreHand.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + self.LeftPreHand.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + self.LeftPreHand.getAngle());
			return this;
		},
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.RightPreHand = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 1.5;
			this.angle = angle || this.angle;
			this.x1 = self.Body.shoulderX;
			this.y1 = self.Body.shoulderY;
			this.x2 = this.x1 + getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			self.RightHand.calc();
			return this;
		},
		getAngle: function() { return this.angle - self.Body.angle; },
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.RightHand = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.RightPreHand.x2;
			this.y1 = self.RightPreHand.y2;
			this.x2 = this.x1 + getDeviationX(this.length, this.angle + self.RightPreHand.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + self.RightPreHand.getAngle());
			return this;
		},
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.LeftPreLeg = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.Body.x2;
			this.y1 = self.Body.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			self.LeftLeg.calc();
			return this;
		},
		getAngle: function() { return this.angle + self.Body.angle; },
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.LeftLeg = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.LeftPreLeg.x2;
			this.y1 = self.LeftPreLeg.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + self.LeftPreLeg.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + self.LeftPreLeg.getAngle());
			return this;
		},
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.RightPreLeg = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.Body.x2;
			this.y1 = self.Body.y2;
			this.x2 = this.x1 + getDeviationX(this.length, this.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.getAngle());
			self.RightLeg.calc();
			return this;
		},
		getAngle: function() { return this.angle - self.Body.angle; },
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}

	this.RightLeg = {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = self.partSize * 2;
			this.angle = angle || this.angle;
			this.x1 = self.RightPreLeg.x2;
			this.y1 = self.RightPreLeg.y2;
			this.x2 = this.x1 - getDeviationX(this.length, this.angle + self.RightPreLeg.getAngle());
			this.y2 = this.y1 + getDeviationY(this.length, this.angle + self.RightPreLeg.getAngle());
			return this;
		},
		draw: function() { self.drawLine(this.x1, this.y1, this.x2, this.y2) },
		moveTo: function(array, cycle) { self.moveTo(this, array, cycle); }
	}


	this.recalc = function() {
		self.Body.calc();
		self.LeftPreHand.calc();
		self.RightPreHand.calc();
		self.LeftPreLeg.calc();
		self.RightPreLeg.calc();
	}
	this.resize = function() {
		//Canvas.setSize();
		self.setPartSize();
		self.setLineWidth();
		self.Head.setPosition();
	},


	this.drawLine = function (x1, y1, x2, y2)
	{
		C.moveTo(x1, y1);
		C.lineTo(x2, y2);
	},
	this.draw = function() {
		C.clearRect(0, 0, Canvas.width, Canvas.height);
		self.Head.draw();
		C.beginPath();
		self.Body.draw();
		self.LeftPreHand.draw();
		self.LeftHand.draw();
		self.RightPreHand.draw();
		self.RightHand.draw();
		self.LeftPreLeg.draw();
		self.LeftLeg.draw();
		self.RightPreLeg.draw();
		self.RightLeg.draw();
		C.moveTo(self.Head.x, self.Head.y);
		C.closePath();
		C.stroke();
	},
	this.moveTo = function(object, array, cycle) {
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
					self.moveTo(object, array, cycle);
				}
			}, Canvas.frameTime);
	}
}