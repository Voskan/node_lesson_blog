import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("your db url");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
