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