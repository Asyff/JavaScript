//Const - Cannot later Change the value

const PI = 3.14159;
let radius;
let circumference;




circumference = 2 * PI * radius;

document.getElementById("submit").onclick = function(){
    radius=document.getElementById("text").value;
    radius = Number(radius); //Type Conversion
    circumference = 2 * PI * radius;
    document.getElementById("bigtext").textContent = circumference;
}