// this file is used for preloading audio and image files

// soundfile variables

let allCoinsSound;
let bgroundSound;
let collecCoinSound;
let fallingSound;
let jumpSound;
let levelCompleteSound;
let owSound;

// image file variables

let gameText;
let overText;
let completeText;

// load sound files and set volumes
function preload()
{
    soundFormats('wav', 'mp3');
    
    // load and set volume of sound files
    allCoinsSound = loadSound('assets/audio/all_coins.wav');
    allCoinsSound.setVolume(0.1);
    bgroundSound = loadSound('assets/audio/bground.mp3', loaded);
    bgroundSound.setVolume(0.4);
    collectCoinSound = loadSound('assets/audio/collect_coin.wav');
    collectCoinSound.setVolume(0.1);
    fallingSound = loadSound('assets/audio/falling.wav');
    fallingSound.setVolume(0.1);
    jumpSound = loadSound('assets/audio/jumping.wav');
    jumpSound.setVolume(0.1);
    levelCompleteSound = loadSound('assets/audio/level_complete.wav');
    levelCompleteSound.setVolume(0.2);
    owSound = loadSound('assets/audio/ow.wav');
    owSound.setVolume(0.1);
    
    // load image files
    gameText = loadImage('assets/images/game.png');
    overText = loadImage('assets/images/over.png');
    completeText = loadImage('assets/images/complete.png');
    
}

// loaded function for playing background sound. due to the large
// file size, it appears to not work in preload()
function loaded() 
{
    bgroundSound.play();
}
