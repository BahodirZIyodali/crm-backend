const { studentVal, studentUpdateVal } = require("../validation/studentVal");

const studentMdw = (req, res, next) => {
  try {
    let { error } = studentVal(req.body);
    if (error) {
      console.log(error);
      return res.json({ message: error.details[0].message });
    }
    return next();
  } catch (error) {
    console.log(error);
  }
};
const studentUpdateMdw = (req, res, next) => {
  try {
    let { error } = studentUpdateVal(req.body);
    if (error) {
      console.log(error);
      return res.json({ message: error.details[0].message });
    }
    return next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  studentMdw,
  studentUpdateMdw,
};
