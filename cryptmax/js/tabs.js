$(document).ready(function(){

    $('ul.tabs').on('click', 'li:not(.tab_active)', function() {
        $(this)
            .addClass('tab_active').siblings().removeClass('tab_active')
            .closest('div.container').find('div.tab__content').removeClass('tab__content_active').eq($(this).index()).addClass('tab__content_active');
    });
});