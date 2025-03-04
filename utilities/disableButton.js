let buttonCount = 0 ;
function buttonDisable(id){
    const button = document.getElementById(id);
    button.disabled = true;
    button.style.backgroundColor = 'gray';
    button.style.cursor ='not-allowed';

    buttonCount++;

    if(buttonCount == 6){
        alert('Congrates!!! You have completed all the current task.')
    }
}