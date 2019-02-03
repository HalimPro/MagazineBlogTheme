		$(document).on('ready', function() {
			
        $(".home").click(function() {
		$('html, body').animate({
		scrollTop: $(".section1").offset().top
		}, 1000);
		});
		
		$(".authors").click(function() {
		$('html, body').animate({
		scrollTop: $(".team_section").offset().top
		}, 1000);
		});
		
		$(".contact").click(function() {
		$('html, body').animate({
		scrollTop: $(".contact_section").offset().top
		}, 1000);
		});

		});