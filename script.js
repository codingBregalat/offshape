// script.js

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Change video source based on device type
window.onload = function() {
    var video = document.getElementById('index-video');
    var source = document.getElementById('video-source');
    if (isMobileDevice()) {
        source.src = 'Logo revealmobile.mp4';
        video.setAttribute('playsinline', ''); // Add playsinline attribute
        video.load();
    }
};

// Add smooth scroll behavior to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
