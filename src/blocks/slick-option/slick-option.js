require('slick-carousel');

let sliderProduct = function(){
    $('.patients-stories__video-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.patients-stories__slider',
        swipe: false
    });
    $('.patients-stories__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.patients-stories__video-slider',
        focusOnSelect: true
    });
};

// sliderProduct();