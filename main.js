const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const aiManager = require('./aiManager');

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('interact-with-ai', (event, type, payload) => {
    return aiManager.interactWithAI(type, payload);
});

ipcMain.on('open-google', () => {
    shell.openExternal('https://www.google.com');
});
