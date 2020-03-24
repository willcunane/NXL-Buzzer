var match1timer = 12
var match2timer = 12

function startTimer(duration, display) {
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
    update = setInterval(timer, currentMatchTimer);
}

    function displayTimer() {
    var matchTimer = 60 * match1timer,
        display = document.querySelector('#time');
    startTimer(matchTimer, display);
};

    function stopTimer() {
        var currentMatchTimer = document.getElementById("time").innerHTML;
            console.log(currentMatchTimer);
        clearInterval(update);
    }