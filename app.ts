import express, { Request, Response, NextFunction } from "express";
import connectDB from "./lib/db";
import { categoriesRouter } from "./controllers/categories";
import { swaggerRouter } from "./controllers/swagger";

connectDB();

const app = express();
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("Request URL: ", req.originalUrl);
  console.log("Request Method: ", req.method);
  next();
});

app.use("/api/categories", categoriesRouter);
app.use("/swagger", swaggerRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
