const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const generateRoomId = () => {

    let roomId = "";

    for (let i = 0; i < 6; i++) {

        const randomIndex = Math.floor(
            Math.random() * CHARACTERS.length
        );

        roomId += CHARACTERS[randomIndex];
    }

    return roomId;
};

export default generateRoomId;