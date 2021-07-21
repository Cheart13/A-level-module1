$(document).ready(function () {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev"><</button>',
		nextArrow:'<button type="button" class="slick-next">></button>',
	});
});