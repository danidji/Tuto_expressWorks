const express = require('express');
const path = require('path');

// let port = process.argv[2];
// let pathFile = process.argv[3]
let pathFile = './public'
let port = 5000;

const app = express();


//Permet de renvoyer des fichier statiques présent sur le chemin précisé en paramètre
// doc : https://expressjs.com/fr/starter/static-files.html
// on peut ainsi charger des fichiers .css, .js ... 

app.use(express.static(pathFile));

app.get('/', (request, response) => {
    response.end()
})
app.listen(port);

