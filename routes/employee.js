const express = require("express");
const router = express.Router();
const Employee = require("../models/employee");
router.get("/", (req, res) => {
  res.render("employee/add", { viewTitle: "Insert Employee" });
});

router.post("/", async (req, res) => {
  const { fullName, email, mobile, city } = req.body;

  var employee = new Employee({
    fullName,
    email,
    mobile,
    city
  });

  await employee.save((err, doc) => {
    if (!err) {
      res.redirect("employee/list");
    } else {
      console.log(`error during insertion ${err}`);
    }
  });
});

// get method of update

router.get("/:id", (req, res) => {
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render("employee/edit", {
        viewTitle: "Update Employee",
        employee: doc
      });
    } else {
      console.log(err);
    }
  });
});

// post method of update

router.post("/:id", (req, res) => {
  // const { fullName, email, mobile, city } = req.body;
  Employee.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, doc) => {
      if (!err) {
        res.redirect("/employee/list");
      } else {
        console.log(err);
      }
    }
  );
});

// Delete route

router.get("/delete/:id", (req, res) => {
  Employee.findByIdAndRemove(
    req.params.id,
    { useFindAndModify: false },
    (err, doc) => {
      if (!err) {
        res.redirect("/employee/list");
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
