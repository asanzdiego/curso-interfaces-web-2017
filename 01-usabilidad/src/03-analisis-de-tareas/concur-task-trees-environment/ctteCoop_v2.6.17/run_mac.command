#!/bin/bash
echo "           \\$0: $0"

_my_name=`basename $0`
if [ "`echo $0 | cut -c1`" = "/" ]; then
  _my_path=`dirname $0`
else
  _my_path=`pwd`/`echo $0 | sed -e s/$_my_name//`
fi

echo "     Filename: $_my_name"
echo "Absolute path: $_my_path"
cd $_my_path
java -jar ctteCoop.jar &
exit
