const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model("Employee", employeeSchema);
