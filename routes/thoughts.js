const router = require("express").Router();

const {
  getThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
} = require("../controllers/thought-controllers");

router.route("/").get(getThought).post(addThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
