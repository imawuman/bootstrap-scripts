#!/usr/bin/env node

/**
 * Usage: ./commandLine.js arg1, arg2, ...
 */
var params = process.argv.slice(2);

function commandLine(arg) {
    console.log("Running function with arg: " + arg);
}

commandLine(...params);
