$('document').ready(function () {
  $(".button-collapse").sideNav()
  $('.portfolio, .contact, presentation').hide()
  var sizing = () => {
    let vHeight = $(document).height() - 170
    let vWidth = $(document).width() - 140
    if (Math.max(vHeight, vWidth) > 992) {
      $('section').css({
        width: vWidth,
        height: vHeight
      })
    }
  }

  sizing()
  $(window).resize(function () {
    sizing()
  })

  $('.menu li').click(function () {
    let menuIndex = $(this).index()
    console.log(menuIndex)
    $('section').hide().each(function (i) {
      if (i === menuIndex) {
        $(this).fadeIn('100')
      }
    })
  })
})
