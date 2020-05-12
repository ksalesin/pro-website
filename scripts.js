// HTML element selectors for quick access
var $window = $(window),
 	$document = $(document),
 	$body = $('body');

$document.ready(function() {
	// Hide collapsed elements
	$('#design-collapse').hide();

	// Smooth scroll for on-page navigation links
	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Show/hide collapsible elements
	$('#design-collapse-trigger').on('click', function() {
		$('#design-collapse').slideToggle(500, function() {
			// Animation complete
			if ($('#design-collapse-trigger').text() == "Read More") {
				$('#design-collapse-trigger').text("Read Less");
			} else {
				$('#design-collapse-trigger').text("Read More");
			}
		})
	});
});