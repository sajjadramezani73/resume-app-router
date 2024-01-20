const express = require("express");
const router = express();
const projectControllers = require("../controllers/project-controllers");
const fileUpload = require("../middleware/file-upload");

router.get("/admin/projects", projectControllers.adminGetProjects);

router.get("/", projectControllers.getProjects);

router.post("/", projectControllers.createProject);

router.get("/:id", projectControllers.getOneProject);

router.put("/:id", projectControllers.editProject);

// router.post(
//   "/updateProject",
//   fileUpload.single("avatar"),
//   projectControllers.updateProject
// );

module.exports = router;
