const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const local = "mongodb://127.0.0.1:27017/Assignment_CRO102";

const connect = async () => {
  try {
    await mongoose.connect(local, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};

module.exports = { connect };
