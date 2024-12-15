console.log('renderer.js loaded successfully');

// Attach event listeners to menu items
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

// Toggle content visibility
function toggleContent(sectionId) {
    console.log(`Toggling section: ${sectionId}`);
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = section.style.display === 'block' ? 'none' : 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Update task list
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
}
