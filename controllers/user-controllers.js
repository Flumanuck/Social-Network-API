const { User } = require("../models");

const userController = {
  getUser(req, res) {
    User.find({})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  getUserById({ params }, res) {
    User.find({ _id: params.userId })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },
  addUser({ body }, res) {
    User.create(body)
      .then((newUser) => res.json(newUser))
      .catch((err) => res.json(err));
  },
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  removeUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then(() => res.json(`User ${params.userId} deleted`))
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
