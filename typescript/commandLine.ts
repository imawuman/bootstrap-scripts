#!/usr/bin/env node

/**
 * Usage: ./commandLine.js [arg1] [arg2] ...
 */

const parameters = process.argv.slice(2);

function commandLine(...args: string[]) {
    // TODO: implementation
    console.log("Running function with args: ", args);
}

commandLine(...parameters);
