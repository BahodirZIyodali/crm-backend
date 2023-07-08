const Joi=require("joi");


//teacher validate
const teacherVal=(data)=>{
    const schema = Joi.object({
      teacher_name: Joi.string().min(3).max(50).required(),
      teacher_surname: Joi.string().min(3).max(50).required(),
      teacher_tell: Joi.number().min(100000000).required(),
      teacher_img: Joi.string().min(5).required(),
    });
   return schema.validate(data)
};

//teacher Update validate

const teacherUpdateVal=(data)=>{{
    const schema = Joi.object({
      teacher_name: Joi.string().min(3).max(50),
      teacher_surname: Joi.string().min(3).max(50),
      teacher_tell: Joi.number().min(100000000),
      teacher_img: Joi.string().min(5),
    });
    return schema.validate(data)
}}

module.exports = {
  teacherVal,
  teacherUpdateVal,
};