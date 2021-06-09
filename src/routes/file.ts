import express from "express";

import {
    uploadImage,
} from "../controllers/file";

import { authenticate } from "../middleware/auth";

const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

const fileRouter = express.Router();

fileRouter.post("/uploadImage", authenticate, uploadImage);

export default fileRouter;
