function priceRange () {
	var curPrice = $('#price-range').val();
	$('#upper-bound-price').text(curPrice + 'р.');
	$('#price-range').change(function () {
		curPrice = $('#price-range').val();
		$('#upper-bound-price').text(curPrice + 'р.');
	});
}

function circlesShift1() {
	var len = $('.circles1').children('span').length;
	var firstSpan = $('.circles1').children('span')[0];
	firstSpan.style.marginLeft = 106 - len * 4 + 'px';
};

function circlesShift2() {
	var len = $('.circles2').children('span').length;
	var firstSpan = $('.circles2').children('span')[0];
	firstSpan.style.marginLeft = 106 - len * 4 + 'px';
};

function pagesShift() {
	var len = $('#pages').children('span').length;
	var firstSpan = $('#pages').children('span')[0];
	firstSpan.style.marginLeft = 376 - len * 13 + 'px';
};

$(document).ready(priceRange);
$(document).ready(circlesShift1);
$(document).ready(circlesShift2);
$(document).ready(pagesShift);