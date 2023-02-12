const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = 4000;

const app = express();
app.listen(PORT);

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ extended: true }));
app.use(express.static(path.resolve(__dirname, "client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

console.log(`server has been started on port ${PORT}`);
