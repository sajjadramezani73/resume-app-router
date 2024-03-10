const express = require("express");
const router = express();
const singleUpload = require("../middleware/single-upload");
const uploadController = require("../controllers/upload-controllers");
const checkToken = require("../middleware/auth");

router.post(
  "/singleUpload",
  checkToken,
  singleUpload.single("image"),
  uploadController.singleUpload
);

module.exports = router;
