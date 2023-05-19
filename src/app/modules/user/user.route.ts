import express from "express";
import { createUser, getUserById, getUsers } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/post", createUser);

export default router;
