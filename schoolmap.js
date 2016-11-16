$(document).ready(function() {

	$('#locationmenu').change(function() {

		var itemSelected = $('#locationmenu').val();

		if (itemSelected === "classroom") {
			$('.classroom').addClass('visible');
			$('.classroom').removeClass('invisible');
			$('.recreation').addClass('invisible');
			$('.secretlocation').addClass('invisible');
				
		}

		if (itemSelected === "recreation") {
			$('.classroom').addClass('invisible');
			$('.recreation').addClass('visible');
			$('.recreation').removeClass('invisible');
			$('.secretlocation').addClass('invisible');
			
		}

		if (itemSelected === "secretlocation") {
			$('.classroom').addClass('invisible');
			$('.recreation').addClass('invisible');
			$('.secretlocation').addClass('visible');
			$('.secretlocation').removeClass('invisible');
			
		}

		if (itemSelected === 'all') {
			$('.place').removeClass('invisible');
			$('.place').addClass('visible');
		}

	});





});