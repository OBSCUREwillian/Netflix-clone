$(document).ready(function(){
    
    let carrosel1 = new InsCarousel('owl-carousel1').instancia()
    let carrosel2 = new InsCarousel('owl-carousel2').instancia()
    let carrosel3 = new InsCarousel('owl-carousel3').instancia()


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

    instancia(){
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

        let navPrevClone
        let owl = $(this.nomeClasse).owlCarousel({
            
            onInitialized: (e)=>{

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

                    navPrevClone = prevClone
                //*--------------------------------------------------|

                
                
                //* Movendo os items-active(primeiro e ultimo) do carrosel para que não colidão com os botões prev e next
                    // let itens = $(e.currentTarget).find('.owl-item.active')
                    // let primItem = itens[0]
                    // let ultmItem = itens[5]
                    // $(primItem).on('mouseenter', function(e){

                    //     $(e.currentTarget).css( 'left', '70px')

                    // })
                    // $(primItem).hover(
                    //     e=>{
                    //     },
                    //     e=>{
                    //         $(e.currentTarget).css('left', '0px')



                    //     }
                    // )
                //*--------------------------------------------------|

                 
            },

            

            onTranslate: e =>{
                
                // //* Habilitando o botão prev
                    $(navPrevClone).removeClass('prev-black')
                    if($(navPrevClone).prop("disabled")){
                        $(navPrevClone).prop("disabled", false)
                    }

                //*-----------------------------------------------------------|

                   
                
            },

            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],
            stagePadding: 80,
            margin: 5,
            mouseDrag: false,
            nav: true,
            dots: false,
            loop: true,
            responsive: {
                800:{
                    items: 3.54,
                },
                1100:{
                    items: 4.54,
                },
                1400:{
                    items: 5.54,
                },
                1700:{
                    items: 6.001,
                    smartSpeed: 100,
                    slideBy: 6
                },
                
            }
        })


    }
    
}
