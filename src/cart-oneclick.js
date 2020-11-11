$(document).ready(function() {
    // Отчищаю корзину если в ней что то есть
    localStorage.removeItem('tcart');

    var wrapper = $('#rec247460129');
    var cart = $('#rec247453386');

    $(document).on('input', 'input[name="prepayment-value"]', function(e) {
        var newVal = Number.parseInt($(this).val());
        newVal = Number.isNaN(newVal) ? '' : newVal;

        $(this).val(newVal);

        newVal && wrapper.find('[href^="#order:"]').attr('href', '#order:Предоплата=' + newVal)
    })

    wrapper.find('.tn-atom__form')
        .on('tildaform:aftersuccess', function(e) {

            e.preventDefault();
            e.stopPropagation();

            var inputs = ['prepayment-value', 'prepayment-name', 'prepayment-phone', 'prepayment-comment'];

            for (var i = 0; i < inputs.length; i++) {
                cart.find('[name="' + inputs[i] + '"]').val(wrapper.find('[name="' + inputs[i] + '"]').val())
            }

            wrapper.find('[href^="#order:"]').click();
            cart.find('button[type="submit"]').click();
        });

    $('[href="#make-order"').click(function() {
        wrapper.find('.tn-atom__form button[type="submit"]').click();
    });
})

/**
 * Код который пиздец как помог вычеслить блядское событие которое максимально скрытно генерит тильа
 */

// var oldJQueryEventTrigger = jQuery.event.trigger;
// jQuery.event.trigger = function(event, data, elem, onlyHandlers) {
//     console.log(event, data, elem, onlyHandlers);
//     oldJQueryEventTrigger(event, data, elem, onlyHandlers);
// }