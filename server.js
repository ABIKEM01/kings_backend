const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const { contact } = require("./contact");

app.get("/", (req, res) => {
  res.send("Welcome to backend of KingsKid Hospital");
});

app.post("/api/contact", contact);
app.listen(4000, () => {
  console.log("Express server started at port : 4000");
});
