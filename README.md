# lawsroom

Group video chat on your browser. [No Plugin Needed]

### Online: https://lawsroom.com

### How to deploy

1. Install packages
    ```
    $ cd public
    $ npm install
    $ ./node_modules/.bin/bower install
    $ ./node_modules/.bin/gulp js
    $ ./node_modules/.bin/gulp css
    $ ./node_modules/.bin/gulp browserify
    $ cd ../
    ```
1. Start lawsroom
    ```
    $ sed -i s/lawsroom.com/YOUR_DOMAIN/ run.sh
    $ ./run.sh # or nohup ./run.sh &
    ```
1. Start random
    ```
    $ cd random
    $ sed -i s/lawsroom.com/YOUR_DOMAIN/ run.sh
    $ ./run.sh # or nohup ./run.sh &
    ```
1. Configure nginx
    ```
    server {
        listen      443 ssl http2;
        server_name  YOUR_DOMAIN;
        ssl                  on;
        ssl_certificate      YOUR_CERT;
        ssl_certificate_key  YOUR_KEY;
        location / {
            proxy_pass http://127.0.0.1:1906;
            proxy_redirect    off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        location /signal/_/ {
            proxy_pass http://127.0.0.1:1906;

            proxy_redirect    off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
        }
        location /signal/r/ {
            proxy_pass http://127.0.0.1:1907;

            proxy_redirect    off;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
        }
    }
    ```
