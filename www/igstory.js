
var exec = require('cordova/exec');

var PLUGIN_NAME = 'IGStory';

var IGStory = {
  shareToStory: function(opts, cb, err) {
    exec(cb, err, PLUGIN_NAME, 'shareToStory', [opts.appID, opts.backgroundImage, opts.stickerImage, opts.attributionURL, opts.backgroundTopColor, opts.backgroundBottomColor]);
  },
  shareImageToStory: function(opts, cb, err) {
    exec(cb, err, PLUGIN_NAME, 'shareImageToStory', [opts.appID, opts.backgroundImage]);
  }
};

module.exports = IGStory;
