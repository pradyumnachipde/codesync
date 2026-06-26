import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
    createRoomController,
    joinRoomController,
    getRoomController,
} from "../controllers/roomController.js";

const router = express.Router();

router.post("/create", protect, createRoomController);

router.post("/join", protect, joinRoomController);

router.get("/:roomId", protect, getRoomController);

export default router;