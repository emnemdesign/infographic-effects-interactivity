var $cat = $('.cat');
var $medical = $('.medical');
var $grooming = $('.grooming');
var $food = $('.food');
var $litter = $('.litter');
var $toys = $('.toys');
var $total = $('.total');

$cat.waypoint(function () {
  $cat.addClass('js-svg-animate');
}, {offset: '50%'});

$medical.waypoint(function () {
  $medical.addClass('js-svg-animate');
}, {offset: '50%'});

$grooming.waypoint(function () {
  $grooming.addClass('js-svg-animate');
}, {offset: '50%'});

$food.waypoint(function () {
  $food.addClass('js-svg-animate');
}, {offset: '50%'});

$litter.waypoint(function () {
  $litter.addClass('js-svg-animate');
}, {offset: '50%'});

$toys.waypoint(function () {
  $toys.addClass('js-svg-animate');
}, {offset: '50%'});

$total.waypoint(function () {
  $total.addClass('js-svg-animate');
}, {offset: '50%'});
