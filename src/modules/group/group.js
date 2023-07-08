
const {
  getGroup,
  postGroup,
  deleteGroup,
  updateGroup,
  getOneGroup,
  groupStudent,
} = require("./schemas");

const getAllGroup = async (req, res) => {
  try {
    const dataGroups = await getGroup();
    if (dataGroups.length == 0) {
      res.status(400).json("group note found");
    }
    res.status(200).json(dataGroups);
  } catch (err) {
    console.log(err);
  }
};

const postCreateGroup = async (req, res) => {
  try {
    const { group_title, day_lesson, time_lesson, teacher_id, course_id } =
      req.body;
    const response = await postGroup(
      group_title,
      day_lesson,
      time_lesson,
      teacher_id,
      course_id
    );
    res.status(200).json({message:"created"});
  } catch (err) {
    res.status(400).json({message:"group alredy exists"});
  }
};

const putUpdateGroup = async (req, res) => {
  try {
    const { group_id } = req.params;
    const { group_title, day_lesson, time_lesson, teacher_id, course_id } =
      req.body;
    const response = await updateGroup(
      group_title,
      day_lesson,
      time_lesson,
      teacher_id,
      course_id,
      group_id
    );
    if (response.length==0){res.status(400).json({message:"group note found"})}
      res.status(200).json({
        data: "update",
      });
  } catch (err) {}
};

const deleteDeletGroup = async (req, res) => {
  try {
    let { group_id } = req.params;
    let response = await deleteGroup(group_id);
    if (response.length !== 1) {
      res.status(400).json({message: "group note found",});
    }
    res.status(200).json({message: "deleted",});
  } catch (error) {}
};

const oneGroup = async (req, res) => {
  try {
    let { group_id } = req.params;
    let response = await getOneGroup(group_id);
    if (response.length !== 1) {
      res.status(400).json({message: "group node found"});
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
const getGroupStudent = async (req, res) => {
  try {
    let { group_id } = req.params;
    let response = await groupStudent(group_id);
    if (response.length !== 1) {
      res.status(400).json({message: "group node found"});
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllGroup,
  postCreateGroup,
  putUpdateGroup,
  deleteDeletGroup,
  oneGroup,
  getGroupStudent,
};