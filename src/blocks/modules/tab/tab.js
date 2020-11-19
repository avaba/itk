$('.tab li:first-child a').addClass('active');
var tab_elem =  $('.js_tab_item');
tab_elem.css('display', 'none');
tab_elem.first().show('fast');
$('.tab a').on('click', function(event) {
	event.preventDefault();
	$('.tab a').removeClass('active');
	$(this).addClass('active');
	var tab_id = $(this).attr('href');
	tab_elem.hide('500');
	$(tab_id).show('500');
});