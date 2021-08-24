const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    "mongodb://localhost/usuarios",
    {
        useNewUrlParser: true
    },
    (err, res) => {
        err && console.log('error');
        app.listen(4000, () => {
            console.log('error');
        });
    }
);
