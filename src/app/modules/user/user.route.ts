import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.get("/admin", getAdminUsers);
router.post("/post", createUser);

export default router;
