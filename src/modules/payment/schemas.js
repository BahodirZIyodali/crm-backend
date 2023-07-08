const fetchData = require("../../utils/pg");


const POSTPAYMENT = `insert into payment (student_id) values($1) returning *`;
const GETMONTHPAYMENT = `select p.id,s.student_name,s.student_surname,s.student_tel_nomer,g.group_title from payment p
Join students s ON p.student_id=s.id
Join groups g ON s.group_id=g.id
 where date BETWEEN $1 AND $2`;
const STUDENTGROUPPAYMENT = `select s.id,p.date from groups g 
Join students s ON g.id=s.group_id
Join payment p ON p.student_id=s.id
where g.id=$1 and p.date BETWEEN $2 AND $3`;





const postPayment = (...params) => fetchData(POSTPAYMENT, params);
const getPayment = (...params) => fetchData(GETMONTHPAYMENT, params);
const paymentStudentGroup = (...params) => fetchData(STUDENTGROUPPAYMENT, params);
module.exports = {
  postPayment,
  getPayment,
  paymentStudentGroup,
};
