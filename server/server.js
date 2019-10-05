






require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parser application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario.routes'));

mongoose.connect(process.env.URLDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto ', process.env.PORT);
});