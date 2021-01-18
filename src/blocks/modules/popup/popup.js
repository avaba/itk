$('.btn-popup').click(function (e) {
	e.preventDefault();
	$("body").addClass('active');
	$("main").addClass('active');
	$('.popup').fadeIn(500);
})

$('.overlay-p, .close').click(function () {
	$("body").removeClass('active');
	$("main").removeClass('active');
	$('.popup').fadeOut(500);
})