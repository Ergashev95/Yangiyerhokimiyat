$(document).ready(function () {


    // slick slider start
    $('.news-slider').slick({
        nav: true,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // handle navbar start
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

    // handle count start
    var a = 0;
    $(window).scroll(function () {
        var numbersTop = $('.numbers').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > numbersTop) {
            $('.numbers .counter-value').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {

                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }

    });




})