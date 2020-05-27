#!/bin/sh

if [ ! -f /usr/src/app/.env ]
then
    echo "Coping production .env"
    cp /usr/src/app/deployment/.env.prod /usr/src/app/.env
else
    echo ".env already exists. Skipping step."
fi

echo "Running npm install..."
npm install

echo "Rebuilding node-sass..."
npm rebuild node-sass

echo "Running project..."
npm run build

npm start
