const titulo = document.querySelector('.titulo');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2'); 
const btn=document.querySelector('#btn-calcular');
let result=document.querySelector('#resultado');
let suma=0;

function btnOnclick(){
    suma=(Number(input1.value)+Number(input2.value));
    console.log(suma);
    result.innerHTML='El ressultado es: ';
    result.append(suma);
}



