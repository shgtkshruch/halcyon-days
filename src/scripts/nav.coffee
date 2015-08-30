$nav = $ '#js-nav'
$navButton = $ '#js-nav-button'

$navButton.click (e) ->
  $navButton.toggleClass 'active'
  $nav.slideToggle()
