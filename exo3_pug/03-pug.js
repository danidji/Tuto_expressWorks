// console.log(process.argv)

const express = require('express');
const path = require('path');

const app = express();

let port = process.argv[2];
// let port = 5000;
let pathFile = process.argv[3]


// v--- Classiquement on précise le chemin du dossier de template
// app.set('views', path.join(__dirname, 'templates'))
app.set('views', pathFile)


//express défini le type d'extension des views
app.set('view engine', 'pug');


app.get('/home', (request, response) => {
    // render renvoie le fichier index.pug en index.html compatible navigateur et remplace le template date par sa valeur défini --v
    response.render('index', { date: new Date().toDateString() })
})
app.listen(port);


