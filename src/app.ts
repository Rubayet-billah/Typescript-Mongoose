import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

// initialize app
const app: Application = express();
// use cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// creating interface

interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  role: string;
  password: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

export default app;

/**
 * create interface
 * crate schema
 * create model
 * database query
 */
