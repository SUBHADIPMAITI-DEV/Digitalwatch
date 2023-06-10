function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Pad the hours, minutes, and seconds with leading zeros if needed
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Create the digital watch display string
    var displayString = hours + ":" + minutes + ":" + seconds;

    // Update the digital watch element
    var digitalWatch = document.getElementById("digital-watch");
    digitalWatch.innerText = displayString;
}

// Update the time every second
setInterval(updateTime, 1000);
