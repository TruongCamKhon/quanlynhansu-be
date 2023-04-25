const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const employeeRoutes = require("./routes/employee");
const positionRoutes = require("./routes/position");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => console.log("Connected to MongoDB Cloud"));

app.use("/api", employeeRoutes);
app.use("/api", positionRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
