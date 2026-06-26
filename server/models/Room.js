import mongoose from "mongoose";

const participantSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        joinedAt: {
            type: Date,
            default: Date.now
        }
    },
    { _id: false }
);

const roomSchema = new mongoose.Schema(
    {
        roomId: {
            type: String,
            required: true,
            unique: true
        },

        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        participants: [participantSchema],

        language: {
            type: String,
            enum: ["cpp", "java", "python", "javascript"],
            default: "cpp"
        },

        code: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;