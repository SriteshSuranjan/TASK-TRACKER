let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
          <span>${task.text} (${task.category})</span>
          <button onclick="toggleTask(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();
    const taskCategory = document.getElementById('task-category').value;

    if (taskText !== '') {
        tasks.push({
            text: taskText,
            completed: false,
            category: taskCategory
        });
        newTaskInput.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function changeTheme() {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}