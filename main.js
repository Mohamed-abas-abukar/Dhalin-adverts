let burger = document.querySelector(".burger")
let closes = document.querySelector(".close");
let navigationBar = document.querySelector("side");


burger.addEventListener("click", ()=>{

    navigationBar.style.display = "block";



});

closes.addEventListener("click", ()=>{

    navigationBar.style.display = "none";
   
});
