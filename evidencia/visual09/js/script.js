const btnEl = document.querySelector(".btn");
const inputEL = document.querySelector("input");
const messageEl = document. querySelector(".message");
const errorEL = document.querySelector(".error");

btnEl.addEventListener("click" ,displayMessage);

function displayMessage(){
    if(inputEL.value){
        messageEl.textContent = inputEL.value;
        inputEL.value = "";
    }else{
        errorEL.style.display = "block";
        setInterval(() => {
        errorEL.style.display = "none";
        }, 10000);
    }
}