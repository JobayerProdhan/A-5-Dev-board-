function addTrasectionHistory(historyDiv, buttonId){
    const button = document.getElementById(buttonId);
    // button.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     const parentDiv = this.parentNode;  
    //     parentDivsParentDev = parentDiv.parentNode; 
    //     const serviceName = parentDivsParentDev.querySelector("h1").innerText;  
    //     const history = document.getElementById(historyDiv);
        
          const parentDiv = button.parentNode;
          const parentsDivParentDiv = parentDiv.parentNode;
          const serviceName = parentsDivParentDiv.querySelector("h1").innerText;  
        //   addHistory(serviceName,historyDiv);
            addHistory(serviceName,historyDiv);        
    // });

   
};
function addHistory(serviceName,historyDiv){
    const history = document.getElementById(historyDiv);
    const p = document.createElement('p');
    p.className = 'bg-[#F4F7FF] p-3 rounded-md';
    p.innerText = `Your service ${serviceName} has been added ${new Date().toLocaleString()}`;
    history.appendChild(p);
};
