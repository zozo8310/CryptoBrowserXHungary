const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
<<<<<<< HEAD
    console.log('main.js loaded successfully');

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false
        }
    });
    mainWindow.loadFile('index.html');
});
=======
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
function toggleContent(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.toggle('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}
>>>>>>> bfcb0ee9355c133e07fb86e6d4fc34e67b08e7c7
