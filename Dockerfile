## -----------------------------------------------------------------------------
## -- Base
## -----------------------------------------------------------------------------
FROM node:18.14.2 AS base-stage

RUN npm install -g @vue/cli@4.5.15
WORKDIR /usr/src/app

## -----------------------------------------------------------------------------
## -- Dev
## -----------------------------------------------------------------------------
FROM base-stage AS dev

# Esto reemplaza el anterior CMD. Este es el comando correcto para desarrollo.
CMD npm install && npm run dev -- --host 0.0.0.0

## -----------------------------------------------------------------------------
## -- Build
## -----------------------------------------------------------------------------
FROM base-stage AS build-stage

COPY package*.json ./
RUN npm ci

COPY . .

RUN chown -R node:node .
USER node

RUN npm run build
