
//  let Head = document.getElementById("heading");
  //target by ID

//   let heading  = document.getElementsByClassName("heading")
//   TARGET BY CLASS NAME

// let heading = document.querySelector("#heading");
//TARGET BY HTML TAGE NAME / ID / CLASS

// let inpType = document.querySelector("input");

// click , onhover , onleave , onclick , (EVENTS)
 
// function showAlery() {
    
// }


let btn = document.querySelector("button");
let PassBox = document.querySelector("input");


btn.addEventListener('click' , function(){
    // PassBox.type= "text"

    if(PassBox.type == "password" ){
        PassBox.type = "text";
        btn.innerHTML = "Hide"
    }else{
        PassBox.type = "password";
        btn.innerHTML = "Show"
    }

})






