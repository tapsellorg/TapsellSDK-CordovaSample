cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
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
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-console": "1.1.0",
    "tapsell-v3-cordova-plugin": "3.0.45"
};
// BOTTOM OF METADATA
});