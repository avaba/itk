$('.offices__li').on('click', (e) => {
    let cityDOM = e.target;
    let cityName = cityDOM.dataset.city;

    $('.contacts-block').each(function () {
        let cityInfo = this.dataset.cityInfo;
        if (cityName === cityInfo) {
            $(this).addClass('contacts-block--active').siblings().removeClass('contacts-block--active')
            $(cityDOM).addClass('offices__li--active').siblings().removeClass('offices__li--active')
        }
    })
});
