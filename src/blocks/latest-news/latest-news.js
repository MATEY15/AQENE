require('slick-carousel');

let slickVar = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // centerPadding: '40px',
    appendArrows: ".latest-news__navigate",
    prevArrow: '<div class="latest-news__button latest-news__button--prev"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.40991 1.41L2.82991 6L7.40991 10.59L5.99991 12L-8.72135e-05 6L5.99991 -1.23266e-07L7.40991 1.41Z" fill="#153257"/></svg></div>',
    nextArrow: '<div class="latest-news__button latest-news__button--next"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M0.589966 10.59L5.16997 6L0.589966 1.41L1.99997 0L7.99997 6L1.99997 12L0.589966 10.59Z" fill="#153257"/>\n' +
        '</svg>\n</div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};
let runSlick = function () {
    $('.latest-news__slider').slick(slickVar);
};
runSlick();

function latestNews() {

}

latestNews();
