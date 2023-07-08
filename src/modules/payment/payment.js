const { postPayment, getPayment, paymentStudentGroup } = require("./schemas");



const getMonthPayment=async (req,res)=>{
  let {start,end}=req.body;
  console.log(start,end);
  try {
    const result = await getPayment(start,end);
    console.log(result);
    res.status(200).json(result) 
  } catch (error) {
    console.log(error);
    
  }
}

const getPaymentStudentGroup = async (req, res) => {
  let { group_id,start, end } = req.body;
  console.log(group_id, start, end);
  try {
    const result = await paymentStudentGroup(group_id,start, end);
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const postCreatePayment = async (req, res) => {
  try {
    const {
      student_id
    } = req.body;
    console.log(student_id);
    const response = await postPayment(student_id);
    if(response.length !==1){
        res.status(400).json({ message: "student tolovi amalga oshirilmadi" });
    }
    res.status(200).json({ message: "tolov amalga oshirildi" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "student note found" });
  }
};




module.exports = {
  postCreatePayment,
  getMonthPayment,
  getPaymentStudentGroup,
};
