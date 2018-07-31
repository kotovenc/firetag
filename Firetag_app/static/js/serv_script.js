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