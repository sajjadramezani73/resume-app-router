const Experience = require("../model/experience");
const HttpError = require("../model/http-error");

const adminGetExperiences = async (req, res, next) => {
  let experiences;
  try {
    experiences = await Experience.find({}).sort({ createdAt: -1 });
  } catch (err) {
    const error = new HttpError("get experience faild", 500);
    return next(error);
  }

  res.json({ experiences: experiences });
};

const getExperiences = async (req, res, next) => {
  const { location } = req.headers;

  let experiences;
  try {
    experiences = await Experience.find({}).sort({ createdAt: -1 });
  } catch (err) {
    const error = new HttpError("get experience faild", 500);
    return next(error);
  }

  const translatedExperiences = experiences.map((item) => {
    const translatedExp = {};
    Object.keys(item._doc).forEach((exp) => {
      if (item._doc[exp].hasOwnProperty("fa")) {
        translatedExp[exp] = item._doc[exp][location];
      } else {
        translatedExp[exp] = item._doc[exp];
      }
    });
    return translatedExp;
  });

  res.json({ experiences: translatedExperiences });
};

const createExperience = async (req, res, next) => {
  const {
    title,
    company,
    jobType,
    jobTime,
    dateStart,
    dateEnd,
    soFar,
    description,
    companyLink,
    skill,
  } = req.body;

  const createExperience = new Experience({
    title: title,
    company: company,
    jobType: jobType,
    jobTime: jobTime,
    dateStart: dateStart,
    dateEnd: dateEnd,
    soFar: soFar,
    description: description,
    companyLink: companyLink,
    skill: skill,
  });

  try {
    await createExperience.save();
  } catch (err) {
    const error = new HttpError("Creating experience faild", 500);
    return next(error);
  }

  res.json({ experience: createExperience });
};

const getOneExperience = async (req, res, next) => {
  const { id } = req.params;

  let existingExperience;
  try {
    existingExperience = await Experience.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("get One faild !", 500);
    return next(error);
  }

  if (!existingExperience) {
    res.status(422).json({
      success: 0,
      errorMessage: "سابقه کاری با این آی دی یافت نشد",
    });
    return next();
  }

  res.json({ experience: existingExperience });
};

const deleteExperience = async (req, res, next) => {
  const { id } = req.params;

  let existingExperience;
  try {
    existingExperience = await Experience.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  if (!existingExperience) {
    res.status(422).json({
      success: 0,
      errorMessage: "سابقه کاری با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await Experience.findOneAndDelete({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ success: 1, errorMessage: "سابقه تحصیلی با موفقیت حذف شد." });
};

const editExperience = async (req, res, next) => {
  const { id } = req.params;
  const {
    title,
    company,
    jobType,
    jobTime,
    dateStart,
    dateEnd,
    soFar,
    description,
    companyLink,
    skill,
  } = req.body;

  let existingExperience;
  try {
    existingExperience = await Experience.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("edited faild !", 500);
    return next(error);
  }

  if (!existingExperience) {
    res.status(422).json({
      success: 0,
      errorMessage: "سابقه کاری با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await Experience.findOneAndUpdate(
      { _id: id },
      {
        title,
        company,
        jobType,
        jobTime,
        dateStart,
        dateEnd,
        soFar,
        description,
        companyLink,
        skill,
      },
      { new: true }
    );
  } catch (err) {
    const error = new HttpError("updated faild !", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ success: 1, errorMessage: "سابقه کاری با موفقیت ویرایش شد." });
};

exports.adminGetExperiences = adminGetExperiences;
exports.getExperiences = getExperiences;
exports.createExperience = createExperience;
exports.getOneExperience = getOneExperience;
exports.deleteExperience = deleteExperience;
exports.editExperience = editExperience;
