// Style swithcher java script code

const styleSwitcherBtn = document.querySelector(".theme-color");
let styleSwitcherBox = document.querySelector(".style-switcher")

styleSwitcherBtn.addEventListener("click", ()=>{
    styleSwitcherBox.classList.toggle("open");
})

// Hiding theme color on scrooling
window.addEventListener("scroll", ()=>{
    if(styleSwitcherBox.classList.contains("open")){
        styleSwitcherBox.classList.remove("open");
    }

})   

// Theme color change

const clr1 = document.getElementById("color1");
const clr2 = document.getElementById("color2");
const clr3 = document.getElementById("color3");
const clr4 = document.getElementById("color4");
const clr5 = document.getElementById("color5");


function setActiveStyle(color){
    
    if(color == 'color1'){
        clr1.removeAttribute("disabled");
    }
    else{
        clr1.setAttribute("disabled", "true");
    }

    if(color == 'color2'){
        clr2.removeAttribute("disabled");
    }
    else{
        clr2.setAttribute("disabled", "true");
    }
    
    if(color == 'color3'){
        clr3.removeAttribute("disabled");
    }
    else{
        clr3.setAttribute("disabled", "true");
    }

    if(color == 'color4'){
        clr4.removeAttribute("disabled");
    }
    else{
        clr4.setAttribute("disabled", "true");
    }

    if(color == 'color5'){
        clr5.removeAttribute("disabled");
    }
    else{
        clr5.setAttribute("disabled", "true");
    }

}

// Dark mode change
const darkMode = document.querySelector(".day-night")
darkMode.addEventListener("click", ()=>{
    darkMode.querySelector("i").classList.toggle("fa-sun");
    darkMode.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        darkMode.querySelector("i").classList.add("fa-sun");
    }
    else{
        darkMode.querySelector("i").classList.add("fa-moon");
    }
})
