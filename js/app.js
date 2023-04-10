const menuHamburguer = document.querySelector('.hamburguer-menu')
const navContainer = document.querySelector('.nav-container')

function openMenu (){
    navContainer.classList.toggle('active')
    menuHamburguer.classList.toggle('active')
}

menuHamburguer.addEventListener('click', () => openMenu())

// Link para fechar o menu

const links = document.querySelectorAll('.nav-container ul li')

function closeMenu (){
    navContainer.classList.remove('active')
    menuHamburguer.classList.remove('active')
}

links.forEach(link => link.addEventListener('click', () => closeMenu()))

//Texto animado

const titulo = document.getElementById('titulo-animado')
const subtitulo = document.getElementById('subtitulo-animado')
const texto = 'Olá, me chamo Ernesto Neto :)'
const texto2 = 'Desenvolvedor Frontend'



function subtituloAnimado (texto){
    const char2 = texto.split('').reverse()

    const typer2 =setInterval(() => {
        if(!char2.length){
            return clearInterval(typer2)
        }
        const letra = char2.pop()
    
        subtitulo.innerHTML += letra 
    }, 90);
}

function tituloAnimado (texto, texto2){
    const char = texto.split('').reverse()

    const typer = setInterval(() => {
        if(!char.length){
            subtituloAnimado(texto2)
            return clearInterval(typer)
        }

        const letra = char.pop()

        titulo.innerHTML += letra
    }, 90);
}

tituloAnimado(texto, texto2)

//

ScrollReveal().reveal('.sobre')
ScrollReveal().reveal('.sobre-titulo')