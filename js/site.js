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
	,timer=2*1000;
	var slide=function(){

		var next=i==n-1?0:i+1;
		$(list[next]).show();
		$(list[i]).fadeOut(3000,function(){

			i=next;
			$(this).css('zIndex',998);
			$(list[next]).css('zIndex',999);
			setTimeout(slide,timer);

		});
	};
	setTimeout(slide,timer);
};

image_slider();

/***********动态展示产品介绍***********/
(function(){
	var $info=$('.product-box .product-info'),$content=$info.find('.info-content'),
		width=$content.outerWidth();

	$info.mouseover(function(){

		$info.stop().animate({'right':0},600);
		
	});

	$info.mouseout(function(){

		$info.stop().animate({'right':-width+'px'},600);
		
	});

}()
);

