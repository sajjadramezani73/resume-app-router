const express = require("express");
const router = express();
const aboutControllers = require("../controllers/about-controllers");
const checkToken = require("../middleware/auth");

router.get("/admin/about", checkToken, aboutControllers.adminGetAbout);

router.get("/", aboutControllers.getAbout);

router.post("/", checkToken, aboutControllers.createAbout);

router.put("/:id", checkToken, aboutControllers.updateAbout);

module.exports = router;
