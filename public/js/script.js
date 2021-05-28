
$(document).ready(function(){

    $(window).scroll(function(){
        let nav = $('header')
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height())
    })

    let ua = new UAParser()
    let resultado = ua.getResult()
    let tipoDisp = resultado.device.type
    
    
    $('.hamburguer').click( ()=>{
        if( $('nav').css('visibility') == 'visible'){

            $('nav').css('visibility', 'hidden')
            $('nav').removeClass('navOpen')
            $('.overlay').css('visibility', 'hidden')

        }else{

            $('nav').css('visibility', 'visible')
            $('nav').addClass('navOpen')
            $('.overlay').css('visibility', 'visible')

        }
    })



    $('.slick').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: '4vw',
        
        prevArrow: '<button type="button" class="slick-btnPrev"><i class="bi bi-chevron-left"></i></button>',

        nextArrow: '<button type="button" class="slick-btnNext"><i class="bi bi-chevron-right"></i></button>'
    })

    $('.slick').slick('slickSetOption', 'slidesToScroll', 6, true);
})



class Carousel {
    constructor(name){
        this.name = name
    }

    slick(){
        
    }
}