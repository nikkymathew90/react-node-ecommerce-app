const express = require("express");

const router = express.Router();

const { signup } = require("./user.controller");

router.post("/signup", signup);

module.exports = router;
