const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    console.log('main.js loaded successfully');

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true, // A biztonság érdekében
            enableRemoteModule: false
        }
    });

    mainWindow.loadFile('index.html');
});
