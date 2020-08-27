const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
};

module.exports = connect;
