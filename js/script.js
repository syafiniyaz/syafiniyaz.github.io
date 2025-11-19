// ELEMENTS
const sound = document.getElementById("netflix-sound");
const welcomeIntro = document.querySelector(".welcome-intro");
const pageTransition = document.querySelector(".page-transition");
const introContent = document.querySelector(".intro");

// SAFE AUTO-PLAY AUDIO
sound.muted = true;
sound.play().then(() => {
    sound.muted = false;
    sound.volume = 0.6;
}).catch(err => console.log("Audio auto-play blocked:", err));

// PARTICLES
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: 0.2 + Math.random() * 0.5
    });
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// REMOVE WELCOME + PAGE TRANSITION
setTimeout(() => {
    welcomeIntro.style.opacity = "0";

    setTimeout(() => {
        welcomeIntro.style.display = "none";
        pageTransition.style.transform = "translateY(0)";

        setTimeout(() => {
            pageTransition.style.transform = "translateY(-100%)";
            introContent.style.opacity = "1";

            // Play audio if paused
            if (sound.paused) sound.play().catch(err => console.log("Audio blocked:", err));

        }, 700);
    }, 600);
}, 2200);

// PLAY AUDIO ON ENTER BUTTON (backup)
document.querySelector(".enter-btn").addEventListener("click", () => {
    if (sound.paused) sound.play();
});
