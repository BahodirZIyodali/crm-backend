const {  loginVal } = require("../validation/loginVal");

const loginMdw = (req, res, next) => {
  try {
    let { error } = loginVal(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginMdw
};
