$(function () {
    $('.brandbox_content .itm_box').slick({
        slidesToShow: 1,
        speed: 800,
    })
});



$('.brandbox_content').on('afterChange', function (e, s, c) {
    $('.brandbox_content .itm_box').removeClass('on');
    $('.brandbox_content .itm_box').eq(c).addClass('on')
});

$('.brandbox_content .itm_box').on('click', function () {
    $('.brandbox_content').slick('slickPrev')
});

$('.brandbox_content .itm_box').on('click', function () {
    $('.brandbox_content').slick('slickNext')
});