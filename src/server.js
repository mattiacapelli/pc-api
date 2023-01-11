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

//Config object
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

//Create express app
var app = express();

//Start server
app.listen(config.port, function(err) {
    if(err) {
        log('error', 'Error starting server');
    } else {
        log('success','-'.repeat(30) + '\n' + 'Server started on port ' + config.port + '\n' + chalk.underline('http://localhost:' + config.port) + '\n' + '-'.repeat(30));
    }
});

/*  
    ------------
    Basic Routes
    ------------
*/

app.get('/', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
    });
});

/*
    ------------
    OS Routes
    ------------
*/

// Get all os info
app.get('/os', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            hostname: os.hostname(),
            type: os.type(),
            platform: os.platform(),
            arch: os.arch(),
            release: os.release(),
            uptime: os.uptime(),
            user: os.userInfo(),
        }
    });
});

// Get hostname from os
app.get('/os/hostname', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            hostname: os.hostname()
        }
    });
});

// Get type from os
app.get('/os/type', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            type: os.type()
        }
    });

    req.status(200).message('OK').data({
        type: os.type()
    });
});

app.get('/os/platform', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            platform: os.platform()
        }
    });
});

app.get('/os/arch', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            arch: os.arch()
        }
    });
});

app.get('/os/release', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            release: os.release()
        }
    });
});

app.get('/os/uptime', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            uptime: os.uptime()
        }
    });
});

app.get('/os/user', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            user: os.userInfo()
        }
    });
});

// network info
app.get('/network', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            networkInterfaces: os.networkInterfaces(),
            //TODO: add public ip and speed test here
        }
    });
});

app.get('/network/networkInterfaces', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            networkInterfaces: os.networkInterfaces(),
        }
    });
});

app.get('/network/networkInterfaces/:interface', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            networkInterfaces: os.networkInterfaces()[req.params.interface]
        }
    });
});

app.get('/network/interfaces', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            networkInterfaces: os.networkInterfaces(),
        }
    });
});

// 
app.get('/hardware', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            totalmem: os.totalmem(),
            freemem: os.freemem(),
            cpus: os.cpus(),
            networkInterfaces: os.networkInterfaces(),
        }
    });
});

app.get('/hardware/totalmem', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            totalmem: os.totalmem()
        }
    });
});

app.get('/hardware/freemem', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            freemem: os.freemem()
        }
    });
});

app.get('/hardware/cpus', function (req, res) {
    log('info', 'Express > Request received from ' + getIP(req));
    res.status(200).json({
        code: 200,
        message: 'OK',
        data: {
            cpus: os.cpus()
        }
    });
});
