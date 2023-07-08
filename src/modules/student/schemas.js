const fetchData = require("../../utils/pg");

const ALLSTUDENT = `select s.id,s.student_name,s.parents_name,s.student_tel_nomer,s.parents_tel_nomer,g.group_title,s.student_img
 from students s Join groups g ON g.id=s.group_id`;
const ONEGROUP = `select g.id as group_id,t.id as teacher_id,g.group_title,g.day_lesson,g.time_lesson,t.teacher_name,t.teacher_surname,t.teacher_tell,t.teacher_img from groups g Join teachers t ON g.teacher_id=t.id where g.id=$1`;
// const STUDENTGROUP = `select s.id  from students s Join groups g ON s.group_id=g.id where g.id=$1`;
const STUDENTGROUP = `select s.id as student_id,s.student_name,s.student_surname from groups g 
Join students s ON g.id=s.group_id
where g.id=$1`;
const POSTSTUDENT = `insert into students (student_name,student_surname,parents_name,student_tel_nomer,parents_tel_nomer,student_img,group_id) values($1,$2,$3,$4,$5,$6,$7) returning *`;
const DELETESTUDENT = `delete from students where id=$1 returning *`;
const UPDSTUDENT = `update students set 
student_name = COALESCE($1,student_name),
student_surname = COALESCE($2,student_surname), 
parents_name = COALESCE($3,parents_name), 
student_tel_nomer = COALESCE($4,student_tel_nomer), 
parents_tel_nomer = COALESCE($5,parents_tel_nomer), 
student_img = COALESCE($6,student_img), 
group_id = COALESCE($7,group_id) where id = $8 returning *`;

const getStudents = () => fetchData(ALLSTUDENT);
const postStudent = (...params) => fetchData(POSTSTUDENT, params);
const deleteStudent = (...params) => fetchData(DELETESTUDENT, params);
const updateStudent = (...params) => fetchData(UPDSTUDENT, params);
const studentsGroup = (...params) => fetchData(STUDENTGROUP, params);

module.exports = {
  getStudents,
  deleteStudent,
  updateStudent,
  postStudent,
  studentsGroup,
};
