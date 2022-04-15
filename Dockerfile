FROM node:14 as build
WORKDIR /build/frontend
COPY frontend/package.json .
RUN npm install
COPY frontend .
RUN npm run build

WORKDIR /build/backend
COPY backend/package.json .
RUN npm install
COPY backend .
RUN npm run build
CMD node dist/src/main.js
EXPOSE $PORT
