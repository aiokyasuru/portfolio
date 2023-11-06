$(function() {
	//読み込み時の処理
	$(window).on('load', function() {
		$('.load').fadeOut('500s');
	});
	//ページトップ
	var pagetop = $('#pagetop');
  pagetop.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      pagetop.fadeIn();
    }else{
      pagetop.fadeOut();
    }
  });
	pagetop.click(function(){
      $('html').animate({
        scrollTop:0
      },500)
    });
//スクロールFadeIn
		$(window).scroll(function (){
	        $('.fadein').each(function(){
	            var position = $(this).offset().top;
	            var scroll = $(window).scrollTop();
	            var windowHeight = $(window).height();
	            if (scroll > position - windowHeight + 200){
	              $(this).addClass('active');
	            }
	        });
	    });
	//スムーズスクロール
	$('a[href^="#"]').click(function() {
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html,body').animate({
			scrollTop: position
		}, 500, 'swing');
		return false;
	});
	//スライドショー
	$('.slideshow').each(function() {
		var $slides = $(this).find('img'),
			slideCount = $slides.length,
			currentIndex = 0;
		$slides.eq(currentIndex).fadeIn();
		setInterval(showNextSlide, 5000);
		function showNextSlide() {
			var nextIndex = (currentIndex + 1) % slideCount;
			$slides.eq(currentIndex).fadeOut(2000);
			$slides.eq(nextIndex).fadeIn(5000);
			currentIndex = nextIndex;
		}
	});
	//モーダルウインドウ
	$(".menu__card").click(function() {
		$(this).clone().appendTo('#mordal__card')

		$("#graydisplay").fadeIn(200);
	});
	$("#graydisplay,#mordal__card ").click(function() {
		$('#mordal__card').empty();
		$("#graydisplay").fadeOut(200);
	});

	//ハンバーガーメニュー
	$('.header__shape').click(function() {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.header__nav').addClass('active'); //クラスを付与
		} else {
			$('.header__nav').removeClass('active'); //クラスを外す
		}
	});
});
