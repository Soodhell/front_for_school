const mainHobbyContent = document.querySelector(".main__hobby-content");
const cards = document.querySelectorAll(".main__hobby-content-card");

let startX, moveX = null;
let currentTranslateX = 0;
let cardWidth = 0;

function updateCardWidth() {
    const screenWidth = window.innerWidth;
    cardWidth = (Math.min(screenWidth, 1440) - 10) / 3;
    mainHobbyContent.style.minWidth = `${cardWidth * cards.length}px`;
}

window.addEventListener('load', updateCardWidth);
window.addEventListener('resize', updateCardWidth);

function handleStart(clientX) {
    mainHobbyContent.style.cursor = "grabbing";
    startX = clientX;
}

function handleMove(clientX) {
    if (startX === null) return;
    moveX = clientX;
}

function handleEnd() {
    if (startX === null || moveX === null) return;
    
    mainHobbyContent.style.cursor = "grab";
    
    const diff = startX - moveX;
    const swipeThreshold = 30;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            currentTranslateX = Math.max(currentTranslateX - cardWidth, -cardWidth * (cards.length - 3));
        } else {
            currentTranslateX = Math.min(currentTranslateX + cardWidth, 0);
        }
        
        mainHobbyContent.style.transform = `translateX(${currentTranslateX}px)`;
    }
    
    startX = null;
    moveX = null;
}

mainHobbyContent.addEventListener("mousedown", (e) => handleStart(e.clientX));
mainHobbyContent.addEventListener("mousemove", (e) => handleMove(e.clientX));
mainHobbyContent.addEventListener("mouseup", handleEnd);
mainHobbyContent.addEventListener("mouseleave", () => {
    mainHobbyContent.style.cursor = "grab";
    startX = null;
    moveX = null;
});

mainHobbyContent.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handleStart(e.touches[0].clientX);
}, { passive: false });

mainHobbyContent.addEventListener("touchmove", (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
}, { passive: false });

mainHobbyContent.addEventListener("touchend", (e) => {
    e.preventDefault();
    handleEnd();
});