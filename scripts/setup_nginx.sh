#!/bin/bash
sudo cp /var/www/nginx_config/default /etc/nginx/sites-available/
cd ~
sudo service nginx restart
