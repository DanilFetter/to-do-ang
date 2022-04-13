FROM node:14 as build
WORKDIR /usr/local/app
COPY package.json /usr/local/app
RUN npm install
COPY . /usr/local/app
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/frontend /usr/share/nginx/html
