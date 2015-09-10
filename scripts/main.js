(function() {
  var $nav, $navButton;

  $nav = $('#js-nav');

  $navButton = $('#js-nav-button');

  $navButton.click(function(e) {
    $navButton.toggleClass('active');
    return $nav.slideToggle();
  });

}).call(this);

(function() {
  $('#js-flexslider--responsive, #js-flexslider--portfolio, #js-flexslider--team').flexslider({
    animation: 'slide',
    pauseOnHover: true,
    touch: true,
    directionNav: false
  });

}).call(this);

(function() {
  $('#js-nav a, #js-swag__btn, #js-go-to-top').smoothScroll();

}).call(this);

(function() {
  var $wp1, $wp2, $wp3, $wp4, $wp5, $wp6, offset;

  $wp1 = $('.wp1');

  $wp2 = $('.wp2');

  $wp3 = $('.wp3');

  $wp4 = $('.wp4');

  $wp5 = $('.wp5');

  $wp6 = $('.wp6');

  offset = '70%';

  $wp1.waypoint(function(direction) {
    return $wp1.addClass('animated fadeInLeft');
  }, {
    offset: offset
  });

  $wp2.waypoint(function(direction) {
    return $wp2.addClass('animated fadeInUp');
  }, {
    offset: offset
  });

  $wp3.waypoint(function(direction) {
    return $wp3.addClass('animated fadeInDown');
  }, {
    offset: offset
  });

  $wp4.waypoint(function(direction) {
    return $wp4.addClass('animated fadeInUp');
  }, {
    offset: offset
  });

  $wp5.waypoint(function(direction) {
    return $wp5.addClass('animated fadeInUp');
  }, {
    offset: offset
  });

  $wp6.waypoint(function(direction) {
    return $wp6.addClass('animated fadeInUp');
  }, {
    offset: offset
  });

}).call(this);
