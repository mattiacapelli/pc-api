var express = require('express');
var chalk = require('chalk');
var os = require('os');

var loglevel = 
{
    error: chalk.bold.red,
    warn: chalk.yellow,
    success: chalk.bold.green,
    debug: chalk.blue,
    warning: chalk.yellow,
    info: chalk.blue
}

var config = {
    port: 3000
}

//Log function 
function log(level, message) {
    if (loglevel[level]) {
        console.log(loglevel[level](message));
    } else {
        console.log(loglevel['info'](message));
    }
}

//Get ip address from request
function getIP(req) {
    switch (req.ip)
    {
        case '::1':
            return 'localhost';
        default:
            return req.ip;
    }
}

//Clear console
console.clear();

var app = express();

app.listen(config.port, function(err) {
    if(err) {
        log('error', 'Error starting server');
    } else {
        log('success', 'Server started on port ' + config.port + '\n' + chalk.underline('http://localhost:' + config.port));
    }
});

app.get('/', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
    });
});

app.get('/os', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            hostname: os.hostname(),
            type: os.type(),
            platform: os.platform(),
            arch: os.arch(),
            release: os.release(),
            uptime: os.uptime(),
        }
    });
});

app.get('/os/hostname', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            hostname: os.hostname()
        }
    });
});

app.get('/os/type', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            type: os.type()
        }
    });
});

app.get('/os/platform', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            platform: os.platform()
        }
    });
});

app.get('/os/arch', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            arch: os.arch()
        }
    });
});

app.get('/os/release', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            release: os.release()
        }
    });
});

app.get('/os/uptime', function (req, res) {
log('info', 'Express > Request received from ' + getIP(req));
    res.json({
        code: 200,
        message: 'OK',
        data: {
            uptime: os.uptime()
        }
    });
});