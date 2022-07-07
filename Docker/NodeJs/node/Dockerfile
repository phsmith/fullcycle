FROM node:18-alpine3.15

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /usr/local/bin/wait

RUN chmod +x /usr/local/bin/wait && npm install

CMD /usr/local/bin/wait && node index.js
