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