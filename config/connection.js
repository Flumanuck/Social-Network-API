const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/socialdb", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
