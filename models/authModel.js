const pool = require("../config/database");
exports.loginUser = async (email, password) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    client.release();
    if (result.rows.length > 0) {
      return { success: true, user: result.rows[0] };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  } catch (err) {
    return { success: false, message: "Error logging in" };
  }
};

exports.registerUser = async (name, email, password) => {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, password]
    );
    client.release();
    return { success: true, user: result.rows[0] };
  } catch (err) {
    return { success: false, message: "Error registering user" };
  }
};
