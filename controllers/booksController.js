const booksModel = require("../models/booksModel");

const getAllbooks = async (req, res) => {
  try {
    const books = await booksModel.getAllbooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllbooks
};