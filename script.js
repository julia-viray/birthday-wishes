const audioPlayer = document.getElementById('audioPlayer');

    // Trigger confetti when the audio starts playing
    audioPlayer.addEventListener('play', () => {
        confetti({
            particleCount: 100, // Number of confetti particles
            spread: 70, // Spread of confetti
            origin: { y: 0.6 }, // Starting point of confetti
            colors: ['#ff0', '#f00', '#0f0', '#00f'], // Confetti colors
        });
    });