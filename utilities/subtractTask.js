function subtractTask(id1) {
    let task = document.getElementById(id1).innerText;
    if (task == 0){
        alert('All task completed');
        document.getElementById(id1).innerText = 0;
    }
    else{
        let updatedTask = parseInt(task) - 1;
        document.getElementById(id1).innerText = updatedTask;
    }
    
}