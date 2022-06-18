$(document).ready(function(){
    $('.slider__container').slick({
        arrows:true, /*Включить кнопки*/
        dots:true,  /*Включить точки*/
        adaptiveHeight:true, /*Высота слайдера подстраивается под высоту слайдов*/
        slidesToShow: 3, /*Показывать 3 слайда*/
        slidesToScroll: 2, /*Перелистывать по 2 слайда за раз*/
        speed: 1000, /*Скорость перелистывания в миллисекундах*/
        draggable:true, /*Перелистывание слайдов мышкой*/
        swipe:true, /*Перелистывание слайдов пальцем на сенсорном экране*/
        waitForAnimate:false, /*Слайды перелистываются настолько быстро, насколько быстро кликать по стрелкам*/
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