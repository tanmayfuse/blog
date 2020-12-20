#!/bin/bash
sudo pm2 stop all
sudo pm2 start /var/www/index.js
# sudo rm -rf /var/www/scripts
# sudo rm -rf /var/www/nginx_config
# sudo rm -rf appspec.yml