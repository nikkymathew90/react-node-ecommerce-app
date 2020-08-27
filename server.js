const express = require("express");
const app = express();
const { json, urlencoded } = require("body-parser");
const cookieParser = require("cookie-parser");
const connect = require("./utils/db");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

//import routes

const userRoute = require("./user/user.router");

require("dotenv").config();

// routes middleware

app.use(json());
app.use(morgan("dev"));
app.use("/api", userRoute);

const start = async () => {
  try {
    await connect().then(() => console.log("DB Connected"));
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
};

/*mongoose.connection.on("error", err => {
  console.log(`DB connection error: ${err.message}`);
});*/

module.exports = start;
