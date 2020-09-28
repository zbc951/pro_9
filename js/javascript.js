
//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
        arrows: false,
	})
})

//小選單特效
$(function(){
    $(window).scroll(function () {
            var scrollVal = $(this).scrollTop();
            $("span").text(scrollVal);//span顯示當前scrollbar位置
            if(scrollVal >= 400){
                    $(".list section").addClass('slide1')
                    $(".list button").addClass('slide2')
                    $(".list div").addClass('slide3')
            }
    })
})