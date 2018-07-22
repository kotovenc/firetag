var flagRight = 1;
var flagLeft = 1;

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

			if(withTime != 0){
				$('.circle').eq(nextImgIndex).addClass('on');
				$('.circle').eq(currImgIndex).removeClass('on');
			}
	
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
				setTimeout(function (){ flagRight = 1; }, 1000);
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

			if(withTime != 0){
				$('.circle').eq(prevImgIndex).addClass('on');
				$('.circle').eq(currImgIndex).removeClass('on');
			}
	
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
				setTimeout(function (){ flagLeft = 1; }, 1000);
			}

			clearTimeout(timer);
			timer = setTimeout(funcRight, 5000);

			/*console.log('move left');*/
		}
	}

var timer = setTimeout(funcRight, 5000);

$(document).ready ( function(){
	$('#slider-right').click(funcRight)

	$('#slider-left').click(funcLeft)
});

var $set = $('.circle');

$('.circle').click(function(eventObject){
  	var n = $set.index(this);
  	var nImg = $('.img.curr').index();

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

  				console.log(numRight);

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

  					console.log(numRight);

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
  			for(var i = 0; i <= ($('.circle:last').index()); i++){
  				$('.img').eq(i).removeClass('fast-move');
  			}
  		}
  	}

	$('.circle').eq(n).addClass('on');

	clearTimeout(timer);
	timer = setTimeout(funcRight, 5000);

  	/*console.log($('.circle:last').index());*/
});
