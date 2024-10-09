# vite-plugin-federation

https://www.jianshu.com/p/5901adc98fcf
https://github.com/originjs/vite-plugin-federation/tree/main


## NGINX 解决跨域问题

～～～
server {
    listen 80;
    server_name vite-demo.com;

    root /Users/xiaolin/web/miss/vite-plugin-federation/remote/dist;
        index index.html;


    location / {
        try_files $uri $uri/ /index.html;
    }
    location /assets {
        add_header 'Access-Control-Allow-Origin' 'http://localhost:5001';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'application/javascript; charset=utf-8';
    }
}
～～～