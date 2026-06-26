import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
    createRoomController,
    joinRoomController
} from "../controllers/roomController.js";

const router = express.Router();

router.post("/create", protect, createRoomController);

router.post("/join", protect, joinRoomController);

export default router;