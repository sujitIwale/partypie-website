const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json({ extended: false }));
// Connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/api/addenquiries", require("./routes/enquiries"));
app.use("/api/getenquiries", require("./routes/getenquiries"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`on the port ${PORT}`);
});
