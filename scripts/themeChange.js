function randomColor(){
    // step 1: create r g b code randomly 

    const r = Math.random()*256;
    const g = Math.random()*256;
    const b = Math.random()*256;
    
    
    // now return this
    return `rgb(${r},${g},${b})`;
}

document.getElementById('theme').addEventListener('click',function(){
    document.body.style.backgroundColor = randomColor();
    
});