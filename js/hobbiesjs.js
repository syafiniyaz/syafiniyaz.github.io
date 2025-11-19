// Auto-play all hobby videos when page loads
window.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.hobby-card video');
    videos.forEach(video => {
        video.play().catch(err => console.log('Autoplay blocked:', err));
    });
});
