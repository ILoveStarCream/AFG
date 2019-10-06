
// Хеадер меню
//Кликаем по hide-nav происходит событие
$(document).on('click', '.hide-nav', function () {

    //вставляем в переменную hide-nav
    let hideNav = $('.hide-nav');

    //вставляем в переменную меню которое будет искать
    let nav = $('.header-nav');

    //При нажатие на hide-nav добавляется класс active
    $(hideNav).toggleClass('active');

    // Делаем условие : if=если меню не видно и оно скрыто то при нажатие будет вскрываться
    if (nav.is(':visible')) {
        nav.slideUp();

        // в противном случае оно будет прятаться 
    } else {
        nav.slideDown();
    }
})
$('.topslider-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.panigation-wrap',
    infinite: true,
});
$('.panigation-wrap').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.topslider-wrap',
    focusOnSelect: true,
    infinite: true,
});

// $('.topslider-wrap').slick({
//   });
