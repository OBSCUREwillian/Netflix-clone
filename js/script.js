$(document).ready(function(){

    $('#lightSlider').lightSlider({
        controls: false,
        prevHtml: '<i class="fas fa-chevron-left"></i>',
        nextHtml: '<i class="fas fa-chevron-right"></i>',
        slideMargin: 1,
	    slidesToScroll: 4,
        loop: false,
        responsive: [

            {
                breakpoint: 2000,
                settings: {
                    item: 7.61,
                    slideMove: 5,
                    controls: true
                }
            },
            
            {
                breakpoint: 1700,
                settings: {
                    item: 6.53,
                    slideMove: 4,
                    controls: true

                }
            },

            {
                breakpoint: 1400,
                settings: {
                    item: 5.44,
                    slideMove: 3,
                    controls: true

                }
            },

            {
                breakpoint: 1100,
                settings: {
                    item: 4.35,
                    slideMove: 3,
                    controls: true

                }
            },

            {
                breakpoint: 1024,
                settings: {
                    item: 4.18,
                    slideMove: 3,
                    controls: false
                }
            },

            {
                breakpoint: 800,
                settings: {
                    item: 3.14,
                    slideMove: 3,
                    controls: false


                }
            },

            {
                breakpoint: 500,
                settings: {
                    item: 2.09,
                    slideMove: 2,
                    controls: false
                }
            },


        ]
    })

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

    imagens()


})


function imagens(){
    //* CRIANDO LI E IMAGENS
    for( let j = 1; j<4; j++){
        for(let i = 1; i<8; i++){

            $('#lightSlider').prepend('<li class="li-img"><img id="img"></li>')

            $('#img').attr({
                src: `../img/mini${i}.png`
            })
        }
    }
}
