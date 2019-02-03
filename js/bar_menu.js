	
	
	function get_id(id) {
	    return document.getElementById(id);
	}

	function get_class(classn) {
	    return document.getElementByClassName(classn);
	}
	// nav bar navigation (mobile) js function
	function menu() {
	    if (get_id("button_bar_menu").style.marginLeft == "100%") {

	        get_id("button_bar_menu").style.marginLeft = "-80%";
	        get_id("img_menu_mobile").src = "image/menu.svg";

	    } else {
	        get_id("button_bar_menu").style.marginLeft = "100%";
	        get_id("img_menu_mobile").src = "image/cancel.svg";
	    }

	} 

	// function for display videos
	function displayvideos() {
	        get_id("video_element_div").style.marginTop = "180px";
	        get_id("video_element_div").style.opacity= "1";

	} 

	// function for hide videos
	function hidevideos() {
	        get_id("video_element_div").style.marginTop= "-100%";
	        get_id("video_element_div").style.opacity= "0";

	} 

	// nav bar nice scroll
	$(document).on('ready', function() {

	    $(".section1_dev2_button1").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".section2").offset().top
	        }, 1000);
	    });

	    $(".home").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".section1").offset().top
	        }, 1000);
	    });
	    $(".blog").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".p_text_slide_show").offset().top
	        }, 1000);
	    });
	    $(".Stories").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".section3_dev1_dev_element1").offset().top
	        }, 1000);
	    });

	    $(".authors").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".image_vi1col4").offset().top
	        }, 1000);
	    });

	    $(".contact").click(function() {
	        $('html, body').animate({
	            scrollTop: $(".section4_dev1").offset().top
	        }, 1000);
	    });


	});