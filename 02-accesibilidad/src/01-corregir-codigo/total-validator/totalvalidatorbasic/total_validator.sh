#!/bin/sh
#
# Copyright 2016, Total Validator. All rights reserved.
# Use is subject to the terms of the license.
#
curdir=`dirname "$0"`
cd $curdir

memory=-Xmx384m
java $memory -jar totalvalidator.jar 2>/dev/null
