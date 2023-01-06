FROM node

WORKDIR /app

COPY . /app

RUN mkdir -p /home/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 5174

EXPOSE 5174

CMD ["node", "Server.js"]