const express = require("express");
const router = express();
const aboutControllers = require("../controllers/about-controllers");
const fileUpload = require("../middleware/file-upload");

// router.post('/signup', userControllers.signup)

// router.post('/login', userControllers.login)

router.get("/admin/about", aboutControllers.adminGetAbout);

router.get("/", aboutControllers.getAbout);

router.post("/", aboutControllers.createAbout);

router.post(
  "/updateAbout",
  fileUpload.single("avatar"),
  aboutControllers.updeteAbout
);

module.exports = router;
