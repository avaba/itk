$(document).ready(function(){
	$('.header__bot-menu').click(function(){
		$('.header__bot--submenu').stop(true, true).slideToggle();
	})

	$('.menu__title').click(function(){
		if(window.innerWidth < 993) {
			$('.menu__title').not($(this)).next('ul').slideUp();
			$('.menu__title').not($(this)).removeClass('active');
			$(this).next('ul').slideToggle();
			$(this).toggleClass('active');
		}
	})
})