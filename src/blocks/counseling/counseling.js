let $navigateTabItems = $('.counseling__table-tab');
let $tableCol = $('.counseling__table-items');
let $tableRow = $('.counseling__table-line');
function tableCheck() {
    let $navigateTab = $('#table-tab');
    let $tableCol1 = $('.counseling__table-items--active');
    let $tableCol2 = $('.counseling__table-items--inactive');


    $navigateTabItems.on('click', function(){
        let currentIndex = $(this).index();
        $('.counseling__table-title').removeClass('is-active');
        $(this).addClass('is-active');

        $tableRow.each(function () {
            $(this).find($tableCol).hide()
            $(this).find($tableCol).eq(0).show();
            $(this).find($tableCol).eq(currentIndex).css({'display' : 'flex'});
        })
    });
}

tabMain();
function tabMain(){
    const windowWidth = window.innerWidth;
    if (windowWidth < 767) {
        tableCheck();
        $('.counseling__table-title').eq(1).addClass('is-active');
        $tableRow.each(function () {
            $(this).find($tableCol).eq(2).css({'display' : 'none'});
        });
    } else {
        $navigateTabItems.off();
        $('.counseling__table-title').removeClass('is-active');
        $tableCol.css({'display' : 'flex'});
    }
}

$(window).resize(function(){
    tabMain();
});