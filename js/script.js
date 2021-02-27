$(document).ready(function(){
    
    carrosel1 = new InsCarousel('owl-carousel1').instacia()

    carrosel2 = new InsCarousel('owl-carousel2').instacia()


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
        let carrosel2 = new Carrosel(this.nomeClasse)
        carrosel2.conteudo_carrosel()
        carrosel2.owl_carousel()
    }
    
}

class Carrosel{
    
    constructor(nomeClasse){
        this.nomeClasse =  nomeClasse
    }


    conteudo_carrosel(){

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

        let li = document.createElement('li')
        document.querySelector(this.nomeClasse).append(li)
    }


    owl_carousel(){

        $(this.nomeClasse).owlCarousel({

            navText: [
                '<i class="fas fa-chevron-left"></i>',
                '<i class="fas fa-chevron-right"></i>'
            ],

            margin: 5,
            touchDrag: false,
            nav: false,
            dots: false,
            loop: true,
            responsive: {
                1700:{
                    items: 6.56,
                    smartSpeed: 100,
                    slideBy: 6,
                }
            }
        })
    }

    
}


function carousel(id){
    $(id).owlCarousel({

        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        margin: 5,
        touchDrag: false,
        nav: false,
        dots: false,
        loop: true,
        responsive: {
            1700:{
                items: 6.5,
                smartSpeed: 100,
                singleItem: false,
                slideBy: 6,
            }
        }
    })
}

// * GERADOR DE 'LI' COM IMAGENS
function gerarImagens(){
    //* CRIANDO LI E IMAGENS
    

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
        document.getElementById('owl-carousel1').append(li)
    }

    let li = document.createElement('li')
    document.getElementById('owl-carousel1').append(li)

}
