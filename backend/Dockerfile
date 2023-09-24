FROM node:alpine

WORKDIR /usr/nodeapp

ENV MONGO_URL=mongo://mongo:27017/todo

COPY . .

RUN npm install

CMD ["npm","start"]