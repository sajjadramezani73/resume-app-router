const express = require("express");
const router = express();
const projectControllers = require("../controllers/project-controllers");
const checkToken = require("../middleware/auth");

router.get("/admin/projects", checkToken, projectControllers.adminGetProjects);

router.get("/", checkToken, projectControllers.getProjects);

router.get("/detail/:id", checkToken, projectControllers.getOneProjectSite);

router.post("/", checkToken, projectControllers.createProject);

router.get("/:id", checkToken, projectControllers.getOneProject);

router.delete("/:id", checkToken, projectControllers.deleteProject);

router.put("/:id", checkToken, projectControllers.editProject);

module.exports = router;
