const express = require("express");
const router = express();
const authControllers = require("../controllers/auth-controllers");

router.post("/login", authControllers.login);

module.exports = router;
