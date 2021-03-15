require('slick-carousel');

$('.virtual-slider').slick({
    infinite: false,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    autoplaySpeed: 5000,
    // variableWidth: true,
    // useTransforms: false,
    // useCSS: false,
    appendArrows: ".virtual-slider__navigate",
    prevArrow: '<div class="patients-stories__button patients-stories__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z"/></svg></div>',
    nextArrow: '<div class="patients-stories__button patients-stories__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z"/>\n' +
        '</svg>\n</div>',

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // centerMode: true,
            }
        }
    ]
});
