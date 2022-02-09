'use strict'

const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const piscar = document.getElementById('piscar');
let idPiscar = null;

const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada');
}

const ligarLampada = () => {
   if(!lampadaQuebrada() || !idPiscar == null)
        lampada.src = './img/ligada.jpg';
}

const desligarLampada = () =>{
    if(!lampadaQuebrada())
        lampada.src = './img/desligada.jpg';
} 

const lampadaDesligada = () =>{
    return lampada.src.includes('desligada');
}
const ligarDesligar = () =>{
    if(lampadaDesligada())
        ligarLampada()
    else
        desligarLampada()
}   

const piscarLampada = () =>{
    if(idPiscar == null){
        idPiscar = setInterval(ligarDesligar, 500);
        piscar.textContent = 'Parar';
    
    }else{
        clearInterval(idPiscar);
        piscar.textContent = 'Piscar';
        idPiscar = null;
    }    
}

const quebrarLampada = () => lampada.src = './img/quebrada.jpg';

ligar.addEventListener('click', ligarLampada);
desligar.addEventListener('click', desligarLampada);
piscar.addEventListener('click', piscarLampada);
lampada.addEventListener('dblclick', quebrarLampada);