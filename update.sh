#!/bin/bash
rm -Rf /mnt/hgfs/share/www/public/*
svn update
cp -r ./* /mnt/hgfs/share/www/public/ 

