var flagRight = 1;
var flagLeft = 1;

funcRight = function(){
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
	
			flagRight = 0;
			setTimeout(function (){ flagRight = 1; }, 1000);
		}
	}

setInterval(funcRight, 5000);

$(document).ready ( function(){
	$('#slider-right').click(funcRight)

	$('#slider-left').click(function(){
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
	
			flagLeft = 0;
			setTimeout(function (){ flagLeft = 1; }, 1000);
		}
	})
});
