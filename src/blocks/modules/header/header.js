$(document).ready(function () {
  $('.header__bot-menu').click(function () {
    $('.header__bot--submenu').stop(true, true).slideToggle()
  })

  $('.menu__title').click(function () {
    if (window.innerWidth < 993) {
      $('.menu__title').not($(this)).next('ul').slideUp()
      $('.menu__title').not($(this)).removeClass('active')
      $(this).next('ul').slideToggle()
      $(this).toggleClass('active')
    }
  })

  $('img.svg').each(function () {
    var $img = $(this)
    var imgID = $img.attr('id')
    var imgClass = $img.attr('class')
    var imgURL = $img.attr('src')

    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg')

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID)
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass + ' replaced-svg')
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a')

        // Replace image with new SVG
        $img.replaceWith($svg)
      },
      'xml',
    )
  })

  $('.helper__btn').click(function () {
    $('.helper__hide').toggle()
  })

  $('#app_link_select_popup a').click(function () {
    if ($(this).attr('data-type') == 'windows') {
      window.location.href =
        'https://download.teamviewer.com/download/TeamViewerQS.exe'
    } else {
      window.location.href =
        'https://download.teamviewer.com/download/TeamViewerQS.dmg'
    }
  })

  $('#bars').click(function(){
    $('.header-menu').toggleClass('active');
    $('body').toggleClass('fixed');
    $(this).toggleClass('active');
    if($('.overlay').hasClass('showed')) {
      $('.overlay').fadeOut(300);
      $('.overlay').removeClass('showed');
    } else {
      $('.overlay').fadeIn(300);
      $('.overlay').addClass('showed')
    }
  });
  $('.overlay, .header-menu-mob__close').click(function(){
    $('.overlay').removeClass('showed');
    $('.overlay').fadeOut(300);
    $('body').removeClass('fixed');
    $('.header-menu').removeClass('active');
    $('#bars').removeClass('active');
  });
})
