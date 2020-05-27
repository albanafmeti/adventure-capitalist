FROM node:alpine
WORKDIR /usr/src/app
ARG APP_ENV=local

RUN apk update && apk add git openssh npm ca-certificates tzdata curl bash

COPY deployment/.env.${APP_ENV} ./.env
COPY deployment/start.${APP_ENV}.sh /start.sh

RUN chmod +x /start.sh

COPY package*.json ./

RUN npm i --only=production

COPY . .

EXPOSE 80

ENTRYPOINT ["/start.sh"]
