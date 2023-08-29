const express = require("express");
const router = express();
const educationControllers = require("../controllers/education-controllers");

router.get("/adminGetEducations", educationControllers.adminGetEducations);

router.get("/getEducations", educationControllers.getEducations);

router.post("/createEducation", educationControllers.createEducation);

module.exports = router;
