const express = require("express");
const router = express.Router();

//Enpoint conecta com a rota Import e o Importa da rota se conecta com os Controllers
//E os Controllers conecta com os Models
//E os Models conecta com o Banco(Config)

// Import Login and Register
const { login, register } = require("../controllers/authController");

// Import Users
const {
  getAllusers,
  getFindOneusers,
  postUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

// Import Books
const {
  getAllbooks,
  getFindOnebooks,
  postBook,
  updateBook,
  deleteBook
} = require("../controllers/booksController");

//Endpoints Login and Register
router.post("/register", register); 
router.post("/login", login);

//Endpoint Users
router.get("/users", getAllusers); 
router.get("/user/:id", getFindOneusers);
router.post("/user", postUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

// Endpoint Books
router.get("/books", getAllbooks); // puxa tudo 
router.get("/books/:id", getFindOnebooks); // puxa apenas um id
router.post("/book", postBook); // incrementa informacoes nas tabelas
router.put("/book/:id", updateBook); // atualiza o id selecionado
router.delete("/book/:id", deleteBook); // deleta o id selecionado

module.exports = router;


//teste