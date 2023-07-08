const {teacherVal,teacherUpdateVal}=require("../validation/teacherVal");

//teacher Mdw
const teacherMdw=(req,res,next)=>{
    try {
        let { error } = teacherVal(req.body);
         if (error) {
           console.log(error);
           return res.status(400).json({ message: error.details[0].message });
         } 
         return next()
    } catch (error) {
        console.log(error.message);
    }
}

//teacher update Mdw
const teacherUpdateMdw=(req,res,next)=>{
    try {
        let { error } = teacherUpdateVal(req.body);
         if (error) {
           console.log(error);
           return res.status(400).json({ message: error.details[0].message });
         } 
         return next()
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
  teacherMdw,
  teacherUpdateMdw,
};