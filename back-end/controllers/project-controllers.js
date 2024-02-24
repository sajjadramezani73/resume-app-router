const Project = require("../model/project");
const HttpError = require("../model/http-error");
const mongoose = require("mongoose");

const adminGetProjects = async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find({}).sort({ createdAt: -1 });
  } catch (err) {
    const error = new HttpError("get projects faild", 500);
    return next(error);
  }

  res.json({ projects: projects });
};

const getProjects = async (req, res, next) => {
  const { location } = req.headers;

  let projects;
  try {
    projects = await Project.find({})
      .sort({ createdAt: -1 })
      .populate("images")
      .exec();
  } catch (err) {
    const error = new HttpError("get projects faild", 500);
    return next(error);
  }

  const translatedProjects = projects.map((item) => {
    const translatedPrj = {};
    Object.keys(item._doc).forEach((prj) => {
      if (item._doc[prj].hasOwnProperty("fa")) {
        translatedPrj[prj] = item._doc[prj][location];
      } else {
        translatedPrj[prj] = item._doc[prj];
      }
    });
    return translatedPrj;
  });

  res.json({ projects: translatedProjects });
};

const createProject = async (req, res, next) => {
  const { title, briefDescription, description, images, links, skills } =
    req.body;

  const createProject = new Project({
    title: title,
    briefDescription: briefDescription,
    description: description,
    links: links,
    skills: skills,
    images: images,
  });

  try {
    await createProject.save();
  } catch (err) {
    const error = new HttpError("Creating project faild", 500);
    return next(error);
  }

  res.json({ project: createProject });
};

const getOneProject = async (req, res, next) => {
  const { id } = req.params;

  let existingProject;
  try {
    existingProject = await Project.findOne({ _id: id })
      .populate("images")
      .exec();
  } catch (err) {
    const error = new HttpError("get One faild !", 500);
    return next(error);
  }

  if (!existingProject) {
    res.status(422).json({
      success: 0,
      errorMessage: " پروژه ای با این آی دی یافت نشد",
    });
    return next();
  }

  res.json({ project: existingProject });
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;

  let existingProject;
  try {
    existingProject = await Project.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  if (!existingProject) {
    res.status(422).json({
      success: 0,
      errorMessage: "پروژه با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await Project.findOneAndDelete({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  res.status(201).json({ success: 1, errorMessage: "پروژه با موفقیت حذف شد." });
};

const editProject = async (req, res, next) => {
  const { id } = req.params;
  const { title, briefDescription, description, links, skills, images } =
    req.body;

  let existingProject;
  try {
    existingProject = await Project.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("edited faild !", 500);
    return next(error);
  }

  if (!existingProject) {
    res.status(422).json({
      success: 0,
      errorMessage: "پروژه با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await Project.findOneAndUpdate(
      { _id: id },
      {
        title,
        briefDescription,
        description,
        links,
        skills,
        images,
      },
      { new: true }
    );
  } catch (err) {
    const error = new HttpError("updated faild !", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ success: 1, errorMessage: " پروژه با موفقیت ویرایش شد." });
};

exports.adminGetProjects = adminGetProjects;
exports.getProjects = getProjects;
exports.createProject = createProject;
exports.getOneProject = getOneProject;
exports.deleteProject = deleteProject;
exports.editProject = editProject;
