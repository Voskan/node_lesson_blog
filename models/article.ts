import mongoose, { Document, Schema } from "mongoose";

interface IArticle extends Document {
  title: string;
  content: string;
  image: string;
  author: Schema.Types.ObjectId;
  categories: Schema.Types.ObjectId[];
  comments: Schema.Types.ObjectId[];
  createdAt?: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<IArticle>({
  title: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
  content: {
    type: String,
    required: true,
    min: 100,
  },
  image: {
    type: String,
    default: "default.png",
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Article = mongoose.model<IArticle>("Article", articleSchema);
export default Article;
