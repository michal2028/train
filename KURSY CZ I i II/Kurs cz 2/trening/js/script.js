// const btn1 = document.querySelector('.arrow')
// const arrow = document.querySelector('.fas')
// const picture = document.querySelector('.item1')

// function showPicture(){
//     picture.classList.toggle('show')
//     if(picture.classList.contains('show')){
//         arrow.classList.add('rotateArrow')
//     }else{
//         arrow.classList.remove('rotateArrow')
//     }
// }

// btn1.addEventListener('click', showPicture)

const sizeUp = document.querySelector('.size-up')
const sizeDown = document.querySelector('.size-down')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize =20;

function bigText(){
    fontSize+=20;
    p.style.fontSize = fontSize + 'px'
}

function lowerText(){
    
    if(fontSize == 20){
        console.log('za duzo')
    }else{
        fontSize-=20;
        p.style.fontSize = fontSize + 'px'
    }
    
}
function changeColor(){
    p.classList.add('text-js-color')
}

sizeUp.addEventListener('click', bigText)
sizeDown.addEventListener('click',lowerText)
btnColor.addEventListener('click',changeColor)