const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log("middleware log");
  next();
};

const myLogger2 = (req, res, next) => {
  console.log("middleware log 2");
  next();
};

app.use(express.static("public"));
app.use(myLogger);
app.use(myLogger2);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "template/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
