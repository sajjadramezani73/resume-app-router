const Project = require("../model/project");
const HttpError = require("../model/http-error");
const mongoose = require("mongoose");

const adminGetProjects = async (req, res, next) => {
  let projects;
  try {
    projects = await Project.find({});
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
    projects = await Project.find({});
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
  });

  try {
    await createProject.save();
  } catch (err) {
    const error = new HttpError("Creating project faild", 500);
    return next(error);
  }

  res.json({ project: createProject });
};

const updateProject = async (req, res, next) => {
  const { id } = req.body;

  let existingProject;
  try {
    existingProject = await Project.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("update project faild !", 500);
    return next(error);
  }

  if (!existingProject) {
    res
      .status(422)
      .json({ success: 0, errorMessage: "پروژه ای با این مشخصات یافت نشد" });
    return next();
  }

  let updateProject;
  if (req.file) {
    existingProject.images.push({
      id: new mongoose.Types.ObjectId(),
      path: req.file.path,
    });
  }
  try {
    updateProject = await existingProject.save();
  } catch (err) {
    const error = new HttpError("Creatupdatinging about faild", 500);
    return next(error);
  }

  res.send({
    project: updateProject,
    message: "ویرایش اطلاعات پروژه با موفقیت انجام شد",
  });
};

exports.adminGetProjects = adminGetProjects;
exports.getProjects = getProjects;
exports.createProject = createProject;
exports.updateProject = updateProject;
