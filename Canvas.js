var Canvas = {
	set: function (element) {
		this.element = element;
	},
	setSize: function (x, y) {
		if (x === undefined) x = document.body.clientWidth;
		if (y === undefined) y = document.body.clientHeight;
		this.element.width = x;
		this.element.height = y;
		$('#canvasX').html(x);
		$('#canvasY').html(y);
	},
	getSize: function () {
		return {width: this.element.width, height: this.element.height};
	},
	getContext: function () {
		return this.element.getContext('2d');
	},
	setFrameRate: function (rate) {
		this.frameRate = rate;
	}
}