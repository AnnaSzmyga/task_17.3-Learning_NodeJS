var os = require('os');

function changeUptimeFormat() {
    var uptime = os.uptime();
    var seconds;
    var minutes;
    var hours;

    if (uptime < 60 ) {
        seconds = uptime;
        console.log('Uptime is: ' + seconds + ' sec.');
    } else if ((uptime >= 60) && (uptime < 3600)) {
        minutes = Math.floor(uptime / 60);
        seconds = uptime % 60;
        console.log('Uptime is: ' + minutes + ' min. ' + seconds + ' sec.');
    } else {
        hours = Math.floor(uptime / 3600);
        if (uptime - hours * 3600 < 60) {
            seconds = uptime - hours * 3600;
            console.log('Uptime is: ' + hours + ' h. '+ seconds + ' sec.');
        } else {
            minutes = Math.floor((uptime - hours * 3600) / 60);
            seconds = (uptime - hours * 3600) % 60;
            console.log('Uptime is: ' + hours + ' h. ' + minutes + ' min. ' + seconds + ' sec.');
        }
    }
};

exports.getUptime = changeUptimeFormat;