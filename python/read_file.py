#!/usr/bin/env python

# Usage: ./read_file.py [filepath]

def read_file(filepath):
    print("Printing file lines:")
    with open(filepath) as file_content:
        for line in file_content:
            # TODO: implementation
            print(line, end="")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        read_file(sys.argv[1])
    else:
        print("Missing file argument.")
