FROM node:20

WORKDIR /usr/src/app

COPY ./frontend ./frontend
COPY ./backend ./backend

WORKDIR /usr/src/app/frontend

RUN npm install
RUN npm run build:ui

WORKDIR /usr/src/app/backend
RUN npm install
CMD npm run docker

