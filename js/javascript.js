//上選單特效+小菜單特效
$(function(){
    $(".li1").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 0
        },500);
    })
    $(".li2").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 1430
        },500);
    })
    $(".li3").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 2230
        },500);
    })
    $(".list button").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 2230
        },500);
    })
    $(".li4").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 2880
        },500);
    })
    $(".li5").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 3500
        },500);
    })
})

//上選單hover效果
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal < 1200){
            $("header ul").attr('class','visited1')
        }
        if(scrollVal >= 1200){
            $("header ul").attr('class','visited2')
        }
        if(scrollVal >= 2100){
            $("header ul").attr('class','visited3')
        }
        if(scrollVal >= 2800){
            $("header ul").attr('class','visited4')
        }
        if(scrollVal > 3200){
            $("header ul").attr('class','visited5')
        }
    })
})

//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
	})
})

//小選單特效
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 400){
            $(".sec1,.sec2,.sec3").addClass('slide1')
            $(".list button").addClass('slide2')
            $(".sec1 div,.sec2 div,.sec3 div").addClass('slide3')
        }
    })
})
//menu特效
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 1600){
            $('.menu').animate({
                opacity: 1,
            },800)
        }
    })
})

//外送特效
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 2700){
            $('.uber,.foodpanda').addClass('run')
        }
    })
})

//閃光特效+外送特效2
$(function(){
    $('.uberbut').hover(function(){
        $('.uberbut').toggleClass('flash')
        $('.uber').toggleClass('run2')
    })
    $('.foodpandabut').hover(function(){
        $('.foodpandabut').toggleClass('flash')
        $('.foodpanda').toggleClass('run2')
    })
})

//關於我們
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 1200){
            $('.at1').animate({
                opacity: 1,
            })
            $('.at2').delay(400).animate({
                opacity: 1,
            })
            $('.at3').delay(700).animate({
                opacity: 1,
            })
            $('.at4').delay(1000).animate({
                opacity: 1,
            })
            $('.at5').delay(1200).animate({
                opacity: 1,
            })
            $('.a1').delay(1500).animate({
                opacity: 1,
            })
            $('.a2').delay(2000).animate({
                opacity: 1,
            })
            $('.a3').delay(2500).animate({
                opacity: 1,
            })
        }
    })
})

//rwdbut
$(function(){
    $('.rwdbut').click(function(){
        $('.rwdbut,article').toggleClass('rwdslide')
    })
    $('.rwdbut').blur(function(){
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".rli1").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 0
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".rli2").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 5095
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".listrwdbut").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 7010
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".rli3").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 7010
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".rli4").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 16790
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
    $(".rli5").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');//各瀏覽器相容性
        $body.animate({
            scrollTop: 18500
        },500);
        $('.rwdbut,article').removeClass('rwdslide')
    })
})

//rwdlist
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 600){
            $(".rwdsec1").animate({
                opacity: 1,
            })
        }
        if(scrollVal >= 1800){
            $(".rwdsec2").animate({
                opacity: 1,
            })
        }
        if(scrollVal >= 3000){
            $(".rwdsec3").animate({
                opacity: 1,
            })
        }
        if(scrollVal >= 3300){
            $(".listrwdbut").animate({
                opacity: 1,
            })
        }
    })
})

//rwdabout
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal >= 4500){
            $('.rat1').animate({
                opacity: 1,
            })
            $('.rat2').delay(400).animate({
                opacity: 1,
            })
            $('.rat3').delay(700).animate({
                opacity: 1,
            })
            $('.rat4').delay(1000).animate({
                opacity: 1,
            })
            $('.rat5').delay(1200).animate({
                opacity: 1,
            })
            $('.ra1').delay(1500).animate({
                opacity: 1,
            })
            $('.ra2').delay(2000).animate({
                opacity: 1,
            })
            $('.ra3').delay(2500).animate({
                opacity: 1,
            })
        }
    })
})