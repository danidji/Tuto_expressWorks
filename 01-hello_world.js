const express = require('express');

let port = process.argv[2];
// let port = 5000;

const app = express();
app.get('/home', (request, response) => {
    // response.send();
    response.end('Bonjour, monde !')
})
app.listen(port);


