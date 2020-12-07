$(function () {
  if ($('.card-block-toggle').length) {
    var cardList = $('.card-block-toggle .card-block__wrap-col')
    var cardNum = $('.card-block-toggle .card-block__wrap-col').length

    if (cardNum > 4) {
      cardList
        .slice(4)
        .wrapAll('<div class="card-block__hide"><div class="card-block__wrap">')
      $('.card-block-toggle__btn').on('click', function () {
        $(this)
          .closest('.card-block-toggle')
          .find('.card-block__hide')
          .slideToggle()
        if (!$(this).data('status')) {
          $(this).html('Скрыть')
          $(this).data('status', true)
        } else {
          $(this).html('Показать все тарифы')
          $(this).data('status', false)
        }
      })
    }
  }
})
