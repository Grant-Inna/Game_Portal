/**
 * Created by grant on 22.06.2017.
 */

$(function() {
    $('.menuToggle').on('click', function(){

        $('.menu').slideToggle(300, function() {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style')
            }
        });


    })
});