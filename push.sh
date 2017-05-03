#!/bin/bash
svn status | grep "!" | awk '{print $2}' | while read line;do svn delete ${line};done;
svn status | grep "?" | awk '{print $2}' | while read line;do svn add ${line};done;
svn commit -m 'auto'
