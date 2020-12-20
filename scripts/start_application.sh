#!/bin/bash
cd ~
sudo pm2 stop all
sudo pm2 start /var/www/index.js
cd ~