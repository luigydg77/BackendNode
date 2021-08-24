const mongoose = require('mongoose');
const User = require('../models/User');

const findAllUsers = (req, res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    })
}

const addUsers = (req, res) => {
    // console.log(req)
    let user = new User({
        firstName: req.body.firstName,
        lasName: req.body.lasName,
        email: req.body.email,
        role: req.body.role
    });

    user.save((err, users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    });
};

module.exports = { findAllUsers, addUsers };