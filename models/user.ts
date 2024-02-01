import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  name: string;
  age?: number;
  email: string;
  password: string;
  image?: string;
  nickName: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    nickName: {
      type: String,
      required: true,
      min: 3,
      max: 50,
      unique: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 70,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "default.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
