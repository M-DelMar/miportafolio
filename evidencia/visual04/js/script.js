const redcolor = document.querySelector(".red");
const blackcolor = document.querySelector(".black");
const imagecard = document.querySelector(".product-image");
const feedbackBtn = document.querySelector(".feedback");
const graycolor = document.getElementsByClassName("gray");
const cartButton = document.getElementById("button");
const itemTang = document.getElementsByTagName("h3")[0];

redcolor.addEventListener("click", function(){
    cartButton.style.background = "red";
    itemTang.style.backgroundColor = "red";
    imagecard. style. backgroundImage = 'url("https://i.postimg.cc/cH2pJdny/red-benz.webp")';
});

graycolor[0].addEventListener("click", function (){
    cartButton.style.background = "gray";
    itemTang.style.backgroundColor = "gray";
    imagecard. style.backgroundImage = 'url("https://i.postimg.cc/BvyYTMQ2/gray-benz.jpg")';
});

blackcolor.addEventListener("click", function (){
    cartButton.style.background = "black";
    itemTang.style.backgroundColor = "black" ;
    imagecard. style. backgroundImage = 'url("https://i.postimg.cc/NGRJX8hr/black-benz.jpg")';
});

const cart = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
};
cartButton.addEventListener("click",cart );

const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
};

feedbackBtn.addEventListener("click", feedback);