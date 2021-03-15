function checkContactContent() {
    $('#button-contact').on('click', function() {
        let currentText = $(this).text();
        let editText = $(this).data('name');
        let elements = $('.contact__boxes').children();
        $(this).data('name', currentText).text(editText);

        for(let item of elements) {
            if($(item).is(":hidden")) {
                $(item).slideToggle(200);
            } else {
                $(item).slideToggle(200);
            }
        }
    })
}

checkContactContent();