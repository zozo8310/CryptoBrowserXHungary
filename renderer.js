<<<<<<< HEAD
console.log('renderer.js loaded successfully');

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-section-id');
        if (!sectionId) {
            console.warn('Menu item has no data-section-id:', item);
            return;
        }
        console.log(`Menu item clicked: ${sectionId}`);
        toggleContent(sectionId);
    });
});

function toggleContent(sectionId) {
    console.log(`Toggling section: ${sectionId}`);
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            // Toggle the visibility of the clicked section
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            // Ensure all other sections are hidden
            section.style.display = 'none';
        }
    });
}

function updateTaskList() {
    console.log('Updating task list...');
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    const tasks = window.api.getTasks() || [];
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
=======
function toggleContent(id) {
  window.api.toggleContent(id);
>>>>>>> bfcb0ee9355c133e07fb86e6d4fc34e67b08e7c7
}
