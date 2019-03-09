
function changeTimeFormat(secondsTime) {
    var seconds;
    var minutes;
    var hours;
    var timeInfo;

    if (secondsTime < 60 ) {
        seconds = secondsTime;
        timeInfo = seconds + ' sec.';
    } else if ((secondsTime >= 60) && (secondsTime < 3600)) {
        minutes = Math.floor(secondsTime / 60);
        seconds = secondsTime % 60;
        timeInfo = minutes + ' min. ' + seconds + ' sec.';
    } else {
        hours = Math.floor(secondsTime / 3600);
        if (secondsTime - hours * 3600 < 60) {
            seconds = secondsTime - hours * 3600;
            timeInfo = hours + ' h. '+ seconds + ' sec.';
        } else {
            minutes = Math.floor((secondsTime - hours * 3600) / 60);
            seconds = (secondsTime - hours * 3600) % 60;
            timeInfo = hours + ' h. ' + minutes + ' min. ' + seconds + ' sec.';
        }
    }
    return timeInfo;
};

exports.changeTimeFormat = changeTimeFormat;