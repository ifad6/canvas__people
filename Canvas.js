var Canvas = {
	set: function (id) {
		this.element = document.getElementById(id);
	},
	setSize: function (x, y) {
		this.element.width = this.width = x || document.body.clientWidth;
		this.element.height = this.height = y || document.body.clientHeight;
	},
	getContext: function () {
		return this.element.getContext('2d');
	},
	setFrameRate: function (rate) {
		this.frameRate = rate;
		this.frameTime = Math.round(1000 / this.frameRate);
	}
}