let stepCheck = document.querySelector('.form-step');
if(stepCheck) {
    stepsBox();
}
function stepsBox() {
    let $stepWrapperItems = document.querySelector('.form-step__items');
    let $stepItems = $stepWrapperItems.children;
    let stepItemsActiveClass = 'form-step__item--active';
    let $stepIndicator = document.querySelector('.form-step__indicators');
    let stepIndicatorActiveClass = 'form-step__indicator-item--active';
    let $navigationPrev = document.getElementById('form-step__prev');
    let $navigationNext = document.getElementById('form-step__next');
    let stemPosition = 0;

    let $countPosition = document.querySelector('.form-step__step-counter');

    $navigationPrev.addEventListener('click', () => {
        if (stemPosition <= 0) {
            stemPosition = 0;
        } else {
            removeDot(stemPosition)
            stemPosition--;
            currentStepNumber(stemPosition)
            stepContents(stemPosition)
        }
    })
    $navigationNext.addEventListener('click', () => {
        if ((stemPosition + 1) >= $stepItems.length) {
            console.log($stepItems.length)
            stemPosition = $stepItems.length - 1;
        } else {
            stemPosition++;
            showStep(stemPosition)
            currentStepNumber(stemPosition)
            stepContents(stemPosition)
        }
    })

    hideStep();
    createIndicators();

    function createIndicators() {
        for (let index of $stepItems) {
            let stepIndicator = document.createElement('span');
            stepIndicator.className = 'form-step__indicator-item';
            $stepIndicator.appendChild(stepIndicator)
        }
    }

    function currentStepNumber(index) {
        $countPosition.innerText = index + 1 + '/' + $stepItems.length;
    }

    let $indicatorItems = $stepIndicator.children;

    function showStep(index) {

        hideStep();
        $indicatorItems[index].classList.add(stepIndicatorActiveClass);
    }

    showStep(0)

    function removeDot(index) {
        $indicatorItems[index].classList.remove(stepIndicatorActiveClass);
    }

    function hideStep() {
        for (let i = 0; i < $stepItems.length; i++) {
            $stepItems[i].classList.remove(stepIndicatorActiveClass);
        }
    }

    function stepContents(index) {
        for(let i=0; i < $stepItems.length; i++) {
            $stepItems[i].classList.remove(stepItemsActiveClass)
        }

        let checkDisplay = setInterval(() => {
            let computedStyle = window.getComputedStyle($stepItems[index], null);
            let displayState = computedStyle.getPropertyValue('display') == 'none';

            if (displayState) {
                $stepItems[index].classList.add(stepItemsActiveClass);
                clearInterval(checkDisplay);
            }
        }, 1);
    }
}