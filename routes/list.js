const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.render("employee/list", { list: docs });
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
