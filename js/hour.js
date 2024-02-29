// Time live update in home cell phone image

function updateHour() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;

    let formattedTime = `${hour}:${minutes}`;

    document.getElementById('hour').innerHTML = formattedTime;
}

updateHour();

setInterval(updateHour, 1000);