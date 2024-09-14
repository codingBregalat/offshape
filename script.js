// script.js

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

window.onload = function() {
    var video = document.getElementById('index-video');
    var source = document.getElementById('video-source');
    
    // Check if it's a mobile device and adjust the video source
    if (isMobileDevice()) {
        source.src = 'Logo revealmobilecompressed.mp4'; // Use mobile-optimized video
    } else {
        source.src = 'website versioncompressed.mp4'; // Use desktop version video
    }

    video.setAttribute('muted', ''); // Ensure video is muted for autoplay to work on mobile
    video.setAttribute('playsinline', ''); // Mobile video to play inline
    video.setAttribute('autoplay', ''); // Ensure autoplay works
    video.setAttribute('loop', ''); // Ensure video loops

    video.load(); // Reload the video with the updated source
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
