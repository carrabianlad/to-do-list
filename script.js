document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('task-list').addEventListener('click', manageTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task-btn">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}

function manageTask(e) {
    if (e.target.classList.contains('delete-task-btn')) {
        e.target.parentElement.remove();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('complete');
    }
}
