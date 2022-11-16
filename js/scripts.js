$(document).ready(function () {
    "use strict";

    // $('.header__navbar_bars').on('click', showBigMenu);
    // function showBigMenu() {
    //     $(this).toggleClass('active');
    // }

    if ($(this).innerWidth() <= 991) {
        $('.header__navbar_bars').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $('.header__navbar_list').removeClass('active')
            } else {
                $(this).addClass('active');
                $('.header__navbar_list').addClass('active')
            }
        });
        $('.header__navbar_item').on('click', function () {
            $('.header__navbar_item').not($(this)).children().removeClass('active')
            $(this).children().toggleClass('active')
        });
    } else {
        $('.header__navbar_bars').on('click', function () {
            $('.big-nav-list').removeClass('deactive')
        })
        $('.big-nav-list .header__navbar_bars').on('click', function () {
            $('.big-nav-list').addClass('deactive')
        })
    }



})