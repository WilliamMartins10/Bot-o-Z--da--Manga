document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('playButton');
    const audioElement = document.getElementById('audio');

    playButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.currentTime = 0;
        }
    });
});
