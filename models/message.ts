import mongoose, { Document, Schema } from "mongoose";

interface IMessage extends Document {
  content: string;
  sender: string;
  receiver: string;
}

const MessageSchema = new Schema<IMessage>(
  {
    content: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: true,
    },
    receiver: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
