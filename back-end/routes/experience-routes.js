const express = require("express");
const router = express();
const experienceControllers = require("../controllers/experience-controllers");

router.get("/admin/experiences", experienceControllers.adminGetExperiences);

router.get("/", experienceControllers.getExperiences);

router.post("/", experienceControllers.createExperience);

// router.get("/:id", educationControllers.getOneEducation);

// router.delete("/:id", educationControllers.deleteEducation);

// router.put("/:id", educationControllers.editEducation);

module.exports = router;
