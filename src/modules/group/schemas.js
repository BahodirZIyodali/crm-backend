const fetchData = require("../../utils/pg");

const ALLGROUP = `select g.id as group_id,t.id as teacher_id,g.group_title,g.day_lesson,g.time_lesson,t.teacher_name,t.teacher_surname,t.teacher_tell,t.teacher_img from groups g Join teachers t ON g.teacher_id=t.id`;
const ONEGROUP = `select g.id as group_id,t.id as teacher_id,g.group_title,g.day_lesson,g.time_lesson,t.teacher_name,t.teacher_surname,t.teacher_tell,t.teacher_img from groups g Join teachers t ON g.teacher_id=t.id where g.id=$1`;

const POSTGROUP = `insert into groups (group_title,day_lesson,time_lesson,teacher_id,course_id) values($1,$2,$3,$4,$5) returning *`;
const DELETEGROUP = `delete from groups where id=$1 returning *`;
const UPDGROUP = `update groups set 
group_title = COALESCE($1,group_title),
day_lesson = COALESCE($2,day_lesson), 
time_lesson = COALESCE($3,time_lesson), 
teacher_id = COALESCE($4,teacher_id), 
course_id = COALESCE($5,course_id) where id = $6 returning *`;

const getGroup = () => fetchData(ALLGROUP);
const postGroup = (...params) => fetchData(POSTGROUP, params);
const deleteGroup = (...params) => fetchData(DELETEGROUP, params);
const updateGroup = (...params) => fetchData(UPDGROUP, params);
const getOneGroup = (...params) => fetchData(ONEGROUP, params);
const groupStudent = (...params) => fetchData(GROUPSTUDENT, params);

module.exports = {
  getGroup,
  postGroup,
  deleteGroup,
  updateGroup,
  getOneGroup,
  groupStudent,
};
