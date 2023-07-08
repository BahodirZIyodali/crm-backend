const Joi = require("joi");

const studentVal = (data) => {
  const schema = Joi.object({
    student_name: Joi.string().min(3).required(),
    student_surname: Joi.string().min(3).required(),
    parents_name: Joi.string().min(3).required(),
    student_tel_nomer: Joi.number().min(100000000).required(),
    parents_tel_nomer: Joi.number().min(100000000).required(),
    student_img:Joi.string().min(3).required(),
    group_id:Joi.number().required(),
  });
  return schema.validate(data);
};

const studentUpdateVal = (data) => {
  const schema = Joi.object({
    student_name: Joi.string().min(3),
    student_surname: Joi.string().min(3),
    parents_name: Joi.string().min(3),
    student_tel_nomer: Joi.number().min(100000000),
    parents_tel_nomer: Joi.number().min(100000000),
    student_img: Joi.string().min(3),
    group_id: Joi.number(),
  });
  return schema.validate(data);
};

module.exports = {
  studentVal,
  studentUpdateVal,
};
