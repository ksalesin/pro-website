// HTML element selectors for quick access
var $window = $(window),
 	$document = $(document),
 	$body = $('body'),
 	// $tiles = $('#tiles'),
 	$hero = $('#hero'),
 	$topsection = $('#hero'),
 	$sections = $('.section');

// Colors
var bgBaseColor = '#192a56',
	red = '#ff1d25',
	yellow = '#ffdd59',
	green = '#0be881',
	blue = '#34e7e4',
	purple = '#e056fd';

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

// Check for window scroll
var lastScrollTop = 0;
$window.scroll(function(){
	var windowTop = $window.scrollTop();
	checkSectionInView(windowTop > lastScrollTop);
	lastScrollTop = windowTop;
});

// Check if next/previous section is in view
// If so, change background color
// next (parameter): true if looking for section below (scrolling down), 
//                   false if looking for section above (scrolling up)
var i = -1;
function checkSectionInView(next) {
	var windowTop = $window.scrollTop();
	var windowHeight = $window.height();
	var threshold = 0.4; // wait until section reaches 4/10 way into window

	// Looking for project below
	if (next) {
		if (i == $sections.length-1) {
			// If at last project, do nothing
			return;
		}

		var i2 = i + 1;
		var $section = $($sections.get(i2));

		var sectionTop = $section.offset().top;
	    var sectionBottom = (sectionTop + $section.outerHeight());

	    // Check if in view
	    if ((sectionBottom >= windowTop) && (sectionTop <= (windowTop+windowHeight-windowHeight*threshold))) {
	      	changeColor(i2);
	      	i = i2;
	    }

	// Looking for project above
	} else {
		if (i <= 0) {
			// If at top project, do nothing
			return;
		}

		var i2 = i - 1;
		var sectionTop, sectionBottom;

		var $section = $($sections.get(i2));

		sectionTop = $section.offset().top;
	    sectionBottom = sectionTop + $section.outerHeight();

	    // Check if in view
	    if ((sectionBottom >= (windowTop+windowHeight*threshold)) && (sectionTop <= (windowTop+windowHeight))) {
	      	changeColor(i2);
	      	i = i2;
	    }
	}
}

// Change background color of body based on project id
// Also change background tiles to fade in/out
function changeColor(id) {
	var bgColor;

	if (id == 0) {
		bgColor = bgBaseColor;
	} else if (id == 1) {
		bgColor = purple;
	} else if (id == 2) {
		bgColor = green;
	} else if (id == 3) {
		bgColor = blue;
	} else if (id == 4) {
		bgColor = yellow;
	} else if (id == 5) {
		bgColor = purple;
	} else if (id == 6) {
		bgColor = green;
	} else {
		bgColor = bgBaseColor;
	}

	// if (id == -1) {
	// 	$tiles.css({'opacity': 1.0});
	// } else {
	// 	$tiles.css({'opacity': 0.3});
	// }

	$body.css({'background-color': bgColor});
}
