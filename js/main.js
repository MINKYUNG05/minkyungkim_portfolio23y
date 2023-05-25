//start main
$(document).ready(function () {
        $(".send:nth-of-type(1)").addClass('message-show1');
        $(".receive:nth-of-type(2)").addClass('message-show2');
        $(".send:nth-of-type(3)").addClass('message-show3');
        $(".receive:nth-of-type(4)").addClass('message-show4');
        $(".receive:nth-of-type(5)").addClass('message-show5');
        $(".send:nth-of-type(6)").addClass('message-show6');
        $(".receive:nth-of-type(7)").addClass('message-show7');
    });




// menu bt
$(document).ready(function () {
    $(".logo3").click(function () {
        $(".bottom-logo-nav").slideToggle();
    });
});



//menu bt slideup
$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(1)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});

$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(2)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});

$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(3)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});


$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(4)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});

$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(5)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});

$(document).ready(function () {
    $(".bottom-logo-nav ul li:nth-of-type(6)").click(function () {
        $(".bottom-logo-nav").slideUp();
    });
});


//menu click
$(document).ready(function () {
    $(".pj-box:nth-of-type(1)").click(function () {
        // $(location).attr("href", "https://minkyung05.github.io/project4_react_jordan/")
        window.open("https://minkyung05.github.io/project4_react_jordan/", "_blank")
	})

    $(".pj-box:nth-of-type(2)").click(function () {
        // $(location).attr("href", "https://minkyung05.github.io/Project.2_grammyaward/")
        window.open("https://minkyung05.github.io/Project.2_grammyaward/", "_blank")
	})

    $(".pj-box:nth-of-type(3)").click(function () {
        // $(location).attr("href", "https://minkyung05.github.io/project.3_amazonbooks/")
        window.open("https://minkyung05.github.io/project.3_amazonbooks/", "_blank")
	})

    $(".pj-box:nth-of-type(4)").click(function () {
        // $(location).attr("href", "https://minkyung05.github.io/avatar_group_pj_new/")
        window.open("https://minkyung05.github.io/avatar_group_pj_new/", "_blank")
	})


    $(".pj-box:nth-of-type(5)").click(function () {
        // $(location).attr("href", "https://minkyung05.github.io/avatar_group_pj_new/")
        window.open("https://www.behance.net/meankyungkim", "_blank")
	})

    });






// swiperdemo
$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
});


// index animation
$(document).ready(function () {
    $('.title').click(function () {
        // $(window).scrollTop(0);
        $('html,body').animate({ scrollTop: 0 }, 1000);
        let w = $('.main').width();
        // console.log($(this).next('.content').css('flex-basis'))
        if ($(this).next('.con').css('flex-basis') == '0px') {
            // $('.main').animate({ marginLeft: -w }, 1000);
            $(this).parent().css({ width: '99vw' });
            $(this).siblings('.con').animate({ flexBasis: 0 });
            $('.inner-con').hide();
            $(this).next('.con').animate({ flexBasis: w }, function () {
                console.log($(this).find('.inner-con'))
                $(this).find('.inner-con').fadeIn();
            });


        } else {
            // $('.main').animate({ marginLeft: 0 });
            $(this).parent().css({ width: '20%' });

            $('.inner-con').hide();
            $(this).next('.con').animate({ flexBasis: 0 });
        }
    });
});




//index close-bt
$(document).ready(function () {
    $('.title').click(function () {
        $(this).siblings().children(".close").removeClass('show-close');
        $(this).children(".close").toggleClass('show-close');
        // $(this).siblings().children(".close").css("opacity","0");
    });
});

