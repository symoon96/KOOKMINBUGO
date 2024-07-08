$(document).ready(function(){
    const visualSwiper = new Swiper('.main .visual .swiper', {
        loop: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2500,
        },
    });
})