const fetchData = require("../../utils/pg");

const ALLTEACHERS = `select * from teachers`;
const ONETEACHER = `select * from teachers where id=$1`;
const CREATETEACHER = `insert into teachers (teacher_name, teacher_surname, teacher_tell, teacher_img) values($1, $2,$3, $4) returning *`;
const UPDATETEACHER = `update 
teachers 
set 
teacher_name = COALESCE($1,teacher_name), 
teacher_surname = COALESCE($2,teacher_surname), 
teacher_tell = COALESCE($3,teacher_tell), 
teacher_img = COALESCE($4,teacher_img) 
where id = $5 returning *`;
const DELETEATEACHER = `delete  FROM teachers where id = $1 returning *`;

const allTeachers = () => fetchData(ALLTEACHERS);
const postTeacher = (...params) => fetchData(CREATETEACHER, params);
const getOneTeacher = (...params) => fetchData(ONETEACHER, params);
const updateTeacher = (...params) => fetchData(UPDATETEACHER, params);
const deleteTeacher = (...params) => fetchData(DELETEATEACHER, params);

module.exports = {
  allTeachers,
  postTeacher,
  updateTeacher,
  deleteTeacher,
  getOneTeacher
};
