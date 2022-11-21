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
            $('section, div').removeClass('bg-black-theme')
            $('h1, h2, h3, h4, h5, h6, li, a, p, span, i, div, td, th').removeClass('color-black-theme')
        }
        function grayTheme() {
            document.querySelector('body').style.mixBlendMode = 'luminosity'
            $('section, div').removeClass('bg-black-theme')
            $('h1, h2, h3, h4, h5, h6, li, a, p, span, i, div, td, th').removeClass('color-black-theme')
        }
        function whiteBlackTheme() {
            document.querySelector('body').style.mixBlendMode = 'luminosity'
            $('section, div:not(.carousel-caption)').addClass('bg-black-theme')
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
        $('.header__navbar_item').on('mouseover', function () {
            // $('.header__navbar_item').not($(this)).children().removeClass('active')
            $(this).children().addClass('over-class')
        });
        $('.header__navbar_item').on('mouseleave', function () {
            // $('.header__navbar_item').not($(this)).children().removeClass('active')
            $(this).children().removeClass('over-class')
        });
    }

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

    // if ($('.appeal-statistic').length > 0) {
    //     $('.progress-part-count').countTo();
    // }

    // pagination start
    // if ($('.news-page-box').length > 0) {
    //     function renderNewsElement(data) {
    //         var html = $('.news-page-container');
    //         $.each(data, function (index, item) {
    //             html.append(item);
    //         });
    //         return html;
    //     }
    //     $('.news-page-container').pagination({
    //         dataSource: $('.news-page-box'),
    //         callback: function (data, pagination) {
    //             var html = renderNewsElement(data);
    //             $('.news-page-container').append(html);
    //         }
    //     })
    // }





})

// calendar start
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.calendar');
    if (calendarEl) {
        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            initialDate: '2022-11-07',
            selectable: true,
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'All Day Event',
                    start: '2022-11-01'
                },
                {
                    title: 'Long Event',
                    start: '2022-11-07',
                    end: '2022-11-10'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2022-11-09T16:00:00'
                },
                {
                    groupId: '999',
                    title: 'Repeating Event',
                    start: '2022-11-16T16:00:00'
                },
                {
                    title: 'Conference',
                    start: '2022-11-11',
                    end: '2022-11-13'
                },
                {
                    title: 'Meeting',
                    start: '2022-11-12T10:30:00',
                    end: '2022-11-12T12:30:00'
                },
                {
                    title: 'Lunch',
                    start: '2022-11-12T12:00:00'
                },
                {
                    title: 'Meeting',
                    start: '2022-11-12T14:30:00'
                },
                {
                    title: 'Birthday Party',
                    start: '2022-11-18T10:18:00'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: '2022-11-18'
                }
            ]
        });
        calendar.render();
    }
});