/* 首页产品展示幻灯效果*/
var image_slider=function  () {
	var list=$('.top-gallery .image-list li')
	,n=list.length
	,i=0
	,timer=5*1000;
	var slide=function(){
		$(list[i]).fadeOut(function(){

			i=i==n-1?0:++i;
			$(list[i]).fadeIn();			
			setTimeout(slide,timer);

		});
	};
	setTimeout(slide,timer);
};

image_slider();

