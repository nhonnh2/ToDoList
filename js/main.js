var getElById = function(id) {
    return document.getElementById(id);
}
var taskList = new TaskList();
var validator = new Validatior();
//thêm task mới vào danh sách
var addTask = function() {
        if (!validateInput()) return;
        var taskName = getElById('newTask').value;
        var newTast = new Task(taskName, "todo");
        taskList.addTask(newTast);
        alert("added the task in the list")
        renderTaskList();
        setLocalStorage();
    }
    //xóa task dựa vào id của task
var deleteTask = function(id) {
        var confi = confirm('Are you sure you want to delete this task?');
        if (confi == true) {
            taskList.deletaTask(id);
            alert("this task is deleted");
            renderTaskList();
            setLocalStorage();
        }
    }
    //thay đổi trạng thái (status) task dựa vào id của task
var changeStatus = function(id) {
        var task = taskList.getTaskById(id);
        if (task.status === "todo") {
            task.status = "completed";
            alert("changed status from todo to completed");
        } else {
            task.status = "todo";
            alert("changed status from completed to todo");
        }
        taskList.updateTast(task);
        renderTaskList();
        setLocalStorage();
    }
    //xuất ra danh dánh task hiện tại
function renderTaskList() {
    var contentTodo = '';
    var contentCompleted = '';
    taskList.arr.forEach(el => {
        var itemInner = `<li>
                            <span>${el.name}</span>
                            <div class="buttons">
                            <button class="remove" onclick="deleteTask(${el.id})">
                                <i class="fa fa-trash-alt"></i>
                            </button>
                            <button class="complete" onclick="changeStatus(${el.id})">
                                <i class="far fa-check-circle"></i>
                                <i class="fas fa-check-circle"></i>
                            </button>
                            </div>
                        </li>`;
        if (el.status === "todo") {
            contentTodo += itemInner;
        } else if (el.status === "completed") {
            contentCompleted += itemInner;
        }
    });
    getElById('todo').innerHTML = contentTodo;
    getElById('completed').innerHTML = contentCompleted;
}
//kiểm tra input nhập vào
function validateInput() {
    var isValid = true;
    isValid &= validator.isEmtyTask();
    isValid &= validator.isExistTask();
    return isValid;
}
//Lưu data xuống local storage
function setLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}
//lấy data từ local storage
function getLocalStorage() {
    if (localStorage.getItem('taskList')) {
        taskList.arr = JSON.parse(localStorage.getItem('taskList'));
        renderTaskList();
    }
}
getLocalStorage();