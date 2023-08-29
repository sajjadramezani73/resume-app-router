const express = require("express");
const router = express();
const experienceControllers = require("../controllers/experience-controllers");

router.get("/adminGetExperiences", experienceControllers.adminGetExperiences);

router.get("/getExperiences", experienceControllers.getExperiences);

router.post("/createExperience", experienceControllers.createExperience);

module.exports = router;
