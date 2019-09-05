window.onload = function(){
	$('.classify').click(function(){
			 $('.two_nav').slideToggle(400);
	});
	//正则pput');
	var re = /^(1\d{10}|[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{2,4})+)$/;
	var input = $('#input');
	var defeated = $('.defeated');
	var header = $('.header');
	var a = $('#a');
	var str = $('#input').val();
	var i = $('#i')
	//得焦事件
	input.focus(function(){
		input.css("color","#000");
		defeated.css('display','none');
		i.css('display','none');
	})
	//失焦事件
	$('#input').blur(function(){
		var str = $('#input').val();
		if(re.test(str)){
			i.css('display','block');
			input.css("border-color","#000");
			a.click(function(){
				location.href = 'HomePage.html'
		})
		}else{
			//字体边框颜色变红
			input.css({"color":"red","border-color":"red"})
			//显示警告信息
			defeated.css('display','block');
			//调整
			header.css('height','220px');
			a.css('margin-top','46px')
			i.css('display','none');
		}
	});

}