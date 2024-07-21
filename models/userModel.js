const pool = require("../config/database");

//Todas as minhas Querys como Array!
const querys = [
  "SELECT * FROM users",
  "SELECT * FROM users WHERE id = $1",
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
  "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4",
  "DELETE FROM users WHERE id = $1",
];

module.exports = {
  //Pegar Todos os users do banco de dados!
  async getAllusers() {
    const client = await pool.connect();
    const user = await client.query(querys[0]);
    return user.rows;
  },

  //Pegar apenas um user do banco de dados!
  async getFindOne(id) {
    const client = await pool.connect();
    try {
      const user = await client.query(querys[1], [id]);
      return user.rows; // Supondo que você queira apenas as linhas retornadas pela consulta
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  },

  //Cadastrar user no banco de dados!
  async post(user) {
    const { name, email, password } = user;
    try {
      const client = await pool.connect();
      const result = await client.query(querys[2], [name, email, password]);
      client.release();
      return { success: true, user: result.rows[0] };
    } catch (err) {
      return { success: false, message: "Erro de registro" };
    }
  },

  //Atualizar user do banco de dados!
  async update(id, user) {
    const { name, email, password } = user;
    const client = await pool.connect();
    try {
      const res = await client.query(querys[3], [name, email, password, id]);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  },

  //Apagar user do banco de dados!
  async delete(id) {
    const client = await pool.connect();
    try {
      const res = await client.query(querys[4], [id]);
      return res.rows[0];
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  },
};
