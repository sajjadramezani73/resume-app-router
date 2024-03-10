const express = require("express");
const router = express();
const experienceControllers = require("../controllers/experience-controllers");
const checkToken = require("../middleware/auth");

router.get(
  "/admin/experiences",
  checkToken,
  experienceControllers.adminGetExperiences
);

router.get("/", checkToken, experienceControllers.getExperiences);

router.post("/", checkToken, experienceControllers.createExperience);

router.get("/:id", checkToken, experienceControllers.getOneExperience);

router.delete("/:id", checkToken, experienceControllers.deleteExperience);

router.put("/:id", checkToken, experienceControllers.editExperience);

module.exports = router;
