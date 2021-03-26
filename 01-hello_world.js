const express = require('express');

let port = process.argv[2];
// let port = 5000;

const app = express();

// on retourne hello world, quand une requete get est émise sur l'URL /home :
app.get('/home', (request, response) => {
    // response.send();
    response.end('Bonjour, monde !')
})
app.listen(port);


