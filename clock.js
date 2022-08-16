let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // Changing clock from military time to 12 hr format
    let period = "AM";

    if (hrs == 0) { 
        hrs = 12;
    } 

    if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }

    // Adding a 0 in front of the clock if the hours is less than 10 using conditional statements
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Displaying time onto the div
    let time = hrs + ':' + min + ':' + sec + " " + period;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);
}

function callClock() {
    clock();
}