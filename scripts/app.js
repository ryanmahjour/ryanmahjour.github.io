/* Arrow button */
$("button.arrow-button").click(function () {
    if (!$(this).hasClass("up") && !$(this).hasClass("down")) {
        $(this).addClass("up");
    }
    else {
        $(this).toggleClass("up down");
    }
    return false;
});

$(".arrow-button").click(function () {
    if ($(this).hasClass("up")) {
        $(".details").slideDown("slow");
    }
    else {
        $(".details").slideUp(800);
    }

});

$(".read-more").click(function () {
    $(this).addClass("up");
    if($(this).hasClass("up") && !$(this).hasClass("down") ){
        $(this).parent().next().stop().slideDown(); 
        $(this).addClass("down");
       }
    else if($(this).hasClass("up") && $(this).hasClass("down") ){
        $(this).parent().next().stop().slideUp(); 
        $(this).removeClass("down");
        
    } 
});

//Sticky header on scroll

$(function(){
    $(window).scroll(function(){
        var winTop = $(window).scrollTop();
        if(winTop >= 30){
            $("body").addClass("sticky-header");
        }else{
            $("body").removeClass("sticky-header");
        }
    });
});

//Sticky header when the mouse icon is clicked
$(".mouse_scroll").click(function () {
    $("body").addClass("sticky-header");

});

//Typewriter

$.fn.typewriter = function() {
    this.each(function() {
        var c = $(this),
            b = c.html(),
            a = 0,
            d = 0;
        c.html("");
        var e = function() {
            if ("<" == b.substring(a, a + 1)) {
                var f = new RegExp(/<span class="instant"/),
                    g = new RegExp(/<span class="clear"/);
                if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
                else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
                else
                    for (;
                         ">" != b.substring(a, a + 1);) a++
                        }
            c.html(b.substring(d, a++) + (a & 50 ? "|" : ""));
            a >= b.length || setTimeout(e, 100 + 50 *
                                        Math.random())
        };
        e()
    });
    return this
};
$(".terminal").typewriter();


//Back to Top
if ($('.return-to-top').length) {
    var scrollTrigger = 150, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('.return-to-top').addClass('show');
            } else {
                $('.return-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('.return-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
