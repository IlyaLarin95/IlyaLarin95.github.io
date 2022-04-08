$(document).ready(function(){

    $('ul.tab__items').on('click', 'li:not(.tab__item_active)', function() {
        $(this)
            .addClass('tab__item_active').siblings().removeClass('tab__item_active')
            .closest('div.container').find('div.tab__content').removeClass('tab__content_active').eq($(this).index()).addClass('tab__content_active');
    });
});
