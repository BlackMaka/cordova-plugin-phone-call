var exec = require('cordova/exec');
var platformId = require('cordova/platform').id;

module.exports = {

    /**
     * Call the native dialer
     *
     * @param {String, Function}      The phone number to call, The callback error function
     */
    dial: function(phnum, errorCallback, successCallback, IsSpeakerOn, bypassAppChooser) {
        if (phnum == null) errorCallback("empty");
        if (platformId == 'ios' || platformId == 'android') {
            exec(
                successCallback, 
                errorCallback, 
                "PhoneDialer", 
                "dial", 
                [phnum, bypassAppChooser, IsSpeakerOn]
            );
        } else {
            document.location.href = "tel:" + phnum;
            if (successCallback) successCallback();
        }
    },
    call: function(phnum, errorCallback, successCallback, IsSpeakerOn, bypassAppChooser) {
        if (phnum == null) errorCallback("empty");
        if (platformId == 'ios' || platformId == 'android') {
            exec(
                successCallback, 
                errorCallback, 
                "PhoneDialer", 
                "call", 
                [phnum, bypassAppChooser, IsSpeakerOn]
            );
        } else {
            document.location.href = "tel:" + phnum;
            if (successCallback) successCallback();
        }
    }
};