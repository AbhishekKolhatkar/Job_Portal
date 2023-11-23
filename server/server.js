const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const dbConfig = require("./config/db");
app.use(express.json());

const jobsRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/usersRoute");

app.use("/api/jobs/", jobsRoute);

app.use("/api/users/", userRoute);

//deployment config

const path = require("path");
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Node JS Server Started at ${port}`));
