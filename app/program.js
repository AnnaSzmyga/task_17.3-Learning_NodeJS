
process.stdin.setEncoding('utf-8');
var OSinfo = require('../modules/OSinfo');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/lang':
                process.stdout.write('Language: ' + process.env.LANG + '\n');
                break;
            case '/version':
                process.stdout.write('Node version: ' + process.versions.node + '\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stdout.write('Wrong instruction!\n');
        }
    }
});


