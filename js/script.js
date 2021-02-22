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

    let arrayImgs = []
    let arrayLis = [] 

    arrayImgs = $('.li-img>img')
    arrayLis = $('.li-img')

    let card = new Card(arrayImgs, arrayLis)
    card.cardHover()


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


class Card{

    constructor(arrayImgs, arrayLis){
        this.arrayImgs = []
        this.arrayLis = []

        this.arrayImgs = arrayImgs
        this.arrayLis = arrayLis

        this.espacoCarta = $('.carta-hover')
    }

    cardHover(){
        let qtdImgs = this.arrayImgs.length

        let div = document.createElement('div')
        div.className = 'carta-hover'

        for(let i = 0; i < qtdImgs; i++){

            $(this.arrayImgs[i]).attr({
                id: `img-${i}`
            })
            
            $(this.arrayLis[i]).attr({
                id: `li-${i}`
            })

            let img = document.getElementById(`img-${i}`)


            $(`#li-${i}`).on('mouseenter', function(e){
                div.prepend(img)
                console.log($(`#li-${i}`))
                if(e.target.id == 'li-0' || e.target.id == 'img-0'){

                    $(`#li-${i}`).prepend(div)
                    
                    $('.carta-hover').css('margin-left', '25px')
                    $('.carta-hover').css('visibility', 'visible')
                    console.log('sim é')

                }else{
                    
                    $(`#li-${i}`).prepend(div)

                    $('.carta-hover').css('margin-left', '0px')
                    $('.carta-hover').css('visibility', 'visible')
                }

                
            })

            

            $(`#li-${i}`).on('mouseleave', function(e){
                $(`#li-${i}`).append(img)

                $(div).remove()
            })

        }
    }
}




// function cardsHover(){

//     //* APLICANDO ID NAS IMAGENS E ADICIONANDO O EFEITO DE HOVER
//     let arrayImgs = []

//     arrayImgs = $('#li-img>img')

//     let qtdImgs = arrayImgs.length

//     for(let i = 0; i< qtdImgs; i++){

//         $(arrayImgs[i]).attr({
//             id: `img-${i}`
//         })

//         $(`#img-${i}`).hover(

//             e=>{
//                 console.log('entrou')
//             },

//             e=>{
//                 console.log('saiu')
//             }
//         )
//     }

// }