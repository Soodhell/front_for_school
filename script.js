const mainHobbyContent = document.querySelector(".main__hobby-content");
const cards = document.querySelectorAll(".main__hobby-content-card");

let xStart, x = null;
let leftCard = 0;
let rightCard = 2;
mainHobbyContent.addEventListener("mousedown", function(event){
    mainHobbyContent.style.cursor = "grabbing"

    xStart = event.clientX;
})

mainHobbyContent.addEventListener("mousemove", function(event){
    x = event.clientX;
})

mainHobbyContent.addEventListener("mouseup", function(event){
    mainHobbyContent.style.cursor = "grab"
    
    
})

mainHobbyContent.addEventListener("mouseleave", function(event){
    mainHobbyContent.style.cursor = "grab"
})