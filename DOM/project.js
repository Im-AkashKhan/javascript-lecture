

let showBtn = document.querySelector('.btnShow');
let HideBtn = document.querySelector('.closeBtn');
let ShowBox = document.querySelector('.parent');

showBtn.addEventListener('click' , function() {
     ShowBox.classList.remove('HideClass');
    ShowBox.classList.add('show');

})

HideBtn.addEventListener('click' , function() {
    ShowBox.classList.remove('show');
    ShowBox.classList.add('HideClass');
})

