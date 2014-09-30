var salesDetailsLeft = $('.sales__details__left');
var salesDetailsRight = $('.sales__details__right');
var salesRight = $('.sales-right');
var salesLeft = $('.sales-left');


var salesClickHandler = function () {
	var isActive = salesDetailsLeft.attr('data-state');

	if (isActive == 'active') {
		salesDetailsLeft.attr('data-state','inactive');
	} else {
		salesDetailsLeft.attr('data-state','active');
	}
};

salesLeft.on('click', salesClickHandler);

var salesClickHandler = function () {
	var isActive = salesDetailsRight.attr('data-state');

	if (isActive == 'active') {
		salesDetailsRight.attr('data-state','inactive');
	} else {
		salesDetailsRight.attr('data-state','active');
	}
};

salesRight.on('click', salesClickHandler);
