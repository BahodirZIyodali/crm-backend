const {
  allTeachers,
  postTeacher,
  updateTeacher,
  deleteTeacher,
  getOneTeacher
} = require("./schemas");

const getAllTeachers = async (req, res) => {
  try {
    const dataTeachers = await allTeachers();
    if (dataTeachers.length == 0) {
      res.json({ message: "Teacher note found"});
    }
    res.status(200).json(dataTeachers);
  } catch (err) {
    console.log(err);
  }
};

const postCreateTeachers = async (req, res) => {
  try {
    const { teacher_name, teacher_surname, teacher_tell, teacher_img } = req.body;
    const response = await postTeacher(teacher_name, teacher_surname, teacher_tell, teacher_img);
    res.status(200).json({message: "created",data:response});
  } catch (err) {
    res.status(400).json({ message: "teacher already exsist" });
  }
};

const putUpdateTeacher = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const { teacher_name, teacher_surname, teacher_tell, teacher_img } = req.body;
    const response = await updateTeacher(teacher_name, teacher_surname, teacher_tell, teacher_img, teacher_id);
    if (response.length==0){res.status(400).json({message: "teacher note found",});}
      res.status(201).json({message: "update" });
  } catch (err) {
    console.log(err);
  }
};

const deleteDeleteTeacher=async (req,res)=>{
  try {
    let {teacher_id}=req.params;
    let response = await deleteTeacher(teacher_id);
    if(response.length==0){res.status(200).json({msg: "teacher note found",});}
    res.status(200).json({
      msg:"deleted"
    })  
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllTeachers,
  postCreateTeachers,
  putUpdateTeacher,
  deleteDeleteTeacher,
};
