#!/usr/bin/env python

# Usage: ./read_line.py [filepath]

def read_file(filepath):
    print "Printing file lines:"
    with open(filepath) as f:
        for line in f:
            # TODO: implementation
            print line,

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        read_file(sys.argv[1])
    else:
        print "Missing file argument."
