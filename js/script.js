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
        this.nomeClasse = nomeClasse
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

                // * div info-filme
                let div = document.createElement('div')
                div.className = 'info-filme'


                    //* div btns-info-filme
                    let btnsInfoFilme = document.createElement('div')
                    btnsInfoFilme.className = 'btns-info-filme'


                    // Botão play
                    let playBtn = document.createElement('button')
                    playBtn.id = 'play-btn'
                    playBtn.className = 'btn-redondo'

                    let playIcone = document.createElement('i')
                    playIcone.className = 'fas fa-play'


                    // Botão mais
                    let maisBtn = document.createElement('button')
                    maisBtn.id = 'mais-btn'
                    maisBtn.className = 'btn-redondo'
                    
                    let maisIcone = document.createElement('i')
                    maisIcone.className = "bi bi-plus"
                    

                    // Botão like
                    let likeBtn = document.createElement('button')
                    likeBtn.id = 'like-btn'
                    likeBtn.className = 'btn-redondo'
                    
                    let likeIcone = document.createElement('i')
                    likeIcone.className = 'bi bi-hand-thumbs-up'


                    // Botão dislike
                    let dislikeBtn = document.createElement('button')
                    dislikeBtn.id = 'dislike-btn'
                    dislikeBtn.className = 'btn-redondo'
                    
                    let dislikeIcone = document.createElement('i')
                    dislikeIcone.className = 'bi bi-hand-thumbs-down'
                    //* FIM div btns-info-filme ----------------------


                    //* div btns-info-filme2
                    let btnsInfoFilme2 = document.createElement('div')
                    btnsInfoFilme2.className = 'btns-info-filme'

                    let btnMaisOpcoes = document.createElement('button')
                    btnMaisOpcoes.id = 'btnMaisOpcoes'
                    btnMaisOpcoes.className = 'btn-redondo'

                    let maisOpcoesIcone = document.createElement('i')
                    maisOpcoesIcone.className = 'bi bi-chevron-compact-down'
                    //* FIM div btns-info-filme2 -----------------------

                    
                    // *-----------------------------------------------
                    let serieFilmeInfos = document.createElement('div')
                    serieFilmeInfos.id = 'serieFilmeInfo'

                    let relevancia = document.createElement('span')
                    relevancia.id = 'relevancia'
                    relevancia.innerHTML = '98% relevante'

                    let classificacao = document.createElement('img')
                    classificacao.id = 'classificacao'
                    classificacao.src = '../img/16.png'

                    let tempoOuTemporadas = document.createElement('span')
                    tempoOuTemporadas.id = 'tempoOuTemporadas'
                    tempoOuTemporadas.innerHTML = '4 Temporadas'

                    let definicao = document.createElement('img')
                    definicao.id = 'definicao'
                    definicao.src = '../img/hd.png'
                    
                    // *-----------------------------------------------

                
                //* FIM div info-filme

                //*ARVORE DOM
                li.prepend(img)

                playBtn.append(playIcone)
                btnsInfoFilme.append(playBtn)

                maisBtn.append(maisIcone)
                btnsInfoFilme.append(maisBtn)
                
                likeBtn.append(likeIcone)
                btnsInfoFilme.append(likeBtn)

                dislikeBtn.append(dislikeIcone)
                btnsInfoFilme.append(dislikeBtn)

                btnMaisOpcoes.append(maisOpcoesIcone)
                btnsInfoFilme2.append(btnMaisOpcoes)

                serieFilmeInfos.append(relevancia)
                serieFilmeInfos.append(classificacao)
                serieFilmeInfos.append(tempoOuTemporadas)
                serieFilmeInfos.append(definicao)

                div.append(btnsInfoFilme)
                div.append(btnsInfoFilme2)
                div.append(serieFilmeInfos)
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
                console.log(this.navPrevClone)
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

                600:{
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

    next_prev(e){
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
