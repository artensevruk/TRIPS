let batton = document.querySelector("#Batton2");
batton.addEventListener("click", changeColor , true );
function changeColor(){
    document.getElementById("Batton2").classList.toggle("active")
    // document.body.style.backgroundColor = "red";
}; 

let Burger = document.querySelector("#Burger");
Burger.addEventListener("click", Batton);
function Batton(){
    document.getElementById("Menu2").classList.toggle("activ");
};
 
let BattonAlert = document.querySelector(".About_Us_info_Batton_Click");
BattonAlert.addEventListener("click" , HELLO);
function HELLO(){
    alert("HEllo");
}