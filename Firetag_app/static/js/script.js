var flagRight = 1;
var flagLeft = 1;
var flagCenter = 1;
var timeWait = 0;

funcRight = function(withTime){
		if(flagRight == 1){
			var prevImg = $('.img.prev');
			var prevImgIndex = $('.img.prev').index();
	
			var currImg = $('.img.curr');
			var currImgIndex = $('.img.curr').index();
	
			var nextImg = $('.img.next');
			var nextImgIndex = $('.img.next').index();
	
			currImg.removeClass('curr');
			currImg.addClass('prev');
	
			nextImg.removeClass('next');
			nextImg.removeClass('invis');
			nextImg.addClass('curr');

			$('.circle').eq(nextImgIndex).addClass('on');
			$('.circle').eq(currImgIndex).removeClass('on');
	
			var newNextImgIndex = nextImgIndex + 1;
			var newNextImg = $('.img').eq(newNextImgIndex);
	
			if(newNextImgIndex == ($('.img:last').index() + 1)){
				$('.img').eq(0).addClass('next');
				$('.img').eq(0).addClass('invis');
			}else{
				newNextImg.addClass('next');
				newNextImg.addClass('invis');
			}
	
			prevImg.removeClass('prev');
			
			if(withTime != 0){
				flagRight = 0;
				setTimeout(function (){ flagRight = 1; }, 990);
			}

			clearTimeout(timer);
			timer = setTimeout(funcRight, 5000);

			/*console.log('move right');*/
		}
	}

funcLeft = function(withTime){
		if(flagLeft == 1){
			var prevImg = $('.img.prev');
			var prevImgIndex = $('.img.prev').index();
	
			var currImg = $('.img.curr');
			var currImgIndex = $('.img.curr').index();
	
			var nextImg = $('.img.next');
			var nextImgIndex = $('.img.next').index();
	
			currImg.removeClass('curr');
			currImg.addClass('next');
	
			prevImg.removeClass('prev');
			prevImg.removeClass('invis');
			prevImg.addClass('curr');

			nextImg.removeClass('next');

			$('.circle').eq(prevImgIndex).addClass('on');
			$('.circle').eq(currImgIndex).removeClass('on');
	
			var newPrevImgIndex = prevImgIndex - 1;
			var newPrevImg = $('.img').eq(newPrevImgIndex);
	
			if(newPrevImgIndex == -1){
				$('.img').eq($('.img:last').index()).addClass('prev');
				$('.img').eq($('.img:last').index()).addClass('invis');
			}else{
				newPrevImg.addClass('prev');
				newPrevImg.addClass('invis');
			}
			
			if(withTime != 0){
				flagLeft = 0;
				setTimeout(function (){ flagLeft = 1; }, 990);
			}

			clearTimeout(timer);
			timer = setTimeout(funcRight, 5000);

			/*console.log('move left');*/
		}
	}

var timer = setTimeout(funcRight, 5000);

$(document).ready(function(){
	$('#slider-right').click(function(){
		if(flagCenter == 1){
			funcRight(1);
		}
	});

	$('#slider-left').click(function(){
		if(flagCenter == 1){
			funcLeft(1);
		}
	});
});

var $set = $('.circle');

$('.circle').click(function(eventObject){
  if(flagCenter == 1){
  	var n = $set.index(this);{}
  	var nImg = $('.img.curr').index();

  	flagCenter = 0;

  	for(var i = 0; i <= ($('.circle:last').index()); i++){
  		$('.img').eq(i).addClass('fast-move');
  		$('.circle').eq(i).removeClass('on');
  	}

  	var numRight = n - nImg;

  	if(numRight > 0){
  		numRight--;
  		funcRight(0);

  		if(numRight!=0){
  			var intervalCircle = setInterval(function (){ 
  				numRight--;
  				if(numRight >= 0){
  					funcRight(0);
  				}

  				/*console.log(numRight);*/

  				if(numRight == -1){
  					for(var i = 0; i <= ($('.circle:last').index()); i++){
  						$('.img').eq(i).removeClass('fast-move');
  					}
  					clearInterval(intervalCircle);
  				}
  	 		}, 499);
  		}else{
  			setTimeout(function (){for(var i = 0; i <= ($('.circle:last').index()); i++){
  				$('.img').eq(i).removeClass('fast-move');
  			}}, 499);
  		}
  	}else{
  		if(numRight < 0){
  			numRight++;
  			funcLeft(0);

  			if(numRight!=0){
  				var intervalCircle = setInterval(function (){ 
  					numRight++;

  					if(numRight <= 0){
  						funcLeft(0);
  					}
  					/*console.log(numRight);*/

  					if(numRight == 1){
  						for(var i = 0; i <= ($('.circle:last').index()); i++){
  							$('.img').eq(i).removeClass('fast-move');
  						}
  						clearInterval(intervalCircle);
  					}
  	 			}, 499);
  			}else{
  				setTimeout(function (){for(var i = 0; i <= ($('.circle:last').index()); i++){
  					$('.img').eq(i).removeClass('fast-move');
  				}}, 499);
  			}
  		}else{
  			$('.circle').eq(n).addClass('on');
  			for(var i = 0; i <= ($('.circle:last').index()); i++){
  				$('.img').eq(i).removeClass('fast-move');
  			}
  		}
  	}

	/*$('.circle').eq(n).addClass('on');*/

	clearTimeout(timer);
	timer = setTimeout(funcRight, 5000);

	timeWait = Math.abs(n - nImg)*500;
	console.log(timeWait);

	setTimeout(function (){ 
		flagCenter = 1; 
	}, timeWait);
  	/*console.log($('.circle:last').index());*/
  }
});

/*MENU*/

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

/*NEWS*/

var button = 0

function parkButton(){
	if(button != 0){
		$('.news_content_container').eq(button).removeClass('curr');
		$('.news_content_container').eq(0).addClass('curr');

		$('.news_button').eq(button).removeClass('curr_button');
		$('.news_button').eq(0).addClass('curr_button');

		button = 0;
	}
}

function equip(){
	if(button != 1){
		$('.news_content_container').eq(button).removeClass('curr');
		$('.news_content_container').eq(1).addClass('curr');

		$('.news_button').eq(button).removeClass('curr_button');
		$('.news_button').eq(1).addClass('curr_button');

		button = 1;
	}
}

function events(){
	if(button != 2){
		$('.news_content_container').eq(button).removeClass('curr');
		$('.news_content_container').eq($('.news_content_container:last').index()).addClass('curr');

		$('.news_button').eq(button).removeClass('curr_button');
		$('.news_button').eq($('.news_content_container:last').index()).addClass('curr_button');


		button = $('.news_content_container:last').index();
	}
}

/*SERV*/
$('.serv_content_block').mouseenter(function(eventObject){
  	$(this).children('.serv_block_open').addClass('serv_on');
  	$(this).children('.serv_block_open_back').addClass('serv_on_back');
  	$(this).children('.serv_block_text').css('opacity', '0');
});

$('.serv_content_block').mouseleave(function(eventObject){
  	$(this).children('.serv_block_open').removeClass('serv_on');
  	$(this).children('.serv_block_open_back').removeClass('serv_on_back');
  	$(this).children('.serv_block_text').css('opacity', '1');
});
