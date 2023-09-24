FROM nginx

WORKDIR /usr/share/nginx/html

COPY ./build .

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g" ,"daemon off;"]