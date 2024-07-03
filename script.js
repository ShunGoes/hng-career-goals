
function showDate(){
    const currentTime = new Date();

    let time = document.querySelector("#time");
    let day = document.querySelector("#day");

    const dayOfTheWeek = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes();
    
    const utcTime = `Time is: ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} `;

    time.textContent = utcTime
    day.textContent = ` Day: ${dayOfTheWeek}`

    
}

setInterval(showDate, 1000)