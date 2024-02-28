const express = require("express");
const router = express();
const aboutControllers = require("../controllers/about-controllers");

router.get("/admin/about", aboutControllers.adminGetAbout);

router.get("/", aboutControllers.getAbout);

router.post("/", aboutControllers.createAbout);

router.put("/:id", aboutControllers.updateAbout);

module.exports = router;
