cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/cookie-handler.js",
        "id": "cordova-plugin-advanced-http.cookie-handler",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/dependency-validator.js",
        "id": "cordova-plugin-advanced-http.dependency-validator",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/error-codes.js",
        "id": "cordova-plugin-advanced-http.error-codes",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/global-configs.js",
        "id": "cordova-plugin-advanced-http.global-configs",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/helpers.js",
        "id": "cordova-plugin-advanced-http.helpers",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/js-util.js",
        "id": "cordova-plugin-advanced-http.js-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/local-storage-store.js",
        "id": "cordova-plugin-advanced-http.local-storage-store",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/lodash.js",
        "id": "cordova-plugin-advanced-http.lodash",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/messages.js",
        "id": "cordova-plugin-advanced-http.messages",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/ponyfills.js",
        "id": "cordova-plugin-advanced-http.ponyfills",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/public-interface.js",
        "id": "cordova-plugin-advanced-http.public-interface",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "id": "cordova-plugin-advanced-http.tough-cookie",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/url-util.js",
        "id": "cordova-plugin-advanced-http.url-util",
        "pluginId": "cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/www/advanced-http.js",
        "id": "cordova-plugin-advanced-http.http",
        "pluginId": "cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "file": "plugins/cordova-plugin-advanced-http/src/browser/cordova-http-plugin.js",
        "id": "cordova-plugin-advanced-http.http-proxy",
        "pluginId": "cordova-plugin-advanced-http",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-permissions/www/permissions-dummy.js",
        "id": "cordova-plugin-android-permissions.Permissions",
        "pluginId": "cordova-plugin-android-permissions",
        "clobbers": [
            "cordova.plugins.permissions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
        "id": "cordova-plugin-device-orientation.CompassError",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
        "id": "cordova-plugin-device-orientation.CompassHeading",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
        "id": "cordova-plugin-device-orientation.compass",
        "pluginId": "cordova-plugin-device-orientation",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device-orientation/src/browser/CompassProxy.js",
        "id": "cordova-plugin-device-orientation.CompassProxy",
        "pluginId": "cordova-plugin-device-orientation",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/com-sarriaroman-photoviewer/www/PhotoViewer.js",
        "id": "com-sarriaroman-photoviewer.PhotoViewer",
        "pluginId": "com-sarriaroman-photoviewer",
        "clobbers": [
            "PhotoViewer"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/src/browser/AppVersionProxy.js",
        "id": "cordova-plugin-app-version.AppVersionProxy",
        "pluginId": "cordova-plugin-app-version",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/im.ltdev.cordova.UserAgent/www/UserAgent.js",
        "id": "im.ltdev.cordova.UserAgent.UserAgent",
        "pluginId": "im.ltdev.cordova.UserAgent",
        "clobbers": [
            "UserAgent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-inappbrowser": "4.1.0",
    "cordova-plugin-file": "6.0.2",
    "cordova-plugin-advanced-http": "2.5.1",
    "cordova-sqlite-storage": "4.0.0",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-android-permissions": "1.0.2",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-device-orientation": "2.0.1",
    "cordova-plugin-x-toast": "2.7.2",
    "com-sarriaroman-photoviewer": "1.2.4",
    "cordova-plugin-app-version": "0.1.12",
    "cordova-plugin-ionic-webview": "4.2.1",
    "im.ltdev.cordova.UserAgent": "1.0.1"
}
// BOTTOM OF METADATA
});