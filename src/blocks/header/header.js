headerScroll();

function headerScroll() {
    let $topHeader = $('.header');
    let scrollClass = 'header--scroll';

    checkHeaderPosition();

    function checkHeaderPosition() {

        if ($(window).scrollTop() > 0) {
            $topHeader.addClass(scrollClass);
        } else {
            $topHeader.removeClass(scrollClass);
        }

        requestAnimationFrame(checkHeaderPosition);
    }
}


let blockPosition = $('.content-transfer--el1');
positionBlock();
$(window).resize(function () {
    positionBlock();
});

function positionBlock() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 993) {
        $('.header__mobile-container').prepend(blockPosition);
    } else {
        $('.header__login-wrapper').append(blockPosition);
    }
}


// function headerHeight() {
//     let headerHeight = document.querySelector('.header').offsetHeight,
//         body = document.querySelector('body');
//     body.style.paddingTop = headerHeight + "px";
// }
// headerHeight();


let catalogMenuName = 'headerMenu';

window.catalogMenu = new menu(
    {
        name: catalogMenuName,
        button: '.header__mobile-button, .header__bottom-mobile-header-button',
        buttonActiveClass: 'active',
        menuBlock: '.header__bottom-wrapper',
        menuActiveClass: 'active',
    }
);