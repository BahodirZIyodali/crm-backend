const { Pool } = require("pg");
const connection = require("../../config/connection");

const pool = new Pool({
  connectionString: connection.connectionString,
});

const fetchData = async (SQL, dataArray) => {
  const client = await pool.connect();
  try {
    const { rows } = await client.query(SQL, dataArray?.length ? dataArray : null);
    return rows;
  } finally {
    client.release();
  }
};

module.exports = fetchData;
