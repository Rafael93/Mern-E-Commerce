const User = require("../models/user.model");
module.exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    res.status(200);
    res.json(user);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200);
    res.json(updatedUser);
  } catch (error) {
    res.status(500);
    res.json(error.message);
  }
};

module.exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.deleteOne({ _id: id });
    res.status(200);
    res.json(deletedUser);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
