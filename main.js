"use strict"

const semaforo = document.getElementById("semaforo")
const verde = document.getElementById("verde")
const amarelo = document.getElementById("amarelo")
const vermelho = document.getElementById("vermelho")
const automatico = document.getElementById("automatico")



const alternarVerde = () =>{
   semaforo.src ='./img/verde.png'
}
const alternarAmarelo = ()=>{
    semaforo.src='./img/amarelo.png'
}
const alternarVermelho = ()=>{
    semaforo.src='./img/vermelho.png'
}

const trocaDeCores = () =>{
  let cor


    }

//automatico 
const alternarAutomatico = ()=>{
    

}

verde.addEventListener('click' ,alternarVerde)
amarelo.addEventListener('click' ,alternarAmarelo)
vermelho.addEventListener('click' ,alternarVermelho)
automatico.addEventListener('click' ,alternarAutomatico)