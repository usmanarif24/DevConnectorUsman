const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
