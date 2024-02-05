$(function () {
    $('.main_visual .itm_area').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        fade: true,
        cssEase: 'linear'
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_visual .itm_area').slick('slickPrev');
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_visual .itm_area').slick('slickNext');
    });

    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        focusOnSelect: true,
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 1,
        //         }
        //     }
        // ],
        prevArrow: $('.main_product .arrows .left'),
        nextArrow: $('.main_product .arrows .right'),
    });

    // $('.content .arrows .left').on('click', function () {
    //     $('.pic_slide ').slick('slickPrev');
    // });

    // $('.content .arrows .right').on('click', function () {
    //     $('.pic_slide').slick('slickNext');
    // });

    $('.pic_slide').slick({
        vertical: true,
        arrows: false,
        asNavFor: ".product_slide",
    });

    // text-animation

    const ITXT = $('.roll_txt').text().split('');
    const CTXT = $.map(ITXT, (it) => `<span>${it}</span>`).join('');
    const DTXT = $('.roll_txt').text('').append(CTXT).children();


    $.each(DTXT, (idx, it) => {
        $(it).css({
            position: 'absolute',
            top: 0,
            left: '50%',
            height: '100%',
            transform: `rotate(${360 / DTXT.size() * idx}deg)`
        })
    })

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.mopen').on('click', function () {
        $('#gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    })


});


