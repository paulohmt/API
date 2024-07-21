const pool = require("../config/database");

//Todas as minhas Querys como Array!
const querys = [
  "SELECT * FROM books",
  "SELECT * FROM books WHERE id = $1",
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
  "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4",
  "DELETE FROM users WHERE id = $1",
];

module.exports = {
  //Pegar Todos os users do banco de dados!
  async getAllbooks() {
    const client = await pool.connect();
    const user = await client.query(querys[0]);
    return user.rows;
  },
};