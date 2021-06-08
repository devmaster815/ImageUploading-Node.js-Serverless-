FROM node:12-alpine AS builder
#install nodejs dependencies
COPY package*.json ./

RUN npm install -g npm && \
    npm install

#Relase image
FROM node:12-alpine

LABEL multi.maintainer="abbaswattoo@gmail.com"\
    multi.owner="DialPop" \
    multi.service="DialPop backend API"

WORKDIR /API

COPY --from=builder node_modules ./node_modules

# Copy source code to app folder
COPY . .

EXPOSE 3000

CMD npm run start
