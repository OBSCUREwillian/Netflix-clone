$(document).ready(function(){

    let ua = new UAParser()
    let resultado = ua.getResult()
    let tipoDisp = resultado.device.type

    let carrosel1 = new InsCarousel('owl-carousel1').instancia(tipoDisp)
    let carrosel2 = new InsCarousel('owl-carousel2').instancia(tipoDisp)

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

})


//* Classe que instacia a classe Carrosel
class InsCarousel{
    constructor(nomeClasse){
        this.nomeClasse =  "." + nomeClasse
    }

    instancia(tipoDsp){
        let carrosel = new Carrosel(this.nomeClasse)
        carrosel.conteudo_carrosel()
        carrosel.owl_carousel(tipoDsp)
    }
}

class Carrosel{

    constructor(nomeClasse){
        this.nomeClasse =  nomeClasse
        this.navPrevClone
        this.owl
    }

    conteudo_carrosel(){
        for(let j = 0; j<2; j++){
            for(let i = 1; i<8; i++){

                //* LI
                let li = document.createElement('li')
                li.className = 'item'
                
                //* IMG
                let img = document.createElement('img')
                $(img).attr({
                    src: `../img/mini${i}.png`
                })
    
                let div = document.createElement('div')
                div.className = 'info-filme'
    
                //*ARVORE
                li.prepend(img)
                li.append(div)
                document.querySelector(this.nomeClasse).append(li)
            }
        }
    }

    owl_carousel(tipoDsp){

        let resize = false
        this.owl = $(this.nomeClasse).owlCarousel({

            onInitialized: (e)=>{
                if (!resize) {
                    
                    if(tipoDsp == 'mobile'){
                        // div.owl-stage-outer
                        $('div.owl-stage-outer').css('padding-left', '0')
                    }

                    this.next_prev(e)
                    window.onload = function(){
                        let navHeight = document.querySelector('.owl-item.active li img').offsetHeight
                        $('.owl-nav').css('height', `${navHeight+8}px`)
                    }

                    resize = true
                 }
            },

            onTranslate: e =>{
                // //* Habilitando o botão prev
                    $(this.navPrevClone).removeClass('prev-black')
                    if($(this.navPrevClone).prop("disabled")){
                        $(this.navPrevClone).prop("disabled", false)
                    }
                //*-----------------------------------------------------------|
            },

            onResized: e => {
                if (!resize) {
                    this.next_prev(e)
                    resize = true
                }

                setTimeout(function(){
                    let navHeight = document.querySelector('.owl-item.active li img').offsetHeight
                    $('.owl-nav').css('height', `${navHeight+8}px`)
                }, 100)
            },

            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],

            loop: tipoDsp != 'mobile',
            margin: 5,
            nav: tipoDsp != 'mobile',
            dots: false,
            mouseDrag: false,
            responsive: {

                0:{
                    stagePadding: 21,
                    items: 2,
                    slideBy: 2,
                    smartSpeed: 100,
                },

                500:{
                    items: 2,
                    stagePadding: 23,
                    slideBy: 2,
                    smartSpeed: 100,
                },

                700:{
                    stagePadding: 30,
                    slideBy: 3,
                    smartSpeed: 100,
                },

                800:{
                    items: 3,
                    slideBy: 3,
                    stagePadding: 33,
                    smartSpeed: 100,
                },

                924:{
                    stagePadding: 39,
                    slideBy: 3,
                    smartSpeed: 100,
                },

                1025:{
                    stagePadding: tipoDsp == 'mobile' ? 39 : '',
                    smartSpeed: 100,
                    items: tipoDsp == 'mobile' ? 4 : 4.37,
                    slideBy: 4,
                },

                1200:{
                    stagePadding: tipoDsp == 'mobile' ? 39 : '',
                    items: tipoDsp == 'mobile' ? 5 : 5.45,
                    smartSpeed: 100,
                    slideBy: 5,
                },

                1400:{
                    stagePadding: tipoDsp == 'mobile' ? 55 : '',
                    items: tipoDsp == 'mobile' ? 5 : 5.45,
                    smartSpeed: 100,
                    slideBy: 5,
                },

                
                1500:{
                    stagePadding: tipoDsp == 'mobile' ? 55 : '',
                    items: tipoDsp == 'mobile' ? 5 : 5.45,
                    smartSpeed: 100,
                    slideBy: 5,
                },

                
                1600:{
                    stagePadding: tipoDsp == 'mobile' ? 70 : '',
                    items: tipoDsp == 'mobile' ? 5 : 5.45,
                    smartSpeed: 100,
                    slideBy: 5,
                },

                1700:{
                    stagePadding: tipoDsp == 'mobile' ? 75 : '',
                    items: tipoDsp == 'mobile' ? 6 : 6.54,
                    smartSpeed: 100,
                    slideBy: 6,
                },
                
            }
        })


    }

    next_prev(e, navPrevClone){
        //* Nav Original (NEXT)

            //* Nav Original - aqui se encontra a navegação original mas escondendo o botão prev(display - none) para que só fique aparecendo o botão next - Alem de jogar a nav Original toda para a direita
            let nav = $(e.currentTarget).find('.owl-nav')

            $(nav).css('right', '0')
            let prev = $(nav).find('.owl-prev')
            prev.css('display', 'none')

        //*--------------------------------------------------|



        //* Nav Copia (PREV)

            //* Nav Clone - Aqui é o mesmo processo visto acima - só que criando um clone da Nav Original e escondendo o botão next - Assim sobrando o botão prev, pois como vinmos acima o botão next ficou a cargo da Nav original - Alem de jogar esse clone totalmente para a esquerda

            let navClone = $(nav).clone()
            navClone.css('left', '0')
            navClone.appendTo(e.currentTarget)
            $(navClone).find('.owl-next').css('display', 'none')

            let prevClone = $(navClone).find('.owl-prev')
            prevClone.css('display', 'block')
            $(prevClone).addClass('prev-black')
            $(prevClone).prop("disabled", true)

            // * Funcao subtitui o clique do botão prev da Nav Original para o botão prev da Nav Clone
            $(prevClone).on('click', function(){
                prev.click()
            })

            this.navPrevClone = prevClone
        //*--------------------------------------------------|

        this.hover_next_prev(e)
    }

    hover_next_prev(e){
        let itemActive = $(e.currentTarget).find('.owl-item')

        let iPrev = $(e.currentTarget).find('i.fas.fa-chevron-left')
        iPrev = iPrev[1]


        let iNext = $(e.currentTarget).find('i.fas.fa-chevron-right')
        iNext = iNext[0]


        $(itemActive).hover(

            e=>{
                $(iPrev).css('visibility', 'hidden')
                $(iPrev).css('transition-delay', '.7s')

                $(iNext).css('visibility', 'hidden')
                $(iNext).css('transition-delay', '.7s')
            },

            e=>{
                $(iPrev).css('visibility', 'visible')
                $(iPrev).css('transition-delay', '.1s')


                $(iNext).css('visibility', 'visible')
                $(iNext).css('transition-delay', '.1s')
            }

        )
    }
    
}
