$(document).ready(function(){
	let slider =  $('.case-tab__container').slick({
		infinite: true,
  		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: '<button class="arrow-right"><svg><use xlink:href="../../img/sprites/sprite.svg#arrow-right"></use></svg></button>',
		prevArrow: '<button class="arrow-left"><svg><use xlink:href="../../img/sprites/sprite.svg#arrow-right"></use></svg></button>',
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
			}
		},{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
			}
		},{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		}
		]
	});

	$('span.tab').click(function(){
		let id = $(this).data('tab');

		$('.case-tabs__item').removeClass('active');
		$('span.tab').removeClass('active');
		$(this).addClass('active');
		$('#'+id).addClass('active');
	})

	$('.sitemap__title').click(function(){
		if(screen.width < 981) {
			$('.sitemap__item').not($(this)).removeClass('active');
			$('.sitemap__title').not($(this)).removeClass('open');
			$('.sitemap__title').not($(this)).next('ul').slideUp();
			$(this).toggleClass('open');
			$(this).parent().toggleClass('active');
			$(this).next('ul').slideToggle();
		}
	});
})