const teenager = document.getElementById("teenager");
const huhn = document.getElementById("huhn");
const scoreElement = document.getElementById("score");
let score = 0;
let isJumping = false;

// Tastatur-Eingabe (Leertaste)
document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !isJumping) {
        jump();
    }
});

// Touch-Eingabe
document.addEventListener("touchstart", function(event) {
    if (!isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let position = 0;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    teenager.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 20;
            teenager.style.bottom = position + "px";
        }
    }, 20);
}

function checkCollision() {
    const teenagerBottom = parseInt(window.getComputedStyle(teenager).getPropertyValue("bottom"));
    const huhnRight = parseInt(window.getComputedStyle(huhn).getPropertyValue("right"));

    if (huhnRight > 50 && huhnRight < 90 && teenagerBottom <= 40) {
        alert("Game Over! Punkte: " + score);
        score = 0;
        scoreElement.textContent = score;
    } else {
        score++;
        scoreElement.textContent = score;
    }
}

setInterval(checkCollision, 10);
