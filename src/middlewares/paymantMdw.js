const jwt = require("jsonwebtoken");
const { paymentVal } = require("../validation/paymantVal");


//admin Mdw
const paymantMdw = async (req, res, next) => {
        try {
          let { error } = paymentVal(req.body);
          if (error) {
            console.log(error);
            return res.status(400).json({ message: error.details[0].message });
          }
          return next();
        } catch (error) {
          console.log(error);
        }
};

module.exports = { paymantMdw };
