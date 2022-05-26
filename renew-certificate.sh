#!/bin/bash

sudo /opt/bitnami/ctlscript.sh stop nginx
sudo /opt/bitnami/letsencrypt/lego --tls --email="EMAIL-ADDRESS" --domains="DOMAIN" --path="/opt/bitnami/letsencrypt" renew --days 90
sudo /opt/bitnami/ctlscript.sh start nginx
sudo node ./index.js

# Es necesario hacer ejecutable este scrit 
# sudo chmod +x /opt/bitnami/letsencrypt/scripts/[repositorio]/renew-certificate.sh

# Execute the following command to open the crontab editor:
# sudo crontab -e
# Add the following lines to the crontab file and save it:
# 0 0 1 * * /opt/bitnami/letsencrypt/scripts/[repositorio]]/renew-certificate.sh 2> /dev/null

# Para mas informacion hacerca de la renovacion de certificados ir a https://docs.bitnami.com/virtual-machine/how-to/generate-install-lets-encrypt-ssl/#alternative-approach