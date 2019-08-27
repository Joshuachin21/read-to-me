// optionally the start function may include the deviceID (e.g., 'pn53x_usb:160:012')


let read = 0;
const nfc = require('nfc').nfc
    , util = require('util');
const device = new nfc.NFC();
const NfcService = require('../services/nfc.service');
const NfcReadController = {};

/**
 * calls cb with uid
 * @param cb
 */
NfcReadController.init = () => {

};

module.exports = NfcReadController;

