import express from "express";
import {
  login,
} from "../controllers/auth";
import { authenticate } from "../middleware/auth";

const authRouter = express.Router();

authRouter.post("/login", login);

export default authRouter;
