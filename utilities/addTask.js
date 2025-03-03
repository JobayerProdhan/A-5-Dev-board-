function addTask(id1) {
    let task = document.getElementById(id1).innerText;
    let updatedTask = parseInt(task) + 1;
    document.getElementById(id1).innerText = updatedTask;
}

