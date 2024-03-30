// Load animations
var topAnimation = lottie.loadAnimation({
    container: document.getElementById('top-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '2.json' // Path to your top Lottie animation JSON file
});

var bottomAnimation = lottie.loadAnimation({
    container: document.getElementById('bottom-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '1.json' // Path to your bottom Lottie animation JSON file
});
