// init Flickity with jQuery
var $carousel = $('.main-carousel2').flickity({
  "imagesLoaded": true,
  "percentPosition": false
});
// get instance
var flkty = $carousel.data('flickity');

var slider_length = flkty.cells;
$('div#count span:last-of-type').text(slider_length.length);
// access properties
$carousel.on('change.flickity', function(event, index) {
  $('div#count span:first-of-type').text(index+1);
});

