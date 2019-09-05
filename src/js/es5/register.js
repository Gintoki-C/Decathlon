$(function(){
	var input = $('#input');
	var defeated = $('.defeated');
	var pass = $('#pass');
	var str = input.val();
	var str2 = pass.val();
	//回到顶部
	var scroll = $('.scrollTop');
	 $(window).scroll(function(){
	 if($(window).scrollTop() >= 100){
		 scroll.show(300)
	 }else if($(window).scrollTop() < 100){
	scroll.hide(300)
	 }
 })
	scroll.click(function(){
		$('body,html').animate({scrollTop:0},300)	
	})
	//返回登录页
	$('.fanhui').click(function(){location.href = 'Login.html'})
	//正则
	var re = /^(1\d{10}|[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{2,4})+)$/;
		//得焦事件
		input.focus(function(){
		input.css("color","#000");
		defeated.css('display','none');
		})
		//失焦事件
		input.blur(function(){
			var str = input.val();
			if(re.test(str)){
				input.css("border-color","#000");
			}else{
			//字体边框颜色变红
			input.css({"color":"red","border-color":"red"})
			//显示警告信息
			defeated.css('display','block');
		}
		}); 
	//验证码
	$('#zheng').click(function(){		
		 $('#yan').val(
			function(){
				return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
			}
		);
	})
	//密码
	var defeate = $('.defeated2');
	var re2 = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/; 
	var pass = $('#pass');
	var str2 = pass.val();
	 pass.focus(function(){
		pass.css("border-color","#000");
		defeate.css('display','none')
	}) 
	pass.blur(function(){
		var pass = $('#pass');
		var str2 = pass.val();
		if(re2.test(str2)){
			pass.css("border-color","green")
		}else{
			defeate.css('display','block')
			}
		});
	
	//cookie
	$('#setup').click(function(){
		var yan = $('#yan').val();
		var pass = $('#pass');
		var str2 = pass.val();
		var surname = $('#surname').val();
		var iname = $('#iname').val();
		//获取cookie
		var cookieStr = $.cookie('wate') ? $.cookie('wate') : '';
		var cookieObj = converCookieStrToCookieObj(cookieStr);
		console.log(cookieStr)
		 if(str in cookieObj){
			alert('手机号已被注册')
		}else{
			cookieObj[str] = str2;
			location.href = 'HomePage.html'	
		}
		//不存在就创建一个cookie
		$.cookie('wate',JSON.stringify(cookieObj),7);
	})
	function converCookieStrToCookieObj(string){
		if(!string){
			return {};
		}
		return JSON.parse(string);
	}	
	})
