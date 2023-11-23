import mongoose from "mongoose";

const userSChema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)
const User = mongoose.model('User', userSChema);

export default User;