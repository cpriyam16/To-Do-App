const taskInput = document.getElementById('taskInput');
const createTask = document.getElementById('createTask');

const listContainer = document.getElementById('listContainer');
createTask.addEventListener('click', () =>{
    if(taskInput.value !== '') {
        let taskList = document.createElement('li');
        taskList.innerText = taskInput.value;
        listContainer.appendChild(taskList);
        taskInput.value = '';
    } else {
        alert('Please type Something');
    }
});

taskList.addEventListener('click', () => {
    alert('click');
})

