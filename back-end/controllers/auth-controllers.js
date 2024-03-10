const HttpError = require("../model/http-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res, next) => {
  const { username, password } = req.body;

  console.log(username, password);

  if (process.env.USERNAME !== username || process.env.PASSWORD !== password) {
    res
      .status(422)
      .json({ success: 0, message: "نام کاربری یا رمز عبور اشتباه است." });
    return next();
  }

  let token;
  try {
    token = jwt.sign(
      { username: username, password: password },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
  } catch (err) {
    const error = new HttpError("login faild.", 500);
    return next(error);
  }

  res.json({
    success: 1,
    message: "با موفقیت وارد شدید",
    token: token,
  });
};

exports.login = login;
