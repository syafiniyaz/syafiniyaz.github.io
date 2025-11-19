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

// HAMBURGER MENU FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('nav');
    const menuOverlay = document.getElementById('menuOverlay');
    const body = document.body;
    
    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
    
    // Hamburger click event
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // Overlay click event (close menu)
    menuOverlay.addEventListener('click', function() {
        toggleMenu();
    });
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav.classList.contains('active') && 
            !nav.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMenu();
        }
    });
    
    // ESC key to close menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Existing upToTop code...
    const upBtn = document.getElementById('upToTop');
    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            upBtn.style.display = "block";
        } else {
            upBtn.style.display = "none";
        }
    };
    
    upBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Audio toggle functionality
    const audioToggle = document.getElementById('audio-toggle');
    const bgAudio = document.getElementById('bg-audio');
    
    if (audioToggle && bgAudio) {
        audioToggle.addEventListener('click', function() {
            if (bgAudio.paused) {
                bgAudio.play();
                audioToggle.textContent = '🔊';
            } else {
                bgAudio.pause();
                audioToggle.textContent = '🔇';
            }
        });
    }
});
