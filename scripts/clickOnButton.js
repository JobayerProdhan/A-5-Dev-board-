function allTask(id){
    document.getElementById(id).addEventListener("click", function(event) {
        event.preventDefault();
        alert('Board updated Successfully');
        addTask('list-task');
        subtractTask('assigned-task');
        addTrasectionHistory('history',id);
        buttonDisable(id);
    });
}

allTask('fix-mobile-btn');
allTask('add-dark-btn');
allTask('optimize-home-page');
allTask('add-new-emogi');
allTask('integrate-open-ai');
allTask('improve-job')


