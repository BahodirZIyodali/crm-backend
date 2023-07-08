const {courseUpdateVal,courseVal}=require("../validation/courseVal");

const courseMdw=(req,res,next)=>{
    try {
        let {error}=courseVal(req.body);
        if(error){
          console.log(error);
          return res.json({ message: error.details[0].message });  
        }
        return next()    
    } catch (error) {
        console.log(error);
        
    }
}
const courseUpdateMdw=(req,res,next)=>{
    try {
        let { error } = courseUpdateVal(req.body);
        if(error){
          console.log(error);
          return res.json({ message: error.details[0].message });  
        }
        return next()    
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    courseMdw,
    courseUpdateMdw
}