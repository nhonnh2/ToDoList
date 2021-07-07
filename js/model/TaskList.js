function TaskList() {
    this.arr = [];
}
TaskList.prototype.findIndex = function(id) {
    return this.arr.findIndex(function(task) {
        return task.id === id;
    });
}
TaskList.prototype.addTask = function(task) {
    this.arr.push(task);
}
TaskList.prototype.deletaTask = function(id) {
    var index = this.findIndex(id);
    if (index !== -1) {
        this.arr.splice(index, 1);
    }
}
TaskList.prototype.getTaskById = function(id) {
    var index = this.findIndex(id);
    if (index !== -1) {
        return this.arr[index];
    }
}
TaskList.prototype.updateTast = function(task) {
    var index = this.findIndex(task.id);
    if (index !== -1) {
        this.arr[index] = task;
    }
}