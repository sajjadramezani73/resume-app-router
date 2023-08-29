const express = require("express");
const router = express();
const projectControllers = require("../controllers/project-controllers");
const fileUpload = require("../middleware/file-upload");

router.get("/adminGetProjects", projectControllers.adminGetProjects);

router.get("/getProjects", projectControllers.getProjects);

router.post("/createProject", projectControllers.createProject);

router.post(
  "/updateProject",
  fileUpload.single("avatar"),
  projectControllers.updateProject
);

module.exports = router;
