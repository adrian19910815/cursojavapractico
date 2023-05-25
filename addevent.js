const titulo222 = document.querySelector('.titulo2');
const input11=document.querySelector('#calculoadd1');
const input22=document.querySelector('#calculoadd2'); 
const btn1=document.querySelector('#btn-calcular2');
let resultado1=document.querySelector('#resultado1');
let suma1=0;

btn1.addEventListener('click',btnOnclick);
function btnOnclick(){
    suma=(Number(input11.value)+Number(input22.value));
    console.log(suma1);
    resultado1.innerHTML='El ressultado es: ';
    resultado1.append(suma);
}



