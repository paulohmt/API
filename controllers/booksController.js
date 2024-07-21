const booksModel = require("../models/booksModel");

const getAllbooks = async (req, res) => {
  try {
    const books = await booksModel.getAllbooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getFindOnebooks = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await booksModel.getFindOne(id);
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const postBook = async (req, res) => {
  try {
    const books = await booksModel.post(req.body);
    return res.status(201).json(books);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    await booksModel.update(id, req.body);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
      await booksModel.delete(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };

module.exports = {
  getAllbooks,
  getFindOnebooks,
  postBook,
  updateBook,
  deleteBook
};
