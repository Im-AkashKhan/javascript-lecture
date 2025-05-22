

let heading = document.querySelector('h1');
let btn     = document.querySelector('button');
let Boks    = document.querySelector('div');
let Sec     = document.querySelector('section');
let Btn2    = document.querySelector('.btn2');



btn.addEventListener('click' , function() {

    // heading.style.color = 'red';
    // heading.style.backgroundColor = 'orange';
    // heading.style.fontSize = '40px'

    Sec.classList.toggle('box');

})

// Btn2.addEventListener('click' , function(){
//     Sec.classList.remove('box')
// })


