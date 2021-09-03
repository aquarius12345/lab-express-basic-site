const { response } = require('express');
const express= require ('express');

const app = express();


app.use(express.static('public'));

app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'));

app.get('/filmography', (request, response, next) => response.sendFile(__dirname + '/views/film-page.html'));

app.get('/pictures', (request, response, next) => response.sendFile(__dirname + '/views/pictures-page.html'));



app.listen(3000, () => console.log('My fanpage'));