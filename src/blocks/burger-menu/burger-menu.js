function mobileMenu() {
    let burgerButton = $('.burger-menu '),
        burgerButtonActive = 'burger-menu--active',
        wrapperMenu = $('.header__menu-wrapper'),
        wrapperMenuActive = 'header__menu-wrapper--active';

    burgerButton.on('click', function(){
        $(this).toggleClass(burgerButtonActive);
        wrapperMenu.toggleClass(wrapperMenuActive);
    });

    $(window).on('resize scroll', function(){
        burgerButton.removeClass(burgerButtonActive);
        wrapperMenu.removeClass(wrapperMenuActive);
    });


}
mobileMenu();