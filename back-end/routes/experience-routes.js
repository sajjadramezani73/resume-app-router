const express = require("express");
const router = express();
const experienceControllers = require("../controllers/experience-controllers");

router.get("/admin/experiences", experienceControllers.adminGetExperiences);

router.get("/", experienceControllers.getExperiences);

router.post("/", experienceControllers.createExperience);

router.get("/:id", experienceControllers.getOneExperience);

router.delete("/:id", experienceControllers.deleteExperience);

router.put("/:id", experienceControllers.editExperience);

module.exports = router;
