$(window).load(function() {
	// Homepage Slider
	
	/*
	$('#home-slider').flexslider({
		controlNav: false,
		start: function(slider){
			var src = slider.slides.eq(0).find('img').attr('alt');
			$('.flex-captions p').text(src);
		},
		after: function(slider){
			var src = slider.slides.eq(slider.currentSlide).find('img').attr('alt');
			$('.flex-captions p').text(src);
		}
	});

	$('#home-slider .flex-direction-nav, #home-slider .flex-captions').wrapAll('<div class="flex-utils container" />');
	*/	
	
	$('#home-carousel').flexslider({
		animation: "slide",
		animationLoop: true,
		slideshow: false,
		itemWidth: 188,		
		asNavFor: '#home-slider'
	});
	
	$('#home-slider').flexslider({
		animationLoop: false,
		slideshow: false,
		sync: "#home-carousel"
	});

});

jQuery(document).ready(function ($) {
	//Submenu
	$('.nav').superfish({
        animation: {
            opacity: "show",
            height: "show"
        },
        speed: "fast",
        delay: 250
    });
    
    // Form labels
    $.fn.formLabels(true);
    
    // Equal Heights
    $.fn.equalHeights('.latest-reviews article, .listing article');    
    
    // Responsive Menu
    // Create the dropdown base
    $("<select class='alt-nav' />").appendTo("#navigation");

    // Create default option "Go to..."
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Go to..."
    }).appendTo("#navigation select");

    // Populate dropdown with menu items
    $("#navigation a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo("nav select");
    });

    $("#navigation select").change(function() {
      window.location = $(this).find("option:selected").val();
    });
    
    $(".meter > span").each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.css('max-width', $(this).data("origWidth"))
	});
	
	//Block hover
	if( $('.fb').length > 0) {
	$(".fb").hover(
	  function () {
	  	var o = $(this).find('.overlay');
	  	o.fadeIn('fast');
	  },
	  function () {
	    $(this).find('.overlay').fadeOut('fast');
	  });	
	 }
	
	// Fancybox
	$('.fb').fancybox({
		padding: 0
	});
});





