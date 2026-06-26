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