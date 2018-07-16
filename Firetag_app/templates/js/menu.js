$(document).ready(function() {
	$('.mobile-tab').hide();
	$('#toggle-btn').click(function(){
		$('.mobile-tab').slideToggle("slow");
	});

	$('.menu-item').click(function(){
				$('.mobile-tab').slideToggle("slow");
			});

});