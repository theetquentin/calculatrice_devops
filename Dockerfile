FROM node:24-alpine

WORKDIR /app/calculatrice-jenkins

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
