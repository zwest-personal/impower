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
FROM node:22-alpine
WORKDIR /usr/src/app
COPY --from=build /app/package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["node", "", "dist/src/index.js"]
