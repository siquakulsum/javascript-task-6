document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskValue}</span>
            <div class="actions">
                <button class="inProgressButton">In-Progress</button>
                <button class="removeButton">Remove</button>
            </div>
        `;

        const inProgressButton = li.querySelector('.inProgressButton');
        inProgressButton.addEventListener('click', function() {
            const inProgressList = document.getElementById('inProgressList');
            li.classList.add('in-progress');
            inProgressList.appendChild(li);

            inProgressButton.remove();

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'completeButton';

            completeButton.addEventListener('click', function() {
                const completedList = document.getElementById('completedList');
                li.classList.remove('in-progress');
                li.classList.add('completed');
                completedList.appendChild(li);
                completeButton.remove();
            });

            li.querySelector('.actions').prepend(completeButton);
        });

        const removeButton = li.querySelector('.removeButton');
        removeButton.addEventListener('click', function() {
            li.parentElement.removeChild(li);
        });

        todoList.appendChild(li);

        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('addTaskButton').click();
    }
});