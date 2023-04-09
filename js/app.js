const menuHamburguer = document.querySelector('.hamburguer-menu')
const navContainer = document.querySelector('.nav-container')

function openMenu (){
    navContainer.classList.toggle('active')
}

menuHamburguer.addEventListener('click', () => openMenu())