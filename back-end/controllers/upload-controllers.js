const HttpError = require("../model/http-error");
const mongoose = require("mongoose");
const File = require("../model/file");

const singleUpload = async (req, res, next) => {
  console.log("upload 1", req.file);

  const createFile = new File({
    url: req.file.location,
    name: req.file.key,
    type: req.file.mimetype,
  });

  try {
    await createFile.save();
  } catch (err) {
    const error = new HttpError("Creating file faild", 500);
    return next(error);
  }

  res.json({ file: createFile });

  // return res.send({
  //   status: "success",
  //   message: "file uploaded!",
  //   url: {
  //     size: req.file.size,
  //     url: req.file.location,
  //     name: req.file.key,
  //     type: req.file.mimetype,
  //   },
  // });
};

exports.singleUpload = singleUpload;
