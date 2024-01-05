// HTML element selectors for quick access
var $window = $(window),
 	$document = $(document),
 	$body = $('body'),
 	$zaps = $('.zap'),
	yellow_lime = "#fef900",
	lime = "#b8fb3c",
	turq = "#26f1f5",
	violet = "#7d5fff",
	fuschia = "#fa3bf5",
	pink = "#ff1493",
	white = "#ffffff";

$document.ready(function() {
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
});

$(".grid-item").mouseenter(function(){
	var $element = $(this);
	$element.css("box-shadow", "0px 0px 15px #cccccc");
	$element.css("background-color", lime);
});
// $(".grid-item-1").mouseenter(function(){
// 	var $element = $(this);
// 	$element.css("background-color", lime);
// });
// $(".grid-item-2").mouseenter(function(){
// 	var $element = $(this);
// 	$element.css("background-color", pink);
// });
// $(".grid-item-3").mouseenter(function(){
// 	var $element = $(this);
// 	$element.css("background-color", yellow_lime);
// });
// $(".grid-item-4").mouseenter(function(){
// 	var $element = $(this);
// 	$element.css("background-color", turq);
// });

$(".grid-item").mouseleave(function(){
	var $element = $(this);
	$element.css("background-color", "transparent");
	$element.css("box-shadow", "none");
});

$(".zap-link").mouseenter(function(){
	var $element = $(this);
	$element.css("z-index", "2");
	$element.find(".zap-link-border").addClass("zap-link-in");
	$element.find(".zap-link-border").removeClass("zap-link-out");
});

$(".zap-link").mouseleave(function(){
	var $element = $(this);
	$element.css("z-index", "auto");
	$element.find(".zap-link-border").addClass("zap-link-out");
	$element.find(".zap-link-border").removeClass("zap-link-in");
});
