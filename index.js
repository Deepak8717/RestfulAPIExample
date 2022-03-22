require("dotenv").config();
const express = require("express");
const { route } = require("express/lib/application");
const mongoose = require("mongoose");
const routes = require("../RestApis/routes/routes");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Databse Connected");
});
const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(3000, () => {
  console.log("server started at port 3000: https//localhost:3000");
});
