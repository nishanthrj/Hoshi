FROM node:alpine

WORKDIR /core/

COPY ./package.json ./package-lock.json /core/

RUN npm install

COPY . /core/

RUN npm run build

EXPOSE 3000

CMD npm run start

