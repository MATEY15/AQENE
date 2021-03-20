function tabChecked() {
    let $tabItem = $('.faq__list-item');
    let $faqItem = $('.faq__tabs');
    let tabItemActive = 'faq__list-item--active';
    let $faqItemActive = 'faq__tabs--active';

    $faqItem.hide();
    $faqItem.eq(0).addClass($faqItemActive).show();

    $tabItem.on('click', function () {
        let currentIndex = $(this).index();

        $tabItem.removeClass(tabItemActive)
        $(this).addClass(tabItemActive)

        $faqItem.removeClass($faqItemActive).hide();
        $faqItem.eq(currentIndex).addClass($faqItemActive).fadeIn();

    });
}

tabChecked();


function tabItemMobile() {
    let $tabsWrapperMobile = $('.tabs-content__wrapper');
    let $tabsItemMobile = $tabsWrapperMobile.find('.tabs-content__tab-item');

    // $tabsItemMobile
    // console.log($tabsItemMobile.next('.tabs-content'))

    $tabsItemMobile.each(function (index, item) {

        $(item).next('.tabs-content').removeClass('tabs-content--active tabs-content--effect');

        $(item).on('click', function () {

            // $(item).removeClass('tabs-content__tab-item--active').next('.tabs-content').removeClass('tabs-content--active tabs-content--effect').slideToggle();
            // console.log($(this).next('.tabs-content').is(':visible'))

            if ($(this).next('.tabs-content').is(':visible')) {
                // console.log($(this).next('.tabs-content').is(':visible'))
                // console.log(159)
                $(this).removeClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
                // $(item).removeClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
            } else {
                $(this).toggleClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();
            }

            // $(item).next('.tabs-content').hide().slideToggle();

            // *** $(this).addClass('tabs-content__tab-item--active').next('.tabs-content').slideToggle();

            // $('.tabs-content .tabs-content--active .tabs-content--effect')

        })
    })

    $(window).on('resize', function () {
        let win = $(this);
        if (win.width() <= 991) {
        }
        if (win.width() >= 991) {
            $tabsItemMobile.each(function (index, item) {
                $(item).next('.tabs-content').removeAttr("style");
            });
        }
    });


}


tabItemMobile();


function mobileTabs() {
    let $tabsWrapperMobile = $('.faq__wrapper');
    let $tabsItemMobile = $tabsWrapperMobile.find('.faq__tabs-item');

    $tabsItemMobile.each(function (index, item) {
        $(item).next('.faq__tabs').removeClass('faq__tabs--active');

        $(item).on('click', function () {
            $(item).removeClass('faq__tabs-item--active');
            if ($(item).next('.faq__tabs').is(':visible')) {
                $(this).removeClass('faq__tabs-item--active').next('.faq__tabs').removeClass('faq__tabs--active').slideToggle();
            }
            else {
                $(this).toggleClass('faq__tabs-item--active').next('.faq__tabs').toggleClass('faq__tabs--active').slideToggle();
            }
        });

    });


    $(window).on('resize', function () {
        let win = $(this);
        // if (win.width() <= 991) {
        //     console.log('< 991');
        // }
        if (win.width() >= 991) {
            $($tabsItemMobile[0]).next('.faq__tabs').removeAttr("style");
            $('.menu-sidebar').removeAttr("style");
        }
    });

}

mobileTabs();
