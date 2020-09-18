const options = 
 {weekday: 'loing', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('dateupdated').textContent = new Date().toLocaleDateString('en-us', options);