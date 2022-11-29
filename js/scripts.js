$(document).ready(function () {

    {// eye function start
        let themeName = localStorage.getItem('theme');
        if (themeName == 'simple-theme' || themeName == undefined) {
            simpleTheme()
        }
        if (themeName == 'gray-theme') {
            grayTheme()
        }
        if (themeName == 'white-black-theme') {
            whiteBlackTheme()
        }
        if ($('.eye-function-btn').length > 0) {
            $('.simple-theme').on('click', function () {
                localStorage.setItem('theme', 'simple-theme')
                simpleTheme()
            })
            $('.gray-theme').on('click', function () {
                localStorage.setItem('theme', 'gray-theme')
                grayTheme()
            })
            $('.white-black-theme').on('click', function () {
                localStorage.setItem('theme', 'white-black-theme')
                whiteBlackTheme()
            })
        }
        function simpleTheme() {
            document.querySelector('body').style.mixBlendMode = 'normal'
            $('section, div, td, th').removeClass('bg-black-theme')
            $('h1, h2, h3, h4, h5, h6, li, a, p, span, i, div, td, th').removeClass('color-black-theme')
        }
        function grayTheme() {
            document.querySelector('body').style.mixBlendMode = 'luminosity'
            $('section, div, td, th').removeClass('bg-black-theme')
            $('h1, h2, h3, h4, h5, h6, li, a, p, span, i, div, td, th').removeClass('color-black-theme')
        }
        function whiteBlackTheme() {
            document.querySelector('body').style.mixBlendMode = 'luminosity'
            $('section, div:not(.carousel-caption), td, th').addClass('bg-black-theme')
            $('h1, h2, h3, h4, h5, h6, li, a, p, span, i, div, td, th').addClass('color-black-theme')
        }
    }

    {// window-zoom and font-change
        if ($('.form-range').length > 0) {
            $('.window-range').val(0)
            $('.window-range').on('input', function () {
                $(this).prev().children().html($('.window-range').val() + "%")
                $('.eye-dropdown-menu .eye-item').css({
                    fontSize: `${18 + parseInt($(this).val() / 25)}px`
                })
            })

            $('.page-range').val(0)
            $('.page-range').on('input', function () {
                $(this).prev().children().html($(this).val() + "%")
                document.body.style.zoom = 100 + parseInt($(this).val() / 3) + "%";
            })
        }
    }


    // slick slider start
    $('.example-slider').slick({
        nav: false,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.news-slider').slick({
        nav: false,
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
    $('.media-image-list').slick({
        nav: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
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
    $('.media-video-list').slick({
        nav: false,
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
    $('.header__navbar_item').on('mouseover', function () {
        if ($(window).innerWidth() > 991) {
            $(this).children().addClass('over-class')
        }
    });
    $('.header__navbar_item').on('mouseleave', function () {
        if ($(window).innerWidth() > 991) {
            $(this).children().removeClass('over-class')
        }
    });
    $('.header__navbar_item').on('click', function () {
        if ($(window).innerWidth() <= 991) {
            $('.header__navbar_item').not($(this)).children().removeClass('active')
            $(this).children().toggleClass('active over-class')
        }
    });
    $('.header__navbar_bars').on('click', function () {
        if ($(window).innerWidth() <= 991) {
            if ($('.header__navbar_bars').hasClass('active')) {
                $('.header__navbar_bars').removeClass('active');
                $('.header__navbar_list').removeClass('active')
            } else {
                $('.header__navbar_bars').addClass('active');
                $('.header__navbar_list').addClass('active')
            }
        } else {
            $('.big-nav-list').removeClass('deactive')
            $('.header__navbar_bars').addClass('active')
            $('.big-nav-list .header__navbar_bars').on('click', function () {
                $('.big-nav-list').addClass('deactive')
                $('.header__navbar_bars').removeClass('active')
            })
        }
    })

    // handle count start
    var a = 0, b = 0;
    $(window).scroll(function () {
        if ($('.numbers').length > 0) {
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
        }
        if ($('.appeal-statistic').length > 0) {
            var numbersTop = $('.appeal-statistic').offset().top - window.innerHeight;
            if (b == 0 && $(window).scrollTop() > numbersTop) {
                $('.progress-part-count').each(function () {
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
                b = 1;
            }
        }
    });

    // copy-button start
    if ($('.copy-button').length > 0) {
        $('.copy-button').on('click', function () {
            let pageRoute = window.location.href
            navigator.clipboard.writeText(pageRoute)
            $('.toast-body').html("Nusxalandi: " + pageRoute)
            const toast = new bootstrap.Toast($('#liveToast '))
            toast.show()
        })
    }

})