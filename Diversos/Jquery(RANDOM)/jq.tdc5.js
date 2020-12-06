$(function () {

    $('.place').each(function () {
        var place = $(this).attr('title');
        var input = $(this);

        input
            .val(place)
            .css('color', '#42424250')
            .focusin(function () {
                input.css('color', '#000')
                if (input.val() == place) {
                    input.val('');
                }
            }).focusout(function () {
                if (input.val() == '') {

                    input.css('color', '#42424250');
                    input.val(place);
                }
            });
    });
    /*
        var ex = $('.ex1');
        $('.key').keypress(function () {
            ex.text($(this).val());
    
        });
    */

    /*
    var ex = $('.ex1');
    $('.key').keydown(function () {
        ex.text($(this).val());

    });
    */

    var ex = $('.ex1');
    $('.key').keyup(function () {
        ex.text($(this).val());

    });
});