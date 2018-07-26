#!/usr/bin/env node

import * as fs from "fs";

/**
 * Usage: ./readFile.js [filepath]
 */

const params = process.argv.slice(2);

if (params.length > 0) {
    const filepath = params[0];
    const lines = fs.readFileSync(filepath, "utf8").split("\n");
    processFileLines(lines);
} else {
    console.error("Missing file argument.");
}

function processFileLines(lines: string[]) {
    console.log("Printing file lines:");
    lines.forEach((line) => {
        // TODO: implementation
        console.log(line);
    });
}
