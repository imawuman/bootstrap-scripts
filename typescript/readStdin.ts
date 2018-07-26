#!/usr/bin/env node

import { createInterface } from "readline";

/**
 * Usage: ./readStdin.js
 */

const input = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

console.log("Press enter to send input...");
input.on("line", (line) => {
    // TODO: implementation
    console.log(`Input: ${line}`);
});
