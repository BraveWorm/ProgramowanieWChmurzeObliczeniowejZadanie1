FROM node:16

# Tworzenie folderu aplikacji
WORKDIR /usr/src/app

# Instalowanie dependencies aplikacji
COPY package*.json ./
RUN npm install

# Przypisanie zrodel aplikacji
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]