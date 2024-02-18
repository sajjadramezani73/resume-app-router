const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

const config = {
  endpoint: process.env.LIARA_ENDPOINT,
  accessKeyId: process.env.LIARA_ACCESS_KEY,
  secretAccessKey: process.env.LIARA_SECRET_KEY,
  region: "default",
};

const s3 = new AWS.S3(config);

const singleUpload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.LIARA_BUCKET_NAME,
    key: function (req, file, cb) {
      console.log("upload middleware", file);
      const timestamp = Date.now(); // Get current timestamp
      const fileNameParts = file.originalname.split("."); // Split filename by '.'
      const extension = fileNameParts.pop(); // Get the file extension
      const originalFileName = fileNameParts.join("."); // Get the original filename without extension
      const newFileName = `${originalFileName}_${timestamp}.${extension}`; // Concatenate new filename with timestamp
      cb(null, newFileName);
    },
  }),
});

module.exports = singleUpload;
