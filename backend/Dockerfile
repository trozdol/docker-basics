FROM node:18
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install
COPY ./ /usr/app
CMD ["npm", "start"]