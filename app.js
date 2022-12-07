const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.static(path.reslove(__dirname, "./portfolio/boild")));
app.use("/api", require("./Handlers/EmailHandler"));
app.get("/testing", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Message has been sent successfully" });
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./portfolio/build", "indx.html"));
});
module.exports = app;
