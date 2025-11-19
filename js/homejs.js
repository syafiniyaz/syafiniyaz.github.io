// ===== UP TO TOP BUTTON =====
const upBtn = document.getElementById("upToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }
};

upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== AUDIO TOGGLE =====
const audio = document.getElementById("bg-audio");
const audioBtn = document.getElementById("audio-toggle");

// Bila user click apa-apa dekat page, unmute & play
document.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        audio.play();
    }
}, { once: true }); // run sekali je

// Button play/pause
audioBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        audioBtn.textContent = "🔊";
    } else {
        audio.pause();
        audioBtn.textContent = "🔇";
    }
});
