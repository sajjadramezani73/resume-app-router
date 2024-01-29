const express = require("express");
const router = express();
const singleUpload = require("../middleware/single-upload");
const uploadController = require("../controllers/upload-controllers");

router.post(
  "/singleUpload",
  singleUpload.single("image"),
  uploadController.singleUpload
);

module.exports = router;
