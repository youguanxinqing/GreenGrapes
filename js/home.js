
// 滚屏
$(document).ready(function($) {
    // 利用 data-scroll 属性，滚动到任意 dom 元素
    $.scrollto = function(scrolldom, scrolltime) {
        $(scrolldom).click( function(){
            var scrolltodom = $(this).attr("data-scroll");
            $(this).addClass("active").siblings().removeClass("active");
            $('html, body').animate({
                scrollTop: $(scrolltodom).offset().top
            }, scrolltime);
            return false;
        });
    };
    // 判断位置控制 返回顶部的显隐
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").fadeIn(600);
        } else {
            $("#back-to-top").fadeOut(600);
        }
    });
    $.scrollto("#back-to-top", 600);
});


function fssilde(){
    var mheader = document.getElementById( 'm-header' ),
        menuLeft = document.getElementById( 'm-nav' ),
        mcontainer = document.getElementById( 'm-container' ),
        mfooter = document.getElementById( 'm-footer' ),
        showLeftPush = document.getElementById( 'showLeftPush' );
    showLeftPush.onclick = function() {
        classie.toggle( mheader, 'm-header-open' );
        classie.toggle( menuLeft, 'm-nav-open' );
        classie.toggle( mcontainer, 'm-container-open' );
        classie.toggle( mfooter, 'm-footer-open' );
        disableOther( 'showLeftPush' );
    };
    function disableOther( button ) {
        if( button !== 'showLeftPush' ) {
            classie.toggle( showLeftPush, 'disabled' );
        }
            if( $('.m-container-open').length ){
        $(".container").click(function() {
            $( '#m-header' ).removeClass('m-header-open');
            $( '#m-nav' ).removeClass('m-nav-open');
            $( '#m-container' ).removeClass('m-container-open');
            $( '#m-footer' ).removeClass('m-footer-open');
        });
    }
    }

var eventClick = 'click';
var closeEnable = false;
    $('#search-trigger').bind(eventClick, function(event) {
        $('#search-form').addClass('active');
        closeEnable = false;
        setTimeout(function() {
            closeEnable = true;
        }, 500);
    });

    $('#search-input-s').bind('blur', function(event) {
        if ( closeEnable ) {
            $('#search-form').removeClass('active');
        }
    });

    $('#search-form-close').bind(eventClick, function(event) {
        event.preventDefault();
        if (closeEnable) {
            $('#search-form').removeClass('active');
            $('#search-input-s').blur();
            closeEnable = false;
        }
    });
}

$(document).ready(function () {
    // 分页
    $('.pagination a, .pagination span').addClass('page-link');

    if(!document.getElementById("sidebar")) {
        return;
    }

    fssilde();

    TagCanvas.Start('mycanvas', '', {
        textColour: '#000',
        //outlineColour: '#16a085',
        outlineColour: $('.skin-bg').css('background-color'),
        outlineThickness: 1,
        maxSpeed: 0.03,
        depth: 0.75,
        wheelZoom: false
    });

    //边栏固定
    var $sidebar = $("#fixed"),
        $fixside = $('.fixsidebar'),
        $window = $(window),
        offset = $sidebar.offset(),
        widths=$sidebar.width();
    if($window.width() > 768){
        $window.scroll(function() {
            if ($window.scrollTop() > offset.top) {
                var widths=$sidebar.width();
                $fixside.stop().animate({top:'20px'});
                $fixside.addClass('fix').css("width",widths);
            } else {
                $fixside.stop().animate({top:'1px'});
                $fixside.removeClass('fix');
            }
        });
    }
    
    // 切换主题
    $('#switch_color .flex-fill').click(function(e) {
        var obj = $(this);
        $.cookie('greengrapes_color', obj.data('color'));
        location.reload();
    });
});


// 去除多余<br>
// 对postArticle的长度判断是为了避开该方法对点赞插件的影响
$(function(){
    var postArticle = $('.post-article')
    if (postArticle.length > 1) {
        postArticle.each(function(i, e) { 
            $(e).html($(e).html().replace(/(<br>){2,}/ig,"<br>")) 
        });
    }
});