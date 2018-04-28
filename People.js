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
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 3);
			this.angle = (angle || 5);
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.Head.x;
			this.y1 = People.Head.y + People.Head.radius;
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 1.5);
			this.angle = (angle || 30);
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.Head.x - Math.round(People.lineWidth / 2);
			this.y1 = People.Head.y + Math.round(People.Head.radius * 1.5);
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || this.angle || 30)/* + People.LeftPreHand.angle*/;
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.LeftPreHand.x2;
			this.y1 = People.LeftPreHand.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 1.5);
			this.angle = (angle || 50);
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.Head.x + Math.round(People.lineWidth / 2);
			this.y1 = People.Head.y + Math.round(People.Head.radius * 1.5);
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || this.angle || 50)/* + People.LeftPreHand.angle*/;
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.RightPreHand.x2;
			this.y1 = People.RightPreHand.y2;
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 30);
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 30) - People.LeftPreLeg.angle;
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.LeftPreLeg.x2;
			this.y1 = People.LeftPreLeg.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 50);
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 50) - People.RightPreLeg.angle;
			this.radian = this.angle * Math.PI / 180;
			this.x1 = People.RightPreLeg.x2;
			this.y1 = People.RightPreLeg.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.radian));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.radian));
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},


	recalc: function() {
		this.Head.setPosition().draw();
		C.beginPath();
		this.Body.calc().draw();
		this.LeftPreHand.calc().draw();
		this.LeftHand.calc().draw();
		this.RightPreHand.calc().draw();
		this.RightHand.calc().draw();
		this.LeftPreLeg.calc().draw();
		this.LeftLeg.calc().draw();
		this.RightPreLeg.calc().draw();
		this.RightLeg.calc().draw();
		C.closePath();
		C.stroke();
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
		
	}
}