// HTML element selectors for quick access
var $window = $(window),
 	$document = $(document),
 	$body = $('body'),
 	$zaps = $('.zap');

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

$window.scroll(function(){
	// Fade in elements if in view
	checkInView();
});


// Check if elements in view
function checkInView() {
	var windowTop = $window.scrollTop();
	var windowBottom = (windowTop + $window.height());

	$.each($zaps, function() {
	    var $element = $(this);
	    var elementTop = $element.offset().top;
	    var elementBottom = (elementTop + $element.outerHeight());

	    if ((elementBottom >= windowTop) && (elementTop <= windowBottom)) {
	      	$element.addClass('zap-in');
	    } else if ($element.hasClass('zap-in')) {
	    	$element.removeClass('zap-in');
	    }
	});
}

$(".zap-link").mouseenter(function(){
	var $element = $(this);
	$element.find(".zap-link-border").addClass('zap-link-in');
	$element.find(".zap-link-border").removeClass('zap-link-out');
});

$(".zap-link").mouseleave(function(){
	var $element = $(this);
	$element.find(".zap-link-border").addClass('zap-link-out');
	$element.find(".zap-link-border").removeClass('zap-link-in');
});