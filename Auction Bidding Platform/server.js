// server.js
const connectDb = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const tasks = require("./routers/tasks");
const usertasks = require("./routers/usertasks");
const userProducts = require("./routers/userProducts");
const validateTransaction = require("./routers/validateTransaction");
const paymentRoutes = require("./routers/paymentRoutes");
const paymentcoins = require("./routers/paymentcoins");
const admin = require("./routers/admin");
//const authRoutes = require("./routers/authRoutes");

require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/details", tasks);
app.use("/api/v2", usertasks);
app.use("/api/v3", userProducts);
app.use("/api/v4", validateTransaction);
app.use("/", paymentRoutes);
app.use("/api/v5/payment", paymentcoins);
app.use("/api/v5/admin", admin);

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "./public/Home.html"));
});

const start = async () => {
  try {
    await connectDb(process.env.connect_url);
    app.listen(5501, () => {
      console.log("Running at 5501");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
