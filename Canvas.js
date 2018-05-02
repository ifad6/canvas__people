function Canvas()
{
	var self = this;

	this.create = function (containerID, id) {
		var canvas = document.createElement('canvas');
		var container = document.getElementById(containerID);
		canvas.setAttribute('id', id);
		container.appendChild(canvas);
		self.element = document.getElementById(id);
		return this;
	}
	this.set = function (id) {
		self.element = document.getElementById(id);
		return this;
	}
	this.setSize = function (x, y) {
		self.element.width = this.width = x || document.body.clientWidth;
		self.element.height = this.height = y || document.body.clientHeight;
		return this;
	},
	this.getContext = function () {
		return self.element.getContext('2d');
	},
	this.setFrameRate = function (rate) {
		self.frameRate = rate;
		self.frameTime = Math.round(1000 / this.frameRate);
		return this;
	}
}