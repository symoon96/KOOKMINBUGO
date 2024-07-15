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

    dateFormatChange()
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