FROM node:latest

RUN mkdir /srv/example
WORKDIR /srv/example

COPY package.json  ./
RUN yarn && yarn cache clean
COPY . .