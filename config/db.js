const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

var connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
