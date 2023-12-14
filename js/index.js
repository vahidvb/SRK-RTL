$(document).ready(function (){
    $('[data-bs-toggle=tooltip]').tooltip();

// start close navbar
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler i').toggleClass('d-none');
    })
// end close navbar

/* remove pre loading section */
    $('.page-preloader-cover').delay(3000).fadeOut('slow');
/* remove pre loading section */

// start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('header').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('header').removeClass('sticky');
        }
    });

    $(".btn-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    })
// end header & button-up show

// start team-slider
    $('.team-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 25,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class=\"fas fa-angle-right\"></i>","<i class=\"fas fa-angle-left\"></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });
// end team-slider

// start support-slider
    $('.support-slider').owlCarousel({
        loop: true,
        rtl: true,
        margin: 45,
        autoWidth: false,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class=\"fas fa-angle-right\"></i>","<i class=\"fas fa-angle-left\"></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
// end support-slider

// start counter
    $('.counter').waypoint(function() {
            $(".number-counter").each(function () {
                const options = {
                    useEasing: true,
                    useGrouping: false,
                    separator: ',',
                    decimal: '.',
                };
                const counter = new CountUp(this, 0, $(this).html(), 0, 9.5, options);
                if (!counter.error) {
                    counter.start();
                } else {
                    console.error(counter.error);
                }
            });
            this.destroy();
        }
        , {
            offset: '100%'
        });
// end counter
})