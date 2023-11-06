$(function() {

//スライドショー
	$('.slideshow').slick({
		autoplay:true,
		fade:true,
		speed:600,
		arrows:false,
	});

	//スムーススクロール
	var pagetop = $('.sns__arrow');
	pagetop.click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	//スマホ・タブレットでのハンバーガーメニュー
	$('.nav-toggle').on('click',function() {
		if($('.header__menu').hasClass("open")){
		$('.header__menu').removeClass("open");
	}else{
		$('.header__menu').addClass("open");
	}
	});

	//レスポンシブデザインでのナビゲーションの動作
	$(window).on('load resize',(function(){
		var w =$(window).width();
		var x =900;
		if(w>x){
	$('.header__nav').removeClass("responsive");
	$('.header__menu').addClass("open");

}else{
	$('.header__nav').addClass("responsive");
	$('.header__menu').removeClass("open");

}
}));
});
