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
router.get("/books", getAllbooks);
router.get("/books/:id", getFindOnebooks);

module.exports = router;


//teste