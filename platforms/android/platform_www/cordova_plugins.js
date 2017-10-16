cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "tapsell-v3-cordova-plugin.tapsell",
        "file": "plugins/tapsell-v3-cordova-plugin/www/tapsell.js",
        "pluginId": "tapsell-v3-cordova-plugin",
        "clobbers": [
            "window.tapsell"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.1.0",
    "tapsell-v3-cordova-plugin": "3.0.44"
};
// BOTTOM OF METADATA
});