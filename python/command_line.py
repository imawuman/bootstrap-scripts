#!/usr/bin/env python

# Usage: ./command_line.py [arg1] [arg2] ...
"""Pass command line arguments to a script function"""

def command_line(arg):
    """Process the command line arguments"""
    # TODO: implementation
    print arg

if __name__ == "__main__":
    import sys
    # pylint: disable=E1120
    command_line(*sys.argv[1:])
