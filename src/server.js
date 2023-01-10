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

