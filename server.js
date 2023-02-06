import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./db.js";
import colors from "colors";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
import { Contact, getContact } from "./contact.js";

app.get("/", (req, res) => {
  res.send("Welcome to backend of KingsKid Hospital");
});
app.post("/api/user/contactus", Contact);
app.get("/api/user/contactus", getContact);

const start = async (port) => {
  try {
    const conn = await connectDB();
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("server is running".bgCyan);
    });

    console.log(
      `Database is up and running on ${conn.connection.host}`.bgGreen.underline
    );
  } catch (err) {
    console.log(`${err}`.bgRed.underline);
  }
};

const PORT = process.env.PORT || 4000;
4000;

start(PORT);
