$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    const mainVisualSlide = new Swiper('.main_visual_slide', {
        parallax: true,
        loop: true,
        speed: 1000,
        play: {
            autoplay: false,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '#mainVisual .arrows .next',
            prevEl: '#mainVisual .arrows .prev',
        },

    });

    const mainCustomerSlide = new Swiper('.main_customer_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '#mainCustomer .arrows .next',
            prevEl: '#mainCustomer .arrows .prev',
        },
    });


    const lenis = new Lenis({
        duration: 3,
    })

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    // })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);


    AOS.init();

})

