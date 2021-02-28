$(document).ready(function(){
    
    let carrosel1 = new InsCarousel('owl-carousel1').instacia()
    let carrosel2 = new InsCarousel('owl-carousel2').instacia()
    let carrosel3 = new InsCarousel('owl-carousel3').instacia()


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


class InsCarousel{
    constructor(nomeClasse){
        this.nomeClasse =  "." + nomeClasse
    }

    instacia(){
        let carrosel = new Carrosel(this.nomeClasse)
        carrosel.conteudo_carrosel()
        carrosel.owl_carousel()
    }
}

class Carrosel{
    
    constructor(nomeClasse){
        this.nomeClasse =  nomeClasse
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

    owl_carousel(){

        $(this.nomeClasse).owlCarousel({
            
            onInitialized: (e)=>{
                //* Desabilitando o botão prev 
                    $('.owl-carousel .owl-nav button.owl-prev').css(
                        {"background-color": "rgb(20, 20, 20)"}
                    )
                    $('.owl-prev').prop('disabled', true)
                    $('.owl-prev i').css('color', 'rgb(20, 20, 20)')
                //*--------------------------------------------------|

                
                //* Arrumando barra de nav sobrepondo o efeito hover do item(filme/serie)
                    $('.owl-item.active').hover(
                        // e=>{
                        //     $('div.owl-nav').css('z-index', '-1')
                        //     $('div.owl-stage-outer, .owl-stage, .owl-carousel').css('z-index', '2')
                        // },
                        // e=>{
                        //     $('div.owl-nav').css('z-index', '3')
                            
                        // }
                    )
                
                    // div.owl-nav - DIMINUIR - ZINDEX
                // div.owl-stage-outer, .owl-stage, .owl-carousel - AUMENTAR ZINDEX
                
            },

            onTranslate: e =>{
                //* Habilitando o botão prev
                    let prev = e.currentTarget.children[1].children[0] 
                    if($(prev).css('background-color') == 'rgb(20, 20, 20)'){

                        $(prev).prop('disabled', false)
                        $(prev).addClass('btn-prev')
                        $(prev.children[0]).css('color', '#fff')
                    }
                //*-----------------------------------------------------------|
        
            },

            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],


            margin: 5,
            mouseDrag: false,
            nav: true,
            dots: false,
            loop: true,
            responsive: {
                1700:{
                    items: 6.54,
                    smartSpeed: 100,
                    slideBy: 6
                }
            }
        })
    }
    
}
