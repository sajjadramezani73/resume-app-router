const express = require("express");
const router = express();
const projectControllers = require("../controllers/project-controllers");

router.get("/admin/projects", projectControllers.adminGetProjects);

router.get("/", projectControllers.getProjects);

router.get("/detail/:id", projectControllers.getOneProjectSite);

router.post("/", projectControllers.createProject);

router.get("/:id", projectControllers.getOneProject);

router.delete("/:id", projectControllers.deleteProject);

router.put("/:id", projectControllers.editProject);

module.exports = router;
