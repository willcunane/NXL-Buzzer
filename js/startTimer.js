var update;

function displayTimer() {
    var currentMatchTimer = document.getElementById("time").innerHTML;
    var currentMinutes = parseInt(currentMatchTimer.split(':')[0]),
        currentSeconds = parseInt(currentMatchTimer.split(':')[1]);



    var matchTimer = currentMinutes * 60 + currentSeconds,
        display = document.querySelector('#time');

    console.log('currentMinutes', currentMinutes);
    console.log('currentSeconds', currentSeconds);
    console.log('matchTimer', matchTimer);

    startTimer(matchTimer, display);
};

function startTimer(duration, display) {
    var currentMatchTimer = document.getElementById("time").innerHTML;
    console.log('startTimer() currentMatchTimer', currentMatchTimer);

    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            start = Date.now() + 1000;
        }

    };
    // we don't want to wait a full second before the timer starts
    timer();
    update = setInterval(timer, 1000);
}

function stopTimer() {
    clearInterval(update);
}