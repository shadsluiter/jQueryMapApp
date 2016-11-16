$(document).ready(function(){
	
	$("#locations-choice").change(function(){

		var picked = $('#locations-choice').val();

		if (picked === "Classes") {
			$('.map-location').addClass('hideMe').removeClass('visible');
			

			$(".classes").addClass("visible");
			

		}
		if (picked === "Recreation") {
			$('.map-location').addClass('hideMe').removeClass('visible');;
			
			$(".recreation").addClass("visible");

			
		}
		if (picked === "Secrets") {
			$('.map-location').addClass('hideMe').removeClass('visible');;
			
			$(".secret").addClass("visible");

			
		}
		
		
	});

});