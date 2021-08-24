const UserController = require('../controller/UserController');
const express = require('express');

const router = express.Router();

router.get("/all", UserController.findAllUsers);
router.post("/add", UserController.addUsers);

module.exports = router;