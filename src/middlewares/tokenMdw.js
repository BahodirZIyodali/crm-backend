const jwt = require("jsonwebtoken");

//admin Mdw
const tokenAdminMdw = async (req, res, next) => {
  let token = req.headers.token;
  const JwtVerify = async (token) => {
    try {
      let { id } = await jwt.verify(token, process.env.SECRET_KEY);
      if (id == 1) {
        return next();
      } else {
        return res.status(400).json({
          message: "Token adminniki emas",
        });
      }
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return res.status(400).json({
          message: "Token xato iltimos qayta login qiling!",
        });
      } else
        return res.status(400).json({
          message: "Token muddati tugagan iltimos qayda kiring!",
        });
    }
    return;
  };
  let data = await JwtVerify(token);
};

module.exports = { tokenAdminMdw };
