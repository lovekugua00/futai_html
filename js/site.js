/*
*
* 该js用于实现站内的交互效果
*
*/


/* 首页产品展示幻灯效果*/
var image_slider=function  () {
	var list=$('.top-gallery .image-list li')
	,n=list.length
	,i=0
	,timer=4*1000;
	var slide=function(){

		var next=i==n-1?0:i+1;
		$(list[next]).show();
		$(list[i]).fadeOut(1000,function(){

			i=next;
			$(this).css('zIndex',998);
			$(list[next]).css('zIndex',999);			

		});
	};
	setInterval(slide,timer);
};

image_slider();

/***********动态展示产品介绍***********/
(function(){
	var $info=$('.product-box .product-info'),$content=$info.find('.info-content'),
		width=$content.outerWidth();

	$info.mouseenter(function(){

		$info.stop().animate({'right':0},600);
		
	});

	$info.mouseleave(function(){

		$info.stop().animate({'right':-width+'px'},600);
		
	});

}()
);

/*mall top-nav*/ 
$('#top-nav li').mouseover(function(){
	var sub=$(this).find('.sub-nav');
	if(sub.length>0){
		$(this).addClass('focus');
		sub.show();
	}

});
$('#top-nav li').mouseout(function(){
	var sub=$(this).find('.sub-nav');
	if(sub.length>0){
		sub&&$(this).removeClass('focus');
		sub&&sub.hide();
	}
});
/*footer site-toolbox*/ 
$('#site-toolbox .btn-minify').click(function(){
	if(this.title=='最小化'){
		$('#site-toolbox dd').hide();
		this.title='恢复';
	}else{
		$('#site-toolbox dd').show();
		this.title='最小化';
	}
	
});
$('#site-toolbox .btn-hide').click(function(){
	$('#site-toolbox').hide();
});

