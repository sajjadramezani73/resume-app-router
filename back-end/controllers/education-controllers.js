const Education = require("../model/education");
const HttpError = require("../model/http-error");

const adminGetEducations = async (req, res, next) => {
  let educations;
  try {
    educations = await Education.find({});
  } catch (err) {
    const error = new HttpError("get education faild", 500);
    return next(error);
  }

  res.json({ educations: educations });
};

const getEducations = async (req, res, next) => {
  const { location } = req.headers;

  let educations;
  try {
    educations = await Education.find({});
  } catch (err) {
    const error = new HttpError("get education faild", 500);
    return next(error);
  }

  const translatedEducations = educations.map((item) => {
    const translatedEdu = {};
    Object.keys(item._doc).forEach((edu) => {
      if (item._doc[edu].hasOwnProperty("fa")) {
        translatedEdu[edu] = item._doc[edu][location];
      } else {
        translatedEdu[edu] = item._doc[edu];
      }
    });
    return translatedEdu;
  });

  res.json({ educations: translatedEducations });
};

const createEducation = async (req, res, next) => {
  const { title, university, location, dateStart, dateEnd, grade } = req.body;

  const createEducation = new Education({
    title: title,
    university: university,
    location: location,
    dateStart: dateStart,
    dateEnd: dateEnd,
    grade: grade,
  });

  try {
    await createEducation.save();
  } catch (err) {
    const error = new HttpError("Creating education faild", 500);
    return next(error);
  }

  res.json({ education: createEducation });
};

const deleteEducation = async (req, res, next) => {
  const { id } = req.params;

  let existingEducation;
  try {
    existingEducation = await Education.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  if (!existingEducation) {
    res.status(422).json({
      success: 0,
      errorMessage: "سابقه تحصیلی با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await Education.findOneAndDelete({ _id: id });
  } catch (err) {
    const error = new HttpError("deleted faild !", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ success: 1, errorMessage: "سابقه تحصیلی با موفقیت حذف شد." });
};

exports.adminGetEducations = adminGetEducations;
exports.getEducations = getEducations;
exports.createEducation = createEducation;
exports.deleteEducation = deleteEducation;
