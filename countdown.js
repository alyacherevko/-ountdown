var end = new Date('03/13/2018 12:00 AM'),
    sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24,
    timer;

function remain() {
    var now = new Date(),
        between = end - now;

    var days = Math.floor(between / day),
        hours = Math.floor((between % day) / hour),
        minutes = Math.floor((between % hour) / min),
        seconds = Math.floor((between % min) / sec);

    var dayString = 'days ',
        hourString = 'hrs ',
        minString = 'mins ',
        secString = 'secs ';

    if (days == 1 || days == 21) {
        dayString = 'day ';
    };
    if (hours == 1) {
        hourString = 'hr ';
    };
    if (minutes == 1) {
        minString = 'min ';
    };
    if (seconds == 1) {
        secString = 'sec ';
    };
    var clock = days + dayString + hours + hourString + minutes + minString + seconds + secString;
    document.getElementById("clock").innerHTML = clock;
}

timer = setInterval(function () {
    remain();
}, 1000);