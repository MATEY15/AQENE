function toggleTabs(options) {

    /* Example options
    {
        toggleButtonsWrapperClass:'className',
        $toggleButtonsWrapper:node,
        toggleButtonClass:'className',
        $toggleButtons:HTMLCollections,
        toggleButtonActiveClass:'className',

        toggleItemsWrapperClass:'className',
        $toggleItemsWrapper:node,
        toggleItemsClass:'className',
        $toggleItems:HTMLCollections,
        toggleItemActiveClass:'className',
        toggleItemActiveEffectClass: 'className'
    }
     */

    let toggleButtonsWrapperClass = options && options.toggleButtonsWrapperClass ? options.toggleButtonsWrapperClass : 'tabs__toggle-buttons';
    let $toggleButtonsWrapper = options && options.$toggleButtonsWrapper ? options.$toggleButtonsWrapper : document.getElementsByClassName(toggleButtonsWrapperClass)[0];
    let toggleButtonClass = options && options.toggleButtonClass ? options.toggleButtonClass : 'tabs__toggle-button';
    let $toggleButtons = options && options.$toggleButtons ? options.$toggleButtons : $toggleButtonsWrapper.getElementsByClassName(toggleButtonClass);
    let toggleButtonActiveClass = options && options.toggleButtonActiveClass ? options.toggleButtonActiveClass : 'tabs__toggle-button--active';

    let toggleItemsWrapperClass = options && options.toggleItemsWrapperClass ? options.toggleItemsWrapperClass : 'tabs__toggle-items';
    let $toggleItemsWrapper = options && options.$toggleItemsWrapper ? options.$toggleItemsWrapper : document.getElementsByClassName(toggleItemsWrapperClass)[0];
    let toggleItemClass = options && options.toggleItemClass ? options.toggleItemClass : 'tabs__toggle-item';
    let $toggleItems = options && options.$toggleItems ? options.$toggleItems : $toggleItemsWrapper.getElementsByClassName(toggleItemClass);
    let toggleItemActiveClass = options && options.toggleItemActiveClass ? options.toggleItemActiveClass : 'tabs__toggle-item--active';
    let toggleItemActiveEffectClass = options && options.toggleItemActiveEffectClass ? options.toggleItemActiveEffectClass : 'tabs__toggle-item--active-effect';

    this.showItem = (index) => {
        showItem(index);
    };

    function hideItems() {
        for (let i = 0; i < $toggleItems.length; i++) {
            $toggleButtons[i].classList.remove(toggleButtonActiveClass);
            $toggleItems[i].classList.remove(toggleItemActiveClass, toggleItemActiveEffectClass);
        }
    }

    function showItem(index) {

        hideItems();
        $toggleButtons[index].classList.add(toggleButtonActiveClass);
        $toggleItems[index].classList.add(toggleItemActiveClass);

        let checkDisplay = setInterval(() => {
            let computedStyle = window.getComputedStyle($toggleItems[index], null);
            let displayState = computedStyle.getPropertyValue('display') !== 'none';

            if (displayState) {
                $toggleItems[index].classList.add(toggleItemActiveEffectClass);
                clearInterval(checkDisplay);
            }
        }, 1);
    }

    showItem(0);

    $toggleButtonsWrapper.addEventListener('click', (e) => {
        const $target = e.target;

        let $clickButton = false;

        if ($target.classList.contains(toggleButtonClass)) {
            $clickButton = $target;
        } else if ($target.closest('.' + toggleButtonClass) !== null) {
            $clickButton = $target.closest('.' + toggleButtonClass);
        }

        if ($clickButton && !$clickButton.classList.contains(toggleButtonActiveClass)) {

            for (let i = 0; i < $toggleButtons.length; i++) {
                if ($toggleButtons[i] === $clickButton) {
                    showItem(i);
                }
            }
        }


    });

}

// window.secondTabsErr = new toggleTabs({
//     $toggleButtonsWrapper: document.querySelector('.tabs__toggle-123123123'),
//     // $toggleItemsWrapper: document.querySelector('.tabs__main-23423'),
//     // toggleButtonActiveClass: 'active',
//     toggleItemsWrapperClass: 'tabs__main-23423'
// });

// window.firstTabs = new toggleTabs();

let tabsTestimonialCheckList = document.querySelector('.tabs-sidebar');
let tabsTestimonialCheckContent = document.querySelector('.tabs-content__wrapper');

if(tabsTestimonialCheckList && tabsTestimonialCheckContent) {
    initTabsTestimonial();
}

function initTabsTestimonial() {
    window.testimonialTabs = new toggleTabs({
        $toggleButtonsWrapper: tabsTestimonialCheckList,
        toggleButtonClass: 'menu-sidebar__list',
        toggleButtonActiveClass: 'menu-sidebar__list--active',

        $toggleItemsWrapper: tabsTestimonialCheckContent,
        toggleItemClass: 'tabs-content',
        toggleItemActiveClass:'tabs-content--active',
        toggleItemActiveEffectClass: 'tabs-content--effect'
    });
}



