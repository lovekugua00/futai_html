/*
*
* 该js用于实现站内的交互效果
*
*/


/* 首页产品展示幻灯效果*/
var image_slider=function  () {
	var top_gallery=$('.top-gallery')
	,list=$('.top-gallery .image-list li')
	,S
	,n=list.length
	,now=0
	,timer=3*1000
	,timerId=null;

	top_gallery.mouseover(function(){
		clearTimeout(timerId);
		timerId=null;
	});
	top_gallery.mouseout(function(){
		slide();
	});
	var createSelecor = function(){
		S=$('<div class="top-gallery-selector"></div>'),str='';
		for(var j=0;j<n;j++){
			var c=j?'':'selected';
			str+='<a class='+c+' href="javascript:;" >'+j+'</a>';
		}
		S.html(str);
		top_gallery.append(S);
		var time=null;
		S.find('a').mouseover(function(){
			var index=parseInt($(this).text());		
			if(now!=index){		
				time = setTimeout(function(){

					slideTo(index);

				},100);
				
			}
		});
		S.find('a').mouseout(function(){
			time&&clearTimeout(time);
		});
	};

	var slideTo = function(index){
		clearTimeout(timerId);
		timerId=null;
		$(list[index]).show();
		$(list[now]).stop().fadeOut('300',function(){

			S.find('a:eq('+now+')').removeClass('selected');
			S.find('a:eq('+index+')').addClass('selected');			
			now=index;
			$(this).css('zIndex',998);
			$(list[index]).css('zIndex',999);			

		});
	};
	var slide=function(){

		timerId&&clearTimeout(timerId);
		timerId = setTimeout(function(){
			var next=now==n-1?0:now+1;
			slideTo(next);
			slide();
		},timer);
	};

	createSelecor();
	slide();
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

/*image zoom*/ 

var $gallery = $('#product-preview a.gallery');
$('#product-preview .product-zoom dd a').bind('click',function(){
	$(this).parent().find('.selected').removeClass('selected');
	$(this).addClass('selected');
});


if($gallery.length>0){

	$gallery.jqzoom({		
	    zoomType: 'standard',
	    lens:true,
	    preloadImages: true,
	    title:false,
	    preloadText:''
	});

};

