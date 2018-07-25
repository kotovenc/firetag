$(document).ready(function() {
	$('.mobile-tab').hide();
	$('#toggle-btn').click(function(){
		$('.mobile-tab').slideToggle("slow");
	});

	$('.menu-item').click(function(){
				$('.mobile-tab').slideToggle("slow");
			});

	$('#more_btn').click(function(){
	  $("#hidden").fadeIn("slow");
	});  

	$('.close_btn').click(function(){
	  $("#hidden").fadeOut("slow");
	}); 

	$('#more_btn1').click(function(){
	  $("#hidden").fadeIn("slow");
	});  

	$('.close_btn').click(function(){
	  $("#hidden").fadeOut("slow");
	}); 

   $(".input-phone").mask("+7(999) 999-99-99");
	
});

