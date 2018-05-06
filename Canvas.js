function Canvas()
{
	var self = this;
	var element;

	this.create = function (containerID, id) {
		var canvas = document.createElement('canvas');
		canvas.setAttribute('id', id);
		var container = document.getElementById(containerID);
		container.appendChild(canvas);
		element = document.getElementById(id);
		return self;
	}
	this.set = function (id) {
		element = document.getElementById(id);
		return self;
	}
	this.setSize = function (x, y) {
		element.width = self.width = x || document.body.clientWidth;
		element.height = self.height = y || document.body.clientHeight;
		return self;
	},
	this.getContext = function () {
		return element.getContext('2d');
	},
	this.setFrameRate = function (rate) {
		self.frameRate = rate;
		self.frameTime = Math.round(1000 / self.frameRate);
		return self;
	}
}