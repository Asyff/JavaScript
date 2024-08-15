//Random num generator

const button = document.getElementById("btn");

const label1 = document.getElementById("lab1");
const label2 = document.getElementById("lab2");
const label3 = document.getElementById("lab3");

const total = document.getElementById("total");

let result = document.getElementById("winlose");



const min=1;
const max = 6;

let random1;
let random2;
let random3;


button.onclick = function(){
    random1 = Math.floor(Math.random()*max)+min;
    random2 = Math.floor(Math.random()*max)+min;
    random3 = Math.floor(Math.random()*max)+min;
    label1.textContent = random1;
    label2.textContent = random2;
    label3.textContent = random3;

    total.textContent = random1 + random2+ random3;
    

    Number(total);

    if(total<=8){
        (result.textContent = "You lose");
    }
    else if(total==8){
        (result.textContent = "You win");
    }
    else{
        (result.textContent = "You barely win");
    
    }
}

