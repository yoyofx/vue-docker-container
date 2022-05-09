FROM ccr.ccs.tencentyun.com/xxx/xxx-nginxbase:v1.0.0

COPY dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/default.conf
