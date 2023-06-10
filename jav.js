// vars
let inputTask = document.querySelector('#input-task');
const addBtn = document.querySelector('#add-task');
let tasks = document.querySelector('#tasks');

tasks.innerHTML = localStorage.getItem("tasks");

addBtn.addEventListener('click', function () {
    if(inputTask.value !== "") {
        let li = document.createElement('li');
        let deleteBtn = document.createElement('span');
    
        li.innerHTML = inputTask.value;
        deleteBtn.classList.add('delete-task');
        
        deleteBtn.innerHTML = "\u00d7";
        
        tasks.appendChild(li);
        li.appendChild(deleteBtn);
    }
    inputTask.value = "";
    saveTasks();
});

tasks.addEventListener('click', function (e) {
    let target = e.target
    if(target.tagName === "LI") {
        target.classList.add("checked");
        saveTasks();
    } else if(target.tagName) {
        target.parentElement.remove();
        saveTasks();
    }

});

function saveTasks () {
    localStorage.setItem("tasks", tasks.innerHTML)
}

