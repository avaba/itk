
let final_summ = $('.js-final-calc-sum'),
    calc_month = $('.js-calc-month'),
    calc_result_month = $('.js-calc-result-month'),
    calc_radio = $('.js-calc-radio input'),
    calc_checkbox = $('.js-calc-checkbox input[type=checkbox]'),
	 checkbox_need = $('.js-checkbox-need input');

function printResult() {
	let comps = 0,
		 laws = 0,
		 tariffs = 0,
		 validitys = 0,
		 sertificates = 0,
		 compos = $('#compos input:checked'),
		law = $('#law input:checked'),
		tariff = $('#tariff input:checked'),
		validity = $('#validity input:checked'),
		sertificate = $('#sertificate input:checked');

		console.log($(compos).length)

	//report-calculate
	if($(compos).length > 0) comps = +$(compos).val();
	if($(law).length > 0) laws = +$(law).val();
	if($(tariff).length > 0) tariffs = +$(tariff).val();
	if($(validity).length > 0) validitys = +$(validity).val();
	if($(sertificate).length > 0) sertificates = +$(sertificate).val();

	//report-calculate


    let calcRadio = calc_radio_check();
    if (!calcRadio) {
        calcRadio = 0;
    }
    let b = summCheckbox();
    let d = summCheckboxNeed();
    final_summ.text(+calcRadio + +b + +d + comps + laws + tariffs + validitys + sertificates);
}

printResult();

calc_radio.on('click', function() {
    let this_month = $(this).next().find(calc_month).text();
    calc_result_month.text(this_month);
});

function calc_radio_check() {
    let temp;
    calc_radio.each(function() {
        if ($(this).is(':checked')) {
            temp = $(this).val();
        }
    });
    return temp;
}

$('#js-calc').on('change', 'input', function() {
    printResult();
});

//calc_radio.change(function() {
//    let summ = $(this).val();
//    final_summ.html(summ);
//    let month = $(this).next().find(calc_month).text();
//    calc_result_month.html(month);
////    console.log(month);
//});

function summCheckbox() {
    let a = 0;
    calc_checkbox.each(function() {
        if ($(this).is(':checked')) {
            let temp_checkbox = $(this).val();
            a += +temp_checkbox; 
        }
    });
    return a;
}

function summCheckboxNeed() {
    let c = 0;
    checkbox_need.each(function() {
        if ($(this).is(':checked')) {
            let temp_ch_need = $(this).val();
            c += +temp_ch_need;
            
        }
    });
    return c;
}

$('#month').change(function() {
    let option = $(this).val();
    let check_group = $('#check-group-2').val() + option;
    $('#select_value').text(check_group);
    $('#check-group-2').val(check_group);
    printResult();
});




