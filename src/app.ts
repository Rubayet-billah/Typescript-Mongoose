import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

// initialize app
const app: Application = express();
// use cors
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;
