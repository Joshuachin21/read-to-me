
// optionally the start function may include the deviceID (e.g., 'pn53x_usb:160:012')


let read = 0;
const nfc = require('nfc').nfc
    , util = require('util');
const device = new nfc.NFC();

const NfcService = {};

/**
 * calls cb with uid
 * @param cb
 */
NfcService.poll = (cb) => {
    device.on('read', function (tag) {
        /*
        *
        * { deviceID: 'pn532_i2c:/dev/i2c-1',
      name: 'pn532_i2c:/dev/i2c-1',
      uid: '04:32:96:72:81:63:81',
      type: 68,
      tag: 'mifare-ultralight' }
    */
        console.log(`read ${read} tags`);
        read = read + 1;
        console.log(tag.uid);
       return cb(tag.uid);
    }).on('error', function (err) {
        console.log(err);
    }).start();
};
module.exports = NfcService;