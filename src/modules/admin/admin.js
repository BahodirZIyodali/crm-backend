const { postAdmin } = require("./schemas");
const jwt =require("jsonwebtoken")

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const response = await postAdmin(
      username
    );
    if(response.length !==1){
        res.status(400).json({message:"admin note found"})
    }
    if(response[0]?.password !== password){
        res.status(400).json({ message: "password invalid" });
    }
      let token = await jwt.sign(
        { id: response[0].id },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );
      res.status(200).json({message:"loged!!!",token})
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "admin note found" });
  }
};

module.exports = {
  login,
};
