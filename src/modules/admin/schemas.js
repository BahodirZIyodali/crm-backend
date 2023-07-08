const fetchData = require("../../utils/pg");

const LOGINADMIIN = `select * from admin  where username= $1`;


const postAdmin = (...params) => fetchData(LOGINADMIIN, params);

module.exports = {
  postAdmin
};
