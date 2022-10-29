# this docker file is used to test the production build of the vite react locally

FROM node:alpine3.16

WORKDIR /app

COPY package*.json .

RUN npm i

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "serve", "--listen", "8080", "dist"  ]