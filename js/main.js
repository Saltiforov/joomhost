$(function () {

    $('.reviews-slider').slick({
        infinite: true,
        slidesToScroll:2,
        slidesToShow:2,
        arrows:false,
        dots:true,
        responsive: [
            {
                breakpoint:1106,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    });
    $('.btn__menu').on('click',function () {
        $('.menu__list').slideToggle();
    })

})