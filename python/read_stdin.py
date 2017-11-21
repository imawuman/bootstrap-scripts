#!/usr/bin/env python

# Usage: ./read_stdin.py

import sys

def read_stdin():
    for line in sys.stdin:
        # TODO: implementation
        print("Input: " + line, end="")

if __name__ == "__main__":
    print("Press enter to send input...")
    read_stdin()
