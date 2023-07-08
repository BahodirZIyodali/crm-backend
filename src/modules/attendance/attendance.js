const { postAtendance, getAtendance } = require("./schemas");



const postCreateAttendance = async (req, res) => {
  try {
    const { student_id,attendance } = req.body;
    const response = await postAtendance(student_id, attendance);
    console.log(response);
    res.json({ message: "create" });
  } catch (err) {
    console.log(err);
  }
};

const getNotAttendance = async (req, res) => {
  try {
    const { date,group_id } = req.body;
    const response = await getAtendance(date, group_id);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};



module.exports = {
  postCreateAttendance,
  getNotAttendance,
};
