const express = require("express");
var app = express();
const path = require("path");
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connectDB = require("./config/db");
connectDB();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.get("/", (req, res) => {
  res.redirect("/employee");
});

app.use("/employee/list", require("./routes/list"));
app.use("/employee", require("./routes/employee"));

var PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
