const { registerUser, loginUser } = require("../models/authModel");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const result = await registerUser(name, email, password);
  if (result.success) {
    res.json({ success: true, message: "User registered successfully" });
  } else {
    res.json({ success: false, message: result.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUser(email, password);
  if (result.success) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.json({ success: false, message: result.message });
  }
};
