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
});


