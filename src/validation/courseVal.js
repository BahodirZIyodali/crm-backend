const Joi=require("joi");

const courseVal=(data)=>{
    const schema=Joi.object({
        course_title:Joi.string().min(3).required()
    })
    return schema.validate(data)
}

const courseUpdateVal=(data)=>{
    const schema=Joi.object({
        course_title:Joi.string().min(3)
    })
    return schema.validate(data)
}

module.exports={
    courseUpdateVal,
    courseVal
}