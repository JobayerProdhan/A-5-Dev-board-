document.getElementById('clear').addEventListener("click",function(event){
    event.preventDefault();
   const history = document.getElementById('history');
   history.innerHTML = '';
});
