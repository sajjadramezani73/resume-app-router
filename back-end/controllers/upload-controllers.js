const HttpError = require("../model/http-error");
const mongoose = require("mongoose");

const singleUpload = async (req, res, next) => {
  console.log(req.file);

  return res.send({
    status: "success",
    message: "file uploaded!",
    url: {
      size: req.file.size,
      url: req.file.location,
      name: req.file.key,
      type: req.file.mimetype,
    },
  });
};

exports.singleUpload = singleUpload;
