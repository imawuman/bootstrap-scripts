#!/usr/bin/env node

/**
 * Usage: ./writeFile.js [filepath]
 */

const fs = require("fs");

const params = process.argv.slice(2);

if (params.length > 0) {
    writeFile(params[0])
} else {
    console.error("Missing file argument.");
}

function writeFile(filepath) {
    console.log("Writing file to: " + filepath);
    // TODO: implementation
    const content = "Hello World!";
    fs.writeFile(filepath, content, (err) => {
        if (err) {
            console.error("Error writing to file: " + err);
        }
    });
}
