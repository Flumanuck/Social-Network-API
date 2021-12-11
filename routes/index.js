const router = require("express").Router();
const thoughtsRouter = require("./thoughts");
const userRouter = require("./user");

router.use("/thoughts", thoughtsRouter);
router.use("/users", userRouter);

module.exports = router;
