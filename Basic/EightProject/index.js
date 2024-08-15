const text = document.getElementById("text");
const button = document.getElementById("btn");
const result = document.getElementById("result");

let age = 0;

button.onclick = function(){

    age = text.value;
    age = Number(age);

    if(age>=100){
        result.textContent = `Too old`;
    }
    else if(age <=0){
        result.textContent = `Don't exist`;
    }
    else if(age>=18 && age<=40){
        result.textContent = `Young`;
    }
    else if(age<=18 && age>=0){
        result.textContent = `Kid`;
    }
    else{
        result.textContent = `Old`
    }
}