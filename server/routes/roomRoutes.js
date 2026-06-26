import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
    createRoomController
} from "../controllers/roomController.js";

const router = express.Router();

router.post("/create", protect, createRoomController);

export default router;