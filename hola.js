console.log('Hola');
const h1= document.querySelector('h1');
const p= document.querySelector('p');
const parrafo2=document.querySelector('.parrafo2');
const parrafo3=document.querySelector('#parrafo3');
const input=document.querySelector('input');

console.log(h1);
console.log({
    h1,
    p,
    parrafo2,
    parrafo3,
    input,
});

h1.innerHTML='Patito <br> Feo';
h1.innerText='Patito <br> Feo';
// console.log(h1.getAttribute('atributo'));
// h1.setAttribute('atributo','rojo');
h1.classList.add('rojo');
h1.classList.add('verde');
h1.classList.remove('verde');
input.value='Adrian';

const img=document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/16124576/pexels-photo-16124576/free-photo-of-musica-musico-piano-teclado.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load');
console.log(img);
parrafo3.innerHTML='';
parrafo3.append(img);