const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require("./api/user");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", Users);
const uri = "mongodb+srv://Luis:7jbMpvivVacsPNHr@cluster0.1sk6v.mongodb.net/Biblioteca?retryWrites=true&w=majority";

mongoose.connect(
    uri,

    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, res) => {
        err && console.log('error');
        app.listen(3000, () => {
            console.log('conectado')
        })
    }
)
    // .then(() => console.log('conectado'))
    // .catch(e => console.log(e))



