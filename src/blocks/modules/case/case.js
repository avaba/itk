$(document).ready(function(){
	$('.case-tab__container').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '<button class="arrow-right"><svg><use xlink:href="../../img/sprites/sprite.svg#arrow-right"></use></svg></button>',
		prevArrow: '<button class="arrow-left"><svg><use xlink:href="../../img/sprites/sprite.svg#arrow-right"></use></svg></button>',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		]
	})

	$('span.tab').click(function(){
		let id = $(this).data('tab');

		$('span.tab').removeClass('active');
		$('.case-tabs__item').fadeOut(1);
		$('.case-tab__container').on('slickNext');
		$(this).addClass('active');
		$('#'+id).fadeIn(1);
	})
})