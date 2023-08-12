FROM node:18.13.0

WORKDIR /home/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "start"]
