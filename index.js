var Gpio = require('onoff').Gpio;


process.on('SIGINT', function () {
    button.unexport();
    button2.unexport();
});