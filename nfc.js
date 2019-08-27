
var read = 0;
var nfc = require('nfc').nfc
    ,util = require('util');
var device = new nfc.NFC();
var Sound = require('node-aplay');
const SOUND_BASE_URL = '/home/pi/sounds/';
device.on('read', function (tag) {
    /*
    *
    * { deviceID: 'pn532_i2c:/dev/i2c-1',
  name: 'pn532_i2c:/dev/i2c-1',
  uid: '04:32:96:72:81:63:81',
  type: 68,
  tag: 'mifare-ultralight' }
*/

if (tag.uid === '04:77:d1:7a:81:63:81'){
    current_sound = new Sound(SOUND_BASE_URL + '/' + 'google_stop.wav');
    current_sound.play();
}
if (tag.uid === '04:32:b7:72:81:63:81'){
    current_sound = new Sound(SOUND_BASE_URL + '/' + 'google_next.wav');
    current_sound.play();
}

console.log('playing google stop');
    console.log(`read ${read} tags`);
    read = read + 1;
    console.log(tag.uid);
}).on('error', function (err) {
    console.log(err);
}).start();
// optionally the start function may include the deviceID (e.g., 'pn53x_usb:160:012')