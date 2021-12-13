'use strict';

const express = require('express');

// Constants
const PORT = 8080; // ustawia port
const HOST = '0.0.0.0'; // ustawia host
const author = 'Patryk Jezowski' // utawia autora 
const now = new Date().toISOString() // zapisuje akutalny czas

// App
const app = express();
app.get('/', (req, res) => {
  res.send(req.ip); // zwraca adres ip
  // nie udalo mi sie wykonac okreslanai strefy czasowej dla adresu ip



});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}\n` // wyswitla informacje o adresie i porcie serwera
,`Server author: ${author}\n` // wyswitla informacje o autorze serwera
, `Server started at : ${now}`); // wyswitla czas uruchomienia serwera 
