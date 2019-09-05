$(function(){
	//获取页面元素
	//上下按钮
	var up = $('.icon-shang');
	var down = $('icon-xia');
	//轮播大图小图
	var Big_pic = $('.picture img');
	var small_pic = $('.samm_ul li');
	//大图的初始下标
	var index = 0;
	//大图的长度
	var len = Big_pic.length;

	//大图轮播时的z-index
	var zindex = 1;
	 //添加事件
	 up.click(function(){
		 console.log(len)
		index--;
		if(index == -1){
			index = len - 1;
		}
		slider();
	})
	down.click(function(){
		console.log(len)
		index++;
		if(index == len){
			index = 0;
		}
		slider();
	}) 
	//遍历小图添加点击事件
	small_pic.each(function(){
		console.log($(this).index())
		$(this).click(function(){
			index = $(this).index();slider()
		})
	});
	//封装轮播
	function slider(){
		if(index == 0){
			sport($('.small_ul'),{left:0})
		}else if(index == len - 1){
		sport($('.small_ul') , {
			left: -(len - 3) * Small_pic[0].offsetWidth
			});
		
	}else {
		sport(iBottom , {
			left: - (indexa - 1) * Small_pic[0].offsetWidth
		})
	}}
	small_pic.each(function(){
		sport(Small_pic[i] , {
			opacity:50
		});
	})
    sport(Small_pic[indexa] , {opacity : 100});
	//完美运动
	function sport (obj,json ,fn){
		clearInterval(obj.timer);
		obj.timer = setInterval(() =>{
			var onOff = true;
			for(var attr in json){
				var cur = attr === 'opacity' ? 
				parseInt(parseFloat(getStyle(obj,attr)) * 100) : 
				parseInt(getStyle(obj , attr));
				var speed = (json[attr] - cur) / 8;
				speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
				if(cur !== json[attr]){
					onOff = false;
				}
				if(attr == 'opacity'){
					obj.style.opacity = (cur + speed) /100;
					obj.style.filter = 'alpha(opacity=' + (cur + speed) + ')';
				}else {
					obj.style[attr] = (cur + speed) + 'px';
				}
				if(onOff){
					clearInterval(obj.timer)
				}
			}
		} , 30)
	} 
})