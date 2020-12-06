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

    var ex = $('.ex1');

    $('.ev1').focus(function () {
        ex.text($(this).attr('title'));

    }).keyup(function () {
        if ($(this).val() == 'pontocom') {
            $('.ev2').focus();

        }

    });
    /*
    $('.ev1').blur(function () {
        ex.text("Saida do campo: " + $(this).attr('name'));
    });
    */

    $('.ev1').change(function () {
        ex.text("Campo alterado: " + $(this).val());

    });

    $('.BT1').click(function () {
        $('.ev3').select();
        $('form').submit(function () {
            return false;

        });

    });

});