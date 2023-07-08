const Joi = require("joi");

//teacher validate
const paymentVal = (data) => {
  const schema = Joi.object({
    group_id: Joi.number().min(0).required(),
    student_id: Joi.number().min(0).required(),
  });
  return schema.validate(data);
};

module.exports = {
  paymentVal,
};
