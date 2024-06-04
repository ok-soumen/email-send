const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json({ limit: '20mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => {
  res.send("I am a server");
});

app.post("/send-mail", sendMail);




