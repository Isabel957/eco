const btnCaracteristicas = document.getElementById('btn-caracteristicas');
const divCaracteristicas = document.getElementById('div-caracteristicas');
const imgCaracteristicas = document.getElementById('img-mobile');
const imgCaracteristicasNumber = document.getElementById('img-mobile-number');

const btnCloseCaracteristicas = document.getElementById('icon-close-caracteristicas');

btnCaracteristicas.addEventListener('click', ()=> {
    divCaracteristicas.style.display = 'block';
    imgCaracteristicasNumber.style.display = 'block';
    btnCaracteristicas.style.display = 'none';
    imgCaracteristicas.style.display = "none";
});

btnCloseCaracteristicas.addEventListener('click', ()=> {
    divCaracteristicas.style.display = 'none';
    imgCaracteristicasNumber.style.display = 'none';
    btnCaracteristicas.style.display = 'block';
    imgCaracteristicas.style.display = "block";
});

const opcionesBodega = document.querySelectorAll('.opcion-bodega');
opcionesBodega.forEach((opcionBodega)=> {
    opcionBodega.addEventListener('click', ()=>{
        opcionesBodega.forEach((opcionBo)=> {
            opcionBo.classList.remove('active');
        })
        opcionBodega.classList.add('active');
        
    })
})

const linksMenu = document.querySelectorAll('.nav-link');
linksMenu.forEach((linkMenu)=> {
    linkMenu.addEventListener('click', ()=>{
        linksMenu.forEach((linkMenuu)=> {
            linkMenuu.classList.remove('activemenu');
        })
        linkMenu.classList.add('activemenu');
        
    })
})

const size1 = document.getElementById('size1');
const size2 = document.getElementById('size2');
const size3 = document.getElementById('size3');
const imgMapa = document.getElementById('img-mapa');

document.querySelector('.option-bodega1').addEventListener('click', ()=> {
    size1.textContent= "429,34 m2";
    size2.textContent= "60,6 m2";
    size3.textContent= "489,94 m2";
    imgMapa.src= "assets/img/bodega1.png";
})
document.querySelector('.option-bodega2').addEventListener('click', ()=> {
    size1.textContent= "294,53 m2";
    size2.textContent= "60,6 m2";
    size3.textContent= "429,34 m2";
    imgMapa.src= "assets/img/bodega2.png";
})
document.querySelector('.option-bodega3').addEventListener('click', ()=> {
    size1.textContent= "229,53 m2";
    size2.textContent= "60,6 m2";
    size3.textContent= "355,13 m2";
    imgMapa.src= "assets/img/bodega3.png";
})
document.querySelector('.option-bodega4').addEventListener('click', ()=> {
    size1.textContent= "429,34 m2";
    size2.textContent= "60,6 m2";
    size3.textContent= "489,94 m2";
    imgMapa.src= "assets/img/bodega4.png";
})