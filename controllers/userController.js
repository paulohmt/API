const userModel = require("../models/userModel");

const getAllusers = async (req, res) => {
  try {
    const users = await userModel.getAllusers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getFindOneusers = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getFindOne(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const postUser = async (req, res) => {
  try {
    const user = await userModel.post(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.update(id, req.body);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.delete(id);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllusers,
  getFindOneusers,
  postUser,
  deleteUser,
  updateUser,
};
