const router = require("express").Router();

const {
  getUser,
  getUserById,
  addUser,
  updateUser,
  removeUser,
  addFriend,
  removeFriend,
} = require("../controllers/user-controllers");

router.route("/").get(getUser).post(addUser);

router.route("/:userId").get(getUserById).put(updateUser).delete(removeUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
