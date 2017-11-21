#!/usr/bin/env python

# Usage: ./write_file.py [filepath]

def write_file(filepath):
    # TODO: implementation
    print("Writing file to: " + filepath)
    with open(filepath, "w") as file_content:
        file_content.write("Hello World!")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        write_file(sys.argv[1])
    else:
        print("Missing file argument.")
