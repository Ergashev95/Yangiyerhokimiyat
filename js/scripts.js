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

// calendar start
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.querySelector('.calendar');
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
});