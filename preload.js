const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    interactWithAI: (type, payload) => ipcRenderer.invoke('interact-with-ai', type, payload),
    openGoogle: () => ipcRenderer.send('open-google')
});
