$(function(var scroll = $('.scrollTop');
	 $(window).scroll(function(){
		 if($(window).scrollTop() >= 800){
			 scroll.show(300)
		 }else if($(window).scrollTop() < 800){
			scroll.hide(300)
		 }
	 })
		scroll.click(function(){
			$('body,html').animate({scrollTop:0},500)	
		})))