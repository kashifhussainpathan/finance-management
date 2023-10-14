require("./db/db.connect.js");

const fs = require("fs");
const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");

const expenseRouter = require("./routers/expense.router.js");
const incomeRouter = require("./routers/income.router.js");
const savingsRouter = require("./routers/savings.router.js");

dotenv.config({ path: "./config.env" });

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/expense", expenseRouter);
app.use("/income", incomeRouter);
app.use("/savings", savingsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Route not Found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
});
