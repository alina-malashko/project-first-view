$(document).ready(function(){
    $('.slider__container').slick({
        arrows:true, 
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 1000,
        draggable:true,
        swipe:true,
        waitForAnimate:false,
        responsive:[
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 1101,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 534,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
    });
});