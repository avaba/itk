$('.offices__li').on('click', (e) => {
    let city = e.target.dataset.city;

    $('.contacts-block').each(function () {
        let cityInfo = this.dataset.cityInfo
        if (city === cityInfo) {
            $(this).addClass('contacts-block--active').siblings().removeClass('contacts-block--active')
        }
    })

})
