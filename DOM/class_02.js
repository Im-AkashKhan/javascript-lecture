let para = document.querySelector('.paragraph');
let btn  = document.querySelector('button');
let Box  = document.querySelector("div");
let Btn2  = document.querySelector(".button2");


btn.addEventListener('click' , function(){

    // alert("Hello");

    // para.style.backgroundColor = 'green';
    // para.style.fontSize = '40px'
    // para.style.color = 'white'

    Box.classList.add('box');

});

Btn2.addEventListener('click' , function(){
    Box.classList.remove('box');
})



