function toggleMute() {
    var audio = document.getElementById('myAudio');
    // audio.play
    // audio.muted = !audio.muted;

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }

    var speaker = document.getElementById('speaker');
    speaker.classList.toggle('mute');

    var songtext = document.getElementById('songtext');
    songtext.classList.toggle('mute');
}

$('.speaker').click(function(e) {
  e.preventDefault();

	$(this).toggleClass('mute');
});