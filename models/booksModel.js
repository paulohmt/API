const pool = require("../config/database");

//Todas as minhas Querys como Array!
const querys = [
  "SELECT * FROM books",
  "SELECT * FROM books WHERE id = $1",
  "INSERT INTO books (nome, descricao, autor) VALUES ($1, $2, $3) RETURNING *",
  "UPDATE books SET nome = $1, descricao = $2, autor= $3 WHERE id = $4",
  "DELETE FROM books WHERE id = $1",
];

module.exports = {
  //Pegar Todos os users do banco de dados!
  async getAllbooks() {
    const client = await pool.connect();
    const user = await client.query(querys[0]);
    return user.rows;
  },

  //Pegar apenas um user do banco de dados!
  async getFindOne(id) {
    const client = await pool.connect();
    try {
      const books = await client.query(querys[1], [id]);
      return books.rows; // Supondo que você queira apenas as linhas retornadas pela consulta
    } catch (error) {
      throw error;
    } finally {
      client.release();
    }
  },

  //Cadastrar user no banco de dados!
  async post(books) {
    const { nome, descricao, autor } = books;
    try {
      const client = await pool.connect();
      const result = await client.query(querys[2], [nome, descricao, autor]);
      client.release();
      return { success: true, books: result.rows[0] };
    } catch (error) {
      return { success: false, message: "Erro de registro" };
    }
  },
};
