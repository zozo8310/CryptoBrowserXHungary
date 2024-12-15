const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
<<<<<<< HEAD
    getTasks: () => {
        console.log('Getting tasks...');
        try {
            return ["Task 1", "Task 2"]; // Teszt adatok
        } catch (error) {
            console.error('Get tasks failed:', error);
            return [];
        }
    },
    addTask: () => {
        console.log('Task added');
        return "Task added successfully";
    },
    clearTasks: () => {
        console.log('Tasks cleared');
        return "Tasks cleared successfully";
    }
=======
  toggleContent: (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  }
>>>>>>> bfcb0ee9355c133e07fb86e6d4fc34e67b08e7c7
});
