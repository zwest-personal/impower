#multi-stage Docker build for MAXIMUM EFFICIENCY
#setup
FROM node:22-alpine AS setup
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# build
FROM setup AS build
WORKDIR /app
RUN npm run build

# run
FROM nginx:alpine

COPY ./nginx/deploy/entrypoint.sh .
COPY ./nginx/deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist ./app/static

EXPOSE 8080
STOPSIGNAL SIGTERM

ENTRYPOINT sh entrypoint.sh



