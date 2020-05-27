#!/bin/sh

if [ ! -f /usr/src/app/.env ]
then
    echo "Copying local .env"
    cp /usr/src/app/deployment/.env.local /usr/src/app/.env
else
    echo ".env already exists. Skipping step"
fi

echo "Installing nodemon.."
npm install -g nodemon

echo "Running npm install.."
npm install

echo "Running project..."
npm run dev
