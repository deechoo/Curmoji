function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	var drawing = SVG('watch-image');
	var watchFace = SVG.get('watch-face');
	var watchButton = SVG.get('watch-button');
	var watchMetal = SVG.get('watch-metal');
	var speed = '0.5s';
	
	document.getElementById('shape-dropdown').addEventListener('change', function(e) {
		var radius;
		
		switch (this.value) {
			case 'sq':
				radius = 30;
				break;
			case 'r':
				radius = 80;
				break;
			default:
				radius = 55;
		}
		watchFace.animate(speed).radius(radius);	
	});
	
	var radios = document.querySelectorAll('.color-checkboxes input[type="radio"]');
		
	count = radios.length;
	
	for (var i=0; i < count; i++) {
		radios[i].addEventListener('change', function(e) {
			
			watchFace.animate(speed).attr('stroke', this.value);
			watchButton.animate(speed).attr('fill', tinycolor(this.value).darken(10).toString());
		});
	}
	
	document.getElementById('button-dropdown').addEventListener('change', function(e) {
		var opacity;
		
		if (this.value == 'n') {
			watchButton.animate(speed).transform({x: -10}).opacity(0);
		} else {
			watchButton.animate(speed).transform({x: 0}).opacity(1);
		}			
	});
	
	var sizeCbs = document.querySelectorAll('#size-options input[type="checkbox"]');
	var count = sizeCbs.length;
	
	for (var i=0; i < count; i++) {
		sizeCbs[i].addEventListener('change', function(e) {
			var totalSizes = 0;
			var checkedSizes = 0;
			
			for (var i=0; i < sizeCbs.length; i++) {
				if (sizeCbs[i].checked) {
					totalSizes += Number(sizeCbs[i].value);
					checkedSizes += 1;
				}
			}
			
			var avg = totalSizes / checkedSizes;
			if (isNaN(avg)) avg = 1;
			
			watchMetal.animate(speed).transform({scale: avg});
		});
	}
});