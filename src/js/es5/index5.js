window.onload = function(){
	$('.classify').click(function(){
		$('.two_nav').slideToggle(400);
		$('.top_one').css({
			"transform":"rotate(-40deg)",
			"height":"3px",
			"top":"26px"
			})
		$('.top_two').css({"display":"none"})
		$('.top_three').css({
			"transform":"rotate(40deg)",
			"top":"25px",
			"width":"16px",
			"left":"25px"
			})
	})
}
	 
	

