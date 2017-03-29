$(document).ready(function() {
	$(document).mousemove(function(e) {
		// check to see if parallax stuff exists
		if ($("#parallax-wrapper").length == 1) {
			parallax(e, document.getElementById("petal-2-img"), 1.5);
			parallax(e, document.getElementById("lantern-2-img"), 1.25);
			parallax(e, document.getElementById("inari-img"), 1);
			parallax(e, document.getElementById("lantern-img"), 0.5);
			parallax(e, document.getElementById("petal-1-img"), 0.75);
			// reset original positions
			xi = e.pageX;
			yi = e.pageY;
		}

	updateNavBarTabs();

	});

	// dismiss screenshot overlay
	$("#screenshot-expanded-overlay").click(function(e) {
		$(this).fadeOut(500);
	});

	// bring up screenshot overlay
	$("#media-table td img").click(function(e) {
		$("#screenshot-expanded-overlay").fadeIn(500);
		$("#screenshot-expanded").attr("src", $(this).attr("src"));
	});

	// click to scroll
	$("#nav-media").click(function(e) {
		$(document.body).animate(
			{scrollTop: $("#media-wrapper").offset().top}
		, 1000);
	});

	// mobile menu stuff
	$("#top-wrapper").click(function(e) {
		// media query
		var mq = window.matchMedia("(max-width: 768px)");

		if (mq.matches) {
			// mobile
			$("#nav-bar").clearQueue();
			if ($("#menu-icon").hasClass("active")) {
				// minimize menu
				$("#nav-bar").slideUp();
			} else {
				// expand menu
				$("#nav-bar").slideDown();
			}
			$("#menu-icon").toggleClass("active");
		} else {
			// not mobile
			// do nothing
		}

	});

	// Smooth scroll for on-page navigation links
	$('a[href^="#"]').on('click', function(e) {
	    e.preventDefault();
	    var target = $(this.hash);

	    $('html, body').stop().animate({
	        'scrollTop': target.offset().top - navBarSnapHeight // '48px' accounts for nav bar
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// nav bar css stuff depending on scroll position
	$(window).scroll(function() {
		if (window.matchMedia("(min-width: 768px)").matches) { // only in non-mobile mode
			snapNavBar();
			updateNavBarTabs();
		}
	});
});

var navBarSnapHeight = 0;

var xi = 0;
var yi = 0;

// parallax for objects on banner
function parallax(e, target, layer) {
	var layer_coeff_x = 10 / layer;
	var layer_coeff_y = 40 / layer;
	var xDelta = e.pageX - xi;
	var yDelta = e.pageY - yi;

   // current pos
   var posX = $(target).offset().left;
   var posY = $(target).offset().top;

   // move obj
   $(target).offset({left : posX-(xDelta/layer_coeff_x), top : posY-(yDelta/layer_coeff_y)});
};

// snap nav bar to top of page when appropriate
function snapNavBar() {
	if ($(window).scrollTop() == 0) { // scroll pos at top
		$("#top-wrapper").removeClass("snapped");
		navBarSnapHeight = 0;
	} else { // not at top
		$("#top-wrapper").addClass("snapped");
		navBarSnapHeight = 48;
	}
}
"e"
var scrollMarker = {
	1: "#banner-wrapper",
	2: "#emaillist-wrapper",
	3: "#media-wrapper"
};

// set the correct nav bar tab to active depending on scroll pos
function updateNavBarTabs() {
	var pos = $(window).scrollTop();
	// remove active class
	$(".nav-bar-item.active").removeClass("active");

	if (pos < $(scrollMarker["2"]).offset().top - navBarSnapHeight) {
		$("#nav-bar-home").addClass("active");
	} else if (pos >= $(scrollMarker["2"]).offset().top - navBarSnapHeight && pos < $(scrollMarker["3"]).offset().top - navBarSnapHeight) {
		$("#nav-bar-about").addClass("active");
	} else if (pos >= $(scrollMarker["3"]).offset().top - navBarSnapHeight) {
		$("#nav-bar-media").addClass("active");
	}
}

