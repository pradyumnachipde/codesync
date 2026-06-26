import Room from "../models/Room.js";
import generateRoomId from "../helpers/generateRoomId.js";

export const generateUniqueRoomId = async () => {

    let roomId;
    let exists = true;

    while (exists) {

        roomId = generateRoomId();

        exists = await Room.findOne({ roomId });

    }

    return roomId;
};

export const createRoom = async (ownerId) => {

    const roomId = await generateUniqueRoomId();

    const room = await Room.create({
        roomId,
        owner: ownerId,
        participants: [
            {
                user: ownerId
            }
        ]
    });

    return room;
};

export const joinRoom = async (roomId, userId) => {

    const room = await Room.findOne({ roomId });

    if (!room) {
        throw new Error("Room not found");
    }

    const alreadyJoined = room.participants.some(
        participant => participant.user.toString() === userId.toString()
    );

    if (!alreadyJoined) {

        room.participants.push({
            user: userId
        });

        await room.save();
    }

    return room;

};

export const getRoomDetails = async (roomId) => {

    const room = await Room.findOne({ roomId })
        .populate("owner", "name email")
        .populate("participants.user", "name email");

    if (!room) {
        throw new Error("Room not found");
    }

    return room;

};

export const deleteRoom = async (roomId, userId) => {

    const room = await Room.findOne({ roomId });

    if (!room) {
        throw new Error("Room not found");
    }

    if (room.owner.toString() !== userId.toString()) {
        throw new Error("You are not authorized to delete this room");
    }

    await Room.deleteOne({ roomId });

    return {
        message: "Room deleted successfully"
    };

};