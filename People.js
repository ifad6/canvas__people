var People = {

	partSize: 0,
	setPartSize: function(size) {
		if (size === undefined) size = Math.round(Canvas.getSize().height / 20);
		this.partSize = size;
		$('#partSize').html(this.partSize);
	},

	lineWidth: 0,
	setLineWidth: function(width) {
		if (width === undefined) width = Math.round(this.partSize / 3);
		this.lineWidth = width;
		C.lineWidth = this.lineWidth;
		C.lineCap = 'round';
		$('#lineWidth').html(this.lineWidth);
	},

	Head: {
		x: 0,
		y: 0,
		radius: 0,
		setPosition: function(x, y, radius) {
			this.x = x || Math.round(Canvas.getSize().width / 2);
			this.y = y || People.partSize * 2;
			this.radius = radius || People.partSize;
			$('#headX').html(this.x);
			$('#headY').html(this.y);
			$('#headRadius').html(this.radius);
			return this;
		},
		draw: function() {
			C.arc(this.x, this.y, this.radius, 0, 2*Math.PI, true);
			C.fill();
		}
	},

	Body: {
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0,
		setPosition: function(x1, y1, x2, y2) {
			this.x1 = x1 || People.Head.x;
			this.y1 = y1 || People.Head.y + People.Head.radius;
			this.x2 = x2 || this.x1;
			this.y2 = y2 || this.y1 + People.partSize * 3;
			$('#bodyX1').html(this.x1);
			$('#bodyY1').html(this.y1);
			$('#bodyX2').html(this.x2);
			$('#bodyY2').html(this.y2);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 1.5);
			this.angle = (angle || 30);
			this.x1 = People.Head.x - Math.round(People.lineWidth / 2);
			this.y1 = People.Head.y + Math.round(People.Head.radius * 1.5);
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#leftPreHandX1').html(this.x1);
			$('#leftPreHandY1').html(this.y1);
			$('#leftPreHandX2').html(this.x2);
			$('#leftPreHandY2').html(this.y2);
			$('#leftPreHandAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || this.angle || 30)/* + People.LeftPreHand.angle*/;
			this.x1 = People.LeftPreHand.x2;
			this.y1 = People.LeftPreHand.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#leftHandX1').html(this.x1);
			$('#leftHandY1').html(this.y1);
			$('#leftHandX2').html(this.x2);
			$('#leftHandY2').html(this.y2);
			$('#leftHandAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightPreHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 1.5);
			this.angle = (angle || 50);
			this.x1 = People.Head.x + Math.round(People.lineWidth / 2);
			this.y1 = People.Head.y + Math.round(People.Head.radius * 1.5);
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#rightPreHandX1').html(this.x1);
			$('#rightPreHandY1').html(this.y1);
			$('#rightPreHandX2').html(this.x2);
			$('#rightPreHandY2').html(this.y2);
			$('#rightPreHandAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightHand: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || this.angle || 50)/* + People.LeftPreHand.angle*/;
			this.x1 = People.RightPreHand.x2;
			this.y1 = People.RightPreHand.y2;
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#rightHandX1').html(this.x1);
			$('#rightHandY1').html(this.y1);
			$('#rightHandX2').html(this.x2);
			$('#rightHandY2').html(this.y2);
			$('#rightHandAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 30);
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#leftPreLegX1').html(this.x1);
			$('#leftPreLegY1').html(this.y1);
			$('#leftPreLegX2').html(this.x2);
			$('#leftPreLegY2').html(this.y2);
			$('#leftPreLegAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	LeftLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 30) - People.LeftPreLeg.angle;
			this.x1 = People.LeftPreLeg.x2;
			this.y1 = People.LeftPreLeg.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#leftLegX1').html(this.x1);
			$('#leftLegY1').html(this.y1);
			$('#leftLegX2').html(this.x2);
			$('#leftLegY2').html(this.y2);
			$('#leftLegAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightPreLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 50);
			this.x1 = People.Body.x2;
			this.y1 = People.Body.y2;
			this.x2 = this.x1 + Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#rightPreLegX1').html(this.x1);
			$('#rightPreLegY1').html(this.y1);
			$('#rightPreLegX2').html(this.x2);
			$('#rightPreLegY2').html(this.y2);
			$('#rightPreLegAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	RightLeg: {
		x1: 0, y1: 0, x2: 0, y2: 0, angle: 0, length: 0,
		calc: function(angle) {
			this.length = Math.round(People.partSize * 2);
			this.angle = (angle || 50) - People.RightPreLeg.angle;
			this.x1 = People.RightPreLeg.x2;
			this.y1 = People.RightPreLeg.y2;
			this.x2 = this.x1 - Math.round(this.length * Math.sin(this.angle * Math.PI / 180));
			this.y2 = this.y1 + Math.round(this.length * Math.cos(this.angle * Math.PI / 180));
			$('#rightLegX1').html(this.x1);
			$('#rightLegY1').html(this.y1);
			$('#rightLegX2').html(this.x2);
			$('#rightLegY2').html(this.y2);
			$('#rightLegAngle').html(this.angle);
			return this;
		},
		draw: function() { People.drawLine(this.x1, this.y1, this.x2, this.y2) }
	},

	recalc: function() {
		//var currentTime = +new Date();
		this.setPartSize();
		this.setLineWidth();
		this.Head.setPosition().draw();
		C.beginPath();
		this.Body.setPosition().draw();
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
		//console.log(+new Date() - currentTime);
	},
	drawLine: function (x1, y1, x2, y2)
	{
		C.moveTo(x1, y1);
		C.lineTo(x2, y2);
	},
	draw: function() {
		
	}
}