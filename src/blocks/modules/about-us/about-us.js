$('.partners__tabs--link span').click(function () {
	let a = $(this).attr('id');

	$('.partners__tabs--link span').removeClass('active');
	$(this).addClass('active');

	$('.tab').removeClass('active');
	$('.' + a).addClass('active')
})