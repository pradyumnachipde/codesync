import { createRoom, joinRoom } from "../services/roomService.js";

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

export const joinRoomController = async (req, res) => {

    try {

        const { roomId } = req.body;

        const room = await joinRoom(
            roomId,
            req.user._id
        );

        return res.status(200).json(room);

    } catch (error) {

        return res.status(500).json({
            message: error.message
        });

    }

};