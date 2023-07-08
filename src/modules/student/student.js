const {
  getStudents,
  deleteStudent,
  updateStudent,
  postStudent,
  studentsGroup,
} = require("./schemas");

const getAllStudents = async (req, res) => {
  try {
    const dataStudents = await getStudents();
    if (dataStudents.length == 0) {
      res.status(400).json("students note found");
    }
    res.status(200).json(dataStudents);
  } catch (err) {
    console.log(err);
  }
};

const postCreateStudent = async (req, res) => {
  try {
    const {
      student_name,
      student_surname,
      parents_name,
      student_tel_nomer,
      parents_tel_nomer,
      student_img,
      group_id
    } = req.body;
    const response = await postStudent(
      student_name,
      student_surname,
      parents_name,
      student_tel_nomer,
      parents_tel_nomer,
      student_img,
      group_id
    );
    res.status(200).json({ message: "created" });
  } catch (err) {
    res.status(400).json({ message: "student alredy exists" });
  }
};

const putUpdateStudent = async (req, res) => {
  try {
    const { student_id } = req.params;
    const {
      student_name,
      student_surname,
      parents_name,
      student_tel_nomer,
      parents_tel_nomer,
      student_img,
      group_id,
    } = req.body;
    const response = await updateStudent(
      student_name,
      student_surname,
      parents_name,
      student_tel_nomer,
      parents_tel_nomer,
      student_img,
      group_id,
      student_id
    );
    if (response.length == 0) {
      res.status(400).json({ message: "student note found" });
    }
    res.status(200).json({
      data: "update",
    });
  } catch (err) {}
};

const deleteDeletStudent = async (req, res) => {
  try {
    let { student_id } = req.params;
    let response = await deleteStudent(student_id);
    if (response.length !== 1) {
      res.status(400).json({ message: "student note found" });
    }
    res.status(200).json({ message: "deleted" });
  } catch (error) {}
};

const studentGroup = async (req, res) => {
  try {
    let { group_id } = req.params;
    let response = await studentsGroup(group_id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllStudents,
  postCreateStudent,
  putUpdateStudent,
  deleteDeletStudent,
  studentGroup,
};
