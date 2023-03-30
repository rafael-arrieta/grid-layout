let container = document.getElementById('container')
let header = document.getElementById('header')
let footer = document.getElementById('footer')
let content = document.getElementById('content')

let headerChild = document.getElementById('headerChild')
let contentChild = document.getElementById('contentChild')
let footerChild = document.getElementById('footerChild')

let btn_one = document.getElementById('case1');
let btn_two = document.getElementById('case2');
let btn_three = document.getElementById('case3');
let btn_four = document.getElementById('case4');

function elementSizeInfo(element){
    elDimentions = element.getBoundingClientRect();
    text = `width:${elDimentions.width}px X height:${elDimentions.height}px`
    return text
}

btn_one.addEventListener('click', ()=>{
    container.style.gridTemplateAreas = '"contenido header header" "contenido header header" "contenido footer footer"';
    headerChild.innerText = `Header = ${elementSizeInfo(header)}`
    contentChild.innerHTML =`content = <br>${elementSizeInfo(content)}` 
    footerChild.innerText = `Footer = ${elementSizeInfo(footer)}`
})

btn_two.addEventListener('click', ()=>{
    container.style.gridTemplateAreas = '"contenido header header" "contenido header header" "footer footer footer"';
    headerChild.innerText = `Header = ${elementSizeInfo(header)}`
    contentChild.innerHTML =`content = <br>${elementSizeInfo(content)}` 
    footerChild.innerText = `Footer = ${elementSizeInfo(footer)}`
    
})

btn_three.addEventListener('click', ()=>{
    container.style.gridTemplateAreas = '"header header contenido" "header header contenido" "footer footer contenido"';
    headerChild.innerText = `Header = ${elementSizeInfo(header)}`
    contentChild.innerHTML =`content = <br>${elementSizeInfo(content)}` 
    footerChild.innerText = `Footer = ${elementSizeInfo(footer)}`
})

btn_four.addEventListener('click', ()=>{
    container.style.gridTemplateAreas = '"header header contenido" "header header contenido" "footer footer footer"';
    headerChild.innerText = `Header = ${elementSizeInfo(header)}`
    contentChild.innerHTML =`content = <br>${elementSizeInfo(content)}` 
    footerChild.innerText = `Footer = ${elementSizeInfo(footer)}`
})