const jwt = require("jsonwebtoken");

// Middleware function to check authorization token
function checkToken(req, res, next) {
  const reqToken = req.headers.authorization;

  if (!reqToken) {
    return res
      .status(401)
      .json({ message: "Authorization token is required." });
  } else {
    const token = reqToken.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token." });
      } else {
        next();
      }
    });
  }
}

module.exports = checkToken;
