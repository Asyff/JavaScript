//Accept user input

//let username;

//username = window.prompt("What's your name?");

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("text").value;
    document.getElementById("content").textContent = `Hello ${username}`;
}

