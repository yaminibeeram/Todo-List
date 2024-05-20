document.getElementById('add-task').addEventListener('click', function() {
    var newTask = document.getElementById('new-task').value;
    if (newTask) {
      addTask(newTask);
      document.getElementById('new-task').value = '';
    }
  });
  
  function addTask(task) {
    var taskList = document.getElementById('tasks');
  
    var newLabel = document.createElement('label');
    newLabel.className = 'todo-list__label';
  
    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.addEventListener('change', function() {
      if (this.checked) {
        newLabel.classList.add('completed');
      } else {
        newLabel.classList.remove('completed');
      }
    });
  
    var newSpan = document.createElement('span');
    newSpan.className = 'todo-list__text';
    newSpan.textContent = task;
  
    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newSpan);
    taskList.appendChild(newLabel);
  }
  