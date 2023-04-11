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

//Skills

const tecnologies = document.querySelectorAll('.tecnologies button')
const containerToTecnologie = document.querySelector('#text-container')

function showTecnologies (tecnologie){
    if(tecnologie === 'HTML'){
        containerToTecnologie.innerHTML = 'HTML (Hypertext Markup Language) é a linguagem de marcação usada para criar páginas da web. É composto de uma série de elementos HTML que são usados para estruturar e apresentar o conteúdo de uma página da web.'
    }
    else if(tecnologie === 'CSS'){
        containerToTecnologie.innerHTML = 'CSS (Cascading Style Sheets) é uma linguagem de estilo usada para controlar a apresentação de documentos HTML e XML. Ele é usado para definir o layout, as cores, as fontes, as animações e outros aspectos visuais de uma página da web.'
    }
    else if(tecnologie === 'Javascript'){
        containerToTecnologie.innerHTML = 'JavaScript é uma linguagem de programação utilizada para adicionar interatividade e dinamicidade em páginas da web. É uma linguagem de script do lado do cliente, o que significa que ela é executada no navegador do usuário, permitindo que a página reaja aos eventos do usuário, como cliques em botões, movimentos do mouse, pressionamentos de tecla, entre outros.'
    }
    else if(tecnologie === 'ReactJs'){
        containerToTecnologie.innerHTML = 'O React é uma biblioteca JavaScript popular utilizada para criar interfaces de usuário escaláveis e reutilizáveis em aplicações web. Ele utiliza componentes de UI e a renderização virtual para melhorar a performance e a velocidade da aplicação. O React é altamente flexível e pode ser utilizado em diferentes contextos, tornando-se uma ferramenta essencial para o desenvolvimento moderno de aplicações web.'
    }
    else if(tecnologie === 'CSS-in-JS'){
        containerToTecnologie.innerHTML = 'CSS-in-JS é uma técnica de desenvolvimento front-end que permite escrever estilos CSS diretamente em arquivos JavaScript, eliminando a necessidade de arquivos CSS separados. Isso significa que o CSS é escrito dentro do próprio componente, tornando mais fácil de gerenciar, compartilhar e reutilizar os estilos.'
    }
}

tecnologies.forEach(tecnologie => tecnologie.addEventListener('click', () => showTecnologies(tecnologie.innerHTML)))

// Scroll Reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

// Scroll Home
sr.reveal('.title-container', {})
sr.reveal('.main-img', {origin: 'right', delay: 200})

//Scroll About
sr.reveal('.section-titulo', {})
sr.reveal('.content img', {origin: 'left'})
sr.reveal('.conteudo', {})

//Scroll Skills
sr.reveal('#text-container', {delay: 200})
sr.reveal('.tecnologies', { delay: 200})

//Scroll Portfolio
sr.reveal('.projeto1', {delay: 100})
sr.reveal('.projeto2', {delay: 200})
sr.reveal('.projeto3', {delay: 300})
sr.reveal('.projeto4', {delay: 400})
sr.reveal('.projeto5', {delay: 500})
sr.reveal('.projeto6', {delay: 600})
