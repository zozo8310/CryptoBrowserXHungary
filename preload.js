const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  toggleContent: (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  }
});
