#!/usr/bin/env node

/**
 * Usage: ./readStdin.js
 */

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

console.log("Press enter to send input...");
input.on('line', (line) => {
    // TODO: implementation
    console.log(`Input: ${line}`);
});
