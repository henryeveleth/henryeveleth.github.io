function toggleMute() {
    var audio = document.getElementById('songaudio');

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }

    var speaker = document.getElementById('speaker');
    speaker.classList.toggle('mute');

    var nowplaying = document.getElementById('nowplaying');
    nowplaying.classList.toggle('mute');
}

function randomizeTrack() {
    var items = ['audio/tpa-snippet.mp3', 'audio/s10k-snippet.mp3'];
    var names = {
        'audio/tpa-snippet.mp3': 'The Perfect Answer',
        'audio/s10k-snippet.mp3': 'Sunday 10,000',
    }

    var audio = document.getElementById('audiosrc');
    var item = items[Math.floor(Math.random()*items.length)];

    audio.src = item;

    var audio = document.getElementById('songaudio');
    audio.load();

    var nowplaying = document.getElementById('nowplaying');
    var name = names[item];
    nowplaying.innerText = 'now playing: "' + name + '"';
}

window.addEventListener('load', (event) => {
    randomizeTrack();
})