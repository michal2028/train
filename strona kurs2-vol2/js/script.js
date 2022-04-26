document.addEventListener('DOMContentLoaded',function(){

const nav = document.querySelector('.navbar')

function addShadow(){

    if(window.scrollY >= 100){
        nav.classList.add('shadow-bg')
    }else{
        nav.classList.remove('shadow-bg')
    }
}
window.addEventListener('scroll',addShadow)
})

const navbarColapse = document.querySelector('#navbarNavAltMarkup')
const navLink = document.querySelector('.navbar-nav')
function closeNav(){
    navbarColapse.classList.remove('show')
    console.log('test')
}
navLink.addEventListener('click',closeNav);
