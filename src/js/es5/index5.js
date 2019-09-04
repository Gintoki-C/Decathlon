window.onload = function(){
	//二级导航点击弹出
	$('.classify').click(function(){
		 $('.two_nav').slideToggle(400);
		/* $('.top_one').css({
			"transform":"rotate(-40deg)",
			"height":"3px",
			"top":"26px"
			}); 
		$('.top_two').css({"display":"none"})
		$('.top_three').css({
			"transform":"rotate(40deg)",
			"top":"25px",
			"width":"22px",
			"left":"25px"
			})  */
})
				//轮播图
				
            //图片统一高度：
            var images_height = '590px';
            var images_url = [
                '../dist/img/1.jpg',
                '../dist/img/2.jpg',
                '../dist/img/3.jpg',
                '../dist/img/1.jpg',
            ];
            var images_count = images_url.length;
            //console.log(images_count);

            //创建节点
            //图片列表节点
            for(var j=0;j<images_count+1;j++){
                $('.banner ul').append('<li></li>')
            }
            //轮播圆点按钮节点
            for(var j=0;j<images_count;j++){
                if(j==0){
                    $('.banner ol').append('<li class="current"></li>')
                }else{
                    $('.banner ol').append('<li></li>')
                }
            }

            //载入图片
            $('.banner ul li').css('background-image','url('+images_url[0]+')');
            $.each(images_url,function(key,value){
                $('.banner ul li').eq(key).css('background-image','url('+value+')');
            });

            $('.banner').css('height',images_height);

            $('.banner ul').css('width',(images_count+1)*100+'%');

            $('.banner ol').css('width',images_count*20+'px');
            $('.banner ol').css('margin-left',-images_count*20*0.5-10+'px');

            var num = 0;
            //获取窗口宽度
            var window_width = $(window).width();
            $(window).resize(function(){
                window_width = $(window).width();
                $('.banner ul li').css({width:window_width});
                clearInterval(timer);
                nextPlay();
                timer = setInterval(nextPlay,2000);
            });
            //console.log(window_width);
            $('.banner ul li').width(window_width);
            //轮播圆点
            $('.banner ol li').mouseover(function(){//用hover的话会有两个事件(鼠标进入和离开)
                $(this).addClass('current').siblings().removeClass('current');
                //获取当前编号
                var i = $(this).index();
                //console.log(i);
                $('.banner ul').stop().animate({left:-i*window_width},500);
                num = i;
            });
            //自动播放
            var timer = null;
            function prevPlay(){
                num--;
                if(num<0){
                    $('.banner ul').css({left:-window_width*images_count}).stop().animate({left:-window_width*(images_count-1)},500);
                    num=images_count-1;
                }else{
                    //console.log(num);
                    $('.banner ul').stop().animate({left:-num*window_width},500);
                }
                if(num==images_count-1){
                    $('.banner ol li').eq(images_count-1).addClass('current').siblings().removeClass('current');
                }else{
                    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

                }
            }
            function nextPlay(){
                num++;
                if(num>images_count){
                    $('.banner ul').css({left:0}).stop().animate({left:-window_width},500);
                    num=1;
                }else{
                    //在最后面加入一张和第一张相同的图片，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
                    //console.log(num);
                    $('.banner ul').stop().animate({left:-num*window_width},500);
                }
                if(num==images_count){
                    $('.banner ol li').eq(0).addClass('current').siblings().removeClass('current');
                }else{
                    $('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');

                }
            }
            timer = setInterval(nextPlay,4000);
            //鼠标经过banner，停止定时器,离开则继续播放
            $('.banner').mouseenter(function(){
                clearInterval(timer);
                //左右箭头显示(淡入)
                //$('.banner i').fadeIn();
            }).mouseleave(function(){
                timer = setInterval(nextPlay,4000);
                //左右箭头隐藏(淡出)
               // $('.banner i').fadeOut();
            });
            //播放下一张
            $('.banner .right').click(function(){
                nextPlay();
            });
            //返回上一张
            $('.banner .left').click(function(){
                prevPlay();
            });
//回到顶部
     var scroll = $('.scrollTop');
	 $(window).scroll(function(){
		 if($(window).scrollTop() >= 800){
			 scroll.show(300)
		 }else if($(window).scrollTop() < 800){
			scroll.hide(300)
		 }
	 })
		scroll.click(function(){
			$('body,html').animate({scrollTop:0},500)	
		})

//鼠标移入列表页的动画
	//遍历每一个li
	 $('.list_two li').each(function(){
		 var list = $('.list_two li .list_three');
		 var listB = $('.list_two li .list_three b');
		 var listF = $('.list_two li .list_three #list_four');
		 //移入事件
		  $(this).mouseenter(function(){
			$('.list_two li img').eq($(this).index()).animate({height:0,width:0},400);	
			list.eq($(this).index()).css({'background':'#fafafa'});
			list.eq($(this).index()).animate({width:"157px",height:"170px","font-size":"24px"},400);
			listB.eq($(this).index()).css({"display":"block"});
			listF.eq($(this).index()).css({"display":"block"});
			})
			//移出事件
	$(this).mouseleave(function(){
		$('.list_two li img').eq($(this).index()).animate({height:"120px",width:"120px"},400);
		list.eq($(this).index()).css({'background':'#fff'});
		list.eq($(this).index()).animate({height:"66px","font-size":"18px"},600);
		listB.eq($(this).index()).css({"display":"none"});

		listF.eq($(this).index()).css({"display":"none"}); 
		
		})
	}) 
	



}
	 
	

