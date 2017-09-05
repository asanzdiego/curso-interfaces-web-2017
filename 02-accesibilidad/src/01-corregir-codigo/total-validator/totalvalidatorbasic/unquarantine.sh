#!/bin/sh
#
# Copyright 2016, Total Validator. All rights reserved.
# Use is subject to the terms of the license.
#
find $1 | xargs xattr -d com.apple.quarantine
