const Joi = require("joi");

//teacher validate
const groupVal = (data) => {
  const schema = Joi.object({
    group_title: Joi.string().min(3).max(50).required(),
    day_lesson: Joi.string().min(3).max(50).required(),
    time_lesson: Joi.string().min(3).required(),
    teacher_id: Joi.number().required(),
    course_id: Joi.number().required()
  });
  return schema.validate(data);
};

//teacher Update validate

const groupUpdateVal = (data) => {
  const schema = Joi.object({
    group_title: Joi.string().min(3).max(50),
    day_lesson: Joi.string().min(3).max(50),
    time_lesson: Joi.string().min(3),
    teacher_id: Joi.string(),
    course_id: Joi.string(),
  });
  return schema.validate(data);
};

module.exports = {
  groupVal,
  groupUpdateVal,
};
