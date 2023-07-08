const { groupVal, groupUpdateVal } = require("../validation/groupVal");

//teacher Mdw
const groupMdw = (req, res, next) => {
  try {
    let { error } = groupVal(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

//teacher update Mdw
const groupUpdateMdw = (req, res, next) => {
  try {
    let { error } = groupUpdateVal(req.body);
    if (error) {
      console.log(error);
      return res.status(400).json({ message: error.details[0].message });
    }
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  groupMdw,
  groupUpdateMdw,
};
