import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

// import routes
import userRoutes from "./app/modules/user/user.route";

// initialize app
const app: Application = express();
// use cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", userRoutes);
app.use("/api/v1/user", userRoutes);

export default app;

/**
 * create interface
 * crate schema
 * create model
 * database query
 */
