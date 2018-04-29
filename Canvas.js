function Canvas() {
	var self = this;

	this.set = function (id) {
		self.element = document.getElementById(id);
	}
	this.setSize = function (x, y) {
		self.element.width = this.width = x || document.body.clientWidth;
		self.element.height = this.height = y || document.body.clientHeight;
	},
	this.getContext = function () {
		return self.element.getContext('2d');
	},
	this.setFrameRate = function (rate) {
		self.frameRate = rate;
		self.frameTime = Math.round(1000 / this.frameRate);
	}
}