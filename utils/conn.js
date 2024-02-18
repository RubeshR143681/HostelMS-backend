const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI =
  // "mongodb+srv://rubeshr81:@cluster0.u9azvrl.mongodb.net/?retryWrites=true&w=majority";
  "mongodb+srv://rubeshr81:OMmAQuLcb0K7ZiXr@cluster0.u9azvrl.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
