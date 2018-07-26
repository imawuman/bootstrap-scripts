#!/usr/bin/env node

import * as fs from "fs";

/**
 * Usage: ./writeFile.js [filepath]
 */

const params = process.argv.slice(2);

if (params.length > 0) {
    writeFile(params[0]);
} else {
    console.error("Missing file argument.");
}

function writeFile(filepath: string) {
    // TODO: implementation
    console.log("Writing file to: " + filepath);
    const content = "Hello World!";
    fs.writeFile(filepath, content, (err) => {
        if (err) {
            console.error("Error writing to file: " + err);
        }
    });
}
