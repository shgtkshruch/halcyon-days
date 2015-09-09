$wp1 = $ '.wp1'
$wp2 = $ '.wp2'
$wp3 = $ '.wp3'
$wp4 = $ '.wp4'
$wp5 = $ '.wp5'
$wp6 = $ '.wp6'

offset = '70%'

$wp1.waypoint (direction) ->
  $wp1.addClass 'animated fadeInLeft'
,
  offset: offset

$wp2.waypoint (direction) ->
  $wp2.addClass 'animated fadeInUp'
,
  offset: offset

$wp3.waypoint (direction) ->
  $wp3.addClass 'animated fadeInDown'
,
  offset: offset

$wp4.waypoint (direction) ->
  $wp4.addClass 'animated fadeInUp'
,
  offset: offset

$wp5.waypoint (direction) ->
  $wp5.addClass 'animated fadeInUp'
,
  offset: offset

$wp6.waypoint (direction) ->
  $wp6.addClass 'animated fadeInUp'
,
  offset: offset
