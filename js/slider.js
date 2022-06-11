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
                breakpoint: 1366,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 1060,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 533,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
    });
});