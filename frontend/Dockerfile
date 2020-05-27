FROM ubuntu
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y git nodejs npm
RUN npm install -g npm@latest

ARG APP_ENV

COPY deployment/.env.${APP_ENV} ./.env
COPY deployment/start.${APP_ENV}.sh /start.sh
RUN chmod +x /start.sh

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Set environment variables
ENV NODE_ENV local
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000

RUN npm install

EXPOSE 3000

ENTRYPOINT ["/start.sh"]
