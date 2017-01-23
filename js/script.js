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
	});

	// dismiss screenshot overlay
	$("#screenshot-expanded-overlay").click(function(e) {
		$(this).fadeOut(500);
	});

	// bring up screenshot overlay
	$(".screenshot-wrapper img").click(function(e) {
		$("#screenshot-expanded-overlay").fadeIn(500);
		$("#screenshot-expanded").attr("src", $(this).attr("src"));
	});

	// click to scroll
	$("#nav-media").click(function(e) {
		$(document.body).animate(
			{scrollTop: $("#media-wrapper").offset().top}
		, 1000);
	});

	// cycle BG interval
	setInterval(cycleBG, 5000);

	// mobile menu stuff
	$("#top-wrapper").click(function(e) {
		// media query
		var mq = window.matchMedia("(max-width: 700px)");

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

});

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

// cycle BGs on banner
var cycleBG = function() {
	if ($("#bg-sunset").hasClass("active")) {
		$("#bg-sunset").fadeOut(1000);
		$("#bg-sunset").toggleClass("active");
	} else {
		$("#bg-sunset").fadeIn(1000);
		$("#bg-sunset").toggleClass("active");
	}
};

