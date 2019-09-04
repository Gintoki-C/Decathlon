$(function(){
	var dt = $('.list_center dl dt')
	dt.each(function(i){
		$(this).click(function(){
			dt.eq(i).css({"color":"#fff","background":"#0082c3"})
		})
	});
	$('.list_btn ul li').click(function(){
		location.href = 'HomePage.html'
	})
})