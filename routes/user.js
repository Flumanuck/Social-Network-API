const router = require("express").Router();

const {
  getUser,
  getUserById,
  addUser,
  updateUser,
  removeUser,
} = require("../controllers/user-controllers");

router.route("/").get(getUser).post(addUser);

router.route("/:userId").get(getUserById).put(updateUser).delete(removeUser);

module.exports = router;
