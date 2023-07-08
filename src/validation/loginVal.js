const Joi = require("joi");

//teacher validate
const loginVal = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(3).required()
  });
  return schema.validate(data);
};

module.exports = {
  loginVal
};
