const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routes/authRoutes");
const orgRoutes = require("./src/routes/orgRoutes");
const sequelize = require("./src/config");

const app = express();

app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/api/organisations", orgRoutes);

const PORT = process.env.PORT || 3000;
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
