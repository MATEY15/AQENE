function toggleAccordion() {
    let $items = $('.accordion__item');
    let descriptionClass = 'accordion__description';
    let $descriptions = $('.' + descriptionClass);
    let activeClass = 'accordion__item--active';

    $items.eq(0).addClass(activeClass)

    $items.on('click', function () {
        let $item = $(this);
        let $description = $item.find('.' + descriptionClass);

        if ($item.hasClass(activeClass)) {
            $descriptions.slideUp();
            $items.removeClass(activeClass);
        } else {
            $descriptions.slideUp();
            $description.slideDown();
            $items.removeClass(activeClass);
            $item.addClass(activeClass);
        }
    });
}

toggleAccordion();