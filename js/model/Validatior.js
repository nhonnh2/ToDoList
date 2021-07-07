function Validatior() {
    //kiểm tra input nhập vào có trống không
    this.isEmtyTask = function() {
            var value = getElById('newTask').value;
            if (value === '') {
                alert(" task is emty");
                return false;
            }
            return true;
        }
        //kiểm tra tên task có trùng trong task list không
    this.isExistTask = function() {
        var value = getElById('newTask').value;
        var findTaskName = taskList.arr.findIndex(function(task) {
            return value === task.name;
        });
        if (findTaskName !== -1) {
            alert(" task is exist in list");
            return false;
        }
        return true;
    }
}