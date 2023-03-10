import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const mongoURL = "mongodb://localhost:27017/user_crud";
    const conn = mongoose.connect(mongoURL);

    conn
      ? console.log("Mongo Connected")
      : console.error("Unable to connect mongo");
  } catch (error) {
    console.error(error);
  }
};
