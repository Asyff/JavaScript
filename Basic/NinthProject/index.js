// checked

const checkbox = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("MasterCard")
const paypal = document.getElementById("paypal")
const submit = document.getElementById("submit")
const subresult = document.getElementById("subResult")
const paymentresult = document.getElementById("paymentResult")

submit.onclick = function(){
    if(checkbox.checked){
        subresult.textContent = `You are subscribed`;

    }
    else{
        subresult.textContent = `You are not subscribed`;
    }

    if(visa.checked){
        paymentresult.textContent = `You are paying with visa`;
    }

    else if(mastercard.checked){
        paymentresult.textContent = `You are paying with mastercard`;
    }

    else if(paypal.checked){
        paymentresult.textContent = `You are paying with paypal`;
    }

    else{
        paymentresult.textContent = `You have to select one at least`;
    }




}