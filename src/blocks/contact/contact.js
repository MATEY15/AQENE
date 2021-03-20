function checkContactContent() {
    $('#button-contact').on('click', function() {
        let currentText = $(this).text();
        let editText = $(this).data('name');
        let elements = $('.contact__boxes').children();
        $(this).data('name', currentText).text(editText);

        for(var i = 0; i < elements.length; i++) {
            console.log($(elements[i]))
            if($(elements[i]).css('display') !== 'none') {
                $(elements[i]).slideToggle(200);
            } else {
                $(elements[i]).slideToggle(200);
            }
        }
    })
}

checkContactContent();