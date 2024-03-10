const express = require("express");
const router = express();
const educationControllers = require("../controllers/education-controllers");
const checkToken = require("../middleware/auth");

router.get(
  "/admin/educations",
  checkToken,
  educationControllers.adminGetEducations
);

router.get("/", checkToken, educationControllers.getEducations);

router.post("/", checkToken, educationControllers.createEducation);

router.get("/:id", checkToken, educationControllers.getOneEducation);

router.delete("/:id", checkToken, educationControllers.deleteEducation);

router.put("/:id", checkToken, educationControllers.editEducation);

module.exports = router;
