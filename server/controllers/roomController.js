import { createRoom } from "../services/roomService.js";

export const createRoomController = async (req, res) => {
    try {

        const room = await createRoom(req.user._id);

        return res.status(201).json(room);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }
};