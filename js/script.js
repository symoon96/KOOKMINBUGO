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

    const deceasedSwiper = new Swiper('.memoriam .bulletin .deceased-area .deceased-swiper .swiper', {
        loop: true,
        autoplay: {
            delay: 2500,
        },
        effect: "fade",
        speed: 3000,
    });

    const wreathSwiper = new Swiper('.memoriam .bulletin .wreath-swiper .swiper', {
        loop: true,
        autoplay: {
            delay: 2500,
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 3000,
        centeredSlides: true,
    });

    const memorialSwiper = new Swiper('.memoriam .bulletin .memorial-swiper .swiper', {
        loop: true,
        autoplay: {
            delay: 2500,
        },
        slidesPerView: 'auto',
        spaceBetween: 10,
        speed: 3000,
        centeredSlides: true,
    });

    dateFormatChange();
    importantStyle()
})

function dateFormatChange(){
    $('.date input[type="date"]').change(function(){
        let date = $(this).val();
        let dateYear = date.substr(0, 4);
        let dateMonth = date.substr(5, 2);
        let dateDay = date.substr(8, 2);

        $(this).closest('.date').find('input[type="text"]').val(dateYear + '.' + dateMonth + '.' + dateDay)
    });
}

function openDubleModal(id, el){
    let target = $(id)
    let thisEl = $(el).closest('.modal')

    console.log(thisEl)

    target.modal('show')
    thisEl.css('z-index', 1054)
    $('.modal-backdrop').last().css('z-index', 1054)
}

function importantStyle(){
    if($('.form.row .form-tit .tit-area .tit').length > 0){
        $('.form.row .form-tit .tit-area .tit').each(function(){
            console.log()
            if($(this).find('strong.txt-blue').length > 0){
                $(this).closest('.form').addClass('imp')
                $(this).closest('.form').find('input[type="text"], input[type="password"]').attr('required', 'required')
            }
        })
    }
}