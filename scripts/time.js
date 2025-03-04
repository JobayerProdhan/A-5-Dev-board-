function updateClock() {
    const now = new Date();

    
    const day = now.getDate(); 
    const month = now.toLocaleString('en-BD', { month: 'long' }); 
    const year = now.getFullYear(); 
    const dateString = `${day} ${month} ${year}`; 

    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`; 

    
    document.getElementById('time').innerHTML = `${dateString}<br>${timeString}`;
}

setInterval(updateClock, 1000); // call updateClock repeadately 

    
updateClock();




