import express, { Request, Response } from "express";
import Category from "../models/category";
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;

  const existingCategory = await Category.findOne({ name });

  if (existingCategory) {
    return res.status(400).json({ message: "Category already exists" });
  }

  const newCategory = new Category({ name });
  await newCategory.save();

  res.json(newCategory);
});

router.get("/", async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json(categories);
});

export { router as categoriesRouter };
