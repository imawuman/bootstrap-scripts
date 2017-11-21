#!/usr/bin/env python

# Usage: ./command_line.py [arg1] [arg2] ...

def command_line(arg):
    # TODO: implementation
    print arg

if __name__ == "__main__":
    import sys
    # pylint: disable=E1120
    command_line(*sys.argv[1:])
