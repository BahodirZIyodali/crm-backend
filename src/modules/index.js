const router = require("express").Router();
const { teacherMdw, teacherUpdateMdw } = require("../middlewares/teacherMdw");
const { courseMdw, courseUpdateMdw } = require("../middlewares/courseMdw");
const { groupMdw, groupUpdateMdw } = require("../middlewares/groupMdw");
const { studentMdw, studentUpdateMdw } = require("../middlewares/studentMdw");
const { tokenAdminMdw } = require("../middlewares/tokenMdw");
const { loginMdw } = require("../middlewares/loginMdw");
const { paymantMdw } = require("../middlewares/paymantMdw");

const {login}=require("./admin/admin")

const {
  getAllTeachers,
  postCreateTeachers,
  putUpdateTeacher,
  deleteDeleteTeacher,
} = require("./teachers/teachers");

const {
  getAllCourse,
  postCreateCourse,
  putUpdateCourse,
  deleteDeletCourse,
} = require("./course/course");

const {
  getAllGroup,
  postCreateGroup,
  putUpdateGroup,
  deleteDeletGroup,
  oneGroup,
  getGroupStudent,
} = require("./group/group");

const {
  getAllStudents,
  postCreateStudent,
  putUpdateStudent,
  deleteDeletStudent,
  studentGroup,
} = require("./student/student");

const { postCreateAttendance ,getNotAttendance} = require("./attendance/attendance");

const {
  postCreatePayment,
  getMonthPayment,
  getPaymentStudentGroup,
} = require("./payment/payment");


router.post("/login", loginMdw,login);


router.get("/teachers", tokenAdminMdw, getAllTeachers);
router.post("/teacher", tokenAdminMdw, teacherMdw, postCreateTeachers);
router.put(
  "/teacher/:teacher_id",
  tokenAdminMdw,
  teacherUpdateMdw,
  putUpdateTeacher
);
router.delete("/teacher/:teacher_id", tokenAdminMdw, deleteDeleteTeacher);


router.get("/course", tokenAdminMdw, getAllCourse);
router.post("/course", tokenAdminMdw, courseMdw, postCreateCourse);
router.delete("/course/:course_id", tokenAdminMdw, deleteDeletCourse);
router.put(
  "/course/:course_id",
  tokenAdminMdw,
  courseUpdateMdw,
  putUpdateCourse
);


router.get("/group",tokenAdminMdw, getAllGroup);
router.post("/group", tokenAdminMdw, groupMdw, postCreateGroup);
router.delete("/group/:group_id", tokenAdminMdw, deleteDeletGroup);
router.get("/group/:group_id", tokenAdminMdw, oneGroup);
router.get("/group-student/:group_id", getGroupStudent);
router.put("/group/:group_id", tokenAdminMdw, groupUpdateMdw, putUpdateGroup);


router.get("/student", tokenAdminMdw, getAllStudents);
router.post("/student", tokenAdminMdw, studentMdw, postCreateStudent);
router.delete("/student/:student_id", tokenAdminMdw, deleteDeletStudent);
router.get("/student/:group_id", tokenAdminMdw, studentGroup);
router.put(
  "/student/:student_id",
  tokenAdminMdw,
  studentUpdateMdw,
  putUpdateStudent
  );
  
  
  router.post("/payment", postCreatePayment);
  router.post("/paid", tokenAdminMdw, getMonthPayment);
  router.post("/grouppayment", getPaymentStudentGroup);

  router.post("/attendance", postCreateAttendance);
  router.post("/attendancenot", getNotAttendance);


  

module.exports = router;
