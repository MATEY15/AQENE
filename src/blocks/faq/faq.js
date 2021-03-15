function tabChecked(){
    let $tabItem = $('.faq__list-item');
    let $faqItem = $('.faq__tabs');
    let tabItemActive = 'faq__list-item--active';
    let $faqItemActive = 'faq__tabs--active';

    $faqItem.hide();
    $faqItem.eq(0).addClass($faqItemActive).show();

    $tabItem.on('click', function(){
        let currentIndex = $(this).index();

        $tabItem.removeClass(tabItemActive)
        $(this).addClass(tabItemActive)

        $faqItem.removeClass($faqItemActive).hide();
        $faqItem.eq(currentIndex).addClass($faqItemActive).fadeIn();

    });
}

tabChecked();