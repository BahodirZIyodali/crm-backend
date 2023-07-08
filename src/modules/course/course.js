const {
  getCourse,
  postCourse,
  deleteCourse,
  updateCourse,
  getOneCourse,
} = require("./schemas");

const getAllCourse = async (req, res) => {
  try {
    let response = await getCourse();
    res.json(response);
  } catch (err) {
    res.json({ message: "course note found" });
    console.log(err);
  }
};

const postCreateCourse = async (req, res) => {
  try {
    const { course_title } = req.body;
    const response = await postCourse(course_title);
    res.json({ message: "create" });
  } catch (err) {
    res.json({ message:"course already existis" });
  }
};

const deleteDeletCourse = async (req, res) => {
  try {
    let { course_id } = req.params;
    const response = await deleteCourse(course_id);
    if(response.length==0){return res.json({msg:"course not found"})};
    res.json({ message: "deleted" });
  } catch (error) {
    console.log(error);
  }
};

const putUpdateCourse = async (req, res) => {
  try {
    let { course_id } = req.params;
    let { course_title } = req.body;
    const response= await updateCourse(
      course_title,
      course_id,
    );
    if(response.length==0){res.json({ message: "course note found" });}
    res.json({ message: "update" });
  } catch (error) {}
};

module.exports = {
  getAllCourse,
  postCreateCourse,
  putUpdateCourse,
  deleteDeletCourse,
};
