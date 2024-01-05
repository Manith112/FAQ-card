const firstAdd = document.getElementById("first-add")
const secondAdd = document.getElementById("second-add")
const thirdAdd = document.getElementById("third-add")
const fourthAdd = document.getElementById("fourth-add")

const firstPara = document.getElementById("first")
const secondPara = document.getElementById("second")
const thirdPara = document.getElementById("third")
const fourthPara = document.getElementById("fourth")

const firstMinus= document.getElementById("first-minus")
const secondMinus= document.getElementById("second-minus")
const thirdMinus= document.getElementById("third-minus")
const fourthMinus= document.getElementById("fourth-minus")

firstAdd.addEventListener("click" , function() {
    
    firstPara.innerText = " Frontend Mentor offers realistic coding challenges to help developers improve their  frontend coding skillswith projects in HTML, CSS, and JavaScript. It's suitable for  all levels and ideal for portfolio building."
    firstAdd.style.display = "none";
    firstMinus.style.display = "flex"
});
firstMinus.addEventListener("click" , function() {
        firstPara.innerText = ""
    firstAdd.style.display = "flex";
    firstMinus.style.display = "none"
});


secondAdd.addEventListener("click" , function() {
  
    secondPara.innerText = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    secondAdd.style.display = "none";
    secondMinus.style.display = "flex"
});
secondMinus.addEventListener("click" , function() {
        secondPara.innerText = ""
    secondAdd.style.display = "flex";
    secondMinus.style.display = "none"
});

thirdAdd.addEventListener("click" , function() {
    thirdPara.innerText = " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    thirdAdd.style.display = "none";
    thirdMinus.style.display = "flex"
});
thirdMinus.addEventListener("click" , function() {
    thirdPara.innerText = ""
    thirdAdd.style.display = "flex";
    thirdMinus.style.display = "none"
});

fourthAdd.addEventListener("click" , function() {
    fourthPara.innerText = " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    fourthAdd.style.display = "none";
    fourthMinus.style.display = "flex"
});
fourthMinus.addEventListener("click" , function() {
    fourthPara.innerText = ""
    fourthAdd.style.display = "flex";
    fourthMinus.style.display = "none"
});
