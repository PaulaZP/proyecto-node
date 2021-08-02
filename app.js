require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/user.route');
const favoriteMusicRoute = require('./routes/favorite.route');
const recentRoute = require('./routes/recent.route');
const playlistRoute = require('./routes/playlist.route');

const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true});
const db = mongoose.connection;

//on - es un evento, en el cual nos va a imprimir error si algo sale mal
db.on('error', error=>console.log(error))

//once - se usa en condiciones en las que queremos que una función en particular se ejecute solo una vez.
db.once('open', ()=> console.log('connection to db established'))

app.use(express.json()); //vamos a traer lo del body como un JSON
app.use(express.urlencoded({ // es una función de middleware incorporada en Express. Analiza las solicitudes entrantes con cargas útiles codificadas en urlencoded y se basa en body-parser.
    type: 'application/x-www-form-urlencoded',
    extended: true,
}))

// el app.use llama a los routes y los routes llama a los controllers
app.use('/', userRoute);
app.use('/', favoriteMusicRoute);
app.use('/', recentRoute);
app.use('/', playlistRoute);

app.use('*', (req, res) =>{
    res.status(400)
    res.send("Path cannont found")
})

//listen - se usa para vincular y escuchar las conexiones en el host y puerto especificados.
app.listen(PORT, HOSTNAME, () => {
    console.log(`server running on ${HOSTNAME}: ${PORT}`);
})
