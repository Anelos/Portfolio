
var sectionOrder = [0, 1, 2, 3]
$('document').ready(function () {
  $('.portfolio, .contact, presentation').hide()
  var sizing = () => {
    var vHeight = $(document).height() - 170
    var vWidth = $(document).width() - 140
    if (Math.max(vHeight, vWidth) > 992) {
      for (let i = 0; i < 4; i++) {
        $('.menuitems .pos-' + (3 - i)).css({
          width: vWidth,
          height: vHeight
        })
      }
      $('section').css({
        width: vWidth,
        height: vHeight,
        top: $('.pos-0').css('top'),
        left: $('.pos-0').css('left')
      })
    }
  }
  var moveSection = (orderTab, index) => {
    var oldTab = orderTab
    if (orderTab[index] === 0) {
      return orderTab
    }
    let last = orderTab.pop()
    orderTab.unshift(last)
    $('.menuitems div').each(function (i) {
      $(this).removeClass('pos-' + oldTab[i])
      $(this).attr('class', 'pos-' + orderTab[i])
      sizing()
    })
    moveSection(orderTab, index)
  }

  sizing()
  $(window).resize(function () {
    sizing()
  })

  $('.menuitems div').click(function () {
    let menuIndex = $(this).index()
    moveSection(sectionOrder, menuIndex)
  })
})
