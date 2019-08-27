const SoundService = {};
const nfc = require('nfc').nfc;
const config = require('../config');
const Sound = require('node-aplay');
let currentSound;

SoundService.play = (soundFile, interrupt = false, cb) => {
    if(interrupt && currentSound){
        currentSound.stop();
    }
    currentSound = new Sound(config.urls.soundsBaseUrl + '/' + soundFile);
    currentSound.play();
    currentSound.on('complete', function () {
        return cb(err, sound);
    });
};





module.exports = SoundService;