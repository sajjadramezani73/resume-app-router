const express = require("express");
const router = express();
const educationControllers = require("../controllers/education-controllers");

router.get("/admin/educations", educationControllers.adminGetEducations);

router.get("/", educationControllers.getEducations);

router.post("/", educationControllers.createEducation);

router.get("/:id", educationControllers.getOneEducation);

router.delete("/:id", educationControllers.deleteEducation);

router.put("/:id", educationControllers.editEducation);

module.exports = router;
