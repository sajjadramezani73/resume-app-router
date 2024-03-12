const About = require("../model/about");
const HttpError = require("../model/http-error");

const adminGetAbout = async (req, res, next) => {
  let about;
  try {
    about = await About.findOne({}).populate("avatar").exec();
  } catch (err) {
    const error = new HttpError("Creating about faild", 500);
    return next(error);
  }

  let aboutMe;
  if (about) {
    aboutMe = {
      _id: about._id,
      firstName: about.firstName,
      lastName: about.lastName,
      job: about.job,
      address: about.address,
      bio: about.bio,
      gender: about.gender,
      age: about.age,
      email: about.email,
      phone: about.phone,
      socialsNetwork: about.socialsNetwork,
      avatar: about.avatar,
    };
  } else {
    aboutMe = {};
  }

  res.json({ aboutMe: aboutMe });
};

const getAbout = async (req, res, next) => {
  const { location } = req.headers;

  let about;
  try {
    about = await About.findOne({}).populate("avatar").exec();
  } catch (err) {
    const error = new HttpError("Creating about faild", 500);
    return next(error);
  }

  let aboutMe = {};

  if (about) {
    aboutMe = {
      firstName: about.firstName[location],
      lastName: about.lastName[location],
      job: about.job[location],
      address: about.address[location],
      bio: about.bio[location],
      gender: about.gender[location],
      age: about.age,
      email: about.email,
      phone: about.phone,
      socialsNetwork: about.socialsNetwork,
      avatar: about.avatar,
    };
  } else {
    aboutMe = {};
  }

  res.json({ aboutMe: aboutMe });
};

const createAbout = async (req, res, next) => {
  const {
    firstName,
    lastName,
    job,
    address,
    gender,
    bio,
    age,
    email,
    phone,
    socialsNetwork,
    avatar,
  } = req.body;

  const createAbout = new About({
    firstName: firstName,
    lastName: lastName,
    job: job,
    address: address,
    bio: bio,
    age: age,
    email: email,
    phone: phone,
    gender: gender,
    socialsNetwork: socialsNetwork,
    avatar: avatar ? avatar : null,
  });

  try {
    await createAbout.save();
  } catch (err) {
    const error = new HttpError("Creating about faild", 500);
    return next(error);
  }

  res.json({ about: createAbout });
};

const updateAbout = async (req, res, next) => {
  const { id } = req.params;
  const {
    firstName,
    lastName,
    job,
    address,
    gender,
    bio,
    age,
    email,
    phone,
    socialsNetwork,
    avatar,
  } = req.body;

  let existingAbout;
  try {
    existingAbout = await About.findOne({ _id: id });
  } catch (err) {
    const error = new HttpError("edited faild !", 500);
    return next(error);
  }

  if (!existingAbout) {
    res.status(422).json({
      success: 0,
      errorMessage: "اطلاعاتی با این آی دی یافت نشد",
    });
    return next();
  }

  try {
    await About.findOneAndUpdate(
      { _id: id },
      {
        firstName,
        lastName,
        job,
        address,
        gender,
        bio,
        age,
        email,
        phone,
        socialsNetwork,
        avatar,
      },
      { new: true }
    );
  } catch (err) {
    const error = new HttpError("updated faild !", 500);
    return next(error);
  }

  res
    .status(201)
    .json({ success: 1, errorMessage: " اطلاعات با موفقیت ویرایش شد." });
};

exports.adminGetAbout = adminGetAbout;
exports.getAbout = getAbout;
exports.createAbout = createAbout;
exports.updateAbout = updateAbout;
